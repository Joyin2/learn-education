'use client';

import styles from './PartnerUniversities.module.css';

export default function PartnerUniversities() {
  const universities = [
    "Abertay University",
    "Anglia Ruskin University", 
    "Aston University",
    "Bournemouth University",
    "BPP University",
    "Bangor University",
    "Bath Spa University",
    "Birmingham City University",
    "Bishop Grosseteste University",
    "Bloomsbury Institute London",
    "Brunel University London",
    "Buckinghamshire New University",
    "Cardiff Metropolitan University",
    "Cardiff University",
    "Coventry University",
    "De Montfort University",
    "Edinburgh Napier University",
    "Glasgow Caledonian University",
    "Heriot-Watt University",
    "Leeds Beckett University",
    "London Metropolitan University",
    "Middlesex University",
    "Newcastle University",
    "Northumbria University",
    "Oxford Brookes University",
    "Queen's University Belfast",
    "University of Bradford",
    "University of Birmingham"
  ];

  const benefits = [
    {
      iconType: "globe",
      title: "Global Recognition",
      description: "Degrees valued by employers worldwide"
    },
    {
      iconType: "book",
      title: "Diverse Programs",
      description: "Thousands of courses across disciplines"
    },
    {
      iconType: "scholarship",
      title: "Scholarship Support",
      description: "Guidance on financial aid options"
    }
  ];

  return (
    <section className={styles.partnerSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Partner Universities</h2>
          <p className={styles.sectionSubtitle}>
            Learn Education has partnered with 40+ prestigious UK universities
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.leftContent}>
            <div className={styles.descriptionBox}>
              <p className={styles.description}>
                At Learn Education, we are proud to collaborate with some of the UK's most esteemed universities, 
                offering our students access to world-class education and unparalleled opportunities for personal 
                and professional growth. Our partnerships are carefully selected to ensure a diverse range of 
                academic programs, state-of-the-art facilities, and a supportive learning environment.
              </p>
              
              <p className={styles.mission}>
                Our mission is to make quality education accessible to students from all walks of life. We believe 
                that every student deserves the opportunity to learn and grow in an environment that fosters 
                academic excellence.
              </p>
              
              <div className={styles.brandInfo}>
                <span className={styles.brandName}>Learn Education, London</span>
              </div>
            </div>

            {/* Stats Card */}
            <div className={styles.statsCard}>
              <div className={styles.statNumber}>40+</div>
              <div className={styles.statLabel}>Partner Universities</div>
              <div className={styles.needGuidance}>
                <h4>Need Guidance?</h4>
                <p>Our education consultants are here to help you choose the right university</p>
                <a href="/contact" className={styles.consultationBtn}>
                  <span>Book Free Consultation</span>
                  <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.rightContent}>
            {/* Universities List */}
            <div className={styles.universitiesContainer}>
              <h3 className={styles.listTitle}>
                List of Universities in the UK that Learn Education London has partnered with:
              </h3>
              <div className={styles.universitiesList}>
                {universities.map((university, index) => (
                  <div 
                    key={index} 
                    className={styles.universityItem}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className={styles.checkmark}></div>
                    <span className={styles.universityName}>{university}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={`${styles.benefitIcon} ${styles[benefit.iconType]}`}></div>
              <h4 className={styles.benefitTitle}>{benefit.title}</h4>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Start Your Academic Journey in the UK?</h3>
            <p className={styles.ctaDescription}>
              Get personalized guidance from our education consultants to find your perfect university match. 
              Our experts will help you navigate the application process and secure your place at a top UK university.
            </p>
            
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeature}>
                <div className={styles.featureIcon}></div>
                <span>Free Consultation</span>
              </div>
              <div className={styles.ctaFeature}>
                <div className={styles.featureIcon}></div>
                <span>Expert Guidance</span>
              </div>
              <div className={styles.ctaFeature}>
                <div className={styles.featureIcon}></div>
                <span>Application Support</span>
              </div>
            </div>
          </div>

          <div className={styles.ctaStats}>
            <div className={styles.ctaStatCard}>
              <div className={styles.ctaStatNumber}>5,000+</div>
              <div className={styles.ctaStatLabel}>Students</div>
              <div className={styles.ctaStatDescription}>Successfully placed in UK universities</div>
            </div>
            
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryCtaBtn}>
                <span>Book Your Free Consultation</span>
                <span className={styles.arrow}>→</span>
              </a>
              <p className={styles.disclaimer}>No obligation. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
      </div>
    </section>
  );
}
