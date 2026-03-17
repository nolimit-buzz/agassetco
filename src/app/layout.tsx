// app/layout.tsx
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SustainabilityAssistant from '../components/SustainabilityAssistant';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'AgAsset Co | Energy for Growth',
  description:
    'Productive Use of Energy Financing. We bridge the gap between solar mini-grids and rural economic growth, turning energy access into income generation.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} min-h-screen bg-white overflow-x-hidden selection:bg-ag-lime selection:text-white font-sans antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <SustainabilityAssistant />
      </body>
    </html>
  );
}