import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { getBlogPost, getRelatedBlogPosts, BlogPost } from '@/lib/firestore';
import styles from './BlogPost.module.css';

// Static blog posts removed - now using Firestore
// BlogPost interface imported from firestore

// Legacy static data for reference (can be removed after migration)
const legacyBlogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Studying Abroad: Everything You Need to Know",
    excerpt: "Discover the complete roadmap to studying abroad, from choosing the right university to securing scholarships and adapting to a new culture.",
    content: `
      <h2>Introduction</h2>
      <p>Studying abroad is one of the most transformative experiences a student can have. It opens doors to new cultures, perspectives, and opportunities that can shape your future in ways you never imagined. This comprehensive guide will walk you through everything you need to know about studying abroad, from the initial planning stages to making the most of your international education experience.</p>
      
      <h2>Why Study Abroad?</h2>
      <p>The benefits of studying abroad extend far beyond academic achievement. Here are some compelling reasons to consider international education:</p>
      <ul>
        <li><strong>Global Perspective:</strong> Gain a broader understanding of the world and different cultures</li>
        <li><strong>Language Skills:</strong> Improve or learn new languages through immersion</li>
        <li><strong>Career Opportunities:</strong> Enhance your resume with international experience</li>
        <li><strong>Personal Growth:</strong> Develop independence, confidence, and adaptability</li>
        <li><strong>Networking:</strong> Build international connections that can benefit your future career</li>
      </ul>
      
      <h2>Choosing the Right Destination</h2>
      <p>Selecting the perfect study abroad destination is crucial for your success. Consider these factors:</p>
      <ul>
        <li>Academic reputation and program quality</li>
        <li>Language of instruction</li>
        <li>Cost of living and tuition fees</li>
        <li>Cultural compatibility</li>
        <li>Climate and lifestyle preferences</li>
        <li>Visa requirements and immigration policies</li>
      </ul>
      
      <h2>Popular Study Destinations</h2>
      <h3>United States</h3>
      <p>Home to many of the world's top universities, the US offers diverse programs and research opportunities. Popular for STEM fields, business, and liberal arts.</p>
      
      <h3>United Kingdom</h3>
      <p>Known for its prestigious universities and shorter degree programs. Excellent for humanities, business, and research.</p>
      
      <h3>Canada</h3>
      <p>Offers high-quality education with more affordable tuition and excellent post-graduation work opportunities.</p>
      
      <h3>Australia</h3>
      <p>Popular for its relaxed lifestyle, excellent universities, and strong programs in engineering and business.</p>
      
      <h2>Application Process</h2>
      <p>The application process varies by country and institution, but generally includes:</p>
      <ol>
        <li>Research and shortlist universities</li>
        <li>Check admission requirements</li>
        <li>Prepare required documents</li>
        <li>Take standardized tests (SAT, GRE, GMAT, etc.)</li>
        <li>Write compelling personal statements</li>
        <li>Submit applications before deadlines</li>
        <li>Apply for scholarships and financial aid</li>
      </ol>
      
      <h2>Financial Planning</h2>
      <p>Studying abroad can be expensive, but proper planning can make it affordable:</p>
      <ul>
        <li>Research scholarship opportunities</li>
        <li>Consider education loans</li>
        <li>Look into part-time work opportunities</li>
        <li>Budget for living expenses</li>
        <li>Explore exchange programs</li>
      </ul>
      
      <h2>Visa and Immigration</h2>
      <p>Understanding visa requirements is crucial for your study abroad journey. Each country has specific requirements, but common documents include:</p>
      <ul>
        <li>Valid passport</li>
        <li>Letter of acceptance from university</li>
        <li>Financial proof</li>
        <li>Health insurance</li>
        <li>Academic transcripts</li>
        <li>English proficiency test scores</li>
      </ul>
      
      <h2>Preparing for Departure</h2>
      <p>Once you've secured admission and visa, it's time to prepare for your journey:</p>
      <ul>
        <li>Book flights and accommodation</li>
        <li>Get health insurance and medical checkups</li>
        <li>Open a bank account</li>
        <li>Research local customs and culture</li>
        <li>Pack appropriately for the climate</li>
        <li>Stay connected with family and friends</li>
      </ul>
      
      <h2>Making the Most of Your Experience</h2>
      <p>To maximize your study abroad experience:</p>
      <ul>
        <li>Be open to new experiences</li>
        <li>Join student organizations and clubs</li>
        <li>Travel and explore your host country</li>
        <li>Build relationships with local students</li>
        <li>Maintain good academic performance</li>
        <li>Document your journey</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Studying abroad is an investment in your future that pays dividends for life. While the process may seem overwhelming, proper planning and preparation can make your dream of international education a reality. Remember, every challenge you face abroad will contribute to your personal and professional growth.</p>
      
      <p>Start your journey today by researching programs, connecting with education consultants, and taking the first step toward your international education adventure.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Study Abroad",
    readTime: "8 min read",
    image: "/api/placeholder/1200/600",
    tags: ["Study Abroad", "Universities", "Scholarships"],
    featured: true
  },
  {
    id: 2,
    title: "Top 10 Universities in Canada for International Students",
    excerpt: "Explore the best Canadian universities that offer world-class education, diverse programs, and excellent support for international students.",
    content: `
      <h2>Introduction</h2>
      <p>Canada has become one of the most popular destinations for international students, and for good reason. With its high-quality education system, multicultural environment, and excellent post-graduation opportunities, Canada offers an ideal setting for international education.</p>
      
      <h2>Why Choose Canada for Higher Education?</h2>
      <ul>
        <li>World-renowned education system</li>
        <li>Affordable tuition fees compared to US and UK</li>
        <li>Multicultural and welcoming society</li>
        <li>Excellent post-graduation work opportunities</li>
        <li>Pathway to permanent residency</li>
        <li>Safe and peaceful environment</li>
      </ul>
      
      <h2>Top 10 Universities in Canada</h2>
      
      <h3>1. University of Toronto</h3>
      <p>One of the world's top research universities, offering over 700 undergraduate programs and 200+ graduate programs.</p>
      
      <h3>2. University of British Columbia (UBC)</h3>
      <p>Known for its beautiful campus and strong programs in engineering, business, and medicine.</p>
      
      <h3>3. McGill University</h3>
      <p>A prestigious institution with a strong international reputation, particularly in medicine and law.</p>
      
      <h3>4. University of Alberta</h3>
      <p>Excellent for engineering, business, and research programs with affordable tuition fees.</p>
      
      <h3>5. McMaster University</h3>
      <p>Renowned for its innovative teaching methods and strong programs in health sciences and engineering.</p>
      
      <h3>6. University of Waterloo</h3>
      <p>Famous for its co-op programs and excellence in computer science and engineering.</p>
      
      <h3>7. Western University</h3>
      <p>Known for its business school and strong alumni network.</p>
      
      <h3>8. Queen's University</h3>
      <p>Prestigious institution with excellent programs in business, law, and medicine.</p>
      
      <h3>9. University of Calgary</h3>
      <p>Strong in engineering, business, and energy-related programs.</p>
      
      <h3>10. Simon Fraser University</h3>
      <p>Known for its innovative programs and beautiful mountain campus.</p>
      
      <h2>Application Requirements</h2>
      <p>Most Canadian universities require:</p>
      <ul>
        <li>High school transcripts</li>
        <li>English proficiency test scores (IELTS/TOEFL)</li>
        <li>Statement of purpose</li>
        <li>Letters of recommendation</li>
        <li>Standardized test scores (if required)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Canada offers excellent opportunities for international students with its world-class universities, affordable education, and welcoming environment. Start your application process early and choose the university that best fits your academic and career goals.</p>
    `,
    author: "Michael Chen",
    date: "2024-01-12",
    category: "Universities",
    readTime: "6 min read",
    image: "/api/placeholder/1200/600",
    tags: ["Canada", "Universities", "Rankings"]
  },
  {
    id: 3,
    title: "Scholarship Opportunities: How to Fund Your International Education",
    excerpt: "Learn about various scholarship programs, grants, and financial aid options available for international students pursuing higher education.",
    content: `
      <h2>Introduction</h2>
      <p>Financing your international education can be challenging, but numerous scholarship opportunities can help make your dreams affordable. This guide explores various funding options available to international students.</p>
      
      <h2>Types of Scholarships</h2>
      
      <h3>Merit-Based Scholarships</h3>
      <p>Awarded based on academic excellence, leadership qualities, or special talents.</p>
      
      <h3>Need-Based Scholarships</h3>
      <p>Provided to students who demonstrate financial need.</p>
      
      <h3>Country-Specific Scholarships</h3>
      <p>Offered by governments to promote international education exchange.</p>
      
      <h3>University Scholarships</h3>
      <p>Institutional scholarships offered directly by universities.</p>
      
      <h2>Major Scholarship Programs</h2>
      
      <h3>Fulbright Program (USA)</h3>
      <p>Prestigious scholarship for graduate study, research, and teaching in the United States.</p>
      
      <h3>Chevening Scholarships (UK)</h3>
      <p>UK government scholarships for outstanding students with leadership potential.</p>
      
      <h3>Australia Awards</h3>
      <p>Australian government scholarships for students from developing countries.</p>
      
      <h3>DAAD Scholarships (Germany)</h3>
      <p>German Academic Exchange Service scholarships for international students.</p>
      
      <h2>Application Tips</h2>
      <ul>
        <li>Start early and research thoroughly</li>
        <li>Tailor applications to specific scholarships</li>
        <li>Highlight your unique qualities and achievements</li>
        <li>Write compelling personal statements</li>
        <li>Get strong letters of recommendation</li>
        <li>Meet all deadlines</li>
      </ul>
      
      <h2>Alternative Funding Options</h2>
      <ul>
        <li>Education loans</li>
        <li>Part-time work opportunities</li>
        <li>Research assistantships</li>
        <li>Teaching assistantships</li>
        <li>Crowdfunding</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>With proper research and preparation, you can find funding opportunities to support your international education. Don't let financial constraints stop you from pursuing your dreams.</p>
    `,
    author: "Emily Rodriguez",
    date: "2024-01-10",
    category: "Scholarships",
    readTime: "7 min read",
    image: "/api/placeholder/1200/600",
    tags: ["Scholarships", "Financial Aid", "Funding"]
  },
  {
    id: 4,
    title: "Student Visa Guide: Navigating the Application Process",
    excerpt: "A comprehensive guide to understanding student visa requirements, application procedures, and tips for a successful visa interview.",
    content: `
      <h2>Introduction</h2>
      <p>Obtaining a student visa is a crucial step in your study abroad journey. This comprehensive guide will help you navigate the complex visa application process and increase your chances of approval.</p>
      
      <h2>Understanding Student Visas</h2>
      <p>A student visa is a legal document that allows you to enter and stay in a foreign country for educational purposes. Each country has specific requirements and procedures.</p>
      
      <h2>Common Visa Requirements</h2>
      <ul>
        <li>Valid passport</li>
        <li>Letter of acceptance from recognized institution</li>
        <li>Proof of financial support</li>
        <li>Academic transcripts</li>
        <li>English proficiency test scores</li>
        <li>Health insurance</li>
        <li>Medical examination</li>
        <li>Statement of purpose</li>
      </ul>
      
      <h2>Country-Specific Requirements</h2>
      
      <h3>United States (F-1 Visa)</h3>
      <ul>
        <li>I-20 form from university</li>
        <li>SEVIS fee payment</li>
        <li>DS-160 form</li>
        <li>Visa interview</li>
      </ul>
      
      <h3>United Kingdom (Student Visa)</h3>
      <ul>
        <li>CAS (Confirmation of Acceptance for Studies)</li>
        <li>Tuberculosis test (if required)</li>
        <li>Academic Technology Approval Scheme (if applicable)</li>
      </ul>
      
      <h3>Canada (Study Permit)</h3>
      <ul>
        <li>Letter of acceptance</li>
        <li>Provincial Attestation Letter (PAL)</li>
        <li>Biometrics</li>
        <li>Medical exam (if required)</li>
      </ul>
      
      <h2>Application Process</h2>
      <ol>
        <li>Gather required documents</li>
        <li>Complete application form</li>
        <li>Pay application fees</li>
        <li>Schedule biometrics appointment</li>
        <li>Attend visa interview (if required)</li>
        <li>Wait for processing</li>
        <li>Collect passport with visa</li>
      </ol>
      
      <h2>Visa Interview Tips</h2>
      <ul>
        <li>Be honest and confident</li>
        <li>Prepare for common questions</li>
        <li>Bring all required documents</li>
        <li>Dress professionally</li>
        <li>Demonstrate ties to home country</li>
        <li>Show genuine intent to study</li>
      </ul>
      
      <h2>Common Reasons for Visa Rejection</h2>
      <ul>
        <li>Insufficient financial proof</li>
        <li>Incomplete documentation</li>
        <li>Lack of genuine intent</li>
        <li>Poor academic background</li>
        <li>Immigration history issues</li>
      </ul>
      
      <h2>After Visa Approval</h2>
      <ul>
        <li>Check visa validity dates</li>
        <li>Understand entry requirements</li>
        <li>Plan your travel</li>
        <li>Prepare for arrival</li>
        <li>Know your rights and responsibilities</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While the visa application process can be complex, proper preparation and understanding of requirements will significantly improve your chances of success. Start early, be thorough, and seek professional help if needed.</p>
    `,
    author: "David Kim",
    date: "2024-01-08",
    category: "Visa Guide",
    readTime: "5 min read",
    image: "/api/placeholder/1200/600",
    tags: ["Visa", "Immigration", "Documentation"]
  },
  {
    id: 5,
    title: "Life as an International Student: Tips for Success",
    excerpt: "Practical advice on adapting to student life abroad, making friends, managing finances, and excelling in your academic journey.",
    content: `
      <h2>Introduction</h2>
      <p>Starting life as an international student can be both exciting and challenging. This guide provides practical tips to help you navigate your new environment and make the most of your study abroad experience.</p>
      
      <h2>Before You Arrive</h2>
      <ul>
        <li>Research your destination thoroughly</li>
        <li>Connect with other international students online</li>
        <li>Learn basic phrases in the local language</li>
        <li>Understand cultural norms and expectations</li>
        <li>Arrange temporary accommodation</li>
      </ul>
      
      <h2>First Week Essentials</h2>
      <ul>
        <li>Attend orientation programs</li>
        <li>Open a local bank account</li>
        <li>Get a local phone number</li>
        <li>Register with local authorities (if required)</li>
        <li>Explore your campus and neighborhood</li>
        <li>Join student organizations</li>
      </ul>
      
      <h2>Academic Success</h2>
      
      <h3>Understanding the Education System</h3>
      <p>Each country has different academic expectations and teaching styles. Take time to understand:</p>
      <ul>
        <li>Grading systems</li>
        <li>Assignment formats</li>
        <li>Participation expectations</li>
        <li>Academic integrity policies</li>
      </ul>
      
      <h3>Study Tips</h3>
      <ul>
        <li>Attend all classes and lectures</li>
        <li>Participate actively in discussions</li>
        <li>Form study groups with classmates</li>
        <li>Use university resources (library, tutoring)</li>
        <li>Manage your time effectively</li>
      </ul>
      
      <h2>Social Integration</h2>
      
      <h3>Making Friends</h3>
      <ul>
        <li>Be open and approachable</li>
        <li>Join clubs and societies</li>
        <li>Attend social events</li>
        <li>Volunteer in your community</li>
        <li>Practice the local language</li>
      </ul>
      
      <h3>Cultural Adaptation</h3>
      <ul>
        <li>Be patient with yourself</li>
        <li>Embrace differences</li>
        <li>Ask questions when unsure</li>
        <li>Maintain your cultural identity</li>
        <li>Share your culture with others</li>
      </ul>
      
      <h2>Financial Management</h2>
      <ul>
        <li>Create a realistic budget</li>
        <li>Track your expenses</li>
        <li>Look for student discounts</li>
        <li>Consider part-time work (if allowed)</li>
        <li>Cook meals at home</li>
        <li>Use public transportation</li>
      </ul>
      
      <h2>Health and Wellbeing</h2>
      <ul>
        <li>Understand your health insurance</li>
        <li>Register with a local doctor</li>
        <li>Maintain a healthy lifestyle</li>
        <li>Exercise regularly</li>
        <li>Manage stress effectively</li>
        <li>Seek help when needed</li>
      </ul>
      
      <h2>Dealing with Homesickness</h2>
      <ul>
        <li>Stay connected with family and friends</li>
        <li>Create new routines</li>
        <li>Explore your new city</li>
        <li>Focus on your goals</li>
        <li>Talk to counselors if needed</li>
      </ul>
      
      <h2>Building Your Future</h2>
      <ul>
        <li>Network with professionals</li>
        <li>Gain relevant work experience</li>
        <li>Develop new skills</li>
        <li>Maintain good grades</li>
        <li>Plan for post-graduation</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Success as an international student requires adaptation, perseverance, and an open mind. Embrace the challenges as opportunities for growth, and remember that this experience will shape you in ways you never imagined.</p>
    `,
    author: "Lisa Wang",
    date: "2024-01-05",
    category: "Student Life",
    readTime: "6 min read",
    image: "/api/placeholder/1200/600",
    tags: ["Student Life", "Tips", "Success"]
  },
  {
    id: 6,
    title: "IELTS vs TOEFL: Which English Test Should You Take?",
    excerpt: "Compare IELTS and TOEFL exams to determine which English proficiency test is best suited for your study abroad goals.",
    content: `
      <h2>Introduction</h2>
      <p>English proficiency tests are a crucial requirement for international students. IELTS and TOEFL are the two most widely accepted tests. This guide will help you choose the right test for your needs.</p>
      
      <h2>Overview of IELTS</h2>
      <p>The International English Language Testing System (IELTS) is jointly managed by the British Council, IDP, and Cambridge Assessment English.</p>
      
      <h3>IELTS Test Format</h3>
      <ul>
        <li><strong>Listening:</strong> 30 minutes (4 sections)</li>
        <li><strong>Reading:</strong> 60 minutes (3 sections)</li>
        <li><strong>Writing:</strong> 60 minutes (2 tasks)</li>
        <li><strong>Speaking:</strong> 11-14 minutes (face-to-face interview)</li>
      </ul>
      
      <h2>Overview of TOEFL</h2>
      <p>The Test of English as a Foreign Language (TOEFL) is administered by Educational Testing Service (ETS).</p>
      
      <h3>TOEFL iBT Test Format</h3>
      <ul>
        <li><strong>Reading:</strong> 54-72 minutes (3-4 passages)</li>
        <li><strong>Listening:</strong> 41-57 minutes (lectures and conversations)</li>
        <li><strong>Speaking:</strong> 17 minutes (4 tasks)</li>
        <li><strong>Writing:</strong> 50 minutes (2 tasks)</li>
      </ul>
      
      <h2>Key Differences</h2>
      
      <h3>Test Format</h3>
      <ul>
        <li><strong>IELTS:</strong> Paper-based or computer-based options</li>
        <li><strong>TOEFL:</strong> Primarily internet-based (iBT)</li>
      </ul>
      
      <h3>Speaking Section</h3>
      <ul>
        <li><strong>IELTS:</strong> Face-to-face interview with examiner</li>
        <li><strong>TOEFL:</strong> Computer-based recording</li>
      </ul>
      
      <h3>Accent</h3>
      <ul>
        <li><strong>IELTS:</strong> British, Australian, American accents</li>
        <li><strong>TOEFL:</strong> Primarily American accent</li>
      </ul>
      
      <h3>Scoring</h3>
      <ul>
        <li><strong>IELTS:</strong> Band scores 0-9 (half bands possible)</li>
        <li><strong>TOEFL:</strong> Scale of 0-120 points</li>
      </ul>
      
      <h2>Which Test Should You Choose?</h2>
      
      <h3>Choose IELTS if:</h3>
      <ul>
        <li>You prefer face-to-face speaking tests</li>
        <li>You're applying to UK, Australia, or Canada</li>
        <li>You're comfortable with various English accents</li>
        <li>You prefer shorter test duration</li>
      </ul>
      
      <h3>Choose TOEFL if:</h3>
      <ul>
        <li>You're applying to US universities</li>
        <li>You prefer computer-based tests</li>
        <li>You're comfortable with American English</li>
        <li>You like integrated tasks</li>
      </ul>
      
      <h2>Preparation Tips</h2>
      
      <h3>For Both Tests:</h3>
      <ul>
        <li>Take practice tests</li>
        <li>Improve your vocabulary</li>
        <li>Practice all four skills daily</li>
        <li>Time yourself during practice</li>
        <li>Get familiar with test format</li>
      </ul>
      
      <h3>IELTS-Specific Tips:</h3>
      <ul>
        <li>Practice handwriting for paper-based test</li>
        <li>Prepare for face-to-face speaking</li>
        <li>Familiarize yourself with British spellings</li>
      </ul>
      
      <h3>TOEFL-Specific Tips:</h3>
      <ul>
        <li>Practice typing skills</li>
        <li>Get comfortable with computer interface</li>
        <li>Practice note-taking for integrated tasks</li>
      </ul>
      
      <h2>Score Requirements</h2>
      <p>Different universities have different score requirements. Research your target institutions to understand their specific requirements.</p>
      
      <h3>Typical Score Ranges:</h3>
      <ul>
        <li><strong>IELTS:</strong> 6.0-7.5 for most programs</li>
        <li><strong>TOEFL:</strong> 80-100 for most programs</li>
      </ul>
      
      <h2>Test Availability and Cost</h2>
      <ul>
        <li>Both tests are available worldwide</li>
        <li>IELTS: Available up to 4 times per month</li>
        <li>TOEFL: Available up to 50 times per year</li>
        <li>Cost varies by location ($200-250 USD typically)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Both IELTS and TOEFL are excellent tests that measure English proficiency effectively. Your choice should depend on your destination country, personal preferences, and test format comfort. Regardless of which test you choose, consistent practice and preparation are key to achieving your target score.</p>
    `,
    author: "James Thompson",
    date: "2024-01-03",
    category: "Test Prep",
    readTime: "4 min read",
    image: "/api/placeholder/1200/600",
    tags: ["IELTS", "TOEFL", "English Tests"]
  }
];

export const metadata = {
  title: "Blog Post - Learn Education London",
  description: "Read our latest educational insights and expert advice for international students.",
};

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: postId } = await params;

  // Validate postId
  if (!postId || typeof postId !== 'string') {
    return (
      <div className={styles.notFound}>
        <div className={styles.container}>
          <h1>Invalid Blog Post</h1>
          <p>The blog post ID is invalid.</p>
          <Link href="/blog" className={styles.backButton}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  let post: BlogPost | null = null;

  try {
    post = await getBlogPost(postId);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return (
      <div className={styles.notFound}>
        <div className={styles.container}>
          <h1>Error Loading Blog Post</h1>
          <p>There was an error loading the blog post. Please try again later.</p>
          <Link href="/blog" className={styles.backButton}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={styles.notFound}>
        <div className={styles.container}>
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className={styles.backButton}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Fetch related posts
  let relatedPosts: BlogPost[] = [];
  try {
    relatedPosts = await getRelatedBlogPosts(post, 3);
    console.log(`Found ${relatedPosts.length} related posts for "${post.title}"`);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    // Continue without related posts if there's an error
    relatedPosts = [];
  }

  return (
    <div className={styles.blogPostPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {post.image ? (
          <div className={styles.heroBackground}>
            <img src={post.image} alt={post.title} className={styles.heroImage} />
            <div className={styles.heroOverlay}></div>
          </div>
        ) : (
          <div className={styles.heroBackgroundNoImage}>
            <div className={styles.heroOverlay}></div>
          </div>
        )}
        
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span>{post.category}</span>
            </nav>
            
            <div className={styles.postMeta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.readTime}>
                <i className="fas fa-clock"></i>
                {post.readTime}
              </span>
              {post.featured && (
                <span className={styles.featuredBadge}>
                  <i className="fas fa-star"></i>
                  Featured
                </span>
              )}
            </div>
            
            <h1 className={styles.postTitle}>{post.title}</h1>
            
            <div className={styles.authorSection}>
              <div className={styles.authorAvatar}>
                <i className="fas fa-user"></i>
              </div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>By {post.author}</span>
                <span className={styles.postDate}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <article className={styles.postContent}>
              <div 
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {post.tags && post.tags.length > 0 && (
                <div className={styles.postTags}>
                  <h4>Tags:</h4>
                  <div className={styles.tags}>
                    {post.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>#{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </article>
            
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>About the Author</h3>
                <div className={styles.authorCard}>
                  <div className={styles.authorAvatar}>
                    <i className="fas fa-user"></i>
                  </div>
                  <div className={styles.authorDetails}>
                    <h4>{post.author}</h4>
                    <p>Expert education consultant with years of experience helping students achieve their study abroad dreams.</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.sidebarCard}>
                <h3>Related Articles</h3>
                <div className={styles.relatedPosts}>
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.id}`}
                        className={styles.relatedPost}
                      >
                        {relatedPost.image ? (
                          <img src={relatedPost.image} alt={relatedPost.title} />
                        ) : (
                          <div className={styles.relatedPostPlaceholder}>
                            <div className={styles.placeholderIcon}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2"/>
                                <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </div>
                          </div>
                        )}
                        <div className={styles.relatedContent}>
                          <h5>{relatedPost.title}</h5>
                          <span className={styles.relatedDate}>
                            {new Date(relatedPost.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className={styles.relatedPlaceholder}>No related articles found.</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
          
          <div className={styles.navigationSection}>
            <Link href="/blog" className={styles.backToBlogs}>
              <i className="fas fa-arrow-left"></i>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}