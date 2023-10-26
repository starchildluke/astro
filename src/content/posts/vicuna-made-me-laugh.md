---
title: 'I tried Vicuna and it made me laugh'
published: true
pubDate: '27 Apr 2023'
layout: ../../layouts/BlogPost.astro
tags: ["AI"]
---

Two weeks ago, I found [Vicuna](https://chat.lmsys.org/), "an open-source chatbot impressing GPT-4 with 90%* ChatGPT quality". I knew to take that 90% stat with a pinch of salt, regarless of the asterisk, but wanted to try it. ([tweet for proof](https://twitter.com/LukeDavisSEO/status/1646540360670228482))

For my prompt, I tried something I've been using on GPT3.5:

<div class="prompt-box">Write a four-sentence blog post about the hundred dollar bill in the style of [name redacted].</div>

And the output:

<div class="output-box">The hundred dollar bill is a denomination of United States currency. It features a portrait of Benjamin Franklin on the obverse and an eagle flying over a rocky shore on the reverse. In recent years, the hundred dollar bill has become increasingly popular as a medium of exchange, particularly in the underground economy and in online transactions. Despite its widespread use, the hundred dollar bill remains a symbol of wealth and prestige, and is often associated with luxury and success.</div>

Sounds believable... but it's not all true. There isn't a flying eagle nor a rocky shore on the back. The rest is generic and subjective. It certainly wasn't in the style of the redacted person I used. But I didn't expect perfection or 100% truth (and neither should you!)

Now to test the chatbot element. I then prompted Vicuna to reword the previous output "in the style of Don King". I wanted something ostentatious and my mind went to Don King as I've used boxing related prompts in previous examples. Here's the result:

<div class="output-box">Yo, what's good people! Let me tell you about the hundred dollar bill. It's a big deal, ya hear me? This piece of paper with Benny Franklin's mug on it is what's up, Tinseltown! It's got the power to make your dreams come true, or at least get you some fancy threads and a fancy car. But don't get it twisted, this bill is not just for the rich and famous, it's for anyone who's got the hustle and the flow. So if you're looking to make some serious cash, don't sleep on the hundred dollar bill, baby!</div>

Out. Standing.

It's a **very** bad caricature of Don King but it made me laugh _because_ it was so bad. I could see a crap (probably white, almost certainly cis male) comedian try this and flop. If there's one profession I'd like to see put out of business because of AI, it's that (I jest; AI is still as prone to racist as white male comedians given they both get their 'humour' from Reddit anyway, but I digress).

## More on Vicuna

[Vicuna published a full breakdown of the model](https://lmsys.org/blog/2023-03-30-vicuna/), it's advantages, and disadvantages. The tl;dr: it's a good open-source alternative but it could never be as good as Bard/any GPT model. Unfortunately, the dataset isn't available and there are no plans to release it which is a shame and undermines the open-sourceness of it a little, but it might also be a legal thing; I dunno.

## A different test

I also used it to try and find a link between two randomly selected tags from my blogs. I got 'bell hooks' and 'Tony Hawk' and this is what it said:

<div class="prompt-box">Give me an entity that links bell hooks and Tony Hawk</div>
<div class="output-box">It is not immediately clear what connection, if any, exists between bell hooks and Tony Hawk. bell hooks is an American author, feminist, and social activist, known for her
critical race theory and gender studies. She is a professor at the City University of New York and has written many books on topics such as race, gender, and sexuality. Tony
Hawk, on the other hand, is an American professional skateboarder, actor, and television personality, known for his career in skateboarding and his appearances on
television shows such as "The Tony Hawk Show" and "Proving Ground". It is not clear how these two individuals would be linked, as their areas of expertise and interests
seem to be quite different.</div>

Coherent and fairly true. I wouldn't have expected an open-source model to find a deeper connection than I would have found besides them both being American.

I also tried Teenage Mutant Ninja Turtles and jewelry:

<div class="output-box">One possible entity that links jewelry and Teenage Mutant Ninja Turtles is the character April O'Neil, who is a human character in the TMNT franchise and is often depicted wearing jewelry. April is a journalist who becomes the turtles' ally and friend, and she is often shown wearing various types of jewelry, such as earrings, bracelets, and necklaces. The turtles themselves are also sometimes shown wearing jewelry, such as necklaces or headbands, particularly in the early cartoon series. In addition, there are many pieces of TMNT-themed jewelry that have been created for fans of the franchise, such as rings, pendants, and charm bracelets featuring the turtles and other characters from the series.</div>

Again, plausible. The last part in particular inspired me to find this piece of [TMNT-themed jewelry](https://cultrface.co.uk/check-out-this-iced-tmnt-pendant/) which I blogged about. And that's the beauty of this tech. To paraphrase Joe MacMillan from Halt and Catch Fire, "AI isn't the thing; it's the thing that gets you to the thing." AI can't give me a finished product but it can certainly help me get there, alongside my ingenuity.

## Caveats

As we saw in the very first prompt + output, hallucinations are still a big flaw and it gets bigger with open source models created from better closed-source models. The idea is to take what's there and refine and pre-train it on high quality training data to perform specific tasks. That's where this tech excels. Where you'll find outliers and inconsistent performance is trying to turn this proverbial black box into a Tower of Babel but that isn't stopping every AI startup from trying.

I tried another pair of entities to see how they were linked (Martin Luther King and Cuba) and the model's output said MLK had visited Cuba in 1960. That didn't happen. These things aren't great for factual information, even when you hook them up to the internet—you know, that completely factual and never wrong platform of knowledge.

### More on AI

* [/prompt-engineering.md](/posts/prompt-engineering/)
* [/ai-is-a-lot-like-an-orange.md](/posts/ai-is-a-lot-like-an-orange/)
* [/future-coca-cola-slogans-ai.md](/posts/future-coca-cola-slogans-ai/)
* [/a-poem-about-how-search-engines-cant-interpret-poems.md](/posts/a-poem-about-how-search-engines-cant-interpret-poems/)