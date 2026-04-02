// app/cookie-policy/page.tsx
import strapi from '@/lib/strapi';
import CookiePolicyPage from '../../components/CookiePolicyPage';

async function getCookiePolicyData() {
  try {
    const response = await strapi.get(`cookie-policy`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cookie policy page data:', error);
    return null;
  }
}

export default async function CookiePolicyRoutePage() {
  const data = await getCookiePolicyData();
  return <CookiePolicyPage initialData={data} />;
}