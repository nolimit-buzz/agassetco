import type { Metadata } from 'next';
import TermsPage from '@/components/TermsPage';
import strapi from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'Terms & Conditions | AgAsset Co',
  description: 'Review the Terms and Conditions governing your use of AgAsset Co\'s website and services, including data usage, asset agreements, and governing law of Nigeria.',
  keywords: ['terms and conditions AgAsset Co', 'service agreement Nigeria', 'legal terms Africa', 'website terms of use', 'AgAsset Co legal'],
  openGraph: {
    title: 'Terms & Conditions | AgAsset Co',
    description: 'Review the Terms and Conditions governing your use of AgAsset Co\'s website and services, including data usage, asset agreements, and governing law.',
    url: '/terms',
  },
};



async function getTermsData() {
  try {
    const response = await strapi.get('terms-and-conditions?populate=sections');
    return response.data;
  } catch (error) {
    console.error('Error fetching privacy policy page data:', error);
    return null;
  }
}

export default async function TermsRoutePage() {
  const data = await getTermsData();
  return <TermsPage initialData={data} />;

}