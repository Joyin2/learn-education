'use client';

import { useEffect, useState } from 'react';
import styles from './FeaturedUSAUniversities.module.css';

export default function FeaturedUSAUniversities() {
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

    const section = document.getElementById('featured-usa-universities');
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
      id: 'harvard',
      name: 'Harvard University',
      badge: 'Elite',
      badgeColor: 'gold',
      location: 'Massachusetts, USA',
      courses: '200+ Courses',
      ranking: 'World Ranking: Top 10',
      students: 'International Students: 10,000+',
      tuition: 'Starting from $55,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/usa%20universities/harvard.jpg'
    },
    {
      id: 'yale',
      name: 'Yale University',
      badge: 'Featured',
      badgeColor: 'blue',
      location: 'Connecticut, USA',
      courses: '180+ Courses',
      ranking: 'World Ranking: Top 15',
      students: 'International Students: 8,000+',
      tuition: 'Starting from $52,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/usa%20universities/yale-university-landscape-universities-schools-159490.jpeg'
    },
    {
      id: 'stanford',
      name: 'Stanford University',
      badge: 'Top Rated',
      badgeColor: 'red',
      location: 'California, USA',
      courses: '220+ Courses',
      ranking: 'World Ranking: Top 5',
      students: 'International Students: 9,500+',
      tuition: 'Starting from $56,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/usa%20universities/stanford.jpeg'
    },
    {
      id: 'columbia',
      name: 'Columbia University',
      badge: 'Prestigious',
      badgeColor: 'purple',
      location: 'New York, USA',
      courses: '190+ Courses',
      ranking: 'World Ranking: Top 20',
      students: 'International Students: 8,200+',
      tuition: 'Starting from $54,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/usa%20universities/columbia.jpg'
    },
    {
      id: 'chicago',
      name: 'University of Chicago',
      badge: 'Research',
      badgeColor: 'green',
      location: 'Illinois, USA',
      courses: '170+ Courses',
      ranking: 'World Ranking: Top 25',
      students: 'International Students: 7,000+',
      tuition: 'Starting from $53,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/usa%20universities/chicago.jpeg'
    },
    {
      id: 'mit',
      name: 'Massachusetts Institute of Technology',
      shortName: 'MIT',
      badge: 'Innovation',
      badgeColor: 'orange',
      location: 'Massachusetts, USA',
      courses: '210+ Courses',
      ranking: 'World Ranking: Top 3',
      students: 'International Students: 9,000+',
      tuition: 'Starting from $57,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/usa%20universities/mit.jpg'
    }
  ];

  return (
    <section id="featured-usa-universities" className={styles.featuredSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeInUp : ''}`}>
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
                <h3 className={styles.universityName}>
                  {university.shortName || university.name}
                </h3>
                <p className={styles.universityLocation}>
                  <i className="fa-solid fa-map-marker-alt"></i>
                  {university.location}
                </p>

                {/* Stats */}
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
                    <i className="fa-solid fa-dollar-sign"></i>
                    <span>{university.tuition}</span>
                  </div>
                </div>

                {/* Learn More Button */}
                <a href="/contact" className={styles.learnMoreBtn}>
                  <span>Learn More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
