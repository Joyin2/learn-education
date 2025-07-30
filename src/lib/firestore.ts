import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  Timestamp,
  doc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore';
import { db } from './firebase';

// Types for contact form data
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  timestamp: Timestamp;
  status: 'new' | 'read' | 'replied';
}

// Collection name
const CONTACT_COLLECTION = 'contact_submissions';

/**
 * Submit a contact form to Firestore
 */
export async function submitContactForm(formData: ContactFormData): Promise<string> {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw new Error('Please fill in all required fields');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address');
    }

    // Add document to Firestore
    const docRef = await addDoc(collection(db, CONTACT_COLLECTION), {
      ...formData,
      timestamp: Timestamp.now(),
      status: 'new'
    });

    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

/**
 * Get all contact submissions (admin only)
 */
export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const q = query(
      collection(db, CONTACT_COLLECTION),
      orderBy('timestamp', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const submissions: ContactSubmission[] = [];
    
    querySnapshot.forEach((doc) => {
      submissions.push({
        id: doc.id,
        ...doc.data()
      } as ContactSubmission);
    });
    
    return submissions;
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    throw error;
  }
}

/**
 * Update contact submission status (admin only)
 */
export async function updateSubmissionStatus(
  submissionId: string, 
  status: 'new' | 'read' | 'replied'
): Promise<void> {
  try {
    const submissionRef = doc(db, CONTACT_COLLECTION, submissionId);
    await updateDoc(submissionRef, { status });
  } catch (error) {
    console.error('Error updating submission status:', error);
    throw error;
  }
}

/**
 * Delete contact submission (admin only)
 */
export async function deleteSubmission(submissionId: string): Promise<void> {
  try {
    const submissionRef = doc(db, CONTACT_COLLECTION, submissionId);
    await deleteDoc(submissionRef);
  } catch (error) {
    console.error('Error deleting submission:', error);
    throw error;
  }
}
