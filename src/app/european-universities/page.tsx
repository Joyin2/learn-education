import type { Metadata } from 'next';
import EuropeanUniversitiesHero from '@/components/EuropeanUniversitiesHero';
import WhyChooseEurope from '@/components/WhyChooseEurope';
import FeaturedEuropeanUniversities from '@/components/FeaturedEuropeanUniversities';
import PartnerEuropeanUniversities from '@/components/PartnerEuropeanUniversities';
import EuropeanUniversitiesCTA from '@/components/EuropeanUniversitiesCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'European Universities | 25+ Partner Universities Across Europe | Learn Education',
  description: 'Discover world-class education opportunities at 25+ partner universities across Europe. Get expert guidance for studying in European countries with Learn Education.',
  keywords: 'European universities, study in Europe, European education, university admission Europe, study abroad Europe',
  openGraph: {
    title: 'European Universities | 25+ Partner Universities Across Europe',
    description: 'Discover world-class education opportunities at 25+ partner universities across Europe. Get expert guidance for studying in European countries.',
    type: 'website',
  },
};

export default function EuropeanUniversitiesPage() {
  return (
    <main>
      <EuropeanUniversitiesHero />
      <WhyChooseEurope />
      <FeaturedEuropeanUniversities />
      <PartnerEuropeanUniversities />
      <EuropeanUniversitiesCTA />
      <Footer />
    </main>
  );
}
