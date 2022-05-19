// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyAm8Oz2huWyFEsZkYnbJ9rGxpLARbY4zqs",
 authDomain: "jobplacement-50c36.firebaseapp.com",
 projectId: "jobplacement-50c36",
 storageBucket: "jobplacement-50c36.appspot.com",
 messagingSenderId: "657450822867",
 appId: "1:657450822867:web:96f398a75fb4c6f2c57826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
