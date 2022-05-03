import "./main.scss";

import { initializeApp, firebase } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut,
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
let accessToken;

const login = document.querySelector(".login");

const loginElement = document.querySelector("main > .login");
const loginButton = loginElement.querySelector("button.login");
loginButton.addEventListener("click", () => {
    const email = loginElement.querySelector("input.email").value;
    const password = loginElement.querySelector("input.password").value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location = window.location.href.includes("localhost")
                ? "/network.html"
                : "https://benna100.github.io/name-rememberer/network.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
