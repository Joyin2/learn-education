'use client';

import { useState, useEffect } from 'react';
import styles from './CompareChooseSection.module.css';

// Flag paths for different countries
const flagPaths = {
  UK: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/united-kingdom.png',
  USA: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/united-states.png',
  CAN: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/canada.png',
  IRE: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/ireland.png',
  GER: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/germany.png',
  AUS: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/australia.png',
  NZ: 'https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/new-zealand.png',
};

// Comparison data
const comparisonData = [
  {
    feature: 'Degree Duration',
    countries: {
      UK: '3-4 years (UG)\n1 year (PG)',
      USA: '4 years (UG)\n2 years (PG)',
      CAN: '4 years (UG)\n1-2 years (PG)',
      IRE: '3-4 years (UG)\n1-2 years (PG)',
      GER: '3-4 years (UG)\n2 years (PG)',
      AUS: '3 years (UG)\n1-2 years (PG)',
      NZ: '3 years (UG)\n1-2 years (PG)'
    }
  },
  {
    feature: 'Tuition Cost',
    countries: {
      UK: '£15,000-£30,000/year',
      USA: '$20,000-$50,000/year',
      CAN: 'CAD$15,000-$35,000/year',
      IRE: '€10,000-€25,000/year',
      GER: 'Mostly free (Public)\n€10,000/year (Private)',
      AUS: 'AUD$20,000-$45,000/year',
      NZ: 'NZD$18,000-$40,000/year'
    }
  },
  {
    feature: 'Post-Study Work',
    countries: {
      UK: '2 years',
      USA: '1-3 years (OPT)',
      CAN: 'Up to 3 years',
      IRE: '2 years',
      GER: '18 months',
      AUS: '2-4 years',
      NZ: '1-3 years'
    }
  },
  {
    feature: 'Language Requirements',
    countries: {
      UK: 'IELTS: 5.0',
      USA: 'IELTS: 6.0',
      CAN: 'IELTS: 6.0-6.5',
      IRE: 'IELTS: 6.0-6.5',
      GER: 'IELTS: 4.5',
      AUS: 'IELTS: 5.5',
      NZ: 'IELTS: 5.5'
    }
  },
  {
    feature: 'Scholarship Availability',
    countries: {
      UK: '✓',
      USA: '✓',
      CAN: '✓',
      IRE: '✓',
      GER: '✓',
      AUS: '✓',
      NZ: '✓'
    }
  }
];

const countryNames = {
  UK: 'United Kingdom',
  USA: 'United States',
  CAN: 'Canada',
  IRE: 'Ireland',
  GER: 'Germany',
  AUS: 'Australia',
  NZ: 'New Zealand'
};

const exploreLinks = {
  UK: 'Explore UK',
  USA: 'Explore USA',
  CAN: 'Explore Canada',
  IRE: 'Explore Ireland',
  GER: 'Explore Europe',
  AUS: 'Explore Australia',
  NZ: 'Explore NZ'
};

export default function CompareChooseSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.compareChooseSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.headerSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.badge}>COMPARE & CHOOSE</div>
          <h2 className={styles.mainTitle}>Find Your Ideal Study Destination</h2>
          <p className={styles.description}>
            Compare key aspects of our partner countries to find the perfect match for your educational goals and preferences.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={styles.tableWrapper}>
          <div className={styles.tableContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.featureHeader}>Features</th>
                  {Object.keys(countryNames).map((countryCode) => (
                    <th key={countryCode} className={styles.countryHeader}>
                      <div className={styles.countryHeaderContent}>
                        <img 
                          src={flagPaths[countryCode as keyof typeof flagPaths]} 
                          alt={`${countryNames[countryCode as keyof typeof countryNames]} Flag`}
                          className={styles.flagImage}
                        />
                        <span className={styles.countryName}>
                          {countryNames[countryCode as keyof typeof countryNames]}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={styles.dataRow}>
                    <td className={styles.featureCell}>{row.feature}</td>
                    {Object.keys(countryNames).map((countryCode) => (
                      <td key={countryCode} className={styles.dataCell}>
                        <div className={styles.cellContent}>
                          {row.countries[countryCode as keyof typeof row.countries]
                            .split('\n')
                            .map((line, lineIndex) => (
                              <div key={lineIndex} className={styles.cellLine}>
                                {line}
                              </div>
                            ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Learn More Row */}
                <tr className={styles.learnMoreRow}>
                  <td className={styles.featureCell}>Learn More</td>
                  {Object.keys(countryNames).map((countryCode) => (
                    <td key={countryCode} className={styles.dataCell}>
                      <button className={styles.exploreBtn}>
                        {exploreLinks[countryCode as keyof typeof exploreLinks]}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p>* The above information is approximate and subject to change. Contact us for the most current details.</p>
        </div>
      </div>
    </section>
  );
}
