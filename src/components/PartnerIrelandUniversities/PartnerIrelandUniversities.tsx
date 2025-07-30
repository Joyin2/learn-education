'use client';

import { useState, useEffect } from 'react';
import styles from './PartnerIrelandUniversities.module.css';

export default function PartnerIrelandUniversities() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const universities = [
    'Trinity College Dublin',
    'University College Dublin',
    'University College Cork',
    'National University of Ireland Galway',
    'University of Limerick',
    'Maynooth University',
    'Dublin City University',
    'Technological University Dublin',
    'National College of Ireland',
    'Dublin Business School',
    'Griffith College Dublin',
    'Cork Institute of Technology',
    'Waterford Institute of Technology',
    'Dundalk Institute of Technology',
    'Institute of Technology Tralee',
    'Shannon College of Hotel Management'
  ];

  const advantages = [
    {
      icon: 'fa-solid fa-globe-europe',
      title: 'EU Advantage',
      description: 'Access to European job market and education'
    },
    {
      icon: 'fa-solid fa-comments',
      title: 'English-Speaking',
      description: 'Study in English with cultural immersion'
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Scholarship Support',
      description: 'Guidance on financial aid options'
    }
  ];

  const features = [
    {
      icon: 'fa-solid fa-calendar-check',
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
    <section className={styles.partnerSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.sectionTitle}>Our Partner Universities</h2>
          <p className={styles.sectionSubtitle}>
            Learn Education has partnered with 15+ prestigious Irish universities
          </p>
          <p className={styles.sectionDescription}>
            At Learn Education, we are proud to collaborate with some of Ireland's most prestigious universities, 
            offering our students access to world-class education and unparalleled opportunities for personal and 
            professional growth. Our partnerships are carefully selected to ensure a diverse range of academic programs, 
            state-of-the-art facilities, and a supportive learning environment.
          </p>
          <p className={styles.missionStatement}>
            Our mission is to make quality education accessible to students from all walks of life. We believe that 
            every student deserves the opportunity to learn and grow in an environment that fosters academic excellence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainContent}>
          {/* Left Side - Universities List */}
          <div className={`${styles.leftContent} ${isVisible ? styles.slideInLeft : ''}`}>
            <div className={styles.universitiesSection}>
              <div className={styles.brandHeader}>
                <h3 className={styles.brandTitle}>Learn Education, London</h3>
                <p className={styles.listTitle}>
                  List of Universities in Ireland that Learn Education London has partnered with:
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

          {/* Right Side - Stats and CTA */}
          <div className={`${styles.rightContent} ${isVisible ? styles.slideInRight : ''}`}>
            {/* Stats Card */}
            <div className={styles.statsCard}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Partner Universities</div>
              <div className={styles.ctaSection}>
                <h4 className={styles.ctaTitle}>Need Guidance?</h4>
                <p className={styles.ctaDescription}>
                  Our education consultants are here to help you choose the right university
                </p>
                <button className={styles.consultationBtn}>
                  <span>Book Free Consultation</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Advantages Grid */}
            <div className={styles.advantagesGrid}>
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className={`${styles.advantageCard} ${isVisible ? styles.slideInRight : ''}`}
                  style={{'--delay': `${(index + 1) * 0.1}s`} as React.CSSProperties}
                >
                  <div className={styles.advantageIcon}>
                    <i className={advantage.icon}></i>
                  </div>
                  <h5 className={styles.advantageTitle}>{advantage.title}</h5>
                  <p className={styles.advantageDescription}>{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`${styles.bottomCTA} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaMainTitle}>Ready to Start Your Academic Journey in Ireland?</h3>
            <p className={styles.ctaMainDescription}>
              Get personalized guidance from our education consultants to find your perfect university match. 
              Our experts will help you navigate the application process and secure your place at a top Irish university.
            </p>
            
            <div className={styles.featuresRow}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <i className={feature.icon}></i>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className={styles.successStats}>
              <div className={styles.successNumber}>3,000+</div>
              <div className={styles.successLabel}>Students Successfully placed in Irish universities</div>
            </div>

            <div className={styles.finalCTA}>
              <button className={styles.mainCTABtn}>
                <span>Book Your Free Consultation</span>
                <i className="fa-solid fa-calendar-check"></i>
              </button>
              <p className={styles.disclaimer}>No obligation. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
