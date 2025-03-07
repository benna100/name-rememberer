"use strict";
import "./main.scss";

console.log("hello");

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

import {
    db,
    getData,
    createNode,
    updateNode,
    deleteNode,
    updateEdge,
    deleteEdge,
} from "./db";

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
let accessToken;

const loading = document.querySelector("span.loading");

const signOutButton = document.querySelector(".signout");

signOutButton.addEventListener("click", async () => {
    await auth.signOut();
    alert("user logged out");
    window.location = "/name-rememberer";
});

onAuthStateChanged(auth, function (user) {
    loading.remove();
    if (user) {
        checkAndGetData(user.accessToken);
        accessToken = user.accessToken;
        try {
            document.querySelector(".dashboard").remove();
        } catch (error) {}
    } else {
        alert("please login");

        window.location = "http://localhost:8080/login.html";
        //window.location = "https://benna100.github.io/name-rememberer/login.html";
    }
});

const input = document.querySelector("input");
const addNode = document.querySelector("section.popup-add-node");

let selectedNodeId;
let selectedEdgeId;

const login_url_base = window.location.host.includes("localhost")
    ? "http://localhost:3000"
    : "https://name-rememberer-backend.onrender.com";

function populateSelectList(nodes) {
    const selects = document.querySelectorAll("select");
    selects.forEach((select) => {
        let optionHtmlString = `<option>None</option>`;
        optionHtmlString += nodes
            .sort((a, b) => {
                let fa = a.label.toLowerCase(),
                    fb = b.label.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            })
            .map((node) => `<option value="${node.id}">${node.label}</option>`)
            .join("");
        select.innerHTML = optionHtmlString;
    });
}

let nodesDataset = [];
let allNodes = [];
let edgesDataset = [];

let nodePositions = JSON.parse(localStorage.getItem("node-positions"));

function checkAndGetData(accessToken) {
    getData()
        .then(({ nodes, edges }) => {
            const processedNodes = nodes.map((n) => {
                const obj = {
                    id: n.id,
                    image: n.image,
                    label: n.label,
                    shape: n.image ? "image" : "box",
                };
                if (n.color) obj.color = n.color;
                if (nodePositions && nodePositions[n.id]) {
                    obj.x = nodePositions[n.id].x;
                    obj.y = nodePositions[n.id].y;
                }
                return obj;
            });
            nodesDataset = new vis.DataSet(processedNodes);
            edgesDataset = new vis.DataSet(edges);
            allNodes = nodesDataset.get();
            draw();
            populateSelectList(allNodes);
        })
        .catch((err) => {
            console.error("Fetching data failed", err);
            alert("Fetching data failed");
        });
}

