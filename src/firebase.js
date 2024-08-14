// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArt83wLzpYTj2_7xKBZ7cUBW0pUN35Dl0",
  authDomain: "webd-soap.firebaseapp.com",
  projectId: "webd-soap",
  storageBucket: "webd-soap.appspot.com",
  messagingSenderId: "298546945327",
  appId: "1:298546945327:web:8ca048401bd9042b8055da",
  measurementId: "G-0F5T19ELGK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app;
