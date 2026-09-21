import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Siri Chandana Water Tank Cleaning",
  description: "Get a free quote for water tank cleaning in Hyderabad. Call or WhatsApp Siri Chandana today.",
};

export default function ContactPage() {
  return (
    <>
            <section data-aos="fade-up" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/image_01_hero.jpg" 
            alt="Contact Siri Chandana Today" 
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
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15]">
              Contact Siri Chandana Today
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              Ready for a cleaner water tank? Contact our Hyderabad team for a fast, free quote and schedule your inspection.
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

      <section data-aos="fade-up" className="section-padding bg-white relative">
        <div className="container-custom max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Contact Details */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <h2 className="text-3xl font-extrabold text-brand-navy mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We are based in Vanasthalipuram and serve surrounding areas. Reach out via phone, WhatsApp, or the enquiry form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-aqua/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-aqua">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Call Us</h4>
                    <a href="tel:+919133432885" className="text-brand-navy font-semibold hover:text-brand-aqua transition-colors text-lg">+91 91334 32885</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#25D366]">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">WhatsApp</h4>
                    <a href="https://wa.me/919133432885?text=Hi%20Siri%20Chandana,%20I%20would%20like%20to%20enquire%20about%20your%20water%20tank%20cleaning%20services." target="_blank" rel="noopener noreferrer" className="text-brand-navy font-semibold hover:text-[#25D366] transition-colors text-lg">Chat with us directly</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 text-gray-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Address</h4>
                    <p className="text-gray-600 leading-relaxed max-w-xs">
                      H No: 4/13/1083, Plot No: 42/A<br />
                      Sushma Sai Nagar, Vanasthalipuram<br />
                      Hyderabad, Telangana – 500070
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Netlify Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-navy mb-6">Request a Free Quote</h3>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full width map */}
      <section data-aos="fade-up" className="h-[500px] w-full bg-slate-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.5930673306425!2d78.5750043!3d17.335172399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba10e6c759441%3A0x935e3c5723a304b3!2sSiri%20Chandana%20Water%20Tank%20Sump%20and%20Sintex%20Cleaning%20Services!5e0!3m2!1sen!2sin!4v1789799570088!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Siri Chandana Location"
          className="absolute inset-0"
        />
      </section>
    </>
  );
}
