'use client';

import styles from './PartnerEuropeanUniversities.module.css';

export default function PartnerEuropeanUniversities() {
  const universities = [
    'Sorbonne University (France)',
    'Technical University of Munich (Germany)',
    'University of Bologna (Italy)',
    'KU Leuven (Belgium)',
    'University of Copenhagen (Denmark)',
    'Delft University of Technology (Netherlands)',
    'ETH Zurich (Switzerland)',
    'Uppsala University (Sweden)',
    'University of Barcelona (Spain)',
    'University of Vienna (Austria)',
    'University of Helsinki (Finland)',
    'Charles University (Czech Republic)',
    'University of Warsaw (Poland)',
    'Heidelberg University (Germany)',
    'Sapienza University of Rome (Italy)',
    'University of Amsterdam (Netherlands)',
    'Aarhus University (Denmark)',
    'Ghent University (Belgium)',
    'University of Porto (Portugal)',
    'University of Oslo (Norway)',
    'University of Zurich (Switzerland)',
    'Complutense University of Madrid (Spain)',
    'Stockholm University (Sweden)',
    'University of Athens (Greece)',
    'University of Ljubljana (Slovenia)',
    'University of Lisbon (Portugal)'
  ];

  const features = [
    {
      icon: 'fa-solid fa-language',
      title: 'Multilingual Options',
      description: 'Programs in English and local languages'
    },
    {
      icon: 'fa-solid fa-euro-sign',
      title: 'Affordable Education',
      description: 'Many countries offer low or no tuition fees'
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Scholarship Support',
      description: 'Guidance on European funding options'
    }
  ];

  return (
    <section className={styles.partnerUniversities}>
      <div className={styles.container}>
        {/* Main Content Section */}
        <div className={styles.mainContent}>
          <div className={styles.contentLeft}>
            <h2 className={styles.sectionTitle}>Our Partner Universities</h2>
            <p className={styles.subtitle}>
              Learn Education has partnered with 25+ prestigious European universities
            </p>
            
            <div className={styles.description}>
              <p>
                At Learn Education, we are proud to collaborate with some of Europe's most prestigious universities, offering our students access to world-class education and unparalleled opportunities for personal and professional growth. Our partnerships span across multiple countries, providing a diverse range of academic programs, state-of-the-art facilities, and supportive learning environments.
              </p>
              <p>
                European education combines centuries of academic tradition with cutting-edge innovation. Our mission is to help students navigate the diverse options across the continent and find their perfect academic home in Europe.
              </p>
            </div>

            <div className={styles.brandSection}>
              <div className={styles.brandName}>Learn Education, London</div>
            </div>
          </div>

          <div className={styles.contentRight}>
            <div className={styles.universitiesList}>
              <h3 className={styles.listTitle}>
                List of Universities in Europe that Learn Education London has partnered with:
              </h3>
              <div className={styles.universitiesGrid}>
                {universities.map((university, index) => (
                  <div key={index} className={styles.universityItem}>
                    <i className="fa-solid fa-check"></i>
                    <span>{university}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>25+</div>
            <div className={styles.statLabel}>Partner Universities</div>
          </div>
        </div>

        {/* Features Section */}
        <div className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>Need Guidance?</h3>
          <p className={styles.featuresSubtitle}>
            Our education consultants are here to help you choose the right European university
          </p>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className={feature.icon}></i>
                </div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.ctaSection}>
            <a href="/contact" className={styles.ctaButton}>
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
