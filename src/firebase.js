// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqAgox5v00c4B0_wsjkaPnHtOGriAL20A",
  authDomain: "vivalosnovios-47c6a.firebaseapp.com",
  databaseURL: "https://vivalosnovios-47c6a-default-rtdb.firebaseio.com",
  projectId: "vivalosnovios-47c6a",
  storageBucket: "vivalosnovios-47c6a.appspot.com",
  messagingSenderId: "242735189832",
  appId: "1:242735189832:web:bd32c0d7c38e561b63ed7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)


export { auth, db }