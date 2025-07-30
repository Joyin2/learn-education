import UKUniversitiesHero from "@/components/UKUniversitiesHero";
import WhyChooseUK from "@/components/WhyChooseUK";
import FeaturedUniversities from "@/components/FeaturedUniversities";
import PartnerUniversities from "@/components/PartnerUniversities";
import Footer from "@/components/Footer";

export const metadata = {
  title: "UK Universities - Learn Education London",
  description: "Discover top UK universities with Learn Education. Expert guidance for studying in the UK with 40+ partner universities offering world-class education across England, Scotland, Wales, and Northern Ireland.",
  keywords: "UK universities, study in UK, British universities, UK education, university applications UK, study abroad UK, Learn Education",
};

export default function UKUniversitiesPage() {
  return (
    <div>
      <UKUniversitiesHero />
      <WhyChooseUK />
      <FeaturedUniversities />
      <PartnerUniversities />
      <Footer />
    </div>
  );
}
