const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/app', (filePath) => {
  if (filePath.endsWith('.tsx') && !filePath.includes('layout.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace <section className="..."> with <section data-aos="fade-up" className="...">
    // ensuring we don't duplicate it if run multiple times
    content = content.replace(/<section(?!\s+data-aos)(\s+className="[^"]+")/g, '<section data-aos="fade-up"$1');
    content = content.replace(/<section(?!\s+data-aos)>/g, '<section data-aos="fade-up">');

    fs.writeFileSync(filePath, content);
  }
});

console.log("AOS attributes added to sections.");
