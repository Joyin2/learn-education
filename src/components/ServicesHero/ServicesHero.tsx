'use client';

import Link from 'next/link';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
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



  return (
    <section className={styles.servicesHero}>
      {/* Enhanced Background Effects */}
      <div className={styles.backgroundEffects}>
        {/* Animated Particle System */}
        <div className={styles.particleSystem}>
          {[...Array(20)].map((_, index) => (
            <div 
              key={index} 
              className={styles.particle}
              style={{'--delay': `${index * 0.3}s`} as React.CSSProperties}
            ></div>
          ))}
        </div>
        
        {/* Geometric Shapes */}
        <div className={styles.geometricShapes}>
          {[...Array(8)].map((_, index) => (
            <div 
              key={index} 
              className={styles.shape}
              style={{'--index': index} as React.CSSProperties}
            ></div>
          ))}
        </div>
        
        {/* Gradient Waves */}
        <div className={styles.gradientWaves}>
          <div className={styles.wave1}></div>
          <div className={styles.wave2}></div>
          <div className={styles.wave3}></div>
        </div>
        
        {/* Floating Icons */}
        <div className={styles.floatingIcons}>
          <div className={styles.floatingIcon}>
            <i className="fa-solid fa-book" style={{fontStyle: 'normal'}}></i>
          </div>
          <div className={styles.floatingIcon}>
            <i className="fa-solid fa-globe" style={{fontStyle: 'normal'}}></i>
          </div>
          <div className={styles.floatingIcon}>
            <i className="fa-solid fa-lightbulb" style={{fontStyle: 'normal'}}></i>
          </div>
          <div className={styles.floatingIcon}>
            <i className="fa-solid fa-star" style={{fontStyle: 'normal'}}></i>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.heroGrid}>
          {/* Left Column - Text Content */}
          <div className={styles.leftColumn}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                <span className={styles.titleHighlight}>Services</span>
              </h1>

              <p className={styles.heroDescription}>
                At Learn Education London, we are dedicated to making your dream of studying abroad a reality.
                Our comprehensive range of services is designed to guide you through every step of the process,
                ensuring a smooth and successful journey to your academic goals.
              </p>

              <div className={styles.heroActions}>
                <Link href="#services" className={styles.primaryButton}>
                  <span>Explore Our Services</span>
                  <i className="fa-solid fa-arrow-right" style={{fontStyle: 'normal'}}></i>
                </Link>
                <Link href="/contact" className={styles.secondaryButton}>
                  <i className="fa-solid fa-calendar" style={{fontStyle: 'normal'}}></i>
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className={styles.rightColumn}>
            {/* Key Highlights */}
            <div className={styles.highlightsSection}>
              <div className={styles.highlightsGrid}>
                {keyHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={styles.highlightCard}
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
        </div>
      </div>
    </section>
  );
}
