import type { Metadata } from 'next';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import strapi from '../../lib/strapi';
import ContactPage from '../../components/ContactPage';
import ContactSkeleton from '@/components/skeletons/ContactSkeleton';

export const metadata: Metadata = {
  title: 'Contact AgAsset Co | Partner With Us',
  description: 'Get in touch with AgAsset Co for partnership enquiries, investor relations, or to learn more about our energy asset financing solutions for rural SMEs across Africa.',
  keywords: ['contact AgAsset Co', 'partnership enquiries', 'investor relations Nigeria', 'energy financing contact', 'AgAsset Co Lagos', 'rural SME partnership'],
  openGraph: {
    title: 'Contact AgAsset Co | Partner With Us',
    description: 'Get in touch with AgAsset Co for partnership enquiries, investor relations, or to learn more about our energy asset financing solutions.',
    url: '/contact',
  },
};

const getContactData = unstable_cache(
  async () => {
    try {
      const response = await strapi.get(`contact-page`);
      return response.data;
    } catch (error) {
      console.error('Error fetching contact page data:', error);
      return null;
    }
  },
  ['contact-page'],
  { revalidate: 3600 }
);

async function ContactContent() {
  const data = await getContactData();
  return <ContactPage initialData={data} />;
}

export default function ContactRoutePage() {
  return (
    <Suspense fallback={<ContactSkeleton />}>
      <ContactContent />
    </Suspense>
  );
}
