'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
        <div className={styles.heroGrid}>
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

          <div className={`${styles.heroImageWrapper} ${isVisible ? styles.fadeInImage : ''}`}>
            <div className={styles.imageGlow}></div>
            <div className={styles.imageFrame}>
              <Image
                src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/about.jpg"
                alt="The Learn Education team working with students"
                width={760}
                height={620}
                priority
                unoptimized
                className={styles.heroImage}
                sizes="(max-width: 1024px) 0px, 45vw"
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.floatingCard}>
              <span className={styles.floatingIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <span className={styles.floatingTitle}>London &amp; Sylhet &amp; India</span>
                <span className={styles.floatingLabel}>Where our teams work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
