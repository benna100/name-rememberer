document.querySelector("button").addEventListener("click", () => {
    checkAndGetData(input.value);
});
const loading = document.querySelector("span.loading");

const input = document.querySelector("input");
if (localStorage.password) {
    checkAndGetData(localStorage.password);
    document.querySelector("input").remove();
    document.querySelector("button").remove();
}

function checkAndGetData(password) {
    const login_url = window.location.host.includes("localhost")
        ? "http://localhost:5001/name-rememberer-8ed08/us-central1/app/data"
        : "https://us-central1-name-rememberer-8ed08.cloudfunctions.net/app/data";
    fetch(login_url, {
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
        })
        .catch(() => {
            alert("Fetching data failed");
        });
}

// Called when the Visualization API is loaded.
function draw({ edges, nodes }) {
    nodes = nodes.map(({ image, id, label, color }) => {
        const obj = {
            id,
            image,
            label,
            shape: image !== "" ? "image" : "box",
        };
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
