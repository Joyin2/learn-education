import type { Metadata } from 'next';
import AustralianUniversitiesHero from '@/components/AustralianUniversitiesHero';
import FeaturedAustralianUniversities from '@/components/FeaturedAustralianUniversities';
import PartnerAustralianUniversities from '@/components/PartnerAustralianUniversities';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Australian Universities | 20+ Partner Universities Across Australia | Learn Education',
  description: 'Discover world-class education opportunities at 20+ partner universities across Australia. Get expert guidance for studying in Australia with Learn Education.',
  keywords: 'Australian universities, study in Australia, Australian education, university admission Australia, study abroad Australia',
  openGraph: {
    title: 'Australian Universities | 20+ Partner Universities Across Australia',
    description: 'Discover world-class education opportunities at 20+ partner universities across Australia. Get expert guidance for studying in Australia.',
    type: 'website',
  },
};

export default function AustralianUniversitiesPage() {
  return (
    <main>
      <AustralianUniversitiesHero />
      <FeaturedAustralianUniversities />
      <PartnerAustralianUniversities />
      <Footer />
    </main>
  );
}
