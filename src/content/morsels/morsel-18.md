---
title: 'Morsel #18: drumples'
published: true
pubDate: '03 Apr 2025'
tags:
  - Python
  - tech
  - music
  - marimo
---

I made a marimo notebook that pulls 3 random drum samples and lets you play them along with a random song from a Spotify playlist(s).

<figure style="aspect-ratio: 2 / 1;">
  <img src="/images/drumples.webp" alt="the UI for my drumples app" loading="eager">
</figure>

<details>
  <summary>
    <strong>Disclaimer</strong>
  </summary>
    <p>I used a local LLM (large language model) to generate the code for the Spotify playlist song randomiser, in the name of vibe coding. This was intended to be a personal project and everything worked with minimal changes. You're welcome to change things up if they're suboptimal.</p>
</details>

## Links

* [GitHub link](https://github.com/starchildluke/drumples)

## Requirements

* [marimo](https://marimo.io/)
* [Spotify API credentials](https://developer.spotify.com/documentation/web-api)

I sadly can't demo it as I don't want to make Spotify API access public so you'll have to sign up yourself. But once you have those credentials and you've got your audio files ready, click Generate New Set to get a randomised set of kick, snare, and hi-hat sounds along with a track from your randomised Spotify playlists.

## Why did I make this

I make beats a lot and I buy/download a lot of drum packs over the years. That means hundreds of drum packs get unused thanks to recency bias. A project like this can help me use drums I would never have used before, as well as shake things up with the samples I use.

## Ideas and improvements

* The code isn't great so feel free to critique it (but please be kind if you do; I'm a self-taught Python coder!)
* I'm also not great with Git so feel free to critique how I set up this repo (again, please be kind!)
* I have been working on having the sounds play a mini loop but I've not included that in this repo.
* I guess you could replace Spotify playlists with YouTube videos or any other streaming platform with an API