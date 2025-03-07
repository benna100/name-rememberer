"use strict";
import "./main.scss";
import { auth, onAuthStateChanged, signOut } from "./network/firebase.js";
import { initializeNetwork } from "./network/network.js";
import { setupUI } from "./network/ui.js";
import { setupMigration } from "./network/migration.js";

// Sign out listener
document.querySelector(".signout").addEventListener("click", async () => {
    await signOut(auth);
    alert("user logged out");
    window.location = "/name-rememberer";
});

initializeNetwork();
setupUI();

// On auth state change, initialize app
// onAuthStateChanged(auth, (user) => {
//     document.querySelector("span.loading").remove();
//     if (user) {

//     } else {
//         alert("please login");
//         window.location = "http://localhost:8080/login.html";
//     }
// });

// Set up migration functionality
setupMigration();
