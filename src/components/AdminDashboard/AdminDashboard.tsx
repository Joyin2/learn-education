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
import styles from './AdminDashboard.module.css';

export default function AdminDashboard() {
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
            <p className={styles.subtitle}>Contact Form Submissions</p>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.userInfo}>
              <i className="fa-solid fa-user"></i>
              {user?.email}
            </span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              <i className="fa-solid fa-sign-out-alt"></i>
              Logout
            </button>
          </div>
        </div>
      </header>

      {error && (
        <div className={styles.errorMessage}>
          <i className="fa-solid fa-exclamation-triangle"></i>
          {error}
          <button onClick={() => setError('')} className={styles.closeError}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
      )}

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
              <div className={styles.detailRow}>
                <strong>Name:</strong> {selectedSubmission.name}
              </div>
              <div className={styles.detailRow}>
                <strong>Email:</strong> {selectedSubmission.email}
              </div>
              <div className={styles.detailRow}>
                <strong>Phone:</strong> {selectedSubmission.phone || 'Not provided'}
              </div>
              <div className={styles.detailRow}>
                <strong>Subject:</strong> {selectedSubmission.subject}
              </div>
              <div className={styles.detailRow}>
                <strong>Date:</strong> {formatDate(selectedSubmission.timestamp)}
              </div>
              <div className={styles.detailRow}>
                <strong>Status:</strong> 
                <span className={`${styles.statusBadge} ${getStatusBadge(selectedSubmission.status)}`}>
                  {selectedSubmission.status}
                </span>
              </div>
              <div className={styles.messageSection}>
                <strong>Message:</strong>
                <div className={styles.messageContent}>
                  {selectedSubmission.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
