// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-2432e.firebaseapp.com",
  projectId: "real-estate-2432e",
  storageBucket: "real-estate-2432e.appspot.com",
  messagingSenderId: "288391339138",
  appId: "1:288391339138:web:5d197ccb672d517af6a89b",
  measurementId: "G-BS3X5YW0Z1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);