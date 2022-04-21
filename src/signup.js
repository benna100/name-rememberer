console.log("in signup");
import "./main.scss";

import { initializeApp, firebase } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADUUVLKrwOjjVImTIHiI7xyxRSk22VZVI",
    authDomain: "name-rememberer-8ed08.firebaseapp.com",
    projectId: "name-rememberer-8ed08",
    storageBucket: "name-rememberer-8ed08.appspot.com",
    messagingSenderId: "503135513537",
    appId: "1:503135513537:web:510a575730bd7febce5d40",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
