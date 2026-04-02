import PrivacyPage from '@/components/PrivacyPage';
import strapi from '@/lib/strapi';

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
