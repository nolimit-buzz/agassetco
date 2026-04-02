import type { Metadata } from 'next';
import NewsDetailPage from '../../../components/NewsDetailPage';

export const metadata: Metadata = {
  title: 'Article | AgAsset Co News',
  description: 'Read the latest news and insights from AgAsset Co on productive use of energy, rural SME financing, and agricultural development across sub-Saharan Africa.',
  keywords: ['AgAsset Co article', 'energy news Africa', 'rural SME insights', 'agricultural financing article', 'clean energy Nigeria'],
  openGraph: {
    title: 'Article | AgAsset Co News',
    description: 'Read the latest news and insights from AgAsset Co on productive use of energy, rural SME financing, and agricultural development.',
    url: '/news',
  },
};

type Props = {
  params: {
    id: string;
  };
};

export default function NewsDetailRoutePage({ params }: Props) {
  return <NewsDetailPage articleId={params.id} />;
}