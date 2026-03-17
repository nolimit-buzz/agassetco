// app/about/page.tsx
import AboutUsPage from '../../components/AboutUsPage';
import strapi from '../../lib/strapi';

async function getAboutData() {
  try {
    const response = await strapi.get(`about-page`);
    return response.data;
  } catch (error) {
    console.error('Error fetching about page data:', error);
    return null;
  }
}

export default async function AboutPage() {
  const data = await getAboutData();

  return <AboutUsPage initialData={data} />;
}