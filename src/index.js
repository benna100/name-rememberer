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
let accessToken;
onAuthStateChanged(auth, function (user) {
    if (user) {
        checkAndGetData(user.accessToken);
        accessToken = user.accessToken;
        document.querySelector("input").remove();
        document.querySelector("button").remove();
        document.querySelector("main > .login").remove();
    } else {
        const loginElement = document.querySelector("main > .login");
        const loginButton = loginElement.querySelector("button.login");
        loginButton.addEventListener("click", () => {
            const email = loginElement.querySelector("input.email").value;
            const password = loginElement.querySelector("input.password").value;
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    // const user = userCredential.user;
                    // checkAndGetData(auth.currentUser.accessToken);
                })
                .catch((error) => {
                    console.log(error);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        });
    }
});

const loading = document.querySelector("span.loading");
const input = document.querySelector("input");
const addNode = document.querySelector("section.popup-add-node");

let selectedNodeId;
let selectedEdgeId;

const login_url_base = window.location.host.includes("localhost")
    ? "http://localhost:5001/name-rememberer-8ed08/us-central1/app"
    : "https://us-central1-name-rememberer-8ed08.cloudfunctions.net/app";

function populateSelectList(nodes) {
    const selects = document.querySelectorAll("select");
    selects.forEach((select) => {
        const optionHtmlString = nodes
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

let nodes = [];
let edges = [];

function checkAndGetData(accessToken) {
    fetch(`${login_url_base}/data`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    })
        .then((resp) => resp.json())
        .then((resp) => {
            if (!resp.successful) {
                return alert("wrong password");
            }

            nodes = resp.data.nodes;
            edges = resp.data.edges;
            draw();
            populateSelectList(resp.data.nodes);
        })
        .catch(() => {
            alert("Fetching data failed 1");
        });
}

// Called when the Visualization API is loaded.
function draw() {
    let nodesData = nodes.map(({ image, id, label, color }) => {
        const obj = {
            id,
            image,
            label,
            shape: image !== "" ? "image" : "box",
        };
        if (color !== "") {
            obj.color = color;
        }

        return obj;
    });

    if (window.location.host.includes("localhost")) {
        //nodesData = nodesData.filter((_, i) => i < 50);
    }

    nodes = new vis.DataSet(nodesData);
    edges = new vis.DataSet(edges);

    // create people.
    // value corresponds with the age of the person
    var DIR = "../img/indonesia/";

    // create connections between people
    // value corresponds with the amount of contact between two people

    // create a network
    var container = document.querySelector(".network");
    var data = {
        nodes: nodes,
        edges: edges,
    };
    var options = {
        nodes: {
            borderWidth: 1,
            size: 30,
            color: {
                border: "#ccc",
                background: "#fff",
            },
            font: { color: "#000" },
            shapeProperties: {
                useBorderWithImage: true,
            },
        },
        edges: {
            color: "lightgray",
        },
        layout: {
            improvedLayout: false,
        },
    };
    const network = new vis.Network(container, data, options);

    network.on("afterDrawing", () => {
        loading.style.display = "none";
    });

    const popup = document.querySelector(".popup");
    const closePopupElement = popup.querySelector(".close");
    const popupButton = popup.querySelector("button.update-node");

    const popUpLabelElement = document.querySelector(".popup .label");
    const popUpImageElement = document.querySelector(".popup .image");
    const popUpColorElement = document.querySelector(".popup .color");

    const popupEdge = document.querySelector(".popup-edge");
    const closePopupEdgeElement = popupEdge.querySelector(".close");
    const popupEdgeButton = popupEdge.querySelector("button.update-edge");

    const popUpEdgeLabelElement = document.querySelector(".popup-edge .label");
    const popUpEdgeFromElement = document.querySelector(
        ".popup-edge select.from"
    );
    const popUpEdgeToElement = document.querySelector(".popup-edge select.to");

    popupButton.addEventListener("click", () => {
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

                nodes.updateOnly(newNode);
            });
    });

    popupEdgeButton.addEventListener("click", () => {
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

                edges.updateOnly(newEdge);
            });
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
        const connectedToId = document.querySelector(
            ".popup-add-node .connected-to"
        ).value;
        const connectionLabel = document.querySelector(
            ".popup-add-node .connection-label"
        ).value;

        fetch(`${login_url_base}/node`, {
            method: "POST",
            body: JSON.stringify({
                label,
                image,
                firebaseUid: "asd",
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
                nodes.add({ id, label, color, image });

                let { from, to } = resp.edgeCreated;
                edges.add({ from, to, label: resp.edgeCreated.label });

                addNode.classList.remove("visible");
            })
            .catch(() => {
                alert("Fetching data failed");
                addNode.classList.remove("visible");
            });
    });

document
    .querySelector("main > button.add-node")
    .addEventListener("click", () => addNode.classList.add("visible"));
