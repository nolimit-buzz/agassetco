// app/layout.tsx
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import SustainabilityAssistant from '../components/SustainabilityAssistant';
import NavigationProgress from '../components/NavigationProgress';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agassetco.com'),
  title: {
    default: 'AgAsset Co | Energy for Growth',
    template: '%s | AgAsset Co',
  },
  description:
    'Productive Use of Energy Financing. We bridge the gap between solar mini-grids and rural economic growth, turning energy access into income generation.',
  keywords: ['AgAsset Co', 'productive use of energy', 'rural SME financing', 'solar mini-grid', 'agricultural asset financing', 'clean energy Africa', 'Nigeria energy'],
  openGraph: {
    siteName: 'AgAsset Co',
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@agassetco',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} min-h-screen bg-white overflow-x-hidden selection:bg-ag-lime selection:text-white font-sans antialiased`}
      >
        <NavigationProgress />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <SustainabilityAssistant />
      </body>
    </html>
  );
}