// Called when the Visualization API is loaded.
function draw() {
    if (window.location.host.includes("localhost")) {
        //nodesData = nodesData.filter((_, i) => i < 50);
    }

    // create people.
    // value corresponds with the age of the person
    var DIR = "../img/indonesia/";

    // create connections between people
    // value corresponds with the amount of contact between two people

    // create a network
    var container = document.querySelector(".network");
    var data = {
        nodes: nodesDataset,
        edges: edgesDataset,
    };

    // TODO: To improve performance, it is possible to listen for a stabilization event,
    // then save the positions of the nodes in the database. This is very nice to have though
    var options = {
        nodes: {
            borderWidth: 1,
            size: 30,
            color: {
                border: "#ccc",
                background: "#fff",
            },
            font: { color: "#000" },
        },
        edges: {
            color: "lightgray",
        },
    };

    const network = new vis.Network(container, data, options);

    network.on("afterDrawing", () => {
        loading.style.display = "none";
    });

    network.on("stabilized", () => {
        // save all node positions
        let nodePositions = {};
        nodesDataset.forEach(function (item) {
            var positions = network.getPositions(item.id);

            nodePositions[item.id] = {
                x: positions[item.id].x,
                y: positions[item.id].y,
            };
        });
        localStorage.setItem("node-positions", JSON.stringify(nodePositions));
    });

    const popup = document.querySelector(".popup");
    const closePopupElement = popup.querySelector(".close");
    const popupButtonUpdateNode = popup.querySelector("button.update-node");
    const popupButtonDeleteNode = popup.querySelector("button.delete-node");

    const popUpLabelElement = document.querySelector(".popup .label");
    const popUpImageElement = document.querySelector(".popup .image");
    const popUpColorElement = document.querySelector(".popup .color");

    const popupEdge = document.querySelector(".popup-edge");
    const closePopupEdgeElement = popupEdge.querySelector(".close");
    const popupButtonUpdateEdge = popupEdge.querySelector("button.update-edge");
    const popupButtonDeleteEdge = popupEdge.querySelector("button.delete-edge");

    const popUpEdgeLabelElement = document.querySelector(".popup-edge .label");
    const popUpEdgeFromElement = document.querySelector(
        ".popup-edge select.from"
    );
    const popUpEdgeToElement = document.querySelector(".popup-edge select.to");

    // When the user clicks the update button in the node popup:
    document
        .querySelector(".popup button.update-node")
        .addEventListener("click", () => {
            const newNode = {
                label: document.querySelector(".popup .label").value,
                image: document.querySelector(".popup .image").value,
                color: document.querySelector(".popup .color").value,
            };

            updateNode(selectedNodeId, newNode)
                .then((updatedNode) => {
                    // Update your vis.js dataset accordingly
                    nodesDataset.updateOnly({
                        id: updatedNode.id,
                        label: updatedNode.label,
                        image: updatedNode.image,
                        color: updatedNode.color,
                    });
                    // Optionally refresh your UI, update select lists, clear inputs, etc.
                    document
                        .querySelector(".popup")
                        .classList.remove("visible");
                })
                .catch((err) => console.error("Update node failed:", err));
        });

    document
        .querySelector(".popup-edge button.update-edge")
        .addEventListener("click", () => {
            const newEdge = {
                from: document.querySelector(".popup-edge select.from").value,
                to: document.querySelector(".popup-edge select.to").value,
                label: document.querySelector(".popup-edge .label").value,
            };

            updateEdge(selectedEdgeId, newEdge)
                .then((updatedEdge) => {
                    // Optionally update your UI dataset if needed
                    // For example, if using vis.js, you might update the dataset here.
                    document
                        .querySelector(".popup-edge")
                        .classList.remove("visible");
                })
                .catch((err) => console.error("Update edge failed:", err));
        });

    document
        .querySelector(".popup button.delete-node")
        .addEventListener("click", () => {
            deleteNode(selectedNodeId)
                .then((deletedNode) => {
                    // Remove the node from your vis.js dataset
                    nodesDataset.remove(selectedNodeId);
                    // Optionally update UI (like select lists) and close the popup
                    document
                        .querySelector(".popup")
                        .classList.remove("visible");
                })
                .catch((err) => console.error("Delete node failed:", err));
        });

    // When the user clicks the delete button in the edge popup:
    document
        .querySelector(".popup-edge button.delete-edge")
        .addEventListener("click", () => {
            deleteEdge(selectedEdgeId)
                .then((deletedEdge) => {
                    // Remove the edge from your vis.js dataset
                    edgesDataset.remove(selectedEdgeId);
                    document
                        .querySelector(".popup-edge")
                        .classList.remove("visible");
                })
                .catch((err) => console.error("Delete edge failed:", err));
        });

    closePopupElement.addEventListener("click", () =>
        popup.classList.remove("visible")
    );

    closePopupEdgeElement.addEventListener("click", () =>
        popupEdge.classList.remove("visible")
    );

    document
        .querySelector("section.popup-add-node button.close")
        .addEventListener("click", () => addNode.classList.remove("visible"));

    network.on("click", function (params) {
        const clickedNodeId = params.nodes[0];
        const clickedEdgeId = params.edges[0];

        // so you can click both a node and a an edge at the same time if you click a node
        if (clickedEdgeId != undefined && clickedNodeId == undefined) {
            selectedEdgeId = clickedEdgeId;
            const edgesInNetwork = network.body.edges;
            const edgeClicked = network.body.edges[clickedEdgeId];
            const { to, from, label } = edgeClicked.options;

            popupEdge.classList.add("visible");
            popUpEdgeToElement.value = from == undefined ? "" : from;
            popUpEdgeFromElement.value = to == undefined ? "" : to;
            popUpEdgeLabelElement.value = label == undefined ? "" : label;
        }

        if (clickedNodeId != undefined) {
            selectedNodeId = clickedNodeId;
            popup.classList.add("visible");

            const nodesInNetwork = network.body.nodes;
            const nodeClicked = network.body.nodes[clickedNodeId];
            let { id, label, image, color } = nodeClicked.options;
            color = color.background;

            popUpLabelElement.value = label == undefined ? "" : label;
            popUpImageElement.value = image == undefined ? "" : image;
            popUpColorElement.value = color == undefined ? "" : color;
        }
    });
}

