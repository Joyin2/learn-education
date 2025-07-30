'use client';

import styles from './FeaturedNewZealandUniversities.module.css';

export default function FeaturedNewZealandUniversities() {
  const universities = [
    {
      id: 1,
      name: 'University of Auckland',
      badge: 'Top Ranked',
      location: 'Auckland',
      courses: '200+ Courses',
      ranking: 'World Ranking: Top 100',
      students: 'International Students: 7,000+',
      tuition: 'Starting from NZ$30,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/newzealand/University%20of%20Auckland.avif'
    },
    {
      id: 2,
      name: 'University of Otago',
      badge: 'Historic',
      location: 'Dunedin',
      courses: '180+ Courses',
      ranking: 'World Ranking: Top 200',
      students: 'International Students: 3,000+',
      tuition: 'Starting from NZ$28,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/newzealand/University%20of%20Otago.avif'
    },
    {
      id: 3,
      name: 'Victoria University of Wellington',
      badge: 'Research',
      location: 'Wellington',
      courses: '160+ Courses',
      ranking: 'World Ranking: Top 250',
      students: 'International Students: 3,500+',
      tuition: 'Starting from NZ$27,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/newzealand/Victoria%20University%20of%20Wellington.avif'
    },
    {
      id: 4,
      name: 'University of Canterbury',
      badge: 'Engineering',
      location: 'Christchurch',
      courses: '150+ Courses',
      ranking: 'World Ranking: Top 300',
      students: 'International Students: 2,500+',
      tuition: 'Starting from NZ$26,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/newzealand/University%20of%20Canterbury.avif'
    },
    {
      id: 5,
      name: 'Massey University',
      badge: 'Innovation',
      location: 'Palmerston North',
      courses: '140+ Courses',
      ranking: 'World Ranking: Top 350',
      students: 'International Students: 5,000+',
      tuition: 'Starting from NZ$25,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/newzealand/Massey%20University.avif'
    },
    {
      id: 6,
      name: 'Auckland University of Technology',
      badge: 'Modern',
      location: 'Auckland',
      courses: '130+ Courses',
      ranking: 'World Ranking: Top 400',
      students: 'International Students: 4,000+',
      tuition: 'Starting from NZ$24,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/newzealand/Auckland%20University%20of%20Technology.avif'
    }
  ];

  return (
    <section className={styles.featuredUniversities} id="universities">
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
        <div className={styles.floatingElement3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Universities</h2>
          <p className={styles.sectionDescription}>
            Explore our partner universities across New Zealand and find the perfect match for your academic journey
          </p>
        </div>

        <div className={styles.universitiesGrid}>
          {universities.map((university) => (
            <div key={university.id} className={styles.universityCard}>
              <div className={styles.cardImage}>
                <img 
                  src={university.image} 
                  alt={university.name}
                  loading="lazy"
                />
                <div className={styles.badge}>
                  {university.badge}
                </div>
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.universityName}>{university.name}</h3>
                <div className={styles.universityDetails}>
                  <div className={styles.detailItem}>
                    <i className="fa-solid fa-map-marker-alt"></i>
                    <span>{university.location}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <i className="fa-solid fa-book"></i>
                    <span>{university.courses}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <i className="fa-solid fa-trophy"></i>
                    <span>{university.ranking}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <i className="fa-solid fa-users"></i>
                    <span>{university.students}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <i className="fa-solid fa-dollar-sign"></i>
                    <span>{university.tuition}</span>
                  </div>
                </div>
                
                <div className={styles.cardActions}>
                  <a href="/contact" className={styles.learnMoreBtn}>
                    Learn More
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAllSection}>
          <a href="/contact" className={styles.viewAllBtn}>
            Get Free Consultation
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
