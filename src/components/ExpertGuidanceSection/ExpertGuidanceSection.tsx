'use client';

import { useEffect, useState } from 'react';
import styles from './ExpertGuidanceSection.module.css';

export default function ExpertGuidanceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    successRate: 0,
    experience: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      startCounterAnimation();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const startCounterAnimation = () => {
    const targets = { successRate: 95, experience: 15 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      
      setCounters({
        successRate: Math.floor(targets.successRate * progress),
        experience: Math.floor(targets.experience * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  return (
    <section className={styles.expertGuidanceSection}>
      {/* Background Elements */}
      <div className={styles.backgroundPattern}></div>
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Side - Images */}
          <div className={`${styles.imagesSection} ${isVisible ? styles.slideInLeft : ''}`}>
            <div className={styles.imageContainer}>
              <img 
                src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/about-1.svg"
                alt="Expert Guidance Illustration 1"
                className={`${styles.aboutImage} ${styles.aboutImage1}`}
              />
              <img 
                src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/about-2.svg"
                alt="Expert Guidance Illustration 2"
                className={`${styles.aboutImage} ${styles.aboutImage2}`}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`${styles.contentSection} ${isVisible ? styles.slideInRight : ''}`}>
            <div className={styles.headerSection}>
              <h2 className={styles.mainTitle}>Expert Guidance</h2>
              <div className={styles.commitmentBadge}>OUR COMMITMENT</div>
              <h3 className={styles.subtitle}>We are committed to your success.</h3>
              <p className={styles.description}>
                At Learn Education London, we offer a comprehensive range of services designed to 
                simplify the admissions process and maximize your chances of success.
              </p>
            </div>

            {/* Features List */}
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-user-graduate"></i>
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Experienced admissions consultants</h4>
                  <p className={styles.featureDescription}>Dedicated experts with years of expertise</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Personalized advice</h4>
                  <p className={styles.featureDescription}>Customized guidance for your unique needs</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-hands-helping"></i>
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Expert assistance</h4>
                  <p className={styles.featureDescription}>Support throughout your education journey</p>
                </div>
              </div>
            </div>

            {/* Stats and CTA */}
            <div className={styles.bottomSection}>
              <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>{counters.successRate || 95}%</div>
                  <div className={styles.statLabel}>Success Rate</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>{counters.experience || 15}+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
              </div>

              <button className={styles.ctaButton}>
                <span>Redeem Your FREE Consultation</span>
                <i className="fa-solid fa-gift"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
