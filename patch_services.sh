#!/bin/bash
sed -i '' -e 's/import type { Metadata } from "next";/import type { Metadata } from "next";\nimport Link from "next/link";/' src/app/services/page.tsx

sed -i '' -e '/<section className="bg-brand-navy pt-24 pb-16 px-4">/,/<\/section>/c\
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy flex items-center">\
        <div className="absolute inset-0 z-0">\
          <Image src="/images/image_03_commercial.jpg" alt="Water Tank Cleaning Services" fill className="object-cover" priority />\
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/80 to-transparent"></div>\
          <div className="absolute inset-0 bg-[#0B1B3D]/40"></div>\
        </div>\
\
        <div className="container-custom relative z-10">\
          <div className="max-w-2xl">\
            <span className="block text-brand-aqua font-bold text-sm tracking-widest uppercase mb-4">\
              OUR SERVICES\
            </span>\
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15]">\
              Comprehensive Water Tank Cleaning\
            </h1>\
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">\
              Specialized cleaning solutions for residential, commercial, overhead, underground, and industrial water tanks across Hyderabad.\
            </p>\
            \
            <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mt-2">\
              <Link href="/contact" className="flex-1 sm:flex-none text-center bg-[#0ea5e9] text-white font-bold py-3 px-2 sm:px-8 rounded hover:bg-[#0284c7] transition-colors text-sm sm:text-base whitespace-nowrap">\
                <span className="sm:hidden">Book Inspection</span>\
                <span className="hidden sm:inline">Book an Inspection</span>\
              </Link>\
              <a href="tel:+919133432885" className="flex-1 sm:flex-none text-center bg-transparent border-2 border-white/80 text-white font-bold py-2.5 px-2 sm:px-8 rounded hover:bg-white/10 transition-colors text-sm sm:text-base whitespace-nowrap">\
                Call Now\
              </a>\
            </div>\
          </div>\
        </div>\
      </section>
' src/app/services/page.tsx
