import IrelandUniversitiesHero from "@/components/IrelandUniversitiesHero";
import WhyChooseIreland from "@/components/WhyChooseIreland";
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
      <Footer />
    </div>
  );
}
