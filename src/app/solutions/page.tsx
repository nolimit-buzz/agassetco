// app/solutions/page.tsx
import strapi from '../../lib/strapi';
import SolutionsPage from '../../components/SolutionsPage';

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