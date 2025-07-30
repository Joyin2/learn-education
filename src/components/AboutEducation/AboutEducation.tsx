'use client';

import styles from './AboutEducation.module.css';

export default function AboutEducation() {
  const features = [
    {
      icon: 'fa-graduation-cap',
      text: 'Expert guidance for course and program selection.'
    },
    {
      icon: 'fa-file-signature',
      text: 'Assistance with application preparation and submission.'
    },
    {
      icon: 'fa-passport',
      text: 'Help navigating visa processes and accommodations.'
    }
  ];

  return (
    <section className={styles.aboutEducationSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        {[...Array(8)].map((_, index) => (
          <div key={index} className={styles.floatingShape}></div>
        ))}
      </div>

      <div className={styles.container}>
        {/* Main Heading - Full Width */}
        <div className={styles.mainHeading}>
          <h2 className={styles.sectionTitle}>
            Continuous access to <span className={styles.titleHighlight}>academic advice</span>, course selection, and career guidance.
          </h2>
        </div>

        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <div className={styles.mainContent}>

              <p className={styles.description}>
                We're here to support you on your educational journey. Don't hesitate to reach out for assistance with any part of the process. Whether you're just starting out or already on your way, Learn Education London is committed to your success.
              </p>

              <div className={styles.featuresList}>
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={styles.featureItem}
                    style={{'--delay': `${index * 0.2}s`} as React.CSSProperties}
                  >
                    <div className={styles.featureIcon}>
                      <i className={`fa-solid ${feature.icon}`} style={{fontStyle: 'normal'}}></i>
                    </div>
                    <span className={styles.featureText}>{feature.text}</span>
                  </div>
                ))}
              </div>


            </div>
          </div>

          {/* Right Image */}
          <div className={styles.rightContent}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img 
                  src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation//about.png" 
                  alt="About Learn Education"
                  className={styles.aboutImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              
              {/* Floating Elements */}
              <div className={styles.floatingElement1}>
                <div className={styles.floatingCard}>
                  <i className="fa-solid fa-star" style={{fontStyle: 'normal'}}></i>
                  <span>Excellence</span>
                </div>
              </div>
              
              <div className={styles.floatingElement2}>
                <div className={styles.floatingCard}>
                  <i className="fa-solid fa-users" style={{fontStyle: 'normal'}}></i>
                  <span>Support</span>
                </div>
              </div>
              
              <div className={styles.floatingElement3}>
                <div className={styles.floatingCard}>
                  <i className="fa-solid fa-trophy" style={{fontStyle: 'normal'}}></i>
                  <span>Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
