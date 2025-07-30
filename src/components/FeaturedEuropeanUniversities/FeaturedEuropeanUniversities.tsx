'use client';

import styles from './FeaturedEuropeanUniversities.module.css';

export default function FeaturedEuropeanUniversities() {
  const universities = [
    {
      id: 1,
      name: 'Sorbonne University',
      badge: 'Elite',
      location: 'Paris, France',
      courses: '250+ Courses',
      ranking: 'World Ranking: Top 100',
      students: 'International Students: 9,000+',
      tuition: 'Starting from €3,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/europe/sorbonne.avif'
    },
    {
      id: 2,
      name: 'Technical University of Munich',
      badge: 'Research',
      location: 'Munich, Germany',
      courses: '180+ Courses',
      ranking: 'World Ranking: Top 50',
      students: 'International Students: 10,000+',
      tuition: 'Starting from €0/year (No tuition)',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/europe/Technical%20University%20of%20Munich.avif'
    },
    {
      id: 3,
      name: 'University of Bologna',
      badge: 'Historic',
      location: 'Bologna, Italy',
      courses: '200+ Courses',
      ranking: 'World Ranking: Top 200',
      students: 'International Students: 6,000+',
      tuition: 'Starting from €2,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/europe/University%20of%20Bologna.avif'
    },
    {
      id: 4,
      name: 'KU Leuven',
      badge: 'Innovation',
      location: 'Leuven, Belgium',
      courses: '160+ Courses',
      ranking: 'World Ranking: Top 80',
      students: 'International Students: 8,000+',
      tuition: 'Starting from €1,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/europe/KU%20Leuven.avif'
    },
    {
      id: 5,
      name: 'University of Copenhagen',
      badge: 'Top Rated',
      location: 'Copenhagen, Denmark',
      courses: '190+ Courses',
      ranking: 'World Ranking: Top 100',
      students: 'International Students: 5,500+',
      tuition: 'Starting from €0/year (EU students)',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/europe/Kommunehospitalet_(Copenhagen).jpg'
    },
    {
      id: 6,
      name: 'Delft University of Technology',
      badge: 'Engineering',
      location: 'Delft, Netherlands',
      courses: '150+ Courses',
      ranking: 'World Ranking: Top 60',
      students: 'International Students: 7,500+',
      tuition: 'Starting from €2,200/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/europe/Delft%20University%20of%20Technology.avif'
    }
  ];

  return (
    <section className={styles.featuredUniversities}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Universities</h2>
          <p className={styles.sectionDescription}>
            Explore our partner universities across Europe and find the perfect match for your academic journey
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
                    <i className="fa-solid fa-euro-sign"></i>
                    <span>{university.tuition}</span>
                  </div>
                </div>
                
                <a href="/contact" className={styles.learnMoreBtn}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
