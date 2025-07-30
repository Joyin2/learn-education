import ServicesHero from "@/components/ServicesHero";
import OurServicesSection from "@/components/OurServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services - Learn Education London",
  description: "Comprehensive education consulting services to guide you through every step of studying abroad. From university selection to visa assistance.",
};

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <OurServicesSection />
      <HowWeWorkSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
