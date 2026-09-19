const fs = require('fs');
const path = require('path');

const files = [
  'src/app/page.tsx',
  'src/app/services/page.tsx'
];

const imageMap = {
  'IMAGE-02': { src: '/images/image_02_residential.jpg', alt: 'Residential Water Tank Cleaning' },
  'IMAGE-03': { src: '/images/image_03_commercial.jpg', alt: 'Commercial Water Tank Cleaning' },
  'IMAGE-04': { src: '/images/image_04_overhead.jpg', alt: 'Overhead Water Tank Cleaning' },
  'IMAGE-05': { src: '/images/image_05_underground.jpg', alt: 'Underground Water Tank Cleaning' },
  'IMAGE-06': { src: '/images/image_06_industrial.jpg', alt: 'Industrial Water Tank Cleaning' },
  'IMAGE-07': { src: '/images/image_07_sintex.jpg', alt: 'Sump and Sintex Tank Cleaning' },
  'IMAGE-08': { src: '/images/image_08_process.jpg', alt: 'Water Tank Cleaning Process' },
  'IMAGE-09': { src: '/images/image_09_before_after.jpg', alt: 'Water Tank Before and After Cleaning' },
  'IMAGE-10': { src: '/images/image_10_trust.jpg', alt: 'Siri Chandana Professional Technician' }
};

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  for (const [key, val] of Object.entries(imageMap)) {
    const regex = new RegExp(`\\[${key}[^\\]]*\\]`, 'g');
    if (regex.test(content)) {
      if (!content.includes('import Image from "next/image"')) {
        content = content.replace(/(import .* from .*;\n)/, '$1import Image from "next/image";\n');
      }
      content = content.replace(regex, `<Image src="${val.src}" alt="${val.alt}" fill className="object-cover" />`);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
