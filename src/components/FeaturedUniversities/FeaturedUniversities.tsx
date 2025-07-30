'use client';

import styles from './FeaturedUniversities.module.css';

export default function FeaturedUniversities() {
  const universities = [
    {
      id: 1,
      name: "Oxford Brookes University",
      badge: "Featured",
      badgeColor: "featured",
      location: "Oxford, UK",
      courses: "150+ Courses",
      ranking: "Top 400",
      students: "3,500+",
      price: "£14,900/year",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/universities/oxford%20brookes.avif"
    },
    {
      id: 2,
      name: "Birmingham City University",
      badge: "Popular",
      badgeColor: "popular",
      location: "Birmingham, UK",
      courses: "200+ Courses",
      ranking: "Top 500",
      students: "4,000+",
      price: "£13,500/year",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/universities/Birmingham%20City%20University.avif"
    },
    {
      id: 3,
      name: "Coventry University",
      badge: "Top Rated",
      badgeColor: "topRated",
      location: "Coventry, UK",
      courses: "180+ Courses",
      ranking: "Top 450",
      students: "5,000+",
      price: "£15,000/year",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/universities/Coventry%20University.jpg"
    },
    {
      id: 4,
      name: "University of Manchester",
      badge: "Elite",
      badgeColor: "elite",
      location: "Manchester, UK",
      courses: "250+ Courses",
      ranking: "Top 50",
      students: "10,000+",
      price: "£19,500/year",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/universities/University%20of%20Manchester.avif"
    },
    {
      id: 5,
      name: "University of Nottingham",
      badge: "Research",
      badgeColor: "research",
      location: "Nottingham, UK",
      courses: "220+ Courses",
      ranking: "Top 150",
      students: "8,000+",
      price: "£18,000/year",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/universities/University%20of%20Nottingham.avif"
    },
    {
      id: 6,
      name: "University of Leeds",
      badge: "Innovative",
      badgeColor: "innovative",
      location: "Leeds, UK",
      courses: "190+ Courses",
      ranking: "Top 100",
      students: "7,500+",
      price: "£17,500/year",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/universities/leeds.avif"
    }
  ];

  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Universities</h2>
          <p className={styles.sectionDescription}>
            Explore our partner universities and find the perfect match for your academic journey
          </p>
        </div>

        {/* Universities Grid */}
        <div className={styles.universitiesGrid}>
          {universities.map((university, index) => (
            <div 
              key={university.id} 
              className={styles.universityCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              <div className={`${styles.badge} ${styles[university.badgeColor]}`}>
                {university.badge}
              </div>

              {/* University Image */}
              <div className={styles.imageContainer}>
                <img 
                  src={university.image} 
                  alt={university.name}
                  className={styles.universityImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>

              {/* University Info */}
              <div className={styles.cardContent}>
                <h3 className={styles.universityName}>{university.name}</h3>
                
                <div className={styles.locationInfo}>
                  <span className={styles.icon}>📍</span>
                  <span>{university.location}</span>
                </div>

                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <span className={styles.icon}>🎓</span>
                    <span>{university.courses}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.icon}>🏆</span>
                    <span>World Ranking: {university.ranking}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.icon}>👥</span>
                    <span>International Students: {university.students}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.icon}>💷</span>
                    <span>Starting from {university.price}</span>
                  </div>
                </div>

                <button className={styles.learnMoreBtn}>
                  <span>Learn More</span>
                  <span className={styles.arrow}>→</span>
                </button>
              </div>
            </div>
          ))}
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
