'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  const keyHighlights = [
    {
      icon: 'fa-solid fa-graduation-cap',
      number: '10+',
      label: 'Years Experience',
      description: 'Decade of expertise'
    },
    {
      icon: 'fa-solid fa-university',
      number: '130+',
      label: 'Partner Universities',
      description: 'Global network'
    },
    {
      icon: 'fa-solid fa-users',
      number: '5000+',
      label: 'Students Helped',
      description: 'Success stories'
    },
    {
      icon: 'fa-solid fa-chart-line',
      number: '98%',
      label: 'Success Rate',
      description: 'Proven results'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.headerSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.mainTitle}>Services</h2>
          <p className={styles.description}>
            At Learn Education London, we are dedicated to making your dream of studying abroad a reality.
            Our comprehensive range of services is designed to guide you through every step of the process,
            ensuring a smooth and successful journey to your academic goals.
          </p>
          
          <div className={styles.actionButtons}>
            <Link href="/services" className={styles.primaryButton}>
              <span>Explore Our Services</span>
              <i className="fa-solid fa-arrow-right" style={{fontStyle: 'normal'}}></i>
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              <i className="fa-solid fa-calendar" style={{fontStyle: 'normal'}}></i>
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className={styles.highlightsSection}>
          <div className={styles.highlightsGrid}>
            {keyHighlights.map((highlight, index) => (
              <div
                key={index}
                className={`${styles.highlightCard} ${isVisible ? styles.slideInUp : ''}`}
                style={{'--delay': `${index * 0.1}s`} as React.CSSProperties}
              >
                <div className={styles.highlightIcon}>
                  <i className={highlight.icon} style={{fontStyle: 'normal'}}></i>
                </div>
                <div className={styles.highlightContent}>
                  <div className={styles.highlightNumber}>{highlight.number}</div>
                  <div className={styles.highlightLabel}>{highlight.label}</div>
                  <div className={styles.highlightDescription}>{highlight.description}</div>
                </div>
                <div className={styles.highlightGlow}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
