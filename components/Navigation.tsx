
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  /* Updated union to include news-detail and other missing pages to stay consistent with App.tsx and fix assignment errors */
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'news-detail') => void;
  currentPage?: 'home' | 'about' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'news-detail';
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine if we should use the "light" (dark text/white bg) mode
  const isLightMode = isScrolled || currentPage !== 'home';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, page: any) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[999] px-6 transition-all duration-500 ease-in-out font-sans ${
          isLightMode 
            ? 'bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200/50 py-3' 
            : 'bg-ag-green-950/20 backdrop-blur-sm py-6 border-b border-white/30'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-14">
            
            <button onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-2 shrink-0 relative z-50 outline-none group">
              <div 
                className={`w-8 h-8 flex items-center justify-center rounded-full shadow-sm transition-all duration-500 ${
                  isLightMode ? 'bg-ag-green-950' : 'bg-white'
                }`}
              >
                 <svg viewBox="0 0 100 100" className="w-5 h-5">
                    <path 
                      className={`transition-all duration-500 ${
                        isLightMode ? 'fill-white' : 'fill-ag-green-800'
                      }`}
                      d="M50 0 L60 10 L70 5 L80 15 L75 25 L85 30 L95 25 L100 35 L90 45 L95 55 L100 60 L90 70 L80 65 L70 75 L60 70 L50 80 L40 70 L30 75 L20 65 L10 70 L0 60 L5 55 L10 45 L0 35 L5 25 L15 30 L25 25 L20 15 L30 5 L40 10 Z" 
                    />
                 </svg>
              </div>
              <span 
                className={`text-xl font-bold tracking-tight font-sans drop-shadow-sm transition-all duration-500 ${
                  isLightMode ? 'text-ag-green-950' : 'text-white'
                }`}
              >
                AgAsset<span className="text-ag-lime">Co</span>
              </span>
            </button>

            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
               <div 
                 className={`rounded-full px-8 py-2.5 flex items-center gap-8 shadow-sm border transition-all duration-500 ${
                   isLightMode 
                     ? 'bg-gray-50/50 border-gray-200/50 shadow-inner' 
                     : 'bg-white/10 border-white/20 backdrop-blur-md'
                 }`}
               >
                  {[
                    { id: 'home', label: 'Home' },
                    { id: 'about', label: 'About Us' },
                    { id: 'solutions', label: 'Solutions' },
                    { id: 'portfolio', label: 'Portfolio' },
                    { id: 'news', label: 'News' }
                  ].map((link) => (
                    <a 
                      key={link.id}
                      href="#"
                      onClick={(e) => handleLinkClick(e, link.id as any)}
                      className={`text-sm font-medium relative group transition-all duration-300 ${
                        currentPage === link.id 
                          ? 'text-ag-lime' 
                          : (isLightMode ? 'text-gray-600 hover:text-ag-green-950' : 'text-white hover:text-ag-lime')
                      }`}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] bg-ag-lime transition-all duration-300 group-hover:w-full ${currentPage === link.id ? 'w-full' : ''}`}></span>
                    </a>
                  ))}
               </div>
            </div>

            <div className="hidden md:block shrink-0 relative z-50">
              <button 
                onClick={(e) => handleLinkClick(e, 'contact')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg transition-all duration-500 hover:scale-105 ${
                  isLightMode
                    ? 'bg-ag-green-950 text-white shadow-ag-green-950/20' 
                    : 'bg-white text-ag-green-950 shadow-white/10'
                }`}
              >
                Contact Us
              </button>
            </div>

            <button 
              className="lg:hidden shrink-0 relative z-50 outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div 
                className={`p-2 rounded-full border transition-all duration-300 ${
                   isLightMode 
                     ? 'bg-gray-100/50 border-gray-200 text-ag-green-950' 
                     : 'bg-white/10 border-white/20 text-white backdrop-blur-md'
                }`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden bg-ag-green-950/95 backdrop-blur-2xl fixed inset-0 top-0 z-40 pt-32 px-6 overflow-hidden flex flex-col items-center"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <div className="flex flex-col gap-8 items-center justify-center font-sans h-full pb-20 w-full">
              {['home', 'about', 'solutions', 'portfolio', 'news', 'contact'].map((page) => (
                <motion.a 
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className={`text-4xl font-bold tracking-tighter capitalize transition-colors ${currentPage === page ? 'text-ag-lime' : 'text-white'}`}
                  onClick={(e) => handleLinkClick(e, page as any)}
                >
                  {page.replace('-', ' ')}
                </motion.a>
              ))}
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-xs bg-ag-lime text-white py-5 rounded-full font-bold mt-12 uppercase tracking-widest text-sm shadow-xl shadow-ag-lime/20"
              >
                Partner With Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
