// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3LhxkPDqiRQeGH7HiBG5NqLZl1G9a25k",
  authDomain: "invitacion15daf.firebaseapp.com",
  projectId: "invitacion15daf",
  storageBucket: "invitacion15daf.appspot.com",
  messagingSenderId: "611084049389",
  appId: "1:611084049389:web:516849c6e0db9e7c9d65e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth