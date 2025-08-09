'use client';

import { useEffect, useState } from 'react';
import styles from './GlobalEducationSection.module.css';

// Flag paths for different countries
const flagPaths = {
  UK: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/united-kingdom.png',
  USA: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/united-states.png',
  IRE: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/ireland.png',
  CAN: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/canada.png',
  GER: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/germany.png',
  // European countries with Supabase URLs
  HUN: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/hungary.png',
  DEN: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/denmark.png',
  FIN: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/finland.png',
  SWE: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/sweden.png',
  NET: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/netherlands.png',
  // Australia and New Zealand with Supabase URLs
  AUS: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/australia.png',
  NZ: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/new-zealand.png',
};

export default function GlobalEducationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    universities: 0,
    successRate: 0,
    students: 0,
    experience: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      startCounterAnimation();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const startCounterAnimation = () => {
    const targets = { universities: 130, successRate: 95, students: 5000, experience: 15 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      
      setCounters({
        universities: Math.floor(targets.universities * progress),
        successRate: Math.floor(targets.successRate * progress),
        students: Math.floor(targets.students * progress),
        experience: Math.floor(targets.experience * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  return (
    <section className={styles.globalEducationSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.headerSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.mainTitle}>GLOBAL EDUCATION OPPORTUNITIES</h2>
          <h3 className={styles.subtitle}>Empowering Futures Worldwide:</h3>
          <h4 className={styles.tagline}>Your Gateway to Education in Top Global Destinations</h4>
          <p className={styles.description}>
            Explore premium educational opportunities across five countries with our comprehensive support services.
            Each destination offers unique advantages for academic excellence and career growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{counters.universities || 130}+</div>
            <div className={styles.statLabel}>Partner Universities</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{counters.successRate || 95}%</div>
            <div className={styles.statLabel}>Success Rate</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{counters.students || 5000}+</div>
            <div className={styles.statLabel}>Students Placed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{counters.experience || 15}+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className={styles.countriesGrid}>
          {/* UK Card */}
          <div className={`${styles.countryCard} ${styles.popularChoice}`}>
            <div className={styles.popularBadge}>Popular Choice</div>
            <div className={styles.flagWrapper}>
              <img src={flagPaths.UK} alt="UK Flag" className={styles.flagImage} />
            </div>
            <h3 className={styles.countryName}>United Kingdom</h3>
            <p className={styles.universityCount}>40+ Top-Ranked Universities</p>
            <ul className={styles.featuresList}>
              <li>World-class education system</li>
              <li>Post-study work opportunities</li>
              <li>Minimum IELTS: 5.0</li>
            </ul>
            <a href="/universities/uk" className={styles.learnMoreBtn}>Learn More</a>
          </div>

          {/* USA Card */}
          <div className={styles.countryCard}>
            <div className={styles.flagWrapper}>
              <img src={flagPaths.USA} alt="USA Flag" className={styles.flagImage} />
            </div>
            <h3 className={styles.countryName}>United States</h3>
            <p className={styles.universityCount}>40+ Prestigious Institutions</p>
            <ul className={styles.featuresList}>
              <li>Cutting-edge research facilities</li>
              <li>Flexible education pathways</li>
              <li>Minimum IELTS: 6.0</li>
            </ul>
            <a href="/usa-universities" className={styles.learnMoreBtn}>Learn More</a>
          </div>

          {/* Ireland Card */}
          <div className={styles.countryCard}>
            <div className={styles.flagWrapper}>
              <img src={flagPaths.IRE} alt="Ireland Flag" className={styles.flagImage} />
            </div>
            <h3 className={styles.countryName}>Ireland</h3>
            <p className={styles.universityCount}>10+ Quality Universities</p>
            <ul className={styles.featuresList}>
              <li>English-speaking environment</li>
              <li>EU membership benefits</li>
              <li>Welcoming community</li>
            </ul>
            <a href="/universities/ireland" className={styles.learnMoreBtn}>Learn More</a>
          </div>

          {/* Canada Card */}
          <div className={styles.countryCard}>
            <div className={styles.flagWrapper}>
              <img src={flagPaths.CAN} alt="Canada Flag" className={styles.flagImage} />
            </div>
            <h3 className={styles.countryName}>Canada</h3>
            <p className={styles.universityCount}>10+ Leading Universities</p>
            <ul className={styles.featuresList}>
              <li>Excellent quality of life</li>
              <li>Immigration pathways</li>
              <li>Affordable tuition fees</li>
            </ul>
            <a href="/universities/canada" className={styles.learnMoreBtn}>Learn More</a>
          </div>

          {/* Australia Card */}
          <div className={styles.countryCard}>
            <div className={styles.flagWrapper}>
              <img src={flagPaths.AUS} alt="Australia Flag" className={styles.flagImage} />
            </div>
            <h3 className={styles.countryName}>Australia</h3>
            <p className={styles.universityCount}>15+ Top Universities</p>
            <ul className={styles.featuresList}>
              <li>High quality of life</li>
              <li>Post-study work rights</li>
              <li>Minimum IELTS: 5.5</li>
            </ul>
            <a href="/australian-universities" className={styles.learnMoreBtn}>Explore Australian Universities</a>
          </div>

          {/* New Zealand Card */}
          <div className={styles.countryCard}>
            <div className={styles.flagWrapper}>
              <img src={flagPaths.NZ} alt="New Zealand Flag" className={styles.flagImage} />
            </div>
            <h3 className={styles.countryName}>New Zealand</h3>
            <p className={styles.universityCount}>8+ Quality Institutions</p>
            <ul className={styles.featuresList}>
              <li>Excellent education system</li>
              <li>Safe and welcoming environment</li>
              <li>Minimum IELTS: 5.5</li>
            </ul>
            <a href="/new-zealand-universities" className={styles.learnMoreBtn}>Explore New Zealand Universities</a>
          </div>

          {/* Europe Card */}
          <div className={`${styles.countryCard} ${styles.europeCard}`}>
            <h3 className={styles.countryName}>Europe</h3>
            <p className={styles.universityCount}>50+ Countries Available</p>
            <div className={styles.europeanFlags}>
              <img src={flagPaths.GER} alt="Germany" className={styles.smallFlag} />
              <img src={flagPaths.HUN} alt="Hungary" className={styles.smallFlag} />
              <img src={flagPaths.DEN} alt="Denmark" className={styles.smallFlag} />
              <img src={flagPaths.FIN} alt="Finland" className={styles.smallFlag} />
              <img src={flagPaths.SWE} alt="Sweden" className={styles.smallFlag} />
              <img src={flagPaths.NET} alt="Netherlands" className={styles.smallFlag} />
            </div>
            <div className={styles.featuredCountries}>
              <h4>Featured Countries:</h4>
              <ul>
                <li>Germany</li>
                <li>Hungary</li>
                <li>Denmark</li>
                <li>Finland</li>
                <li>Sweden</li>
                <li>Netherlands</li>
              </ul>
            </div>
            <p className={styles.europeDetails}>Minimum IELTS: 4.5 • Quality education systems</p>
            <a href="/european-universities" className={styles.learnMoreBtn}>Explore European Universities</a>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <h3 className={styles.ctaTitle}>Not sure which country is right for you?</h3>
              <p className={styles.ctaDescription}>
                Our education experts will help you choose the perfect destination based on your goals and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
