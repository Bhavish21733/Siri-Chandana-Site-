"use client";

import { FormEvent } from "react";

export function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const messageContent = formData.get("message") as string;

    let message = `Hi Siri Chandana, I would like to request a quote.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service Required:* ${service}`;
    if (messageContent) {
      message += `\n*Message:* ${messageContent}`;
    }
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/919133432885?text=${encodedMessage}`, "_blank");
  };

  return (
    <form 
      name="contact" 
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-gray-900 block">Your Name</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-transparent transition-shadow bg-white" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-900 block">Phone Number</label>
          <input type="tel" id="phone" name="phone" required placeholder="Enter your mobile number" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-transparent transition-shadow bg-white" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-semibold text-gray-900 block">Service Required</label>
        <select id="service" name="service" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-transparent transition-shadow bg-white appearance-none text-gray-700 cursor-pointer">
          <option value="">Select a service...</option>
          <option value="Residential Water Tank Cleaning">Residential Water Tank Cleaning</option>
          <option value="Commercial Water Tank Cleaning">Commercial Water Tank Cleaning</option>
          <option value="Overhead Tank Cleaning">Overhead Tank Cleaning</option>
          <option value="Underground Tank Cleaning">Underground Tank Cleaning</option>
          <option value="Industrial Tank Cleaning">Industrial Tank Cleaning</option>
          <option value="Sump & Sintex Tank Cleaning">Sump & Sintex Tank Cleaning</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-900 block">Additional Details (Optional)</label>
        <textarea id="message" name="message" rows={4} placeholder="Tell us about your tank cleaning requirement" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-transparent transition-shadow bg-white resize-y"></textarea>
      </div>

      <button type="submit" className="w-full bg-brand-navy text-white font-bold text-lg py-4 rounded-md hover:bg-[#0284c7] transition-colors shadow-md hover:shadow-lg active:scale-[0.98]">
        Submit Enquiry
      </button>
      <p className="text-xs text-gray-500 text-center mt-4">We respect your privacy. No spam, ever.</p>
    </form>
  );
}
