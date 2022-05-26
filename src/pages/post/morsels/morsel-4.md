---
title: 'Morsel #4 - bulk upload to Internet Archive with waybackpy and advertools'
published: true
date: '26 May 2022'
layout: ../../../layouts/BlogPost.astro
---

My fourth morsel is a way to backup your site to the Internet Archive.

## Requirements

* [Python 3](https://www.python.org/downloads/)
* [waybackpy](https://pypi.org/project/waybackpy/)
* [advertools](https://advertools.readthedocs.io/)

[GitHub link](https://github.com/starchildluke/wayback)

Credit to [Koray Tuğberk GÜBÜR](https://www.holisticseo.digital/python-seo/internet-archive/) for the code and the idea.

I only made a slight variation, using advertools to pull pages from a sitemap and ```to_list()``` over ```apply()``` and a ```lambda``` function when extracting URLs to iterate over. Purely a preference thing.

Also shout out to [Elias Dabbas for the advertools library](https://github.com/eliasdabbas/advertools) which has made sitemap handling in Python so much easier.