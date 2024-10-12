// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1b16b.firebaseapp.com",
  projectId: "mern-estate-1b16b",
  storageBucket: "mern-estate-1b16b.appspot.com",
  messagingSenderId: "160600551193",
  appId: "1:160600551193:web:3f662ebe7cf2c86ba4df88",
  measurementId: "G-HGVLD24X07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);