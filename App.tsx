
import React, { useState } from 'react';
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
import SolutionsPage from './components/SolutionsPage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import NewsPage from './components/NewsPage';
import NewsDetailPage from './components/NewsDetailPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'news-detail'>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<number | string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: 'home' | 'about' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'news-detail', articleId?: number | string) => {
    setCurrentPage(page);
    if (articleId !== undefined) {
      setSelectedArticleId(articleId);
    }
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-ag-lime selection:text-white">
      <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <TrustBar />
            <Introduction />
            <ProblemSolution />
            <HubAndSolutions />
            <Portfolio />
            <NewsSection onNavigate={handleNavigate} />
            <ImpactCTA />
          </>
        )}
        {currentPage === 'about' && <AboutUsPage />}
        {currentPage === 'solutions' && <SolutionsPage />}
        {currentPage === 'portfolio' && <PortfolioPage />}
        {currentPage === 'news' && <NewsPage onNavigate={handleNavigate} />}
        {currentPage === 'news-detail' && <NewsDetailPage articleId={selectedArticleId} onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'terms' && (
          <TermsPage 
            type='Terms & Conditions' 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPage 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
