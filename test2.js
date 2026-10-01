const fs = require('fs');
const data = JSON.parse(fs.readFileSync('/Users/kong/.gemini/antigravity/brain/6fb460b4-8656-4824-9765-9c7a69b2bdf6/.system_generated/steps/3/content.md').toString().split('\n').slice(8).join('\n'));
let counts = {flood:0, carbreakdown:0, accident:0, other:0};
data.forEach(e => {
    if(e.latitude && e.longitude) {
        let icon = e.icon;
        if(icon === 'flood') counts.flood++;
        else if (icon === 'carbreakdown') counts.carbreakdown++;
        else if (icon === 'accident') counts.accident++;
        else counts.other++;
    }
});
console.log(counts);
