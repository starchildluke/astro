---
title: 'Morsel #14: Textlist to array'
published: true
pubDate: '07 Oct 2024'
tags:
  - JavaScript
  - the Internet
  - tech
  - utils
---

I have to change text lists into Python lists a lot and I always do it in Sublime Text with some regex. But I'd rather have a quicker way to do it by pasting and clicking a button.

So I made this, using the structure of the thumbnail grabber I made a few weeks ago. It takes a text list of strings and converts it into an array and then displays the array in a <code>pre</code> tag.

_**Update - 7th Feb 2026**: so I realised today that this was susceptible to an XSS attack so I added a HTML sanitiser called [JS Html Sanitizer](https://github.com/jitbit/HtmlSanitizer)._

<form id="string-form">
    <label for="strings">Enter your text strings, one per line:</label>
    <div>
        <textarea type="text" id="strings" name="strings" cols="80" rows="10" required></textarea>
    </div>
    <button type="submit">Generate array/list!</button>
</form>

<div id="array-container">
    <pre></pre>
</div>

<script>
        const form = document.querySelector('#string-form');
        const arrayContainer = document.querySelector('#array-container pre');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const stringVals = document.querySelector('#strings').value;
            generateArrayText(stringVals);
        });

        // taken from https://stackoverflow.com/questions/23187013/is-there-a-better-way-to-sanitize-input-with-javascript
        function sanitiseString(str){
            str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
            return str.trim();
        }

        function generateArrayText(stringVals) {
            const stringsToArray = stringVals.split('\n')
            const sanitisedArray = stringsToArray.map(string => HtmlSanitizer.SanitizeHtml(string))
            const arrayText = JSON.stringify(sanitisedArray);
            const displayText = document.createElement('displayed-text');
            arrayContainer.style.background = "#111";
            arrayContainer.innerHTML = arrayText;
            arrayContainer.appendChild(displayText);
        }
    </script>

<script src="https://cdn.jsdelivr.net/npm/@jitbit/htmlsanitizer@latest/HtmlSanitizer.min.js"></script>

<style>
    #array-container {
        margin: 1rem 0;
    }
</style>