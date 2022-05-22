// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8Y_c-x1mxkuY42I0zhOx7plMQFhgn060",
    authDomain: "motorcycle-parts-manufacturer.firebaseapp.com",
    projectId: "motorcycle-parts-manufacturer",
    storageBucket: "motorcycle-parts-manufacturer.appspot.com",
    messagingSenderId: "672966663909",
    appId: "1:672966663909:web:8fc547db3467c618b0be0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
