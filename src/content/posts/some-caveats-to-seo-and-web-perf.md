---
title: 'Some caveats to SEO and web performance'
description: "As a technical SEO, I am very passionate about web performance. Here's why nuance is needed when talking about its relationship with SEO"
published: true
pubDate: '2 Jul 2023'
layout: ../../layouts/BlogPost.astro
tags: ['SEO', 'tech', 'the Tnternet']
---

As a technical SEO, I am very passionate about web performance. The speed and overall performance of a page can affect how well a search engine crawler can crawl and index a page (amongst many other factors). The usual way to define that is through metrics like Google's [Core Web Vitals](https://web.dev/articles/vitals/), which form part of their [Page Experience ranking signal](https://developers.google.com/search/docs/appearance/page-experience)<sup><a href ="#sidenote">\*</a></sup>. But there's a problem I've noticed between both SEO and web performance communities: people are giving too much weight to Core Web Vitals from a ranking perspective.

Now, I'm going to use an example from [Speedcurve](https://www.speedcurve.com/) to illustrate this. I don't think the information on their [SEO and Web Performance](https://support.speedcurve.com/docs/seo-and-web-performance) is terrible or incorrect but I feel like some caveats are important to avoid misunderstandings or heated debates between businesses and their in-house SEOs/agencies.

In the section titled [How much does web performance matter when it comes to SEO?](https://support.speedcurve.com/docs/seo-and-web-performance#how-much-does-web-performance-matter-when-it-comes-to-seo), they say the following:

>Since Web Vitals were announced, they've shot to the top of many people's list of things to care about. But Google's prioritization of page speed in search ranking isn't new, even for mobile. As far back as 2013, Google announced that pages that load slowly on mobile devices would be penalized in mobile search.
<br><br>
>Performance has had an impact on SEO long before Web Vitals came along. Back in 2011, Smartfurniture.com [shared](https://www.retailtouchpoints.com/features/executive-viewpoints/the-growing-need-for-speed-how-site-performance-increasingly-influences-search-rankings):
<br><br>
>"We discovered we could make a quantum leap in search engine rankings simply by increasing site performance. Across the board, we’ve seen sales increases because of our improved ranking, with 20% more organic traffic being driven to our site and 14% more page views."
<br><br>
>More recently, Pinterest [shared](https://medium.com/pinterest-engineering/driving-user-growth-with-performance-improvements-cfc50dafadd7#.wwimdmkpp) that rebuilding their site with performance in mind resulted in a 15% increase in organic search traffic. (You can find more SEO-related case studies at [WPOstats.com](https://wpostats.com/tags/seo/).)

## What the Speed Update really meant

The first flag for me was regarding Google's penalisation of slow sites in mobile search. There was an [announcement in 2018 in a Google blog post](https://developers.google.com/search/blog/2018/01/using-page-speed-in-mobile-search) but "penalised" is a problematic word to use in this context (and **many** news sites ran with it at the time). The reason for that is because Google has a [manual penalty system](https://searchengineland.com/google-penalties-manual-actions-notifications-guide-388509) for serious cases such as black hat tactics such as keyword cloaking, keyword stuffing, [private blog networks (or PBNs)](https://ahrefs.com/seo/glossary/private-blog-network), and misleading redirects.

If you get caught, Google "penalises" you by dropping your rank or deindexing completely. Most people are aware of these kinds of penalties so using that terminology to describe the effects of having a slow site can give the wrong connotations. So to be clear and diligent, a slow site will not tank your rankings directly. Sites that have issues that don't allow them to be crawled and indexed correctly will see rankings fall and slow speeds could be associative in those cases but not the primary or sole cause. _Hope that makes sense; let me know if not! x_

An important paragraph from the 2018 blog post is this:

> The "Speed Update", as we're calling it, will only affect pages that deliver the slowest experience to users and will only affect a small percentage of queries. It applies the same standard to all pages, regardless of the technology used to build the page. The intent of the search query is still a very strong signal, so a slow page may still rank highly if it has great, relevant content.

So this isn't necessarily sitewide, it only affects a small portion of queries, and a slow page might not see a change in rank because of its content relevance. And that's how seach should work. The biggest sites in terms of indexed pages and popularity are in the vast minority on the Web. A lot of them are also memory, storage, data, and time hogs. You don't see them falling down the rankings or out of them completely so perhaps speed isn't _that_ big a deal compared to other signals like content relevance, link profiles, and efficient crawling and indexation.

## Web performance doesn't always correlate with organic ranking

<figure class="float-img-right">
	<img src="/images/i-make-lots-of-graphs.jpg" alt="Lisa Simpson holding up a graph with the caption 'I make a lot of graphs'" loading="lazy" width="250" height="188" />
	<figcaption>Lisa is clearly an SEO.</figcaption>
</figure>

A few studies were quoted in the referenced Speedcurve paragraph, from Smartfurniture.com and Pinterest. Now, case studies are important to show how changes can have significant impacts&mdash;good or bad. But it is so difficult to attribute web performance changes in SEO without taking other factors into account. You often see percentages and monetary figures but rarely what happened to get to those stages. And then there are the confusions between users engaging with SERPs (search engine results pages) and users engaging with the site once they click the SERP listing link.

As I mentioned earlier, a slow page may still rank highly so you can't attribute performance improvements to improved impressions or clicks. Factors like [seasonality](https://www.searchenginejournal.com/seasonal-seo-tips/438300/), competitors, updates, content relevance, and link profiles make a bigger difference on that front. Once you're on the page, then speed can become a factor. But what happens if you make content changes at the same time? Or change the links on the page? Which one made the most difference? It's hard to say for sure.

That's not to say I doubt that improving web performance makes a difference to conversions and general organic performance but it requires a methodology and careful analysis to attribute the changes to the right places.

## Who Core Web Vitals is really for

The section titled [Which performance metrics should you focus on for SEO?](https://support.speedcurve.com/docs/seo-and-web-performance#which-performance-metrics-should-you-focus-on-for-seo) examines metrics to look out for when measuring performance and where you can improve. There are four listed:

* [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp)
* [First Input Delay (FID)](https://web.dev/articles/fid)
* [Interaction to Next Paint (INP)](https://web.dev/articles/inp/)
* [Cumulative Layout Shift (CLS)](https://web.dev/articles/cls)

LCP, FID, and CLS are currently the Core Web Vitals metrics, while [INP will replace FID in March 2024](https://web.dev/blog/inp-cwv). As Google created these as best measures for web performance (in their eyes, and they know they aren't perfect), I agree these should be metrics to focus on. But my issue is with the title:

**Which performance metrics should you focus on for SEO?**

The question should be:

**Which performance metrics should you focus on for <span style="color:#FC1420;">_users_</span>?**

Of course, I get that this whole page is about SEO and web performance but users are the common denominator at every stage of the journey. A site can rank #1 for a term and very few people click on the link in the SERPs ([thanks, Google Ads!](https://digiday.com/marketing/wtf-are-dark-patterns/)).

If they do though, they navigate the site, may convert, may not, may abandon their cart, may not, may leave, may come back, may not. All of that may be because of site speed or visual shifts. Or it could be people being indecisive or wanting to save money. UX plays a crucial part in all of that, which is why Core Web Vitals and web performance shouldn't be so tightly bound with SEO; it should be connected with UX in a cute [Ring a Ring o' Roses](https://www.youtube.com/watch?v=SeMcG5OT5BU)-type relationship. Oh, and devs too. They can join in... I guess!

## The bottom line

<figure>
	<img src="/images/stone-cold.jpg" alt="A white male wrestler named Stone Cold, wearing some black briefs and boots talking into a mic with anger. He was famous for uttering the line 'and that's the bottom line cos Stone Cold said so'" loading="lazy" width="640" height="500" />
	<figcaption>Me in a client meeting.</figcaption>
</figure>

Core Web Vitals emphasizes the relationship between UX and SEO when it comes to impact and results. I feel like a broken record for saying this (at least in my head) but improving CWV metrics won't boost organic rankings without a lot of caveats but it most certainly will improve organic session quality, leading to better session duration, conversions, and revenue.

Users don't know how slow your site is in the SERPs but they'll find out once they click the link so prepare for that part and let helpful content, link building, and EEAT do the preliminary work.

This is the kind of message we need to send to clients and our peers when discussing why CWV is important. We need to be specific or we're gonna look like snake oil merchants (oh wait, we already do: look at SEO's reputation with devs and the media \*side-eyes The Verge\*)

Again, I'm not trying to pick on Speedcurve or suggesting they suck or they're telling lies (I actually like their product and the people I know of that work there as they do really awesome work in the web performance sector so thank you!) My overrarching point is this: when we talk about SEO and web performance, we need to refrain from saying things like "improving site speed is a ranking factor and doing so will improve your SEO ranking". Those kinds of statements are either not true or barely true or only giving a small portion of the information needed to be true.

The real truth is that Page Experience is just one signal amongst many others and within Page Experience, Core Web Vitals is one part of many. That means it's not heavily weighted and people (who know that) should be saying it. At the moment, I fear that people thinking there's an equal weight to content, links, and page speed when that just isn't the case. Where page speed _is_ heavily weighted is in direct user experiences and people's abilities to navigate websites in a way that makes them stay, return, and feel comfortable to do both. If it's a commercial site, they're more likely to buy stuff or sign up to stuff. If it's informational, they're more likely to read and comment.

People will always click links on SERPs. They might not always stay on your site for long. Web performance is therefore more important for the latter than the former and SEO, UX, dev work, and higher-ups buy-in should work together to make that all happen and make everyone happy. Or happier at least.

<p id="sidenote"><small><em>*Please note: Page Experience is *not* a ranking system and Google has said that before and I don't want to piss Danny Sullivan off any more than he likely seems to be when people misattribute his/Google's official documentation, even if it isn't always _that_ clear but I digress.</em></small></p>