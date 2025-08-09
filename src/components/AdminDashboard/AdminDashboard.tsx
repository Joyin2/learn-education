'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOutAdmin } from '@/lib/auth';
import { 
  getContactSubmissions, 
  updateSubmissionStatus, 
  deleteSubmission, 
  ContactSubmission 
} from '@/lib/firestore';
import { useAuth } from '@/contexts/AuthContext';
import BlogManagement from '@/components/BlogManagement/BlogManagement';
import styles from './AdminDashboard.module.css';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'contacts' | 'blogs'>('contacts');
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      setLoading(true);
      const data = await getContactSubmissions();
      setSubmissions(data);
    } catch (error) {
      console.error('Error loading submissions:', error);
      setError('Failed to load contact submissions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (submissionId: string, status: 'new' | 'read' | 'replied') => {
    try {
      await updateSubmissionStatus(submissionId, status);
      setSubmissions(prev => 
        prev.map(sub => 
          sub.id === submissionId ? { ...sub, status } : sub
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
      setError('Failed to update submission status.');
    }
  };

  const handleDelete = async (submissionId: string) => {
    if (!confirm('Are you sure you want to delete this submission? This action cannot be undone.')) {
      return;
    }

    try {
      await deleteSubmission(submissionId);
      setSubmissions(prev => prev.filter(sub => sub.id !== submissionId));
      if (selectedSubmission?.id === submissionId) {
        setSelectedSubmission(null);
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
      setError('Failed to delete submission.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOutAdmin();
      router.push('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
      setError('Failed to sign out. Please try again.');
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Unknown';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      new: styles.statusNew,
      read: styles.statusRead,
      replied: styles.statusReplied
    };
    return statusClasses[status as keyof typeof statusClasses] || styles.statusNew;
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}>
          <i className="fa-solid fa-spinner fa-spin"></i>
        </div>
        <p>Loading contact submissions...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Admin Dashboard</h1>
            <p className={styles.subtitle}>
              {activeTab === 'contacts' ? 'Contact Form Submissions' : 'Blog Management'}
            </p>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.userInfo}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {user?.email}
            </span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="16,17 21,12 16,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className={styles.tabNavigation}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'contacts' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('contacts')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Contact Submissions
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'blogs' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('blogs')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Blog Management
        </button>
      </nav>

      {error && (
        <div className={styles.errorMessage}>
          <i className="fa-solid fa-exclamation-triangle"></i>
          {error}
          <button onClick={() => setError('')} className={styles.closeError}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
      )}

      {/* Tab Content */}
      {activeTab === 'contacts' ? (
        <div className={styles.content}>
          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className={styles.statInfo}>
                <h3>{submissions.length}</h3>
                <p>Total Submissions</p>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <i className="fa-solid fa-envelope-open"></i>
              </div>
              <div className={styles.statInfo}>
                <h3>{submissions.filter(s => s.status === 'new').length}</h3>
                <p>New Messages</p>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <i className="fa-solid fa-reply"></i>
              </div>
              <div className={styles.statInfo}>
                <h3>{submissions.filter(s => s.status === 'replied').length}</h3>
                <p>Replied</p>
              </div>
            </div>
          </div>

          {/* Submissions Table */}
          <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
              <h2>Contact Submissions</h2>
              <button onClick={loadSubmissions} className={styles.refreshButton}>
                <i className="fa-solid fa-refresh"></i>
                Refresh
              </button>
            </div>

            {submissions.length === 0 ? (
              <div className={styles.emptyState}>
                <i className="fa-solid fa-inbox"></i>
                <h3>No submissions yet</h3>
                <p>Contact form submissions will appear here when received.</p>
              </div>
            ) : (
              <div className={styles.table}>
                <div className={styles.tableHead}>
                  <div className={styles.tableRow}>
                    <div className={styles.tableCell}>Name</div>
                    <div className={styles.tableCell}>Email</div>
                    <div className={styles.tableCell}>Subject</div>
                    <div className={styles.tableCell}>Date</div>
                    <div className={styles.tableCell}>Status</div>
                    <div className={styles.tableCell}>Actions</div>
                  </div>
                </div>
                <div className={styles.tableBody}>
                  {submissions.map((submission) => (
                    <div key={submission.id} className={styles.tableRow}>
                      <div className={styles.tableCell}>
                        <strong>{submission.name}</strong>
                      </div>
                      <div className={styles.tableCell}>
                        {submission.email}
                      </div>
                      <div className={styles.tableCell}>
                        {submission.subject}
                      </div>
                      <div className={styles.tableCell}>
                        {formatDate(submission.timestamp)}
                      </div>
                      <div className={styles.tableCell}>
                        <span className={`${styles.statusBadge} ${getStatusBadge(submission.status)}`}>
                          {submission.status}
                        </span>
                      </div>
                      <div className={styles.tableCell}>
                        <div className={styles.actionButtons}>
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className={styles.viewButton}
                            title="View Details"
                          >
                            <i className="fa-solid fa-eye"></i>
                          </button>
                          <select
                            value={submission.status}
                            onChange={(e) => handleStatusUpdate(submission.id, e.target.value as any)}
                            className={styles.statusSelect}
                          >
                            <option value="new">New</option>
                            <option value="read">Read</option>
                            <option value="replied">Replied</option>
                          </select>
                          <button
                            onClick={() => handleDelete(submission.id)}
                            className={styles.deleteButton}
                            title="Delete"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Submission Detail Modal */}
          {selectedSubmission && (
            <div className={styles.modal} onClick={() => setSelectedSubmission(null)}>
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                  <h3>Submission Details</h3>
                  <button
                    onClick={() => setSelectedSubmission(null)}
                    className={styles.closeModal}
                  >
                    <i className="fa-solid fa-times"></i>
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.submissionDetail}>
                    <div className={styles.detailRow}>
                      <strong>Name:</strong>
                      <span>{selectedSubmission.name}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <strong>Email:</strong>
                      <span>{selectedSubmission.email}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <strong>Phone:</strong>
                      <span>{selectedSubmission.phone || 'Not provided'}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <strong>Subject:</strong>
                      <span>{selectedSubmission.subject}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <strong>Message:</strong>
                      <div className={styles.messageContent}>
                        {selectedSubmission.message}
                      </div>
                    </div>
                    <div className={styles.detailRow}>
                      <strong>Date:</strong>
                      <span>{formatDate(selectedSubmission.timestamp)}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <strong>Status:</strong>
                      <span className={`${styles.statusBadge} ${getStatusBadge(selectedSubmission.status)}`}>
                        {selectedSubmission.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <BlogManagement />
      )}
    </div>
  );
}