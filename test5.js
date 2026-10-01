const fs = require('fs');
const data = JSON.parse(fs.readFileSync('/Users/kong/.gemini/antigravity/brain/6fb460b4-8656-4824-9765-9c7a69b2bdf6/.system_generated/steps/3/content.md').toString().split('\n').slice(8).join('\n'));
const now = new Date('2026-09-27T12:35:00+07:00');
data.slice(0, 10).forEach(e => {
    console.log(e.stop, new Date(e.stop.replace(' ', 'T') + '+07:00') < now);
});
