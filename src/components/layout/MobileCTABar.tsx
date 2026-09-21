"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export function MobileCTABar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Hide on scroll down, show on scroll up for better UX
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 pb-safe ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-200">
        <a 
          href="tel:+919133432885" 
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-brand-navy hover:bg-gray-50 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Call Now</span>
        </a>
        <div className="w-px bg-gray-200" />
        <a 
          href="https://wa.me/919133432885?text=Hi%20Siri%20Chandana,%20I%20would%20like%20to%20enquire%20about%20your%20water%20tank%20cleaning%20services." 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-[#25D366] text-white hover:bg-[#1C7904] transition-colors"
        >
          <FaWhatsapp className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
