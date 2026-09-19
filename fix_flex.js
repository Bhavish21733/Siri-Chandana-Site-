const fs = require('fs');

const pages = [
  'src/app/services/page.tsx',
  'src/app/gallery/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/terms-and-conditions/page.tsx'
];

pages.forEach(page => {
  let content = fs.readFileSync(page, 'utf8');
  // Replace the exact broken section class with the fixed one
  content = content.replace(
    '<section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy flex items-center">',
    '<section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy">'
  );
  fs.writeFileSync(page, content);
});

console.log("Removed flex items-center from all pages.");
