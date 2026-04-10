"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavigationProgress() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [complete, setComplete] = useState(false);
  const navigatingRef = useRef(false);

  // When pathname changes, navigation is done — complete the bar
  useEffect(() => {
    if (navigatingRef.current) {
      setComplete(true);
      const timer = setTimeout(() => {
        setIsNavigating(false);
        setComplete(false);
        navigatingRef.current = false;
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Detect internal link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Walk up the DOM to find the nearest <a>
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }
      if (!target) return;

      const anchor = target as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      if (!href) return;

      // Skip external, new-tab, hash-only, mailto, tel
      if (anchor.target === '_blank') return;
      if (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) return;
      if (href.startsWith('#')) return;

      // Skip same-page navigation
      const hrefPath = href.split('?')[0].split('#')[0];
      const currentPath = window.location.pathname;
      if (hrefPath === currentPath) return;

      // Internal navigation — start the bar
      navigatingRef.current = true;
      setComplete(false);
      setIsNavigating(true);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          key="nav-progress"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.05 } }}
          className="fixed top-0 left-0 w-full pointer-events-none"
          style={{ height: '3px', zIndex: 1000 }}
        >
          {/* Bar */}
          <motion.div
            className="h-full origin-left"
            style={{ backgroundColor: 'var(--color-ag-lime)' }}
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: complete ? 1 : 0.7,
              transition: complete
                ? { duration: 0.22, ease: 'easeOut' }
                : { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
            }}
          />
          {/* Shimmer on leading edge (only while loading) */}
          {!complete && (
            <motion.div
              className="absolute top-0 right-[28%] h-full w-20"
              style={{
                background:
                  'linear-gradient(to right, transparent, rgba(255,255,255,0.45), transparent)',
              }}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
