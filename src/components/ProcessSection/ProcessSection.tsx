'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);


  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive discussion about your academic background, career goals, and preferences to understand your unique needs.",
      icon: "fa-solid fa-comments"
    },
    {
      number: "02", 
      title: "University Selection",
      description: "Based on your profile, we recommend suitable universities and programs across our partner institutions in 5 countries.",
      icon: "fa-solid fa-university"
    },
    {
      number: "03",
      title: "Application Preparation", 
      description: "We assist with preparing documents, drafting personal statements, and submitting strong applications to maximize your chances of acceptance.",
      icon: "fa-solid fa-file-alt"
    },
    {
      number: "04",
      title: "Visa & Pre-Departure",
      description: "Once accepted, we guide you through visa applications, accommodation arrangements, and essential pre-departure preparations.",
      icon: "fa-solid fa-passport"
    },
    {
      number: "05",
      title: "Arrival & Ongoing Support",
      description: "Our support continues after you arrive at your destination with orientation guidance and regular check-ins throughout your studies.",
      icon: "fa-solid fa-hands-helping"
    }
  ];

  // Responsive detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Enhanced visibility and step cycling
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Adjust auto-cycle timing based on device
    const cycleTime = isMobile ? 4000 : 3000; // Slower on mobile for better UX
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, cycleTime);

    return () => {
      clearTimeout(timer);
      clearInterval(stepTimer);
    };
  }, [steps.length, isMobile]);



  // Enhanced step interaction
  const handleStepInteraction = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  return (
    <section className={styles.processSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
        <div className={styles.pathLine}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.headerSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.mainTitle}>YOUR JOURNEY MADE SIMPLE</h2>
          <h3 className={styles.subtitle}>Our Simple 5-Step Process</h3>
          <p className={styles.description}>
            We've streamlined the study abroad process to make your educational journey as smooth as possible.
          </p>
        </div>

        {/* Process Steps */}
        <div className={styles.processContainer}>
          <div className={`${styles.stepsWrapper} ${isMobile ? '' : ''}`}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${styles.stepItem} ${index <= activeStep ? styles.active : ''} ${isVisible ? styles.slideInUp : ''}`}
                style={{
                  animationDelay: `${index * (isMobile ? 0.15 : 0.2)}s`,
                  '--step-index': index
                } as React.CSSProperties}
                onMouseEnter={!isMobile ? () => handleStepInteraction(index) : undefined}
                onClick={() => handleStepInteraction(index)}
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
                <div className={styles.stepNumber}>
                  <span>{step.number}</span>
                  <div className={styles.numberGlow}></div>
                </div>

                <div className={styles.stepContent}>
                  <div className={styles.stepIcon}>
                    <i className={step.icon} aria-hidden="true"></i>
                  </div>

                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDescription}>{step.description}</p>


                </div>

                {!isMobile && <div className={styles.stepConnector}></div>}
              </div>
            ))}
          </div>

          {/* Vertical Progress Line */}
          <div className={styles.progressLine}>
            <div
              className={styles.progressFill}
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <button
            className={styles.ctaButton}
            onClick={() => {
              // Add haptic feedback on mobile
              if (isMobile && 'vibrate' in navigator) {
                navigator.vibrate(50);
              }
              // Handle CTA action here
              console.log('CTA clicked - Start journey');
            }}
            aria-label="Start your educational journey today"
          >
            <span>Start Your Journey Today</span>
            <i className="fa-solid fa-rocket" aria-hidden="true"></i>
            <div className={styles.buttonRipple}></div>
          </button>


        </div>
      </div>
    </section>
  );
}
