// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdUs_VSgtaphQzB20Z9vT5gcz-xOum1-0",
  authDomain: "news-portal-8aed0.firebaseapp.com",
  projectId: "news-portal-8aed0",
  storageBucket: "news-portal-8aed0.firebasestorage.app",
  messagingSenderId: "152763349007",
  appId: "1:152763349007:web:c616bb35952bf174098b7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;