// Import functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "policy-explained.firebaseapp.com",
  projectId: "policy-explained",
  storageBucket: "policy-explained.appspot.com",
  messagingSenderId: "830997679429",
  appId: "1:830997679429:web:eb493a3b5fa4ac7685822c",
  measurementId: "G-D9YLDL51KG",
};

// Firebase Initialization
const app = initializeApp(firebaseConfig);

// Firebase Authentication Initialization
const auth = getAuth(app);

// Set session persistence for authentication to 'local'
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to local.");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

// Firebase Analytics Initialization
const analytics = getAnalytics(app);

export { app, auth, analytics };