'use client';

import styles from './WhyChooseUK.module.css';

export default function WhyChooseUK() {
  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <div className={styles.titleSection}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.titleWhy}>Why choose</span>
                <span className={styles.titleUK}>UK?</span>
              </h2>
            </div>

            <p className={styles.description}>
              Studying in the UK offers unparalleled opportunities for academic and personal growth. With world-renowned universities, cutting-edge research, and a commitment to innovation, the UK provides a top-tier education in a dynamic, diverse environment. Whether you're looking to advance your career, explore new fields, or broaden your horizons, the UK is the perfect place to achieve your goals and shape your future.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-university"></i>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Prestigious Universities</h3>
                  <p className={styles.featureDescription}>Home to world-class institutions with centuries of academic excellence</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Global Networking Opportunities</h3>
                  <p className={styles.featureDescription}>Connect with students and professionals from around the world</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Cultural Diversity and Inclusion</h3>
                  <p className={styles.featureDescription}>Experience a welcoming, multicultural environment that celebrates diversity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={styles.rightContent}>
            <div className={styles.imageContainer}>
              <img 
                src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation//uk.svg" 
                alt="UK Education Illustration" 
                className={styles.ukImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.overlayIcon}>🇬🇧</span>
                  <span className={styles.overlayText}>Study in UK</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className={styles.floatingStats}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>4</span>
                <span className={styles.statLabel}>Universities in Top 10</span>
              </div>
              
              <div className={styles.statCard}>
                <span className={styles.statNumber}>130+</span>
                <span className={styles.statLabel}>Universities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
      </div>
    </section>
  );
}
