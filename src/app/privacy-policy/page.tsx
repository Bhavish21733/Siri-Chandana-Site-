import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Siri Chandana Water Tank Cleaning",
  description: "Privacy Policy for Siri Chandana Water Tank Sump & Sintex Cleaning Services.",
};

export default function PrivacyPolicy() {
  
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
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              How we handle and protect your information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg prose-brand max-w-none text-gray-700">
          <p><strong>Effective Date:</strong> Current</p>
          <p>At Siri Chandana Water Tank Sump & Sintex Cleaning Services, we respect your privacy and are committed to protecting any personal information you provide to us.</p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>When you contact us for a quote or service booking via phone, WhatsApp, or our website form, we may collect:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Your Name</li>
            <li>Your Phone Number</li>
            <li>Your Address or Service Location in Hyderabad</li>
            <li>Details regarding your water tank cleaning requirement</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information collected exclusively to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Provide you with an accurate quote.</li>
            <li>Schedule and deliver our water tank cleaning services at your property.</li>
            <li>Communicate with you regarding service updates or follow-ups.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">3. Data Sharing</h2>
          <p>We do not sell, rent, or trade your personal information to third parties. Your details are kept confidential and used solely for fulfilling your service request.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Contact Us</h2>
          <p>If you have any questions about our privacy practices, please contact us:</p>
          <ul className="list-none space-y-2 mb-6">
            <li><strong>Phone:</strong> +91 91334 32885</li>
            <li><strong>Address:</strong> H No: 4/13/1083, Plot No: 42/A, Sushma Sai Nagar, Vanasthalipuram, Hyderabad, Telangana – 500070</li>
          </ul>
        </div>
        </div>
      </section>
    </div>
  );
}
