"use client";

import { FormEvent } from "react";

export function HeroForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;

    const message = `Hi Siri Chandana, I would like to request a quote.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service Required:* ${service}`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/919133432885?text=${encodedMessage}`, "_blank");
  };

  return (
    <form 
      name="hero-quote" 
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <input type="text" name="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-aqua text-gray-900 bg-white shadow-sm" />
      </div>
      <div>
        <input type="tel" name="phone" required placeholder="Mobile Number" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-aqua text-gray-900 bg-white shadow-sm" />
      </div>
      <div>
        <select name="service" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-aqua text-gray-700 bg-white shadow-sm appearance-none cursor-pointer">
          <option value="">Select a service...</option>
          <option value="Residential Water Tank Cleaning">Residential Water Tank Cleaning</option>
          <option value="Commercial Water Tank Cleaning">Commercial Water Tank Cleaning</option>
          <option value="Overhead Tank Cleaning">Overhead Tank Cleaning</option>
          <option value="Underground Tank Cleaning">Underground Tank Cleaning</option>
          <option value="Industrial Tank Cleaning">Industrial Tank Cleaning</option>
          <option value="Sump & Sintex Tank Cleaning">Sump & Sintex Tank Cleaning</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-brand-aqua text-white font-bold text-lg py-4 rounded-md hover:bg-[#0284c7] transition-all mt-2 shadow-md hover:shadow-lg active:scale-[0.98]">
        Get Free Quote
      </button>
    </form>
  );
}
