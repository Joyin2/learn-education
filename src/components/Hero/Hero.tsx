'use client';

import styles from './Hero.module.css';
import ScrollAnimationWrapper, { StaggerContainer } from '@/components/ScrollAnimationWrapper';
import ParallaxSection, { ParallaxBackground } from '@/components/ParallaxSection';

export default function EnhancedHeroSection() {
  return (
    <div className={styles.enhancedHeroSection}>
      <ParallaxBackground speed={0.3}>
        <div className={styles.heroBgElements}></div>
        <div className={styles.heroGradientOverlay}></div>
      </ParallaxBackground>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg7}>
            <div className={`${styles.heroContent} ${styles.pt20}`}>
              <div className={styles.heroTextWrapper}>
              </div>

              <ScrollAnimationWrapper animation="fadeIn" delay={0.2}>
                <h1 className={`${styles.heroTitle} ${styles.mb25}`}>
                  Premier Education Consultancy for{' '}
                  <span className={styles.heroTitleHighlight}>UK & International Students</span>
                </h1>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="slideUp" delay={0.4}>
                <p className={`${styles.heroDescription} ${styles.textWhite} ${styles.mb30}`}>
                  Get personalized guidance and secure your spot at top universities in the UK, USA, Canada, Ireland, and Germany. FREE 1-on-1 consultation available now!
                </p>
              </ScrollAnimationWrapper>

              <StaggerContainer staggerDelay={0.2} className={styles.heroCtaButtons}>
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
              </StaggerContainer>
            </div>
          </div>

          <div className={styles.colLg5}>
            <ScrollAnimationWrapper animation="slideRight" delay={0.6}>
              <div className={`${styles.heroImgWrapper} ${styles.pRelative}`}>
                <div className={styles.heroImg}>
                  <ParallaxSection speed={0.2} direction="up">
                    <div className={styles.heroImageContainer}>
                      <img
                        src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/hero-img-2.png"
                        alt="students celebrating graduation"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </ParallaxSection>
                  
                  <ScrollAnimationWrapper animation="scale" delay={1.0}>
                    <div className={`${styles.heroSuccessRate} ${styles.dNone} ${styles.dLgBlock}`}>
                      <div className={styles.heroSuccessRateBadge}>
                        <span className={styles.successRateText}>95%</span>
                        <span className={styles.successRateLabel}>Success Rate</span>
                      </div>
                    </div>
                  </ScrollAnimationWrapper>
                  
                  <ScrollAnimationWrapper animation="scale" delay={1.2}>
                    <div className={styles.heroStatsBadge}>
                      <span className={styles.statsText}>
                        1000+
                      </span>
                      <span className={styles.statsLabel}>
                        Students Placed
                      </span>
                    </div>
                  </ScrollAnimationWrapper>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
