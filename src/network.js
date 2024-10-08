"use strict";
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
        window.location =
            "https://benna100.github.io/name-rememberer/login.html";
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
    fetch(`${login_url_base}/data`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    })
        .then((resp) => resp.json())
        .catch(() => {
            alert("Fetching data failed 1");
        })
        .then((resp) => {
            if (!resp.successful) {
                return alert("wrong password");
            }

            let nodes = resp.data.nodes.map(({ image, id, label, color }) => {
                const obj = {
                    id,
                    image,
                    label,
                    shape: image !== "" ? "image" : "box",
                };
                if (color !== "") {
                    obj.color = color;
                }

                if (nodePositions && nodePositions[id]) {
                    obj.x = nodePositions[id].x;
                    obj.y = nodePositions[id].y;
                }

                return obj;
            });

            nodesDataset = new vis.DataSet(nodes);
            edgesDataset = new vis.DataSet(resp.data.edges);

            allNodes = nodesDataset.get();

            draw();
            populateSelectList(allNodes);
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
            // shapeProperties: {
            //     useBorderWithImage: true,
            //     interpolation: false, // 'true' for intensive zooming
            // },
        },
        edges: {
            color: "lightgray",
            // smooth: {
            //     type: "continuous",
            //     roundness: 1,
            // },
        },
        // layout: {
        //     improvedLayout: false,
        // },
        // physics: {
        //     solver: "forceAtlas2Based",
        //     forceAtlas2Based: {
        //         gravitationalConstant: -100,
        //     },
        //     // solver: "hierarchicalRepulsion",
        //     // stabilization: {
        //     //     iterations: 987,
        //     //     updateInterval: 10,
        //     // },
        // },
    };

    /*
    //physics: { stabilization: false },
        physics: {
            solver: "forceAtlas2Based",
            forceAtlas2Based: {
                gravitationalConstant: -8000,
                springConstant: 0.04,
                springLength: 95,
            },
            adaptiveTimestep: true,
            stabilization: {
                iterations: 987,
                updateInterval: 10,
            },
        },
        layout: {
            improvedLayout: true,
        },
    */
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

    popupButtonUpdateNode.addEventListener("click", () => {
        const newNode = {
            id: selectedNodeId,
            label: popUpLabelElement.value,
            image: popUpImageElement.value,
            color: popUpColorElement.value,
        };

        fetch(`${login_url_base}/node/${selectedNodeId}`, {
            method: "PUT",
            body: JSON.stringify(newNode),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((resp) => resp.json())
            .then((resp) => {
                popup.classList.remove("visible");

                nodesDataset.updateOnly(newNode);

                allNodes = nodesDataset.get();

                updateSelectLists();
                clearAllInputs();
            });
    });

    popupButtonDeleteNode.addEventListener("click", () => {
        fetch(`${login_url_base}/node/${selectedNodeId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((resp) => resp.json())
            .then((resp) => {
                popup.classList.remove("visible");

                nodesDataset.remove(selectedNodeId);

                allNodes = nodesDataset.get();

                updateSelectLists();
                clearAllInputs();
            });
    });

    popupButtonUpdateEdge.addEventListener("click", () => {
        const newEdge = {
            id: selectedEdgeId,
            from: popUpEdgeFromElement.value,
            to: popUpEdgeToElement.value,
            label: popUpEdgeLabelElement.value,
        };

        fetch(`${login_url_base}/edge/${selectedEdgeId}`, {
            method: "PUT",
            body: JSON.stringify(newEdge),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((resp) => resp.json())
            .then((resp) => {
                popupEdge.classList.remove("visible");

                updateSelectLists();
                clearAllInputs();
            });
    });

    popupButtonDeleteEdge.addEventListener("click", () => {
        fetch(`${login_url_base}/edge/${selectedEdgeId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((resp) => resp.json())
            .then((resp) => {
                popupEdge.classList.remove("visible");

                updateSelectLists();
                clearAllInputs();
            });

        edgesDataset.remove(selectedEdgeId);
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
        const connectedToId =
            "value" in connectedToSelectList
                ? connectedToSelectList.value
                : undefined;
        const connectionLabel = document.querySelector(
            ".popup-add-node .connection-label"
        ).value;

        fetch(`${login_url_base}/node`, {
            method: "POST",
            body: JSON.stringify({
                label,
                image,
                color,
                connectedToId,
                connectionLabel,
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((resp) => resp.json())
            .then((resp) => {
                let { id, label, color, image } = resp.nodeCreated;

                // yes i know this is a hack
                if (color === "") {
                    color = "#fff";
                }
                nodesDataset.add({ id, label, color, image });
                if (resp.edgeCreated) {
                    let { from, to } = resp.edgeCreated;

                    edgesDataset.add({
                        from,
                        to,
                        label: resp.edgeCreated.label,
                    });
                }

                allNodes = nodesDataset.get();

                addNode.classList.remove("visible");

                updateSelectLists(resp.nodeCreated);
                clearAllInputs();
            })
            .catch(() => {
                alert("Node creation failed");
                addNode.classList.remove("visible");
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
