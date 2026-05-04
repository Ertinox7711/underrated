// Re-fetch Notion pages and save markdown to notion-dump.json.
// We embed the markdown directly here (already fetched in prior session).
// Just write the JSON dump.
const fs = require('fs');
const path = require('path');

// The markdown bodies (extracted from the <content> blocks) are stored in
// separate .md files in ./notion-md/ and assembled here.
const dir = path.join(__dirname, 'notion-md');
const keys = [
  'gz_master','gz_1_profil','gz_2_algo','gz_3_storytelling','gz_4_hooks',
  'gz_5_ai','gz_6_monet','gz_7_cadence','gz_8_retention','gz_9_comments',
  'gz_10_comp','gz_11_synth'
];
const out = {};
keys.forEach(k => {
  const p = path.join(dir, k + '.md');
  if (fs.existsSync(p)) out[k] = fs.readFileSync(p, 'utf8');
  else console.warn('missing', p);
});
fs.writeFileSync(path.join(__dirname, 'notion-dump.json'), JSON.stringify(out));
console.log('Wrote notion-dump.json with', Object.keys(out).length, 'entries');
