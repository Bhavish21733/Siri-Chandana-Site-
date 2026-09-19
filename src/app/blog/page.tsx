import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Water Tank Cleaning Blog & Insights | Siri Chandana",
  description: "Read our latest articles and guides on maintaining a healthy, hygienic water supply in Hyderabad.",
};

export default function BlogPage() {
  return (
    <>
            <section data-aos="fade-up" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-navy">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/image_04_overhead.jpg" 
            alt="Water Tank Cleaning Blog" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[#0B1B3D]/40"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="block text-brand-aqua font-bold text-sm tracking-widest uppercase mb-4">
              INSIGHTS & GUIDES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15]">
              Water Tank Cleaning Blog
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              Expert advice on water tank maintenance, hygiene, and ensuring a safe water supply for your property and family.
            </p>
            
            <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mt-2">
              <Link 
                href="/contact" 
                className="flex-1 sm:flex-none text-center bg-[#0ea5e9] text-white font-bold py-3 px-2 sm:px-8 rounded hover:bg-[#0284c7] transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                <span className="sm:hidden">Book Inspection</span>
                <span className="hidden sm:inline">Book an Inspection</span>
              </Link>
              <a 
                href="tel:+919133432885" 
                className="flex-1 sm:flex-none text-center bg-transparent border-2 border-white/80 text-white font-bold py-2.5 px-2 sm:px-8 rounded hover:bg-white/10 transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
                <Link href={`/blog/${post.id}`} className="block h-56 bg-slate-200 relative group overflow-hidden shrink-0">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-brand-aqua uppercase tracking-wide bg-brand-aqua/10 px-3 py-1 rounded-full">{post.category}</span>
                    <div className="flex items-center text-gray-500 text-sm gap-1">
                      <Clock className="w-4 h-4" /> {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-4 leading-snug">
                    <Link href={`/blog/${post.id}`} className="hover:text-brand-aqua transition-colors">{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                  
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm font-medium text-gray-500 gap-2">
                      <User className="w-4 h-4" /> {post.author}
                    </div>
                    <Link href={`/blog/${post.id}`} className="text-brand-aqua font-bold flex items-center gap-2 hover:text-brand-navy transition-colors">
                      Read <ArrowRight className="w-4 h-4"/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
