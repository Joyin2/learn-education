'use client';

import { useEffect, useState } from 'react';
import styles from './PartnerUSAUniversities.module.css';

export default function PartnerUSAUniversities() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('partner-usa-universities');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const universities = [
    'Arizona State University',
    'Boston University',
    'California Institute of Technology',
    'Columbia University',
    'Cornell University',
    'Drexel University',
    'Duke University',
    'Florida State University',
    'Georgetown University',
    'Georgia Institute of Technology',
    'Harvard University',
    'Illinois Institute of Technology',
    'Johns Hopkins University',
    'Massachusetts Institute of Technology',
    'New York University',
    'Northwestern University',
    'Ohio State University',
    'Pennsylvania State University',
    'Princeton University',
    'Purdue University',
    'Stanford University',
    'Texas A&M University',
    'University of California, Berkeley',
    'University of Chicago',
    'University of Michigan',
    'University of Pennsylvania',
    'University of Texas at Austin',
    'Yale University'
  ];

  const benefits = [
    {
      icon: 'fa-solid fa-globe',
      title: 'Global Recognition',
      description: 'Degrees valued by employers worldwide'
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Diverse Programs',
      description: 'Thousands of courses across disciplines'
    },
    {
      icon: 'fa-solid fa-hand-holding-dollar',
      title: 'Scholarship Support',
      description: 'Guidance on financial aid options'
    }
  ];

  const consultationFeatures = [
    'Free Consultation',
    'Expert Guidance',
    'Application Support'
  ];

  return (
    <section id="partner-usa-universities" className={styles.partnerSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
        <div className={styles.bgPattern}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.sectionTitle}>Our Partner Universities</h2>
          <p className={styles.sectionSubtitle}>
            Learn Education has partnered with 40+ prestigious USA universities
          </p>
          <div className={styles.sectionDescription}>
            <p>
              At Learn Education, we are proud to collaborate with some of the USA's most esteemed universities, 
              offering our students access to world-class education and unparalleled opportunities for personal 
              and professional growth. Our partnerships are carefully selected to ensure a diverse range of 
              academic programs, state-of-the-art facilities, and a supportive learning environment.
            </p>
            <p>
              Our mission is to make quality education accessible to students from all walks of life. We believe 
              that every student deserves the opportunity to learn and grow in an environment that fosters 
              academic excellence.
            </p>
            <div className={styles.brandSignature}>
              <strong>Learn Education, London</strong>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainContent}>
          {/* Left Side - Universities List */}
          <div className={styles.leftContent}>
            <div className={`${styles.universitiesSection} ${isVisible ? styles.slideInLeft : ''}`}>
              <h3 className={styles.universitiesTitle}>
                List of Universities in the USA that Learn Education London has partnered with:
              </h3>
              <div className={styles.universitiesList}>
                {universities.map((university, index) => (
                  <div 
                    key={index}
                    className={`${styles.universityItem} ${isVisible ? styles.fadeInItem : ''}`}
                    style={{'--delay': `${index * 0.05}s`} as React.CSSProperties}
                  >
                    <i className="fa-solid fa-check"></i>
                    <span>{university}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stats and CTA */}
          <div className={styles.rightContent}>
            {/* Stats Card */}
            <div className={`${styles.statsCard} ${isVisible ? styles.slideInRight : ''}`}>
              <div className={styles.statNumber}>40+</div>
              <div className={styles.statLabel}>Partner Universities</div>
              
              <div className={styles.needGuidance}>
                <h4>Need Guidance?</h4>
                <p>Our education consultants are here to help you choose the right university</p>
                <a href="/contact" className={styles.consultationBtn}>
                  <span>Book Free Consultation</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Benefits */}
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`${styles.benefitCard} ${isVisible ? styles.slideInUp : ''}`}
                  style={{'--delay': `${0.3 + index * 0.1}s`} as React.CSSProperties}
                >
                  <div className={styles.benefitIcon}>
                    <i className={benefit.icon}></i>
                  </div>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Ready to Start Your Academic Journey in the USA?
            </h3>
            <p className={styles.ctaDescription}>
              Get personalized guidance from our education consultants to find your perfect university match. 
              Our experts will help you navigate the application process and secure your place at a top USA university.
            </p>
            
            <div className={styles.ctaFeatures}>
              {consultationFeatures.map((feature, index) => (
                <div key={index} className={styles.ctaFeature}>
                  <i className="fa-solid fa-check-circle"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaStats}>
              <div className={styles.ctaStat}>
                <div className={styles.ctaStatNumber}>3,000+</div>
                <div className={styles.ctaStatLabel}>Students</div>
                <div className={styles.ctaStatDesc}>Successfully placed in USA universities</div>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryCtaBtn}>
                <span>Book Your Free Consultation</span>
                <i className="fa-solid fa-calendar"></i>
              </a>
              <div className={styles.ctaDisclaimer}>
                No obligation. Cancel anytime.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
