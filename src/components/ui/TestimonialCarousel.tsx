"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6 lg:-ml-8 cursor-grab active:cursor-grabbing">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex-none pl-4 md:pl-6 lg:pl-8 min-w-0 w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white p-8 md:p-10 rounded-[24px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between relative">
                <div>
                  <Quote className="w-12 h-12 text-brand-aqua/20 absolute top-8 right-8" />
                  <p className="text-gray-700 italic mb-10 leading-relaxed text-lg relative z-10 pr-10">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-lg mb-1">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.location} • {testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 mt-12 px-4 max-w-md mx-auto">
        <button 
          onClick={scrollPrev} 
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:ring-offset-2 flex-shrink-0"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex gap-3 justify-center items-center">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:ring-offset-2 ${
                index === selectedIndex ? "w-8 bg-brand-navy" : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={scrollNext} 
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-colors focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:ring-offset-2 flex-shrink-0"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
