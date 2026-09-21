import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TankPopup } from "@/components/TankPopup";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import AosInit from "@/components/AosInit";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sirichandanawater.com'),
  title: "Professional Water Tank Cleaning in Vanasthalipuram, Hyderabad | Siri Chandana",
  description: "Siri Chandana offers premium water tank, sump, and Sintex cleaning services for residential and commercial properties in Vanasthalipuram, Hyderabad. Call 9133432885.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Siri Chandana Water Tank Sump & Sintex Cleaning Services",
    description: "Professional water tank cleaning services in Vanasthalipuram, Hyderabad.",
    url: "https://sirichandanawater.com",
    siteName: "Siri Chandana",
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Siri Chandana Water Tank Sump & Sintex Cleaning Services",
  image: "https://sirichandanawater.com/images/image_01_hero.jpg",
  url: "https://sirichandanawater.com",
  telephone: "+919133432885",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H No: 4/13/1083, Plot No:42/A, Sushma Sai Nagar, Vanasthalipuram",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500070",
    addressCountry: "IN"
  },
  areaServed: ["Vanasthalipuram", "Hyderabad"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans bg-white text-gray-900 min-h-screen flex flex-col selection:bg-brand-aqua selection:text-white pb-14 md:pb-0">
        <AosInit />
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <TankPopup />
        <MobileCTABar />
      </body>
    </html>
  );
}
