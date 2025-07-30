'use client';

import { useState, useEffect } from 'react';
import styles from './PrivacyPolicySection.module.css';

export default function PrivacyPolicySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: 'information-we-collect', title: 'Information We Collect', icon: 'fa-solid fa-info-circle' },
    { id: 'information-collected-automatically', title: 'Information Collected Automatically', icon: 'fa-solid fa-cog' },
    { id: 'how-we-use-information', title: 'How We Use Your Information', icon: 'fa-solid fa-wrench' },
    { id: 'legal-basis', title: 'Legal Basis for Processing', icon: 'fa-solid fa-balance-scale' },
    { id: 'log-files', title: 'Log Files', icon: 'fa-solid fa-file-text' },
    { id: 'cookies', title: 'Cookies and Web Beacons', icon: 'fa-solid fa-circle' },
    { id: 'data-security', title: 'Data Security', icon: 'fa-solid fa-lock' },
    { id: 'international-transfers', title: 'International Data Transfers', icon: 'fa-solid fa-globe' },
    { id: 'third-party', title: 'Third-Party Privacy Policies', icon: 'fa-solid fa-external-link' },
    { id: 'gdpr-rights', title: 'GDPR Data Protection Rights', icon: 'fa-solid fa-user' },
    { id: 'children-information', title: 'Children\'s Information', icon: 'fa-solid fa-child' },
    { id: 'data-retention', title: 'Data Retention', icon: 'fa-solid fa-clock' },
    { id: 'changes', title: 'Changes to This Privacy Policy', icon: 'fa-solid fa-pencil' },
    { id: 'contact', title: 'Contact Us', icon: 'fa-solid fa-envelope' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Intersection Observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    // Observe all sections after component mounts
    setTimeout(() => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={styles.privacySection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.headerSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.badge}>PRIVACY POLICY</div>
          <h1 className={styles.mainTitle}>Your Privacy Matters to Us</h1>
          <p className={styles.description}>
            Learn how we collect, use, and protect your personal information. 
            Last updated: April 15, 2025
          </p>
        </div>

        <div className={styles.contentWrapper}>
          {/* Table of Contents */}
          <div className={`${styles.tableOfContents} ${isVisible ? styles.slideInLeft : ''}`}>
            <h3 className={styles.tocTitle}>
              <i className="fa-solid fa-list" style={{fontStyle: 'normal'}}></i>
              Table of Contents
            </h3>
            <nav className={styles.tocNav}>
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`${styles.tocItem} ${activeSection === section.id ? styles.active : ''}`}
                  style={{'--delay': `${index * 0.05}s`} as React.CSSProperties}
                >
                  <i className={section.icon} style={{fontStyle: 'normal'}}></i>
                  <span>{section.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className={`${styles.mainContent} ${isVisible ? styles.slideInRight : ''}`}>
            {/* Introduction */}
            <div className={styles.introSection}>
              <p className={styles.introText}>
                At Learn Education, accessible from learn-education.co.uk, one of our main priorities is the privacy of our visitors. 
                This Privacy Policy document contains types of information that is collected and recorded by Learn Education and how we use it.
              </p>
              <p className={styles.introText}>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at{' '}
                <a href="mailto:privacy@learn-education.co.uk" className={styles.emailLink}>privacy@learn-education.co.uk</a>.
              </p>
              <p className={styles.introText}>
                This Privacy Policy applies to all services offered by Learn Education, including our website, application assistance, 
                consultation services, and other educational support services. It explains how we collect, use, disclose, and safeguard 
                your information when you use our services.
              </p>
              <div className={styles.warningBox}>
                <i className="fa-solid fa-exclamation-triangle" style={{fontStyle: 'normal'}}></i>
                <p>
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                  please do not access our services.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <section id="information-we-collect" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-info-circle" style={{fontStyle: 'normal'}}></i>
                Information We Collect
              </h2>
              <p className={styles.sectionText}>
                When you register on our website, as part of the process, we collect personal information you give us such as your name, 
                address, and email address. Your personal information will be used for the specific reasons stated below only.
              </p>
              <p className={styles.sectionText}>We collect the following types of information:</p>
              <ul className={styles.bulletList}>
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Educational background and qualifications (academic records, test scores, certificates)</li>
                <li>Preferences regarding educational institutions and programs</li>
                <li>Information about your device and internet connection</li>
                <li>Financial information (for processing application fees or service payments)</li>
                <li>Passport and visa information (for international student applications)</li>
                <li>Demographic information (nationality, gender, date of birth)</li>
              </ul>
            </section>

            {/* Information Collected Automatically */}
            <section id="information-collected-automatically" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-cog" style={{fontStyle: 'normal'}}></i>
                Information Collected Automatically
              </h2>
              <p className={styles.sectionText}>
                When you visit our website, we automatically collect certain information about your device, including information about 
                your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you 
                browse the site, we collect information about the individual web pages that you view, what websites or search terms 
                referred you to our site, and information about how you interact with the site.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section id="how-we-use-information" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-wrench" style={{fontStyle: 'normal'}}></i>
                How We Use Your Information
              </h2>
              <p className={styles.sectionText}>We use the information we collect in various ways, including to:</p>
              <ul className={styles.bulletList}>
                <li>Provide, operate, and maintain our website and services</li>
                <li>Improve, personalize, and expand our website and services</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Process your applications to educational institutions</li>
                <li>Communicate with you about your applications, services, or general inquiries</li>
                <li>Provide you with updates and other information relating to our services</li>
                <li>Find and prevent fraud or other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Legal Basis for Processing */}
            <section id="legal-basis" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-balance-scale" style={{fontStyle: 'normal'}}></i>
                Legal Basis for Processing
              </h2>
              <p className={styles.sectionText}>We process your personal information based on one or more of the following legal grounds:</p>
              <ul className={styles.bulletList}>
                <li>Your consent to the processing of your personal data</li>
                <li>The necessity to perform a contract with you or take steps at your request before entering into a contract</li>
                <li>Our legitimate interests, which do not override your fundamental rights and freedoms</li>
                <li>Compliance with legal obligations to which we are subject</li>
              </ul>
            </section>

            {/* Log Files */}
            <section id="log-files" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-file-text" style={{fontStyle: 'normal'}}></i>
                Log Files
              </h2>
              <p className={styles.sectionText}>
                Learn Education follows a standard procedure of using log files. These files log visitors when they visit websites.
                All hosting companies do this as part of hosting services' analytics. The information collected by log files include
                internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages,
                and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose
                of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering
                demographic information.
              </p>
            </section>

            {/* Cookies and Web Beacons */}
            <section id="cookies" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-circle" style={{fontStyle: 'normal'}}></i>
                Cookies and Web Beacons
              </h2>
              <p className={styles.sectionText}>
                Like any other website, Learn Education uses 'cookies'. These cookies are used to store information including visitors'
                preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the
                users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>

              <h3 className={styles.subSectionTitle}>Types of Cookies We Use</h3>
              <ul className={styles.bulletList}>
                <li><strong>Necessary cookies:</strong> Essential for the basic functionality of our website.</li>
                <li><strong>Preference cookies:</strong> Allow our website to remember choices you have made in the past.</li>
                <li><strong>Statistics cookies:</strong> Collect anonymous information about how visitors use our website.</li>
                <li><strong>Marketing cookies:</strong> Track visitors across websites to display relevant advertisements.</li>
              </ul>

              <h3 className={styles.subSectionTitle}>Managing Cookies</h3>
              <p className={styles.sectionText}>
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
              </p>
            </section>

            {/* Data Security */}
            <section id="data-security" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-lock" style={{fontStyle: 'normal'}}></i>
                Data Security
              </h2>
              <p className={styles.sectionText}>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any
                personal information we process. However, despite our safeguards and efforts to secure your information, no electronic
                transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise
                or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and
                improperly collect, access, steal, or modify your information.
              </p>
              <p className={styles.sectionText}>
                We will make any legally required disclosures of any breach of the security, confidentiality, or integrity of your
                unencrypted electronically stored "personal data" (as defined in applicable laws on security breach notification) to you
                via email or conspicuous posting on this website as promptly as possible and without unreasonable delay, consistent with
                (i) the legitimate needs of law enforcement or (ii) any measures necessary to determine the scope of the breach and restore
                the reasonable integrity of the data system.
              </p>
            </section>

            {/* International Data Transfers */}
            <section id="international-transfers" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-globe" style={{fontStyle: 'normal'}}></i>
                International Data Transfers
              </h2>
              <p className={styles.sectionText}>
                We are based in the United Kingdom but may transfer, store, and process your information in countries other than your own.
                Our servers are located in the UK, but we may use service providers based in other countries to process your information.
                Please be aware that these countries may have different data protection laws than your country of residence.
              </p>
              <p className={styles.sectionText}>
                If you are located in the European Economic Area (EEA), we will only transfer your personal data to countries that have
                been deemed to provide an adequate level of protection for personal data by the European Commission, or where we have
                implemented appropriate safeguards to ensure your personal data remains protected.
              </p>
            </section>

            {/* Third-Party Privacy Policies */}
            <section id="third-party" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-external-link" style={{fontStyle: 'normal'}}></i>
                Third-Party Privacy Policies
              </h2>
              <p className={styles.sectionText}>
                Learn Education's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult
                the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their
                practices and instructions about how to opt-out of certain options.
              </p>
              <p className={styles.sectionText}>
                You can choose to disable cookies through your individual browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the browsers' respective websites.
              </p>
              <p className={styles.sectionText}>
                We may use third-party service providers to help us operate our business and the website or administer activities on our
                behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those
                limited purposes provided that you have given us your permission.
              </p>
            </section>

            {/* GDPR Data Protection Rights */}
            <section id="gdpr-rights" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-user" style={{fontStyle: 'normal'}}></i>
                GDPR Data Protection Rights
              </h2>
              <p className={styles.sectionText}>
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
                <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
              <p className={styles.sectionText}>
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@learn-education.co.uk" className={styles.emailLink}>privacy@learn-education.co.uk</a>.
              </p>
              <p className={styles.sectionText}>
                You also have the right to complain to a data protection authority about our collection and use of your personal data.
                For more information, please contact your local data protection authority.
              </p>
            </section>

            {/* Children's Information */}
            <section id="children-information" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-child" style={{fontStyle: 'normal'}}></i>
                Children's Information
              </h2>
              <p className={styles.sectionText}>
                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians
                to observe, participate in, and/or monitor and guide their online activity.
              </p>
              <p className={styles.sectionText}>
                Learn Education does not knowingly collect any Personal Identifiable Information from children under the age of 16. If you
                think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately
                and we will do our best efforts to promptly remove such information from our records.
              </p>
              <p className={styles.sectionText}>
                If we need to rely on consent as a legal basis for processing your information and your country requires consent from a parent,
                we may require your parent's consent before we collect and use that information.
              </p>
            </section>

            {/* Data Retention */}
            <section id="data-retention" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-clock" style={{fontStyle: 'normal'}}></i>
                Data Retention
              </h2>
              <p className={styles.sectionText}>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy,
                unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
              </p>
              <p className={styles.sectionText}>
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize
                such information, or, if this is not possible (for example, because your personal information has been stored in backup
                archives), then we will securely store your personal information and isolate it from any further processing until deletion
                is possible.
              </p>
            </section>

            {/* Changes to This Privacy Policy */}
            <section id="changes" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-pencil" style={{fontStyle: 'normal'}}></i>
                Changes to This Privacy Policy
              </h2>
              <p className={styles.sectionText}>
                We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes.
                We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately,
                after they are posted on this page.
              </p>
              <p className={styles.sectionText}>
                If we make material changes to this privacy policy, we will notify you either through the email address you have provided us,
                or by placing a prominent notice on our website.
              </p>
            </section>

            {/* Contact Us */}
            <section id="contact" className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>
                <i className="fa-solid fa-envelope" style={{fontStyle: 'normal'}}></i>
                Contact Us
              </h2>
              <p className={styles.sectionText}>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us:
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <i className="fa-solid fa-envelope" style={{fontStyle: 'normal'}}></i>
                  <div>
                    <strong>By email:</strong>
                    <a href="mailto:privacy@learn-education.co.uk" className={styles.emailLink}>privacy@learn-education.co.uk</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <i className="fa-solid fa-phone" style={{fontStyle: 'normal'}}></i>
                  <div>
                    <strong>By phone:</strong>
                    <a href="tel:+447540258059" className={styles.phoneLink}>+44 7540 258059</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <i className="fa-solid fa-map-marker-alt" style={{fontStyle: 'normal'}}></i>
                  <div>
                    <strong>By mail:</strong>
                    <span>Learn Education, 246-50 City Gate House, Romford Road, 5th floor, London, E7 9HZ, United Kingdom</span>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <i className="fa-solid fa-user-shield" style={{fontStyle: 'normal'}}></i>
                  <div>
                    <strong>Data Protection Officer:</strong>
                    <a href="mailto:dpo@learn-education.co.uk" className={styles.emailLink}>dpo@learn-education.co.uk</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
