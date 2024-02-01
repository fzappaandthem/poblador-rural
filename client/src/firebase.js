// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "poblador-rural.firebaseapp.com",
  projectId: "poblador-rural",
  storageBucket: "poblador-rural.appspot.com",
  messagingSenderId: "61157702823",
  appId: "1:61157702823:web:5dd28cac181c852e9d6f82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);