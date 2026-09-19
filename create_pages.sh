#!/bin/bash

# Create directories
mkdir -p src/app/about
mkdir -p src/app/gallery
mkdir -p src/app/blog/[slug]

# About Page
cat << 'PAGE' > src/app/about/page.tsx
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | Siri Chandana Water Tank Cleaning",
  description: "Learn about Siri Chandana, your trusted partner for professional water tank, sump, and Sintex cleaning services in Vanasthalipuram, Hyderabad.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-navy pt-24 pb-16 px-4">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Siri Chandana</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Committed to providing cleaner tanks, better water, and healthier spaces for the Hyderabad community.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-brand-navy mb-6">Our Cleaning Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Siri Chandana Water Tank Sump & Sintex Cleaning Services, we understand that clean water storage is fundamental to health and wellbeing. Operating locally in Vanasthalipuram, Hyderabad, we bring professional standards to a vital everyday service.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether servicing a residential rooftop tank, a commercial underground sump, or an industrial water storage facility, our approach remains uncompromising: thorough cleaning, hygienic processes, and total reliability.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-aqua" />
                  <span className="font-semibold text-gray-800">Residential & Commercial Capability</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-aqua" />
                  <span className="font-semibold text-gray-800">Local Hyderabad Focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-aqua" />
                  <span className="font-semibold text-gray-800">Thorough & Hygienic Process</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="tel:+919133432885" className="btn bg-brand-aqua text-white px-6 py-3 rounded-md font-bold hover:bg-[#00929e] flex items-center gap-2">
                  <Phone className="w-5 h-5"/> Call Now
                </a>
                <a href="https://wa.me/919133432885" className="btn bg-[#25D366] text-white px-6 py-3 rounded-md font-bold hover:bg-[#20b858] flex items-center gap-2">
                  <FaWhatsapp className="w-5 h-5"/> WhatsApp
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 border border-slate-200 shadow-sm relative overflow-hidden">
                <span className="text-sm font-medium">[IMAGE-10 — TRUST / WHY SIRI CHANDANA]</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
PAGE

# Gallery Page
cat << 'PAGE' > src/app/gallery/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery | Siri Chandana Water Tank Cleaning",
  description: "View our professional water tank cleaning projects in Vanasthalipuram, Hyderabad. See the transformation from dirty to clean.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-navy pt-24 pb-16 px-4">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Work Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real transformations of residential, commercial, and industrial water tanks across Hyderabad.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Featured Image */}
            <div className="lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border border-slate-300 relative overflow-hidden">
              <span className="text-sm font-medium">[IMAGE-09 — BEFORE / AFTER]</span>
            </div>

            {/* Supporting Images */}
            <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border border-slate-300 relative overflow-hidden">
              <span className="text-sm font-medium">[IMAGE-08 — CLEANING PROCESS]</span>
            </div>
            <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border border-slate-300 relative overflow-hidden">
              <span className="text-sm font-medium">[IMAGE-02 — RESIDENTIAL TANK CLEANING]</span>
            </div>
            <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border border-slate-300 relative overflow-hidden">
              <span className="text-sm font-medium">[IMAGE-05 — UNDERGROUND TANK CLEANING]</span>
            </div>
            <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border border-slate-300 relative overflow-hidden">
              <span className="text-sm font-medium">[IMAGE-07 — SUMP & SINTEX CLEANING]</span>
            </div>
            <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 border border-slate-300 relative overflow-hidden">
              <span className="text-sm font-medium">[IMAGE-03 — COMMERCIAL TANK CLEANING]</span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
PAGE

# Blog Page
cat << 'PAGE' > src/app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Guides | Siri Chandana Water Tank Cleaning",
  description: "Read helpful articles, maintenance tips, and guides about water tank hygiene in Hyderabad.",
};

export default function BlogPage() {
  const articles = [
    {
      slug: "how-often-to-clean-water-tank",
      title: "How Often Should a Water Tank Be Cleaned?",
      excerpt: "Understanding the ideal cleaning frequency for residential and commercial water tanks in Hyderabad's climate to maintain optimal hygiene.",
      category: "Maintenance Tips"
    },
    {
      slug: "signs-your-tank-needs-cleaning",
      title: "Signs Your Water Tank Needs Professional Cleaning",
      excerpt: "Don't wait until the water tastes bad. Learn the early warning signs that indicate algae or sludge buildup in your overhead tank or sump.",
      category: "Guide"
    },
    {
      slug: "overhead-vs-underground-cleaning",
      title: "Overhead vs. Underground Water Tank Cleaning",
      excerpt: "While both store water, overhead tanks and underground sumps require entirely different approaches to cleaning and sanitization.",
      category: "Service Insights"
    }
  ];

  return (
    <>
      <section className="bg-brand-navy pt-24 pb-16 px-4">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Blog & Guides</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, maintenance tips, and professional advice on keeping your water storage systems hygienic.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <article key={article.slug} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-gray-100">
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Article Image Placeholder</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-brand-teal text-xs font-bold uppercase tracking-wider mb-2">{article.category}</span>
                  <h2 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2">{article.title}</h2>
                  <p className="text-gray-600 mb-6 flex-grow">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`} className="inline-flex items-center gap-1 text-brand-aqua font-semibold hover:text-[#00929e] transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
PAGE

# Blog Post Slug Page
cat << 'PAGE' > src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  return {
    title: `${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | Siri Chandana`,
    description: "Read our latest insights on water tank cleaning and maintenance.",
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <article className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container-custom max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">{title}</h1>
          <p className="text-gray-500 text-sm font-medium">Published in Maintenance Tips</p>
        </header>
        
        <div className="aspect-[16/9] bg-slate-100 mb-10 rounded-xl flex items-center justify-center">
          <span className="text-slate-400 font-medium">Featured Image Placeholder</span>
        </div>

        <div className="prose prose-lg prose-brand max-w-none text-gray-700">
          <p>
            Water tank hygiene is critical to maintaining a healthy environment for your family or employees. This article covers the essential aspects of keeping your water storage system clean and safe.
          </p>
          <h2>Why Regular Maintenance Matters</h2>
          <p>
            Over time, water tanks accumulate sediment, dirt, and potentially harmful bacteria. Without proper cleaning, this buildup can affect the quality of the water running through your taps, posing health risks and potentially damaging plumbing fixtures.
          </p>
          <h3>Professional Cleaning Process</h3>
          <p>
            Attempting to clean a large water tank without professional equipment often yields incomplete results. At Siri Chandana, we utilize high-pressure cleaning tools and hygienic procedures to ensure every corner of the tank is addressed safely.
          </p>
          <div className="bg-brand-light p-6 rounded-lg my-8 border-l-4 border-brand-aqua">
            <h4 className="text-brand-navy font-bold mt-0">Need Professional Assistance?</h4>
            <p className="mb-0 text-sm">
              If your tank is due for a cleaning, contact us directly via <a href="tel:+919133432885" className="text-brand-aqua font-bold hover:underline">Phone</a> or <a href="https://wa.me/919133432885" className="text-brand-aqua font-bold hover:underline">WhatsApp</a>.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
PAGE

# Sitemap and Robots
cat << 'PAGE' > src/app/sitemap.ts
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sirichandanawater.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ]
}
PAGE

cat << 'PAGE' > src/app/robots.ts
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sirichandanawater.com/sitemap.xml',
  }
}
PAGE

chmod +x create_pages.sh
./create_pages.sh
