import {
    db,
    getData,
    createNode,
    updateNode,
    deleteNode,
    updateEdge,
    deleteEdge,
} from "./../db.js";

export let networkInstance; // Export the network instance

let nodesDataset, edgesDataset, allNodes;
let nodePositions = JSON.parse(localStorage.getItem("node-positions"));

export function initializeNetwork(accessToken) {
    fetchData();
}

function fetchData() {
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
            drawNetwork();
            populateSelectList(allNodes);
        })
        .catch((err) => {
            console.error("Fetching data failed", err);
            alert("Fetching data failed");
        });
}

function drawNetwork() {
    const container = document.querySelector(".network");
    const data = {
        nodes: nodesDataset,
        edges: edgesDataset,
    };
    const options = {
        nodes: {
            borderWidth: 1,
            size: 30,
            color: {
                border: "#ccc",
                background: "#fff",
            },
            font: { color: "#000" },
        },
        edges: { color: "lightgray" },
    };

    const network = new vis.Network(container, data, options);
    networkInstance = network; // store the instance for zooming

    network.on("afterDrawing", () => {
        const loadingElem = document.querySelector("span.loading");
        if (loadingElem) {
            loadingElem.style.display = "none";
        }
    });

    network.on("stabilized", () => {
        const positions = {};
        nodesDataset.forEach((item) => {
            const pos = network.getPositions(item.id);
            positions[item.id] = {
                x: pos[item.id].x,
                y: pos[item.id].y,
            };
        });
        localStorage.setItem("node-positions", JSON.stringify(positions));
    });

    network.on("click", function (params) {
        // Use the dataset to get node/edge data
        if (params.nodes && params.nodes.length > 0) {
            const clickedNodeId = params.nodes[0];
            const nodeData = nodesDataset.get(clickedNodeId);
            window.dispatchEvent(
                new CustomEvent("nodeClick", {
                    detail: { id: clickedNodeId, data: nodeData },
                })
            );
        }
        if (
            params.edges &&
            params.edges.length > 0 &&
            (!params.nodes || params.nodes.length === 0)
        ) {
            const clickedEdgeId = params.edges[0];
            const edgeData = edgesDataset.get(clickedEdgeId);
            window.dispatchEvent(
                new CustomEvent("edgeClick", {
                    detail: { id: clickedEdgeId, data: edgeData },
                })
            );
        }
    });
}

function populateSelectList(nodes) {
    const selects = document.querySelectorAll("select");
    selects.forEach((select) => {
        let optionHtmlString = `<option>None</option>`;
        optionHtmlString += nodes
            .sort((a, b) =>
                a.label.toLowerCase().localeCompare(b.label.toLowerCase())
            )
            .map((node) => `<option value="${node.id}">${node.label}</option>`)
            .join("");
        select.innerHTML = optionHtmlString;
    });
}

export { nodesDataset, edgesDataset, allNodes };
