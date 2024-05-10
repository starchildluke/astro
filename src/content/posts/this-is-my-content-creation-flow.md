---
title: 'This is my content creation flow'
description: "Here is how I create content"
pubDate: '19 Mar 2020'
layout: ../../layouts/BlogPost.astro
tags: ['blogging', 'the Internet', 'writing']
---

A few months ago, I "revealed" my content creation flow on Twitter (as if it was a secret) and I said I'd write about it in more detail. So here it is.

## Tools of the trade
For the flow to work, I need tools to help me and streamline the process. I'm prone to getting ideas and forgetting them so structure is essential for me.

The things I use are:

* [Feedly](https://feedly.com/)
* [Pocket](https://getpocket.com/en/)
* [Raindrop](https://raindrop.io/)
* [Pinboard](https://pinboard.in/)
* [Python](https://www.python.org/)
* [Wordpress](https://wordpress.org/)/~~[Grav](https://getgrav.org/)~~
* [Buffer](https://buffer.com/)
* [Twitter](https://twitter.com/)

In terms of cost: Pocket, Python (I use ~~[Google Colab](https://colab.research.google.com/)~~ [Jupyter Notebook](https://jupyter.org/) as a virtual notebook environment), Wordpress ~~and Grav~~, and Twitter are free. Raindrop is free but I pay £3/month for extra features (not essential but I wanted to try them and I'll explain more about it later). Buffer is $10 for their Awesome Plan, which lets me send updates through 10 different social accounts. Pinboard costs $18 a year for a basic account.

In total, it costs me about £140 a year but you could easily do it for free if you followed my process and maybe replace Pinboard with Raindrop for general bookmarks or just keep them in your browser.

## The process
I run 5 main blogs (and this personal blog) mostly on my own and that means I can't update everything as regularly as I'd like. To avoid losing steam and ideas, I follow this process:

1. I find interesting content on the Web, either on Twitter or Feedly
2. If it piques my interest, it goes into my Pocket list for further evaluation (unless I read it there and then)
3. If I want to write about it, I add it to one of my Raindrop folders (called Collections)
4. If I don't want to write about it but I want to keep it for reference, I add it as a bookmark in Pinboard
5. I use a special Python script to decide what to write about
6. I use Wordpress as the CMS for my main blogs and Grav for this site
7. I use Buffer to schedule updates (or if I don't write about it, I just put the link on there)

## The Python script
If you're not familiar with Python, you can skip this part as it's purely for my benefit. Otherwise, keep reading!

[Raindrop has its own API](https://help.raindrop.io/collections/) which gives access to my account and all the bookmarks in my Collections. Here's the code:

~~~
import requests
import random

headers = {'Authorization': 'Bearer AUTHORIZATION_CODE'}

r = requests.get(
'https://api.raindrop.io/rest/v1/collections/childrens', headers=headers)

response = r.json()

raindrop_list = []

for num in range(0,len(response["items"])):
	count = response["items"][num]["count"]
	title = response["items"][num]["title"]
	title_count = (title, random.randint(0,count))
	raindrop_list.append(title_count)
	raindrop = [tuples for tuples in raindrop_list if tuples[1] != 0]

rand = random.randint(0,len(raindrop_list)-1)
print(raindrop[rand])
~~~
I'll explain each line.

`requests` gives me access to the API and `random` is for the random pick, which I'll explain in a second.

I set the headers which contains my authorisation token and that is added to the Collections URL. I then convert the data into readable JSON so I can access the relevant keys and values.

`raindrop_list` is an empty list which will be filled with tuples. Those tuples contain the name of the Collection and the number of bookmarks in them (eg. `('Food & Drink', 7)`)

I create a for loop that goes through each Collection via a range. I store the count of each Collection in a variable called `count` and the title in `title`.

`title_count` creates the tuple mentioned above but the number is a random integer between 0 and `count`.

Each `title_count` gets added to `raindrop_list` and then I assign a new list comprehension to a variable called `raindrop` which gets rid of all the empty Collections.

Finally, I create a random integer between 0 and `len(raindrop_list)-1` and use that as the random index of `raindrop` which gets printed out.

Make sense? Probably not as that's the first time I've ever had to explain one of my scripts. In a nutshell, the script randomly selects a Collection and a bookmark from that Collection for me to write about. It keeps me fresh and I don't get bogged down in something I just saw. I also get rid of older content and it never gets stale.

As for the reason why I decided to pay for Raindrop - with the free version, you get root Collections only. With the paid version, you can nest Collections inside root Collections so I can segment by blog category.

## Conclusion
This is a flow that works for me and I'm almost certain it won't work for anyone else. That's because I often write about random things I think are cool and I don't have clients or money invested in my content (excluding web hosting). So it could be cool to me but nobody read it. Fine for me, not for clients!

But the fundamental process is transferrable. You organise your data into certain places and dip in when you need to. And when you're done, you can delete them. I used to have a major problem of adding things to Pocket and they just... stayed there. Now, I actively go through them, and move them to better places if I keep them or delete them when I'm done.