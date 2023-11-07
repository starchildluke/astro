---
title: 'Morsel #1: The Tag Suggester'
published: true
pubDate: '15 Apr 2022'
layout: ../../layouts/Morsels.astro
---

My first morsel is a Python script that extracts all the tags from my blogs and creates randomised Google search URLs for content ideation.

## Requirements

* [Python 3](https://www.python.org/downloads/)
* [requests](https://requests.readthedocs.io/en/latest/)
* [streamlit](https://streamlit.io/)

## Links

[GitHub link](https://github.com/starchildluke/tag_suggester/)
[Streamlit app](https://share.streamlit.io/starchildluke/tag_suggester/main/tagsuggester.py)

Example from [Cultrface](https://cultrface.co.uk):

[https://google.com/search?q=martin+luther+king+soup](https://google.com/search?q=martin+luther+king+soup)

As they are randomised, some of the results are more nonsense than anything but you never know. That's the beauty of it&mdash;you could end up down a rabbit hole you never knew existed.

Feel free to fork the repository and make your own version (subject to the AGPL-3.0 License)

**UPDATE**: So this script doesn't update the JSON files containing all the blog tags as I had hoped. Still looking into how to do that but if anyone reading this knows how to update a JSON file via a Streamlit app hosted on GitHub, I'd love to know.