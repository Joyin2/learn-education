import CareersHero from "@/components/CareersHero";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Careers - Learn Education London",
  description:
    "Explore current job openings at Learn Education. Join our team of education consultants helping students secure places at leading universities in the UK, USA, Canada, Ireland and Europe.",
  keywords:
    "Learn Education careers, education consultancy jobs, student counsellor jobs London, study abroad jobs, admissions officer vacancy",
};

export default function CareersPage() {
  return (
    <div>
      <CareersHero />
      <CareersSection />
      <Footer />
    </div>
  );
}
