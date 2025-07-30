'use client';

import styles from './EuropeanUniversitiesHero.module.css';

export default function EuropeanUniversitiesHero() {
  return (
    <div className={styles.europeanHeroSection}>
      {/* Background Elements */}
      <div className={styles.heroBgElements}>
        <div className={styles.bgElement1}></div>
        <div className={styles.bgElement2}></div>
        <div className={styles.bgElement3}></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className={styles.heroGradientOverlay}></div>
      
      {/* European Stars Pattern */}
      <div className={styles.europeanStarsPattern}></div>

      <div className={styles.container}>
        {/* Trust Badge - Moved to top */}
        <div className={styles.trustBadge}>
          <span className={styles.trustIcon}>🎓</span>
          <span className={styles.trustText}>Trusted by 1000+ Students</span>
        </div>

        <div className={styles.heroContent}>
          {/* Main Heading */}
          <h1 className={styles.heroTitle}>
            <span className={styles.titleMain}>European Universities</span>
            <span className={styles.titleHighlight}>25+ Partner Universities</span>
            <span className={styles.titleLocation}>Across Europe</span>
            <span className={styles.titleEducation}>World-Class Education</span>
          </h1>

          {/* CTA Buttons */}
          <div className={styles.ctaContainer}>
            <a href="#universities" className={styles.primaryBtn}>
              <span>Explore Universities</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="/contact" className={styles.secondaryBtn}>
              <span>Free Consultation</span>
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
