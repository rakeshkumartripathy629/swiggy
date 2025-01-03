import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Hardcoded Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4wnhjWSONMFVf-Lb0JaNIlkxu8_gYTX8",
  authDomain: "swiggy-37641.firebaseapp.com",
  projectId: "swiggy-37641",
  storageBucket: "swiggy-37641.appspot.com",
  messagingSenderId: "572519364833",
  appId: "1:572519364833:web:3f1e319f0c9d518f101fa0",
  measurementId: "G-FTNT228TT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

console.log("Firebase Initialized");

export { auth, provider };


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA4wnhjWSONMFVf-Lb0JaNIlkxu8_gYTX8",
//   authDomain: "swiggy-37641.firebaseapp.com",
//   projectId: "swiggy-37641",
//   storageBucket: "swiggy-37641.firebasestorage.app",
//   messagingSenderId: "572519364833",
//   appId: "1:572519364833:web:3f1e319f0c9d518f101fa0",
//   measurementId: "G-FTNT228TT3"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);