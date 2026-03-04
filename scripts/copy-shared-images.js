// Copies shared images from packages/assets/images/ into the calling app's public/images/
// Run from the app's directory: node ../../scripts/copy-shared-images.js
// Skips: hero-bg.jpg, visit-bg.jpg, team/ (those stay app-specific)

const fs = require('fs');
const path = require('path');

const SKIP = new Set(['hero-bg.jpg', 'visit-bg.jpg', 'team']);

const src = path.resolve(__dirname, '../packages/assets/images');
const dest = path.resolve(process.cwd(), 'public/images');

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(src, dest);
console.log(`Shared images copied to ${dest}`);
