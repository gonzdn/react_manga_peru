import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6zK9sGMiT6XSswLtYxgJBgBa_j5byy5o",
  authDomain: "manga-peru.firebaseapp.com",
  projectId: "manga-peru",
  storageBucket: "manga-peru.appspot.com",
  messagingSenderId: "1038032236367",
  appId: "1:1038032236367:web:128786f423c948264b1f3a",
  measurementId: "G-YQ61JSY8EX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();