document
    .querySelector("button.create-new-node")
    .addEventListener("click", () => {
        const label = document.querySelector(".popup-add-node .label").value;
        const color = document.querySelector(".popup-add-node .color").value;
        const image = document.querySelector(".popup-add-node .image").value;
        const connectedToSelectList = document.querySelector(
            ".popup-add-node .connected-to"
        );
        const connectedToId = connectedToSelectList.value || "None";
        const connectionLabel = document.querySelector(
            ".popup-add-node .connection-label"
        ).value;

        // Assuming your logged-in user is stored in a variable `user`
        createNode({
            label,
            color,
            image,
            connectedToId,
            connectionLabel,
        })
            .then(({ node, edge }) => {
                if (!node.color) node.color = "#fff";
                nodesDataset.add({
                    id: node.id,
                    label: node.label,
                    color: node.color,
                    image: node.image,
                });
                if (edge) {
                    edgesDataset.add({
                        id: edge.id,
                        from: edge.from,
                        to: edge.to,
                        label: edge.label,
                    });
                }
                allNodes = nodesDataset.get();
                document
                    .querySelector("section.popup-add-node")
                    .classList.remove("visible");
                updateSelectLists();
                clearAllInputs();
            })
            .catch((err) => {
                console.error("Node creation failed", err);
                alert("Node creation failed");
                document
                    .querySelector("section.popup-add-node")
                    .classList.remove("visible");
            });
    });

document
    .querySelector("main > button.add-node")
    .addEventListener("click", () => addNode.classList.add("visible"));

function updateSelectLists() {
    const selects = document.querySelectorAll("select");

    selects.forEach((select) => {
        const optionHtmlString = nodesDataset
            .get()
            .sort((a, b) => {
                let fa = a.label.toLowerCase(),
                    fb = b.label.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            })
            .map((node) => `<option value="${node.id}">${node.label}</option>`)
            .join("");
        select.innerHTML = optionHtmlString;
    });
}

function clearAllInputs() {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
        input.value = "";
    });
}

// Function to search and highlight nodes
function searchNodes() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const searchLoading = document.getElementById("searchLoading");

    // Show loading state
    searchLoading.style.display = "inline";

    setTimeout(() => {
        // Reset the color of all nodes
        const resetUpdates = allNodes.map((node) => {
            return { id: node.id, color: node.originalColor || "#fff" };
        });
        nodesDataset.update(resetUpdates);

        // If search term is empty, hide loading and return
        if (searchTerm === "") {
            searchLoading.style.display = "none";
            return;
        }

        // Filter nodes based on the search term
        const matchingNodes = allNodes.filter((node) =>
            node.label.toLowerCase().includes(searchTerm)
        );

        // Highlight matching nodes
        const highlightUpdates = matchingNodes.map((node) => {
            node.originalColor = node.color; // Store original color
            return { id: node.id, color: "#FFD700" }; // Highlight with a golden color
        });
        nodesDataset.update(highlightUpdates);

        // Hide loading state after processing
        searchLoading.style.display = "none";
    }, 100); // Timeout for simulating loading state, adjust as necessary
}

