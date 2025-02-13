---
title: 'How I display my Last.fm top 1000 artists'
description: "A lengthy post on how I create my list of Last.fm top 1000 artists"
published: true
pubDate: '28 Apr 2023'
tags: ['music', 'Python']
---

<em>Note: I have since updated the below code as of 4th May 2023.</em>

I decided to create a page to [display my Last.fm top 1000 artists](/lastfm-top-1000/). Here's how I did it.

## 1. Get the data

To get this data, you need the [Last.fm API](https://www.last.fm/api) and an account. With my credentials, I wrote a script that scraped the data and created a JSON file out of it:

```python
import requests
import json
import datetime

payload = {
  'api_key': API_KEY,
  'format': 'json',
  'limit': 1000,
}

r = requests.get('https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=USERNAME', params=payload)

res = r.json()

for key in range(0,len(res['topartists']['artist'])):
    
    # Change playCount from str to int
    res['topartists']['artist'][key]['playcount'] = int(res['topartists']['artist'][key]['playcount'])

    res['last updated'] = datetime.datetime.now().strftime('%d %B %Y')

with open('../data/lastfm.json', "w+") as f:
    json.dump(res, f, indent=4)
```

This created a <code>lastfm.json</code> file. I also included a key for the date when I update the file so I can display that on the page. Now there's time to use the Fetch API.

## 2. Fetch the data

I use the Fetch API for my wiki pages to pull data from my other WordPress blogs via the REST API. In this case, I'm pulling from a local JSON file so I start by importing the file:

```javascript
import lastfm from '../data/lastfm.json';
```

Then I use .map() to map the rank, artist, and playcount to a table.

```html
<p>Last updated: {lastfm['last updated']}</p>
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
      <td>{item['@attr'].rank}</td>
      <td><a href={item.url}>{item.name}</a></td>
      <td>{item.playcount.toLocaleString()}</td>
    </tr>
  ))}
  </table>
```

A couple of things to note: <code>lastfm.topartists.artist.map</code> gets all the artist data and <code>item.playcount.toLocaleString()</code> converts the playcount and adds a thousands comma seperator.

And that's it. If you have any questions, email me or tweet me.