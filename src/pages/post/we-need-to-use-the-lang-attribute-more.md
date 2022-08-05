---
title: 'We Need To Use The Lang Attribute More'
published: true
date: '14 Jun 2018'
layout: ../../layouts/BlogPost.astro
tags:
- '[the web](/wiki/tech/internet/)'
- css
---

I love different languages and I admire polyglots. I'm currently learning Portuguese and brushing up on Spanish and French on Duolingo and my reading is much better than my speaking. But what if you had impaired sight and needed to use a screen reader. <a href="https://www.youtube.com/watch?v=ox5QVbZSPBk">Foreign languages written on English websites are read in English voices as if they were English words</a>. That's no good to a foreign language speaker. But there is a solution.

In HTML, there's a lang attribute that allows you to set a page's language and, if you need to, add the language to any number of words or sentences for others. When I wrote this article, I had to write something in Portuguese. I added the following code to the paragraph:

```<span lang="pt">O Sexto</span>```

I then added some style to it with CSS:

```css
:lang(pt) { 
    font-style: italic;
	color: #00661a;
	border-bottom: 1px solid #ff0017;
}```

The colours were just for fun but it's a great way for those learning the language to be able to differentiate words and practise while those who require screen readers can understand what is written in their mother tongue.

For more info on the lang attribute, check out a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang">full explanation on Mozilla's MDN database</a>, the <a href="https://www.w3schools.com/cssref/sel_lang.asp">CSS :lang() Selector on W3Schools</a>, and <a href="https://www.w3.org/International/questions/qa-css-lang">how to style them on the W3 website</a>.