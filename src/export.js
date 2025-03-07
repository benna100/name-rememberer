import { db } from "./db.js";

// Helper: Pad numbers with leading zeros.
function pad(num, size) {
    let s = String(num);
    while (s.length < size) s = "0" + s;
    return s;
}

// Helper: Format Date as "YYYY-MM-DD HH:MM:SS.mmm"
function formatDate(date) {
    return (
        date.getFullYear() +
        "-" +
        pad(date.getMonth() + 1, 2) +
        "-" +
        pad(date.getDate(), 2) +
        " " +
        pad(date.getHours(), 2) +
        ":" +
        pad(date.getMinutes(), 2) +
        ":" +
        pad(date.getSeconds(), 2) +
        "." +
        pad(date.getMilliseconds(), 3)
    );
}

// Helper: Escape single quotes in strings.
function escapeString(str) {
    return typeof str === "string" ? str.replace(/'/g, "''") : "";
}

// Export function: Builds SQL text from the Dexie data.
export async function exportToSQL() {
    const nodes = await db.nodes.toArray();
    const edges = await db.edges.toArray();

    let sql = "";

    // Create table statements for Node and Edge.
    sql += `CREATE TABLE \`Node\` (
  \`id\` int NOT NULL AUTO_INCREMENT,
  \`createdAt\` datetime(3) NOT NULL,
  \`updatedAt\` datetime(3) NOT NULL,
  \`image\` varchar(191) NOT NULL,
  \`label\` varchar(191) NOT NULL,
  \`color\` varchar(191) NOT NULL DEFAULT '',
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB;\n\n`;

    sql += `CREATE TABLE \`Edge\` (
  \`id\` int NOT NULL AUTO_INCREMENT,
  \`createdAt\` datetime(3) NOT NULL,
  \`updatedAt\` datetime(3) NOT NULL,
  \`from\` int NOT NULL,
  \`to\` int NOT NULL,
  \`label\` varchar(191) NOT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB;\n\n`;

    // INSERT statements for Node.
    if (nodes.length) {
        sql += "INSERT INTO `Node` VALUES\n";
        const nodeRows = nodes.map((node) => {
            const createdAt = formatDate(new Date(node.createdAt));
            const updatedAt = formatDate(new Date(node.updatedAt));
            const image = escapeString(node.image);
            const label = escapeString(node.label);
            const color = escapeString(node.color);
            return `(${node.id},'${createdAt}','${updatedAt}','${image}','${label}','${color}')`;
        });
        sql += nodeRows.join(",\n") + ";\n\n";
    }

    // INSERT statements for Edge.
    if (edges.length) {
        sql += "INSERT INTO `Edge` VALUES\n";
        const edgeRows = edges.map((edge) => {
            const createdAt = formatDate(new Date(edge.createdAt));
            const updatedAt = formatDate(new Date(edge.updatedAt));
            const label = escapeString(edge.label);
            return `(${edge.id},'${createdAt}','${updatedAt}',${edge.from},${edge.to},'${label}')`;
        });
        sql += edgeRows.join(",\n") + ";\n\n";
    }

    return sql;
}
