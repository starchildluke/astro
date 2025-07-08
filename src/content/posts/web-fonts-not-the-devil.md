---
title: "Web fonts aren't the devil"
description: "You don't need holy water; just a surgical mindset when it comes to Web performance and aesthetics."
published: true
pubDate: '8 Jul 2025'
tags: ["Web performance", "tech", "the Internet"]
---

If you're gonna use webfonts, be surgical about it:

- ask yourself if you really need them
- use the woff2 format
- subset if necessary
- preload them
- don't use too many
- self host them if possible
- check the file sizes ([Stoyan write a good article about it](https://www.phpied.com/web-font-sizes-a-more-complete-data-set/))

I've seen so many negative opinions saying webfonts are the worst, you should never use them, they cost too much, they slow sites down and make users leave because of it etc. etc. and if you look at how a lot of sites implement them, yeah they're an unnecessary overhead if you have 5 fonts per typeface and multiple typefaces. But they don't have to be.

And I think if more care and consideration was taken in the selection process, and the first question was "are there alternatives with less technical debt?", we could avoid most if not all of these issues.

I'm neither a die-hard advocate for Times New Roman/Arial/system fonts everywhere nor webfonts for everything but a pragmatic hybrid approach works wonders.

Here's something that happened to me. I once submitted my site to a minimal sites web group/club thing. I got rejected because most of the site's weight came from a web font (I think it was Karla from Google Fonts). It was lightweight at about 24 KB but because the rest of the site was so lean, it meant it had the highest outlay in terms of page weight. The person whose site it was made a snobby comment that irked me and it was enough for me to replace Karla with the [system font stack](https://systemfontstack.com/).

Do I regret the change? No, I think it was sensible. But did that mean never using webfonts on my site again? Also no as you might have seen with the title of this blog post and every heading on the site. I felt that the old font, Arial Black, didn't quite do it for me and wanted a serif/display font that wasn't too heavy but also had an elegant aesthetic. I ended up with DM Serif Display and I think it works well and it's lightweight (around 24kb for one font). Yes, it's still the biggest overhead but jesus it's only 24 KB. The most popular sites on the Web have page weights and requests sizes of over 1mb on average and they get away with it. Leave me with my sub-100 KB website with a single webfont!

A "better" future of the web is not:

```css
body {
	color: #000;
	font-family: serif;
	background: #fff
}
```

All I'm saying is live a little but be smart about it.