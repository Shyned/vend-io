import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDgIk4-RKDUpmQt122UfQF04WDWbiZJUBw",

  authDomain: "vend-manager-5515c.firebaseapp.com",

  projectId: "vend-manager-5515c",

  storageBucket: "vend-manager-5515c.appspot.com",

  messagingSenderId: "754185542591",

  appId: "1:754185542591:web:387be0b4e2d76252d5df0a",

  measurementId: "G-NW7VHLB2CB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
