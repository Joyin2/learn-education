import IrelandUniversitiesHero from "@/components/IrelandUniversitiesHero";
import WhyChooseIreland from "@/components/WhyChooseIreland";
import FeaturedIrelandUniversities from "@/components/FeaturedIrelandUniversities/FeaturedIrelandUniversities";
import PartnerIrelandUniversities from "@/components/PartnerIrelandUniversities/PartnerIrelandUniversities";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ireland Universities - Learn Education London",
  description: "Discover top Ireland universities with Learn Education. Expert guidance for studying in Ireland with 25+ partner universities offering world-class education and rich cultural heritage.",
  keywords: "Ireland universities, study in Ireland, Irish universities, Ireland education, university applications Ireland, study abroad Ireland, Learn Education",
};

export default function IrelandUniversitiesPage() {
  return (
    <div>
      <IrelandUniversitiesHero />
      <WhyChooseIreland />
      <FeaturedIrelandUniversities />
      <PartnerIrelandUniversities />
      <Footer />
    </div>
  );
}
