// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBssemQzmeah_vTPMvtJTjV0yqkK4pNzKg",
  authDomain: "netflix-5c478.firebaseapp.com",
  projectId: "netflix-5c478",
  storageBucket: "netflix-5c478.firebasestorage.app",
  messagingSenderId: "661398329237",
  appId: "1:661398329237:web:eb4809392b0f3fe934889c",
  measurementId: "G-1R5X47R970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);