import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYYNQf7G-ms63JR-IhQ5Xt4O0qREDbdsY",

  authDomain: "book-management-24477.firebaseapp.com",

  projectId: "book-management-24477",

  storageBucket: "book-management-24477.appspot.com",

  messagingSenderId: "611685649055",

  appId: "1:611685649055:web:05e8afab29d3888db6f0aa",
};

// Initialize App
export const app = initializeApp(firebaseConfig);
// Create and export Auth
export const auth = getAuth(app);

// Get firebase DB
export const db = getFirestore(app);
