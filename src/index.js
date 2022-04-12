document.querySelector("button").addEventListener("click", () => {
    checkAndGetData(input.value);
});
const loading = document.querySelector("span.loading");

const input = document.querySelector("input");

const login_url_base = window.location.host.includes("localhost")
    ? "http://localhost:5001/name-rememberer-8ed08/us-central1/app"
    : "https://us-central1-name-rememberer-8ed08.cloudfunctions.net/app";
if (localStorage.password) {
    checkAndGetData(localStorage.password);
    document.querySelector("input").remove();
    document.querySelector("button").remove();
}

function populateSelectList(nodes) {
    const select = document.querySelector("select");
    const optionHtmlString = nodes
        .map((node) => `<option value="${node.id}">${node.label}</option>`)
        .join("");
    select.innerHTML = optionHtmlString;
}

function checkAndGetData(password) {
    fetch(`${login_url_base}/data`, {
        method: "POST",
        body: JSON.stringify({ password }),
    })
        .then((resp) => resp.json())
        .then((resp) => {
            if (!resp.successful) {
                return alert("wrong password");
            }
            localStorage.password = password;
            draw(resp.data);
            populateSelectList(resp.data.nodes);
        })
        .catch(() => {
            alert("Fetching data failed");
        });
}

// Called when the Visualization API is loaded.
function draw({ edges, nodes }) {
    console.log(nodes);
    nodes = nodes.map(({ image, id, label, color }) => {
        const obj = {
            id,
            image,
            label,
            shape: image !== "" ? "image" : "box",
        };
        if (color !== "") {
            obj.color = color;
        }
        console.log(obj);
        return obj;
    });

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
        })
            .then((resp) => resp.json())
            .then((resp) => {
                console.log(resp);
            })
            .catch(() => {
                alert("Fetching data failed");
            });
    });
