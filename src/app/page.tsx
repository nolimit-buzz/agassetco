// app/page.tsx
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Introduction from '../components/Introduction';
import ProblemSolution from '../components/ProblemSolution';
import HubAndSolutions from '../components/HubAndSolutions';
import Portfolio from '../components/Portfolio';
import NewsSection from '../components/NewsSection';
import ImpactCTA from '../components/ImpactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Introduction />
      <ProblemSolution />
      <HubAndSolutions />
      <Portfolio />
      <NewsSection />
      <ImpactCTA />
    </>
  );
}