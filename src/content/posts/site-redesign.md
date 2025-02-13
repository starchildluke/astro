---
title: 'I redesigned my site a little'
description: "You may have noticed the site looks a little different. Here's why I did made some design changes."
published: true
pubDate: '29 Oct 2023'
tags: ["life"]
---

Hello.

You may have noticed the site looks a little different. That's because I decided to make some design changes. I haven't documented those changes anywhere so I'll explain what they are to the best of my knowledge and why I did it.

## Ch-ch-ch-changes

### 1. The header nav is smaller and more spread out

I was heavily inspired by https://anhvn.com/ ([who I posted in my last blog](/posts/i-also-love-my-website/)) and how she had a thinner header strip. It just looks neater. With making it smaller, I've had to take out some of the links I didn't feel were worthy of a prominent place on every page on the site. That may change but for now, this is who it'll look.

### 2. I've replaced Arial Black with Erode as the headings font

If you remember, I used to have two custom fonts for my main body and heading fonts but I thought it was silly to have the biggest files on my site in terms of size as fonts when the site was mostly text. It wasn't dragging UX performance down significantly but I wanted a site that could be loaded as fast as possible on all connections.

Then I got bored of Arial Black.

So I took inspiration from Anh again and, rather than use Tiempos Text as well (1. I can't justify buying it and 2. I don't want to _copy_.), I went to look for a free serif font with some sophistication. And that's when I found Erode. Luckily, its file size is small (about 23KB or something) and my Lighthouse scores are still all 100s (I know, I know, they don't mean anything but without the traffic, I can't use field data and I like round figures, okay?!)

I think it looks great and I'm happy with my choice.

### 3. Wiki is now "Jardim" and Wikinotes are now "Recortes"

Okay, so I'm not Portuguese but I've been learning the language since 2017 and visited Lisbon 3 times (and I'm going again next month). Besides Duolingo, I have no means of practice when I'm not there so I felt a good way to break out of the app would be to add some of that <span lang="pt">sabor português</span> into my website.

I realised that "wiki" wasn't working as a name for that area of my site and I was getting impressions for [KEYWORD + wiki] search terms which I didn't want. I also didn't want to call it a "garden" as, again, didn't want to copy so I went with <span lang="pt">jardim</span>. That meant wikinotes had to go and, in keeping with the theme, I went with <span lang="pt">recortes</span>, which means "cuttings" in English. Like leaf cuttings or newspaper cuttings? <span lang="fr">Double entendre!</span> This post is suddenly getting very multilingual.

### 4. I've started using Content Collections

One of the biggest issues with my site before was how content and dynamic pagination worked. I had to have folders in separate places with slightly different names that didn't work.

An example was all the blog posts had a URL slug of `/post/` rather than `/posts/`, the latter of which was only used for the index. Then, things like Release Notes and Morsels were housed under `/post/` and they were their own thing.

I use Astro as my site framework and their Content Collections API has been around for a while. But I was wary of having to refactor my entire site and risk the loss of organic traffic (of what little traffic I get) but you know what? Screw it. I got sick of struggling and having messy code and folders so I did it over the course of two days. It wasn't easy but I figured stuff out and got it working. Then I fixed the broken links and set up redirects in the .htaccess file. And now things are better. So blog posts and the index are all under `/posts/`.

### 5. Tags are gone

They were a workaround and weren't great so nothing lost really, other than some internal linking. But there are better ways to do that, once I figure them out. There is a proper way to do it but one step at a time.

And thanks again to Anh for the inspiration to make those changes.