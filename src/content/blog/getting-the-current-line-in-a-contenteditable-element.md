---
title: "Getting the Current Line in a ContentEditable Element"
description: "A guide to finding the line where the caret is located in a contenteditable element."
date: "2025-11-19"
tags: ["ContentEditable", "Caret Position", "Line Number"]
---

`contenteditable` elements don't behave like textareas. They look like text editors, they feel like text editors, but the moment you try to do anything programmatic with their contents you discover they're actually a fragment of the DOM with a caret floating somewhere inside it. There's no `selectionStart`. There's no `value`. There's no `rows`.

Getting the line the caret is currently on turns out to be harder than it has any right to be. This post is about why the obvious approaches fail and what actually works.

---

## The Problem

Say you're building a code editor, a rich text input, or anything that needs to respond to the caret's vertical position in a `contenteditable` element. You need to know two things: which line the caret is on, and what text is on that line.

Simple enough request. The DOM disagrees.

---

## What Doesn't Work

### Splitting on `\n` and counting characters

The first instinct is to grab the text content, split on newlines, and count.

```typescript
const getLineNumber = (element: HTMLElement): number => {
  const selection = window.getSelection();
  if (!selection) return 0;
  
  const offset = selection.anchorOffset;
  const text = element.textContent ?? "";

  const before = text.slice(0, offset);

  return before.split("\n").length;
};
```

This fails for one reason that's easy to forget: `\n` characters in a `contenteditable` element are not line breaks. The browser renders line breaks as `<br>` elements, `<div>` boundaries, or `<p>` tags depending on the browser and how the element was set up. A `\n` in `textContent` may exist, but it doesn't reliably map to what the user sees as a line. On top of that, soft-wrapping. If a line wraps because the container is too narrow, there is no `\n` at the wrap point at all. The visual line and the logical line have diverged entirely.

### Measuring `offsetTop` of the caret

The next instinct is geometric. Get a `Range` at the caret position, call `getBoundingClientRect()`, read the `top`, and derive a line number from the line height.

```typescript
const getCaretLine = (element: HTMLElement): number => {
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return 0;

  const range = selection.getRangeAt(0).cloneRange();
  const rect = range.getBoundingClientRect();

  const elementRect = element.getBoundingClientRect();

  const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
  
  return Math.floor((rect.top - elementRect.top) / lineHeight);
};
```

This is closer, but `lineHeight` is a lie. It returns the computed value, which may be `"normal"`, which resolves to something browser-dependent. Mixed font sizes, embedded elements, and custom line spacing all break the assumption that lines are evenly spaced. And if the element contains anything other than plain text, the line height of one line may not equal the line height of another.

---

## The Trick

Both approaches try to infer line position from something other than line position. The right approach asks the browser directly: does this range span more than one line?

A `Range` object has a `getClientRects()` method. It returns one `DOMRect` per line the range covers. A range that fits on a single line returns one rect. A range that crosses a line boundary returns two or more.

That's the primitive. From it, you can find exactly where one line ends and the next begins.

### Finding the length of the first line

Walk every text node in the element using a `TreeWalker`. For each node, create a range covering its full contents. If `getClientRects().length` is 1, the entire node lives on a single line and you can add its length to a running total and continue. If it's greater than 1, the node spans a line boundary and you need to find exactly where.

To find that boundary, shrink the range from the left until it fits on one line again. The character index where it tips over is the split point.

```typescript
const getFirstLineLength = (element: HTMLElement) => {
  if (!element.textContent) return 0;

  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);

  let length = 0;
  let node;

  while (true) {
    node = walker.nextNode();
    
    if (!node) break;
    if (!node.textContent) continue;
    
    const range = document.createRange();
    range.selectNodeContents(node);
    
    // If the node only spans one line, add its full length
    if (range.getClientRects().length <= 1) {
      length += node.textContent.length;
      continue;
    }
    
    // If it spans multiple lines, binary search for the line boundary
    range.setEnd(node, node.textContent.length - 1);
    
    for (let i = node.textContent.length; i >= 0; i -= 1) {
      range.setStart(node, i);

      if (range.getClientRects().length <= 1) continue;
      
      length += i;
      break;
    }
  }

  return length;
};
```

The key line is the loop. We fix the end of the range and walk the start backwards. As long as `getClientRects().length` is still 1, the range hasn't crossed a line boundary yet. The moment it returns more than 1, we've found the split.

This is entirely layout-aware. It doesn't care about `\n`, `<br>`, `<div>`, or line height. The browser's own rendering determines where lines break, and `getClientRects()` reflects that directly.

### Extending to arbitrary lines

`getFirstLineLength` gives you the character offset of the first line boundary. To find the current line the caret is on, the same principle extends.

Take the caret's character offset within the full text content of the element. Subtract the length of each line from the top down. When the running total drops below zero, you're on that line. The remainder is the caret's column position within it.

```typescript
const getCaretLineAndColumn = (element: HTMLElement) => {
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return null;

  // Collect line lengths from the top of the element
  const lines: number[] = [];
  let remaining = element.cloneNode(true) as HTMLElement;

  while (remaining.textContent && remaining.textContent.length > 0) {
    const len = getFirstLineLength(remaining);

    if (len === 0) break;

    lines.push(len);
    // Remove the first line's characters and repeat
    // (implementation depends on your DOM structure)
  }

  // Walk down lines until we find where the caret lands
  const caretOffset = getCaretOffset(element); // your offset-within-element helper

  let line = 0;
  let col = caretOffset;

  for (const len of lines) {
    if (col <= len) break;

    col -= len;
    line++;
  }
  
  return { line, col };
};
```

The outer loop is structural and depends on how you want to consume lines. The core primitive, `getFirstLineLength`, doesn't change.

---

## Why This Works Where Others Don't

`getClientRects()` is not widely used for this purpose, but it's the right tool. It operates on rendered geometry, not source structure. It handles:

- Soft-wrapped lines with no `\n` in the source
- Hard line breaks from `<br>`, `<div>`, or `<p>` boundaries
- Mixed font sizes that produce uneven line heights
- Inline elements and other non-text nodes inside the editable region

The tradeoff is that it's slower than a string operation. Every `getClientRects()` call triggers a layout query, and walking character-by-character in the worst case means O(n) layout queries per line boundary. For most interactive use cases this is imperceptible. For very large documents or very tight render loops, you'd want to debounce or cache results.

But for the problem of reliably knowing which line the caret is on, without assumptions about content structure or line height, this is the approach that doesn't lie to you.