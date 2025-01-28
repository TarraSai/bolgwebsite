// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "blog-website-dd8e0.firebaseapp.com",
  projectId: "blog-website-dd8e0",
  storageBucket: "blog-website-dd8e0.firebasestorage.app",
  messagingSenderId: "617232000565",
  appId: "1:617232000565:web:21cce0c42eb0dba480337c",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
