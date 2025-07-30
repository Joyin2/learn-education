'use client';

import styles from './WhoWeAre.module.css';

export default function WhoWeAre() {
  const stats = [
    {
      number: '10+',
      label: 'Years Experience',
      icon: 'fa-calendar-alt'
    },
    {
      number: '5',
      label: 'Countries',
      icon: 'fa-globe'
    },
    {
      number: '1000+',
      label: 'Students Placed',
      icon: 'fa-user-graduate'
    }
  ];

  return (
    <section className={styles.whoWeAreSection}>
      {/* Animated Background Effects */}
      <div className={styles.backgroundEffects}>
        {/* Floating Orbs */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className={styles.floatingOrb}></div>
        ))}
        
        {/* Geometric Shapes */}
        <div className={styles.geometricShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
          <div className={styles.shape4}></div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <i className="fa-solid fa-users" style={{fontStyle: 'normal'}}></i>
            <span>Who We Are</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Empowering Students Through <span className={styles.titleHighlight}>International Education</span>
          </h2>
          <p className={styles.sectionDescription}>
            Learn Education London is a premier educational consultancy dedicated to guiding students towards academic success abroad. With personalized support and expert guidance, we help transform educational aspirations into reality.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={styles.statCard}
                style={{'--delay': `${index * 0.2}s`} as React.CSSProperties}
              >
                <div className={styles.statIcon}>
                  <i className={`fa-solid ${stat.icon}`} style={{fontStyle: 'normal'}}></i>
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
                <div className={styles.statGlow}></div>
                <div className={styles.statShimmer}></div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
