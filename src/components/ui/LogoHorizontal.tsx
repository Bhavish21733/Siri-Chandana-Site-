import React from 'react';
import Image from 'next/image';

export function LogoHorizontal({ className = "w-48 h-auto", theme = "light" }: { className?: string, theme?: "light" | "dark" }) {
  // If used in a dark theme (like the footer), use the white-text logo variant
  if (theme === "dark") {
    return (
      <div className={className}>
        <Image 
          src="/images/siri-chandana-logo-white.png" 
          alt="Siri Chandana Water Tank Cleaning Services" 
          width={500} 
          height={150} 
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <Image 
        src="/images/siri-chandana-logo.png" 
        alt="Siri Chandana Water Tank Cleaning Services" 
        width={500} 
        height={150} 
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
