// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg5sM2NBOVgYNV4G_FmItcdehvhyS7hZM",
  authDomain: "wall-app-db.firebaseapp.com",
  projectId: "wall-app-db",
  storageBucket: "wall-app-db.appspot.com",
  messagingSenderId: "1007075767228",
  appId: "1:1007075767228:web:45d76cd41fe34fc711f1b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);