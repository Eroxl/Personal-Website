#!/usr/bin/env python3

import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

"""
Build script that processes HTML files and replaces include tags
with the contents of referenced files.

Usage: python scripts/build.py

Looks for tags like: <!-- include: nav.html -->
and replaces them with the contents of the file.
"""

SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
SRC_DIR = PROJECT_ROOT / 'src'
BUILD_DIR = PROJECT_ROOT / 'dist'
INCLUDE_PATTERN = re.compile(r'<!--\s*include:\s*([^\s]+)\s*-->')


def is_html_module(file_path):
    """Check if a file is marked as an html-module"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            first_line = f.readline().strip()
            return 'html-module' in first_line.lower()
    except:
        return False


def get_html_files(directory):
    """Recursively get all HTML files in a directory, excluding html-modules"""
    html_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                file_path = Path(root) / file
                # Skip files marked as html-module
                if not is_html_module(file_path):
                    html_files.append(file_path)
    return html_files


def extract_head_and_body(html_content):
    """Extract head and body content from an HTML module"""
    head_pattern = re.compile(r'<head>(.*?)</head>', re.DOTALL | re.IGNORECASE)
    body_pattern = re.compile(r'<body>(.*?)</body>', re.DOTALL | re.IGNORECASE)
    
    head_match = head_pattern.search(html_content)
    body_match = body_pattern.search(html_content)
    
    head_content = head_match.group(1).strip() if head_match else ''
    body_content = body_match.group(1).strip() if body_match else html_content.strip()
    
    return head_content, body_content


def process_html_file(file_path, src_dir):
    """Process a single HTML file, replacing include tags with file contents"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    file_dir = file_path.parent
    processed_includes = set()
    collected_head_content = []
    
    def process_includes(text, current_dir, depth=0):
        """Recursively process includes"""
        if depth > 10:
            raise Exception('Maximum include depth exceeded (possible circular dependency)')
        
        def replace_include(match):
            include_path = match.group(1)
            
            # Resolve the include path relative to the current file
            resolved_path = (current_dir / include_path).resolve()
            
            # Check for circular dependencies
            if resolved_path in processed_includes:
                print(f'  ⚠️  Warning: Circular dependency detected for {include_path}')
                return match.group(0)
            
            # Check if file exists
            if not resolved_path.exists():
                print(f'  ✗ Error: Include file not found: {resolved_path}')
                return match.group(0)
            
            # Read and process the included file
            processed_includes.add(resolved_path)
            
            with open(resolved_path, 'r', encoding='utf-8') as f:
                include_content = f.read()
            
            include_dir = resolved_path.parent
            
            # Extract head and body from the included file
            head_content, body_content = extract_head_and_body(include_content)
            
            # Collect head content to be lifted
            if head_content:
                collected_head_content.append(head_content)
            
            # Recursively process includes in the body content
            processed_content = process_includes(body_content, include_dir, depth + 1)
            
            processed_includes.discard(resolved_path)
            
            print(f'  ✓ Included: {include_path}')
            return processed_content
        
        return INCLUDE_PATTERN.sub(replace_include, text)
    
    # Process all includes
    processed_content = process_includes(content, file_dir)
    
    # If there's collected head content, insert it into the parent's head
    if collected_head_content:
        head_pattern = re.compile(r'(</head>)', re.IGNORECASE)
        
        def insert_head_content(match):
            combined_head = '\n    '.join(collected_head_content)
            return f'\n    {combined_head}\n{match.group(1)}'
        
        processed_content = head_pattern.sub(insert_head_content, processed_content)
    
    return processed_content


def copy_directory(src, dest, exclude_html=False):
    """Recursively copy directory structure"""
    dest.mkdir(parents=True, exist_ok=True)
    
    for item in src.iterdir():
        src_path = src / item.name
        dest_path = dest / item.name
        
        if item.is_dir():
            copy_directory(src_path, dest_path, exclude_html)
        elif item.is_file():
            if exclude_html and item.name.endswith('.html') and item.name.endswith('.css'):
                continue  # Skip HTML files, they'll be processed separately
            # Skip html-module files
            if item.name.endswith('.html') and is_html_module(src_path):
                continue
            dest_path.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src_path, dest_path)


def build_css():
    """Build CSS with Tailwind"""
    print('🎨 Building CSS with Tailwind...')
    
    input_css = SRC_DIR / 'styles' / 'home.css'
    output_css = BUILD_DIR / 'styles' / 'home.css'
    
    # Ensure input CSS exists
    if not input_css.exists():
        print('  ⚠️  Warning: No input CSS file found, skipping CSS build')
        return
    
    # Ensure output directory exists
    output_css.parent.mkdir(parents=True, exist_ok=True)
    
    try:
        # Run through shell to inherit environment (nvm, etc.)
        # Properly quote paths to handle spaces
        result = subprocess.run(
            ['npx', '@tailwindcss/cli', '-i', str(input_css), '-o', str(output_css), '--minify'],
            cwd=PROJECT_ROOT,
            capture_output=True,
            text=True,
            shell=False,
            env=os.environ.copy()
        )
        
        if result.returncode != 0:
            print(f'  ✗ Error building CSS:')
            if result.stderr:
                print(f'     {result.stderr}')
            if result.stdout:
                print(f'     {result.stdout}')
            sys.exit(1)
        
        print(f'  ✓ CSS built successfully')
    except Exception as error:
        print(f'  ✗ Error running Tailwind: {error}')
        import traceback
        traceback.print_exc()
        sys.exit(1)


def build():
    """Main build function"""
    print('🔨 Building project...\n')
    
    # Clean build directory
    if BUILD_DIR.exists():
        shutil.rmtree(BUILD_DIR)
    BUILD_DIR.mkdir(parents=True, exist_ok=True)
    
    
    # Copy all non-HTML files
    print('\n📁 Copying assets...')
    copy_directory(SRC_DIR, BUILD_DIR, exclude_html=True)
    
    # Build CSS first
    build_css()

    # Process HTML files
    print('\n📄 Processing HTML files:')
    html_files = get_html_files(SRC_DIR)
    
    if not html_files:
        print('  No HTML files found.')
    
    for html_file in html_files:
        relative_path = html_file.relative_to(SRC_DIR)
        print(f'\n  Processing: {relative_path}')
        
        try:
            processed_content = process_html_file(html_file, SRC_DIR)
            output_path = BUILD_DIR / relative_path
            output_path.parent.mkdir(parents=True, exist_ok=True)
            
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(processed_content)
            
            print(f'  ✓ Built: {relative_path}')
        except Exception as error:
            print(f'  ✗ Error processing {relative_path}: {error}')
            sys.exit(1)
    
    print('\n✅ Build complete! Output in dist/\n')


if __name__ == '__main__':
    try:
        build()
    except Exception as error:
        print(f'Build failed: {error}')
        sys.exit(1)
