---
title: 'Some brief thoughts on robots.txt'
description: "I wrote some thoughts about robots.txt and how you should use it."
published: true
pubDate: '9 Apr 2024'
layout: ../../layouts/BlogPost.astro
tags: ["SEO", "tech", "the Internet"]
---

<small>_(I started writing this at around 10:30pm so it's kinda rough and from memory. I'll likely update this with examples and more specific information and explanations over time. This is more of a guide than verbatim instructions so take it as you will and always test things with your own site to be sure.)_</small>

---

A lot of technical SEO is muscle memory. You can automate a lot of things but because no two sites are ever truly the same, you, the SEO, need to pick out what really matters and what doesn't. For me, it's better if a human does it compared to a catch-all solution or a machine learning tool.

One thing that I've grown accustomed to is assessing the use and unintentional misuse of robots.txt. If you don't know, robots.txt is a text file that contains instructions that a search engine bot should follow when crawling a site. The most common directives relate to what pages a crawler can and can't crawl, using the keywords `allow` and `disallow`.

Here's what mine looks like:

```
User-agent: *
Allow: /

User-Agent: ChatGPT-User
Disallow: /

User-Agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

Sitemap: https://lukealexdavis.co.uk/sitemap.xml
```

This says that any crawler can crawl the site... except ChatGPT-User, GPTBot, and Google-Extended (which are all AI crawlers, although given their current practices for scraping, these might be redundant).

On e-commerce sites, you'll see a lot of URL path types blocked from crawls such as search pages (e.g. **example.org/search/blah+blah+blah**) and filter parameter pages (e.g. **example.org/?filter=colour&size=large**). But, for Google, this isn't always the best way. [In their documentation on robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro), they say:

>  A robots.txt file tells search engine crawlers which URLs the crawler can access on your site. This is used mainly to avoid overloading your site with requests; it is not a mechanism for keeping a web page out of Google. To keep a web page out of Google, block indexing with noindex or password-protect the page.

That's arguably the most important point of the documentation. Robots.txt is there to stop your servers from getting overloaded by crawl requests through carefully selected directives. That's where the efficiency lies. But blocking pages from being crawled won't block it from getting into the index, and a lot of sites (often by default) have directives that disallow common page types as described above.

Now, Googlebot often follows this correctly and they will get blocked and therefore won't get indexed but it's not guaranteed to stay that way, especially if you happen to link to those blocked pages anywhere else, and in abundance. I've come across sites that link to blocked filter pages _at scale_ and since links are heavily weighted Google's search algorithms, they see this as a strong signal for indexation. The result: blocked pages get indexed. This isn't inherently a bad thing for search as these pages aren't optimised and won't take up much if any visiblity for a site for important keywords... but they could, and if you've used a technique for one thing, you don't want it to be ignored or mess up your overall strategy.

So what do you do in these situations? Drum roll please...

🥁 🥁 🥁

...IT DEPENDS! 🎉 🍾

But seriously, as Google said, if you don't want a page to be indexed, use noindex. Robots.txt wasn't designed for noindexation so don't use it for that. The reason why so many frameworks and platforms block certain page types like search and filters is often sites have thousands of pages and you'll want a crawler to focus on product and category pages over things like in-site search. In fact, these pages are often canonicalised or noindexed anyway in which case blocking them via robots.txt could actually be a problem anyway (it might not see the noindex or canonical if it's blocked).

So, to sum up: 

* If you want to stop Googlebot from pressuring your servers with crawl requests (based on evidence that Googlebot is doing this in the first place), add a disallow directive.
* If you have a smaller site* and just don't want pages to be indexed, add a noindex tag and don't sweat the technique. I mean, crawling of those pages.

Crawl effiency isn't a concern for a small site as Googlebot can handle this without issue. Problems may arise if your site dynamically generates more pages that a crawler can find and that's when you need to address the situation.

<sup>\*</sup><small>By smaller, I mean <100,000 pages as the roughest of rough estimates, YMMV, please test this as there are no hard and fast rules in this game!</small>