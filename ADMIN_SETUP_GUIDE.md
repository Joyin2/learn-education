# Admin Panel Setup Guide

## 🚀 Quick Start - First Time Setup

### Step 1: Configure Your Setup Key
Before creating your admin account, **change the setup key** for security:

1. Open `src/app/admin/setup/page.tsx`
2. Find line 14: `const SETUP_KEY = 'LEARN_EDU_SETUP_2024';`
3. Change it to your own secure key (use a strong, unique string)
4. Save the file

### Step 2: Access the Setup Page
1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/admin/setup`
3. You'll see the admin account creation form

### Step 3: Create Your Admin Account
1. Enter your **setup key** (the one you set in Step 1)
2. Enter your **admin email** (e.g., admin@learneducation.com)
3. Choose a **strong password** (minimum 6 characters)
4. Confirm your password
5. Click **"Create Admin Account"**

### Step 4: Security - Self-Destruct Mechanism
✅ **Automatic Protection**: After creating your admin account, the setup page automatically locks itself and cannot be used again.

🔒 **For Maximum Security**: Delete the entire setup folder:
```bash
# Delete the setup folder (recommended)
rm -rf src/app/admin/setup
# or on Windows PowerShell
Remove-Item -Recurse -Force "src/app/admin/setup"
```

---

## 🔐 Accessing the Admin Panel

### Admin Login
Once your account is created:
1. Go to: `http://localhost:3000/admin/login`
2. Enter your email and password
3. Access the admin dashboard

### Admin Routes
- **`/admin`** - Admin landing page with links
- **`/admin/login`** - Login page for existing admins
- **`/admin/setup`** - One-time setup (auto-locks after first use)
- **`/admin/dashboard`** - Admin dashboard (protected, requires authentication)

---

## 🔧 How It Works

### Security Features

1. **One-Time Setup Key**
   - Requires a secret key to create admin accounts
   - Prevents unauthorized admin creation
   - Change the key before first use!

2. **Self-Destruct Mechanism**
   - Setup page automatically disables after first use
   - Stores completion status in Firestore
   - Cannot be reused even if kept in the project

3. **Firebase Authentication**
   - Secure email/password authentication
   - Protected routes using ProtectedRoute component
   - Session management via AuthContext

4. **Best Practice**: Physically delete the setup folder after creating your account

---

## 🛠️ Troubleshooting

### Problem: "Invalid setup key"
**Solution**: Make sure you're using the correct setup key from `src/app/admin/setup/page.tsx` line 14.

### Problem: "Setup Already Completed"
**Solution**: An admin account has already been created. Use `/admin/login` to sign in. If you need to reset, check Firestore for the `config/setup` document.

### Problem: "Email already in use"
**Solution**: An account with this email already exists. Use `/admin/login` to sign in, or use a different email.

### Problem: Firebase connection errors
**Solution**: 
1. Check that Firebase is configured in `src/lib/firebase.ts`
2. Verify environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   ```

---

## 📋 Resetting Admin Setup

If you need to allow setup again:

1. **Via Firebase Console**:
   - Go to Firebase Console > Firestore Database
   - Find the `config` collection
   - Delete the `setup` document

2. **Via Code** (add this temporarily):
   ```javascript
   import { doc, deleteDoc } from 'firebase/firestore';
   import { db } from '@/lib/firebase';
   
   await deleteDoc(doc(db, 'config', 'setup'));
   ```

---

## 🎯 Production Deployment Checklist

Before deploying to production:

- [ ] Change the `SETUP_KEY` to a strong, unique value
- [ ] Create your admin account
- [ ] Verify you can login at `/admin/login`
- [ ] **DELETE the entire `src/app/admin/setup` folder**
- [ ] Remove this guide from your repository (optional)
- [ ] Test that `/admin/setup` returns 404
- [ ] Set up proper environment variables in production
- [ ] Enable Firebase security rules

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Verify Firebase configuration
3. Ensure Firestore is enabled in your Firebase project
4. Check that all environment variables are set correctly

---

**Security Reminder**: Always delete the setup folder after creating your admin account in production!
