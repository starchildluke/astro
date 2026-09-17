---
title: 'how to make bluesky numbers disappear with a little CSS'
description: 'or how i stopped worrying about bluesky numbers and learnt to `display: none` them'
published: true
pubDate: '16 Sep 2026'
tags:
  - the Internet
---

like many of us, i focus too much on follower/following counts and i decided to kill it by adding a simple CSS code with a user-style manager:

```css
a[href*="/followers"], a[href*="/follows"] {
    display: none;
}
```

it's not foolproof but it does that i need it to for now. suddenly all follower/following counts are gone from peoples' profiles. everyone's just some person with an account!