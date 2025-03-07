"use strict";
import {
    createNode,
    updateNode,
    deleteNode,
    updateEdge,
    deleteEdge,
} from "./../db.js";
import {
    nodesDataset,
    edgesDataset,
    allNodes,
    networkInstance,
} from "./network.js";

let selectedNodeId;
let selectedEdgeId;
let selectedConnectedToId = null; // holds the chosen node's id for connection

const addNodePopup = document.querySelector("section.popup-add-node");

export function setupUI() {
    setupPopupEventListeners();
    setupAddNodeListener();
    setupConnectedToAutocomplete(); // initialize autocomplete for "Connected to" field
    setupSearchAutocomplete(); // initialize autocomplete for search bar
}

function setupPopupEventListeners() {
    const popup = document.querySelector(".popup");
    const popupEdge = document.querySelector(".popup-edge");

    // Close popups
    popup
        .querySelector(".close")
        .addEventListener("click", () => popup.classList.remove("visible"));
    popupEdge
        .querySelector(".close")
        .addEventListener("click", () => popupEdge.classList.remove("visible"));
    document
        .querySelector("section.popup-add-node button.close")
        .addEventListener("click", () =>
            addNodePopup.classList.remove("visible")
        );

    // Update node
    popup.querySelector("button.update-node").addEventListener("click", () => {
        const newNode = {
            label: popup.querySelector(".label").value,
            image: popup.querySelector(".image").value,
            color: popup.querySelector(".color").value,
        };

        updateNode(selectedNodeId, newNode)
            .then((updatedNode) => {
                nodesDataset.updateOnly({
                    id: updatedNode.id,
                    label: updatedNode.label,
                    image: updatedNode.image,
                    color: updatedNode.color,
                });
                popup.classList.remove("visible");
            })
            .catch((err) => console.error("Update node failed:", err));
    });

    // Delete node
    popup.querySelector("button.delete-node").addEventListener("click", () => {
        deleteNode(selectedNodeId)
            .then(() => {
                nodesDataset.remove(selectedNodeId);
                popup.classList.remove("visible");
            })
            .catch((err) => console.error("Delete node failed:", err));
    });

    // Update edge
    popupEdge
        .querySelector("button.update-edge")
        .addEventListener("click", () => {
            const newEdge = {
                from: popupEdge.querySelector("select.from").value,
                to: popupEdge.querySelector("select.to").value,
                label: popupEdge.querySelector(".label").value,
            };

            updateEdge(selectedEdgeId, newEdge)
                .then(() => {
                    popupEdge.classList.remove("visible");
                })
                .catch((err) => console.error("Update edge failed:", err));
        });

    // Delete edge
    popupEdge
        .querySelector("button.delete-edge")
        .addEventListener("click", () => {
            deleteEdge(selectedEdgeId)
                .then(() => {
                    edgesDataset.remove(selectedEdgeId);
                    popupEdge.classList.remove("visible");
                })
                .catch((err) => console.error("Delete edge failed:", err));
        });
}

function setupAddNodeListener() {
    document
        .querySelector("main > button.add-node")
        .addEventListener("click", () => {
            addNodePopup.classList.add("visible");
        });

    document
        .querySelector("button.create-new-node")
        .addEventListener("click", () => {
            const label = document.querySelector(
                ".popup-add-node .label"
            ).value;
            const color = document.querySelector(
                ".popup-add-node .color"
            ).value;
            const image = document.querySelector(
                ".popup-add-node .image"
            ).value;
            // Use the selectedConnectedToId from the autocomplete (if one was selected)
            const connectedToId = selectedConnectedToId;
            const connectionLabel = document.querySelector(
                ".popup-add-node .connection-label"
            ).value;

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
                    // Clear the autocomplete field and reset selection
                    updateConnectedToInput();
                    clearAllInputs();
                    addNodePopup.classList.remove("visible");
                })
                .catch((err) => {
                    console.error("Node creation failed", err);
                    alert("Node creation failed");
                    addNodePopup.classList.remove("visible");
                });
        });
}

function updateConnectedToInput() {
    const input = document.getElementById("connected-to-input");
    if (input) {
        input.value = "";
    }
    selectedConnectedToId = null;
}

