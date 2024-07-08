// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  apiKey: "AIzaSyCcqXHS4d3ynGwwTVarxohS90KpXgtFRsY",
  authDomain: "blog-website-firebase-3c1bd.firebaseapp.com",
  projectId: "blog-website-firebase-3c1bd",
  storageBucket: "blog-website-firebase-3c1bd.appspot.com",
  messagingSenderId: "459824189690",
  appId: "1:459824189690:web:36df1f2b529cf4378ef943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;