import type { Metadata } from 'next';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import strapi from '../../lib/strapi';
import TeamPage from '../../components/TeamPage';
import TeamSkeleton from '@/components/skeletons/TeamSkeleton';

export const metadata: Metadata = {
  title: 'Our Team | AgAsset Co',
  description: 'Meet the AgAsset Co team — experienced professionals in finance, energy, agriculture, and technology driving sustainable rural development across sub-Saharan Africa.',
  keywords: ['AgAsset Co team', 'leadership team Nigeria', 'energy finance experts Africa', 'agricultural development team', 'Agronomie leadership', 'rural development professionals'],
  openGraph: {
    title: 'Our Team | AgAsset Co',
    description: 'Meet the AgAsset Co team — experienced professionals in finance, energy, agriculture, and technology driving sustainable rural development.',
    url: '/team',
  },
};

const getTeamData = unstable_cache(
  async () => {
    try {
      const response = await strapi.get(`team-page`);
      return response.data;
    } catch (error) {
      console.error('Error fetching team page data:', error);
      return null;
    }
  },
  ['team-page'],
  { revalidate: 3600 }
);

async function TeamContent() {
  const data = await getTeamData();
  return <TeamPage initialData={data} />;
}

export default function TeamRoutePage() {
  return (
    <Suspense fallback={<TeamSkeleton />}>
      <TeamContent />
    </Suspense>
  );
}
