import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User,
  AuthError
} from 'firebase/auth';
import { auth } from './firebase';

// Types
export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Sign in admin user with email and password
 */
export async function signInAdmin(credentials: LoginCredentials): Promise<AuthUser> {
  try {
    // Validate input
    if (!credentials.email || !credentials.password) {
      throw new Error('Email and password are required');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(credentials.email)) {
      throw new Error('Please enter a valid email address');
    }

    const userCredential = await signInWithEmailAndPassword(
      auth, 
      credentials.email, 
      credentials.password
    );

    const user = userCredential.user;
    
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    };
  } catch (error) {
    console.error('Error signing in:', error);
    
    // Handle specific Firebase auth errors
    const authError = error as AuthError;
    switch (authError.code) {
      case 'auth/user-not-found':
        throw new Error('No admin account found with this email address');
      case 'auth/wrong-password':
        throw new Error('Incorrect password');
      case 'auth/invalid-email':
        throw new Error('Invalid email address');
      case 'auth/user-disabled':
        throw new Error('This account has been disabled');
      case 'auth/too-many-requests':
        throw new Error('Too many failed login attempts. Please try again later');
      default:
        throw new Error('Login failed. Please check your credentials and try again');
    }
  }
}

/**
 * Sign out current user
 */
export async function signOutAdmin(): Promise<void> {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw new Error('Failed to sign out. Please try again');
  }
}

/**
 * Get current authenticated user
 */
export function getCurrentUser(): User | null {
  return auth.currentUser;
}

/**
 * Listen to authentication state changes
 */
export function onAuthStateChange(callback: (user: User | null) => void): () => void {
  return onAuthStateChanged(auth, callback);
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return !!auth.currentUser;
}

/**
 * Get current user as AuthUser type
 */
export function getCurrentAuthUser(): AuthUser | null {
  const user = getCurrentUser();
  if (!user) return null;
  
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName
  };
}
