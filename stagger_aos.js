const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Add AOS to service cards
content = content.replace(/<div key=\{service\.id\} className="bg-white/g, '<div data-aos="fade-up" data-aos-delay={idx * 100} key={service.id} className="bg-white');

// Add AOS to why choose us items
content = content.replace(/<div key=\{idx\} className="flex flex-col/g, '<div data-aos="fade-up" data-aos-delay={idx * 150} key={idx} className="flex flex-col');

fs.writeFileSync('src/app/page.tsx', content);
console.log("Staggered AOS added.");
