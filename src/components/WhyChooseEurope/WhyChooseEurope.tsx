'use client';

import styles from './WhyChooseEurope.module.css';

export default function WhyChooseEurope() {
  const advantages = [
    {
      icon: 'fa-solid fa-globe',
      title: 'Cultural Diversity and Heritage',
      description: 'Experience rich European culture and history while studying alongside students from around the world.'
    },
    {
      icon: 'fa-solid fa-euro-sign',
      title: 'Affordable Tuition Options',
      description: 'Many European universities offer high-quality education at competitive tuition rates compared to other destinations.'
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Excellent Research Opportunities',
      description: 'Access cutting-edge research facilities and collaborate with leading academics in your field of study.'
    }
  ];

  return (
    <section className={styles.whyChooseEurope}>
      <div className={styles.container}>
        {/* Images Section */}
        <div className={styles.imagesSection}>
          <div className={styles.imageGrid}>
            <div className={styles.campusImageWrapper}>
              <img 
                src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation//photo-1560969184-10fe8719e047.avif"
                alt="European University Campus"
                className={styles.campusImage}
                loading="lazy"
              />
              <div className={styles.imageLabel}>European University Campus</div>
            </div>
            <div className={styles.libraryImageWrapper}>
              <img 
                src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation//libra.avif"
                alt="European University Library"
                className={styles.libraryImage}
                loading="lazy"
              />
              <div className={styles.imageLabel}>European University Library</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Why choose<br />
              <span className={styles.titleHighlight}>Europe?</span>
            </h2>
            <p className={styles.sectionDescription}>
              Europe is home to some of the world's oldest and most prestigious universities, offering exceptional academic standards, cutting-edge research opportunities, and a rich cultural experience. European institutions consistently rank among the global elite, providing degrees that are highly valued by employers worldwide.
            </p>
          </div>

          <div className={styles.advantagesGrid}>
            {advantages.map((advantage, index) => (
              <div key={index} className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  <i className={advantage.icon}></i>
                </div>
                <div className={styles.advantageContent}>
                  <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                  <p className={styles.advantageDescription}>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaSection}>
            <a href="/contact" className={styles.ctaButton}>
              <span>Start Your European Journey</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
