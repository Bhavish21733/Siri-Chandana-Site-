import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Siri Chandana Water Tank Cleaning",
  description: "Terms and Conditions for Siri Chandana Water Tank Sump & Sintex Cleaning Services.",
};

export default function TermsConditions() {
  
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section data-aos="fade-up" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/image_08_process.jpg" 
            alt="Legal Background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/80 to-[#0B1B3D]/30"></div>
          <div className="absolute inset-0 bg-[#0B1B3D]/40"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="block text-brand-aqua font-bold text-sm tracking-widest uppercase mb-4">
              LEGAL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15]">
              Terms and Conditions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Terms of service for Siri Chandana Water Tank Cleaning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg prose-brand max-w-none text-gray-700">
          <p>Welcome to Siri Chandana Water Tank Sump & Sintex Cleaning Services. By requesting our services, you agree to the following terms and conditions.</p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">1. Service Scope</h2>
          <p>We provide professional water tank cleaning services for residential, commercial, and industrial properties in Hyderabad. The scope includes drainage, interior scrubbing, sludge removal, and hygienic rinsing.</p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">2. Booking & Cancellation</h2>
          <p>Services can be booked via phone, WhatsApp, or our online form. We appreciate at least 24 hours notice for any cancellations or rescheduling to help us manage our local service routes efficiently.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">3. Property Access</h2>
          <p>Customers must ensure our technicians have safe and clear access to the water tanks, including overhead rooftop tanks and underground sumps, at the scheduled service time.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Liability</h2>
          <p>While we use professional equipment and trained technicians, Siri Chandana is not liable for pre-existing structural damage or degradation to aging concrete, plastic, or PVC tanks that becomes apparent during the standard cleaning process.</p>
        </div>
        </div>
      </section>
    </div>
  );
}
