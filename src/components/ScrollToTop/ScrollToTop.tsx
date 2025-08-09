'use client';

import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';

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

  // Standard scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Always render but control visibility with CSS
  return (
    <div className={styles.scrollToTopContainer}>
      <button
        onClick={scrollToTop}
        className={`${styles.scrollToTop} ${isScrolling ? styles.scrolling : ''} ${showScrollTop ? styles.visible : styles.hidden}`}
        aria-label="Scroll to top"
        title="Scroll to top"
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
