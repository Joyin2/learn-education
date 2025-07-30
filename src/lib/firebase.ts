// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD52EbpTWD9LQkby1wf_Wt_NVcdYwkBz9U",
  authDomain: "learn-education-834bb.firebaseapp.com",
  projectId: "learn-education-834bb",
  storageBucket: "learn-education-834bb.firebasestorage.app",
  messagingSenderId: "963412813766",
  appId: "1:963412813766:web:7d45f8dc8177824735f4c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
