'use client';

import { useEffect, useState } from 'react';
import styles from './WhyChooseIreland.module.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export default function WhyChooseIreland() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section: HTMLElement | null = document.getElementById('why-choose-ireland');
    if (section) {
      observer.observe(section);
    }

    return (): void => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const features: Feature[] = [
    {
      icon: 'fa-solid fa-location-dot',
      title: 'A Gateway to Europe',
      description: 'Strategic location providing easy access to European markets, cultures, and opportunities for international students.'
    },
    {
      icon: 'fa-solid fa-heart',
      title: 'High Quality of Life',
      description: 'Enjoy Ireland\'s friendly culture, stunning landscapes, and excellent healthcare and social systems.'
    },
    {
      icon: 'fa-solid fa-briefcase',
      title: 'Post-Study Work Opportunities',
      description: 'Graduate visa options allowing international students to work in Ireland after completing their studies.'
    }
  ];

  return (
    <section id="why-choose-ireland" className={styles.whyChooseIrelandSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeInUp : ''}`}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.titlePrefix}>Why choose</span>
                <span className={styles.titleMain}>Ireland?</span>
              </h2>
              <p className={styles.sectionDescription}>
                Ireland is home to some of the world's leading universities and colleges, known for their high academic standards and vibrant research culture. Irish institutions consistently rank well globally, offering degrees that are recognized and respected worldwide.
              </p>
            </div>

            {/* Features Grid */}
            <div className={styles.featuresGrid}>
              {features.map((feature: Feature, index: number) => (
                <div
                  key={index}
                  className={`${styles.featureItem} ${isVisible ? styles.slideInUp : ''}`}
                  style={{'--delay': `${index * 0.2}s`} as React.CSSProperties}
                >
                  <div className={styles.featureIcon}>
                    <i className={feature.icon}></i>
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={styles.rightContent}>
            <div className={`${styles.imageContainer} ${isVisible ? styles.slideInRight : ''}`}>
              <div className={styles.imageWrapper}>
                <img
                  src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation//ireland.svg"
                  alt="Ireland Flag and Education"
                  className={styles.irelandImage}
                  loading="lazy"
                />
                <div className={styles.imageGlow}></div>
              </div>
              
              {/* Floating Stats */}
              <div className={styles.floatingStats}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>25+</div>
                  <div className={styles.statLabel}>Universities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
