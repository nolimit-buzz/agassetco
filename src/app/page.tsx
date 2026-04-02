import type { Metadata } from 'next';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Introduction from '../components/Introduction';
import ProblemSolution from '../components/ProblemSolution';
import HubAndSolutions from '../components/HubAndSolutions';
import Portfolio from '../components/Portfolio';
import NewsSection from '../components/NewsSection';
import ImpactCTA from '../components/ImpactCTA';

export const metadata: Metadata = {
  title: 'AgAsset Co | Productive Use of Energy Financing',
  description: 'AgAsset Co bridges the gap between solar mini-grids and rural economic growth in Nigeria and Africa — turning energy access into income generation for rural SMEs.',
  keywords: ['agricultural asset financing', 'productive use of energy', 'solar mini-grid Nigeria', 'rural SME financing', 'clean energy Africa', 'hub and spoke energy model', 'AgAsset Co'],
  openGraph: {
    title: 'AgAsset Co | Productive Use of Energy Financing',
    description: 'AgAsset Co bridges the gap between solar mini-grids and rural economic growth in Nigeria and Africa — turning energy access into income generation for rural SMEs.',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Introduction />
      <ProblemSolution />
      <HubAndSolutions />
      <Portfolio />
      <NewsSection />
      <ImpactCTA />
    </>
  );
}