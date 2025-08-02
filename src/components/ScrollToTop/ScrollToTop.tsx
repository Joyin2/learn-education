'use client';

import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';
import { ultraSmoothScrollToTop } from '@/utils/smoothScroll';

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 200); // Show earlier (200px instead of 300px)

      // Add scrolling state for enhanced animations
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, []);

  // Ultra-smooth scroll to top function
  const scrollToTop = () => {
    ultraSmoothScrollToTop(1800); // Ultra-smooth 1.8 second animation
  };

  // Get responsive positioning
  const getBottomPosition = () => {
    if (isMobile) {
      return window.innerWidth <= 480 ? '2rem' : '2.5rem'; // Moved up
    }
    return '3rem'; // Moved up from 2rem
  };

  const getRightPosition = () => {
    if (isMobile) {
      return window.innerWidth <= 480 ? '1rem' : '1.5rem';
    }
    return '2rem';
  };

  // Always render but control visibility with CSS
  return (
    <div style={{
      position: 'fixed',
      bottom: getBottomPosition(),
      right: getRightPosition(),
      zIndex: 99999,
      pointerEvents: showScrollTop ? 'auto' : 'none'
    }}>
      <button
        onClick={scrollToTop}
        className={`${styles.scrollToTop} ${isScrolling ? styles.scrolling : ''} ${showScrollTop ? styles.visible : styles.hidden}`}
        aria-label="Scroll to top"
        title="Scroll to top"
        style={{
          opacity: showScrollTop ? 1 : 0,
          visibility: showScrollTop ? 'visible' : 'hidden',
          transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.3s ease'
        }}
      >
        <i className="fa-solid fa-chevron-up" style={{fontStyle: 'normal'}}></i>
        <div className={styles.ripple}></div>
      </button>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    scrollTimeout: NodeJS.Timeout;
  }
}
