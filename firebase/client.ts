// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUDBlZw_MK_emq4OA2zVLZe1sVXrDNCZA",
  authDomain: "interview-prep-68696.firebaseapp.com",
  projectId: "interview-prep-68696",
  storageBucket: "interview-prep-68696.firebasestorage.app",
  messagingSenderId: "86175965616",
  appId: "1:86175965616:web:b7067cb24a2e9f4b48f675",
  measurementId: "G-WLPYH136G0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
