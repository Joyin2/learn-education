import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  orderBy,
  Timestamp,
  doc,
  deleteDoc,
  updateDoc,
  where,
  limit
} from 'firebase/firestore';
import { db } from './firebase';
import { generateSlug } from './firestore';

// Collection names
const JOBS_COLLECTION = 'job_postings';
const APPLICATIONS_COLLECTION = 'job_applications';

// ============ TYPES ============

export interface JobPosting {
  id?: string;
  slug: string; // URL-friendly slug for SEO
  title: string;
  department: string;
  location: string;
  employmentType: string; // Full-time, Part-time, Contract, Internship
  workMode: string; // On-site, Hybrid, Remote
  experienceLevel: string; // e.g. "2+ years"
  salaryRange: string; // e.g. "28,000 - 34,000 per year"
  openings: number;
  summary: string; // short description shown on listing cards
  description: string; // rich HTML description
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
  applicationDeadline: string; // empty string means "open until filled"
  featured?: boolean;
  published: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export type ApplicationStatus = 'new' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';

export interface JobApplicationData {
  jobId: string;
  jobTitle: string;
  jobSlug: string;
  fullName: string;
  email: string;
  phone: string;
  currentRole: string;
  yearsOfExperience: string;
  cvUrl: string;
  linkedInUrl: string;
  coverLetter: string;
}

export interface JobApplication extends JobApplicationData {
  id: string;
  status: ApplicationStatus;
  submittedAt: Timestamp;
}

export const DEPARTMENTS = [
  'Admissions & Counselling',
  'Student Recruitment',
  'Visa & Compliance',
  'Marketing',
  'Sales & Partnerships',
  'Operations',
  'Finance',
  'Technology',
  'Human Resources'
];

export const EMPLOYMENT_TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Temporary'];

export const WORK_MODES = ['On-site', 'Hybrid', 'Remote'];

export const APPLICATION_STATUSES: ApplicationStatus[] = [
  'new',
  'reviewed',
  'shortlisted',
  'rejected',
  'hired'
];

// ============ HELPERS ============

/**
 * Ensure a job slug is unique within the job postings collection
 */
export async function ensureUniqueJobSlug(baseSlug: string, excludeId?: string): Promise<string> {
  const isAvailable = async (candidate: string): Promise<boolean> => {
    const snapshot = await getDocs(
      query(collection(db, JOBS_COLLECTION), where('slug', '==', candidate))
    );
    if (snapshot.empty) return true;
    return Boolean(excludeId) && snapshot.docs.every(d => d.id === excludeId);
  };

  try {
    if (await isAvailable(baseSlug)) {
      return baseSlug;
    }

    let counter = 1;
    while (counter < 100) {
      const candidate = `${baseSlug}-${counter}`;
      if (await isAvailable(candidate)) {
        return candidate;
      }
      counter++;
    }

    return `${baseSlug}-${Date.now()}`;
  } catch (error) {
    console.error('Error ensuring unique job slug:', error);
    return `${baseSlug}-${Date.now()}`;
  }
}

/**
 * Build a complete job document. Firestore rejects undefined values, so every
 * optional field gets an explicit empty default.
 */
function normaliseJob(
  data: Partial<JobPosting>
): Omit<JobPosting, 'id' | 'slug' | 'createdAt' | 'updatedAt'> {
  return {
    title: data.title?.trim() || '',
    department: data.department || '',
    location: data.location?.trim() || '',
    employmentType: data.employmentType || 'Full-time',
    workMode: data.workMode || 'On-site',
    experienceLevel: data.experienceLevel?.trim() || '',
    salaryRange: data.salaryRange?.trim() || '',
    openings: Number(data.openings) > 0 ? Number(data.openings) : 1,
    summary: data.summary?.trim() || '',
    description: data.description || '',
    responsibilities: data.responsibilities || [],
    requirements: data.requirements || [],
    benefits: data.benefits || [],
    postedDate: data.postedDate || new Date().toISOString().split('T')[0],
    applicationDeadline: data.applicationDeadline || '',
    featured: Boolean(data.featured),
    published: Boolean(data.published)
  };
}

/**
 * A deadline in the past means the role is closed to new applications
 */
export function isJobOpen(job: JobPosting): boolean {
  if (!job.published) return false;
  if (!job.applicationDeadline) return true;

  const deadline = new Date(job.applicationDeadline);
  if (isNaN(deadline.getTime())) return true;

  // Applications close at the end of the deadline day
  deadline.setHours(23, 59, 59, 999);
  return deadline.getTime() >= Date.now();
}

// ============ JOB POSTING FUNCTIONS ============

/**
 * Create a new job posting (admin only)
 */
export async function createJobPosting(
  jobData: Omit<JobPosting, 'id' | 'slug' | 'createdAt' | 'updatedAt'>
): Promise<string> {
  try {
    if (!jobData.title || !jobData.department || !jobData.location || !jobData.summary) {
      throw new Error('Title, department, location and summary are required');
    }

    const slug = await ensureUniqueJobSlug(generateSlug(jobData.title));

    const docRef = await addDoc(collection(db, JOBS_COLLECTION), {
      ...normaliseJob(jobData),
      slug,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });

    return docRef.id;
  } catch (error) {
    console.error('Error creating job posting:', error);
    throw error;
  }
}

/**
 * Get job postings, newest first. Filtering happens client-side so no
 * composite Firestore indexes are required.
 */
export async function getJobPostings(options?: {
  publishedOnly?: boolean;
  openOnly?: boolean;
  department?: string;
  featured?: boolean;
  limitCount?: number;
}): Promise<JobPosting[]> {
  try {
    if (!db) {
      console.error('Firestore is not initialised - cannot load job postings');
      return [];
    }

    let q = query(collection(db, JOBS_COLLECTION), orderBy('createdAt', 'desc'));

    if (options?.limitCount) {
      q = query(q, limit(options.limitCount));
    }

    const snapshot = await getDocs(q);

    let jobs: JobPosting[] = snapshot.docs.map(docSnap => ({
      id: docSnap.id,
      ...docSnap.data()
    })) as JobPosting[];

    if (options?.publishedOnly) {
      jobs = jobs.filter(job => job.published);
    }

    if (options?.openOnly) {
      jobs = jobs.filter(job => isJobOpen(job));
    }

    if (options?.department) {
      jobs = jobs.filter(job => job.department === options.department);
    }

    if (options?.featured !== undefined) {
      jobs = jobs.filter(job => Boolean(job.featured) === options.featured);
    }

    return jobs;
  } catch (error) {
    console.error('Error fetching job postings:', error);
    // Return an empty list rather than throwing so the careers page still renders
    return [];
  }
}

/**
 * Get a single job posting by slug, falling back to document ID
 */
export async function getJobPosting(slugOrId: string): Promise<JobPosting | null> {
  try {
    if (!slugOrId || typeof slugOrId !== 'string') {
      console.error('Invalid slugOrId provided to getJobPosting:', slugOrId);
      return null;
    }

    try {
      const snapshot = await getDocs(
        query(collection(db, JOBS_COLLECTION), where('slug', '==', slugOrId))
      );

      if (!snapshot.empty) {
        const docSnap = snapshot.docs[0];
        return { id: docSnap.id, ...docSnap.data() } as JobPosting;
      }
    } catch (queryError) {
      console.log('Job slug query failed, trying by ID:', queryError);
    }

    const docSnap = await getDoc(doc(db, JOBS_COLLECTION, slugOrId));
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as JobPosting;
    }

    return null;
  } catch (error) {
    console.error('Error fetching job posting:', error);
    return null;
  }
}

