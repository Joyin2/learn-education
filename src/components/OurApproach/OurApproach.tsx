'use client';

import styles from './OurApproach.module.css';

export default function OurApproach() {
  return (
    <section className={styles.ourApproachSection}>
      {/* Floating Particles Layer */}
      <div className={styles.floatingParticles}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>OUR APPROACH</span>
          <h2 className={styles.sectionTitle}>
            Guiding Your Educational Journey
          </h2>
          <p className={styles.sectionDescription}>
            Learn Education London provides comprehensive support to students around the world, helping them achieve their academic dreams with personalized guidance every step of the way.
          </p>
        </div>

        {/* Approach Content */}
        <div className={styles.approachContent}>
          <div className={styles.row}>
            {/* Education Without Boundaries */}
            <div className={styles.colLg6}>
              <div className={styles.approachCard}>
                <div className={styles.cardIcon}>
                  <i className="fa-solid fa-globe" style={{fontStyle: 'normal'}}></i>
                </div>
                <h3 className={styles.cardTitle}>Education Without Boundaries</h3>
                <p className={styles.cardDescription}>
                  Learn Education is committed to making education accessible for everyone, regardless of location or background. Our dynamic and innovative approach ensures that students not only secure admission into top UK colleges and universities but also receive ongoing support throughout their educational journey.
                </p>
                <p className={styles.cardDescription}>
                  With a mission to simplify the admission process and provide expert guidance, we aim to empower students to achieve their academic dreams in the UK.
                </p>
                <div className={styles.cardFeatures}>
                  <div className={styles.featureItem}>
                    <i className="fa-solid fa-check-circle" style={{fontStyle: 'normal'}}></i>
                    <span>Global accessibility</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fa-solid fa-check-circle" style={{fontStyle: 'normal'}}></i>
                    <span>Innovative approach</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fa-solid fa-check-circle" style={{fontStyle: 'normal'}}></i>
                    <span>Ongoing support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comprehensive Student Support */}
            <div className={styles.colLg6}>
              <div className={styles.approachCard}>
                <div className={styles.cardIcon}>
                  <i className="fa-solid fa-users" style={{fontStyle: 'normal'}}></i>
                </div>
                <h3 className={styles.cardTitle}>Comprehensive Student Support</h3>
                <p className={styles.cardDescription}>
                  We pride ourselves on our comprehensive range of services, including admission support, consultancy, and student finance applications. Our experienced team helps students navigate every stage, from choosing the right course to interview preparation and managing post-graduation work opportunities.
                </p>
                <p className={styles.cardDescription}>
                  Additionally, we assist international students with accommodations, logistics, and financial challenges, making their transition to the UK smoother and more manageable.
                </p>
                <div className={styles.cardFeatures}>
                  <div className={styles.featureItem}>
                    <i className="fa-solid fa-check-circle" style={{fontStyle: 'normal'}}></i>
                    <span>Admission support</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fa-solid fa-check-circle" style={{fontStyle: 'normal'}}></i>
                    <span>Financial guidance</span>
                  </div>
                  <div className={styles.featureItem}>
                    <i className="fa-solid fa-check-circle" style={{fontStyle: 'normal'}}></i>
                    <span>Accommodation assistance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Students Supported</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>Success Rate</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Partner Universities</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
