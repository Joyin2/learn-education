'use client';

import { useEffect } from 'react';
import initUltraSmoothScrolling, { 
  ultraSmoothScrollTo, 
  createSmoothScrollObserver 
} from '@/utils/smoothScroll';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Initialize ultra-smooth scrolling system
    initUltraSmoothScrolling();

    // Create intersection observer for performance optimization
    const observer = createSmoothScrollObserver();
    
    // Observe all sections for smooth scroll optimization
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    // Enhanced scroll performance optimizations
    const optimizeScrollPerformance = () => {
      // Throttle scroll events for better performance
      let scrollTimeout: NodeJS.Timeout;
      let isScrolling = false;

      const handleScroll = () => {
        if (!isScrolling) {
          // Start of scroll
          document.body.style.pointerEvents = 'none';
          isScrolling = true;
        }

        // Clear timeout
        clearTimeout(scrollTimeout);

        // Set timeout to detect end of scroll
        scrollTimeout = setTimeout(() => {
          // End of scroll
          document.body.style.pointerEvents = 'auto';
          isScrolling = false;
        }, 150);
      };

      // Add optimized scroll listener
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    };

    // Initialize performance optimizations
    const cleanupPerformance = optimizeScrollPerformance();

    // Enhanced smooth scrolling for specific elements
    const enhanceSpecificElements = () => {
      // Enhance all buttons with smooth scroll behavior
      const buttons = document.querySelectorAll('button[data-scroll-to]');
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          const target = button.getAttribute('data-scroll-to');
          if (target) {
            e.preventDefault();
            ultraSmoothScrollTo(target, {
              duration: 1200,
              easing: 'ultraSmooth'
            });
          }
        });
      });

      // Enhance navigation links
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href) {
            ultraSmoothScrollTo(href, {
              duration: 1000,
              easing: 'buttery'
            });
          }
        });
      });
    };

    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enhanceSpecificElements);
    } else {
      enhanceSpecificElements();
    }

    // Cleanup function
    return () => {
      observer.disconnect();
      cleanupPerformance();
    };
  }, []);

  // Add ultra-smooth scrolling CSS class to enable advanced optimizations
  useEffect(() => {
    document.documentElement.classList.add('ultra-smooth-enabled');
    document.body.classList.add('ultra-smooth-scrolling');

    return () => {
      document.documentElement.classList.remove('ultra-smooth-enabled');
      document.body.classList.remove('ultra-smooth-scrolling');
    };
  }, []);

  return <>{children}</>;
}
