'use client';

import { useState, useEffect } from 'react';
import styles from './BlogHero.module.css';

export default function BlogHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundEffects}>
        {/* Floating Particles */}
        <div className={styles.floatingParticles}>
          {[...Array(15)].map((_, index) => (
            <div 
              key={index} 
              className={styles.particle}
              style={{
                '--delay': `${index * 0.3}s`,
                '--duration': `${8 + (index % 4)}s`
              } as React.CSSProperties}
            ></div>
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <div className={styles.gradientOrbs}>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
        </div>
        
        {/* Animated Grid */}
        <div className={styles.animatedGrid}>
          {[...Array(20)].map((_, index) => (
            <div key={index} className={styles.gridLine}></div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Main Heading */}
          <h1 className={`${styles.heroTitle} ${isVisible ? styles.fadeInUp : ''}`}>
            <span className={styles.titleLine1}>Our Blog</span>
            <span className={styles.titleLine2}>Latest Insights &</span>
            <span className={styles.titleLine3}>Educational Resources</span>
          </h1>

          {/* Description */}
          <p className={`${styles.heroDescription} ${isVisible ? styles.fadeInUp : ''}`}>
            Stay updated with the latest trends, tips, and insights in international education. Our expert team shares valuable knowledge to help you succeed in your study abroad journey.
          </p>


        </div>
      </div>


    </section>
  );
}