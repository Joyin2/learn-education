'use client';

import styles from './GlobalVision.module.css';

export default function GlobalVision() {
  const countries = [
    {
      name: 'United Kingdom',
      flag: '��',
      color: '#012169',
      universities: '40+ Top-Ranked Universities',
      features: [
        'World-class education system',
        'Post-study work opportunities',
        'Minimum IELTS: 5.0'
      ],
      buttonText: 'Learn More'
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      color: '#B22234',
      universities: '40+ Prestigious Institutions',
      features: [
        'Cutting-edge research facilities',
        'Flexible education pathways',
        'Minimum IELTS: 6.0'
      ],
      buttonText: 'Learn More'
    },
    {
      name: 'Ireland',
      flag: '��',
      color: '#169B62',
      universities: '10+ Quality Universities',
      features: [
        'English-speaking environment',
        'EU membership benefits',
        'Welcoming community'
      ],
      buttonText: 'Learn More'
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      color: '#FF0000',
      universities: '10+ Leading Universities',
      features: [
        'Excellent quality of life',
        'Immigration pathways',
        'Affordable tuition fees'
      ],
      buttonText: 'Learn More'
    },
    {
      name: 'Australia',
      flag: '��',
      color: '#012169',
      universities: '15+ Top Universities',
      features: [
        'High quality of life',
        'Post-study work rights',
        'Minimum IELTS: 5.5'
      ],
      buttonText: 'Explore Australian Universities'
    },
    {
      name: 'New Zealand',
      flag: '🇳🇿',
      color: '#012169',
      universities: '8+ Quality Institutions',
      features: [
        'Excellent education system',
        'Safe and welcoming environment',
        'Minimum IELTS: 5.5'
      ],
      buttonText: 'Explore New Zealand Universities'
    },
    {
      name: 'Europe',
      flag: '🇪🇺',
      color: '#003399',
      universities: '50+ Countries Available',
      features: [
        'Germany • Hungary • Denmark • Finland • Sweden • Netherlands',
        'Quality education systems',
        'Minimum IELTS: 4.5'
      ],
      buttonText: 'Explore European Universities',
      isEurope: true
    }
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
            <span>Study Abroad Destinations</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Choose Your <span className={styles.titleHighlight}>Study Destination</span>
          </h2>
          <p className={styles.sectionDescription}>
            Explore world-class education opportunities across top destinations. From prestigious UK universities to innovative American institutions, find the perfect place to advance your academic journey.
          </p>
        </div>

        {/* Countries Grid */}
        <div className={styles.countriesSection}>
          <div className={styles.countriesGrid}>
            {countries.map((country, index) => (
              <div
                key={country.name}
                className={`${styles.countryCard} ${country.isEurope ? styles.europeCard : ''}`}
                style={{'--delay': `${index * 0.1}s`, '--accent-color': country.color} as React.CSSProperties}
              >
                <div className={styles.countryFlag}>
                  <span className={styles.flagEmoji}>{country.flag}</span>
                </div>
                <div className={styles.countryHeader}>
                  <h3 className={styles.countryName}>{country.name}</h3>
                  <p className={styles.countryUniversities}>{country.universities}</p>
                </div>
                <div className={styles.countryFeatures}>
                  {country.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={styles.featureItem}>
                      {country.isEurope && featureIndex === 0 ? (
                        <div className={styles.europeCountries}>
                          <span className={styles.featuredLabel}>Featured Countries:</span>
                          <span className={styles.countryList}>{feature}</span>
                        </div>
                      ) : (
                        <span className={styles.featureText}>{feature}</span>
                      )}
                    </div>
                  ))}
                </div>
                <button className={styles.countryButton}>
                  {country.buttonText}
                </button>
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
              <div className={styles.statNumber}>7+</div>
              <div className={styles.statLabel}>Study Destinations</div>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <i className="fa-solid fa-graduation-cap" style={{fontStyle: 'normal'}}></i>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>150+</div>
              <div className={styles.statLabel}>Top Universities</div>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <i className="fa-solid fa-users-line" style={{fontStyle: 'normal'}}></i>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Students Placed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
