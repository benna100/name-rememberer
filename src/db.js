import Dexie from "dexie";

export const db = new Dexie("NameRemembererDB");
db.version(1).stores({
    nodes: "++id, label, color, image, createdAt, updatedAt",
    edges: "++id, from, to, label, createdAt, updatedAt",
});

export async function getData() {
    const nodes = await db.nodes.toArray();
    const edges = await db.edges.toArray();
    return { nodes, edges };
}

export async function createNode({
    label,
    color,
    image,
    connectedToId,
    connectionLabel,
}) {
    const now = new Date();
    const nodeData = { label, color, image, createdAt: now, updatedAt: now };
    const nodeId = await db.nodes.add(nodeData);

    let edgeData = null;
    if (connectedToId && connectedToId !== "None") {
        const parsedConnectedToId = parseInt(connectedToId, 10);
        if (!isNaN(parsedConnectedToId)) {
            edgeData = {
                from: parsedConnectedToId,
                to: nodeId,
                label: connectionLabel,
                createdAt: now,
                updatedAt: now,
            };
            edgeData.id = await db.edges.add(edgeData);
        }
    }

    return {
        node: Object.assign({}, nodeData, { id: nodeId }),
        edge: edgeData,
    };
}

export async function updateNode(id, { label, image, color }) {
    const updatedAt = new Date();
    await db.nodes.update(parseInt(id, 10), { label, image, color, updatedAt });
    return db.nodes.get(parseInt(id, 10));
}

export async function deleteNode(id) {
    const nodeId = parseInt(id, 10);
    const node = await db.nodes.get(nodeId);
    await db.edges.where("from").equals(nodeId).delete();
    await db.edges.where("to").equals(nodeId).delete();
    await db.nodes.delete(nodeId);
    return node;
}

export async function updateEdge(id, { from, to, label }) {
    const updatedAt = new Date();
    await db.edges.update(parseInt(id, 10), {
        from: parseInt(from, 10),
        to: parseInt(to, 10),
        label,
        updatedAt,
    });
    return db.edges.get(parseInt(id, 10));
}

export async function deleteEdge(id) {
    const edgeId = parseInt(id, 10);
    const edge = await db.edges.get(edgeId);
    await db.edges.delete(edgeId);
    return edge;
}
