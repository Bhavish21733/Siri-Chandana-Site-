import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Siri Chandana Water Tank Cleaning",
  description: "Privacy Policy for Siri Chandana Water Tank Sump & Sintex Cleaning Services.",
};

export default function PrivacyPolicy() {
  return (
    <div className="section-padding bg-white min-h-screen">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-8">Privacy Policy</h1>
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
    </div>
  );
}
