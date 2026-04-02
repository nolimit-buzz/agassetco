import type { Metadata } from 'next';
import NewsPage from '../../components/NewsPage';

export const metadata: Metadata = {
  title: 'News & Insights | AgAsset Co',
  description: 'Stay updated with the latest news, insights, and announcements from AgAsset Co on energy access, rural financing, and agricultural productivity across Africa.',
  keywords: ['AgAsset Co news', 'energy access Africa news', 'rural financing insights', 'agricultural news Nigeria', 'clean energy updates', 'PUE Africa'],
  openGraph: {
    title: 'News & Insights | AgAsset Co',
    description: 'Stay updated with the latest news, insights, and announcements from AgAsset Co on energy access, rural financing, and agricultural productivity.',
    url: '/news',
  },
};

export default function NewsRoutePage() {
  return <NewsPage />;
}