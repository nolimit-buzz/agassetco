
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Introduction from './components/Introduction'; // Section 01
import ProblemSolution from './components/ProblemSolution'; // Section 02 (The Challenge)
import HubAndSolutions from './components/HubAndSolutions'; // Section 03 & 04 MERGED
import Portfolio from './components/Portfolio'; // Section 05
import NewsSection from './components/NewsSection'; // Section 06
import ImpactCTA from './components/ImpactCTA'; // Final CTA
import Footer from './components/Footer';
import AboutUsPage from './components/AboutUsPage';
import TeamPage from './components/TeamPage';
import SolutionsPage from './components/SolutionsPage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import CookiePolicyPage from './components/CookiePolicyPage';
import NewsPage from './components/NewsPage';
import NewsDetailPage from './components/NewsDetailPage';
import SingleProject from './components/SingleProject';
import SustainabilityAssistant from './components/SustainabilityAssistant';
import CookieConsent from './components/CookieConsent';
import { motion, AnimatePresence } from 'framer-motion';

type PageType = 'home' | 'about' | 'team' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'cookie-policy' | 'news-detail' | 'project-detail';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [activeId, setActiveId] = useState<number | string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigate = (page: PageType, id?: number | string) => {
    setCurrentPage(page);
    if (id !== undefined) {
      setActiveId(id);
    }
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-ag-lime selection:text-white font-sans">
      <Navigation onNavigate={handleNavigate as any} currentPage={currentPage as any} />
      
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <TrustBar />
              <Introduction />
              <ProblemSolution />
              <HubAndSolutions />
              <Portfolio onNavigate={handleNavigate} />
              <NewsSection onNavigate={handleNavigate} />
              <ImpactCTA />
            </motion.div>
          )}
          {currentPage === 'about' && (
            <motion.div key="about" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <AboutUsPage onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentPage === 'team' && (
            <motion.div key="team" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <TeamPage onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentPage === 'solutions' && (
            <motion.div key="solutions" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <SolutionsPage onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentPage === 'portfolio' && (
            <motion.div key="portfolio" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <PortfolioPage onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentPage === 'news' && (
            <motion.div key="news" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <NewsPage onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentPage === 'news-detail' && (
            <motion.div key="news-detail" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}>
              <NewsDetailPage articleId={activeId} onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentPage === 'project-detail' && (
            <motion.div key="project-detail" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}>
              <SingleProject projectId={activeId} onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentPage === 'contact' && (
            <motion.div key="contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <ContactPage onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentPage === 'terms' && (
            <motion.div key="terms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <TermsPage type='Terms & Conditions' onNavigate={handleNavigate as any} />
            </motion.div>
          )}
          {currentPage === 'privacy' && (
            <motion.div key="privacy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <PrivacyPage onNavigate={handleNavigate as any} />
            </motion.div>
          )}
          {currentPage === 'cookie-policy' && (
            <motion.div key="cookie-policy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CookiePolicyPage onNavigate={handleNavigate as any} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate as any} />
      
      {/* Global Elements */}
      <CookieConsent onNavigate={handleNavigate as any} />
      <SustainabilityAssistant />
    </div>
  );
};

export default App;
