import type { Metadata } from 'next';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Introduction from '../components/Introduction';
import ProblemSolution from '../components/ProblemSolution';
import HubAndSolutions from '../components/HubAndSolutions';
import Portfolio from '../components/Portfolio';
import NewsSection from '../components/NewsSection';
import ImpactCTA from '../components/ImpactCTA';
import strapi from '@/lib/strapi';

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

async function getHomePageData() {
  try {
    const response = await strapi.get(`home-page?populate=*`);
    return response.data;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return null;
  }
}

export default async function HomePage() {
  const data = await getHomePageData();
  const sections: any[] = data?.data?.sections ?? [];

  const heroSection   = sections.find(s => s.__component === 'sections.hero');
  const trustSection  = sections.find(s => s.__component === 'sections.trust-bar');
  const introSections = sections.filter(s => s.__component === 'sections.introduction');

  return (
    <>
      <Hero data={heroSection} />
      <TrustBar data={trustSection} />
      <Introduction data={introSections[0]} />
      <ProblemSolution data={introSections[1]} />
      <HubAndSolutions data={introSections[2]} />
      <Portfolio />
      <NewsSection />
      <ImpactCTA />
    </>
  );
}
