const fs = require('fs');

const HERO_TEMPLATE = (tag, title, desc, img) => `      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="${img}" 
            alt="${title}" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[#0B1B3D]/40"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="block text-brand-aqua font-bold text-sm tracking-widest uppercase mb-4">
              ${tag}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15]">
              ${title}
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              ${desc}
            </p>
            
            <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mt-2">
              <Link 
                href="/contact" 
                className="flex-1 sm:flex-none text-center bg-[#0ea5e9] text-white font-bold py-3 px-2 sm:px-8 rounded hover:bg-[#0284c7] transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                <span className="sm:hidden">Book Inspection</span>
                <span className="hidden sm:inline">Book an Inspection</span>
              </Link>
              <a 
                href="tel:+919133432885" 
                className="flex-1 sm:flex-none text-center bg-transparent border-2 border-white/80 text-white font-bold py-2.5 px-2 sm:px-8 rounded hover:bg-white/10 transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>`;

const updatePage = (filePath, tag, title, desc, img) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add Link import if not present
  if (!content.includes('import Link from "next/link"')) {
    content = content.replace('import Image from "next/image";', 'import Image from "next/image";\nimport Link from "next/link";');
  }

  // Replace old hero section
  const oldHeroRegex = /<section className=".*?bg-brand-navy.*?">[\s\S]*?<\/section>/;
  content = content.replace(oldHeroRegex, HERO_TEMPLATE(tag, title, desc, img));
  
  fs.writeFileSync(filePath, content);
};

updatePage('src/app/services/page.tsx', 'OUR SERVICES', 'Comprehensive Water Tank Cleaning Services', 'Specialized cleaning solutions for residential, commercial, overhead, underground, and industrial water tanks across Hyderabad.', '/images/image_03_commercial.jpg');
updatePage('src/app/gallery/page.tsx', 'OUR WORK GALLERY', 'Real Cleaning Transformations', 'Explore our extensive gallery of before and after cleaning projects for residential, commercial, and industrial water tanks.', '/images/image_09_before_after.jpg');
updatePage('src/app/contact/page.tsx', 'GET IN TOUCH', 'Contact Siri Chandana Today', 'Ready for a cleaner water tank? Contact our Hyderabad team for a fast, free quote and schedule your inspection.', '/images/image_01_hero.jpg');
updatePage('src/app/blog/page.tsx', 'INSIGHTS & GUIDES', 'Water Tank Cleaning Blog', 'Expert advice on water tank maintenance, hygiene, and ensuring a safe water supply for your property and family.', '/images/image_04_overhead.jpg');

console.log("Pages updated.");
