'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CallToActionSection.module.css';

export default function CallToActionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    universities: 0,
    successRate: 0
  });

  const features = [
    {
      icon: 'fa-solid fa-user-graduate',
      title: 'Personalized Approach',
      description: 'Every student is unique, and so is our approach to helping them achieve their goals.'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Extensive University Network',
      description: 'Access to prestigious universities across the UK, USA, Canada, Ireland, and Germany.'
    },
    {
      icon: 'fa-solid fa-hands-helping',
      title: 'End-to-End Support',
      description: 'From application to arrival, we\'re with you at every step of your international education journey.'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      startCounterAnimation();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const startCounterAnimation = () => {
    const duration = 2000;
    const targets = { students: 5000, universities: 130, successRate: 98 };
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        students: Math.floor(targets.students * progress),
        universities: Math.floor(targets.universities * progress),
        successRate: Math.floor(targets.successRate * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepDuration);
  };

  return (
    <section className={styles.callToActionSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.container}>
        {/* Main Content Section */}
        <div className={styles.mainContent}>
          {/* Left Side - Content */}
          <div className={`${styles.leftContent} ${isVisible ? styles.slideInLeft : ''}`}>
            <div className={styles.badge}>WHY CHOOSE US</div>
            <h2 className={styles.mainTitle}>
              Expert Guidance For Your International Education Journey
            </h2>
            <p className={styles.mainDescription}>
              With Learn Education London, you're not just getting a service - you're gaining a partner 
              dedicated to your academic success. Our team of experienced counselors provides personalized 
              guidance throughout your entire journey.
            </p>

            {/* Features List */}
            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`${styles.featureItem} ${isVisible ? styles.slideInUp : ''}`}
                  style={{'--delay': `${index * 0.2}s`} as React.CSSProperties}
                >
                  <div className={styles.featureIcon}>
                    <i className={feature.icon} style={{fontStyle: 'normal'}}></i>
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>{counters.students}+</div>
                <div className={styles.statLabel}>Students Helped</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>{counters.universities}+</div>
                <div className={styles.statLabel}>Partner Universities</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>{counters.successRate}%</div>
                <div className={styles.statLabel}>Success Rate</div>
              </div>
            </div>

            <Link href="/services" className={styles.ctaButton}>
              <span>Start Your Journey</span>
              <i className="fa-solid fa-arrow-right" style={{fontStyle: 'normal'}}></i>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className={`${styles.rightContent} ${isVisible ? styles.slideInRight : ''}`}>
            <div className={styles.imageContainer}>
              <Image
                src="https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation//about-2.svg"
                alt="International Education Journey"
                width={600}
                height={500}
                className={styles.heroImage}
                priority
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`${styles.bottomSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.bottomContent}>
            <h2 className={styles.bottomTitle}>Ready to Begin Your Study Abroad Journey?</h2>
            <p className={styles.bottomDescription}>
              Take the first step towards your international education goals. Contact us today for a free 
              consultation and discover how we can help you achieve your academic and career aspirations.
            </p>
            <div className={styles.bottomButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                <i className="fa-solid fa-phone" style={{fontStyle: 'normal'}}></i>
                <span>Get Free Consultation</span>
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                <i className="fa-solid fa-envelope" style={{fontStyle: 'normal'}}></i>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
