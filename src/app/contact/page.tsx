// app/contact/page.tsx
import strapi from '../../lib/strapi';
import ContactPage from '../../components/ContactPage';


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