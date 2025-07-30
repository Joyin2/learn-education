'use client';

import styles from './GlobalVision.module.css';

export default function GlobalVision() {
  const countries = [
    { name: 'India', flag: '🇮🇳', color: '#FF9933' },
    { name: 'Pakistan', flag: '🇵🇰', color: '#01411C' },
    { name: 'Bangladesh', flag: '🇧🇩', color: '#006A4E' },
    { name: 'Dubai', flag: '🇦🇪', color: '#CE1126' },
  ];

  return (
    <section className={styles.globalVisionSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.worldMap}></div>
        <div className={styles.constellation}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <i className="fa-solid fa-globe-americas" style={{fontStyle: 'normal'}}></i>
            <span>Global Education Vision</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.titleHighlight}>Global Vision</span>
          </h2>
          <p className={styles.sectionDescription}>
            Our long-term vision extends beyond admissions. We are planning to expand our presence to countries such as India, Pakistan, Bangladesh, and Dubai to cater to the growing demand for quality education.
          </p>
        </div>

        {/* Vision Content */}
        <div className={styles.visionContent}>
          <div className={styles.visionCard}>
            <div className={styles.cardIcon}>
              <i className="fa-solid fa-rocket" style={{fontStyle: 'normal'}}></i>
            </div>
            <h3 className={styles.cardTitle}>One-Stop Solution</h3>
            <p className={styles.cardDescription}>
              By offering a one-stop solution, Learn Education ensures that students can pursue their academic aspirations in prestigious UK institutions while receiving full support both academically and personally.
            </p>
            <div className={styles.cardFeatures}>
              <div className={styles.featureItem}>
                <i className="fa-solid fa-graduation-cap" style={{fontStyle: 'normal'}}></i>
                <span>Academic Excellence</span>
              </div>
              <div className={styles.featureItem}>
                <i className="fa-solid fa-hands-helping" style={{fontStyle: 'normal'}}></i>
                <span>Personal Support</span>
              </div>
              <div className={styles.featureItem}>
                <i className="fa-solid fa-university" style={{fontStyle: 'normal'}}></i>
                <span>Prestigious Institutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className={styles.countriesSection}>
          <h3 className={styles.countriesTitle}>Expanding to Key Markets</h3>
          <div className={styles.countriesGrid}>
            {countries.map((country, index) => (
              <div 
                key={country.name} 
                className={styles.countryCard}
                style={{'--delay': `${index * 0.2}s`, '--accent-color': country.color} as React.CSSProperties}
              >
                <div className={styles.countryFlag}>
                  <span className={styles.flagEmoji}>{country.flag}</span>
                </div>
                <div className={styles.countryInfo}>
                  <h4 className={styles.countryName}>{country.name}</h4>
                  <div className={styles.countryStatus}>
                    <div className={styles.statusDot}></div>
                    <span>Coming Soon</span>
                  </div>
                </div>
                <div className={styles.countryOverlay}>
                  <div className={styles.overlayContent}>
                    <i className="fa-solid fa-map-marker-alt" style={{fontStyle: 'normal'}}></i>
                    <span>Future Hub</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Stats */}
        <div className={styles.globalStats}>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <i className="fa-solid fa-earth-americas" style={{fontStyle: 'normal'}}></i>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>4+</div>
              <div className={styles.statLabel}>Countries</div>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <i className="fa-solid fa-users-line" style={{fontStyle: 'normal'}}></i>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>50M+</div>
              <div className={styles.statLabel}>Potential Students</div>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <i className="fa-solid fa-building-columns" style={{fontStyle: 'normal'}}></i>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Partner Universities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
