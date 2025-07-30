'use client';

import styles from './WhatGuidesUs.module.css';

export default function WhatGuidesUs() {
  const coreValues = [
    {
      icon: 'fa-solid fa-user-graduate',
      title: 'Student-Centered',
      description: 'We put students first, focusing on their unique needs, aspirations, and circumstances in every recommendation we make.',
      color: 'blue'
    },
    {
      icon: 'fa-solid fa-award',
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in our guidance, providing honest advice even when it\'s not what students might initially want to hear.',
      color: 'indigo'
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Innovation',
      description: 'We continuously evolve our services, incorporating new technologies and approaches to better serve our students in a changing world.',
      color: 'cyan'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Global Perspective',
      description: 'We embrace diverse cultures and education systems, helping students navigate international opportunities with confidence.',
      color: 'teal'
    }
  ];

  return (
    <section className={styles.guidesSection}>
      {/* Enhanced Background Effects */}
      <div className={styles.backgroundEffects}>
        {/* Animated Grid Pattern */}
        <div className={styles.animatedGrid}>
          {[...Array(20)].map((_, index) => (
            <div key={index} className={styles.gridLine}></div>
          ))}
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className={styles.geometricShapes}>
          {[...Array(6)].map((_, index) => (
            <div key={index} className={styles.shape}></div>
          ))}
        </div>
        
        {/* Gradient Waves */}
        <div className={styles.gradientWaves}>
          <div className={styles.wave1}></div>
          <div className={styles.wave2}></div>
          <div className={styles.wave3}></div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <i className="fa-solid fa-compass" style={{fontStyle: 'normal'}}></i>
            <span>What Guides Us</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.titleHighlight}>Core Values</span>
          </h2>
          <p className={styles.sectionDescription}>
            At Learn Education London, our values shape every aspect of our work and guide us in delivering exceptional service to our students.
          </p>
        </div>

        {/* Values Grid */}
        <div className={styles.valuesGrid}>
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className={`${styles.valueCard} ${styles[value.color]}`}
              style={{'--delay': `${index * 0.2}s`} as React.CSSProperties}
            >
              <div className={styles.cardBackground}></div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                  <i className={value.icon} style={{fontStyle: 'normal'}}></i>
                </div>
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <p className={styles.cardDescription}>{value.description}</p>
              </div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
