import type { Metadata } from 'next';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import TermsPage from '@/components/TermsPage';
import strapi from '@/lib/strapi';
import TextPageSkeleton from '@/components/skeletons/TextPageSkeleton';

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

const getTermsData = unstable_cache(
  async () => {
    try {
      const response = await strapi.get('terms-and-conditions?populate=sections');
      return response.data;
    } catch (error) {
      console.error('Error fetching terms page data:', error);
      return null;
    }
  },
  ['terms-page'],
  { revalidate: 3600 }
);

async function TermsContent() {
  const data = await getTermsData();
  return <TermsPage initialData={data} />;
}

export default function TermsRoutePage() {
  return (
    <Suspense fallback={<TextPageSkeleton />}>
      <TermsContent />
    </Suspense>
  );
}
