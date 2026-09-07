'use client';

import { useState } from 'react';
import { submitJobApplication } from '@/lib/careers';
import styles from './JobApplicationForm.module.css';

interface JobApplicationFormProps {
  jobId: string;
  jobTitle: string;
  jobSlug: string;
}

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  currentRole: '',
  yearsOfExperience: '',
  cvUrl: '',
  linkedInUrl: '',
  coverLetter: ''
};

export default function JobApplicationForm({ jobId, jobTitle, jobSlug }: JobApplicationFormProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await submitJobApplication({ ...formData, jobId, jobTitle, jobSlug });
      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.successCard} id="apply">
        <div className={styles.successIcon}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.08V12A10 10 0 1 1 16.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3>Application received</h3>
        <p>
          Thank you for applying for <strong>{jobTitle}</strong>. Our team reviews every application
          and will contact you by email if your profile matches what we are looking for.
        </p>
        <button type="button" className={styles.resetButton} onClick={() => setSubmitted(false)}>
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formCard} id="apply">
      <div className={styles.formHeader}>
        <h3>Apply for this role</h3>
        <p>Fields marked with * are required.</p>
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Your full name"
              disabled={submitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="you@example.com"
              disabled={submitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="+44 7000 000000"
              disabled={submitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="currentRole">Current Role</label>
            <input
              type="text"
              id="currentRole"
              name="currentRole"
              value={formData.currentRole}
              onChange={handleInputChange}
              placeholder="e.g. Education Counsellor"
              disabled={submitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="yearsOfExperience">Years of Experience</label>
            <input
              type="text"
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleInputChange}
              placeholder="e.g. 3 years"
              disabled={submitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="linkedInUrl">LinkedIn Profile</label>
            <input
              type="url"
              id="linkedInUrl"
              name="linkedInUrl"
              value={formData.linkedInUrl}
              onChange={handleInputChange}
              placeholder="https://linkedin.com/in/yourname"
              disabled={submitting}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cvUrl">CV / Resume Link *</label>
          <input
            type="url"
            id="cvUrl"
            name="cvUrl"
            value={formData.cvUrl}
            onChange={handleInputChange}
            required
            placeholder="https://drive.google.com/file/..."
            disabled={submitting}
          />
          <small className={styles.hint}>
            Upload your CV to Google Drive, Dropbox or OneDrive and paste a shareable link here.
            Please make sure the link is viewable by anyone with the link.
          </small>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="coverLetter">Why are you a good fit?</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleInputChange}
            rows={6}
            placeholder="Tell us briefly about your experience and why you want to join Learn Education."
            disabled={submitting}
          />
        </div>

        <button type="submit" className={styles.submitButton} disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
