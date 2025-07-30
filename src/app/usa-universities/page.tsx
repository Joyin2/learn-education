import USAUniversitiesHero from "@/components/USAUniversitiesHero";
import WhyChooseUSA from "@/components/WhyChooseUSA";
import FeaturedUSAUniversities from "@/components/FeaturedUSAUniversities";
import PartnerUSAUniversities from "@/components/PartnerUSAUniversities";
import Footer from "@/components/Footer";

export const metadata = {
  title: "USA Universities - Learn Education London",
  description: "Discover top USA universities with Learn Education. Expert guidance for studying in the United States with 50+ partner universities offering world-class education across all states.",
  keywords: "USA universities, study in USA, American universities, US education, university applications USA, study abroad USA, Learn Education",
};

export default function USAUniversitiesPage() {
  return (
    <div>
      <USAUniversitiesHero />
      <WhyChooseUSA />
      <FeaturedUSAUniversities />
      <PartnerUSAUniversities />
      <Footer />
    </div>
  );
}
