'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUniversitiesOpen, setIsUniversitiesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.navbarContainer}`)) {
        setIsOpen(false);
        setIsUniversitiesOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setIsUniversitiesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile menu on window resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setIsUniversitiesOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dropdown hover handlers with delay
  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsUniversitiesOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsUniversitiesOpen(false);
    }, 300); // 300ms delay before hiding
    setDropdownTimeout(timeout);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const universities = [
    { name: 'UK', href: '/universities/uk' },
    { name: 'USA', href: '/universities/usa' },
    { name: 'Ireland', href: '/universities/ireland' },
    { name: 'Canada', href: '/universities/canada' },
    { name: 'Europe', href: '/european-universities' },
    { name: 'Australia', href: '/australian-universities' },
    { name: 'New Zealand', href: '/new-zealand-universities' },
  ];

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`${styles.navbarContainer} ${styles.navbar} ${
        isScrolled ? styles.navbarScrolled : ''
      }`}
    >
      <div className={styles.navbarInner}>
        <div className={styles.navbarContent}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/assets/logo.png"
                alt="Learn Education Logo"
                width={168}
                height={56}
                className={styles.logo}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {/* Left side - Navigation Items */}
            <div className={styles.navLinksContainer}>
              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.name}
                </Link>
              ))}

              {/* Universities Dropdown */}
              <div
                className={`${styles.dropdownContainer} ${isUniversitiesOpen ? styles.active : ''}`}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={styles.dropdownButton}
                  onClick={() => setIsUniversitiesOpen(!isUniversitiesOpen)}
                >
                  <span>Universities</span>
                  <i className={`fa-solid fa-chevron-down ${styles.dropdownIcon} ${
                    isUniversitiesOpen ? styles.dropdownIconOpen : ''
                  }`}></i>
                </button>

                {/* Dropdown Menu */}
                {isUniversitiesOpen && (
                  <div className={styles.dropdownMenu}>
                    {universities.map((university) => (
                      <Link
                        key={university.name}
                        href={university.href}
                        className={styles.dropdownLink}
                      >
                        {university.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Phone and CTA */}
            <div className={styles.navActionsContainer}>
              {/* Phone Number */}
              <div className={styles.phoneContainer}>
                <i className={`fa-solid fa-phone ${styles.phoneIcon}`}></i>
                <a
                  href="tel:+447540258059"
                  className={styles.phoneLink}
                >
                  +44 7540 258059
                </a>
              </div>

              {/* Free Consultation Button */}
              <Link
                href="/contact"
                className={styles.consultationButton}
              >
                <span>Free Consultation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.mobileMenuButton}
            aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'} ${styles.mobileMenuIcon}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={styles.mobileMenu}
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className={styles.mobileMenuContent}>
              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Universities Mobile */}
              <div>
                <button
                  className={styles.mobileDropdownButton}
                  onClick={() => setIsUniversitiesOpen(!isUniversitiesOpen)}
                  aria-expanded={isUniversitiesOpen}
                  aria-controls="universities-submenu"
                  aria-label={isUniversitiesOpen ? 'Close universities menu' : 'Open universities menu'}
                >
                  <span>Universities</span>
                  <i className={`fa-solid fa-chevron-down ${styles.dropdownIcon} ${
                    isUniversitiesOpen ? styles.dropdownIconOpen : ''
                  }`}></i>
                </button>

                {isUniversitiesOpen && (
                  <div
                    className={styles.mobileDropdownContent}
                    id="universities-submenu"
                    role="menu"
                    aria-label="Universities submenu"
                  >
                    {universities.map((university) => (
                      <Link
                        key={university.name}
                        href={university.href}
                        className={styles.mobileDropdownLink}
                        onClick={() => {
                          setIsOpen(false);
                          setIsUniversitiesOpen(false);
                        }}
                      >
                        {university.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone Number Mobile */}
              <div className={styles.mobilePhoneContainer}>
                <a
                  href="tel:+447540258059"
                  className={styles.mobilePhoneLink}
                >
                  <i className={`fa-solid fa-phone ${styles.phoneIcon}`}></i>
                  <span>+44 7540 258059</span>
                </a>
              </div>

              {/* Free Consultation Button Mobile */}
              <div className={styles.mobileConsultationContainer}>
                <Link
                  href="/contact"
                  className={styles.mobileConsultationButton}
                  onClick={() => setIsOpen(false)}
                >
                  <span>Free Consultation </span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
