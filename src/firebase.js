// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQDQfPPIsZo-TQVc0_8sL-2MpHaAl13Mk",
  authDomain: "inv-alejo-c3281.firebaseapp.com",
  projectId: "inv-alejo-c3281",
  storageBucket: "inv-alejo-c3281.appspot.com",
  messagingSenderId: "881702266458",
  appId: "1:881702266458:web:f4a8ff0e853b023f9c5a63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export { auth, db }