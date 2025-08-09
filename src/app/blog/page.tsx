import BlogHero from "@/components/BlogHero";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog - Learn Education London",
  description: "Stay updated with the latest insights, tips, and news about studying abroad. Expert advice on university applications, visa processes, and student life.",
  keywords: "study abroad blog, education tips, university application advice, student visa guide, international education news, Learn Education blog",
};

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <BlogSection />
      <Footer />
    </div>
  );
}