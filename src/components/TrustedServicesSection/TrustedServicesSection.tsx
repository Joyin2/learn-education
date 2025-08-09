'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './TrustedServicesSection.module.css';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function TrustedServicesSection() {
  const [counters, setCounters] = useState({
    students: 0,
    universities: 0,
    countries: 0,
    successRate: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const trustRef = useRef<HTMLDivElement>(null);

  // Set up intersection observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startCounterAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (trustRef.current) {
      observer.observe(trustRef.current);
    }

    return () => {
      if (trustRef.current) {
        observer.unobserve(trustRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounterAnimation = () => {
    // Prevent multiple animations
    if (counters.students > 0) return;

    const targets = { students: 1000, universities: 130, countries: 5, successRate: 98 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);

      setCounters({
        students: Math.floor(targets.students * progress),
        universities: Math.floor(targets.universities * progress),
        countries: Math.floor(targets.countries * progress),
        successRate: Math.floor(targets.successRate * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  return (
    <section className={styles.trustedServicesSection}>
      {/* Floating particles background */}
      <div className={styles.particlesContainer}>
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`${styles.particle} ${styles[`particle${i % 5}`]}`}></div>
        ))}
      </div>

      {/* Animated background waves */}
      <div className={styles.wavesContainer}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.trustedContent}>
          {/* Enhanced Trust Section */}
          <ScrollAnimationWrapper animation="fadeIn">
            <div ref={trustRef} className={styles.trustSection}>
              {/* Main Trust Badge */}
              <ScrollAnimationWrapper animation="scale" delay={0.1}>
                <div className={styles.trustBadge}>
                  <div className={styles.trustBadgeContent}>
                    <div className={styles.trustIcon}>
                      <i className="fa-solid fa-shield-check"></i>
                    </div>
                    <div className={styles.trustInfo}>
                      <span className={styles.trustText}>Trusted by {counters.students || 1000}+ Students</span>
                      <div className={styles.trustStars}>
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>

              {/* Enhanced Stats Grid */}
              <ScrollAnimationWrapper animation="slideUp" delay={0.2}>
                <div className={styles.statsGrid}>
                  <ScrollAnimationWrapper animation="scale" delay={0.3}>
                    <div className={`${styles.statCard} ${styles.statCard1}`}>
                      <div className={styles.statIcon}>
                        <i className="fa-solid fa-graduation-cap"></i>
                      </div>
                      <div className={styles.statNumber}>
                        {counters.students || 1000}+
                      </div>
                      <div className={styles.statLabel}>Happy Students</div>
                      <div className={styles.statGlow}></div>
                    </div>
                  </ScrollAnimationWrapper>
                  <ScrollAnimationWrapper animation="scale" delay={0.4}>
                    <div className={`${styles.statCard} ${styles.statCard2}`}>
                      <div className={styles.statIcon}>
                        <i className="fa-solid fa-university"></i>
                      </div>
                      <div className={styles.statNumber}>
                        {counters.universities || 130}+
                      </div>
                      <div className={styles.statLabel}>Partner Universities</div>
                      <div className={styles.statGlow}></div>
                    </div>
                  </ScrollAnimationWrapper>
                  <ScrollAnimationWrapper animation="scale" delay={0.5}>
                    <div className={`${styles.statCard} ${styles.statCard3}`}>
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
                  <ScrollAnimationWrapper animation="scale" delay={0.6}>
                    <div className={`${styles.statCard} ${styles.statCard4}`}>
                      <div className={styles.statIcon}>
                        <i className="fa-solid fa-chart-line"></i>
                      </div>
                      <div className={styles.statNumber}>
                        {counters.successRate || 98}%
                      </div>
                      <div className={styles.statLabel}>Success Rate</div>
                      <div className={styles.statGlow}></div>
                    </div>
                  </ScrollAnimationWrapper>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </ScrollAnimationWrapper>

          {/* Section Header */}
          <ScrollAnimationWrapper animation="slideUp" delay={0.7}>
            <div className={styles.sectionHeader}>
              <ScrollAnimationWrapper animation="fadeIn" delay={0.8}>
                <div className={styles.titleWrapper}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.titleWord}>Your</span>
                    <span className={styles.titleWord}>Education</span>
                    <span className={styles.titleWord}>Journey</span>
                    <span className={styles.titleHighlight}>Begins Here</span>
                  </h2>
                  <div className={styles.titleUnderline}></div>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="slideUp" delay={0.9}>
                <p className={styles.sectionDescription}>
                  Facilitating admissions for both Local and International students in{' '}
                  <span className={styles.highlight}>{counters.universities || 130}+ Universities</span> across{' '}
                  <span className={styles.highlight}>{counters.countries || 5} Countries</span> with{' '}
                  <span className={styles.highlight}>{counters.successRate || 98}% success rate</span>
                </p>
              </ScrollAnimationWrapper>
            </div>
          </ScrollAnimationWrapper>

          {/* Universities Grid */}
          <ScrollAnimationWrapper animation="slideLeft" delay={1.0}>
            <div className={styles.universitiesGrid}>
              <ScrollAnimationWrapper animation="fadeIn" delay={1.1}>
                <h3 className={styles.gridTitle}>Study Destinations</h3>
              </ScrollAnimationWrapper>
              <div className={styles.universityList}>
                <ScrollAnimationWrapper animation="slideRight" delay={1.2}>
                  <a className={styles.universityItem} href="/universities/uk">
                    <span className={`${styles.universityFlag} ${styles.flagUK}`}></span>
                    <span className={styles.universityName}>UK Universities</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animation="slideRight" delay={1.25}>
                  <a className={styles.universityItem} href="/usa-universities">
                    <span className={`${styles.universityFlag} ${styles.flagUSA}`}></span>
                    <span className={styles.universityName}>USA Universities</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animation="slideRight" delay={1.3}>
                  <a className={styles.universityItem} href="/universities/canada">
                    <span className={`${styles.universityFlag} ${styles.flagCanada}`}></span>
                    <span className={styles.universityName}>Canada Universities</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animation="slideRight" delay={1.35}>
                  <a className={styles.universityItem} href="/ireland-universities">
                    <span className={`${styles.universityFlag} ${styles.flagIreland}`}></span>
                    <span className={styles.universityName}>Ireland Universities</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animation="slideRight" delay={1.4}>
                  <a className={styles.universityItem} href="/australian-universities">
                    <span className={`${styles.universityFlag} ${styles.flagAustralia}`}></span>
                    <span className={styles.universityName}>Australia Universities</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animation="slideRight" delay={1.45}>
                  <a className={styles.universityItem} href="/new-zealand-universities">
                    <span className={`${styles.universityFlag} ${styles.flagNewZealand}`}></span>
                    <span className={styles.universityName}>New Zealand Universities</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Services Grid */}
          <ScrollAnimationWrapper animation="fadeIn" delay={1.5}>
            <div className={styles.servicesSection}>
              <ScrollAnimationWrapper animation="slideUp" delay={1.6}>
                <h2 className={styles.servicesTitle}>Our Expert Services</h2>
              </ScrollAnimationWrapper>
              <div className={styles.servicesGrid}>
                <ScrollAnimationWrapper animation="scale" delay={1.7}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <h3 className={styles.serviceTitle}>Expert University Placement</h3>
                    <p className={styles.serviceDescription}>
                      Get matched with the perfect university based on your goals and qualifications
                    </p>
                  </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animation="scale" delay={1.8}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      <i className="fa-solid fa-passport"></i>
                    </div>
                    <h3 className={styles.serviceTitle}>Visa Application Support</h3>
                    <p className={styles.serviceDescription}>
                      Complete guidance through the visa application process with high success rates
                    </p>
                  </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animation="scale" delay={1.9}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      <i className="fa-solid fa-award"></i>
                    </div>
                    <h3 className={styles.serviceTitle}>Scholarship Guidance</h3>
                    <p className={styles.serviceDescription}>
                      Discover and apply for scholarships to reduce your education costs
                    </p>
                  </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animation="scale" delay={2.0}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      <i className="fa-solid fa-headset"></i>
                    </div>
                    <h3 className={styles.serviceTitle}>24/7 Student Support</h3>
                    <p className={styles.serviceDescription}>
                      Round-the-clock assistance whenever you need help during your journey
                    </p>
                  </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animation="scale" delay={2.1}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <h3 className={styles.serviceTitle}>Career Counseling</h3>
                    <p className={styles.serviceDescription}>
                      Professional guidance to align your studies with your career aspirations
                    </p>
                  </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper animation="scale" delay={2.2}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      <i className="fa-solid fa-plane-departure"></i>
                    </div>
                    <h3 className={styles.serviceTitle}>Pre-Departure Assistance</h3>
                    <p className={styles.serviceDescription}>
                      Complete preparation support before you start your international education
                    </p>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}