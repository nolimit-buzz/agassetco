import type { Metadata } from 'next';
import SingleProject from '../../../components/SingleProject';

export const metadata: Metadata = {
  title: 'Project Details | AgAsset Co Portfolio',
  description: 'Explore the details of this AgAsset Co energy asset deployment — technical specifications, impact metrics, and partnership outcomes.',
  keywords: ['AgAsset Co project', 'energy asset deployment', 'rural SME impact', 'productive use of energy project', 'agricultural energy Nigeria'],
  openGraph: {
    title: 'Project Details | AgAsset Co Portfolio',
    description: 'Explore the details of this AgAsset Co energy asset deployment — technical specifications, impact metrics, and partnership outcomes.',
    url: '/portfolio',
  },
};

type Props = {
  params: {
    id: string;
  };
};

export default function ProjectDetailPage({ params }: Props) {
  return <SingleProject projectId={params.id} />;
}