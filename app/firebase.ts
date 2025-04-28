// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnpc5bfZ2O1e20vw8-qHRbYcbkr-UPeyg",
  authDomain: "super-trash-gambling-raccoons.firebaseapp.com",
  projectId: "super-trash-gambling-raccoons",
  storageBucket: "super-trash-gambling-raccoons.firebasestorage.app",
  messagingSenderId: "1073399694818",
  appId: "1:1073399694818:web:f359c231cadebdbf18e5bb",
  measurementId: "G-40VMRQZXJG"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);

export { auth, db };
