// app/team/page.tsx
import strapi from '../../lib/strapi';
import TeamPage from '../../components/TeamPage';

async function getTeamData() {
  try {
    const response = await strapi.get(`team-page`);
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