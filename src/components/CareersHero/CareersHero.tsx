'use client';

import { useState, useEffect } from 'react';
import styles from './CareersHero.module.css';

export default function CareersHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToOpenings = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.heroContent} ${isVisible ? styles.fadeInUp : ''}`}>
          <span className={styles.eyebrow}>Careers at Learn Education</span>

          <h1 className={styles.heroTitle}>
            Build your career helping students <span className={styles.highlight}>study abroad</span>
          </h1>

          <p className={styles.heroDescription}>
            Join a team that guides students into leading universities across the UK, USA, Canada,
            Ireland and Europe. We are looking for people who care about getting the details right
            for every applicant.
          </p>

          <div className={styles.heroActions}>
            <a href="#open-roles" className={styles.primaryButton} onClick={scrollToOpenings}>
              View Open Roles
            </a>
            <a href="/contact" className={styles.secondaryButton}>
              Get in Touch
            </a>
          </div>

          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightValue}>1000+</span>
              <span className={styles.highlightLabel}>Students placed</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightValue}>5</span>
              <span className={styles.highlightLabel}>Study destinations</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightValue}>95%</span>
              <span className={styles.highlightLabel}>Success rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
