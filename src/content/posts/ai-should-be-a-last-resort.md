---
title: 'AI should be a last resort'
description: "We're told that AI is simultaneously the present and the future and you'll be a husk of a human being if you don't just embrace it and get on the train. Here's why that's untrue."
published: true
pubDate: '14 May 2023'
tags: ['AI', 'tech']
---

Ooh, edgy title! But let me back up my _lukewarm_ take (heh).

We're told that [AI](/jardim/tech/ai/) is simultaneously the present and the future and you'll be a husk of a human being if you don't just embrace it and get on the train. Of course, this is absolute nonsense fueled by hypercapitalism but that doesn't make it any less convincing to "experts" and companies looking for more profit and less outlay (see: [tech layoffs](https://www.computerworld.com/article/3685936/tech-layoffs-in-2023-a-timeline.html)).

The problem with this ideology is the implication that whatever you're doing now is outdated because we said so and regardless of whether it works. Writers aren't any less qualified or effective than they were in 2019 or before. So why is this burgeoning technology suddenly an answer to a problem that never really existed? Except there _is_ a problem: companies need to recoup the money they lost during the pandemic, and what better way to do that than to **not** pay employees who need pay rises and instead completely replace them with language models they can tinker with at the fraction of the price. If those writers are lucky, they might stay on but have an increased workload (for no extra pay) involving editing <abbr title="large language model">LLM</abbr> outputs rather than writing copy from scratch.

That's the situation we're in and will continue to be in while AI is seen as the first port of call to any kind of problem. By taking a step back, you can see the wider picture and realise that there are a multitude of options that come **before** opting for AI. Here are just a few:

* Ask yourself truthfully if there's even a problem to solve
* Pay your damn people and let them work if there is
* Consider a programmatic approach where applicable (this comes with similar caveats to AI use so don't fall down a similar trap)

## I object/subject!

Of course, none of this is to say "don't even THINK about AI"&mdash;I'm not a conservative&mdash;but instead think before you leap into something that could cause harm, and arguably is already. Testing stuff is cool and recommended. That's why I built Oapy with a mirror of OpenAI's Playground tool. Give this [prompt engineering](/posts/prompt-engineering/) thing a go, read up on how it really works, and see what sticks and what doesn't. A great article I read a few weeks ago by Mitchell Hashimoto called [Prompt Engineering is for Transactional Prompting
](https://mitchellh.com/writing/prompt-engineering-transactional-prompting) touches on the objective and subjective nature of prompt design and where our LLM use cases fall. I'd found issues with using LLMs for generative purposes despite using all the techniques I'd found from language tech professionals. But Mitchell suggests that these use cases fall in the subjective category and that makes them hard to test for accuracy:

> If we have an input that can produce an objectively correct (or I'd even argue "mostly correct") output, then prompt engineering can be successfully applied. Examples of problems with objectively correct results: information extraction, classification, limited forms of code generation, etc.
<br>
> However, if we have an input that produces something subjectively correct, then prompt engineering is much less useful. The best example of subjective results are creative tasks such as art generation, writing, semantic search.

Of course, people will&mdash;and should&mdash;argue that prompt engineering has helped improve creative tasks. But that also, arguably, requires the practioner to have a good understanding of their niche. A very good artist or writer with enough knowledge of what they want and how to achieve it via prompt engineering will get the results they need. It won't need testing either as they'll just know based on experience. But someone looking to cut costs and maximise profit will assume you say some magic words and press a button and it'll just happen because the AI bros said so and they're never wrong.

## Cases where AI could be better

My main argument for AI as a last resort is stronger for those subjective channels of generation. However, with the objective channels such as "information extraction, classification, limited forms of code generation etc." (ie. most NLP problems) AI can go further up the pecking order. That's because tools for these tasks have existed for years and have shown varying levels of success. If they work for you, perhaps you don't need to consider AI at all. But if you need improvements or can't afford to pay for these tools (a better cost-cutting measure than firing writers I'd say), AI would be a good consideration. That's because language models in particular are very good at solving NLP problems, with minimal training or supervision. For example, my [RALTS classification tool](/posts/introducing-ralts/) uses [DistilBart-MNLI](https://huggingface.co/valhalla/distilbart-mnli-12-9) with [zero-shot learning](https://en.wikipedia.org/wiki/Zero-shot_learning) and the results have been good enough that I'd never want to fine-tune it. Here's how it classified this blog post:

![A plot showing different classification categories for this post, analysed by a large language model. It suggested that this post is about Technology, Information extraction, Artificial intelligence, Interdisciplinary branches of psychology, Artificial general intelligence, Cognition, Concepts in metaphysics, Branches of science, Cognitive science, and Natural language processing](/images/blog-classification.jpg)

Another great article I found a while back titled ["Choosing the right language model for your NLP use case"](https://towardsdatascience.com/choosing-the-right-language-model-for-your-nlp-use-case-1288ef3c4929) showed the efficacy of various models (as of September 2022). Some were very good at the aforementioned objective NLP tasks and not so good with content generation, and vice versa. We obviously have ChatGPT and GPT-4 now, as well as a growing number of open source models built of those commercial models, and those gaps are getting smaller by the day. But there isn't truly a one-size-fits-all model yet and, despite what anyone is telling you, we are no closer to AGI and I don't think we ever will be so stop talking about it, okay?!

## Being conscious with my conscience

I've been the main guy at work when it comes to AI. I talk about it a lot, I try to show the best use cases, I've even done a webinar on it. But I also show the potential risks and harms of the tech as well because it's not all interesting and amazing. I worry that the former will outweigh the latter in people's perceptions and I'll be the one responsible. That could be unfounded but who am I to say?

I also worry I come off as a hypocrite. I do believe there should be some kind of pause and some kind of regulation but I don't agree with the [open letter](https://futureoflife.org/open-letter/pause-giant-ai-experiments/) that likes of Gary Marcus and Elon Musk signed _because_ Musk was involved, which despite Marcus's claims should be scrutinised given his [practices](https://www.vanityfair.com/news/2022/04/elon-musk-twitter-terrible-things-hes-said-and-done) and [intentions](https://www.theverge.com/2023/4/17/23687440/elon-musk-truthgpt-ai-chatgpt); this isn't a [The Worst Person You Know Just Made A Great Point](https://clickhole.com/heartbreaking-the-worst-person-you-know-just-made-a-gr-1825121606/) moment). I also worry that a regulatory committee will be whitewashed and cause further harm to the women in AI who have been advocating for better ethics for years.

I don't have any concrete answers to the problems I see in AI but I do know that I want people to be safe. I don't feel like we're getting any safer with this tech in its current state and with what we're told it can, should, is, and will be used for. AI should be the last resort, not the protection of our lives and where we live.