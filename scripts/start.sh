#!/bin/bash

# Trap SIGINT and SIGTERM to kill all child processes
trap 'kill $(jobs -p) 2>/dev/null' EXIT

# Initial build
python3 scripts/build.py

# Watch for HTML changes and rebuild
fswatch -o src/ -e ".*" -i "\\.html$" | while read f; do
  echo "🔄 HTML changes detected, rebuilding..."
  python3 scripts/build.py
done &

# Watch for CSS changes and rebuild just CSS (faster)
fswatch -o src/styles/ | while read f; do
  echo "🎨 CSS changes detected, rebuilding styles..."
  npx @tailwindcss/cli -i src/styles/input.css -o dist/styles/output.css --minify
done &

# Start HTTP server in dist directory
live-server ./dist/ --port=8080 --open=./index.html --watch=./dist/