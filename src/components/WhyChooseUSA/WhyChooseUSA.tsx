'use client';

import { useEffect, useState } from 'react';
import styles from './WhyChooseUSA.module.css';

export default function WhyChooseUSA() {
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

    const section = document.getElementById('why-choose-usa');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const features = [
    {
      icon: 'fa-solid fa-university',
      title: 'Prestigious Universities',
      description: 'Access to world-renowned institutions with exceptional academic reputation and global recognition.'
    },
    {
      icon: 'fa-solid fa-flask',
      title: 'Cutting-edge Research Opportunities',
      description: 'Participate in groundbreaking research projects and work with leading experts in your field.'
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Cultural Diversity and Vibrant Campus Life',
      description: 'Experience a multicultural environment with students from around the world and rich campus activities.'
    }
  ];

  return (
    <section id="why-choose-usa" className={styles.whyChooseUSASection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeInUp : ''}`}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.titlePrefix}>Why choose</span>
                <span className={styles.titleMain}>USA?</span>
              </h2>
              <p className={styles.sectionDescription}>
                Studying in the USA offers unparalleled access to world-renowned universities, cutting-edge research facilities, and diverse academic programs. The US higher education system is celebrated for its flexibility, allowing students to explore various subjects before selecting a major. With over 4,000 colleges and universities, students can find the perfect match for their academic interests, career goals, and personal preferences.
              </p>
            </div>

            {/* Features Grid */}
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`${styles.featureItem} ${isVisible ? styles.slideInUp : ''}`}
                  style={{'--delay': `${index * 0.2}s`} as React.CSSProperties}
                >
                  <div className={styles.featureIcon}>
                    <i className={feature.icon}></i>
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={styles.rightContent}>
            <div className={`${styles.imageContainer} ${isVisible ? styles.slideInRight : ''}`}>
              <div className={styles.imageWrapper}>
                <img
                  src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation//usa.svg"
                  alt="USA Flag and Education"
                  className={styles.usaImage}
                  loading="lazy"
                />
                <div className={styles.imageGlow}></div>
              </div>
              
              {/* Floating Stats */}
              <div className={styles.floatingStats}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>4,000+</div>
                  <div className={styles.statLabel}>Universities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
