import type { Metadata } from 'next';
import strapi from '../../lib/strapi';
import ContactPage from '../../components/ContactPage';

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


async function getContactData() {
  try {
    const response = await strapi.get(`contact-page`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contact page data:', error);
    return null;
  }
}


export default async function ContactRoutePage() {
  const data = await getContactData();
  return <ContactPage initialData={data} />;
}