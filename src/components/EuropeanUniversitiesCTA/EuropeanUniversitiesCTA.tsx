'use client';

import styles from './EuropeanUniversitiesCTA.module.css';

export default function EuropeanUniversitiesCTA() {
  const features = [
    'Free Consultation',
    'Expert Guidance', 
    'Application Support'
  ];

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <div className={styles.textContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Start Your Academic Journey in Europe?
            </h2>
            <p className={styles.ctaDescription}>
              Get personalized guidance from our education consultants to find your perfect university match. Our experts will help you navigate the application process, visa requirements, and secure your place at a top European university.
            </p>
            
            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <i className="fa-solid fa-check"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.statsContent}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5,000+</div>
              <div className={styles.statLabel}>Students</div>
              <div className={styles.statDescription}>
                Successfully placed in European universities
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaActions}>
          <a href="/contact" className={styles.primaryButton}>
            Book Your Free Consultation
          </a>
          <p className={styles.disclaimer}>
            No obligation. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
