import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Clock, MapPin, Building2, Home as HomeIcon, Factory, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { services } from "@/data/services";
import { HeroForm } from "@/components/HeroForm";
import { faqs } from "@/data/faqs";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section data-aos="fade-up" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/image_01_hero.jpg" alt="Professional Water Tank Cleaning" fill className="object-cover object-[center_30%]" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/60" />
        </div>
        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="text-white w-full lg:pr-4">
              <span className="inline-block bg-brand-aqua/20 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-6 border border-brand-aqua/30">Welcome to Siri Chandana</span>
              <h1 className="text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold mb-6 leading-[1.2] text-white tracking-tight">
                Professional Water Tank, <br className="hidden md:block" />
                Sump & <span className="text-brand-aqua">Sintex Cleaning</span> <br className="hidden md:block" />
                Services in Hyderabad
              </h1>
              <p className="text-lg text-gray-200 mb-10 leading-relaxed">
                Ensure the health and safety of your water supply <br className="hidden sm:block" />
                with our expert, hygienic cleaning services for <br className="hidden sm:block" />
                residential and commercial properties.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
                <a href="https://wa.me/919133432885?text=Hi%20Siri%20Chandana,%20I%20would%20like%20to%20enquire%20about%20your%20water%20tank%20cleaning%20services." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#1C7904] transition-colors">
                  <FaWhatsapp className="w-6 h-6" /> WhatsApp Us
                </a>
                <a href="tel:+919133432885" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-brand-navy transition-colors">
                  <Phone className="w-5 h-5" /> Call Us
                </a>
              </div>
            </div>

            {/* Right Column: Tank-Shaped Form */}
            <div className="w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 relative pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {/* Tank Lid */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-blue-500 rounded-t-lg shadow-inner z-10 border-t-2 border-blue-400"></div>
              
              {/* Tank Body */}
              <div className="bg-white rounded-t-[70px] rounded-b-xl shadow-2xl relative overflow-hidden z-20 border-x-[12px] border-b-[8px] border-blue-50">
                {/* Decorative Tank Ribs */}
                <div className="absolute inset-x-0 top-24 h-12 bg-blue-50/50 border-y border-blue-100 opacity-60 pointer-events-none"></div>
                <div className="absolute inset-x-0 top-52 h-12 bg-blue-50/50 border-y border-blue-100 opacity-60 pointer-events-none"></div>
                
                <div className="p-6 md:p-10 pt-8 md:pt-12 relative z-30">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">Book a Free Inspection</h3>
                    <p className="text-gray-500 mt-2 text-base md:text-lg">Get an instant quote for your tank</p>
                  </div>
                  
                  <HeroForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2. STATS MARQUEE STRIP */}
      <div className="bg-brand-navy border-t border-white/10 py-5 relative z-20 shadow-xl overflow-hidden flex">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center px-6 md:px-12 gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-black text-brand-aqua">500+</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300">Tanks Cleaned</span>
              </div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-700"></div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-black text-brand-aqua">8+</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300">Years Experience</span>
              </div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-700"></div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-black text-brand-aqua">200+</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300">Happy Clients</span>
              </div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-700"></div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-black text-brand-aqua">24/7</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300">Service</span>
              </div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-700"></div>
            </div>
          ))}
        </div>
      </div>


      {/* 3. THE PROBLEM / VALUE INTRO */}
      <section data-aos="fade-up" className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative">
                <Image src="/images/image_09_before_after.jpg" alt="Water Tank Before and After Cleaning" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                <p className="font-bold text-brand-navy flex items-center gap-2 mb-1"><ShieldCheck className="w-5 h-5 text-brand-aqua"/> Health First</p>
                <p className="text-sm text-gray-600">Cleaner tanks. Better maintained water storage. Greater peace of mind.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">The Problem</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">Why Tank Cleaning Matters</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over time, water storage systems naturally accumulate sediment, dirt, and algae. If left unmaintained, this buildup degrades water quality and creates an unhygienic environment right at the source of your daily water supply.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Regular professional cleaning removes sludge and biofilm safely. At Siri Chandana, we prioritize thorough hygiene over superficial washing, ensuring your residential or commercial tank is truly restored to optimal condition.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-brand-aqua flex-shrink-0" /><span className="text-gray-700 font-medium">Prevents algae and harmful bacterial growth</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-brand-aqua flex-shrink-0" /><span className="text-gray-700 font-medium">Removes settled mud, sand, and sediment</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-brand-aqua flex-shrink-0" /><span className="text-gray-700 font-medium">Maintains safe water standards for your property</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE SERVICES */}
      <section data-aos="fade-up" className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Water Tank Cleaning Services for Every Property</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From individual household Sintex tanks to massive industrial sumps, we provide professional cleaning solutions for all types of water storage systems in Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div data-aos="fade-up" data-aos-delay={idx * 100} key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image src={service.imageSrc} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Link href={`/services#${service.id}`} className="inline-flex items-center gap-2 text-brand-aqua font-bold hover:text-[#0284c7] transition-colors mt-auto">
                    Request Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section data-aos="fade-up" className="section-padding bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-aqua opacity-10 blur-3xl rounded-full" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-aqua/20 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Choose Siri Chandana?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We are a local Hyderabad business built on trust, transparency, and a commitment to doing the job right.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-brand-aqua/20 text-brand-aqua rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Thorough Cleaning</h4>
              <p className="text-gray-300 text-sm leading-relaxed">We focus on systematic cleaning rather than superficial washing, ensuring every surface is addressed.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-brand-aqua/20 text-brand-aqua rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">All Tank Types</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Experienced in servicing residential, commercial, and industrial properties with specialized equipment.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-brand-aqua/20 text-brand-aqua rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Local Service</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Based in Vanasthalipuram, we understand local water quality challenges and respond quickly.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-brand-aqua/20 text-brand-aqua rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Convenient Booking</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Make it easy to enquire via call or WhatsApp. We respect your time and schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICE PROCESS */}
      <section data-aos="fade-up" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Our Professional Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring your tank is restored to optimal hygiene.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between relative max-w-5xl mx-auto gap-8 md:gap-0">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-gray-200 z-0"></div>
            
            {[
              { num: "01", title: "Enquire", desc: "Contact us via call, WhatsApp, or form." },
              { num: "02", title: "Understand", desc: "We gather details on your tank requirement." },
              { num: "03", title: "Service", desc: "Professional tank cleaning is performed." },
              { num: "04", title: "Final Check", desc: "We ensure the area is clean and verified." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-row md:flex-col items-center md:text-center w-full md:w-1/4 gap-6 md:gap-0">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-aqua text-brand-navy flex items-center justify-center font-bold text-xl md:mb-6 shadow-sm z-10 flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 max-w-[200px] mx-auto">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SERVICE COVERAGE */}
      <section data-aos="fade-up" className="section-padding bg-brand-navy text-center relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="container-custom relative z-10">
          <span className="inline-block bg-brand-aqua/20 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Coverage</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Service Coverage</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium mb-10">
            We provide prompt and professional water tank cleaning services across major areas in Hyderabad.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Vanasthalipuram", "LB Nagar", "Dilsukhnagar", "BN Reddy Nagar", "Hayathnagar", "Kothapet", "Nagole", "Mansoorabad", "Auto Nagar", "Saroornagar", "Hastinapuram", "Karmanghat"].map((area, idx) => (
              <span key={idx} className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full font-medium hover:bg-brand-aqua hover:border-brand-aqua transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VISUAL PROOF / GALLERY PREVIEW */}
      <section data-aos="fade-up" className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Gallery</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Visual Proof</h2>
              <p className="text-lg text-gray-600 max-w-2xl">Real results from our local cleaning projects.</p>
            </div>
            <Link href="/gallery" className="hidden md:inline-flex text-brand-navy font-bold hover:text-brand-aqua transition-colors items-center gap-2">
              View Our Gallery <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <Image src="/images/image_08_process.jpg" alt="Process" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <Image src="/images/image_02_residential.jpg" alt="Residential" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group hidden md:block md:col-span-2">
              <Image src="/images/image_06_industrial.jpg" alt="Industrial" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/gallery" className="inline-flex text-brand-navy font-bold hover:text-brand-aqua transition-colors items-center gap-2">
              View Our Gallery <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section data-aos="fade-up" className="py-16 md:py-24 lg:py-[120px] bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">What Our Clients Say</h2>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section data-aos="fade-up" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-brand-navy hover:text-brand-aqua transition-colors">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:-rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. LATEST INSIGHTS (BLOG) */}
      <section data-aos="fade-up" className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="inline-block bg-brand-aqua/10 text-brand-aqua font-bold text-sm tracking-widest uppercase px-3 py-1 rounded-full mb-4">Latest Insights</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Water Tank Maintenance Tips</h2>
            </div>
            <Link href="/blog" className="hidden md:inline-flex text-brand-navy font-bold hover:text-brand-aqua transition-colors items-center gap-2">
              View All Posts <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <Link href="/blog/1" className="block h-48 bg-slate-200 relative">
                <Image src="/images/blog_1_new.jpg" alt="Overhead Tank" fill className="object-cover" />
              </Link>
              <div className="p-6">
                <p className="text-xs font-bold text-brand-aqua mb-2 uppercase tracking-wide">Maintenance</p>
                <h3 className="text-xl font-bold text-brand-navy mb-3"><Link href="/blog/1" className="hover:text-brand-aqua transition-colors">How Often Should You Clean Your Overhead Tank?</Link></h3>
                <p className="text-gray-600 mb-4 line-clamp-2">Discover the recommended frequency for cleaning your apartment or residential overhead water tank to ensure safe drinking water.</p>
                <Link href="/blog/1" className="text-brand-aqua font-bold flex items-center gap-2 hover:text-brand-navy transition-colors">Read More <ArrowRight className="w-4 h-4"/></Link>
              </div>
            </div>
            {/* Blog Card 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <Link href="/blog/2" className="block h-48 bg-slate-200 relative">
                <Image src="/images/blog_2_new.jpg" alt="Underground Sump" fill className="object-cover" />
              </Link>
              <div className="p-6">
                <p className="text-xs font-bold text-brand-aqua mb-2 uppercase tracking-wide">Health & Safety</p>
                <h3 className="text-xl font-bold text-brand-navy mb-3"><Link href="/blog/2" className="hover:text-brand-aqua transition-colors">The Dangers of a Dirty Underground Sump</Link></h3>
                <p className="text-gray-600 mb-4 line-clamp-2">Hidden underground sumps are prone to contamination. Learn why professional cleaning is crucial for your family's health.</p>
                <Link href="/blog/2" className="text-brand-aqua font-bold flex items-center gap-2 hover:text-brand-navy transition-colors">Read More <ArrowRight className="w-4 h-4"/></Link>
              </div>
            </div>
            {/* Blog Card 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <Link href="/blog/3" className="block h-48 bg-slate-200 relative">
                <Image src="/images/blog_3_new.jpg" alt="Clean and safe water tank" fill className="object-cover" />
              </Link>
              <div className="p-6">
                <p className="text-xs font-bold text-brand-aqua mb-2 uppercase tracking-wide">Hygiene</p>
                <h3 className="text-xl font-bold text-brand-navy mb-3"><Link href="/blog/3" className="hover:text-brand-aqua transition-colors">Why Sintex Tanks Need Special Attention</Link></h3>
                <p className="text-gray-600 mb-4 line-clamp-2">Plastic water tanks require specific cleaning techniques to remove algae without damaging the material.</p>
                <Link href="/blog/3" className="text-brand-aqua font-bold flex items-center gap-2 hover:text-brand-navy transition-colors">Read More <ArrowRight className="w-4 h-4"/></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA BANNER */}
      <section data-aos="fade-up" className="py-24 relative overflow-hidden bg-[url('/images/cta_bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/30" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-6 drop-shadow-sm">
            Ready for a Hygienic Water Supply?
          </h2>
          <p className="text-xl text-brand-navy/90 max-w-2xl mx-auto mb-10 font-bold drop-shadow-sm">
            Reach out to our Vanasthalipuram team for prompt, professional tank cleaning across Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/919133432885?text=Hi%20Siri%20Chandana,%20I%20would%20like%20to%20enquire%20about%20your%20water%20tank%20cleaning%20services." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#1C7904] transition-colors shadow-lg w-full sm:w-auto">
              <FaWhatsapp className="w-6 h-6" /> WhatsApp Us
            </a>
            <a href="tel:+919133432885" className="flex items-center justify-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#001d33] transition-colors shadow-lg w-full sm:w-auto">
              <Phone className="w-5 h-5" /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
