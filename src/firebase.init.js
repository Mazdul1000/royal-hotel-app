// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkzLvfuBEBGmTch7Fw-MnMlpZoh6m0VCw",
  authDomain: "royal-hotel-app-324f4.firebaseapp.com",
  projectId: "royal-hotel-app-324f4",
  storageBucket: "royal-hotel-app-324f4.appspot.com",
  messagingSenderId: "146356113481",
  appId: "1:146356113481:web:a7a2b6f62ce1155d9baf98",
  measurementId: "G-00FDC1C1ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;