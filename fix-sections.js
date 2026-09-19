const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  {
    search: `<h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">Why Tank Cleaning Matters</h2>`,
    replace: `<span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">The Problem</span>\n              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">Why Tank Cleaning Matters</h2>`
  },
  {
    search: `<h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Water Tank Cleaning Services for Every Property</h2>`,
    replace: `<span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Our Services</span>\n            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Water Tank Cleaning Services for Every Property</h2>`
  },
  {
    search: `<h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Choose Siri Chandana?</h2>`,
    replace: `<span className="inline-block bg-brand-aqua/20 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Why Us</span>\n            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Choose Siri Chandana?</h2>`
  },
  {
    search: `<h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Our Professional Process</h2>`,
    replace: `<span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Our Process</span>\n            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Our Professional Process</h2>`
  },
  {
    search: `<h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Areas We Serve</h2>`,
    replace: `<span className="inline-block bg-brand-aqua/20 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Coverage</span>\n          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Areas We Serve</h2>`
  },
  {
    search: `<h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Visual Proof</h2>`,
    replace: `<span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Gallery</span>\n              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Visual Proof</h2>`
  },
  {
    search: `<h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">What Our Clients Say</h2>`,
    replace: `<span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Testimonials</span>\n            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">What Our Clients Say</h2>`
  },
  {
    search: `<h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-6">Why Regular Water Tank Cleaning is Essential</h2>`,
    replace: `<span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Education</span>\n          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-6">Why Regular Water Tank Cleaning is Essential</h2>`
  },
  {
    search: `<h2 className="text-3xl font-extrabold text-brand-navy mb-4">Frequently Asked Questions</h2>`,
    replace: `<span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">FAQ</span>\n            <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Frequently Asked Questions</h2>`
  },
  {
    search: `<h2 className="text-3xl font-extrabold text-brand-navy mb-4">Latest Insights</h2>`,
    replace: `<span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Latest News</span>\n              <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Latest Insights</h2>`
  },
  {
    search: `<h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">`,
    replace: `<span className="inline-block bg-brand-aqua/20 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4 border border-brand-aqua/30">Get In Touch</span>\n            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">`
  }
];

replacements.forEach(({ search, replace }) => {
  content = content.replace(search, replace);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Added section bands to page.tsx');
