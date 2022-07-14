// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKwFLSHkSNwhBnicVcNkKH1FZ2LamQuTc",
  authDomain: "the-food-app-9b483.firebaseapp.com",
  projectId: "the-food-app-9b483",
  storageBucket: "the-food-app-9b483.appspot.com",
  messagingSenderId: "606767700057",
  appId: "1:606767700057:web:cacef10ab77cba01eeb948",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
