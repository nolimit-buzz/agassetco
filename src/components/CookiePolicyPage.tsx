"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Section {
  id: number;
  section_id: string;
  num: string;
  title: string;
  heading: string;
  content: string;
}

interface CookiePolicyData {
  id: number;
  documentId: string;
  last_updated: string;
  version_label: string;
  hero_description: string;
  support_card_title: string | null;
  support_card_description: string | null;
  support_cta_text: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sections: Section[];
}

interface CookiePolicyPageProps {
  initialData?: { data: CookiePolicyData; meta: Record<string, unknown> };
}


const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ initialData }) => {
  const cmsData = initialData?.data;
  const sections = cmsData?.sections ?? [];

  const [activeSection, setActiveSection] = useState(sections[0]?.section_id ?? '');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      const el = document.getElementById(section.section_id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-ag-lime selection:text-white pb-32">

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 bg-white overflow-hidden px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Meta Header */}
          <motion.div variants={fadeInUp} className="flex flex-row items-center justify-between mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ag-green-950 bg-gray-50 px-4 py-2 rounded-full w-fit border border-gray-100">
              <Home className="w-2.5 h-2.5" />
              <Link href="/" className="hover:text-ag-lime transition-colors">Home</Link>
              <ChevronRight className="w-2.5 h-2.5 opacity-50" />
              <span className="opacity-50">Legal</span>
              <ChevronRight className="w-2.5 h-2.5 opacity-50" />
              <span className="text-ag-green-950">Cookie Policy</span>
            </div>

            <div className="text-sm font-bold uppercase tracking-[0.3em] text-ag-green-950">
              Tracking & Transparency — {new Date(cmsData?.last_updated ?? '').getFullYear()}
            </div>
          </motion.div>

          <div className="relative w-full">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 flex items-center justify-center z-0 pointer-events-none overflow-visible opacity-[0.03]">
              <div className="rotate-90 whitespace-nowrap text-ag-green-950 text-8xl md:text-9xl font-bold tracking-tighter select-none origin-center">
                COOKIES
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-5 pb-4">
                <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed mb-10 max-w-sm">
                  {cmsData?.hero_description}
                </motion.p>
                <motion.div variants={fadeInUp} className="flex gap-8">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">Last Updated</p>
                    <p className="text-lg md:text-2xl font-bold text-ag-green-950">{cmsData?.version_label}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">Scope</p>
                    <p className="text-lg md:text-2xl font-bold text-ag-green-950">Global Site & Portal</p>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-7 lg:text-right">
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-8xl lg:text-[7.5rem] font-bold text-ag-green-950 leading-[0.9] tracking-tighter"
                >
                  COOKIE <br className="hidden md:block" />
                  <span className="text-ag-lime">POLICY.</span>
                </motion.h1>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block sticky top-32 pb-20 self-start">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-gray-400 border-b border-gray-100 pb-8 mb-10">
              Table of Contents
            </div>

            <nav className="flex flex-col gap-0 relative">
              <div className="absolute left-[3px] top-0 bottom-0 w-px bg-gray-100" />
              {sections.map((section) => {
                const isActive = activeSection === section.section_id;
                return (
                  <a
                    key={section.section_id}
                    href={`#${section.section_id}`}
                    onClick={(e) => scrollToSection(e, section.section_id)}
                    className={`text-base font-bold uppercase tracking-widest transition-all duration-500 flex items-center gap-8 pl-1.5 py-6 relative group ${
                      isActive ? 'text-ag-green-950' : 'text-gray-300 hover:text-ag-green-950/70'
                    }`}
                  >
                    <div className={`absolute left-0 w-[7px] h-[7px] rounded-full z-10 transition-all duration-500 ${
                      isActive ? 'bg-ag-lime scale-100' : 'bg-transparent scale-0'
                    }`} />

                    <span className={`text-sm transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                      {section.num.padStart(2, '0')}
                    </span>
                    <span className="relative pb-1">
                      {section.title}
                      {isActive && (
                        <motion.div
                          layoutId="sidebarUnderlineCookie"
                          className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-ag-green-950"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </span>
                  </a>
                );
              })}
            </nav>

            {cmsData?.support_card_title && (
              <div className="mt-20 p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                <p className="text-sm font-bold text-ag-green-950 uppercase tracking-[0.2em] mb-4">
                  {cmsData.support_card_title}
                </p>
                {cmsData.support_card_description && (
                  <p className="text-base text-gray-500 font-light leading-relaxed mb-10">
                    {cmsData.support_card_description}
                  </p>
                )}
                {cmsData.support_cta_text && (
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-ag-lime uppercase tracking-[0.25em] hover:text-ag-green-950 transition-colors"
                  >
                    {cmsData.support_cta_text}
                  </Link>
                )}
              </div>
            )}
          </aside>

          {/* Scrollable Content */}
          <div className="lg:col-span-9">
            <div className="space-y-40">
              {sections.map((section) => (
                <article key={section.section_id} id={section.section_id} className="scroll-mt-32">
                  <div className="border-t border-ag-green-950 pt-8 mb-12">
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">
                      <div className="flex items-center gap-4">
                        <span className="text-ag-green-950">{section.num.padStart(2, '0')}</span>
                        <span className="w-8 h-px bg-gray-100"></span>
                        <span>{section.title.toUpperCase()}</span>
                      </div>
                    </div>
                    <SectionHeading text={section.heading || section.title} />
                  </div>
                  <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-6">
                    {section.content.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CookiePolicyPage;
