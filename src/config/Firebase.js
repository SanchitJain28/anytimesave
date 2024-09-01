// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqUe_XZ-WiUpOzmKDjclMK0jV7pu11SnU",
  authDomain: "anytimesave.firebaseapp.com",
  projectId: "anytimesave",
  storageBucket: "anytimesave.appspot.com",
  messagingSenderId: "151135927794",
  appId: "1:151135927794:web:e1aa45b18cb99394e7bf6b",
  measurementId: "G-SC6QS0DD6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
