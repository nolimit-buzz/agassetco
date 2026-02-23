// app/news/[id]/page.tsx
import NewsDetailPage from '../../../components/NewsDetailPage';

type Props = {
  params: {
    id: string;
  };
};

export default function NewsDetailRoutePage({ params }: Props) {
  return <NewsDetailPage articleId={params.id} />;
}