// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fe49c.firebaseapp.com",
  projectId: "mern-estate-fe49c",
  storageBucket: "mern-estate-fe49c.firebasestorage.app",
  messagingSenderId: "680621020624",
  appId: "1:680621020624:web:19a7a2d06fe0eec9d1d5d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);