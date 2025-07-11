---
title: "I've started a linkblog"
description: "Sometimes, you want to have a place to have lots of cool links without it being hosted by a third party. That's what a linkblog is all about."
published: true
pubDate: '29 Jan 2024'
tags: ["blogging"]
---

I'm a digital magpie, and I have been for a while. I'll see a cool thing and I'll want it to the point of hyperfocusing. Well, the latest thing that has caught my eye is a linkblog (or linklog as it is sometimes known as). Here's the Wikipedia definition:

> A linklog is a type of blog which is meant to act as a linked list. Common practice is for the post titles to link directly to an external URLs, and the content of the post includes information to complement the associated URL.

My first exposure to this form of blogging was with Kottke.org and his Quick Links (previously, he had [Remaindered Links](https://kottke.org/15/01/the-return-of-the-remaindered-links-sort-of) which inspired other people's linkblogs when they were popular in the 2000s and 2010s.) They're basically a sentence or two with some hyperlinked text. Easy. I've since incorporated my own version of Quick Links on my other blogs and called them Cool Links but they're actually closer to [asides](https://ma.tt/2004/05/asides/), which is something a bit different but in the same ballpark. The difference is tha tmy Cool Links are actually regular posts with a title and body text but on my blog homepage, they just appear as body text.

_What do you mean I've lost you and that I should get to the point???_

Right, linkblogs! I wanted one because I don't always feel comfortable just throwing a Cool Link on my blogs and that taking up the main feed. I looked through a variety of examples for inspiration and realised there were so many that I was getting choice paralysis.

In the end, I calmed myself down, [ignored a naysayer I found](https://meiert.com/blog/the-problem-with-link-blogs-plus-five-link-blogs-that-rock/), and created an ongoing linkblog right here:

[https://lukealexdavis.co.uk/linkblog/](/linkblog/)

Because I'm not using a CMS, the process is as follows:

1. I find a link
2. I use a custom-made Streamlit web app to add it to a JSON file
3. The linkblog page reads the JSON file and display the content

I toyed with the idea of a SQL database but it seemed like overkill. Maybe I'll revisit if I find the JSON file too much.

And to anyone thinking about doing the same, just go and do it. It's your space on the Web, who cares what anyone else thinks? Just don't let large language models write the stuff for you.