// Bind the search function to the search button
document.getElementById("searchButton").addEventListener("click", searchNodes);

// migrate data
// migration.js

// Helper: Splits a SQL tuple string (e.g., "1,'2022-04-12 20:56:53.262',...")
// into an array of individual values. It avoids splitting commas within quotes.
function splitSQLValues(str) {
    const result = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === "'" && (i === 0 || str[i - 1] !== "\\")) {
            inQuotes = !inQuotes;
            current += char;
        } else if (char === "," && !inQuotes) {
            result.push(current.trim());
            current = "";
        } else {
            current += char;
        }
    }
    if (current) result.push(current.trim());
    return result;
}

// Helper: Removes wrapping quotes and unescapes simple escaped quotes.
function stripQuotes(val) {
    if (val.startsWith("'") && val.endsWith("'")) {
        return val.slice(1, -1).replace(/\\'/g, "'");
    }
    return val;
}

// Helper: Converts a SQL datetime string into a Date object.
// Replaces the space between date and time with a "T" for ISO format.
function parseDate(str) {
    const clean = stripQuotes(str);
    return new Date(clean.replace(" ", "T"));
}

// The migration function takes SQL text, finds INSERT statements,
// parses their values, and then inserts records into Dexie.
async function migrateSQL(sqlText) {
    // Regular expression to match INSERT statements.
    // It captures the table name and the values part.
    const insertRegex = /INSERT INTO\s+`(\w+)`\s+VALUES\s+(.+?);/gis;
    let match;

    while ((match = insertRegex.exec(sqlText)) !== null) {
        const table = match[1].toLowerCase(); // "node" or "edge"
        const valuesPart = match[2];

        // Match individual tuples, e.g. (1, '2022-04-12 ...')
        const tupleRegex = /\(([^)]+)\)/g;
        let tupleMatch;
        const rows = [];

        while ((tupleMatch = tupleRegex.exec(valuesPart)) !== null) {
            const rowString = tupleMatch[1];
            const values = splitSQLValues(rowString);
            rows.push(values);
        }

        // Process rows based on table name.
        if (table === "node") {
            // The original Node table columns order:
            // id, createdAt, updatedAt, image, label, color, firebaseUid
            // We ignore firebaseUid.
            for (const row of rows) {
                if (row.length < 6) continue;
                const node = {
                    id: parseInt(row[0], 10),
                    createdAt: parseDate(row[1]),
                    updatedAt: parseDate(row[2]),
                    image: stripQuotes(row[3]),
                    label: stripQuotes(row[4]),
                    color: stripQuotes(row[5]),
                };
                // Use put to insert with an explicit primary key.
                await db.nodes.put(node);
            }
        } else if (table === "edge") {
            // The original Edge table columns order:
            // id, createdAt, updatedAt, from, to, label, firebaseUid
            // We ignore firebaseUid.
            for (const row of rows) {
                if (row.length < 6) continue;
                const edge = {
                    id: parseInt(row[0], 10),
                    createdAt: parseDate(row[1]),
                    updatedAt: parseDate(row[2]),
                    from: parseInt(row[3], 10),
                    to: parseInt(row[4], 10),
                    label: stripQuotes(row[5]),
                };
                await db.edges.put(edge);
            }
        }
    }
}

// Example usage: When a user clicks a "Migrate" button,
// read the SQL text from a textarea and run the migration.
console.log(document.querySelector("#migrate"));

document.querySelector("#migrate").addEventListener("click", async () => {
    const sqlText = document.querySelector("textarea").value;
    try {
        await migrateSQL(sqlText);
        alert("Migration complete!");
    } catch (err) {
        console.error("Migration error:", err);
        alert("Migration failed. See console for details.");
    }
});
