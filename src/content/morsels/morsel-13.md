---
title: 'Morsel #13: YouTube max thumbnail grabber'
published: true
pubDate: '07 Aug 2024'
tags:
  - Javascript
  - the Internet
  - tech
---

<form id="youtube-form">
    <label for="youtube-url">Enter YouTube URL:</label>
    <input type="text" id="youtube-url" name="youtube-url" required>
    <button type="submit">Grab that thumbnail!</button>
</form>

<div id="thumbnail-container"></div>

---

A while back, I made a YouTube thumbnail grabber for my Terminal using Python. Here's a command example:

`py yt.py -u "https://www.youtube.com/watch?v=dQw4w9WgXcQ"`

But I'm lazy and wanted something I could just access online. [Boing Boing](https://boingboing.net/features/getthumbs) already has a thumbnail grabber but it displays all thumbnail sizes. I just need the biggest (as I used them for featured images on my blogs) so rather than copy, I decided to use Google's [Gemini](https://gemini.google.com/) to generate the code.

_**Please note**: I have looked through the code, tested it, and rewritten some of it as not to just copy and paste AI-generated content. However, if you see any non-stylistic issues with the code, please let me know._

_**Update: 21st Dec 2024**: it looks like YouTube has killed the maxresdefault image so I've replaced it with hqdefault. If it comes back, I'll change it back._

_**Update: 27th Feb 2025**: maxresdefault is baaaaaack!_

## How the code works

I have a standard form with a text input and a submit button. When I enter a valid YouTube URL and click submit, the script checks for validity (and ensures no attempts at [XSS attacks](https://owasp.org/www-community/attacks/xss/) get through), extracts the video ID and creates the thumbnail URL to display.

If an invalid YouTube URL is submitted, you get an error message (try it and see!). You also can't submit an empty field either as it will warn you.

The reason I used AI for this is because I was trying to recreate code that I'd written elsewhere and it wasn't working and I could foresee losing hours and hours of my life when I could just get a large language model to do it and check the work.

<script>
        const form = document.querySelector('#youtube-form');
        const thumbnailContainer = document.querySelector('#thumbnail-container');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const youtubeUrl = document.querySelector('#youtube-url').value;
            const videoId = extractVideoId(youtubeUrl);
            if (videoId) {
                generateThumbnail(videoId);
            } else {
                document.querySelector('#thumbnail-container').innerHTML = 'Invalid URL, try again! :(';
            }
        });

        function extractVideoId(url) {
            const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            const match = url.match(regex);
            return match ? match[1] : null;
        }

        function generateThumbnail(videoId) {
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

            const img = document.createElement('img');

            img.src = thumbnailUrl;

            thumbnailContainer.innerHTML = '';
            thumbnailContainer.appendChild(img);
        }
    </script>

<style>
    #thumbnail-container {
        margin: 1rem 0;
        font-size: 2rem;
        font-weight: 700;
    }
</style>