'use client';

import Link from 'next/link';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const features = [
    {
      icon: 'fa-solid fa-user-tie',
      title: 'Experienced Consultants',
      description: 'Our consultants have firsthand experience with international education and deep knowledge of university requirements across multiple countries.',
      stat: '10+',
      statLabel: 'Years Experience'
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'University Partnerships',
      description: 'We maintain strong relationships with 130+ universities worldwide, providing insider knowledge and dedicated support for our students.',
      stat: '130+',
      statLabel: 'University Partners'
    },
    {
      icon: 'fa-solid fa-hands-helping',
      title: 'Comprehensive Support',
      description: 'From university selection to visa applications and pre-departure orientation, we provide end-to-end support throughout your journey.',
      stat: '24/7',
      statLabel: 'Support Available'
    },
    {
      icon: 'fa-solid fa-trophy',
      title: 'Proven Success Rate',
      description: 'With a 98% success rate in university placements, our track record speaks for itself. We\'re committed to your academic success.',
      stat: '98%',
      statLabel: 'Success Rate'
    }
  ];

  return (
    <section className={styles.whyChooseSection}>
      {/* Enhanced Background Effects */}
      <div className={styles.backgroundEffects}>
        {/* Animated Particles */}
        <div className={styles.particleSystem}>
          {[...Array(15)].map((_, index) => (
            <div key={index} className={styles.particle}></div>
          ))}
        </div>
        
        {/* Flowing Network Lines */}
        <div className={styles.networkLines}>
          {[...Array(8)].map((_, index) => (
            <div key={index} className={styles.networkLine}></div>
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className={styles.gradientOverlays}>
          <div className={styles.overlay1}></div>
          <div className={styles.overlay2}></div>
          <div className={styles.overlay3}></div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <i className="fa-solid fa-star" style={{fontStyle: 'normal'}}></i>
            <span>Why Choose Us</span>
          </div>
          <h2 className={styles.sectionTitle}>
            What Makes Us <span className={styles.titleHighlight}>Different</span>
          </h2>
          <p className={styles.sectionDescription}>
            With a decade of experience in educational consulting, we've built a reputation for excellence, integrity, and student success. Here's why students choose Learn Education London:
          </p>
        </div>

        {/* Features Grid - Full Width Design */}
        <div className={styles.featuresContainer}>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={styles.featureCard}
                style={{'--delay': `${index * 0.15}s`} as React.CSSProperties}
              >
                <div className={styles.cardBackground}></div>
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <i className={feature.icon} style={{fontStyle: 'normal'}}></i>
                  </div>
                  <div className={styles.statContainer}>
                    <div className={styles.statNumber}>{feature.stat}</div>
                    <div className={styles.statLabel}>{feature.statLabel}</div>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardBorder}></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Ready to Start Your Journey?</h3>
              <p className={styles.ctaDescription}>
                Join thousands of successful students who chose Learn Education London for their international education dreams.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                <span>Book a Consultation</span>
                <i className="fa-solid fa-arrow-right" style={{fontStyle: 'normal'}}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