function setupConnectedToAutocomplete() {
    const input = document.getElementById("connected-to-input");
    const autocompleteContainer = document.getElementById(
        "connected-to-autocomplete"
    );

    if (!input || !autocompleteContainer) {
        console.warn(
            "Autocomplete elements for Connected To not found. Update your HTML to include an input with id 'connected-to-input' and a container with id 'connected-to-autocomplete'."
        );
        return;
    }

    input.addEventListener("input", function () {
        const query = input.value.trim().toLowerCase();
        autocompleteContainer.innerHTML = "";
        if (!query) return;
        // Filter nodes based on the query
        const suggestions = allNodes.filter((node) =>
            node.label.toLowerCase().includes(query)
        );
        suggestions.forEach((node) => {
            const item = document.createElement("div");
            item.classList.add("autocomplete-item");
            item.textContent = node.label;
            item.dataset.id = node.id;
            item.addEventListener("click", () => {
                input.value = node.label;
                selectedConnectedToId = node.id;
                autocompleteContainer.innerHTML = "";
            });
            autocompleteContainer.appendChild(item);
        });
    });

    // Hide suggestions when clicking outside the input
    document.addEventListener("click", function (e) {
        if (e.target !== input) {
            autocompleteContainer.innerHTML = "";
        }
    });
}

function setupSearchAutocomplete() {
    const searchInput = document.getElementById("searchBar");
    const searchAutocompleteContainer = document.getElementById(
        "search-autocomplete"
    );

    if (!searchInput || !searchAutocompleteContainer) {
        console.warn(
            "Search autocomplete elements not found. Update your HTML to include an input with id 'searchBar' and a container with id 'search-autocomplete'."
        );
        return;
    }

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim().toLowerCase();
        searchAutocompleteContainer.innerHTML = "";
        if (!query) return;
        // Filter nodes based on the query
        const suggestions = allNodes.filter((node) =>
            node.label.toLowerCase().includes(query)
        );
        suggestions.forEach((node) => {
            const item = document.createElement("div");
            item.classList.add("autocomplete-item");
            item.textContent = node.label;
            item.dataset.id = node.id;
            item.addEventListener("click", () => {
                searchInput.value = node.label;
                searchAutocompleteContainer.innerHTML = "";
                zoomToNode(node.id);
            });
            searchAutocompleteContainer.appendChild(item);
        });
    });

    // Hide suggestions when clicking outside the search input
    document.addEventListener("click", function (e) {
        if (e.target !== searchInput) {
            searchAutocompleteContainer.innerHTML = "";
        }
    });
}

// New function: Zoom into a node using the network instance
function zoomToNode(nodeId) {
    if (networkInstance) {
        networkInstance.focus(nodeId, {
            scale: 1.0,
            animation: {
                duration: 1000,
                easingFunction: "easeInOutQuad",
            },
        });
    } else {
        console.warn("Network instance not available to perform zoom.");
    }
}

function clearAllInputs() {
    document.querySelectorAll("input").forEach((input) => {
        input.value = "";
    });
}

// External functions for node/edge popups
export function setSelectedNode(id) {
    selectedNodeId = id;
    const popup = document.querySelector(".popup");
    const node = nodesDataset.get(id);
    if (node) {
        popup.querySelector(".label").value = node.label || "";
        popup.querySelector(".image").value = node.image || "";
        popup.querySelector(".color").value = node.color
            ? node.color.background || node.color
            : "";
        popup.classList.add("visible");
    }
}

export function setSelectedEdge(id, edgeData) {
    selectedEdgeId = id;
    const popupEdge = document.querySelector(".popup-edge");
    popupEdge.querySelector("select.from").value = edgeData.from || "";
    popupEdge.querySelector("select.to").value = edgeData.to || "";
    popupEdge.querySelector(".label").value = edgeData.label || "";
    popupEdge.classList.add("visible");
}

// Listen for custom events dispatched from network.js for node and edge clicks.
window.addEventListener("nodeClick", (e) => {
    const { id } = e.detail;
    setSelectedNode(id);
});

window.addEventListener("edgeClick", (e) => {
    const { id, data } = e.detail;
    setSelectedEdge(id, data);
});
