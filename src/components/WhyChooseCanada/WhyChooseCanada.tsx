'use client';

import { useState, useEffect } from 'react';
import styles from './WhyChooseCanada.module.css';

export default function WhyChooseCanada() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const reasons = [
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'World-class education system',
      description: 'Globally recognized universities with high academic standards and innovative research programs.'
    },
    {
      icon: 'fa-solid fa-dollar-sign',
      title: 'Affordable tuition compared to the US and UK',
      description: 'Quality education at competitive prices with excellent value for international students.'
    },
    {
      icon: 'fa-solid fa-briefcase',
      title: 'Post-graduation work opportunities',
      description: 'Access to post-graduation work permits and excellent career prospects in diverse industries.'
    },
    {
      icon: 'fa-solid fa-passport',
      title: 'Pathway to permanent residency',
      description: 'Clear immigration pathways for international students to become permanent residents.'
    },
    {
      icon: 'fa-solid fa-shield-alt',
      title: 'Safe and welcoming environment',
      description: 'One of the safest countries in the world with a reputation for peace and security.'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Vibrant multicultural society',
      description: 'Diverse, inclusive communities that celebrate different cultures and backgrounds.'
    }
  ];

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.headerContent}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>
                Why choose <span className={styles.highlight}>Canada?</span>
              </h2>
              <p className={styles.sectionDescription}>
                Canada is a top destination for international students seeking quality education in a welcoming, 
                multicultural environment. With its globally recognized universities, diverse study options, and 
                excellent quality of life, Canada offers an exceptional educational experience.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img 
                src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation//canada.svg" 
                alt="Canada Map" 
                className={styles.canadaImage}
              />
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`${styles.reasonCard} ${isVisible ? styles.slideInUp : ''}`}
              style={{'--delay': `${index * 0.1}s`} as React.CSSProperties}
            >
              <div className={styles.cardIcon}>
                <i className={reason.icon}></i>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardDescription}>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
