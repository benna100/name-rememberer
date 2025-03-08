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
import { exportData, importData } from "../network/migration.js"; // Updated import: added importData

let selectedNodeId;
let selectedEdgeId;
let selectedConnectedToId = null; // holds the chosen node's id for connection

const addNodePopup = document.querySelector("section.popup-add-node");

export function setupUI() {
    setupPopupEventListeners();
    setupAddNodeListener();
    setupConnectedToAutocomplete(); // initialize autocomplete for "Connected to" field
    setupSearchAutocomplete(); // initialize autocomplete for search bar
    setupSettingsToggle(); // added setting panel toggle
    setupExportData(); // attach export button listener
    setupImportData(); // Added: attach import button functionality
}

// Add this helper function near the top (after your imports)
function getRandomConnectionName(node) {
    // Ensure edgesDataset is available; use the complete list from edgesDataset
    const allEdges = edgesDataset.get();
    // Find edges where node is involved.
    const relevantEdges = allEdges.filter(
        (edge) => edge.from === node.id || edge.to === node.id
    );
    if (relevantEdges.length === 0) return undefined;
    // Pick one random edge.
    const randomEdge =
        relevantEdges[Math.floor(Math.random() * relevantEdges.length)];
    // Determine the other node id.
    const otherNodeId =
        randomEdge.from === node.id ? randomEdge.to : randomEdge.from;
    const otherNode = nodesDataset.get(otherNodeId);
    return otherNode ? otherNode.label : undefined;
}

function setupPopupEventListeners() {
    const popup = document.querySelector(".popup");
    const popupEdge = document.querySelector(".popup-edge");

    // Close popups
    popup
        .querySelector(".close")
        .addEventListener("click", () => popup.classList.add("hidden"));
    popupEdge
        .querySelector(".close")
        .addEventListener("click", () => popupEdge.classList.add("hidden"));
    document
        .querySelector("section.popup-add-node button.close")
        .addEventListener("click", () => addNodePopup.classList.add("hidden"));

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
                    color: null,
                });
                popup.classList.add("hidden");
            })
            .catch((err) => console.error("Update node failed:", err));
    });

    // Delete node
    popup.querySelector("button.delete-node").addEventListener("click", () => {
        deleteNode(selectedNodeId)
            .then(() => {
                nodesDataset.remove(selectedNodeId);
                popup.classList.add("hidden");
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
                    popupEdge.classList.add("hidden");
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
                    popupEdge.classList.add("hidden");
                })
                .catch((err) => console.error("Delete edge failed:", err));
        });
}

function setupAddNodeListener() {
    document
        .querySelector("main > button.add-node")
        .addEventListener("click", () => {
            addNodePopup.classList.remove("hidden");
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
                    addNodePopup.classList.add("hidden");
                })
                .catch((err) => {
                    console.error("Node creation failed", err);
                    alert("Node creation failed");
                    addNodePopup.classList.add("hidden");
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

// Update Connected To Autocomplete
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
            item.classList.add("autocomplete-item", "p-2", "cursor-pointer");
            const randomConn = getRandomConnectionName(node);
            // If a connection is found, show "Name -> Connection"
            item.textContent = randomConn
                ? `${node.label} -> ${randomConn}`
                : node.label;
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

// Update Search Autocomplete similarly:
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
        // Hide container if there's no query.
        if (!query) {
            searchAutocompleteContainer.style.display = "none";
            return;
        }
        // Filter nodes based on the query.
        const suggestions = allNodes.filter((node) =>
            node.label.toLowerCase().includes(query)
        );
        // If no suggestions, hide container.
        if (suggestions.length === 0) {
            searchAutocompleteContainer.style.display = "none";
        } else {
            searchAutocompleteContainer.style.display = "block";
            suggestions.forEach((node) => {
                const item = document.createElement("div");
                item.classList.add(
                    "autocomplete-item",
                    "p-2",
                    "cursor-pointer"
                );
                const randomConn = getRandomConnectionName(node);
                item.textContent = randomConn
                    ? `${node.label} -> ${randomConn}`
                    : node.label;
                item.dataset.id = node.id;
                item.addEventListener("click", () => {
                    searchInput.value = node.label;
                    searchAutocompleteContainer.innerHTML = "";
                    zoomToNode(node.id);
                });
                searchAutocompleteContainer.appendChild(item);
            });
        }
    });

    // Hide suggestions when clicking outside the search input.
    document.addEventListener("click", function (e) {
        if (e.target !== searchInput) {
            searchAutocompleteContainer.innerHTML = "";
            searchAutocompleteContainer.style.display = "none";
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

// New function: Setup settings panel toggle functionality
function setupSettingsToggle() {
    const settingsBtn = document.getElementById("settings-btn");
    const closeSettings = document.getElementById("close-settings");
    const settingsPanel = document.getElementById("settings-panel");
    console.log(settingsBtn, closeSettings, settingsPanel);
    if (settingsBtn && closeSettings && settingsPanel) {
        settingsBtn.addEventListener("click", () => {
            settingsPanel.classList.remove("translate-x-full");
        });
        closeSettings.addEventListener("click", () => {
            settingsPanel.classList.add("translate-x-full");
        });
    }
}

// New function: Setup export data functionality
function setupExportData() {
    const exportDataBtn = document.getElementById("export-data");
    if (exportDataBtn) {
        exportDataBtn.addEventListener("click", () => {
            exportData();
        });
    } else {
        console.warn("Export Data button not found in the DOM.");
    }
}

// New function: Setup import data functionality.
function setupImportData() {
    const importDataBtn = document.getElementById("import-data");
    const importFileInput = document.getElementById("import-file");
    if (importDataBtn && importFileInput) {
        importDataBtn.addEventListener("click", () => {
            importFileInput.click();
        });
        importFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = async (event) => {
                    try {
                        await importData(event.target.result);
                        // Optionally refresh UI here if needed.
                    } catch (err) {
                        console.error("Import data failed", err);
                        alert("Import data failed. See console for details.");
                    }
                };
                reader.readAsText(file);
            }
        });
    } else {
        console.warn("Import Data button or file input not found in the DOM.");
    }
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
        popup.classList.remove("hidden");
    }
}

export function setSelectedEdge(id, edgeData) {
    selectedEdgeId = id;
    const popupEdge = document.querySelector(".popup-edge");
    popupEdge.querySelector("select.from").value = edgeData.from || "";
    popupEdge.querySelector("select.to").value = edgeData.to || "";
    popupEdge.querySelector(".label").value = edgeData.label || "";
    popupEdge.classList.remove("hidden");
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
