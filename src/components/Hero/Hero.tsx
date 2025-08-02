'use client';

import styles from './Hero.module.css';

export default function EnhancedHeroSection() {
  return (
    <div className={styles.enhancedHeroSection}>
      <div className={styles.heroBgElements}></div>
      <div className={styles.heroGradientOverlay}></div>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg7}>
            <div className={`${styles.heroContent} ${styles.pt20}`}>
              <div className={`${styles.heroTag} ${styles.mb20}`}>
                <span className={styles.heroTagBadge}>Trusted by 1000+ Students</span>
              </div>

              <div className={styles.heroTextWrapper}>
                <span className={`${styles.heroSubtitle} ${styles.textWhite} ${styles.mb15}`}>Your Education Journey Begins Here</span>
                {/* University list for desktop - shown in original position */}
                <div className={`${styles.universityList} ${styles.universityListDesktop}`}>
                  <a className={styles.universityItem} href="/universities/uk">
                    <span className={`${styles.universityFlag} ${styles.flagUK}`}></span>
                    UK Universities
                  </a>
                  <a className={styles.universityItem} href="/usa-universities">
                    <span className={`${styles.universityFlag} ${styles.flagUSA}`}></span>
                    USA Universities
                  </a>
                  <a className={styles.universityItem} href="/universities/canada">
                    <span className={`${styles.universityFlag} ${styles.flagCanada}`}></span>
                    Canada Universities
                  </a>
                  <a className={styles.universityItem} href="/ireland-universities">
                    <span className={`${styles.universityFlag} ${styles.flagIreland}`}></span>
                    Ireland Universities
                  </a>
                  <a className={styles.universityItem} href="/australian-universities">
                    <span className={`${styles.universityFlag} ${styles.flagAustralia}`}></span>
                    Australia Universities
                  </a>
                  <a className={styles.universityItem} href="/new-zealand-universities">
                    <span className={`${styles.universityFlag} ${styles.flagNewZealand}`}></span>
                    New Zealand Universities
                  </a>
                </div>
              </div>

              <h1 className={`${styles.heroTitle} ${styles.mb25}`}>
                Premier Education Consultancy for{' '}
                <span className={styles.heroTitleHighlight}>UK & International Students</span>
              </h1>

              <p className={`${styles.heroDescription} ${styles.textWhite} ${styles.mb30}`}>
                Get personalized guidance and secure your spot at top universities in the UK, USA, Canada, Ireland, and Germany. FREE 1-on-1 consultation available now!
              </p>

              {/* University list for mobile - shown after description */}
              <div className={`${styles.universityList} ${styles.universityListMobile} ${styles.mb30}`}>
                <a className={styles.universityItem} href="/universities/uk">
                  <span className={`${styles.universityFlag} ${styles.flagUK}`}></span>
                  UK Universities
                </a>
                <a className={styles.universityItem} href="/usa-universities">
                  <span className={`${styles.universityFlag} ${styles.flagUSA}`}></span>
                  USA Universities
                </a>
                <a className={styles.universityItem} href="/universities/canada">
                  <span className={`${styles.universityFlag} ${styles.flagCanada}`}></span>
                  Canada Universities
                </a>
                <a className={styles.universityItem} href="/ireland-universities">
                  <span className={`${styles.universityFlag} ${styles.flagIreland}`}></span>
                  Ireland Universities
                </a>
                <a className={styles.universityItem} href="/australian-universities">
                  <span className={`${styles.universityFlag} ${styles.flagAustralia}`}></span>
                  Australia Universities
                </a>
                <a className={styles.universityItem} href="/new-zealand-universities">
                  <span className={`${styles.universityFlag} ${styles.flagNewZealand}`}></span>
                  New Zealand Universities
                </a>
              </div>



              <div className={styles.heroCtaButtons}>
                <a
                  href="/contact"
                  className={styles.btnPrimary}
                  aria-label="Get free consultation - Contact us now"
                >
                  <span>Get Free Consultation</span>
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>
                <a
                  href="/universities"
                  className={styles.btnSecondary}
                  aria-label="Explore universities - Browse our partner institutions"
                >
                  <span>Explore Universities</span>
                  <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.colLg5}>
            <div className={`${styles.heroImgWrapper} ${styles.pRelative}`}>
              <div className={styles.heroImg}>
                <div className={styles.heroImageContainer}>
                  <img
                    src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/hero-img-2.png"
                    alt="students celebrating graduation"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className={`${styles.heroSuccessRate} ${styles.dNone} ${styles.dLgBlock}`}>
                  <div className={styles.heroSuccessRateBadge}>
                    <span className={styles.successRateText}>95%</span>
                    <span className={styles.successRateLabel}>Success Rate</span>
                  </div>
                </div>
                
                {/* Additional stats badges */}
                <div className={styles.heroStatsBadge}>
                  <span className={styles.statsText}>
                    1000+
                  </span>
                  <span className={styles.statsLabel}>
                    Students Placed
                  </span>
                </div>
              </div>

              {/* Feature list below image */}
              <div className={`${styles.heroFeatures} ${styles.heroFeaturesRight}`}>
                <div className={styles.heroFeatureList}>
                  <ul>
                    <li><i className="fa-solid fa-check"></i> Expert University Placement</li>
                    <li><i className="fa-solid fa-check"></i> Visa Application Support</li>
                    <li><i className="fa-solid fa-check"></i> Scholarship Guidance</li>
                    <li><i className="fa-solid fa-check"></i> 24/7 Student Support</li>
                    <li><i className="fa-solid fa-check"></i> Career Counseling</li>
                    <li><i className="fa-solid fa-check"></i> Pre-Departure Assistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
