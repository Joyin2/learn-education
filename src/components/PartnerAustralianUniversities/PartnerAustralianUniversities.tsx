'use client';

import React from 'react';
import { useEffect, useState } from 'react';

import styles from './PartnerAustralianUniversities.module.css';

export default function PartnerAustralianUniversities() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('partner-australian-universities');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  const universities = [
    'University of Melbourne',
    'University of Sydney',
    'Australian National University',
    'University of Queensland',
    'Monash University',
    'University of New South Wales',
    'University of Western Australia',
    'University of Adelaide',
    'University of Technology Sydney',
    'Queensland University of Technology',
    'Macquarie University',
    'RMIT University',
    'Curtin University',
    'University of Wollongong',
    'Deakin University',
    'La Trobe University',
    'Flinders University',
    'Griffith University',
    'University of Tasmania',
    'University of Newcastle'
  ];

  const features = [
    {
      icon: 'fa-solid fa-heart',
      title: 'Quality of Life',
      description: 'Australia ranks high in quality of living'
    },
    {
      icon: 'fa-solid fa-briefcase',
      title: 'Work Opportunities',
      description: 'Post-study work visas for up to 4 years'
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Scholarship Support',
      description: 'Guidance on Australian funding options'
    }
  ];

  const ctaFeatures = [
    'Free Consultation',
    'Expert Guidance', 
    'Application Support'
  ];

  return (
    <section id="partner-australian-universities" className={styles.partnerUniversities}>
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
      </div>

      <div className={styles.container}>
        {/* Main Content Section */}
        <div className={`${styles.mainContent} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.contentLeft}>
            <h2 className={`${styles.sectionTitle} ${isVisible ? styles.fadeInUp : ''}`}>Our Partner Universities</h2>
            <p className={styles.subtitle}>
              Learn Education has partnered with 20+ prestigious Australian universities
            </p>
            
            <div className={styles.description}>
              <p>
                At Learn Education, we are proud to collaborate with some of Australia's most prestigious universities, offering our students access to world-class education and unparalleled opportunities for personal and professional growth. Our partnerships span across multiple states and territories, providing a diverse range of academic programs, state-of-the-art facilities, and supportive learning environments.
              </p>
              <p>
                Australian universities combine academic excellence with a relaxed lifestyle and vibrant multicultural environment. Our mission is to help students find their perfect academic home in Australia, where they can thrive both academically and personally.
              </p>
            </div>

            <div className={styles.brandSection}>
              <div className={styles.brandName}>Learn Education, London</div>
            </div>
          </div>

          <div className={styles.contentRight}>
            <div className={`${styles.universitiesList} ${isVisible ? styles.fadeInUp : ''}`}>
              <h3 className={styles.listTitle}>
                List of Universities in Australia that Learn Education London has partnered with:
              </h3>
              <div className={`${styles.universitiesGrid} ${isVisible ? styles.fadeInUp : ''}`}>
                {universities.map((university, index) => (
                  <div key={index} className={styles.universityItem}>
                    <i className="fa-solid fa-check"></i>
                    <span>{university}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Partner Universities</div>
          </div>
        </div>

        {/* Features Section */}
        <div className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>Need Guidance?</h3>
          <p className={styles.featuresSubtitle}>
            Our education consultants are here to help you choose the right Australian university
          </p>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className={feature.icon}></i>
                </div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.ctaSection}>
            <a href="/contact" className={styles.ctaButton}>
              Book Free Consultation
            </a>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className={styles.finalCtaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.textContent}>
              <h2 className={styles.ctaTitle}>
                Ready to Start Your Academic Journey in Australia?
              </h2>
              <p className={styles.ctaDescription}>
                Get personalized guidance from our education consultants to find your perfect university match. Our experts will help you navigate the application process, visa requirements, and secure your place at a top Australian university.
              </p>
              
              <div className={styles.featuresList}>
                {ctaFeatures.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <i className="fa-solid fa-check"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.statsContent}>
              <div className={styles.finalStatCard}>
                <div className={styles.finalStatNumber}>4,000+</div>
                <div className={styles.finalStatLabel}>Students</div>
                <div className={styles.finalStatDescription}>
                  Successfully placed in Australian universities
                </div>
              </div>
            </div>
          </div>

          <div className={styles.finalCtaActions}>
            <a href="/contact" className={styles.primaryButton}>
              Book Your Free Consultation
            </a>
            <p className={styles.disclaimer}>
              No obligation. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
