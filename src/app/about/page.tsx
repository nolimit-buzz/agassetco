import type { Metadata } from 'next';
import AboutUsPage from '../../components/AboutUsPage';
import strapi from '../../lib/strapi';

export const metadata: Metadata = {
  title: 'About AgAsset Co | Our Mission & Story',
  description: 'Learn about AgAsset Co\'s mission to provide bankable, clean energy asset financing for rural SMEs across sub-Saharan Africa. A subsidiary of Agronomie, Victoria Island, Lagos.',
  keywords: ['about AgAsset Co', 'Agronomie', 'agricultural finance Africa', 'energy access Nigeria', 'rural development mission', 'clean energy mission', 'Victoria Island Lagos'],
  openGraph: {
    title: 'About AgAsset Co | Our Mission & Story',
    description: 'Learn about AgAsset Co\'s mission to provide bankable, clean energy asset financing for rural SMEs across sub-Saharan Africa.',
    url: '/about',
  },
};

async function getAboutData() {
  try {
    const response = await strapi.get(`about-page`);
    return response.data;
  } catch (error) {
    console.error('Error fetching about page data:', error);
    return null;
  }
}

export default async function AboutPage() {
  const data = await getAboutData();

  return <AboutUsPage initialData={data} />;
}