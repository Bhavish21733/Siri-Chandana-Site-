"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { LogoHorizontal } from "@/components/ui/LogoHorizontal";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 mr-4" aria-label="Siri Chandana Home">
          <LogoHorizontal className="w-56 md:w-64 lg:w-72 h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`font-semibold text-sm uppercase tracking-wide transition-colors ${
                  isActive ? "text-brand-aqua" : "text-brand-navy hover:text-brand-aqua"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center ml-4">
          <a href="https://wa.me/919133432885" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-md font-bold hover:bg-[#1C7904] transition-colors shadow-sm">
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-brand-navy p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible h-[calc(100vh-80px)] overflow-y-auto" : "opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <div className="p-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`p-4 rounded-lg font-bold text-lg transition-colors ${
                  isActive ? "bg-brand-aqua/10 text-brand-aqua" : "text-brand-navy hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="mt-6 flex flex-col gap-4 p-4">
            <a href="tel:+919133432885" className="flex items-center justify-center gap-2 bg-slate-100 text-brand-navy px-5 py-4 rounded-md font-bold text-lg">
              <Phone className="w-5 h-5" />
              Call +91 91334 32885
            </a>
            <a href="https://wa.me/919133432885" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-4 rounded-md font-bold text-lg">
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
