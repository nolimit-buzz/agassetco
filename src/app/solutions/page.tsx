import type { Metadata } from 'next';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import strapi from '../../lib/strapi';
import SolutionsPage from '../../components/SolutionsPage';
import SolutionsSkeleton from '@/components/skeletons/SolutionsSkeleton';

export const metadata: Metadata = {
  title: 'Our Solutions | AgAsset Co Energy Financing',
  description: 'Explore AgAsset Co\'s Hub-and-Spoke energy solutions — solar-powered milling, cold chain, and irrigation assets enabling rural agricultural productivity across Africa.',
  keywords: ['energy solutions Nigeria', 'hub and spoke model', 'solar milling Africa', 'cold chain financing', 'irrigation Nigeria', 'productive use of energy', 'agricultural equipment financing'],
  openGraph: {
    title: 'Our Solutions | AgAsset Co Energy Financing',
    description: 'Explore AgAsset Co\'s Hub-and-Spoke energy solutions — solar-powered milling, cold chain, and irrigation assets enabling rural agricultural productivity.',
    url: '/solutions',
  },
};

const getSolutionsData = unstable_cache(
  async () => {
    try {
      const response = await strapi.get(`solutions-page?populate=*`);
      return response.data;
    } catch (error) {
      console.error('Error fetching solutions page data:', error);
      return null;
    }
  },
  ['solutions-page'],
  { revalidate: 3600 }
);

async function SolutionsContent() {
  const data = await getSolutionsData();
  return <SolutionsPage initialData={data} />;
}

export default function SolutionsRoutePage() {
  return (
    <Suspense fallback={<SolutionsSkeleton />}>
      <SolutionsContent />
    </Suspense>
  );
}
