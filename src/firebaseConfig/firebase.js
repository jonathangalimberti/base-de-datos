// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYnAW0AjwS2qzHVSsDHbJJXEManoBMLp8",
  authDomain: "lista-de-productos-de-cocina.firebaseapp.com",
  projectId: "lista-de-productos-de-cocina",
  storageBucket: "lista-de-productos-de-cocina.appspot.com",
  messagingSenderId: "322323706751",
  appId: "1:322323706751:web:458038b384c7107eda604a",
  measurementId: "G-VY0M3JKLWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);