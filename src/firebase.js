// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2ziyTbMRxegbjmTfkjKSckU6hdAAMMs8",
  authDomain: "newdrib-53908.firebaseapp.com",
  projectId: "newdrib-53908",
  storageBucket: "newdrib-53908.appspot.com",
  messagingSenderId: "467555276385",
  appId: "1:467555276385:web:3bf1857784ef99706ebc20",
  measurementId: "G-WW7PJY1N8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);