// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx2aWnEX2XgjayM3TASCK9tHLSVC7AQuU",
  authDomain: "peerpals1.firebaseapp.com",
  projectId: "peerpals1",
  storageBucket: "peerpals1.appspot.com",
  messagingSenderId: "383820172791",
  appId: "1:383820172791:web:1641db539223d0c811f2f2",
  measurementId: "G-L6BWSWMZX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)