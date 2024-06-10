---
title: 'Sometimes, automation is slower'
description: "For when copy and paste, Regex, and fast fingers are quicker than Python"
published: true
pubDate: '10 Jun 2024'
layout: ../../layouts/BlogPost.astro
tags: ["tech", "Python"]
---

This is the 6th year that I've been using Python as my main programming language for pretty much anything. I've gained so much knowledge and built amazing scripts and apps, both for myself, work colleagues, and the public. But in that time, I've learnt something even more salient: Python isn't always the right answer for automation. And, no, that doesn't mean I've used other languages like Rust, Go, Java, or even JavaScript (although my heart is warming to it in general). Instead, I've learnt when copying and pasting data into an IDE and deleting what I don't need has been the quickest solution.

Let me give you an example. I wanted to gather a list of artists to check for potential music samples as I'm working on a new project. I picked an producer on WhoSampled who I knew had impeccable taste in samples and my task was to get all the original artist names that they'd sampled from. Because there were 9 pages of samples, it wouldn't be as simple as writing down a few names so my options were:

1. Scrape the pages using Screaming Frog and extract the text I needed
2. Use Python to extract the text I needed
3. Maybe even use JavaScript to do it in the console
4. Open each page in 9 tabs and Select All, Cmd+C, Cmd+V, and use Regex to delete everything that didn't have the artist name in it

Now the first three could have been quick solutions in theory:

* In Screaming Frog, you can add a list of URLs and use [Custom Extraction](https://www.screamingfrog.co.uk/seo-spider/tutorials/web-scraping/) to pull the CSS selectors or XPaths containing the text you need.
* Python would have been quick too with Requests and Beautiful Soup (which I've combined into my own hosted package for these kinds of tasks). But both of those solutions required me looking for the precise CSS selectors and/or writing the code to get the text and maybe troubleshoot (because I almost never do it right the first time).
* JavaScript could have worked but I'm still not 100% confident with it and I'd be tinkering with it for longer than I'd want.

That left the fourth one. It was rough but it was ready. The shortcut commands are second nature to me so there wasn't a risk of being slow or needing to troubleshoot. What's more, there were no need for identifying CSS selectors. All the original artist names were prefixed with the word "by" so I just had to use the following Regex to extract the text I needed:

```by .*```

I use Sublime Text so this was easy to do and it left me with a long list of artist names. I used Permute Lines > Unique which removed duplicates and I deleted lines that featured the producer's name and it was done in less than 30 seconds. Including the opening of 9 pages and swapping between tabs, maybe a minute, tops. I'm pretty fast with SF and Python but I know it would have taken more than double that time to get it all done.

Now that might not be the case for someone more versed in any of the other techniques I listed. But the point was finding the quickest solution for a small task and writing code or engaging with technology that needed extra input didn't feel like the right thing.

[xkcd has a great comic on this called Automation](https://xkcd.com/1319/) and it features two graphs—Theory and Reality—that demonstrate the time taken vs. work required to write a program that automates a task that you'd take a lot of time on. The theory suggests that you'd get more free time in the end once you've written the code and executed it. But the reality suggests writing code, debugging, rethinking, and ongoing development takes up so much time that you have no time for the original task in the end and you _lose_ time.

My example doesn't really fit into this as it was a quick task and it wouldn't have taken longer than 5 minutes no matter which solution I chose (the longest, of course, would have been manually copying and pasting each individual name). But it highlighted a problem in automation: when to automate and when to do the rough work yourself. Is the task something that'll take a long time and automation is the better option, or perhaps something you'll need again and again so automation will save time in the long run? I think a script would have been the best option had I wanted to do this again for more producers. Or, because I know the site and I'd only need to find the CSS selectors once, I could remember that and use Screaming Frog in future.

The goal is knowing what decision to make and that in itself may eat into your free time by trial and error. But it pays off in the long run.