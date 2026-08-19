---
title: 'RE: Re: The Loss of Links Continues'
description: 'This is where my day job comes in handy'
published: true
pubDate: '20 Aug 2026'
tags:
  - SEO
  - tech
  - blogging
---

Get ready for another blog chain!

- On 27th January 2023, Trevor Morris wrote [The Loss of Links on the Web](https://www.trovster.com/blog/2023/01/the-loss-of-links-on-the-web) about link rot and how the fragility of links to older web pages.
- He then [wrote a follow up a year later](https://www.trovster.com/blog/2024/01/the-loss-of-links-continues) and how he's worked on reducing that impact on his own site (a noble feat!).
- Then [Naty S picked up on this](https://burgeonlab.com/replies/2026/0815-1438/) and mentioned a Python script that found orphan pages (pages without an inbound links pointing towards them; something I deal with regularly at work).
- And finally to the present, where [Michael Hartley responded to _that_ post](https://michaelharley.net/posts/2026/08/18/re-the-loss-of-links-continues/) and advocated for bloggers to be diligent in combatting link rot through monitoring and action.

I agree with everyone's points and I have to, both professionally and as a decades-old site owner. I'm constantly recommended replacement links for broken ones found on client sites ([thanks to my own Python tool](https://fuzzzy-st.streamlit.app/)) and while the impact can vary depending on scale, it's just good web hygiene. Nobody wants to click a link expecting it to take them somewhere and end up on a 404 page. So I especially agree with Michael that we must clean up any broken links when we find them.

How I do it is via periodic crawls with [Sitebulb](https://sitebulb.com/), a crawling tool primarily for SEO auditing but it finds links that don't go straight to pages that return a 200 status code and those are the links I want to fix. Link rot is bad but redirects can be too if they're not necessary as they add small amounts of latency which could build up if the initial parts of page load aren't fast. The main goal is to take the user directly to where they need to go where possible. However you can clean up those destinations, you should do it.

Where redirects _can_ come in handy in this context is if there isn't a suitable replacement link for a broken one. Say you had a page there but deleted it or you changed the URL due to a migration. Leaving the originals broken creates a bad experience for anyone who has access to the old links. So redirecting them somewhere appropriate like the new URL for that page or the homepage for your new site is much better.

It all comes down to diligence. Make that site journey as smooth as you can.