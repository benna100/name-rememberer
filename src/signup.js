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

const signup = document.querySelector(".signup");
const signupButton = document.querySelector(".signup button.signup");

signupButton.addEventListener("click", () => {
    const signupEmail = signup.querySelector(".email").value;
    const signupPassword = signup.querySelector(".password").value;

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("user created 🎉 Redirecting to login");
            window.location = "/login.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
