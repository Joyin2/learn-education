import LoginPageContent from './LoginPageContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Admin Login - Learn Education",
  description: "Secure admin login for Learn Education administration panel",
};

export default function LoginPage() {
  return <LoginPageContent />;
}
