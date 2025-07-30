import AdminDashboard from '@/components/AdminDashboard';
import ProtectedRoute from '@/components/ProtectedRoute';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Admin Dashboard - Learn Education",
  description: "Admin dashboard for managing contact form submissions",
};

export default function AdminDashboardPage() {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  );
}
