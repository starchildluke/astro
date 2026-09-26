---
title: 'choosing web fonts by file size'
description: 'emphasis on “reductive” i suppose'
published: true
pubDate: '26 Sep 2026'
tags:
  - the Internet
  - tech
  - Web performance
---

with some of my work focusing on [web performance](/posts/some-brief-thoughts-on-web-dev-and-web-performance/), i've grown attached to certain optimisations in areas like web font management. sadly, a lot of the best fonts are the biggest for various reasons and on my own site, i've flitted between using pure “web safe fonts” and using third-party web fonts for headings (and sometimes the body text too).

i'm currently using 2 web fonts on the site:

- [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display)
- [Nyght Serif Light](https://www.tunera.xyz/fonts/nyght-serif/)

i chose those as i wanted a serif but without too much weight (kb, not bold). but it's hard to do that without downloading the font and checking the file size. it took me hours and days to figure out the best looking _and_ leanest (after subsetting). did i overengineer this? you bet, but it's my site after all.

i just don't want most of the page weight to go into a single font that isn't used on most of the page... but i want it to look pretty and bespoke. so yeah, it'd be nice if font providers gave a file size for their fonts upfront so i didn't have to do all the legwork.

shout out to phpied for his [google fonts study](https://www.phpied.com/bytes-normal-web-font-study-google-fonts/) and [dataset](https://www.phpied.com/web-font-sizes-a-more-complete-data-set/). there was another blog post from someone else that kickstarted this obsession but i can't find it anymore.