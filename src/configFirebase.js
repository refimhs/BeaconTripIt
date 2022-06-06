// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8_iCVBWaFRSw9qOibIZmLkVRnc6PTh3E",
  authDomain: "tripit-94945.firebaseapp.com",
  databaseURL: "https://tripit-94945-default-rtdb.firebaseio.com",
  projectId: "tripit-94945",
  storageBucket: "tripit-94945.appspot.com",
  messagingSenderId: "690836474773",
  appId: "1:690836474773:web:b6558ab3c5f722866ec49c",
  measurementId: "G-V3Y6P87WLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);