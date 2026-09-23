"use client";

import { useState, useEffect, FormEvent } from "react";
import { X } from "lucide-react";

export function TankPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if it was already closed in this session
    // Temporarily disabled for testing so you can see it easily
    // if (sessionStorage.getItem("tankPopupClosed")) {
    //   setHasTriggered(true);
    //   return;
    // }

    const handleScroll = () => {
      if (hasTriggered) return;
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollHeight) * 100;

      // Trigger at 30% scroll
      if (percentage > 30) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasTriggered]);

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;

    const message = `Hi Siri Chandana, I would like to request a quote.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service Required:* ${service}`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/919133432885?text=${encodedMessage}`, "_blank");
    handleClose();
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("tankPopupClosed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* Tank Container */}
      <div className="relative w-full max-w-[90%] sm:max-w-sm flex flex-col items-center animate-in zoom-in-95 duration-500">
        
        {/* Close Button Floating Outside */}
        <button 
          onClick={handleClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 p-2 focus:outline-none"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Tank Lid */}
        <div className="w-24 h-6 bg-gradient-to-b from-[#2a4365] to-[#1a365d] rounded-t-xl border-t-4 border-x-4 border-[#0f172a] relative z-10 -mb-1 shadow-[inset_0_4px_10px_rgba(255,255,255,0.1)]"></div>
        <div className="w-32 h-3 bg-[#1a365d] border-x-4 border-[#0f172a] relative z-10 -mb-1"></div>

        {/* Tank Body */}
        <div className="w-full bg-gradient-to-br from-[#2a4365] via-[#1a365d] to-[#0f172a] rounded-[35px] relative border-4 border-[#0f172a] overflow-hidden shadow-2xl">
          
          {/* Tank Ribs (Horizontal lines for texture) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 60px, rgba(0,0,0,0.4) 60px, rgba(0,0,0,0.4) 63px, rgba(255,255,255,0.05) 63px, rgba(255,255,255,0.05) 64px)' }}>
          </div>
          
          {/* Glare effect */}
          <div className="absolute top-0 left-4 bottom-0 w-12 bg-white/10 pointer-events-none rounded-full blur-xl"></div>

          {/* Form Content */}
          <div className="relative z-20 p-6 sm:p-8 text-white">
            <div className="text-center mb-6">
              <span className="inline-block bg-brand-aqua/20 text-brand-aqua border border-brand-aqua/20 text-xs font-bold tracking-widest uppercase px-2 py-1 rounded mb-2">Get an Estimate</span>
              <h3 className="text-2xl font-extrabold leading-tight">Book Your Tank Cleaning</h3>
            </div>
            
            <form className="space-y-4" name="tank-popup-form" onSubmit={handleSubmit}>
              
              
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-aqua shadow-sm"
                />
              </div>
              
              <div>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Mobile Number" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-aqua shadow-sm"
                />
              </div>

              <div>
                <select 
                  name="service"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-aqua shadow-sm cursor-pointer appearance-none"
                >
                  <option value="" disabled>Select Tank Type...</option>
                  <option value="Residential Water Tank Cleaning">Residential Water Tank Cleaning</option>
                  <option value="Commercial Water Tank Cleaning">Commercial Water Tank Cleaning</option>
                  <option value="Overhead Tank Cleaning">Overhead Tank Cleaning</option>
                  <option value="Underground Tank Cleaning">Underground Tank Cleaning</option>
                  <option value="Industrial Tank Cleaning">Industrial Tank Cleaning</option>
                  <option value="Sump & Sintex Tank Cleaning">Sump & Sintex Tank Cleaning</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#25D366] hover:bg-[#1C7904] text-white font-bold py-3.5 px-4 rounded-lg transition-colors shadow-lg mt-2"
              >
                Send Request
              </button>
            </form>
            
            <p className="text-xs text-center text-white/50 mt-4">We respect your privacy. No spam.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
