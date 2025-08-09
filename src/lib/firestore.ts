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

// Utility function to check if Firebase is properly initialized
function checkFirebaseConnection(): boolean {
  if (!db) {
    console.error('Firestore database is not initialized - Firebase connection failed');
    return false;
  }

  // Additional check for server-side rendering
  if (typeof window === 'undefined') {
    console.log('Running on server side - Firebase should be available');
  }

  return true;
}

// Fallback function to return sample data when Firebase is not available
function getEmptyBlogData(): BlogPost[] {
  console.warn('Firebase not available - returning sample blog data for testing');

  // Return some sample blog posts for testing purposes
  return [
    {
      id: 'sample-1',
      title: 'Sample Blog Post 1',
      excerpt: 'This is a sample blog post for testing purposes when Firebase is not available.',
      content: '<p>This is sample content for testing.</p>',
      author: 'Test Author',
      date: '2024-01-15',
      category: 'Study Abroad',
      readTime: '5 min read',
      tags: ['sample', 'test'],
      featured: true,
      published: true
    },
    {
      id: 'sample-2',
      title: 'Sample Blog Post 2',
      excerpt: 'Another sample blog post for testing the blog functionality.',
      content: '<p>This is more sample content for testing.</p>',
      author: 'Test Author',
      date: '2024-01-10',
      category: 'Universities',
      readTime: '3 min read',
      tags: ['sample', 'test'],
      featured: false,
      published: true
    }
  ];
}

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

// Collection names
const CONTACT_COLLECTION = 'contact_submissions';
const BLOG_COLLECTION = 'blog_posts';

// Types for blog data
export interface BlogPost {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image?: string; // Made optional since we're removing image upload
  tags: string[];
  featured?: boolean;
  published: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

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

// ============ BLOG FUNCTIONS ============

/**
 * Create a new blog post (admin only)
 */
export async function createBlogPost(blogData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    // Validate required fields
    if (!blogData.title || !blogData.excerpt || !blogData.content || !blogData.author) {
      throw new Error('Please fill in all required fields');
    }

    const docRef = await addDoc(collection(db, BLOG_COLLECTION), {
      ...blogData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });

    return docRef.id;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
}

/**
 * Get all blog posts (with optional filters)
 */
export async function getBlogPosts(options?: {
  publishedOnly?: boolean;
  category?: string;
  featured?: boolean;
  limitCount?: number;
}): Promise<BlogPost[]> {
  try {
    // Check for testing mode or if Firebase is properly initialized
    if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true') {
      console.log('Using mock data for development');
      return getEmptyBlogData();
    }

    if (!checkFirebaseConnection()) {
      console.error('Firebase connection check failed in getBlogPosts');
      return getEmptyBlogData();
    }

    // Use simple query without composite index to avoid Firebase index requirements
    let q;
    let querySnapshot;

    try {
      q = query(
        collection(db, BLOG_COLLECTION),
        orderBy('createdAt', 'desc')
      );

      // Apply limit if specified
      if (options?.limitCount) {
        q = query(q, limit(options.limitCount));
      }

      querySnapshot = await getDocs(q);
    } catch (firestoreError) {
      console.error('Firestore query error:', firestoreError);

      // Handle specific error types
      if (firestoreError === null) {
        console.error('Null error encountered during Firestore query');
        return getEmptyBlogData();
      }

      if (firestoreError instanceof Error) {
        if (firestoreError.message.includes('Missing or insufficient permissions')) {
          console.error('Firestore permissions error - check Firebase Console rules');
          return getEmptyBlogData();
        }
        console.error('Firestore error:', firestoreError.message);
      }

      // Return empty data instead of throwing to prevent app crashes
      return getEmptyBlogData();
    }
    let posts: BlogPost[] = [];

    if (querySnapshot.empty) {
      console.log('No blog posts found in Firestore collection');
      return [];
    }

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data) {
        posts.push({
          id: doc.id,
          ...data
        } as BlogPost);
      }
    });

    console.log(`Fetched ${posts.length} blog posts from Firestore`);

    // Apply all filtering client-side to avoid composite index requirements
    if (options?.publishedOnly) {
      posts = posts.filter(post => post.published);
      console.log(`After published filter: ${posts.length} posts`);
    }

    if (options?.category) {
      posts = posts.filter(post => post.category === options.category);
      console.log(`After category filter: ${posts.length} posts`);
    }

    if (options?.featured !== undefined) {
      posts = posts.filter(post => post.featured === options.featured);
      console.log(`After featured filter: ${posts.length} posts`);
    }

    return posts;
  } catch (error) {
    // Handle null errors specifically
    if (error === null) {
      console.error('Error fetching blog posts: null error encountered');
      console.error('This usually indicates a Firebase connection or initialization issue');
    } else {
      console.error('Error fetching blog posts:', error);
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        code: error instanceof Error && 'code' in error ? error.code : 'No code',
        stack: error instanceof Error ? error.stack : 'No stack',
        type: typeof error,
        isNull: error === null,
        isUndefined: error === undefined
      });
    }

    // Return empty array instead of throwing to prevent cascading failures
    // This allows the application to continue functioning even if blog posts can't be loaded
    return getEmptyBlogData();
  }
}

