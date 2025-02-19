---
title: 'Morsel #11: how to check if a DOM element is in the viewport'
published: true
pubDate: '22 May 2024'
---

In my line of work, I struggle with finding DOM elements that cause issues but are otherwise hidden—by `display:none`—or obscured by above-the-fold menus. I came across the latter the other day and the issue was lazy-loading. I wasn't sure whether the element classed as "in the viewport" despite not being immediately seen by the user unless they unfolded the menu.

So I looked for a way to check and came across a JavaScript method called `getBoundingClientRect()`. It returns a [DOMRect object](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect) that shows the size (width and height) and position (x and y coordinates) of an element in relation to the viewport.

There are other ways to do it but this seemed the easiest for me (and coolest because I'd never heard of it before). [Here's an example taken from Geeks for Geeks](https://www.geeksforgeeks.org/how-to-check-a-dom-element-is-visible-in-current-viewport/):

```javascript
function myfunction(value) {
    const item = value.getBoundingClientRect();
    return (
        item.top >= 0 &&
        item.left >= 0 &&
        item.bottom <= (
            window.innerHeight ||
            document.documentElement.clientHeight) &&
        item.right <= (
            window.innerWidth ||
            document.documentElement.clientWidth)
    );
}

const elementToCheck = document.getElementById('div1');

window.addEventListener('scroll', () => {
    if (myfunction(elementToCheck)) {
        console.log('Element is visible in viewport');
    } else {
        console.log('Element is not visible in viewport');
    }
});
```

After I put my element in as the value of `elementToCheck`, it came up as "in the viewport" and therefore shouldn't be lazy-loaded. Easy fix!