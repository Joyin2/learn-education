'use client';

import { useState, useEffect } from 'react';
import {
  getJobPostings,
  getJobApplications,
  createJobPosting,
  updateJobPosting,
  deleteJobPosting,
  isJobOpen,
  JobPosting,
  DEPARTMENTS,
  EMPLOYMENT_TYPES,
  WORK_MODES
} from '@/lib/careers';
import RichTextEditor from '@/components/RichTextEditor';
import styles from './JobManagement.module.css';

interface JobFormData {
  title: string;
  department: string;
  location: string;
  employmentType: string;
  workMode: string;
  experienceLevel: string;
  salaryRange: string;
  openings: string;
  summary: string;
  description: string;
  responsibilities: string;
  requirements: string;
  benefits: string;
  postedDate: string;
  applicationDeadline: string;
  featured: boolean;
  published: boolean;
}

const initialFormData: JobFormData = {
  title: '',
  department: '',
  location: '',
  employmentType: 'Full-time',
  workMode: 'On-site',
  experienceLevel: '',
  salaryRange: '',
  openings: '1',
  summary: '',
  description: '',
  responsibilities: '',
  requirements: '',
  benefits: '',
  postedDate: new Date().toISOString().split('T')[0],
  applicationDeadline: '',
  featured: false,
  published: false
};

// Multi-line textareas are stored as string arrays - one item per line
const toLines = (value: string): string[] =>
  value
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

