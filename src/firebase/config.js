// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnjIg5ThVzxXGfCybljonnWhXNREfGtYk",
  authDomain: "e-comerce-estetic.firebaseapp.com",
  projectId: "e-comerce-estetic",
  storageBucket: "e-comerce-estetic.appspot.com",
  messagingSenderId: "11773563868",
  appId: "1:11773563868:web:6852ffea4b27de2266b519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);