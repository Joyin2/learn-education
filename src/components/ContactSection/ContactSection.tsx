'use client';

import { useState } from 'react';
import styles from './ContactSection.module.css';
import '@/styles/icons/contact-icons.css';
import { submitContactForm, ContactFormData } from '@/lib/firestore';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Prepare form data for submission
      const contactData: ContactFormData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim()
      };

      // Submit to Firestore
      await submitContactForm(contactData);

      // Success - reset form and show success message
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>CONTACT US</div>
            <h1 className={styles.mainTitle}>Get in touch</h1>
            <p className={styles.heroDescription}>
              Have questions about studying abroad? Want to explore your education options? 
              Please fill out the form and one of our consultants will get back to you shortly.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGrid}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={styles.input}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={styles.input}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="subject" className={styles.label}>Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={styles.input}
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={styles.textarea}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send your message</span>
                      <i className="fa-solid fa-paper-plane"></i>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    <i className="fa-solid fa-check-circle"></i>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    <i className="fa-solid fa-exclamation-circle"></i>
                    {errorMessage || 'Sorry, there was an error sending your message. Please try again.'}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={styles.infoSection}>
            {/* London Office */}
            <div className={styles.officeCard}>
              <div className={styles.officeHeader}>
                <i className="fa-solid fa-building"></i>
                <h3 className={styles.officeTitle}>London Office</h3>
              </div>
              <address className={styles.address}>
                246-50 City Gate House,<br />
                Romford Road, 5th floor.<br />
                London. E7 9HZ
              </address>
            </div>

            {/* Contact Details */}
            <div className={styles.contactCard}>
              <h3 className={styles.cardTitle}>
                <i className="fa-solid fa-envelope"></i>
                Email us directly
              </h3>
              <a href="mailto:info@learn-education.co.uk" className={styles.contactLink}>
                info@learn-education.co.uk
              </a>
            </div>

            <div className={styles.contactCard}>
              <h3 className={styles.cardTitle}>
                <i className="fa-solid fa-phone"></i>
                Phone
              </h3>
              <a href="tel:+447540258059" className={styles.contactLink}>
                +44 7540 258059
              </a>
            </div>

            {/* Social Media */}
            <div className={styles.socialCard}>
              <h3 className={styles.cardTitle}>
                <i className="fa-solid fa-share-nodes"></i>
                Follow Us
              </h3>
              <div className={styles.socialLinks}>
                <a href="https://youtube.com/@learneducation" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://facebook.com/learneducation" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://x.com/learneducation" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://linkedin.com/company/learneducation" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Our Offices Section */}
        <div className={styles.officesSection}>
          <h2 className={styles.sectionTitle}>Our Offices</h2>
          <div className={styles.officesGrid}>
            <div className={styles.officeItem}>
              <div className={styles.officeFlag}>
                <i className="fa-solid fa-map-marker-alt"></i>
              </div>
              <div className={styles.officeDetails}>
                <h4 className={styles.officeLocation}>London, UK</h4>
                <address className={styles.officeAddress}>
                  246-50 City Gate House,<br />
                  Romford Road, 5th floor.<br />
                  London. E7 9HZ
                </address>
                <a href="tel:+447540258059" className={styles.officePhone}>
                  +44 7540 258059
                </a>
              </div>
            </div>

            <div className={styles.officeItem}>
              <div className={styles.officeFlag}>
                <i className="fa-solid fa-map-marker-alt"></i>
              </div>
              <div className={styles.officeDetails}>
                <h4 className={styles.officeLocation}>Sylhet, Bangladesh</h4>
                <address className={styles.officeAddress}>
                  Millennium Market, 7th Floor.<br />
                  Zindabazar Sylhet.<br />
                  Bangladesh
                </address>
                <a href="tel:+8801234567890" className={styles.officePhone}>
                  +880 1234 56789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Start Your Global Education Journey Today!</h2>
            <p className={styles.ctaDescription}>
              Ready to take the next step? Our expert consultants are here to guide you through every step of your international education journey.
            </p>
            <a href="tel:+447540258059" className={styles.ctaButton}>
              <i className="fa-solid fa-phone"></i>
              <span>Connect Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
