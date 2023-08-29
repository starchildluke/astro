---
title: 'Morsel #8: Bandcamp Album Length Calculator'
published: true
pubDate: '4 Feb 2023'
layout: ../../../layouts/Morsels.astro
---

My eighth morsel is a [Python](/wiki/tech/python/) script that returns the running time of an album from Bandcamp in your CLI of choice. I previously used a JS plugin/applet in my browser but it stopped working and couldn't find a replacement (there probably is one but I also don't like installing add-ons unless I have to because Chromium browsers already hog enough memory!)

Then I thought "why not create a quick script to do the job?". I have also made this into a Streamlit app but that'll be coming in a future morsel. In the meantime, I discovered argparse and thought it'd be handy for me to have everything run in my CLI and print out the album length. No frills!

## Links

* [GitHub link](https://github.com/starchildluke/bandcamp_calc)

## Requirements

* [Python 3](https://www.python.org/downloads/)
* Beautiful Soup
* Requests

## How to use

In your command line, enter `python3 bandcamp_calc.py -u [URL]` and it will print out the running time in seconds.

## Python functions used

* [Lists](https://realpython.com/python-lists-tuples/#python-lists)
	* [List comprehensions](https://realpython.com/list-comprehension-python/#using-list-comprehensions)
* [For loops](https://realpython.com/python-for-loop/)
* [sum](https://realpython.com/python-sum-function/)
* [datetime](https://docs.python.org/3/library/datetime.html)
* [argparse](https://docs.python.org/3/library/argparse.html)