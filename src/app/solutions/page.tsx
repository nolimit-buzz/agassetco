import type { Metadata } from 'next';
import strapi from '../../lib/strapi';
import SolutionsPage from '../../components/SolutionsPage';

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

async function getSolutionsData() {
  try {
    const response = await strapi.get(`solutions-page`);
    return response.data;
  } catch (error) {
    console.error('Error fetching solutions page data:', error);
    return null;
  }
}

export default async function SolutionsRoutePage() {
  const data = await getSolutionsData();
  return <SolutionsPage initialData={data} />;
}