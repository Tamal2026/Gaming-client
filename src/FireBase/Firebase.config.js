// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlsaWorGtNc5hD_HghX7bxEOaZ1jmtnc4",
  authDomain: "event-ph.firebaseapp.com",
  projectId: "event-ph",
  storageBucket: "event-ph.appspot.com",
  messagingSenderId: "888060650162",
  appId: "1:888060650162:web:6c570d1bcfaf09e04f1fab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;