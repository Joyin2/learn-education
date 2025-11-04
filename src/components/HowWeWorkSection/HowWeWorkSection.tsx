'use client';

import { useState, useEffect } from 'react';
import styles from './HowWeWorkSection.module.css';

export default function HowWeWorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const steps = [
    {
      number: '1',
      title: 'Initial Consultation',
      description: 'We begin with a comprehensive discussion about your academic background, career goals, and preferences to understand your needs.',
      icon: 'fa-solid fa-comments',
      features: [
        'Assessment of academic profile',
        'Understanding career aspirations',
        'Budget and timeline planning'
      ]
    },
    {
      number: '2',
      title: 'University Selection',
      description: 'Based on your profile, we identify suitable universities and programs that align with your academic goals and preferences.',
      icon: 'fa-solid fa-university',
      features: [
        'Shortlisting suitable institutions',
        'Program comparison and analysis',
        'Admission requirements review'
      ]
    },
    {
      number: '3',
      title: 'Application Preparation',
      description: 'We assist you in preparing and submitting strong applications to your chosen universities to maximize acceptance chances.',
      icon: 'fa-solid fa-file-alt',
      features: [
        'Personal statement guidance',
        'Document preparation and verification',
        'Application submission and tracking'
      ]
    },
    {
      number: '4',
      title: 'Offer Acceptance',
      description: 'Once you receive offers, we help you evaluate them and make an informed decision about which university to attend.',
      icon: 'fa-solid fa-handshake',
      features: [
        'Offer comparison and analysis',
        'Acceptance procedure guidance',
        'Tuition fee payment assistance'
      ]
    },
    {
      number: '5',
      title: 'Visa & Pre-Departure',
      description: 'We provide comprehensive support for visa applications and prepare you for your journey to your new university.',
      icon: 'fa-solid fa-passport',
      features: [
        'Visa application assistance',
        'Pre-departure orientation',
        'Accommodation and travel arrangements'
      ]
    }
  ];

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Auto-cycle through steps - slower on mobile for better UX
    const cycleTime = isMobile ? 5000 : 4000;
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, cycleTime);

    return () => {
      clearTimeout(timer);
      clearInterval(stepTimer);
    };
  }, [steps.length, isMobile]);

  // Handle step interaction for both mouse and touch devices
  const handleStepInteraction = (index: number) => {
    setActiveStep(index);
    
    // Add haptic feedback on mobile devices
    if (isMobile && 'vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  return (
    <section className={styles.howWeWorkSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
        {!isMobile && <div className={styles.connectingLine}></div>}
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.headerSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.badge}>HOW WE WORK</div>
          <h2 className={styles.mainTitle}>Our Step-by-Step Process</h2>
          <p className={styles.description}>
            We've developed a streamlined process to guide you from initial consultation to successful 
            university placement. Our experienced team will be with you every step of the way, ensuring 
            a smooth and stress-free experience.
          </p>
        </div>

        {/* Steps Container */}
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.stepWrapper} ${index % 2 === 0 ? styles.leftAlign : styles.rightAlign} ${isVisible ? styles.slideIn : ''}`}
              style={{'--delay': `${index * 0.2}s`} as React.CSSProperties}
              onMouseEnter={() => handleStepInteraction(index)}
              onClick={() => handleStepInteraction(index)}
              onTouchStart={() => handleStepInteraction(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleStepInteraction(index);
                }
              }}
              aria-label={`Step ${step.number}: ${step.title}`}
            >
              {/* Step Number Circle - Hidden on mobile devices */}
              {!isMobile && (
                <div className={`${styles.stepNumber} ${index === activeStep ? styles.active : ''}`}>
                  <span>{step.number}</span>
                  <div className={styles.numberGlow}></div>
                </div>
              )}

              {/* Step Card */}
              <div className={`${styles.stepCard} ${index === activeStep ? styles.activeCard : ''}`}>
                <div className={styles.stepIcon}>
                  <i className={step.icon} aria-hidden="true"></i>
                </div>
                
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  
                  <ul className={styles.featuresList}>
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.featureItem}>
                        <i className="fa-solid fa-check" aria-hidden="true"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.stepGlow}></div>
              </div>

              {/* Connecting Line - hidden on mobile */}
              {!isMobile && index < steps.length - 1 && (
                <div className={styles.stepConnector}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}