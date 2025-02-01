// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIn0C5KEZk7cvPV3XhybAOdyyec47CIEE",
  authDomain: "vite-contact-a5d36.firebaseapp.com",
  projectId: "vite-contact-a5d36",
  storageBucket: "vite-contact-a5d36.firebasestorage.app",
  messagingSenderId: "115067634494",
  appId: "1:115067634494:web:dae124b4c513ba3d0d626f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);