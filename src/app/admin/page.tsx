import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './admin.module.css';

export const metadata: Metadata = {
  title: "Admin Panel - Learn Education",
  description: "Admin panel access for Learn Education",
};

export default function AdminPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Admin Panel</h1>
        <p className={styles.description}>
          Access the Learn Education administration dashboard
        </p>
        
        <div className={styles.buttonGroup}>
          <Link href="/admin/login" className={styles.primaryButton}>
            Login to Dashboard
          </Link>
          
          <Link href="/admin/setup" className={styles.secondaryButton}>
            First-Time Setup
          </Link>
        </div>
        
        <div className={styles.info}>
          <p>
            <strong>First-time admin?</strong> Use the setup page to create your admin account.
          </p>
          <p>
            <strong>Already have an account?</strong> Login to access the dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
