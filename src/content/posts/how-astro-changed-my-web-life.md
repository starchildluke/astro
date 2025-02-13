---
title: 'How Astro changed my life on the Web'
description: "Or: How I Learned to Stop Worrying and Love JavaScript."
published: true
pubDate: '18 May 2024'
tags: ["Astro", "the Internet"]
---

In 2021, I embarked on a journey that would change how I saw web development and how I interacted with the Web from a technical perspective and a creative one.

But before I go into that, let me take you back to the early 00s. The year 2000 to be exact.

## Web 1.0

I was living in Atlanta at the time as my dad had got a teaching job out there. While we only lasted 6 months out there, it was the start of my obsession with the Web. My mum worked at my school library a few times a week and every Wednesday, I'd stay after school for a couple of hours and spend my time in the library. Amongst the shelves of books were a few rows of computers and I'd basically fall down Web-bit holes, exploring everything the Internet had to offer. When we moved back to the UK, I got myself a Yahoo! email address and consolidated my preferences for their search engine over Google (even Ask Jeeves took precedence!). I also discovered that you could make your own website, thrusting me into the world of web development.

It was all about Tripod and Homestead for Web hosting, Geocities, FrontPage Express (the free version of Microsoft Frontpage), and lots of HTML. I'd use my dad's work laptop to code my site after spending 20 minutes plucking up the courage to ask. I never finished a site but it was so fun that I didn't care.

Eventually, I matured and moved onto Dreamweaver, more sustainable Web hosting, and then a myriad of different frameworks and environments. It was mostly HTML and, now, CSS. Building stuff from scratch. There was no "responsiveness" back then. I avoided Flash like the plague but thought "[slicing](https://en.wikipedia.org/wiki/Slicing_(interface_design))" was the most amazing thing that I just couldn't pull off. And absolutely no JavaScript, yuck!

## My start as an Astro-naut

Fast forward to 2021 and by then, I was on the tenth iteration of my personal site and I'd started working for my current employer as an SEO Executive. I was using Grav at the time and enjoying it, although I didn't get on with its templating language, Twig (with hindsight, I get it now). I'd even tried Jekyll for a bit when I got obsessed with the idea of linkblogs and [Monica Dinculescu's website](https://meowni.ca/) (which remains a stylistic inspiration for this one).

Then I found Astro, this new framework that promised <q cite="https://web.archive.org/web/20210426210422/https://astro.build/">faster websites with less client-side Javascript</q>. I'd just started getting into Web performance so this piqued my interest. I was comfortable enough Terminal and running builds to get behind how Astro worked. So I took the plunge.

Lemme tell ya: those first few months were <span style="color:#fc1420;">**_hell_**</span>.

I spent hours and hours trying to get things working. The truth was, while there was less client-side JavaScript&mdash;with it being a static site generator&mdash;there was MORE JavaScript in the backend for me. I'd been used to hard-coding everything but Astro gave me the opportunity to create stuff dynamically. Go to my homepage and you'll see a little greeting in English, French, Spanish, or Portuguese. That's static now but in the pre-build code, it's JavaScript. At least that was simple.

## Persistence paid off... until it didn't... and then it did again

All those nights troubleshooting until 3am paid off in the end. I'd joined the Discord, became engaged, asked for help, and got what I needed to that point. But with more updates came new features. [Content Collections](https://docs.astro.build/en/guides/content-collections/) were introduced with Astro 2.0. These allowed for better management of content in an Astro project if you had, say, a blog or newsletter, or wanted to consolidate authors. The problem was that I'd set everything up without this and the thought of refactoring everything gave me a headache, so I abstained for a while.

The idea of lagging behind didn't sit well with me though and I rolled up my proverbial sleeves and gave it a go. Thanks to the documentation and not caring much about the URL changes (post > posts, oh no what would Google do???), I pulled through and have since built the collections out with more sections. Easy peasy...

...no really. That was it. My woes were over (well, apart from reducing some of the bloat from my node modules folder which briefly broke everything but it all got fixed)

I did have one more dragon to slay though: JavaScript.

## How I Learned to Stop Worrying and Love JavaScript

Working in technical SEO means exposure to JavaScript, either directly through JavaScript SEO or realising that web devs use it way too much and... let me not digress. I'd tried learning multiple times in the past and couldn't get my head around it all. It all felt too much like C++ which I'd tried and failed with during the computer science degree I dropped out of in 2008.

But if you've got this far, you'll know I don't let something get me down for too long when it comes to learning. I started up my web development course again on Udemy and went through everything from the beginning. I was well versed in Python already so most of the basics were the same but I didn't want to skip over anything. Eventually, I got the hang of the easy stuff and got to grips with event handlers (love those things), figured out what maps did after using them without prior knowledge. Everything was clicking and I had Astro to thank for setting me on the path.

## Would I recommend Astro?

Hell yeah I would. There are a ton of Web frameworks out there (I think it should be called JAMStack**ed** to be honest) and they all come with their own pros and cons but Astro caught my eye ~~first~~ second for a few reasons:

* The community is super helpful and friendly
* You can use as little or as much JavaScript as you want but HTML and CSS are the foundations: it's all about progressive enhancement
* All the major frameworks integrate with Astro really well, and you can extend it with a variety of CMS's
* It's constantly evolving but in a way that enriches rather than alienates
* The syntax will be familiar to people who have used other frameworks before and relatively easy to pick up if you haven't
* They really care about web performance, so sites are super fast out of the box (and I'm obliged to say this is good for SEO BUT [only as a small factor as I've written about before](https://lukealexdavis.co.uk/posts/some-caveats-to-seo-and-web-perf/))
* They helped me overcome my fear of JavaScript and use it strategically to embellish what I already had, rather than replace

If you want to join in and build a better Web, [head to the Astro website and get started](https://astro.build/).