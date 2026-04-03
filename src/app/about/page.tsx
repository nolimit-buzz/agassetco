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
    const response = await strapi.get(`about-page?populate=deep`);
    return response.data;
  } catch (error) {
    console.error('Error fetching about page data:', error);
    return null;
  }
}

export default async function AboutPage() {
  const data = await getAboutData();
  const sections: any[] = data?.data?.sections ?? [];

  const hero       = sections.find(s => s.__component === 'sections.about-hero');
  const structure  = sections.find(s => s.__component === 'sections.about-structure');
  const operations = sections.find(s => s.__component === 'sections.about-operations');
  const values     = sections.find(s => s.__component === 'sections.about-values');
  const model      = sections.find(s => s.__component === 'sections.about-model');
  const governance = sections.find(s => s.__component === 'sections.about-governance');
  const cta        = sections.find(s => s.__component === 'sections.about-cta');

  return (
    <AboutUsPage
      hero={hero}
      structure={structure}
      operations={operations}
      values={values}
      model={model}
      governance={governance}
      cta={cta}
    />
  );
}
