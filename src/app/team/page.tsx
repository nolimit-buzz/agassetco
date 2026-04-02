import type { Metadata } from 'next';
import strapi from '../../lib/strapi';
import TeamPage from '../../components/TeamPage';

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

async function getTeamData() {
  try {
    const response = await strapi.get(`team-page`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching team page data:', error);
    return null;
  }
}

export default async function TeamRoutePage() {
  const data = await getTeamData();
  return <TeamPage initialData={data} />;
}