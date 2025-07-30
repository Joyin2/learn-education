import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FAQ - Learn Education London",
  description: "Find answers to frequently asked questions about our education consulting services, application process, visa support, and how we can help you achieve your international education goals.",
  keywords: "FAQ, education consulting, study abroad questions, UK education, visa support, application process",
};

export default function FAQPage() {
  return (
    <div>
      <FAQSection />
      <Footer />
    </div>
  );
}
