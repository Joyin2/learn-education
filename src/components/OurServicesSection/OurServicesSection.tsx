'use client';

import { useState, useEffect } from 'react';
import styles from './OurServicesSection.module.css';

export default function OurServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: 'fa-solid fa-user-tie',
      title: 'Personalized Counseling',
      description: 'One-on-one consultations to understand your academic goals, preferences, and aspirations.',
      features: [
        'Career path assessment',
        'Program matching',
        'Budget planning'
      ]
    },
    {
      icon: 'fa-solid fa-university',
      title: 'University Selection',
      description: 'Choose the best fit from our network of universities worldwide based on your needs.',
      features: [
        'University rankings',
        'Program comparison',
        'Campus life insights'
      ]
    },
    {
      icon: 'fa-solid fa-file-alt',
      title: 'Application Assistance',
      description: 'Complete support with application forms, personal statements, and document preparation.',
      features: [
        'Form completion',
        'Statement writing',
        'Document verification'
      ]
    },
    {
      icon: 'fa-solid fa-passport',
      title: 'Visa Guidance',
      description: 'Expert guidance through the visa application process to enhance approval chances.',
      features: [
        'Documentation support',
        'Interview preparation',
        'Visa regulations advice'
      ]
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Scholarship Opportunities',
      description: 'Identify and apply for scholarships and financial aid options for international students.',
      features: [
        'Scholarship matching',
        'Application assistance',
        'Financial planning'
      ]
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Pre-Departure Support',
      description: 'Comprehensive assistance to prepare you for your journey and life in a new country.',
      features: [
        'Accommodation guidance',
        'Cultural orientation',
        'Travel arrangements'
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.ourServicesSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.headerSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.badge}>COMPREHENSIVE SUPPORT</div>
          <h2 className={styles.mainTitle}>Our Complete Range of Services</h2>
          <p className={styles.description}>
            From initial consultation to your successful arrival abroad, we provide end-to-end support 
            throughout your entire study abroad journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard} ${isVisible ? styles.slideInUp : ''}`}
              style={{'--delay': `${index * 0.1}s`} as React.CSSProperties}
            >
              <div className={styles.serviceIcon}>
                <i className={service.icon} style={{fontStyle: 'normal'}}></i>
              </div>
              
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <ul className={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      <i className="fa-solid fa-check" style={{fontStyle: 'normal'}}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.serviceGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
