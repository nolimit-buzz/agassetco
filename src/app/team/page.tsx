// app/team/page.tsx
import axios from 'axios';
import TeamPage from '../../components/TeamPage';

async function getTeamData() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/team-page`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching team page data:', error);
    return null;
  }
}

export default async function TeamRoutePage() {
  const data = await getTeamData();
  return <TeamPage initialData={data} />;
}