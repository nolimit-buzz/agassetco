
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  /* Updated union to include news-detail and other missing pages to stay consistent with App.tsx */
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'news-detail') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, page: any) => {
    e.preventDefault();
    if (onNavigate) onNavigate(page);
  };

  return (
    <footer className="bg-white text-ag-green-950 pt-24 pb-8 border-t border-gray-200 snap-start">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          
          {/* Branding Column */}
          <div className="col-span-1 md:col-span-1 pr-8">
            <div className="mb-6 select-none cursor-pointer" onClick={(e) => handleLinkClick(e, 'home')}>
               <img 
                 src="/logo.svg" 
                 alt="AgAsset Co" 
                 className="h-16 w-auto"
               />
            </div>
            <p className="text-base md:text-[0.875rem] text-gray-400 leading-relaxed mb-6 font-medium">
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
                { name: 'About Us', page: 'about' },
                { name: 'Portfolio', page: 'portfolio' },
                { name: 'Solutions', page: 'solutions' },
                { name: 'Insights', page: 'news' },
                { name: 'Contact', page: 'contact' }
              ].map(item => (
                <li key={item.name}>
                  <a href="#" onClick={(e) => handleLinkClick(e, item.page)} className="hover:text-ag-lime transition-colors flex items-center gap-2 group">
                    {item.name}
                  </a>
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
               {['LinkedIn', 'Twitter / X', 'Medium'].map(item => (
                 <li key={item}>
                   <a href="#" className="flex items-center gap-2 hover:text-ag-lime transition-colors group">
                     {item}
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
              <a href="#" onClick={(e) => handleLinkClick(e, 'privacy')} className="hover:text-ag-green-950 transition-colors">Privacy Policy</a>
              <a href="#" onClick={(e) => handleLinkClick(e, 'terms')} className="hover:text-ag-green-950 transition-colors">Terms</a>
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
