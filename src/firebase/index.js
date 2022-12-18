// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZffIcLkSAHSuhGnVjfOTbZtOgm1sWdWY",
  authDomain: "com22app.firebaseapp.com",
  databaseURL: "https://com22app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "com22app",
  storageBucket: "com22app.appspot.com",
  messagingSenderId: "637601847923",
  appId: "1:637601847923:web:f78ea9a13e46d4ae132806",
  measurementId: "G-WTXNS2ML7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth}