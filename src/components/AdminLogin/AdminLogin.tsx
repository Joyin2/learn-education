'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInAdmin, LoginCredentials } from '@/lib/auth';
import styles from './AdminLogin.module.css';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await signInAdmin(credentials);
      // Redirect to admin dashboard on successful login
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError(error instanceof Error ? error.message : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.logoSection}>
          <h1 className={styles.title}>Admin Login</h1>
          <p className={styles.subtitle}>Learn Education Administration</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              required
              className={styles.input}
              placeholder="Enter your admin email"
              disabled={isLoading}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
              className={styles.input}
              placeholder="Enter your password"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className={styles.errorMessage}>
              <i className="fa-solid fa-exclamation-triangle"></i>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`${styles.loginButton} ${isLoading ? styles.loading : ''}`}
          >
            {isLoading ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i>
                Signing in...
              </>
            ) : (
              <>
                <i className="fa-solid fa-sign-in-alt"></i>
                Sign In
              </>
            )}
          </button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Authorized personnel only. All access is logged and monitored.
          </p>
        </div>
      </div>
    </div>
  );
}