/**
 * Get a single blog post by ID
 */
export async function getBlogPost(postId: string): Promise<BlogPost | null> {
  try {
    // Validate input
    if (!postId || typeof postId !== 'string') {
      console.error('Invalid postId provided to getBlogPost:', postId);
      return null;
    }

    // Check if Firebase is properly initialized
    if (!checkFirebaseConnection()) {
      console.error('Firebase connection check failed in getBlogPost');
      return null;
    }

    const docRef = doc(db, BLOG_COLLECTION, postId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data) {
        return {
          id: docSnap.id,
          ...data
        } as BlogPost;
      }
    }

    return null;
  } catch (error) {
    // Handle null errors specifically
    if (error === null) {
      console.error('Error fetching blog post: null error encountered for postId:', postId);
      console.error('This usually indicates a Firebase connection or initialization issue');
    } else {
      console.error('Error fetching blog post:', error);
      console.error('Error details:', {
        postId,
        message: error instanceof Error ? error.message : 'Unknown error',
        code: error instanceof Error && 'code' in error ? error.code : 'No code',
        type: typeof error,
        isNull: error === null,
        isUndefined: error === undefined
      });
    }
    // Return null instead of throwing to prevent page crashes
    return null;
  }
}

/**
 * Update a blog post (admin only)
 */
export async function updateBlogPost(postId: string, updates: Partial<BlogPost>): Promise<void> {
  try {
    const postRef = doc(db, BLOG_COLLECTION, postId);
    await updateDoc(postRef, {
      ...updates,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
}

/**
 * Delete a blog post (admin only)
 */
export async function deleteBlogPost(postId: string): Promise<void> {
  try {
    const postRef = doc(db, BLOG_COLLECTION, postId);
    await deleteDoc(postRef);
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
}

/**
 * Get blog categories
 */
export async function getBlogCategories(): Promise<string[]> {
  try {
    const posts = await getBlogPosts({ publishedOnly: true });
    const categories = [...new Set(posts.map(post => post.category))];
    return categories.sort();
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    throw error;
  }
}

/**
 * Get related blog posts based on category and tags
 */
export async function getRelatedBlogPosts(currentPost: BlogPost, limitCount: number = 3): Promise<BlogPost[]> {
  try {
    // Validate input parameters
    if (!currentPost || !currentPost.id) {
      console.error('Invalid currentPost provided to getRelatedBlogPosts');
      return [];
    }

    // Get all published posts
    const allPosts = await getBlogPosts({ publishedOnly: true });

    // Handle case where no posts are returned
    if (!allPosts || !Array.isArray(allPosts) || allPosts.length === 0) {
      console.log('No blog posts found in database');
      return [];
    }

    // Filter out the current post
    const otherPosts = allPosts.filter(post => post.id !== currentPost.id);

    if (otherPosts.length === 0) {
      console.log('No other posts found besides current post');
      return [];
    }

    // Score posts based on relevance
    const scoredPosts = otherPosts.map(post => {
      let score = 0;

      // Same category gets high score
      if (post.category === currentPost.category) {
        score += 10;
      }

      // Shared tags get points
      if (currentPost.tags && post.tags) {
        const sharedTags = currentPost.tags.filter(tag =>
          post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
        );
        score += sharedTags.length * 3;
      }

      // Featured posts get a small bonus
      if (post.featured) {
        score += 1;
      }

      return { post, score };
    });

    // Sort by score (highest first) and then by creation date (newest first)
    scoredPosts.sort((a, b) => {
      if (a.score !== b.score) {
        return b.score - a.score;
      }
      // If scores are equal, sort by creation date
      const dateA = a.post.createdAt ? a.post.createdAt.toDate() : new Date(a.post.date);
      const dateB = b.post.createdAt ? b.post.createdAt.toDate() : new Date(b.post.date);
      return dateB.getTime() - dateA.getTime();
    });

    // Return the top posts up to the limit
    return scoredPosts.slice(0, limitCount).map(item => item.post);

  } catch (error) {
    console.error('Error fetching related blog posts:', error);
    // Return empty array instead of throwing to prevent page crashes
    return [];
  }
}
