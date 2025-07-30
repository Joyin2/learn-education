import AboutHero from "@/components/AboutHero";
import OurApproach from "@/components/OurApproach";
import GlobalVision from "@/components/GlobalVision";
import OurPassion from "@/components/OurPassion";
import AboutEducation from "@/components/AboutEducation";
import WhoWeAre from "@/components/WhoWeAre";
import OurPurpose from "@/components/OurPurpose";
import WhatGuidesUs from "@/components/WhatGuidesUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us - Learn Education",
  description: "Learn about our commitment to your success. Experienced admissions consultants providing personalised advice and expert assistance.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <OurApproach />
      <GlobalVision />
      <OurPassion />
      <AboutEducation />
      <WhoWeAre />
      <OurPurpose />
      <WhatGuidesUs />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
