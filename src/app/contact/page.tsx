// app/contact/page.tsx
import axios from 'axios';
import ContactPage from '../../components/ContactPage';


async function getContactData() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-page`);
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