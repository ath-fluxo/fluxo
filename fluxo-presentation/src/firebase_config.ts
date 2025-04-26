// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1I9UNydrnxXrXmqzJx60ZWcngxV3MOW0",
    authDomain: "fluxo-docs.firebaseapp.com",
    projectId: "fluxo-docs",
    storageBucket: "fluxo-docs.firebasestorage.app",
    messagingSenderId: "817465462229",
    appId: "1:817465462229:web:adf91c5270c0fdb2a5c15c",
    measurementId: "G-ZNVM3HQM45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, app };
