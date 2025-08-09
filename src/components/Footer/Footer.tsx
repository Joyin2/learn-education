'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const informationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const universityLinks = [
    { name: 'UK Universities', href: '/universities/uk' },
    { name: 'USA Universities', href: '/universities/usa' },
    { name: 'Ireland Universities', href: '/universities/ireland' },
    { name: 'Canada Universities', href: '/universities/canada' },
    { name: 'Germany Universities', href: '/universities/germany' },
    { name: 'Europe Universities', href: '/european-universities' },
    { name: 'Australia Universities', href: '/australian-universities' },
    { name: 'New Zealand Universities', href: '/new-zealand-universities' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Logo and Vision Section */}
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logoLink}>
                <Image
                  src="/assets/logo.png"
                  alt="Learn Education Logo"
                  width={200}
                  height={67}
                  className={styles.logo}
                />
              </Link>
            </div>
            <p className={styles.visionText}>
              Our vision is to be the UK's leading education consultancy, renowned for excellence and simplifying the admissions process for students worldwide.
            </p>

            {/* Social Media Links */}
            <div className={styles.socialMedia}>
              <a
                href="https://youtube.com/@learneducation"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Follow us on YouTube"
              >
                <i className="fa-brands fa-youtube" style={{fontStyle: 'normal'}}></i>
              </a>
              <a
                href="https://facebook.com/learneducation"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Follow us on Facebook"
              >
                <i className="fa-brands fa-facebook" style={{fontStyle: 'normal'}}></i>
              </a>
              <a
                href="https://x.com/learneducation"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Follow us on X (Twitter)"
              >
                <i className="fa-brands fa-x-twitter" style={{fontStyle: 'normal'}}></i>
              </a>
              <a
                href="https://linkedin.com/company/learneducation"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Follow us on LinkedIn"
              >
                <i className="fa-brands fa-linkedin" style={{fontStyle: 'normal'}}></i>
              </a>
            </div>
          </div>

          {/* Information Links */}
          <div className={styles.linkSection}>
            <h3 className={styles.sectionTitle}>Information</h3>
            <ul className={styles.linkList}>
              {informationLinks.map((link) => (
                <li key={link.name} className={styles.linkItem}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Universities Links */}
          <div className={styles.linkSection}>
            <h3 className={styles.sectionTitle}>Universities</h3>
            <ul className={styles.linkList}>
              {universityLinks.map((link) => (
                <li key={link.name} className={styles.linkItem}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Contact Us</h3>
            
            {/* Headquarters */}
            <div className={styles.contactBlock}>
              <h4 className={styles.contactSubtitle}>
                <i className="fa-solid fa-building" style={{fontStyle: 'normal'}}></i>
                Headquarters:
              </h4>
              <address className={styles.address}>
                246-50 City Gate House,<br />
                Romford Road, 5th floor.<br />
                London. E7 9HZ
              </address>
            </div>

            {/* Office */}
            <div className={styles.contactBlock}>
              <h4 className={styles.contactSubtitle}>
                <i className="fa-solid fa-briefcase" style={{fontStyle: 'normal'}}></i>
                Office:
              </h4>
              <address className={styles.address}>
                Millennium Market, 7th Floor.<br />
                Zindabazar Sylhet.<br />
                Bangladesh
              </address>
            </div>

            {/* Contact Details */}
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <i className="fa-solid fa-phone" style={{fontStyle: 'normal'}}></i>
                <a href="tel:+447540258059" className={styles.contactLink}>
                  +44 7540 258059
                </a>
              </div>
              <div className={styles.contactItem}>
                <i className="fa-solid fa-envelope" style={{fontStyle: 'normal'}}></i>
                <a href="mailto:info@learn-education.co.uk" className={styles.contactLink}>
                  info@learn-education.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Learn Education, All Rights Reserved.
            </p>
            <p className={styles.designCredit}>
              Designed by <a href="https://flerid.com" target="_blank" rel="noopener noreferrer" className={styles.designerName}>Flerid</a>
            </p>
          </div>
        </div>
      </div>


    </footer>
  );
}
