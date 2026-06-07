const fs = require('fs');
const path = require('path');

// Create www directory (Capacitor's web root)
if (!fs.existsSync('www')) fs.mkdirSync('www');

// Copy index.html to www
fs.copyFileSync('index.html', path.join('www', 'index.html'));

console.log('✅ Built: index.html → www/index.html');
