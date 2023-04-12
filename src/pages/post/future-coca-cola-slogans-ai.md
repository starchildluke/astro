---
title: 'Future Coca-Cola slogans with GPT-3.5'
published: true
date: '12 Apr 2023'
layout: ../../layouts/BlogPost.astro
tags:
- '[AI](/wiki/tech/ai/)'
---

While researching for a blog post about Coca-Cola, I found a list of their slogans dating as far back as 1886:

<details>
	<summary>List of slogans</summary>
	<ul>
<li>1886 - Drink Coca-Cola</li>
<li>1904 - Delicious and Refreshing</li>
<li>1905 - Coca-Cola Revives and Sustains</li>
<li>1906 - The Great National Temperance Beverage</li>
<li>1917 - Three Million a Day</li>
<li>1922 - Thirst Knows No Season</li>
<li>1923 - Enjoy Thirst</li>
<li>1924 - Refresh Yourself</li>
<li>1925 - Six Million a Day</li>
<li>1926 - It Had to Be Good to Get Where It Is</li>
<li>1927 - Pure as Sunlight</li>
<li>1927 - Around the Corner from Everywhere</li>
<li>1929 - The Pause that Refreshes </li>
<li>1932 - Ice Cold Sunshine</li>
<li>1938 - The Best Friend Thirst Ever Had</li>
<li>1939 - Thirst Asks Nothing More</li>
<li>1939 - Whoever You Are, Whatever You Do, Wherever You May Be, When You Think of Refreshment Think of Ice Cold Coca-Cola</li>
<li>1942 - The Only Thing Like Coca-Cola is Coca-Cola Itself</li>
<li>1948 - Where There's Coke There's Hospitality</li>
<li>1949 - Along the Highway to Anywhere</li>
<li>1952 - What You Want is a Coke</li>
<li>1956 - Coca-Cola... Makes Good Things Taste Better</li>
<li>1957 - Sign of Good Taste</li>
<li>1958 - The Cold, Crisp Taste of Coke</li>
<li>1959 - Be Really Refreshed</li>
<li>1963 - Things Go Better with Coke</li>
<li>1969 - It's the Real Thing </li>
<li>1971 - I'd Like to Buy the World a Coke (part of the "It's the Real Thing" campaign)</li>
<li>1975 - Look Up America</li>
<li>1976 - Coke Adds Life </li>
<li>1979 - Have a Coke and a Smile</li>
<li>1982 - Coke Is It! </li>
<li>1985 - We've Got a Taste for You (for both Coca-Cola & Coca-Cola classic)</li>
<li>1985 - America's Real Choice (for both Coca-Cola & Coca-Cola classic)</li>
<li>1986 - Red, White & You (for Coca-Cola classic)</li>
<li>1986 - Catch the Wave (for Coca-Cola)</li>
<li>1987 - When Coca-Cola is a Part of Your Life, You Can't Beat the Feeling</li>
<li>1988 - You Can't Beat the Feeling </li>
<li>1989 - Official Soft Drink of Summer</li>
<li>1990 - You Can't Beat the Real Thing</li>
<li>1993 - Always Coca-Cola</li>
<li>2000 - Coca-Cola. Enjoy</li>
<li>2001 - Life Tastes Good</li>
<li>2003 - Coca-Cola ... Real</li>
<li>2005 - Make It Real</li>
<li>2006 - The Coke Side of Life</li>
<li>2009 - Open Happiness</li>
<li>2016 - Taste the Feeling</li>
<li>2021 - Real Magic</li>
</ul>
</details>


And that got me thinking... what would GPT-3.5 create based on those examples? So I put it in using a private "lite" version of Oapy with the following prompt:

<code>Create 10 more Coca-Cola slogans based on the following examples and following the format: [THE ABOVE LIST WENT HERE]</code>

I also gave it a headstart and appended the prompt with <code>2023 - </code>

The results were:

* 2023 - Discover the Magic of Coca-Cola
* 2025 - Refresh Your World with Coca-Cola
* 2027 - Share the Happiness with Coca-Cola
* 2030 - The Real Taste of Life: Coca-Cola
* 2032 - The Magic is in the Bottle: Coca-Cola
* 2035 - Coca-Cola: The Ultimate Refreshment
* 2040 - Experience the Magic of Coca-Cola
* 2042 - Always Real, Always Coca-Cola
* 2045 - Taste the Magic of Coca-Cola
* 2050 - Unlock the Magic of Coca-Cola

A little stilted. I think the latter slogans influenced the output with its use of the brand name, resulting in lifeless results. Let's try with just slogans from the 21st century:

* 2023 - Refresh Your World
* 2025 - Experience the Joy of Coke
* 2027 - Spark Happiness with Coca-Cola
* 2028 - Unleash the Magic of Coca-Cola
* 2030 - Enjoy the Authentic Taste of Coke
* 2032 - Savor the Moment with Coca-Cola
* 2034 - Real Moments, Real Coca-Cola
* 2036 - Experience Coke, Experience Life
* 2038 - Share the Love with Coca-Cola
* 2040 - The Real Refreshment You Need

And the 80s to 90s?

2023 -

1. Refreshment in Every Sip (for Coca-Cola classic)
2. Taste the Difference with Coca-Cola
3. Coca-Cola: The Classic Choice
4. Satisfy Your Thirst with Coca-Cola
5. The Perfect Drink for Any Occasion
6. Enjoy Coca-Cola, Enjoy Life
7. A Taste of Happiness with Coca-Cola
8. Quench Your Thirst with Coca-Cola
9. Coca-Cola: A Timeless Classic
10. Experience the Flavor of Coca-Cola

Interestingly, the years weren't used in this, possibly because 2023 was a large jump from 1993. Either way... it didn't make much difference. I'm not prompt engineer so maybe someone else can get better results based on this example of few-shot learning?

But we must remember that unrefined language models outputs are not production-ready. If you're using them for generative tasks, you iterate and refine until you get what you need. If I remove the mentions of Coca-Cola from the last version, we get:

1. Refreshment in Every Sip
2. Taste the Difference
3. The Classic Choice
4. Satisfy Your Thirst
5. The Perfect Drink for Any Occasion
6. Enjoy Coca-Cola, Enjoy Life
7. A Taste of Happiness
8. Quench Your Thirst
9. A Timeless Classic
10. Experience the Flavor

Yikes, they're even worse without the brand name and some are already taken (Tesco uses Taste the Difference and Satisfy/Quench Your Thirst are close to Sprite's Obey Your Thirst, which the Coca-Cola Company owns but you don't want to mix things up like that.)

This is why we still have brand consultants and agencies, I guess?