'use client';

import styles from './OurPassion.module.css';

export default function OurPassion() {
  const services = [
    {
      icon: 'fa-university',
      title: 'University Selection',
      description: 'Expert guidance to find the perfect academic fit'
    },
    {
      icon: 'fa-file-alt',
      title: 'Application Support',
      description: 'Professional assistance with all documentation'
    },
    {
      icon: 'fa-passport',
      title: 'Visa Guidance',
      description: 'Simplified visa application process'
    },
    {
      icon: 'fa-coins',
      title: 'Financial Advice',
      description: 'Scholarship and funding opportunities'
    },
    {
      icon: 'fa-home',
      title: 'Accommodation',
      description: 'Help finding the right place to stay'
    },
    {
      icon: 'fa-hands-helping',
      title: 'Ongoing Support',
      description: 'Continuous guidance throughout your journey'
    }
  ];

  return (
    <section className={styles.passionSection}>
      {/* Floating Particles Background */}
      <div className={styles.floatingParticles}>
        {[...Array(12)].map((_, index) => (
          <div key={index} className={styles.particle}></div>
        ))}
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <i className="fa-solid fa-heart" style={{fontStyle: 'normal'}}></i>
            <span>Our Passion</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Our Passion for <span className={styles.titleHighlight}>Your Success</span>
          </h2>
          <div className={styles.descriptionContainer}>
            <p className={styles.sectionDescription}>
              At Learn Education London, we are passionate about helping students realize their dreams of studying abroad. With years of experience in the field, we understand the challenges and excitement that come with pursuing education overseas.
            </p>
            <p className={styles.sectionDescription}>
              Our dedicated team of counselors, visa experts, and education professionals is committed to guiding students through every step of the process—from selecting the right course and institution to securing scholarships and visas. We take pride in offering personalized services tailored to each student's unique goals and aspirations.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={styles.serviceCard}
              style={{'--delay': `${index * 0.15}s`} as React.CSSProperties}
            >
              <div className={styles.serviceIcon}>
                <i className={`fa-solid ${service.icon}`} style={{fontStyle: 'normal'}}></i>
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
              <div className={styles.serviceGlow}></div>
            </div>
          ))}
        </div>

        {/* Experience Numbers */}
        <div className={styles.experienceSection}>
          <div className={styles.experienceHeader}>
            <h3 className={styles.experienceTitle}>Our Experience in Numbers</h3>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5</div>
              <div className={styles.statLabel}>Countries</div>
              <div className={styles.statGlow}></div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10</div>
              <div className={styles.statLabel}>Counsellors</div>
              <div className={styles.statGlow}></div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100</div>
              <div className={styles.statLabel}>Success Stories</div>
              <div className={styles.statGlow}></div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>130</div>
              <div className={styles.statLabel}>Universities</div>
              <div className={styles.statGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
