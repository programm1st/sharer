// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALF9Mb2edgSOGbz2lEcOrpiZdP2wpsUYg",
    authDomain: "sharer-af9b3.firebaseapp.com",
    projectId: "sharer-af9b3",
    storageBucket: "sharer-af9b3.appspot.com",
    messagingSenderId: "1006541801764",
    appId: "1:1006541801764:web:2c371229ed3617c055cbb1",
    measurementId: "G-535WLR7CHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
