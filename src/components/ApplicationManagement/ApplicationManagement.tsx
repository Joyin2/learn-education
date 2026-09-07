'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  getJobApplications,
  updateApplicationStatus,
  deleteJobApplication,
  JobApplication,
  ApplicationStatus,
  APPLICATION_STATUSES
} from '@/lib/careers';
import styles from './ApplicationManagement.module.css';

const statusClassNames: Record<ApplicationStatus, string> = {
  new: styles.statusNew,
  reviewed: styles.statusReviewed,
  shortlisted: styles.statusShortlisted,
  rejected: styles.statusRejected,
  hired: styles.statusHired
};

const formatDate = (timestamp: any) => {
  if (!timestamp) return 'Unknown';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

export default function ApplicationManagement() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [selected, setSelected] = useState<JobApplication | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobFilter, setJobFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState<'All' | ApplicationStatus>('All');

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      setLoading(true);
      const data = await getJobApplications();
      setApplications(data);
    } catch (error) {
      console.error('Error loading applications:', error);
      setError('Failed to load applications. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const jobTitles = useMemo(
    () => [...new Set(applications.map(a => a.jobTitle).filter(Boolean))].sort(),
    [applications]
  );

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return applications.filter(application => {
      const matchesJob = jobFilter === 'All' || application.jobTitle === jobFilter;
      const matchesStatus = statusFilter === 'All' || application.status === statusFilter;
      const matchesSearch =
        !term ||
        application.fullName?.toLowerCase().includes(term) ||
        application.email?.toLowerCase().includes(term) ||
        application.phone?.toLowerCase().includes(term) ||
        application.jobTitle?.toLowerCase().includes(term);

      return matchesJob && matchesStatus && matchesSearch;
    });
  }, [applications, jobFilter, statusFilter, searchTerm]);

  const handleStatusUpdate = async (applicationId: string, status: ApplicationStatus) => {
    try {
      await updateApplicationStatus(applicationId, status);
      setApplications(prev =>
        prev.map(application =>
          application.id === applicationId ? { ...application, status } : application
        )
      );
      setSelected(prev => (prev && prev.id === applicationId ? { ...prev, status } : prev));
    } catch (error) {
      console.error('Error updating application status:', error);
      setError('Failed to update application status.');
    }
  };

  const handleDelete = async (application: JobApplication) => {
    if (!confirm(`Delete the application from ${application.fullName}? This cannot be undone.`)) {
      return;
    }

    try {
      await deleteJobApplication(application.id);
      setApplications(prev => prev.filter(item => item.id !== application.id));
      if (selected?.id === application.id) {
        setSelected(null);
      }
      setSuccess('Application deleted.');
    } catch (error) {
      console.error('Error deleting application:', error);
      setError('Failed to delete application.');
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="31.416" strokeDashoffset="31.416">
              <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
              <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
        <p>Loading applications...</p>
      </div>
    );
  }

  return (
    <div className={styles.applicationManagement}>
      <div className={styles.header}>
        <h2>Job Applications</h2>
        <button onClick={loadApplications} className={styles.refreshButton}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="23,4 23,10 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.49 15A9 9 0 1 1 18.36 5.64L23 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Refresh
        </button>
      </div>

      {error && <div className={`${styles.alert} ${styles.alertError}`}>{error}</div>}
      {success && <div className={`${styles.alert} ${styles.alertSuccess}`}>{success}</div>}

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div>
            <span className={styles.statValue}>{applications.length}</span>
            <span className={styles.statLabel}>Total</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div>
            <span className={styles.statValue}>
              {applications.filter(a => a.status === 'new').length}
            </span>
            <span className={styles.statLabel}>New</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div>
            <span className={styles.statValue}>
              {applications.filter(a => a.status === 'shortlisted').length}
            </span>
            <span className={styles.statLabel}>Shortlisted</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div>
            <span className={styles.statValue}>
              {applications.filter(a => a.status === 'hired').length}
            </span>
            <span className={styles.statLabel}>Hired</span>
          </div>
        </div>
      </div>

      <div className={styles.filters}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by name, email, phone or role..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select
          className={styles.filterSelect}
          value={jobFilter}
          onChange={e => setJobFilter(e.target.value)}
        >
          <option value="All">All roles</option>
          {jobTitles.map(title => (
            <option key={title} value={title}>{title}</option>
          ))}
        </select>

        <select
          className={styles.filterSelect}
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as 'All' | ApplicationStatus)}
        >
          <option value="All">All statuses</option>
          {APPLICATION_STATUSES.map(status => (
            <option key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.tableContainer}>
        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>{applications.length === 0 ? 'No applications yet' : 'No matching applications'}</h3>
            <p>
              {applications.length === 0
                ? 'Applications submitted from the careers page will appear here.'
                : 'Try adjusting your search or filters.'}
            </p>
          </div>
        ) : (
          <div className={styles.table}>
            <div className={styles.tableHead}>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Applicant</div>
                <div className={styles.tableCell}>Contact</div>
                <div className={styles.tableCell}>Role</div>
                <div className={styles.tableCell}>Applied</div>
                <div className={styles.tableCell}>Status</div>
                <div className={styles.tableCell}>Actions</div>
              </div>
            </div>
            <div className={styles.tableBody}>
              {filtered.map(application => (
                <div key={application.id} className={styles.tableRow}>
                  <div className={styles.tableCell}>
                    <span className={styles.applicantName}>{application.fullName}</span>
                    {application.currentRole && (
                      <span className={styles.applicantRole}>{application.currentRole}</span>
                    )}
                  </div>
                  <div className={styles.tableCell}>
                    {application.email}
                    <span className={styles.applicantRole}>{application.phone}</span>
                  </div>
                  <div className={styles.tableCell}>{application.jobTitle}</div>
                  <div className={styles.tableCell}>{formatDate(application.submittedAt)}</div>
                  <div className={styles.tableCell}>
                    <span className={`${styles.statusBadge} ${statusClassNames[application.status]}`}>
                      {application.status}
                    </span>
                  </div>
                  <div className={styles.tableCell}>
                    <div className={styles.actionButtons}>
                      <button
                        onClick={() => setSelected(application)}
                        className={styles.viewButton}
                        title="View application"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>

                      <select
                        value={application.status}
                        onChange={e =>
                          handleStatusUpdate(application.id, e.target.value as ApplicationStatus)
                        }
                        className={styles.statusSelect}
                        title="Change status"
                      >
                        {APPLICATION_STATUSES.map(status => (
                          <option key={status} value={status}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </option>
                        ))}
                      </select>

                      <button
                        onClick={() => handleDelete(application)}
                        className={styles.deleteButton}
                        title="Delete application"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Application Details</h3>
              <button onClick={() => setSelected(null)} className={styles.closeModal}>
                &times;
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.detailRow}>
                <strong>Applied for</strong>
                <span>{selected.jobTitle}</span>
              </div>
              <div className={styles.detailRow}>
                <strong>Name</strong>
                <span>{selected.fullName}</span>
              </div>
              <div className={styles.detailRow}>
                <strong>Email</strong>
                <a href={`mailto:${selected.email}`}>{selected.email}</a>
              </div>
              <div className={styles.detailRow}>
                <strong>Phone</strong>
                <a href={`tel:${selected.phone}`}>{selected.phone}</a>
              </div>
              <div className={styles.detailRow}>
                <strong>Current role</strong>
                <span>{selected.currentRole || 'Not provided'}</span>
              </div>
              <div className={styles.detailRow}>
                <strong>Experience</strong>
                <span>{selected.yearsOfExperience || 'Not provided'}</span>
              </div>
              <div className={styles.detailRow}>
                <strong>CV / Resume</strong>
                <a href={selected.cvUrl} target="_blank" rel="noopener noreferrer">
                  {selected.cvUrl}
                </a>
              </div>
              <div className={styles.detailRow}>
                <strong>LinkedIn</strong>
                {selected.linkedInUrl ? (
                  <a href={selected.linkedInUrl} target="_blank" rel="noopener noreferrer">
                    {selected.linkedInUrl}
                  </a>
                ) : (
                  <span>Not provided</span>
                )}
              </div>
              <div className={styles.detailRow}>
                <strong>Submitted</strong>
                <span>{formatDate(selected.submittedAt)}</span>
              </div>
              <div className={styles.detailRow}>
                <strong>Status</strong>
                <span className={`${styles.statusBadge} ${statusClassNames[selected.status]}`}>
                  {selected.status}
                </span>
              </div>
              {selected.coverLetter && (
                <div className={styles.detailRow}>
                  <strong>Cover letter</strong>
                  <div className={styles.coverLetter}>{selected.coverLetter}</div>
                </div>
              )}
            </div>

            <div className={styles.modalActions}>
              <a
                href={selected.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryAction}
              >
                Open CV
              </a>
              <a
                href={`mailto:${selected.email}?subject=${encodeURIComponent(
                  `Your application for ${selected.jobTitle} - Learn Education`
                )}`}
                className={styles.secondaryAction}
              >
                Reply by email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
