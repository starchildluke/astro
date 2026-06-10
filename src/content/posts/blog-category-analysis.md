---
title: 'Blog category analysis'
description: 'Dusting off an old script to analyse some blog category data'
published: true
pubDate: '11 Jun 2026'
tags: ['blogging', 'the Internet']
---

I got nerd sniped by James in his blog post, [Is there a power law of category use?](https://jamesg.blog/2026/06/04/is-there-a-power-law-of-category-use). I emailed him to show off a script that I'd made many years ago to analyse my category and tag use on [my other blogs](/projects/) and he suggested that I blog about it so here we are!

I unfortunately can't show you the script itself as it's not in a shareable state but the gist is that it uses category and tag data (names and counts) that I pull from my blogs' WordPress REST APIs and generates bar charts for each one.

For categories, I get all of them as there aren't as many per blog but I have hundreds of tags for each so I confine it to the least used tags.

<details>
	<summary><strong>The data (as an image)</strong></summary>
	<a href="/images/blog-cat-data.png">
		<img src="/images/blog-cat-data.png" alt="bar charts of blog category data" />
	</a>
</details>

So in answer to the question “is there a power law of category use?”, the answer is yes for me. It's not a dramatic long tail but it is there and the data isn't a shock. The reason I made this in the first place was to see what categories needed more blog posts and if I needed to do some "spring cleaning" in terms of categorisation.

For example, the default category for Sampleface, my music blog, is "Music". That's an easy place to look for posts that could be categorised better. I also want to improve the Sampling category given the nature of the blog. This kind of data helps me plug those gaps.

I've dabbled in graph science for tags in the past but it can get quite fiddly and I need a plan and it's very easy to fall down rabbit holes with that sort of analysis. Maybe I can find the right questions to give it another go. In the meantime, I'm just tagging away and trying to be neat with it all as I don't want to manage an unwieldy taxonomy.