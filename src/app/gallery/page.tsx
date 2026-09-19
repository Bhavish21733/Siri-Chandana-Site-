import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Gallery | Siri Chandana Water Tank Cleaning",
  description: "View our professional water tank cleaning projects in Vanasthalipuram, Hyderabad. See the transformation from dirty to clean.",
};

export default function GalleryPage() {
  return (
    <>
            <section data-aos="fade-up" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/image_09_before_after.jpg" 
            alt="Real Cleaning Transformations" 
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
              OUR WORK GALLERY
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15]">
              Real Cleaning Transformations
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              Explore our extensive gallery of before and after cleaning projects for residential, commercial, and industrial water tanks.
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
      </section>

      <section data-aos="fade-up" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Supporting Images */}
            <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border border-slate-300 relative overflow-hidden">
              <Image src="/images/image_08_process.jpg" alt="Water Tank Cleaning Process" fill className="object-cover" />
            </div>
            <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border border-slate-300 relative overflow-hidden">
              <Image src="/images/image_02_residential.jpg" alt="Residential Water Tank Cleaning" fill className="object-cover" />
            </div>
            <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border border-slate-300 relative overflow-hidden">
              <Image src="/images/image_05_underground.jpg" alt="Underground Water Tank Cleaning" fill className="object-cover" />
            </div>
            <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border border-slate-300 relative overflow-hidden">
              <Image src="/images/image_07_sintex.jpg" alt="Sump and Sintex Tank Cleaning" fill className="object-cover" />
            </div>
            <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border border-slate-300 relative overflow-hidden">
              <Image src="/images/image_03_commercial.jpg" alt="Commercial Water Tank Cleaning" fill className="object-cover" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
