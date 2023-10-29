import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAnWlSWeLXXWUP9swP2XcryvKEs_q1Xcibs",
    authDomain: "tutorial-372d7.firebaseapp.com",
    projectId: "tutorial-372d7",
    storageBucket: "tutorial-372d7.appspot.com",
    messagingSenderId: "25672042844",
    appId: "1:25672042844:web:05dac3bbed8da4d03a1999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);