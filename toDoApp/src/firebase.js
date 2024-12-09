// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfvXPRcex9rNMO2mLqnl5DacomsRVxBd4",
  authDomain: "todo-app-990dd.firebaseapp.com",
  projectId: "todo-app-990dd",
  storageBucket: "todo-app-990dd.firebasestorage.app",
  messagingSenderId: "611249809596",
  appId: "1:611249809596:web:09ec6d668efda67edf88b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);