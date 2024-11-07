// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyDmr3VwkRp9rrZGntqbgy09kboqLfczY",
  authDomain: "fanshawe-reactnative2-lab03.firebaseapp.com",
  projectId: "fanshawe-reactnative2-lab03",
  storageBucket: "fanshawe-reactnative2-lab03.firebasestorage.app",
  messagingSenderId: "582229164777",
  appId: "1:582229164777:web:e77299b5b6c06a95f5a678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }