/**
 * Ultra-Smooth Scrolling Utilities
 * Advanced smooth scrolling with custom easing and performance optimizations
 */

// Custom easing functions for ultra-smooth scrolling
export const easingFunctions = {
  // Ultra-smooth easing (recommended)
  ultraSmooth: (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  },
  
  // Buttery smooth easing
  buttery: (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
  },
  
  // Natural momentum easing
  momentum: (t: number): number => {
    return t * t * (3 - 2 * t);
  },
  
  // Elastic smooth easing
  elastic: (t: number): number => {
    return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI);
  }
};

// Ultra-smooth scroll to element
export function ultraSmoothScrollTo(
  target: string | Element,
  options: {
    duration?: number;
    easing?: keyof typeof easingFunctions;
    offset?: number;
    callback?: () => void;
  } = {}
): void {
  const {
    duration = 1200, // Longer duration for ultra-smoothness
    easing = 'ultraSmooth',
    offset = 80, // Account for navbar
    callback
  } = options;

  const targetElement = typeof target === 'string' 
    ? document.querySelector(target) 
    : target;

  if (!targetElement) return;

  const startPosition = window.pageYOffset;
  const targetPosition = targetElement.getBoundingClientRect().top + startPosition - offset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const easedProgress = easingFunctions[easing](progress);
    const currentPosition = startPosition + (distance * easedProgress);
    
    window.scrollTo(0, currentPosition);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    } else if (callback) {
      callback();
    }
  }

  requestAnimationFrame(animation);
}

// Enhanced smooth scroll for anchor links
export function enhanceAnchorLinks(): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (link && link.hash) {
      e.preventDefault();
      ultraSmoothScrollTo(link.hash, {
        duration: 1000,
        easing: 'ultraSmooth'
      });
    }
  });
}

// Smooth scroll to top with ultra-smooth animation
export function ultraSmoothScrollToTop(duration: number = 1500): void {
  ultraSmoothScrollTo(document.body, {
    duration,
    easing: 'buttery',
    offset: 0
  });
}

// Initialize ultra-smooth scrolling system
export function initUltraSmoothScrolling(): void {
  // Enhance anchor links
  enhanceAnchorLinks();
  
  // Add smooth scrolling class to body
  document.body.classList.add('ultra-smooth-scrolling');
  
  // Optimize scroll performance
  const optimizeScrolling = () => {
    // Enable hardware acceleration
    document.documentElement.style.transform = 'translate3d(0, 0, 0)';
    document.body.style.transform = 'translate3d(0, 0, 0)';
    
    // Optimize scroll events
    let ticking = false;
    
    const updateScrolling = () => {
      // Smooth scroll optimizations
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrolling);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestTick, { passive: true });
  };
  
  // Initialize optimizations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizeScrolling);
  } else {
    optimizeScrolling();
  }
}

// Smooth scroll with intersection observer for performance
export function createSmoothScrollObserver(): IntersectionObserver {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add smooth scroll optimizations when elements are visible
          const element = entry.target as HTMLElement;
          element.style.transform = 'translate3d(0, 0, 0)';
          element.style.willChange = 'transform';
        }
      });
    },
    {
      rootMargin: '50px',
      threshold: 0.1
    }
  );
}

// Export default initialization function
export default initUltraSmoothScrolling;
