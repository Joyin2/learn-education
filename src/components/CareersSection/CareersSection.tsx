'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { getJobPostings, JobPosting } from '@/lib/careers';
import styles from './CareersSection.module.css';

const CareersSection: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      setLoading(true);
      setError('');
      // Only published roles that are still accepting applications
      const data = await getJobPostings({ publishedOnly: true, openOnly: true });
      setJobs(data);
    } catch (err) {
      console.error('Error loading job postings:', err);
      setError('Failed to load open roles. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const departments = useMemo(
    () => ['All', ...new Set(jobs.map(job => job.department).filter(Boolean))].sort((a, b) =>
      a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b)
    ),
    [jobs]
  );

  const employmentTypes = useMemo(
    () => ['All', ...new Set(jobs.map(job => job.employmentType).filter(Boolean))],
    [jobs]
  );

  const filteredJobs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return jobs.filter(job => {
      const matchesDepartment =
        selectedDepartment === 'All' || job.department === selectedDepartment;
      const matchesType = selectedType === 'All' || job.employmentType === selectedType;
      const matchesSearch =
        !term ||
        job.title.toLowerCase().includes(term) ||
        job.summary.toLowerCase().includes(term) ||
        job.location.toLowerCase().includes(term) ||
        job.department.toLowerCase().includes(term);

      return matchesDepartment && matchesType && matchesSearch;
    });
  }, [jobs, selectedDepartment, selectedType, searchTerm]);

  // Featured roles first, then newest
  const sortedJobs = useMemo(
    () => [...filteredJobs].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))),
    [filteredJobs]
  );

  if (loading) {
    return (
      <section className={styles.careersSection} id="open-roles">
        <div className={styles.container}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="31.416" strokeDashoffset="31.416">
                  <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                  <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <p>Loading open roles...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.careersSection} id="open-roles">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Open Positions</h2>
          <p className={styles.sectionSubtitle}>
            {jobs.length > 0
              ? `${jobs.length} role${jobs.length === 1 ? '' : 's'} currently accepting applications.`
              : 'We are not hiring at the moment, but we are always glad to hear from good people.'}
          </p>
        </div>

        {error && <div className={styles.errorMessage}>{error}</div>}

        {jobs.length > 0 && (
          <div className={styles.filters}>
            <div className={styles.searchWrapper}>
              <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search roles, locations or teams..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                aria-label="Search open roles"
              />
            </div>

            <select
              className={styles.filterSelect}
              value={selectedDepartment}
              onChange={e => setSelectedDepartment(e.target.value)}
              aria-label="Filter by department"
            >
              {departments.map(department => (
                <option key={department} value={department}>
                  {department === 'All' ? 'All departments' : department}
                </option>
              ))}
            </select>

            <select
              className={styles.filterSelect}
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              aria-label="Filter by employment type"
            >
              {employmentTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'All' ? 'All types' : type}
                </option>
              ))}
            </select>
          </div>
        )}

        {sortedJobs.length === 0 ? (
          <div className={styles.emptyState}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M16 21V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>{jobs.length === 0 ? 'No open roles right now' : 'No roles match your search'}</h3>
            <p>
              {jobs.length === 0 ? (
                <>
                  New openings are posted here first. Send your CV to{' '}
                  <a href="/contact" className={styles.inlineLink}>our team</a> and we will get in
                  touch when a suitable role opens up.
                </>
              ) : (
                'Try a different search term or clear the filters.'
              )}
            </p>
          </div>
        ) : (
          <div className={styles.jobsGrid}>
            {sortedJobs.map(job => (
              <article key={job.id} className={styles.jobCard}>
                <div className={styles.jobCardHeader}>
                  <span className={styles.department}>{job.department}</span>
                  {job.featured && <span className={styles.featuredBadge}>Featured</span>}
                </div>

                <h3 className={styles.jobTitle}>
                  <Link href={`/careers/${job.slug}`}>{job.title}</Link>
                </h3>

                <div className={styles.metaRow}>
                  <span className={styles.meta}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    {job.location}
                  </span>
                  <span className={styles.meta}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 21V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {job.employmentType}
                  </span>
                  <span className={styles.meta}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {job.workMode}
                  </span>
                </div>

                <p className={styles.jobSummary}>{job.summary}</p>

                <div className={styles.jobCardFooter}>
                  <div className={styles.footerMeta}>
                    {job.salaryRange && <span className={styles.salary}>{job.salaryRange}</span>}
                    {job.applicationDeadline && (
                      <span className={styles.deadline}>
                        Apply by {new Date(job.applicationDeadline).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    )}
                  </div>

                  <Link href={`/careers/${job.slug}`} className={styles.viewButton}>
                    View &amp; Apply
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <polyline points="12,5 19,12 12,19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CareersSection;
