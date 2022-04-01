document.querySelector("button").addEventListener("click", () => {
    checkAndGetData(input.value);
});

const input = document.querySelector("input");
if (localStorage.password) {
    checkAndGetData(localStorage.password);
    document.querySelector("input").remove();
    document.querySelector("button").remove();
}

function checkAndGetData(password) {
    const login_url = window.location.host.includes("localhost")
        ? "http://localhost:5001/name-rememberer-8ed08/us-central1/addMessage"
        : "https://us-central1-name-rememberer-8ed08.cloudfunctions.net/addMessage";
    fetch(login_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
    })
        .then((resp) => resp.json())
        .then((resp) => {
            if (!resp.successful) {
                return alert("wrong password");
            }
            localStorage.password = password;
            draw(resp.data);
        });
}

// Called when the Visualization API is loaded.
function draw({ edges, nodes }) {
    nodes = nodes.map(({ image, id, label }) => {
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
    };
    new vis.Network(container, data, options);
}
