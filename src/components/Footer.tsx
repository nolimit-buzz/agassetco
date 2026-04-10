"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-ag-green-950 pt-24 pb-8 border-t border-gray-200 snap-start">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          
          {/* Branding Column */}
          <div className="col-span-1 md:col-span-1 pr-8">
            <Link href="/" className="mb-6 inline-block select-none cursor-pointer">
              <Image
                src="/logo.svg"
                alt="AgAsset Co"
                width={140}
                height={64}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-base md:text-2xl text-gray-400 leading-relaxed mb-6 font-medium">
              A wholly owned subsidiary of <strong className="text-ag-green-950">Agronomie</strong>.
            </p>
            <div className="text-base font-bold uppercase tracking-widest text-gray-300">
               Lagos • Nairobi
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-gray-400">Company</h4>
            <ul className="space-y-4 text-base md:text-[0.875rem] font-medium">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Solutions', href: '/solutions' },
                { name: 'Insights', href: '/news' },
                { name: 'Contact', href: '/contact' }
              ].map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-ag-lime transition-colors flex items-center gap-2 group">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-gray-400">Solutions</h4>
            <ul className="space-y-4 text-base md:text-[0.875rem] font-medium">
              {['Lease-to-Own', 'PUE Financing', 'Asset Management', 'Developer Portal'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-ag-lime transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 3 */}
          <div>
             <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-gray-400">Connect</h4>
             <ul className="space-y-4 text-base md:text-[0.875rem] font-medium">
               {[
                 { name: 'LinkedIn', href: 'https://www.linkedin.com' },
                 { name: 'Twitter / X', href: 'https://twitter.com' },
                 { name: 'Medium', href: 'https://medium.com' }
               ].map(item => (
                 <li key={item.name}>
                   <a
                     href={item.href}
                     target="_blank"
                     rel="noreferrer"
                     className="flex items-center gap-2 hover:text-ag-lime transition-colors group"
                   >
                     {item.name}
                     <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </a>
                 </li>
               ))}
             </ul>
          </div>

        </div>

        {/* 2. Standardized Footer Line & Signature */}
        <div className="w-full">
           {/* Line matching section title lines width and color */}
           <div className="w-full h-px bg-gray-200 mb-8" />
           
           <h1 className="text-xl font-bold tracking-widest text-ag-green-950 w-full text-center md:text-left select-none uppercase mb-8">
              ©2025 — AGASSETCO
           </h1>
        </div>

        {/* 3. Bottom Utility Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-400 uppercase tracking-widest mt-4">
           <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-ag-green-950 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-ag-green-950 transition-colors">Terms</Link>
              <Link href="/cookie-policy" className="hover:text-ag-green-950 transition-colors">Cookie Policy</Link>
           </div>
           <div className="mt-4 md:mt-0 tracking-[0.2em]">
              Energy for Growth
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
