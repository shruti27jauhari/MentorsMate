// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIwzqY_XX5WMwiFrTA4hNLKD-0AsDoOfY",
    authDomain: "mentormate-b7b6a.firebaseapp.com",
    projectId: "mentormate-b7b6a",
    storageBucket: "mentormate-b7b6a.appspot.com",
    messagingSenderId: "587596427103",
    appId: "1:587596427103:web:b3bac9c758243b4cca90ea",
    measurementId: "G-QZKKFF5CQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
