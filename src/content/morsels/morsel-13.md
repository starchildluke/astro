---
title: 'Morsel #13: Black Fabric'
published: true
pubDate: '06 Oct 2024'
tags:
  - JavaScript
  - Black
  - the Internet
  - tech
---

<style>.fabric-name {font-weight: 700; text-align: center; font-size: 2rem;}</style>

<blockquote>
	<p>white writers be like what if this black man was named after a fabric</p>
	<cite>—<a href="https://twitter.com/yedoye_/status/1422264318079422466">@yedoye</a></cite>
</blockquote>

Black Fabric was initially a Python script that randomly generated Black peoples' names using a “Fabric + Surname” format. I chose common surnames from a list of [Most common last names for Blacks in the U.S.](https://probablyhelpful.com/data/black.html).

Click **Generate** to get 5 random names or you can get the [full list of names in a text file](/blackfabric.txt) (there are over 6,300 of them).

<button id="generate" aria-label="Generate button">Generate</button> <button id="clear" aria-label="Clear button">Clear</button>

<div class="fabric-name"></div>

<script>

const fabric = ["Angora", "Baize", "Bunting", "Burlap", "Canvas", "Cashmere", "Cheesecloth", "Chiffon", "Chino", "Chintz", "Corduroy", "Cotton", "Denim", "Felt", "Flannel", "Fleece", "Gingham", "Gore-Tex", "Hemp", "Herringbone", "Houndstooth", "Jersey", "Jute", "Kente", "Kevlar", "Lace", "Leather", "Linen", "Longcloth", "Madras", "Mohair", "Moleskin", "Muslin", "Nylon", "Paisley", "Pashmina", "Polyester", "Sateen", "Satin", "Silk", "Spandex", "Tweed", "Twill", "Velour", "Velveteen", "Windstopper", "Wool"];
const surname = ["Williams", "Johnson", "Smith", "Jones", "Brown", "Jackson", "Davis", "Thomas", "Harris", "Robinson", "Taylor", "Wilson", "Moore", "White", "Lewis", "Walker", "Green", "Washington", "Thompson", "Anderson", "Scott", "Carter", "Wright", "Miller", "Hill", "Allen", "Mitchell", "Young", "Lee", "Martin", "Clark", "Turner", "Hall", "King", "Edwards", "Coleman", "James", "Evans", "Bell", "Richardson", "Adams", "Brooks", "Parker", "Jenkins", "Stewart", "Howard", "Campbell", "Simmons", "Sanders", "Henderson", "Collins", "Cooper", "Watson", "Butler", "Alexander", "Bryant", "Nelson", "Morris", "Barnes", "Jordan", "Reed", "Woods", "Dixon", "Roberts", "Gray", "Phillips", "Griffin", "Baker", "Powell", "Bailey", "Ford", "Holmes", "Banks", "Daniels", "Ross", "Rogers", "Perry", "Foster", "Patterson", "Hunter", "Owens", "Grant", "Marshall", "Henry", "Morgan", "Price", "Wallace", "Ward", "Hayes", "Boyd", "Freeman", "Graham", "Hamilton", "Franklin", "Hawkins", "Gordon", "Sims", "Harrison", "Ellis", "Kelly", "Hicks", "Bennett", "Joseph", "Gibson", "Crawford", "Jefferson", "Watkins", "Tucker", "Porter", "Willis", "Mason", "Matthews", "Fields", "Cook", "Hughes", "Simpson", "Hudson", "Cole", "Black", "Butcher", "Carson", "Dunlap", "Dunn", "Ewing", "Fisher", "Fox", "Gibbs", "Griffiths", "McDonald", "Peters", "Rashford", "Spencer", "Stevens", "West", "Yancey"];

const blackFabricNameClass = document.querySelector('.fabric-name');

function generateName() {
    blackFabricNameClass.innerHTML = ""
    for (let i = 0; i < 5 ; i++) {
        const fabricRandNum = Math.floor(Math.random() * fabric.length);
        const surnameRandNum = Math.floor(Math.random() * surname.length);
        const blackFabricName = `${fabric[fabricRandNum]} ${surname[surnameRandNum]}`;
        const pEl = document.createElement('p');
        pEl.textContent = blackFabricName;
        blackFabricNameClass.appendChild(pEl);
    }
}

const generateButton = document.querySelector('#generate');
generateButton.addEventListener("click", function() {
    generateName();
})

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", function() {
    blackFabricNameClass.innerHTML = "";
})

</script>