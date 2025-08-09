// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator, Firestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator, Auth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD52EbpTWD9LQkby1wf_Wt_NVcdYwkBz9U",
  authDomain: "learn-education-834bb.firebaseapp.com",
  projectId: "learn-education-834bb",
  storageBucket: "learn-education-834bb.firebasestorage.app",
  messagingSenderId: "963412813766",
  appId: "1:963412813766:web:7d45f8dc8177824735f4c7"
};

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
