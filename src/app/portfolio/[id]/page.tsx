// app/portfolio/[id]/page.tsx
import SingleProject from '../../../components/SingleProject';

type Props = {
  params: {
    id: string;
  };
};

export default function ProjectDetailPage({ params }: Props) {
  return <SingleProject projectId={params.id} />;
}