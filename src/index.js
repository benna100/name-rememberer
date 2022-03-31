import img from "./assets/images/interactive-hand.png";

var DIR = "img/soft-scraps-icons/";

var nodes = null;
var edges = null;
var network = null;

const input = document.querySelector("input");
document.querySelector("button").addEventListener("click", () => {
    const url_local =
        "http://localhost:5001/name-rememberer-8ed08/us-central1/addMessage";
    const url_prod =
        "https://us-central1-name-rememberer-8ed08.cloudfunctions.net/addMessag";
    fetch(url_prod, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input.value }),
    })
        .then((resp) => resp.json())
        .then((resp) => {
            if (resp.successful) {
                draw(resp.data);
            }
        });
});

// Called when the Visualization API is loaded.
function draw({ edges, nodes }) {
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
                border: "#406897",
                background: "#6AAFFF",
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
    network = new vis.Network(container, data, options);
}
