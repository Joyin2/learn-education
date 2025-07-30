import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GlobalEducationSection from "@/components/GlobalEducationSection";
import CompareChooseSection from "@/components/CompareChooseSection";
import ExpertGuidanceSection from "@/components/ExpertGuidanceSection";
import ProcessSection from "@/components/ProcessSection";
import StudentSuccessSection from "@/components/StudentSuccessSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <GlobalEducationSection />
      <CompareChooseSection />
      <ExpertGuidanceSection />
      <ProcessSection />
      <StudentSuccessSection />
      <Footer />
    </div>
  );
}
