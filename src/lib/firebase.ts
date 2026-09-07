// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator, Firestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator, Auth } from "firebase/auth";

// Firebase configuration - values live in .env.local (see .env.example).
// Each variable must be read as a full static expression: Next.js replaces
// `process.env.NEXT_PUBLIC_X` at build time, but a dynamic lookup such as
// process.env[key] is NOT replaced and would come back undefined in the browser.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Fail with an actionable message instead of letting the SDK throw a cryptic
// "auth/invalid-api-key" from somewhere deep in a page render.
const missingConfigKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingConfigKeys.length > 0) {
  throw new Error(
    `Firebase config is incomplete - missing: ${missingConfigKeys.join(', ')}. ` +
    'Copy .env.example to .env.local, fill in the values from the Firebase Console ' +
    '(Project settings > Your apps), then restart the dev server. ' +
    'On a hosting platform, add the same NEXT_PUBLIC_FIREBASE_* variables to its ' +
    'environment settings and redeploy.'
  );
}

// Initialize Firebase only if it hasn't been initialized already
// This prevents multiple initialization errors in SSR
let app;
try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
} catch (error) {
  console.error('Error initializing Firebase app:', error);
  // Fallback initialization
  app = initializeApp(firebaseConfig);
}

// Initialize Firebase services with error handling
let db: Firestore;
let auth: Auth;

try {
  db = getFirestore(app);
  auth = getAuth(app);

  // Log successful initialization
  if (typeof window !== 'undefined') {
    console.log('Firebase initialized successfully on client');
  } else {
    console.log('Firebase initialized successfully on server');
  }
} catch (error) {
  console.error('Error initializing Firebase services:', error);
  throw error; // Re-throw to prevent undefined exports
}

export { db, auth };
export default app;
