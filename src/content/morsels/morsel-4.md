---
title: 'Morsel #4: bulk upload to Internet Archive with waybackpy'
published: true
pubDate: '26 May 2022'
layout: ../../layouts/Morsels.astro
---

My fourth morsel is a way to backup your site to the Internet Archive.

## Requirements

* [Python 3](https://www.python.org/downloads/)
* [waybackpy](https://pypi.org/project/waybackpy/)
* [advertools](https://advertools.readthedocs.io/en/master/)

## Links

* [GitHub link](https://github.com/starchildluke/wayback)

I adapted some code from Koray Tuğberk GÜBÜR by using advertools to pull pages from a sitemap and ```to_list()``` over ```apply()``` and a ```lambda``` function when extracting URLs to iterate over. Purely a preference thing.

Also shout out to [Elias Dabbas for the advertools library](https://github.com/eliasdabbas/advertools) which has made sitemap handling in Python so much easier.