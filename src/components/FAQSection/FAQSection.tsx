'use client';

import { useState, useEffect } from 'react';
import styles from './FAQSection.module.css';

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does Learn Education offer?",
      answer: "We offer a wide range of services to support students in their educational journey, including personalized consultation, application assistance, visa support, interview preparation, and post-arrival assistance in the UK. We cater to both local UK students and international students seeking admission to top UK institutions."
    },
    {
      question: "How does the Application Process work with Learn Education London?",
      answer: "Our application process is streamlined and personalized. We start with an initial consultation to understand your goals, then help you select suitable universities, prepare your application documents, submit applications, and provide ongoing support until you receive your offers. Our experienced team guides you through each step to maximize your chances of success."
    },
    {
      question: "Do you offer support for obtaining a UK student visa?",
      answer: "Yes, we provide comprehensive visa support including document preparation, application guidance, interview preparation, and ongoing assistance throughout the visa process. Our team stays updated with the latest visa requirements and regulations to ensure your application meets all criteria."
    },
    {
      question: "Can Learn Education London help me find accommodation in the UK?",
      answer: "Absolutely! We assist students in finding suitable accommodation options including university halls, private student housing, and homestays. We provide guidance on different areas, costs, and help you secure accommodation that fits your budget and preferences before your arrival."
    },
    {
      question: "What makes Learn Education London different from other education consultancies?",
      answer: "Our personalized approach, extensive university network, and end-to-end support set us apart. With over 10 years of experience, partnerships with 130+ universities, and a 98% success rate, we provide dedicated guidance from initial consultation to post-arrival support. Every student receives individualized attention tailored to their unique goals."
    },
    {
      question: "Do you assist with applications to all types of UK educational institutions?",
      answer: "Yes, we assist with applications to universities, colleges, language schools, and specialized institutions across the UK. Whether you're applying for undergraduate, postgraduate, PhD programs, or professional courses, our team has expertise across all educational levels and fields of study."
    },
    {
      question: "How long does the application process typically take?",
      answer: "The timeline varies depending on the program and institution, but typically ranges from 3-6 months. We recommend starting the process at least 6-12 months before your intended start date to allow sufficient time for application preparation, submission, visa processing, and accommodation arrangements."
    },
    {
      question: "What if I have already started my application? Can you still help?",
      answer: "Absolutely! We can assist you at any stage of your application process. Whether you need help completing applications, improving your personal statement, preparing for interviews, or navigating visa requirements, our team can step in and provide the support you need to strengthen your application."
    },
    {
      question: "How can I get started with Learn Education London?",
      answer: "Getting started is easy! Simply book a free consultation through our website or contact us directly. During this initial meeting, we'll discuss your educational goals, assess your profile, and create a personalized plan to help you achieve your academic aspirations. No obligation - just expert guidance to get you started."
    },
    {
      question: "Does Learn Education London help with finding scholarships?",
      answer: "Yes, we actively help students identify and apply for scholarships, grants, and financial aid opportunities. Our team maintains an updated database of available funding options and provides guidance on application requirements, deadlines, and strategies to improve your chances of securing financial support."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.headerSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.badge}>FREQUENTLY ASKED QUESTIONS</div>
          <h1 className={styles.mainTitle}>Got Questions? We've Got Answers</h1>
          <p className={styles.description}>
            Find answers to the most common questions about our services, application process, 
            and how we can help you achieve your international education goals.
          </p>
        </div>

        {/* FAQ List */}
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`${styles.faqItem} ${isVisible ? styles.slideInUp : ''} ${activeIndex === index ? styles.active : ''}`}
              style={{'--delay': `${index * 0.1}s`} as React.CSSProperties}
            >
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <div className={styles.iconContainer}>
                  <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`} style={{fontStyle: 'normal'}}></i>
                </div>
              </button>
              
              <div className={`${styles.faqAnswer} ${activeIndex === index ? styles.expanded : ''}`}>
                <div className={styles.answerContent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Still Have Questions?</h2>
            <p className={styles.ctaDescription}>
              Our expert counselors are here to help. Book a free consultation to get personalized answers to your questions.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryButton}>
                <i className="fa-solid fa-calendar" style={{fontStyle: 'normal'}}></i>
                <span>Book Free Consultation</span>
              </a>
              <a href="/contact" className={styles.secondaryButton}>
                <i className="fa-solid fa-phone" style={{fontStyle: 'normal'}}></i>
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
