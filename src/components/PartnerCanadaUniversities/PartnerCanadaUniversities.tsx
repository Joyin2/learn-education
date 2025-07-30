'use client';

import { useEffect, useState } from 'react';
import styles from './PartnerCanadaUniversities.module.css';

export default function PartnerCanadaUniversities() {
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

    const section = document.getElementById('partner-canada-universities');
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
    'University of Toronto',
    'University of British Columbia',
    'McGill University',
    'University of Alberta',
    'University of Waterloo',
    'McMaster University',
    'University of Calgary',
    'University of Ottawa',
    'Western University',
    "Queen's University",
    'Dalhousie University',
    'Simon Fraser University',
    'University of Victoria',
    'York University',
    'Concordia University',
    'University of Saskatchewan',
    'University of Manitoba',
    'Ryerson University',
    'Carleton University',
    'University of Guelph'
  ];

  const advantages = [
    {
      icon: 'fa-solid fa-passport',
      title: 'Immigration Pathway',
      description: 'Post-graduation work permit opportunities'
    },
    {
      icon: 'fa-solid fa-language',
      title: 'Bilingual Education',
      description: 'Options for English and French programs'
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Scholarship Support',
      description: 'Guidance on financial aid options'
    }
  ];

  const features = [
    {
      icon: 'fa-solid fa-comments',
      text: 'Free Consultation'
    },
    {
      icon: 'fa-solid fa-user-tie',
      text: 'Expert Guidance'
    },
    {
      icon: 'fa-solid fa-file-alt',
      text: 'Application Support'
    }
  ];

  return (
    <section id="partner-canada-universities" className={styles.partnerSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.sectionTitle}>Our Partner Universities</h2>
          <p className={styles.sectionSubtitle}>
            Learn Education has partnered with 20+ prestigious Canadian universities
          </p>
          <div className={styles.sectionDescription}>
            <p>
              At Learn Education, we are proud to collaborate with some of Canada's most prestigious universities, 
              offering our students access to world-class education and unparalleled opportunities for personal 
              and professional growth. Our partnerships are carefully selected to ensure a diverse range of 
              academic programs, state-of-the-art facilities, and a supportive learning environment.
            </p>
            <p>
              Our mission is to make quality education accessible to students from all walks of life. We believe 
              that every student deserves the opportunity to learn and grow in an environment that fosters 
              academic excellence.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainContent}>
          {/* Left Side - Universities List */}
          <div className={styles.leftContent}>
            <div className={`${styles.universitiesSection} ${isVisible ? styles.slideInLeft : ''}`}>
              <div className={styles.brandHeader}>
                <h3 className={styles.brandTitle}>Learn Education, London</h3>
                <p className={styles.listTitle}>
                  List of Universities in Canada that Learn Education London has partnered with:
                </p>
              </div>
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

          {/* Right Side - Stats and Guidance */}
          <div className={styles.rightContent}>
            <div className={`${styles.statsCard} ${isVisible ? styles.slideInRight : ''}`}>
              <div className={styles.statNumber}>20+</div>
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

            {/* Advantages Grid */}
            <div className={`${styles.advantagesGrid} ${isVisible ? styles.slideInRight : ''}`}>
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className={`${styles.advantageCard} ${isVisible ? styles.fadeInItem : ''}`}
                  style={{'--delay': `${(index + 1) * 0.1}s`} as React.CSSProperties}
                >
                  <div className={styles.advantageIcon}>
                    <i className={advantage.icon}></i>
                  </div>
                  <div className={styles.advantageContent}>
                    <h4 className={styles.advantageTitle}>{advantage.title}</h4>
                    <p className={styles.advantageDescription}>{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`${styles.bottomCTA} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaMainTitle}>Ready to Start Your Academic Journey in Canada?</h3>
            <p className={styles.ctaMainDescription}>
              Get personalized guidance from our education consultants to find your perfect university match. 
              Our experts will help you navigate the application process and secure your place at a top Canadian university.
            </p>
            
            <div className={styles.featuresRow}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <i className={feature.icon}></i>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaStats}>
              <div className={styles.ctaStat}>
                <div className={styles.ctaStatNumber}>4,500+</div>
                <div className={styles.ctaStatLabel}>Students</div>
                <div className={styles.ctaStatDesc}>Successfully placed in Canadian universities</div>
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
