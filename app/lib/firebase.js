// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBGOA-yiKCcbQ1LPKgNIO1TcN21phkWcHI",
  authDomain: "my-portfolio-e7506.firebaseapp.com",
  projectId: "my-portfolio-e7506",
  storageBucket: "my-portfolio-e7506.appspot.com",
  messagingSenderId: "1045762553275",
  appId: "1:1045762553275:web:0b4ef5662d9b928724009e",
  measurementId: "G-M7NKNP23W4",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { analytics };
