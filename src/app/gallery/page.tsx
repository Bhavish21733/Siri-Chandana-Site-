import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera, Phone, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Project Gallery | Siri Chandana Water Tank Cleaning",
  description: "Explore real before-and-after water tank cleaning photos across Hyderabad by Siri Chandana Water Tank Cleaning Services.",
};

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
}

const photos: GalleryPhoto[] = [
  {
    id: "photo-01",
    src: "/images/gallery/gallery_06.jpg",
    alt: "Before Cleaning: Dirty Water Tank with Algae and Grime Build-up",
    title: "Before Cleaning: Heavy Algae & Sludge",
    badge: "Before Cleaning",
    badgeColor: "bg-red-500 text-white",
    description: "Thick layer of algae, bacterial scum, and sediment accumulated inside an untreated water tank.",
  },
  {
    id: "photo-02",
    src: "/images/gallery/gallery_02.jpg",
    alt: "After Cleaning: Spotless White Sintex Water Tank Interior",
    title: "After Cleaning: Spotless Sintex Tank",
    badge: "After Cleaning",
    badgeColor: "bg-emerald-600 text-white",
    description: "Completely descaled, sanitized, and scrubbed interior ready for crystal-clear drinking water.",
  },
  {
    id: "photo-03",
    src: "/images/gallery/gallery_01.jpg",
    alt: "Deep Cleaned Blue Water Tank Interior",
    title: "Spotless Blue Water Tank",
    badge: "Deep Sanitized",
    badgeColor: "bg-brand-aqua text-brand-navy font-bold",
    description: "Antibacterial wash and pressure cleaning leaving the blue tank base and ribs pristine.",
  },
  {
    id: "photo-04",
    src: "/images/gallery/gallery_04.jpg",
    alt: "Technician Quality Inspection of Cleaned Water Tank",
    title: "Technician Quality Inspection",
    badge: "Quality Verified",
    badgeColor: "bg-brand-navy text-white",
    description: "Our certified technician manually verifying tank hygiene and pipe fittings after completion.",
  },
  {
    id: "photo-05",
    src: "/images/gallery/gallery_07.jpg",
    alt: "Siri Chandana Official Mobile Service Van in Hyderabad",
    title: "Official Siri Chandana Service Fleet",
    badge: "Service Fleet",
    badgeColor: "bg-brand-blue text-white",
    description: "Equipped mobile service unit loaded with high-pressure washers, dewatering pumps, and sanitizers.",
  },
  {
    id: "photo-06",
    src: "/images/gallery/gallery_05.jpg",
    alt: "Sanitized Blue Water Tank Top View",
    title: "Top-Down Clean Tank View",
    badge: "100% Hygienic",
    badgeColor: "bg-brand-aqua text-brand-navy font-bold",
    description: "Thorough multi-stage clean eliminating mold, bad odors, and harmful waterborne contaminants.",
  },
  {
    id: "photo-07",
    src: "/images/gallery/gallery_03.jpg",
    alt: "Clean White Overhead Storage Tank Interior",
    title: "Overhead Tank Decontamination",
    badge: "Clean Water",
    badgeColor: "bg-emerald-600 text-white",
    description: "Gentle yet effective scrubbing that preserves the plastic inner lining while removing all residue.",
  },
  {
    id: "photo-08",
    src: "/images/gallery/gallery_08.jpg",
    alt: "Siri Chandana Service Van On-Site at Client Location",
    title: "On-Site Service Team in Hyderabad",
    badge: "On-Site Team",
    badgeColor: "bg-brand-navy text-white",
    description: "Providing prompt, professional water tank cleaning for homes, apartments, and commercial sites.",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section data-aos="fade-up" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/gallery_07.jpg"
            alt="Siri Chandana Water Tank Cleaning Work Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/85 to-[#0B1B3D]/70"></div>
          <div className="absolute inset-0 bg-[#0B1B3D]/40"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-brand-aqua/20 text-brand-aqua border border-brand-aqua/30 font-bold text-xs sm:text-sm tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-4">
              <Camera className="w-4 h-4" />
              OUR WORK GALLERY
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15]">
              Real Cleaning Transformations
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              Explore authentic before-and-after photos from our residential, commercial, overhead tank, and underground sump cleaning projects across Hyderabad.
            </p>

            <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mt-2">
              <Link
                href="/contact"
                className="flex-1 sm:flex-none text-center bg-[#0ea5e9] text-white font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-[#0284c7] transition-colors text-sm sm:text-base whitespace-nowrap shadow-lg shadow-sky-900/30"
              >
                Book an Inspection
              </Link>
              <a
                href="tel:+919133432885"
                className="flex-1 sm:flex-none text-center bg-transparent border-2 border-white/80 text-white font-bold py-2.5 px-6 sm:px-8 rounded-lg hover:bg-white/10 transition-colors text-sm sm:text-base whitespace-nowrap flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call +91 91334 32885
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY SECTION */}
      <section data-aos="fade-up" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-2 bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                <Camera className="w-4 h-4" />
                Photo Proof
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
                On-Site Project Photos
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl text-base md:text-lg">
                Real photos showcasing dirty water tanks transformed into spotless, hygienic storage systems by our expert technicians.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${photo.badgeColor}`}
                  >
                    {photo.badge}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-brand-navy text-base mb-1.5 group-hover:text-brand-aqua transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-brand-aqua font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Field Service</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section data-aos="fade-up" className="py-16 md:py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-3xl">
          <span className="inline-block bg-brand-aqua/20 text-brand-aqua font-bold text-xs sm:text-sm tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-brand-aqua/30">
            CLEAN TANK • SAFE WATER • HEALTHY LIFE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Restore Pure, Hygienic Water in Your Tank?
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Call Siri Chandana Water Tank Cleaning Service today for guaranteed hygienic water tank, sump, and Sintex cleaning anywhere in Hyderabad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919133432885"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0ea5e9] text-white font-bold py-3.5 px-8 rounded-lg hover:bg-[#0284c7] transition-all text-base shadow-lg shadow-sky-900/50"
            >
              <Phone className="w-5 h-5" />
              Call +91 91334 32885
            </a>
            <a
              href="https://wa.me/919133432885?text=Hello%20Siri%20Chandana,%20I%20would%20like%20to%20book%20a%20water%20tank%20cleaning%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 px-8 rounded-lg hover:bg-[#1ebd59] transition-all text-base shadow-lg shadow-emerald-950/30"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/80 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              Book Online <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
