// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfzg_LjLe1PuDoxFuH0v4pCi0XHzjo7yQ",
  authDomain: "hosi-97ac7.firebaseapp.com",
  projectId: "hosi-97ac7",
  storageBucket: "hosi-97ac7.firebasestorage.app",
  messagingSenderId: "393933767728",
  appId: "1:393933767728:web:13831805a45df53cfdd9f5",
  measurementId: "G-82NMVV367W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);   // This line creates the "db"