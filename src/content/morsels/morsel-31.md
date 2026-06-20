---
title: 'Morsel #31: Championship Manager 01/02 Fallen Greats Picker'
description: 'The third version of a JS thing I found years ago'
published: false
pubDate: '18 Jun 2026'
tags: ['JavaScript', 'sport', 'gaming']
---

<style>
	.picker {border: 2px solid green; border-radius: 10px; background: rgba(0,255,0,0.1); margin-bottom: 2rem; padding: 1rem; text-align: center; font-size: 1.5rem;}
	.flags, .team {font-size: 2rem;}
	.flags span {cursor: pointer;}
	.flag-img {display: inline; vertical-align: center;}
	.team {font-weight: 700;}
</style>

<div class="picker">
	<p><strong>Click a flag and find a team to manage in Championship Manager 01/02</strong></p>
	<p class="flags"></p>
	<p class="team"></p>
</div>

<details>
	<summary><strong>What is this?</strong></summary>
<br>
Ever since I found <a href="https://web.archive.org/web/20090122154730/http://dudllm.mywebcommunity.org/">a random team picker for Football Manager</a> many years ago, I've tried to make my own since the original is no longer online. I've managed to cobble one together which you can see below. The team choices aren't consistent but it seems to work.

To use it, you click on a flag and it gives you a random team from that country that I've considered a "fallen great". The criteria is loose but these teams have previously won titles in the past but not for a while and may have been relegated or otherwise fallen from grace in recent years.

I've also narrowed the list down to playable nations in Championship Manager 01/02 as I play that the most (if a flag is missing, that's because I haven't filled out the teams list yet). The JSON data file has playable nations for FM25 so if I wanted to expand it, I would simply change the filter variable from `item.cm` to `item.fm` which are either `true` or `false` for each game.

### Note:

No generative AI or chatbot suggestions was used in the making of this (but I Googled stuff when I got stuck and only used Stack Overflow).
</details>

<script>
	fetch('/flags.json')
    .then((response) => response.json())
    .then((data) => {
    	const flags = data.filter(
    			(item) => item.cm && item.teams.length).flatMap(
    				(item) => 
    					item.flag ? `<span id=${item.name}>${item.flag}</span>` : `<span id=${item.name}><img id=${item.name} src=${item.svg} alt="flag of ${item.name}" width="32" class="flag-img" /></span>`).join(' ');
    	const flagsEl = document.querySelector('.flags')
    	flagsEl.innerHTML = flags;
    	flagsEl.addEventListener("click", function (e) {
    		const teamEl = document.querySelector('.team');
    		const teams = data.filter(
    			(item) => item.name == e.target.id).flatMap(
    				(item) => item.teams[Math.floor(Math.random()*item.teams.length)]);
			teamEl.innerHTML = teams;
    	});
    })
</script>