import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Siri Chandana Water Tank Cleaning",
  description: "Terms and Conditions for Siri Chandana Water Tank Sump & Sintex Cleaning Services.",
};

export default function TermsConditions() {
  return (
    <div className="section-padding bg-white min-h-screen">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-8">Terms & Conditions</h1>
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
    </div>
  );
}
