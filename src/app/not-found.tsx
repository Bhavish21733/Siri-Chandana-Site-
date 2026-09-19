import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-white">
      <div className="w-24 h-24 bg-brand-aqua/10 rounded-full flex items-center justify-center text-brand-aqua mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">Looks like this page got cleaned away.</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="flex items-center justify-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Return Home
        </Link>
        <Link href="/services" className="flex items-center justify-center gap-2 bg-slate-100 text-brand-navy px-6 py-3 rounded-md font-bold hover:bg-slate-200 transition-colors">
          View Services
        </Link>
      </div>
    </div>
  );
}
