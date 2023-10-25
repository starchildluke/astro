---
title: 'Morsel #3: a custom font preload fix in WordPress'
published: true
pubDate: '25 May 2022'
layout: ../../layouts/Morsels.astro
---

My third morsel is actually a WordPress fix.

I decided to write this as I couldn't find the answer I was looking for myself and thought it might help anyone who had the same problem in the future.

**Problem**: I realised the custom self-hosted fonts I was using on my WordPress sites weren't actually loading. I realised this after seeing the following message: 

```The resource X was preloaded using link preload but not used within a few seconds from the window’s load event. Please make sure it has an appropriate ‘as’ value and it is preloaded intentionally.```

That basically means the font loaded but it wasn't used _at all_. I tried all the different things that Stack Overflow said but it still wouldn't work. Long story short: the @font-face declarations I was making in the main theme CSS file weren't acknowledged so I put them in the WordPress Customizer panel. To do that:

* Go to your Admin panel and then go to Appearance > Customize > Additional CSS
* Enter the appropriate @font-face code

I used the following @font-face format:

```css
@font-face {
  font-family: 'FontName';
  src: url(PATH) format('woff2');
  src: url(PATH) format('woff');
  font-weight: whatever that is;
  font-style: normal;
  font-display: swap;
}
```

In terms of the preload code, I recommend the following:

```<link rel="preload" href="PATH" type="font/woff2" as="font" crossorigin="">```

I've gone with woff2 only as it's widely supported and smaller in file size, which compounds the benefits of preloading for page speed. Just be careful of [FOUT](https://fonts.google.com/knowledge/glossary/fout) and set your [Cache-Control headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)!

And make sure to put that ahead of the ```wp_head()``` in your header.php file so it can preload before the CSS (I believe that's how it works lol).