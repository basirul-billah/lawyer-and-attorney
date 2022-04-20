// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYsF5eKxnNENRJe-3Lk9KbGu21AGg_ILo",
  authDomain: "lawyer-and-attorney.firebaseapp.com",
  projectId: "lawyer-and-attorney",
  storageBucket: "lawyer-and-attorney.appspot.com",
  messagingSenderId: "349134906983",
  appId: "1:349134906983:web:c2d294bafb0b8a6aa1d6c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;