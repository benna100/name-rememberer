import "./main.scss";

document.querySelector("button").addEventListener("click", () => {
    checkAndGetData(input.value);
});
const loading = document.querySelector("span.loading");

const input = document.querySelector("input");

let selectedNodeId;
let selectedEdgeId;

const login_url_base = window.location.host.includes("localhost")
    ? "http://localhost:5001/name-rememberer-8ed08/us-central1/app"
    : "https://us-central1-name-rememberer-8ed08.cloudfunctions.net/app";
if (localStorage.password) {
    checkAndGetData(localStorage.password);
    document.querySelector("input").remove();
    document.querySelector("button").remove();
}

function populateSelectList(nodes) {
    const selects = document.querySelectorAll("select");
    selects.forEach((select) => {
        const optionHtmlString = nodes
            .map((node) => `<option value="${node.id}">${node.label}</option>`)
            .join("");
        select.innerHTML = optionHtmlString;
    });
}

let nodes = [];
let edges = [];

function checkAndGetData(password) {
    fetch(`${login_url_base}/data`, {
        method: "POST",
        body: JSON.stringify({ password }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((resp) => resp.json())
        .then((resp) => {
            if (!resp.successful) {
                return alert("wrong password");
            }

            localStorage.password = password;
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
        fetch(`${login_url_base}/node/${selectedNodeId}`, {
            method: "PUT",
            body: JSON.stringify({
                label: popUpLabelElement.value,
                image: popUpImageElement.value,
                color: popUpColorElement.value,
                password: localStorage.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((resp) => {
                popup.classList.remove("visible");
            });
    });

    popupEdgeButton.addEventListener("click", () => {
        fetch(`${login_url_base}/edge/${selectedEdgeId}`, {
            method: "PUT",
            body: JSON.stringify({
                from: popUpEdgeFromElement.value,
                to: popUpEdgeToElement.value,
                label: popUpEdgeLabelElement.value,
                password: localStorage.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((resp) => {
                popupEdge.classList.remove("visible");
            });
    });

    closePopupElement.addEventListener("click", () =>
        popup.classList.remove("visible")
    );

    closePopupEdgeElement.addEventListener("click", () =>
        popupEdge.classList.remove("visible")
    );

    network.on("click", function (params) {
        const clickedNodeId = params.nodes[0];
        const clickedEdgeId = params.edges[0];
        if (clickedNodeId != undefined) {
            selectedNodeId = clickedNodeId;
            popup.classList.add("visible");

            const nodesInNetwork = network.body.nodes;
            const nodeClicked = network.body.nodes[clickedNodeId];
            let { id, label, image, color } = nodeClicked.options;
            color = color.background;

            popUpLabelElement.value = label;
            popUpImageElement.value = image;
            popUpColorElement.value = color;
        }

        if (clickedEdgeId != undefined) {
            selectedEdgeId = clickedEdgeId;
            const edgesInNetwork = network.body.edges;
            const edgeClicked = network.body.edges[clickedEdgeId];
            const { to, from, label } = edgeClicked.options;

            popupEdge.classList.add("visible");
            popUpEdgeToElement.value = to;
            popUpEdgeFromElement.value = from;
            popUpEdgeLabelElement.value = label;
        }
    });
}

document
    .querySelector("button.create-new-node")
    .addEventListener("click", () => {
        const label = document.querySelector(".add-node .label").value;
        const color = document.querySelector(".add-node .color").value;
        const image = document.querySelector(".add-node .image").value;
        const connectedToId = document.querySelector(
            ".add-node .connected-to"
        ).value;
        const connectionLabel = document.querySelector(
            ".add-node .connection-label"
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
                password: localStorage.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((resp) => {
                let { id, label, color, image } = resp.nodeCreated;
                nodes.add({ id, label, color, image });

                let { from, to } = resp.edgeCreated;
                edges.add({ from, to, label: resp.edgeCreated.label });
            })
            .catch(() => {
                alert("Fetching data failed");
            });
    });
