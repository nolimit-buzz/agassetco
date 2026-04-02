import type { Metadata } from 'next';
import PrivacyPage from '@/components/PrivacyPage';
import strapi from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'Privacy Policy | AgAsset Co',
  description: 'Read AgAsset Co\'s Privacy Policy detailing how we collect, use, and protect your personal data in compliance with NDPR and international data protection standards.',
  keywords: ['privacy policy AgAsset Co', 'data protection Nigeria', 'NDPR compliance', 'GDPR Africa', 'personal data policy', 'AgAsset Co privacy'],
  openGraph: {
    title: 'Privacy Policy | AgAsset Co',
    description: 'Read AgAsset Co\'s Privacy Policy detailing how we collect, use, and protect your personal data in compliance with NDPR and international data protection standards.',
    url: '/privacy',
  },
};

async function getPrivacyData() {
  try {
    const response = await strapi.get('privacy-policy?populate=sections');
    return response.data;
  } catch (error) {
    console.error('Error fetching privacy policy page data:', error);
    return null;
  }
}

export default async function PrivacyRoutePage() {
  const data = await getPrivacyData();
  return <PrivacyPage initialData={data} />;
}
