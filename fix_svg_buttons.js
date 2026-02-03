const fs = require('fs');
const path = require('path');

const filePath = 'e:\\pretawebsite\\PretaSystems\\src\\components\\sections\\HeroVisuals\\PhoneHeroVisual.tsx';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Fix "View sandbox" button (lines 156-165 in original, indexes 155-164)
// Original Line 164 (index 163):         </g>
// Original Line 165 (index 164):         <path ... fill="black" />
// We move 164 after 165.
const line164 = lines[163];
const line165 = lines[164];

if (line164.includes('</g>') && line165.includes('path') && line165.includes('fill="black"')) {
    console.log('Found "View sandbox" lines. Swapping...');
    lines[163] = line165;
    lines[164] = line164;
} else {
    console.error('ERROR: Could not find "View sandbox" lines as expected.');
    console.error('Line 164:', line164.substring(0, 50));
    console.error('Line 165:', line165.substring(0, 50));
}

// Fix "Request access" button (lines 166-167 original, but shifted by Fix 1? No, they stay at 165-166 index now)
// After swap:
// index 163: <path ... fill="black" />
// index 164: </g>
// index 165: <rect ... stroke="#4DFA0D" ... />  (Original 166)
// index 166: <path ... fill="#4EFB0D" /> (Original 167)

const line166 = lines[165];
const line167 = lines[166];

if (line166.includes('rect') && line166.includes('stroke="#4DFA0D"') && line167.includes('path') && line167.includes('fill="#4EFB0D"')) {
    console.log('Found "Request access" lines. Wrapping...');
    lines[165] = `        <g
          onClick={onRequestAccess}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label="Request access"
        >
${line166}
${line167}
        </g>`;
    lines[166] = ''; // Clear original line 167 as it's now inside
} else {
    console.error('ERROR: Could not find "Request access" lines as expected.');
    console.error('Line 166:', line166.substring(0, 50));
    console.error('Line 167:', line167.substring(0, 50));
}

fs.writeFileSync(filePath, lines.filter(l => l !== '').join('\n'), 'utf8');
console.log('Done.');
