import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDYXLAuRIshpMh5ue-GoaFzhVF3_s7ZXCc",

  authDomain: "vendmanage.firebaseapp.com",

  projectId: "vendmanage",

  storageBucket: "vendmanage.appspot.com",

  messagingSenderId: "690828840929",

  appId: "1:690828840929:web:3dc56e22dc704a72434ca0",

  measurementId: "G-TZ3PN3PPK2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
