// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// AIzaSyCdZ6zjGfMK29
const firebaseConfig = {
    //apiKey: " WJrsyHGuiXqFOpftS80ck",
    authDomain: "app-robles4.firebaseapp.com",
    projectId: "app-robles4",
    storageBucket: "app-robles4.firebasestorage.app",
    messagingSenderId: "263810757110",
    appId: "1:263810757110:web:dd09557cb7605cfb7d97d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getDatabase(app);
