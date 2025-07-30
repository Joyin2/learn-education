import type { Metadata } from 'next';
import NewZealandUniversitiesHero from '@/components/NewZealandUniversitiesHero';
import FeaturedNewZealandUniversities from '@/components/FeaturedNewZealandUniversities';
import PartnerNewZealandUniversities from '@/components/PartnerNewZealandUniversities';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'New Zealand Universities - Learn Education London',
  description: 'Discover top New Zealand universities with Learn Education. Expert guidance for studying in New Zealand with 8+ partner universities offering world-class education and stunning natural beauty.',
  keywords: 'New Zealand universities, study in New Zealand, NZ universities, New Zealand education, university applications New Zealand, study abroad New Zealand, Learn Education',
};

export default function NewZealandUniversitiesPage() {
  return (
    <main>
      <NewZealandUniversitiesHero />
      <FeaturedNewZealandUniversities />
      <PartnerNewZealandUniversities />
      <Footer />
    </main>
  );
}
