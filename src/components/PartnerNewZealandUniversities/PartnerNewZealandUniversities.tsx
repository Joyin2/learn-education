'use client';

import styles from './PartnerNewZealandUniversities.module.css';

export default function PartnerNewZealandUniversities() {
  const universities = [
    'University of Auckland',
    'University of Otago',
    'Victoria University of Wellington',
    'University of Canterbury',
    'Massey University',
    'Auckland University of Technology',
    'Lincoln University',
    'University of Waikato'
  ];

  const features = [
    {
      icon: 'fa-solid fa-mountain',
      title: 'Natural Beauty',
      description: 'Study in one of the world\'s most scenic countries'
    },
    {
      icon: 'fa-solid fa-briefcase',
      title: 'Work Opportunities',
      description: 'Work up to 20 hours per week while studying'
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Scholarship Support',
      description: 'Guidance on New Zealand funding options'
    }
  ];

  const ctaFeatures = [
    'Free Consultation',
    'Expert Guidance',
    'Application Support'
  ];

  return (
    <section className={styles.partnerUniversities}>
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Partner Universities</h2>
          <p className={styles.sectionSubtitle}>
            Learn Education has partnered with 8+ prestigious New Zealand universities
          </p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.contentLeft}>
            <div className={styles.headerSection}>
              <p className={styles.missionText}>
                At Learn Education, we are proud to collaborate with New Zealand's most prestigious universities,
                offering our students access to world-class education in one of the most beautiful and welcoming countries.
                Our partnerships span across both the North and South Islands, providing a diverse range of academic programs,
                state-of-the-art facilities, and supportive learning environments.
              </p>

              <p className={styles.missionText}>
                New Zealand combines academic excellence with a relaxed lifestyle and stunning natural beauty.
                Our mission is to help students find their perfect academic home in New Zealand, where they can thrive
                both academically and personally while experiencing the unique Kiwi culture.
              </p>

              <div className={styles.statsSection}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>8+</span>
                  <span className={styles.statLabel}>Partner Universities</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>1,500+</span>
                  <span className={styles.statLabel}>Students Successfully placed in New Zealand universities</span>
                </div>
              </div>
            </div>

            <div className={styles.brandSection}>
              <div className={styles.brandName}>Learn Education, London</div>
            </div>
          </div>

          <div className={styles.contentRight}>
            <div className={styles.universitiesList}>
              <h3 className={styles.listTitle}>
                List of Universities in New Zealand that Learn Education London has partnered with:
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

        {/* Features Section */}
        <div className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>Need Guidance?</h3>
          <p className={styles.featuresSubtitle}>
            Our education consultants are here to help you choose the right New Zealand university
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

        {/* Final CTA Section */}
        <div className={styles.finalCtaSection}>
          <div className={styles.finalCtaContent}>
            <h3 className={styles.finalCtaTitle}>
              Ready to Start Your Academic Journey in New Zealand?
            </h3>
            <p className={styles.finalCtaDescription}>
              Get personalized guidance from our education consultants to find your perfect university match.
              Our experts will help you navigate the application process, visa requirements, and secure your
              place at a top New Zealand university.
            </p>

            <div className={styles.finalCtaFeatures}>
              {ctaFeatures.map((feature, index) => (
                <div key={index} className={styles.finalCtaFeature}>
                  <i className="fa-solid fa-check"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className={styles.finalCtaButtons}>
              <a href="/contact" className={styles.finalCtaButton}>
                Book Your Free Consultation
              </a>
              <p className={styles.finalCtaNote}>
                No obligation. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