/**
 * Update a job posting (admin only)
 */
export async function updateJobPosting(
  jobId: string,
  updates: Partial<JobPosting>
): Promise<void> {
  try {
    const payload: Partial<JobPosting> & { updatedAt: Timestamp } = {
      ...normaliseJob(updates),
      updatedAt: Timestamp.now()
    };

    // Keep the slug in sync with the title
    if (updates.title) {
      payload.slug = await ensureUniqueJobSlug(generateSlug(updates.title), jobId);
    }

    await updateDoc(doc(db, JOBS_COLLECTION, jobId), payload);
  } catch (error) {
    console.error('Error updating job posting:', error);
    throw error;
  }
}

/**
 * Delete a job posting (admin only)
 */
export async function deleteJobPosting(jobId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, JOBS_COLLECTION, jobId));
  } catch (error) {
    console.error('Error deleting job posting:', error);
    throw error;
  }
}

/**
 * Departments that currently have open, published roles
 */
export async function getJobDepartments(): Promise<string[]> {
  try {
    const jobs = await getJobPostings({ publishedOnly: true, openOnly: true });
    return [...new Set(jobs.map(job => job.department).filter(Boolean))].sort();
  } catch (error) {
    console.error('Error fetching job departments:', error);
    return [];
  }
}

// ============ APPLICATION FUNCTIONS ============

/**
 * Submit a job application (public)
 */
export async function submitJobApplication(application: JobApplicationData): Promise<string> {
  try {
    if (!application.fullName || !application.email || !application.phone || !application.cvUrl) {
      throw new Error('Please fill in all required fields');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(application.email)) {
      throw new Error('Please enter a valid email address');
    }

    try {
      const cv = new URL(application.cvUrl);
      if (cv.protocol !== 'http:' && cv.protocol !== 'https:') {
        throw new Error('invalid protocol');
      }
    } catch {
      throw new Error('Please enter a valid CV link starting with http:// or https://');
    }

    const docRef = await addDoc(collection(db, APPLICATIONS_COLLECTION), {
      jobId: application.jobId,
      jobTitle: application.jobTitle,
      jobSlug: application.jobSlug,
      fullName: application.fullName.trim(),
      email: application.email.trim().toLowerCase(),
      phone: application.phone.trim(),
      currentRole: application.currentRole?.trim() || '',
      yearsOfExperience: application.yearsOfExperience?.trim() || '',
      cvUrl: application.cvUrl.trim(),
      linkedInUrl: application.linkedInUrl?.trim() || '',
      coverLetter: application.coverLetter?.trim() || '',
      status: 'new',
      submittedAt: Timestamp.now()
    });

    return docRef.id;
  } catch (error) {
    console.error('Error submitting job application:', error);
    throw error;
  }
}

/**
 * Get all job applications (admin only)
 */
export async function getJobApplications(): Promise<JobApplication[]> {
  try {
    const snapshot = await getDocs(
      query(collection(db, APPLICATIONS_COLLECTION), orderBy('submittedAt', 'desc'))
    );

    return snapshot.docs.map(docSnap => ({
      id: docSnap.id,
      ...docSnap.data()
    })) as JobApplication[];
  } catch (error) {
    console.error('Error fetching job applications:', error);
    throw error;
  }
}

/**
 * Update an application's status (admin only)
 */
export async function updateApplicationStatus(
  applicationId: string,
  status: ApplicationStatus
): Promise<void> {
  try {
    await updateDoc(doc(db, APPLICATIONS_COLLECTION, applicationId), { status });
  } catch (error) {
    console.error('Error updating application status:', error);
    throw error;
  }
}

/**
 * Delete an application (admin only)
 */
export async function deleteJobApplication(applicationId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, APPLICATIONS_COLLECTION, applicationId));
  } catch (error) {
    console.error('Error deleting job application:', error);
    throw error;
  }
}
