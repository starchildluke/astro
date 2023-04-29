---
title: 'How I display my Last.fm top 1000 artists'
published: true
date: '28 Apr 2023'
layout: ../../layouts/BlogPost.astro
tags:
- '[music](/wiki/music/)'
- '[Python](/wiki/tech/python/)'
---

I decided to create a page to [display my Last.fm top 1000 artists](/lastfm-top-1000/). Here's how I did it.

## 1. Get the data

To get this data, you need the [Last.fm API](https://www.last.fm/api) and an account. With my credentials, I wrote a script that scraped the data and created a JSON file out of it:

```python
import requests
import json

payload = {
  'api_key': API_KEY,
  'format': 'json',
  'limit': 1000,
}

r = requests.get('https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=USERNAME', params=payload)

res = r.json()

for key in range(0,len(res['topartists']['artist'])):
    
  # Change #text to text
  for i in range(0,len(res['topartists']['artist'][key]['image'])):
    res['topartists']['artist'][key]['image'][i]['text'] = res['topartists']['artist'][key]['image'][i]['#text']
    del res['topartists']['artist'][key]['image'][i]['#text']
    
  # Change @attr to attr
  res['topartists']['artist'][key]['attr'] = res['topartists']['artist'][key]['@attr']
  del res['topartists']['artist'][key]['@attr']
    
  # Change playCount from str to int
  res['topartists']['artist'][key]['playcount'] = int(res['topartists']['artist'][key]['playcount'])


with open('FILEPATH', "w+") as f:
  json.dump(res, f, indent=4)
```

This created a <code>lastfm.json</code> file. You'll notice that I've made a few changes to the JSON object before writing it to the file. This is because the '@' and '#' characters cause issues when using the map() function in JavaScript (more on that later). Now there's time to use the Fetch API.

## 2. Fetch the data

I use the Fetch API for my wiki pages to pull data from my other WordPress blogs via the REST API. In this case, I'm pulling from a local JSON file so I start by importing the file:

```javascript
import lastfm from '../data/lastfm.json';
```

Then I use .map() to map the rank, artist, and playcount to a table.

```html
<table>
  <thead>
    <tr>
      <th>Pos.</th>
      <th>Artist</th>
      <th>Playcount</th>
    </tr>
  </thead>
{lastfm.topartists.artist.map((item) => (
  <tr>
    <td>{item.attr.rank}</td>
    <td><a href={item.url}>{item.name}</a></td>
    <td>{item.playcount.toLocaleString()}</td>
  </tr>
))}
</table>
```

A couple of things to note: <code>lastfm.topartists.artist.map</code> gets all the artist data and <code>item.playcount.toLocaleString()</code> converts the playcount and adds a thousands comma seperator.

And that's it. If you have any questions, email me or tweet me.