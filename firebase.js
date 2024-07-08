// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5RxyYWemaurZHjRJzGcaSXoyp1vvqxCQ",
  authDomain: "foodsite-dd622.firebaseapp.com",
  projectId: "foodsite-dd622",
  storageBucket: "foodsite-dd622.appspot.com",
  messagingSenderId: "655900660577",
  appId: "1:655900660577:web:5e86f3215d4ed6ec7ceb20",
  measurementId: "G-LNZELKJEF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);