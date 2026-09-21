import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { LogoHorizontal } from "@/components/ui/LogoHorizontal";

export function Footer() {
  return (
    <footer className="bg-[#002541] border-t border-[#00182b] pt-16 pb-24 md:pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <LogoHorizontal className="w-64 h-auto" theme="dark" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional, hygienic, and reliable water tank cleaning services in Hyderabad. We ensure your family's health starts with clean water storage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-brand-aqua transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-brand-aqua transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-brand-aqua transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-brand-aqua transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-brand-aqua transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-brand-aqua transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services#residential" className="text-gray-300 hover:text-brand-aqua transition-colors">Residential Tanks</Link></li>
              <li><Link href="/services#commercial" className="text-gray-300 hover:text-brand-aqua transition-colors">Commercial Tanks</Link></li>
              <li><Link href="/services#overhead" className="text-gray-300 hover:text-brand-aqua transition-colors">Overhead Tanks</Link></li>
              <li><Link href="/services#underground" className="text-gray-300 hover:text-brand-aqua transition-colors">Underground Sumps</Link></li>
              <li><Link href="/services#industrial" className="text-gray-300 hover:text-brand-aqua transition-colors">Industrial Tanks</Link></li>
              <li><Link href="/services#sintex" className="text-gray-300 hover:text-brand-aqua transition-colors">Sintex Cleaning</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-aqua flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">H No: 4/13/1083, Plot No: 42/A, Sushma Sai Nagar, Vanasthalipuram, Hyderabad, Telangana – 500070</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-aqua flex-shrink-0" />
                <a href="tel:+919133432885" className="text-gray-300 hover:text-brand-aqua font-semibold">+91 91334 32885</a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <a href="https://wa.me/919133432885?text=Hi%20Siri%20Chandana,%20I%20would%20like%20to%20enquire%20about%20your%20water%20tank%20cleaning%20services." target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#25D366] font-semibold">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#003761] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#80a4c0] text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Siri Chandana Water Tank Sump & Sintex Cleaning Services. All rights reserved. <span className="block sm:inline sm:ml-2 mt-2 sm:mt-0">Designed by <a href="https://fareworks.in" target="_blank" rel="noopener noreferrer" className="text-brand-aqua hover:text-white transition-colors">Fareworks</a></span>
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-[#80a4c0] hover:text-brand-aqua transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-[#80a4c0] hover:text-brand-aqua transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
