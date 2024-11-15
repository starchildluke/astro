---
title: 'Morsel #15: en-150'
published: true
pubDate: '15 Nov 2024'
layout: ../../layouts/Morsels.astro
---

While snooping through a website's <code>hreflang</code>, I noticed a unique ISO code: <code>en-150</code>.

According to a number of source, en-150 is the [language subtag](https://www.w3.org/International/articles/language-tags/#region) for English spoken in Europe, which comes in handy as a catch-all. While it is valid, I'm not 100% that Google uses it as a hreflang value although on their [Think With Google page](https://www.thinkwithgoogle.com/intl/en-emea/) they use it as a data-* value (via [Stack Overflow](https://stackoverflow.com/questions/35989478/hreflang-tags-for-europe)). Here's one example:

```html
<link rel="alternate" href="https://www.thinkwithgoogle.com/intl/en-emea/" hreflang="en-dz" data-code="en-emea">
```

In this case, en-emea is used to cover English speakers in the EMEA area, which covers Europe, the Middle East and Africa.

Knowing how data-* attributes work, I suspect this is more of a JS data thing and doesn't affect hreflang at all. But still interesting to see it used.

If you know more about this or have spotted other examples, please let me know as I thought this was cool.