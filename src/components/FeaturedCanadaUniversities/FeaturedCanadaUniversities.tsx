'use client';

import { useEffect, useState } from 'react';
import styles from './FeaturedCanadaUniversities.module.css';

export default function FeaturedCanadaUniversities() {
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

    const section = document.getElementById('featured-canada-universities');
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
      id: 'toronto',
      name: 'University of Toronto',
      badge: 'Top Ranked',
      badgeColor: 'gold',
      location: 'Toronto, Ontario',
      courses: '700+ Programs',
      ranking: 'World Ranking: Top 30',
      students: 'International Students: 25,000+',
      tuition: 'Starting from CAD 38,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/canada/University%20of%20Toronto.jpeg'
    },
    {
      id: 'ubc',
      name: 'University of British Columbia',
      badge: 'Research',
      badgeColor: 'blue',
      location: 'Vancouver, BC',
      courses: '500+ Programs',
      ranking: 'World Ranking: Top 40',
      students: 'International Students: 18,000+',
      tuition: 'Starting from CAD 40,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/canada/University%20of%20British%20Columbia.jpeg'
    },
    {
      id: 'mcgill',
      name: 'McGill University',
      badge: 'Historic',
      badgeColor: 'red',
      location: 'Montreal, Quebec',
      courses: '400+ Programs',
      ranking: 'World Ranking: Top 50',
      students: 'International Students: 12,000+',
      tuition: 'Starting from CAD 30,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/canada/McGill%20University.jpeg'
    },
    {
      id: 'alberta',
      name: 'University of Alberta',
      badge: 'Research',
      badgeColor: 'green',
      location: 'Edmonton, Alberta',
      courses: '300+ Programs',
      ranking: 'World Ranking: Top 150',
      students: 'International Students: 9,000+',
      tuition: 'Starting from CAD 28,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/canada/University%20of%20Alberta.jpeg'
    },
    {
      id: 'waterloo',
      name: 'University of Waterloo',
      badge: 'Innovation',
      badgeColor: 'purple',
      location: 'Waterloo, Ontario',
      courses: '280+ Programs',
      ranking: 'World Ranking: Top 200',
      students: 'International Students: 8,000+',
      tuition: 'Starting from CAD 35,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/canada/University%20of%20Waterloo.jpeg'
    },
    {
      id: 'mcmaster',
      name: 'McMaster University',
      badge: 'Medical',
      badgeColor: 'orange',
      location: 'Hamilton, Ontario',
      courses: '250+ Programs',
      ranking: 'World Ranking: Top 150',
      students: 'International Students: 6,000+',
      tuition: 'Starting from CAD 32,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/canada/McMaster-University-Campus-0004-1.jpg'
    }
  ];

  return (
    <section id="featured-canada-universities" className={styles.featuredSection}>
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
            Discover top Canadian universities offering world-class education and research opportunities
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
                  {university.name}
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
