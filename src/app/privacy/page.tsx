import PrivacyPolicySection from "@/components/PrivacyPolicySection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Learn Education London",
  description: "Learn how Learn Education collects, uses, and protects your personal information. Our comprehensive privacy policy explains your rights and our data protection practices.",
  keywords: "privacy policy, data protection, GDPR, personal information, Learn Education, data security, cookies",
};

export default function PrivacyPage() {
  return (
    <div>
      <PrivacyPolicySection />
      <Footer />
    </div>
  );
}
