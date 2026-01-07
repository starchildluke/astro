---
title: 'Morsel #29: ROM website name generator'
description: 'Press R for pay respects'
published: true
pubDate: '07 Jan 2026'
tags: ["JavaScript", "gaming"]
---

<style>.rom-name {font-weight: 700; text-align: center; font-size: 2rem;}</style>

If you've ever played video games using emulators, you may be familiar with ROM sites. Two of my favourite site names are Emuparadise and CDRomance. They give a very 2000s tropical/Aero Frutiger vibe and I thought “why not try to randomise some of those names myself?”

And this is what I came up with. It's barebones and may or may not break but it's safe (as far as I can tell) and you can try it out. For now, it's just bold text in randomised web safe fonts but I'm hoping to add different colours in at some point.

I've used a handful of words so if you have anymore suggestions, let me know!

**Press the letter 'R' on your keyboard to generate a new name below:**

<div class="rom-name"></div>

<script>

let format = ["CD", "ROM", "Emu", "Software", "BIOS", "ISO", "Disc", "Disk", "Floppy", "HDD", "SSD", "SD"];
let vibe = ["Paradise", "Utopia", "Oasis", "Bliss", "Exotica", "Island", "Garden", "Sanctuary", "Romance", "Passion", "Devotion", "Heaven", "Divine", "Angel", "Sacred", "Spirit"];
let fonts = ["Arial", "Verdana", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond", "Courier New", "Brush Script MT"];

let romClass = document.querySelector('.rom-name');


document.addEventListener("keydown", (event) => {
        if (event.code === "KeyR" && !event.ctrlKey) {
            const formatRand = Math.floor(Math.random() * format.length);
            const vibeRand = Math.floor(Math.random() * vibe.length);
            const fontsRand = Math.floor(Math.random() * fonts.length);
            let romName = `${format[formatRand]}${vibe[vibeRand]}`;
            romClass.style.fontFamily = fonts[fontsRand];
            romClass.textContent = romName;
        }
    }
)

</script>