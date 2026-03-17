// app/solutions/page.tsx
import axios from 'axios';
import SolutionsPage from '../../components/SolutionsPage';

async function getSolutionsData() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/solutions-page`);
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