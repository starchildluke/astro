---
title: 'Morsel #22: you can animate SVGs'
description: "How did I not know you could animate SVGs? It's right there in the spec!"
published: true
pubDate: '7 Jul 2025'
tags:
  - the Internet
  - tech
---

TIL: you can animate SVGs and [it's been in the SVG specification all along](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/animate).

There are three elements:

```html
<animate> <!--Provides a way to animate an attribute of an element over time.-->
<animateMotion> <!--Provides a way to animate an element along a motion path.-->
<animateTransform> <!--Provides a way to animate an element as a transformation (e.g. skewing, rotation, scaling).-->
```

The good thing about this is that, depending on your use case, it makes for a great substitute for GIFs which can balloon in size depending on the frame rate and the color depth. With a SVG, you could get a small file size and the best resolution possible. Even better if it's small enough to use inline!

[Thanks to Vincent Warmerdam for the tip](https://koaning.io/posts/svg-gifs/) (who gives an example using a couple of tools to make it).