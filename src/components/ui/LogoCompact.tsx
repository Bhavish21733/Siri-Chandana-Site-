import React from 'react';

export function LogoCompact({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M25 45C36.0457 45 45 36.0457 45 25C45 15 25 0 25 0C25 0 5 15 5 25C5 36.0457 13.9543 45 25 45Z" fill="#0ea5e9" />
      <path d="M25 45C36.0457 45 45 36.0457 45 25C45 15 25 0 25 0C25 0 5 15 5 25C5 36.0457 13.9543 45 25 45Z" fill="url(#grad_comp)" opacity="0.8"/>
      <path d="M15 22C15 15 22 8 25 5C25 5 25 15 15 22Z" fill="white" opacity="0.4" />
      <rect x="2" y="25" width="46" height="25" rx="4" stroke="#0B1B3D" strokeWidth="2.5" fill="none"/>
      <line x1="2" y1="35" x2="48" y2="35" stroke="#0B1B3D" strokeWidth="2.5" />
      
      <defs>
        <linearGradient id="grad_comp" x1="25" y1="0" x2="25" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
