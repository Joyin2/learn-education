import CanadaUniversitiesHero from "@/components/CanadaUniversitiesHero/CanadaUniversitiesHero";
import WhyChooseCanada from "@/components/WhyChooseCanada";
import FeaturedCanadaUniversities from "@/components/FeaturedCanadaUniversities/FeaturedCanadaUniversities";
import PartnerCanadaUniversities from "@/components/PartnerCanadaUniversities/PartnerCanadaUniversities";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Canada Universities - Learn Education London",
  description: "Discover top Canada universities with Learn Education. Expert guidance for studying in Canada with 50+ partner universities offering world-class education and pathways to permanent residency.",
  keywords: "Canada universities, study in Canada, Canadian universities, Canada education, university applications Canada, study abroad Canada, Learn Education",
};

export default function CanadaUniversitiesPage() {
  return (
    <div>
      <CanadaUniversitiesHero />
      <WhyChooseCanada />
      <FeaturedCanadaUniversities />
      <PartnerCanadaUniversities />
      <Footer />
    </div>
  );
}
