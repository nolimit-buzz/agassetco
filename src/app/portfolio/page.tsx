import type { Metadata } from 'next';
import PortfolioPage from '../../components/PortfolioPage';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import strapi from '@/lib/strapi';
import TextPageSkeleton from '@/components/skeletons/TextPageSkeleton';

export const metadata: Metadata = {
  title: 'Portfolio | AgAsset Co Deployed Projects',
  description: 'Browse AgAsset Co\'s portfolio of deployed energy assets and rural SME partnerships across Nigeria and sub-Saharan Africa, driving measurable agricultural impact.',
  keywords: ['AgAsset Co portfolio', 'energy projects Nigeria', 'rural SME projects Africa', 'agricultural energy assets', 'impact portfolio', 'PUE deployments'],
  openGraph: {
    title: 'Portfolio | AgAsset Co Deployed Projects',
    description: 'Browse AgAsset Co\'s portfolio of deployed energy assets and rural SME partnerships across Nigeria and sub-Saharan Africa.',
    url: '/portfolio',
  },
};




const getPortfolioData = unstable_cache(
  async () => {
    try {
      const response = await strapi.get('portfolio-page?populate=*');
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio page data:', error);
      return null;
    }
  },
  ['portfolio-page'],
  { revalidate: 3600 }
);

async function PortfolioContent() {
  const data = await getPortfolioData();
  return <PortfolioPage initialData={data} />;
}

export default function PortfolioRoutePage() {
  return (
    <Suspense fallback={<TextPageSkeleton />}>
      <PortfolioContent />
    </Suspense>
  );
}