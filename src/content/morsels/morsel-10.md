---
title: 'Morsel #10: Ticking all the boxes'
published: true
pubDate: '23 Jan 2024'
layout: ../../layouts/Morsels.astro
---

I was trying to create a data report and needed to tick checkboxes to include certain information. Unfortunately, there were over 500 boxes and no option for selecting all of them so I Googled how to do it using JavaScript + the browser console.

[Stack Overflow came through for me](https://stackoverflow.com/questions/386281/how-to-implement-select-all-check-box-in-html) and I thought I'd share the answer here (thanks to [ashleedawg](https://stackoverflow.com/users/8112776/ashleedawg)):

**How to tick all checkboxes in your browser**:

1. Open your browser's console (the shortcut is usually Cmd/Ctrl+Shift+I (Chrome) or Cmd/Ctrl+Shift+I (Brave))
2. Enter the following: <code>$("input:checkbox").attr('checked', true)</code> (make sure to change <code>true</code> to <code>True</code> for Firefox)
3. Press Cmd/Ctrl+Enter to fire it and all the checkboxes should be checked!

I've only tested this on one website on Brave and Firefox so feel free to email me if it doesn't work for you!