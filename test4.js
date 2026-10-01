const fs = require('fs');
const data = JSON.parse(fs.readFileSync('/Users/kong/.gemini/antigravity/brain/6fb460b4-8656-4824-9765-9c7a69b2bdf6/.system_generated/steps/3/content.md').toString().split('\n').slice(8).join('\n'));

function parseDate(str) {
    if (!str) return null;
    return new Date(str.replace(' ', 'T') + '+07:00');
}

let crashed = false;
let count = 0;
try {
    data.forEach(event => {
        if (!event.latitude || !event.longitude) return;
        const start = parseDate(event.start);
        const stop = parseDate(event.stop);
        count++;
    });
} catch (e) {
    crashed = true;
    console.error(e);
}
console.log("Crashed:", crashed, "Count:", count);
