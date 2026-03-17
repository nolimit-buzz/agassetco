// app/about/page.tsx
import AboutUsPage from '../../components/AboutUsPage';
import axios from 'axios';

async function getAboutData() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/about-page`);
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