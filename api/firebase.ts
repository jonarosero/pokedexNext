// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0hHw09Z1j9Gg-8-y5an__pHNMZewvN3g",
  authDomain: "testjona-1de5e.firebaseapp.com",
  projectId: "testjona-1de5e",
  storageBucket: "testjona-1de5e.appspot.com",
  messagingSenderId: "70477526215",
  appId: "1:70477526215:web:1f6efd165c551adfdb3ae2",
  measurementId: "G-KH95S8QTQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();

export  default auth;