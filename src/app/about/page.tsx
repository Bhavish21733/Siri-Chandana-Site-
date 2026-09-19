import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Clock, HeartHandshake, Leaf, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Siri Chandana Water Tank Cleaning",
  description: "Learn about Siri Chandana, the trusted water tank cleaning experts in Vanasthalipuram, Hyderabad.",
};

export default function AboutPage() {
  return (
    <>
      <section data-aos="fade-up" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/image_08_process.jpg" 
            alt="Water Tank Cleaning Team" 
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
              ABOUT SIRI CHANDANA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15]">
              Hyderabad's Trusted Tank Cleaning Experts
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              We are committed to providing safe, hygienic, and professional water storage maintenance for homes and businesses across Hyderabad.
            </p>
            
            <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
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

      {/* Story Section */}
      <section data-aos="fade-up" className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">Dedicated to Pure Water Storage</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Based in Vanasthalipuram, Siri Chandana was founded with a simple mission: to ensure that every household and business in Hyderabad has access to a hygienic water storage system. 
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Water is the essence of life, but an unmaintained tank can quickly become a breeding ground for bacteria, algae, and sediment. We realized that many property owners were either neglecting this crucial maintenance or relying on superficial cleaning methods.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, our team of trained professionals uses specialized equipment and standardized protocols to deliver a deep, hygienic clean for all types of tanks—from household Sintex to massive underground commercial sumps.
              </p>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative">
                <Image src="/images/image_10_trust.jpg" alt="Our Professional Team" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                <p className="font-bold text-brand-navy text-2xl mb-1 flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-brand-aqua" /> 100%</p>
                <p className="text-sm text-gray-600 font-medium">Customer Satisfaction Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Commitments Section */}
      <section data-aos="fade-up" className="section-padding bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Core Commitments</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We hold ourselves to the highest standards of service and integrity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-brand-aqua/10 text-brand-aqua rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Uncompromising Hygiene</h3>
              <p className="text-gray-600 text-sm">We don't just wash; we sanitize. Your health is our top priority.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-brand-aqua/10 text-brand-aqua rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Punctuality</h3>
              <p className="text-gray-600 text-sm">We respect your time. Our team arrives as scheduled and works efficiently.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-brand-aqua/10 text-brand-aqua rounded-full flex items-center justify-center mb-6">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">No hidden fees. We provide clear quotes based on your specific tank size and type.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-brand-aqua/10 text-brand-aqua rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Eco-Friendly Process</h3>
              <p className="text-gray-600 text-sm">We ensure our cleaning methods are safe for your family and the environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Step Process (Reused from Home) */}
      <section data-aos="fade-up" className="section-padding bg-white">
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
