// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "vue-firebase-crud-5a998.firebaseapp.com",
  projectId: "vue-firebase-crud-5a998",
  storageBucket: "vue-firebase-crud-5a998.appspot.com",
  messagingSenderId: "614034941371",
  appId: "1:614034941371:web:57cf77b8debbccbcfcd09e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)