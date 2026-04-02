import type { Metadata } from 'next';
import PortfolioPage from '../../components/PortfolioPage';

export const metadata: Metadata = {
  title: 'Portfolio | AgAsset Co Deployed Projects',
  description: 'Browse AgAsset Co\'s portfolio of deployed energy assets and rural SME partnerships across Nigeria and sub-Saharan Africa, driving measurable agricultural impact.',
  keywords: ['AgAsset Co portfolio', 'energy projects Nigeria', 'rural SME projects Africa', 'agricultural energy assets', 'impact portfolio', 'PUE deployments'],
  openGraph: {
    title: 'Portfolio | AgAsset Co Deployed Projects',
    description: 'Browse AgAsset Co\'s portfolio of deployed energy assets and rural SME partnerships across Nigeria and sub-Saharan Africa.',
    url: '/portfolio',
  },
};

export default function PortfolioRoutePage() {
  return <PortfolioPage />;
}