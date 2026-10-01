const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('/Users/kong/flood-2026/index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// Simulate the DOM
const selected = document.querySelector('input[name="timeFilter"]:checked');
console.log("selected time filter:", selected ? selected.value : null);

const checks = document.querySelectorAll('#filterPanel input[type="checkbox"]');
checks.forEach(c => console.log(c.value, c.checked));