export default function JobManagement() {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [applicationCounts, setApplicationCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null);
  const [formData, setFormData] = useState<JobFormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      setLoading(true);
      const data = await getJobPostings();
      setJobs(data);

      // Application counts are a nice-to-have - never block the jobs list on them
      try {
        const applications = await getJobApplications();
        const counts: Record<string, number> = {};
        applications.forEach(application => {
          counts[application.jobId] = (counts[application.jobId] || 0) + 1;
        });
        setApplicationCounts(counts);
      } catch (countError) {
        console.error('Error loading application counts:', countError);
      }
    } catch (error) {
      console.error('Error loading jobs:', error);
      setError('Failed to load job postings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleDescriptionChange = (html: string) => {
    setFormData(prev => ({ ...prev, description: html }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const jobData = {
        title: formData.title,
        department: formData.department,
        location: formData.location,
        employmentType: formData.employmentType,
        workMode: formData.workMode,
        experienceLevel: formData.experienceLevel,
        salaryRange: formData.salaryRange,
        openings: Number(formData.openings) || 1,
        summary: formData.summary,
        description: formData.description,
        responsibilities: toLines(formData.responsibilities),
        requirements: toLines(formData.requirements),
        benefits: toLines(formData.benefits),
        postedDate: formData.postedDate,
        applicationDeadline: formData.applicationDeadline,
        featured: formData.featured,
        published: formData.published
      };

      if (editingJob) {
        await updateJobPosting(editingJob.id!, jobData);
        setSuccess('Job posting updated successfully!');
      } else {
        await createJobPosting(jobData);
        setSuccess('Job posting created successfully!');
      }

      setFormData(initialFormData);
      setShowForm(false);
      setEditingJob(null);
      loadJobs();
    } catch (error: any) {
      setError(error.message || 'Failed to save job posting.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (job: JobPosting) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      employmentType: job.employmentType || 'Full-time',
      workMode: job.workMode || 'On-site',
      experienceLevel: job.experienceLevel || '',
      salaryRange: job.salaryRange || '',
      openings: String(job.openings || 1),
      summary: job.summary,
      description: job.description || '',
      responsibilities: (job.responsibilities || []).join('\n'),
      requirements: (job.requirements || []).join('\n'),
      benefits: (job.benefits || []).join('\n'),
      postedDate: job.postedDate,
      applicationDeadline: job.applicationDeadline || '',
      featured: job.featured || false,
      published: job.published
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (job: JobPosting) => {
    const applications = applicationCounts[job.id!] || 0;
    const warning = applications
      ? `\n\nNote: ${applications} application(s) were submitted for this role. They stay in the Applications tab.`
      : '';

    if (!confirm(`Delete "${job.title}"? This action cannot be undone.${warning}`)) {
      return;
    }

    try {
      await deleteJobPosting(job.id!);
      setSuccess('Job posting deleted successfully!');
      loadJobs();
    } catch (error) {
      setError('Failed to delete job posting.');
    }
  };

  const togglePublished = async (job: JobPosting) => {
    try {
      await updateJobPosting(job.id!, { ...job, published: !job.published });
      setSuccess(job.published ? 'Job moved back to draft.' : 'Job published successfully!');
      loadJobs();
    } catch (error) {
      setError('Failed to update job status.');
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setEditingJob(null);
    setShowForm(false);
    setError('');
    setSuccess('');
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
        <p>Loading job postings...</p>
      </div>
    );
  }

  return (
    <div className={styles.jobManagement}>
      <div className={styles.header}>
        <h2>Careers Management</h2>
        <div className={styles.headerActions}>
          <button
            className={styles.addButton}
            onClick={() => setShowForm(true)}
            disabled={showForm}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Post New Job
          </button>
        </div>
      </div>

      {error && <div className={styles.alert + ' ' + styles.alertError}>{error}</div>}
      {success && <div className={styles.alert + ' ' + styles.alertSuccess}>{success}</div>}

      {showForm && (
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h3>{editingJob ? 'Edit Job Posting' : 'Create New Job Posting'}</h3>
            <button className={styles.closeButton} onClick={resetForm}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="title">Job Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Senior Education Counsellor"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="department">Department *</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a department</option>
                  {DEPARTMENTS.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="location">Location *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. London, UK"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="employmentType">Employment Type *</label>
                <select
                  id="employmentType"
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleInputChange}
                  required
                >
                  {EMPLOYMENT_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="workMode">Work Mode *</label>
                <select
                  id="workMode"
                  name="workMode"
                  value={formData.workMode}
                  onChange={handleInputChange}
                  required
                >
                  {WORK_MODES.map(mode => (
                    <option key={mode} value={mode}>{mode}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="experienceLevel">Experience Required</label>
                <input
                  type="text"
                  id="experienceLevel"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  placeholder="e.g. 2-4 years"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="salaryRange">Salary Range</label>
                <input
                  type="text"
                  id="salaryRange"
                  name="salaryRange"
                  value={formData.salaryRange}
                  onChange={handleInputChange}
                  placeholder="e.g. £28,000 - £34,000 per year"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="openings">Number of Openings</label>
                <input
                  type="number"
                  id="openings"
                  name="openings"
                  min="1"
                  value={formData.openings}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="postedDate">Posted Date *</label>
                <input
                  type="date"
                  id="postedDate"
                  name="postedDate"
                  value={formData.postedDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="applicationDeadline">Application Deadline</label>
                <input
                  type="date"
                  id="applicationDeadline"
                  name="applicationDeadline"
                  value={formData.applicationDeadline}
                  onChange={handleInputChange}
                />
                <small className={styles.hint}>
                  Leave empty to keep the role open until filled. Past deadlines close applications automatically.
                </small>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="summary">Short Summary *</label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="One or two sentences shown on the careers listing card"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Full Job Description</label>
              <RichTextEditor
                content={formData.description}
                onChange={handleDescriptionChange}
                placeholder="Describe the role, the team and what a typical day looks like..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="responsibilities">Key Responsibilities</label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleInputChange}
                rows={5}
                placeholder={'Counsel students on university options\nReview applications and personal statements\nMaintain relationships with partner universities'}
              />
              <small className={styles.hint}>One responsibility per line.</small>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="requirements">Requirements</label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                rows={5}
                placeholder={"Bachelor's degree in any discipline\n2+ years in education consultancy\nExcellent written and spoken English"}
              />
              <small className={styles.hint}>One requirement per line.</small>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="benefits">Benefits</label>
              <textarea
                id="benefits"
                name="benefits"
                value={formData.benefits}
                onChange={handleInputChange}
                rows={4}
                placeholder={'Performance bonus\n25 days annual leave\nProfessional development budget'}
              />
              <small className={styles.hint}>One benefit per line.</small>
            </div>

            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                />
                <span className={styles.checkmark}></span>
                Featured Role
              </label>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                />
                <span className={styles.checkmark}></span>
                Published (visible on the careers page)
              </label>
            </div>

            <div className={styles.formActions}>
              <button type="button" onClick={resetForm} className={styles.cancelButton}>
                Cancel
              </button>
              <button type="submit" disabled={submitting} className={styles.submitButton}>
                {submitting ? 'Saving...' : (editingJob ? 'Update Job' : 'Create Job')}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className={styles.jobsContainer}>
        <h3>All Job Postings ({jobs.length})</h3>

        {jobs.length === 0 ? (
          <div className={styles.emptyState}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 21V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>No job postings yet. Create your first opening!</p>
          </div>
        ) : (
          <div className={styles.jobsGrid}>
            {jobs.map(job => {
              const applications = applicationCounts[job.id!] || 0;
              const open = isJobOpen(job);

              return (
                <div key={job.id} className={styles.jobCard}>
                  <div className={styles.jobHeader}>
                    <div className={styles.jobBadges}>
                      {job.featured && <span className={styles.featuredBadge}>Featured</span>}
                      <span className={`${styles.statusBadge} ${job.published ? styles.published : styles.draft}`}>
                        {job.published ? 'Published' : 'Draft'}
                      </span>
                      {job.published && !open && (
                        <span className={`${styles.statusBadge} ${styles.closed}`}>Closed</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.jobContent}>
                    <h4 className={styles.jobTitle}>{job.title}</h4>

                    <div className={styles.metaChips}>
                      <span className={styles.chip}>{job.department}</span>
                      <span className={`${styles.chip} ${styles.chipMuted}`}>{job.location}</span>
                      <span className={`${styles.chip} ${styles.chipMuted}`}>{job.employmentType}</span>
                      <span className={`${styles.chip} ${styles.chipMuted}`}>{job.workMode}</span>
                      {job.openings > 1 && (
                        <span className={`${styles.chip} ${styles.chipMuted}`}>{job.openings} openings</span>
                      )}
                    </div>

                    <p className={styles.jobExcerpt}>{job.summary}</p>

                    <div className={styles.jobFooter}>
                      <div className={styles.jobAuthor}>
                        <span
                          className={`${styles.applicationCount} ${applications === 0 ? styles.applicationCountEmpty : ''}`}
                        >
                          {applications} application{applications === 1 ? '' : 's'}
                        </span>
                        <span className={styles.jobDate}>
                          {job.applicationDeadline
                            ? `Closes ${new Date(job.applicationDeadline).toLocaleDateString()}`
                            : 'Open until filled'}
                        </span>
                      </div>

                      <div className={styles.jobActions}>
                        <button
                          onClick={() => togglePublished(job)}
                          className={styles.editButton}
                          title={job.published ? 'Move to draft' : 'Publish job'}
                        >
                          {job.published ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 6.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 21.06 15.94M1 1L23 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          )}
                        </button>

                        {job.published && (
                          <a
                            href={`/careers/${job.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.viewLink}
                            title="View live page"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </a>
                        )}

                        <button
                          onClick={() => handleEdit(job)}
                          className={styles.editButton}
                          title="Edit job"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>

                        <button
                          onClick={() => handleDelete(job)}
                          className={styles.deleteButton}
                          title="Delete job"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
