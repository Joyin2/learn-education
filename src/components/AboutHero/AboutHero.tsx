'use client';

import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <div className={styles.aboutHeroSection}>
      <div className={styles.heroBgElements}></div>
      <div className={styles.heroGradientOverlay}></div>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg6}>
            <div className={`${styles.heroContent} ${styles.pt20}`}>
              <div className={`${styles.heroTag} ${styles.mb20}`}>
                <span className={styles.heroTagBadge}>Learn Education London</span>
              </div>

              <h1 className={`${styles.heroTitle} ${styles.mb25}`}>
                We are committed<br />
                <span className={styles.heroTitleHighlight}>to your success.</span>
              </h1>

              <p className={`${styles.heroDescription} ${styles.textWhite} ${styles.mb30}`}>
                At Learn Education London, we offer a comprehensive range of services designed to simplify the admissions process and maximize your chances of success.
              </p>

              {/* Service Features */}
              <div className={styles.serviceFeatures}>
                <div className={styles.featureGrid}>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <i className="fa-solid fa-user-graduate" style={{fontStyle: 'normal'}}></i>
                    </div>
                    <span>Experienced admissions consultants</span>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <i className="fa-solid fa-heart" style={{fontStyle: 'normal'}}></i>
                    </div>
                    <span>Personalised advice</span>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <i className="fa-solid fa-hands-helping" style={{fontStyle: 'normal'}}></i>
                    </div>
                    <span>Expert assistance</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className={styles.heroButtons}>
                <a href="/contact" className={`${styles.btnPrimary} ${styles.btnLg}`}>
                  <i className="fa-solid fa-gift" style={{fontStyle: 'normal'}}></i>
                  Redeem Your FREE Consultation
                </a>
              </div>
            </div>
          </div>

          <div className={styles.colLg6}>
            <div className={`${styles.heroImgWrapper} ${styles.pRelative}`}>
              <div className={styles.heroImg}>
                <div className={styles.heroImageContainer}>
                  <img
                    src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation//about.jpg"
                    alt="Learn Education team and students"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                
                {/* Floating SVG Element */}
                <div className={styles.floatingSvg}>
                  <img
                    src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation//about-2.svg"
                    alt="Education illustration"
                    className={styles.svgElement}
                  />
                </div>

                {/* Success Badge */}
                <div className={`${styles.heroSuccessRate} ${styles.dNone} ${styles.dLgBlock}`}>
                  <div className={styles.heroSuccessRateBadge}>
                    <span className={styles.successRateText}>100%</span>
                    <span className={styles.successRateLabel}>Committed</span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className={`${styles.heroStatsBadge} ${styles.dNone} ${styles.dLgBlock}`}>
                  <span className={styles.statsText}>1000+</span>
                  <span className={styles.statsLabel}>Success Stories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
