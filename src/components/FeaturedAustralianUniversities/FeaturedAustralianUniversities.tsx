'use client';

import { useEffect, useState } from 'react';
import styles from './FeaturedAustralianUniversities.module.css';

export default function FeaturedAustralianUniversities() {
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

    const section = document.getElementById('featured-australian-universities');
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
      id: 1,
      name: 'University of Melbourne',
      badge: 'Elite',
      location: 'Melbourne, Victoria',
      courses: '300+ Courses',
      ranking: 'World Ranking: Top 40',
      students: 'International Students: 20,000+',
      tuition: 'Starting from AU$30,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/australia/melbourne.avif'
    },
    {
      id: 2,
      name: 'University of Sydney',
      badge: 'Research',
      location: 'Sydney, NSW',
      courses: '280+ Courses',
      ranking: 'World Ranking: Top 50',
      students: 'International Students: 18,000+',
      tuition: 'Starting from AU$32,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/australia/University%20of%20Sydney.avif'
    },
    {
      id: 3,
      name: 'Australian National University',
      badge: 'Top Ranked',
      location: 'Canberra, ACT',
      courses: '250+ Courses',
      ranking: 'World Ranking: Top 30',
      students: 'International Students: 10,000+',
      tuition: 'Starting from AU$29,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/australia/Australian%20National%20University.avif'
    },
    {
      id: 4,
      name: 'University of Queensland',
      badge: 'Innovation',
      location: 'Brisbane, Queensland',
      courses: '260+ Courses',
      ranking: 'World Ranking: Top 60',
      students: 'International Students: 15,000+',
      tuition: 'Starting from AU$28,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/australia/University%20of%20Queensland.avif'
    },
    {
      id: 5,
      name: 'Monash University',
      badge: 'Global',
      location: 'Melbourne, Victoria',
      courses: '270+ Courses',
      ranking: 'World Ranking: Top 70',
      students: 'International Students: 22,000+',
      tuition: 'Starting from AU$27,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/australia/Monash%20University.avif'
    },
    {
      id: 6,
      name: 'University of New South Wales',
      badge: 'Engineering',
      location: 'Sydney, NSW',
      courses: '240+ Courses',
      ranking: 'World Ranking: Top 50',
      students: 'International Students: 17,000+',
      tuition: 'Starting from AU$31,000/year',
      image: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/australia/University%20of%20New%20South%20Wales.avif'
    }
  ];

  return (
    <section id="featured-australian-universities" className={styles.featuredUniversities}>
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
        <div className={styles.floatingElement3}></div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.sectionTitle}>Featured Universities</h2>
          <p className={styles.sectionDescription}>
            Explore our partner universities across Australia and find the perfect match for your academic journey
          </p>
        </div>

        <div className={`${styles.universitiesGrid} ${isVisible ? styles.fadeInUp : ''}`}>
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
                
                <a href="/contact" className={styles.learnMoreBtn}>
                  Learn More
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
