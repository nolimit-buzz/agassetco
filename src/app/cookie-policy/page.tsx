import type { Metadata } from 'next';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import strapi from '@/lib/strapi';
import CookiePolicyPage from '@/components/CookiePolicyPage';
import TextPageSkeleton from '@/components/skeletons/TextPageSkeleton';

export const metadata: Metadata = {
  title: 'Cookie Policy | AgAsset Co',
  description: 'Learn how AgAsset Co uses cookies on our website and partner portal to improve your browsing experience, ensure account security, and analyse site performance.',
  keywords: ['cookie policy AgAsset Co', 'website cookies Nigeria', 'browser cookies', 'tracking policy', 'AgAsset Co data'],
  openGraph: {
    title: 'Cookie Policy | AgAsset Co',
    description: 'Learn how AgAsset Co uses cookies on our website and partner portal to improve your browsing experience and ensure account security.',
    url: '/cookie-policy',
  },
};

const getCookiePolicyData = unstable_cache(
  async () => {
    try {
      const response = await strapi.get('cookie-policy?populate=sections');
      return response.data;
    } catch (error) {
      console.error('Error fetching cookie policy page data:', error);
      return null;
    }
  },
  ['cookie-policy-page'],
  { revalidate: 3600 }
);

async function CookiePolicyContent() {
  const data = await getCookiePolicyData();
  return <CookiePolicyPage initialData={data} />;
}

export default function CookiePolicyRoutePage() {
  return (
    <Suspense fallback={<TextPageSkeleton />}>
      <CookiePolicyContent />
    </Suspense>
  );
}
