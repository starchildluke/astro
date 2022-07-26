---
title: 'Morsel #2 - The YouTube Thumbnail Extractor'
published: true
date: '01 May 2022'
layout: ../../../layouts/Morsels.astro
---

My second morsel is a Python script that extracts thumbnails from YouTube videos.

## Links

* [GitHub link](https://github.com/starchildluke/yt_thumbnail)
* [Streamlit app](https://share.streamlit.io/starchildluke/yt_thumbnail/main/yt_st.py)

## Requirements

* [Python 3](https://www.python.org/downloads/)
* [requests](https://docs.python-requests.org/)
* [streamlit](https://streamlit.io/)

Add the URL to extract the thumbnail from and it will display it at the bottom. Currently only works if you put in the full YouTube video URL without any parameters (so not youtu.be or ?t=8 for example). Again, open to suggestions on how to make it work with any valid YouTube URL (as I'm not so great with [re](https://docs.python.org/3/library/re.html) yet)

![The UI of my script showing a text input where you can enter the YouTube video URL, a button that says 'Extract thumbnail', and an extracted thumbnail underneath](/images/yt_st.gif)