---
title: 'Morsel #1 - The Tag Suggester'
published: true
date: '15 Apr 2022'
layout: ../../../layouts/BlogPost.astro
---

My first morsel is a Python script that extracts all the tags from my blogs and creates randomised Google search URLs for content ideation.

## Requirements

* [Python 3](https://www.python.org/downloads/)
* [requests](https://docs.python-requests.org/)
* [streamlit](https://streamlit.io/)

Example from [Cultrface](https://cultrface.co.uk):

https://google.com/search?q=martin+luther+king+soup

As they are randomised, some of the results are more nonsense than anything but you never know. That's the beauty of it&mdash;you could end up down a rabbit hole you never knew existed.

[Check it out on GitHub](https://github.com/starchildluke/tag_suggester/) and feel free to fork the repository and make your own version (subject to the AGPL-3.0 License)