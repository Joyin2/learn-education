'use client';

import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// IMPORTANT: This page should be removed after creating your admin account
// It's only for initial setup and should not be accessible in production

// One-time setup key - Change this to your own secure key before first use
const SETUP_KEY = 'LEARN_EDU_SETUP_2024'; // Change this!

export default function AdminSetupPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    setupKey: ''
  });
  const [setupCompleted, setSetupCompleted] = useState(false);
  const [checkingSetup, setCheckingSetup] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // Check if setup has already been completed
  useEffect(() => {
    const checkSetupStatus = async () => {
      try {
        const setupDoc = await getDoc(doc(db, 'config', 'setup'));
        if (setupDoc.exists() && setupDoc.data().completed) {
          setSetupCompleted(true);
        }
      } catch (error) {
        console.error('Error checking setup status:', error);
      } finally {
        setCheckingSetup(false);
      }
    };
    checkSetupStatus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validation
    if (credentials.setupKey !== SETUP_KEY) {
      setError('Invalid setup key. Please check your setup key and try again.');
      setIsLoading(false);
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (credentials.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      // Create admin account
      await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
      
      // Mark setup as completed in Firestore (self-destruct mechanism)
      await setDoc(doc(db, 'config', 'setup'), {
        completed: true,
        completedAt: new Date().toISOString(),
        adminEmail: credentials.email
      });
      
      setSuccess(true);
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 2000);
    } catch (error: any) {
      console.error('Error creating admin user:', error);
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('An account with this email already exists');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/weak-password':
          setError('Password is too weak');
          break;
        default:
          setError('Failed to create admin account. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading while checking setup status
  if (checkingSetup) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-gray-300">Checking setup status...</p>
        </div>
      </div>
    );
  }

  // If setup already completed, show locked message
  if (setupCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
        <div className="bg-slate-800 p-8 rounded-lg shadow-xl max-w-md text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold text-white mb-4">Setup Already Completed</h1>
          <p className="text-gray-300 mb-6">
            Admin account has already been created. This setup page is now locked for security.
          </p>
          <div className="mb-6 p-4 bg-blue-900 border border-blue-600 rounded-lg">
            <p className="text-blue-200 text-sm">
              <strong>Security Tip:</strong> You can safely delete the <code>src/app/admin/setup</code> 
              folder from your project.
            </p>
          </div>
          <a 
            href="/admin/login" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center text-white">
          <div className="text-6xl text-green-500 mb-4">✅</div>
          <h1 className="text-2xl font-bold mb-2">Admin Account Created Successfully!</h1>
          <p className="text-gray-300">Redirecting to dashboard...</p>
          <div className="mt-6 p-4 bg-yellow-900 border border-yellow-600 rounded-lg">
            <p className="text-yellow-200 text-sm">
              <strong>IMPORTANT:</strong> This setup page has been automatically disabled. 
              For maximum security, you should delete <code>src/app/admin/setup</code> folder entirely.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="bg-slate-800 p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Create Admin Account</h1>
          <p className="text-gray-400">One-time setup for Learn Education admin</p>
        </div>

        <div className="mb-6 p-4 bg-red-900 border border-red-600 rounded-lg">
          <p className="text-red-200 text-sm">
            <strong>⚠️ SECURITY WARNING:</strong> This page will be automatically disabled after 
            creating your admin account. For maximum security, delete the entire <code>src/app/admin/setup</code> folder.
          </p>
        </div>

        <div className="mb-6 p-4 bg-blue-900 border border-blue-600 rounded-lg">
          <p className="text-blue-200 text-sm">
            <strong>🔑 Setup Key:</strong> You need the one-time setup key to proceed. 
            Find it in <code>src/app/admin/setup/page.tsx</code> (line 14).
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="setupKey" className="block text-sm font-medium text-gray-300 mb-1">
              Setup Key *
            </label>
            <input
              type="text"
              id="setupKey"
              name="setupKey"
              value={credentials.setupKey}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the one-time setup key"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Admin Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin@learneducation.com"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
              minLength={6}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Minimum 6 characters"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Repeat your password"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-900 border border-red-600 rounded-md">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Creating Account...
              </>
            ) : (
              'Create Admin Account'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{' '}
            <a href="/admin/login" className="text-blue-400 hover:text-blue-300">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
