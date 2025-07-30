'use client';

import { useEffect, useState } from 'react';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Auto-cycle through steps
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(stepTimer);
    };
  }, [steps.length]);

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
          <div className={styles.stepsWrapper}>
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`${styles.stepItem} ${index <= activeStep ? styles.active : ''} ${isVisible ? styles.slideInUp : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={styles.stepNumber}>
                  <span>{step.number}</span>
                  <div className={styles.numberGlow}></div>
                </div>
                
                <div className={styles.stepContent}>
                  <div className={styles.stepIcon}>
                    <i className={step.icon}></i>
                  </div>
                  
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>

                <div className={styles.stepConnector}></div>
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

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <button className={styles.ctaButton}>
            <span>Start Your Journey Today</span>
            <i className="fa-solid fa-rocket"></i>
            <div className={styles.buttonRipple}></div>
          </button>
        </div>
      </div>
    </section>
  );
}
