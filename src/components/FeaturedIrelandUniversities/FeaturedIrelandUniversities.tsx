'use client';

import { useState, useEffect } from 'react';
import styles from './FeaturedIrelandUniversities.module.css';

export default function FeaturedIrelandUniversities() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('featured-ireland-universities');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const universities = [
    {
      id: 'trinity',
      name: 'Trinity College Dublin',
      badge: 'Elite',
      badgeColor: 'elite',
      location: 'Dublin',
      courses: '180+ Courses',
      ranking: 'World Ranking: Top 100',
      students: 'International Students: 5,000+',
      tuition: 'Starting from €20,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/ireland/Trinity%20College%20Dublin.jpeg'
    },
    {
      id: 'ucd',
      name: 'University College Dublin',
      badge: 'Research',
      badgeColor: 'research',
      location: 'Dublin',
      courses: '220+ Courses',
      ranking: 'World Ranking: Top 200',
      students: 'International Students: 7,000+',
      tuition: 'Starting from €19,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/ireland/University%20College%20Dublin.jpeg'
    },
    {
      id: 'ucc',
      name: 'University College Cork',
      badge: 'Innovation',
      badgeColor: 'innovation',
      location: 'Cork',
      courses: '190+ Courses',
      ranking: 'World Ranking: Top 300',
      students: 'International Students: 4,500+',
      tuition: 'Starting from €18,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/ireland/University%20College%20Cork.jpeg'
    },
    {
      id: 'nuig',
      name: 'NUI Galway',
      badge: 'Popular',
      badgeColor: 'popular',
      location: 'Galway',
      courses: '170+ Courses',
      ranking: 'World Ranking: Top 350',
      students: 'International Students: 3,000+',
      tuition: 'Starting from €17,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/ireland/NUI%20Galway%20.jpeg'
    },
    {
      id: 'ul',
      name: 'University of Limerick',
      badge: 'Top Rated',
      badgeColor: 'topRated',
      location: 'Limerick',
      courses: '160+ Courses',
      ranking: 'World Ranking: Top 500',
      students: 'International Students: 2,500+',
      tuition: 'Starting from €16,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/ireland/University%20of%20Limerick.jpeg'
    },
    {
      id: 'maynooth',
      name: 'Maynooth University',
      badge: 'Friendly',
      badgeColor: 'friendly',
      location: 'Maynooth',
      courses: '150+ Courses',
      ranking: 'World Ranking: Top 700',
      students: 'International Students: 1,800+',
      tuition: 'Starting from €15,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/ireland/Maynooth%20University.avif'
    }
  ];

  return (
    <section id="featured-ireland-universities" className={styles.featuredSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.sectionTitle}>Featured Universities</h2>
          <p className={styles.sectionDescription}>
            Explore our partner universities in Ireland and find the perfect match for your academic journey
          </p>
        </div>

        {/* Universities Grid */}
        <div className={styles.universitiesGrid}>
          {universities.map((university, index) => (
            <div 
              key={university.id}
              className={`${styles.universityCard} ${isVisible ? styles.slideInUp : ''}`}
              style={{'--delay': `${index * 0.1}s`} as React.CSSProperties}
            >
              {/* Badge */}
              <div className={`${styles.universityBadge} ${styles[university.badgeColor]}`}>
                {university.badge}
              </div>

              {/* Image */}
              <div className={styles.universityImage}>
                <img
                  src={university.image}
                  alt={university.name}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}></div>
              </div>

              {/* Content */}
              <div className={styles.universityContent}>
                <h3 className={styles.universityName}>{university.name}</h3>
                
                <div className={styles.locationInfo}>
                  <i className="fa-solid fa-map-marker-alt"></i>
                  <span>{university.location}</span>
                </div>

                <div className={styles.universityStats}>
                  <div className={styles.statItem}>
                    <i className="fa-solid fa-book"></i>
                    <span>{university.courses}</span>
                  </div>
                  <div className={styles.statItem}>
                    <i className="fa-solid fa-trophy"></i>
                    <span>{university.ranking}</span>
                  </div>
                  <div className={styles.statItem}>
                    <i className="fa-solid fa-users"></i>
                    <span>{university.students}</span>
                  </div>
                  <div className={styles.statItem}>
                    <i className="fa-solid fa-euro-sign"></i>
                    <span>{university.tuition}</span>
                  </div>
                </div>

                <button className={styles.learnMoreBtn}>
                  <span>Learn More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
