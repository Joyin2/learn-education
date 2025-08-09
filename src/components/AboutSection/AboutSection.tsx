'use client';

import { useEffect, useState } from 'react';
import styles from './AboutSection.module.css';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

// Flag paths - using Supabase URLs
const flagPaths = {
  UK: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/united-kingdom.png',
  USA: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/united-states.png',
  CAN: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/canada.png',
  IRE: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/ireland.png',
  GER: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/germany.png',
};

export default function AboutSection() {
  const [counters, setCounters] = useState({
    universities: 0,
    countries: 0,
    rating: 0,
    reviews: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
      startCounterAnimation();
    }
  };

  const startCounterAnimation = () => {
    // Prevent multiple animations
    if (counters.universities > 0) return;

    const targets = { universities: 130, countries: 5, rating: 4.5, reviews: 20 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1); // Ensure progress doesn't exceed 1

      setCounters({
        universities: Math.floor(targets.universities * progress),
        countries: Math.floor(targets.countries * progress),
        rating: parseFloat((targets.rating * progress).toFixed(1)),
        reviews: Math.floor(targets.reviews * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets); // Set final values
      }
    }, stepDuration);
  };

  return (
    <section className={styles.aboutSection}>
      {/* Floating particles background */}
      <div className={styles.particlesContainer}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`${styles.particle} ${styles[`particle${i % 5}`]}`}></div>
        ))}
      </div>

      {/* Animated background waves */}
      <div className={styles.wavesContainer}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.aboutContent}>
          {/* Main heading with enhanced animations */}
          <ScrollAnimationWrapper animation="fadeIn" onInView={handleInView}>
            <div className={styles.aboutHeader}>
              <ScrollAnimationWrapper animation="slideUp" delay={0.2}>
                <div className={styles.titleWrapper}>
                  <h2 className={styles.aboutTitle}>
                    <span className={styles.titleWord}>Learn</span>
                    <span className={styles.titleWord}>Education</span>
                  </h2>
                  <div className={styles.titleUnderline}></div>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="slideUp" delay={0.4}>
                <p className={styles.aboutDescription}>
                  Facilitating admissions for both Local UK and International students in{' '}
                  <span className={styles.highlight}>130+ Universities</span> across{' '}
                  <span className={styles.highlight}>5 Countries</span>.
                </p>
              </ScrollAnimationWrapper>
            </div>
          </ScrollAnimationWrapper>

          {/* Enhanced Stats section with animations */}
          <ScrollAnimationWrapper animation="slideUp" delay={0.6}>
            <div className={styles.statsContainer}>
              <ScrollAnimationWrapper animation="scale" delay={0.8}>
                <div className={`${styles.statItem} ${styles.statItem1}`}>
                  <div className={styles.statIcon}>
                    <i className="fa-solid fa-university"></i>
                  </div>
                  <div className={styles.statNumber}>
                    {counters.universities || 130}+
                  </div>
                  <div className={styles.statLabel}>Universities</div>
                  <div className={styles.statGlow}></div>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="scale" delay={1.0}>
                <div className={`${styles.statItem} ${styles.statItem2}`}>
                  <div className={styles.statIcon}>
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <div className={styles.statNumber}>
                    {counters.countries || 5}
                  </div>
                  <div className={styles.statLabel}>Countries</div>
                  <div className={styles.statGlow}></div>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="scale" delay={1.2}>
                <div className={`${styles.statItem} ${styles.statItem3}`}>
                  <div className={styles.statIcon}>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className={styles.statNumber}>
                    {(counters.rating || 4.5).toFixed(1)}
                  </div>
                  <div className={styles.statLabel}>Star Rating</div>
                  <div className={styles.statGlow}></div>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="scale" delay={1.4}>
                <div className={`${styles.statItem} ${styles.statItem4}`}>
                  <div className={styles.statIcon}>
                    <i className="fa-solid fa-comments"></i>
                  </div>
                  <div className={styles.statNumber}>
                    {counters.reviews || 20}+
                  </div>
                  <div className={styles.statLabel}>Reviews</div>
                  <div className={styles.statGlow}></div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </ScrollAnimationWrapper>

          {/* Enhanced Rating section with animations */}
          <ScrollAnimationWrapper animation="slideLeft" delay={1.6}>
            <div className={styles.ratingSection}>
              <div className={styles.ratingWrapper}>
                <div className={styles.ratingStars}>
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <i
                      key={star}
                      className={`fa-solid ${index < 4 ? 'fa-star' : 'fa-star-half-stroke'} ${styles.ratingStar}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    ></i>
                  ))}
                </div>
                <div className={styles.ratingBadge}>
                  <span className={styles.ratingNumber}>4.5</span>
                  <div className={styles.ratingDetails}>
                    <span className={styles.ratingText}>Excellent Rating</span>
                    <span className={styles.reviewCount}>Based on 20+ Reviews</span>
                  </div>
                </div>
              </div>
              <div className={styles.trustBadges}>
                <ScrollAnimationWrapper animation="scale" delay={1.8}>
                  <div className={styles.trustBadge}>
                    <i className="fa-solid fa-shield-check"></i>
                    <span>Verified Reviews</span>
                  </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animation="scale" delay={2.0}>
                  <div className={styles.trustBadge}>
                    <i className="fa-solid fa-award"></i>
                    <span>Top Rated</span>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Enhanced Countries section with 3D effects */}
          <ScrollAnimationWrapper animation="slideRight" delay={2.2}>
            <div className={styles.countriesSection}>
              <ScrollAnimationWrapper animation="fadeIn" delay={2.4}>
                <div className={styles.countriesHeader}>
                  <h3 className={styles.countriesTitle}>
                    <span className={styles.titleIcon}>🌍</span>
                    We serve students across
                  </h3>
                  <p className={styles.countriesSubtitle}>
                    Connecting dreams to destinations worldwide
                  </p>
                </div>
              </ScrollAnimationWrapper>
              <div className={styles.countriesList}>
                {[
                  { name: 'United Kingdom', code: 'UK', universities: '40+' },
                  { name: 'United States', code: 'USA', universities: '35+' },
                  { name: 'Canada', code: 'CAN', universities: '25+' },
                  { name: 'Ireland', code: 'IRE', universities: '15+' },
                  { name: 'Germany', code: 'GER', universities: '15+' }
                ].map((country, index) => (
                  <ScrollAnimationWrapper key={country.code} animation="slideUp" delay={2.6 + index * 0.1}>
                    <div
                      className={`${styles.countryItem} ${styles[`countryItem${index + 1}`]}`}
                    >
                      <div className={styles.countryCard}>
                    <div className={styles.countryFlagWrapper}>
                      <div className={styles.countryFlag}>
                        <img
                          src={flagPaths[country.code as keyof typeof flagPaths]}
                          alt={`${country.name} flag`}
                          className={styles.flagImage}
                          onError={(e) => {
                            console.error(`Failed to load flag for ${country.code}`);
                            // Create fallback with flag emoji and country code
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div style="
                                  width: 100%;
                                  height: 100%;
                                  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
                                  display: flex;
                                  flex-direction: column;
                                  align-items: center;
                                  justify-content: center;
                                  color: white;
                                  font-weight: bold;
                                  font-size: 10px;
                                  border-radius: 8px;
                                  text-align: center;
                                ">
                                  <div style="font-size: 16px; margin-bottom: 2px;">
                                    ${country.code === 'UK' ? '🇬🇧' :
                                      country.code === 'USA' ? '🇺🇸' :
                                      country.code === 'CAN' ? '🇨🇦' :
                                      country.code === 'IRE' ? '🇮🇪' :
                                      '🇩🇪'}
                                  </div>
                                  <div>${country.code}</div>
                                </div>
                              `;
                            }
                          }}
                          onLoad={() => {
                            console.log(`Successfully loaded flag for ${country.code}`);
                          }}
                        />
                      </div>
                      <div className={styles.flagGlow}></div>
                    </div>
                    <div className={styles.countryInfo}>
                      <span className={styles.countryName}>{country.name}</span>
                      <span className={styles.countryCode}>{country.code}</span>
                      <span className={styles.universityCount}>{country.universities} Universities</span>
                    </div>
                    <div className={styles.countryHoverEffect}></div>
                      </div>
                    </div>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>


        </div>
      </div>
    </section>
  );
}
