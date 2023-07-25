---
title: 'Use Prince''s purple for a:visited in your CSS'
published: true
date: '11 Mar 2020'
layout: ../../layouts/BlogPost.astro
tags:
- '[the Internet](/wiki/tech/internet/)'
- CSS
- '[Prince](wiki/music/prince/)'
---

Evert Pot wrote an article about using [a:visited](https://evertpot.com/visited-links/) in your stylesheets.

In a nutshell, most people change the styling of their links and that disables <code>a:visited</code>. Purple is the default colour for the selector but that might not always work for your layout. It works for me though. The only issue is I don't like <em>that</em> purple. So I looked for the Pantone colour created in honour of Prince when he passed away in 2016 and I now use that on [my main site](https://lukealexdavis.co.uk/).

The shade I use is <code>#9663C4</code> but from the official [Pantone PQ-7448C](https://www.pantone.com/connect/PQ-7448C) page, it's <code>#4B384C</code>.

Copy the below code to add it to your stylesheets.

## My Prince purple version

~~~css
a:visited {
    color: #9663C4;
}

// The Pantone PQ-7448C version

a:visited {
    color: #4B384C;
}

// Or the CSS custom variables option

:root {
    --princepurple: #9663C4;
}

a:visited {
    color: var(--princepurple);
}