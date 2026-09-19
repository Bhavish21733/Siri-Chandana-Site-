import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Water Tank Cleaning Services in Hyderabad | Siri Chandana",
  description: "Comprehensive water tank cleaning services including residential, commercial, overhead, underground, industrial, and Sintex tanks in Hyderabad.",
};

const SERVICES_DATA = [
  {
    id: "residential",
    title: "Residential Water Tank Cleaning",
    description: "For homes and residential properties.",
    fullDesc: "Ensure your family's health with our specialized residential tank cleaning service. We safely remove sediment, algae, and impurities that accumulate over time in home water tanks, restoring the hygiene of your everyday water supply.",
    imageSrc: "/images/image_02_residential.jpg",
    imageAlt: "Residential Water Tank Cleaning",
  },
  {
    id: "commercial",
    title: "Commercial Water Tank Cleaning",
    description: "For offices, apartments, and commercial buildings.",
    fullDesc: "Large-scale properties require high-capacity cleaning solutions. We service apartment complexes, office buildings, and commercial facilities with minimal disruption to your daily operations while ensuring maximum water hygiene for occupants.",
    imageSrc: "/images/image_03_commercial.jpg",
    imageAlt: "Commercial Water Tank Cleaning",
  },
  {
    id: "overhead",
    title: "Overhead Tank Cleaning",
    description: "Professional cleaning for elevated water storage tanks.",
    fullDesc: "Overhead tanks are particularly vulnerable to temperature changes and algae growth. Our technicians are trained to safely access and deep-clean elevated infrastructure, removing built-up grime and sanitizing the interior.",
    imageSrc: "/images/image_04_overhead.jpg",
    imageAlt: "Overhead Water Tank Cleaning",
  },
  {
    id: "underground",
    title: "Underground Tank Cleaning",
    description: "Deep cleaning of underground storage systems.",
    fullDesc: "Underground sumps often accumulate heavy sludge, mud, and groundwater contaminants. We use specialized suction and high-pressure cleaning equipment to completely evacuate and sanitize subterranean water storage systems.",
    imageSrc: "/images/image_05_underground.jpg",
    imageAlt: "Underground Water Tank Cleaning",
  },
  {
    id: "industrial",
    title: "Industrial Tank Cleaning",
    description: "Cleaning solutions for industrial environments.",
    fullDesc: "Factories and industrial setups require stringent hygiene standards. We provide heavy-duty cleaning for large industrial water tanks, strictly adhering to safety protocols while delivering a compliant, thorough clean.",
    imageSrc: "/images/image_06_industrial.jpg",
    imageAlt: "Industrial Water Tank Cleaning",
  },
  {
    id: "sintex",
    title: "Sump & Sintex Tank Cleaning",
    description: "Cleaning for sumps and Sintex/plastic water tanks.",
    fullDesc: "Plastic and Sintex tanks require specific care to avoid damaging the interior surface while thoroughly removing bacteria and biofilms. We have extensive experience maintaining the classic plastic tanks common across Hyderabad.",
    imageSrc: "/images/image_07_sintex.jpg",
    imageAlt: "Sump and Sintex Tank Cleaning",
  }
];

export default function ServicesPage() {
  return (
    <>
            <section data-aos="fade-up" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/image_03_commercial.jpg" 
            alt="Comprehensive Water Tank Cleaning Services" 
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
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15]">
              Comprehensive Water Tank Cleaning Services
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              Specialized cleaning solutions for residential, commercial, overhead, underground, and industrial water tanks across Hyderabad.
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

      <section data-aos="fade-up" className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="space-y-20">
            {SERVICES_DATA.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}
              >
                {/* Image Placeholder */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center text-slate-400 border border-slate-200 relative">
                    <Image src={service.imageSrc} alt={service.imageAlt} fill className="object-cover" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-extrabold text-brand-navy mb-3">{service.title}</h2>
                  <p className="text-brand-teal font-medium text-lg mb-4">{service.description}</p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {service.fullDesc}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-aqua flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Thorough inspection and drainage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-aqua flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">High-pressure interior cleaning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-aqua flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Hygienic final rinse and check</span>
                    </li>
                  </ul>

                  <a 
                    href="https://wa.me/919133432885" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-aqua font-bold hover:text-[#00929e] transition-colors"
                  >
                    Book this service on WhatsApp <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section data-aos="fade-up" className="section-padding bg-gray-50 border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Our Professional Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring your tank is restored to optimal hygiene.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between relative max-w-5xl mx-auto gap-8 md:gap-0">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-gray-200 z-0"></div>
            
            {[
              { num: "01", title: "Enquire", desc: "Contact us via call, WhatsApp, or form." },
              { num: "02", title: "Understand", desc: "We gather details on your tank requirement." },
              { num: "03", title: "Service", desc: "Professional tank cleaning is performed." },
              { num: "04", title: "Final Check", desc: "We ensure the area is clean and verified." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-row md:flex-col items-center md:text-center w-full md:w-1/4 gap-6 md:gap-0">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-aqua text-brand-navy flex items-center justify-center font-bold text-xl md:mb-6 shadow-sm z-10 flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 max-w-[200px] mx-auto">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
