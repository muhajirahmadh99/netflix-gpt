// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-C3V_g5_QB8i-ZNSxxrI5tST5paTP7Yw",
  authDomain: "netflixgpt-e517c.firebaseapp.com",
  projectId: "netflixgpt-e517c",
  storageBucket: "netflixgpt-e517c.firebasestorage.app",
  messagingSenderId: "786883471954",
  appId: "1:786883471954:web:7a32fcb89a198102078d8b",
  measurementId: "G-QQBM77RBFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();