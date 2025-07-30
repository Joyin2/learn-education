'use client';

import styles from './OurPurpose.module.css';

export default function OurPurpose() {
  const missionPoints = [
    'Personalized guidance for each student',
    'Ethical and transparent consultancy',
    'Comprehensive support through all stages',
    'Building lasting relationships with students'
  ];

  const visionPoints = [
    '100% student success and satisfaction',
    'Expanding services to more countries',
    'Innovating in educational consulting',
    'Creating a global network of alumni'
  ];

  return (
    <section className={styles.purposeSection}>
      {/* Enhanced Background Effects */}
      <div className={styles.backgroundEffects}>
        {/* Hexagonal Grid Pattern */}
        <div className={styles.hexagonalGrid}>
          {[...Array(12)].map((_, index) => (
            <div key={index} className={styles.hexagon}></div>
          ))}
        </div>
        
        {/* Flowing Lines */}
        <div className={styles.flowingLines}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className={styles.gradientOrbs}>
          {[...Array(8)].map((_, index) => (
            <div key={index} className={styles.gradientOrb}></div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <i className="fa-solid fa-bullseye" style={{fontStyle: 'normal'}}></i>
            <span>Our Purpose</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Our Mission & <span className={styles.titleHighlight}>Vision</span>
          </h2>
          <p className={styles.sectionDescription}>
            We are committed to making international education accessible for all ambitious students, providing ethical guidance and personalized support throughout their journey.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className={styles.purposeGrid}>
          {/* Mission Section */}
          <div className={styles.purposeCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <i className="fa-solid fa-compass" style={{fontStyle: 'normal'}}></i>
              </div>
              <h3 className={styles.cardTitle}>Our Mission</h3>
            </div>
            <p className={styles.cardDescription}>
              To provide personalized guidance and support to students pursuing international education, ensuring they make informed decisions aligned with their academic and career goals.
            </p>
            <div className={styles.stepsList}>
              {missionPoints.map((point, index) => (
                <div 
                  key={index}
                  className={styles.stepItem}
                  style={{'--delay': `${index * 0.2}s`} as React.CSSProperties}
                >
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <span className={styles.stepText}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className={styles.purposeCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <i className="fa-solid fa-eye" style={{fontStyle: 'normal'}}></i>
              </div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
            </div>
            <p className={styles.cardDescription}>
              To be the leading education consultancy known for our integrity, personalized approach, and successful student outcomes in the international education market.
            </p>
            <div className={styles.stepsList}>
              {visionPoints.map((point, index) => (
                <div 
                  key={index}
                  className={styles.stepItem}
                  style={{'--delay': `${(index + 4) * 0.2}s`} as React.CSSProperties}
                >
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <span className={styles.stepText}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
