import { db } from "./../db.js";
import { getData } from "../db.js";

// Helper: Splits a SQL tuple string into an array of individual values.
function splitSQLValues(str) {
    const result = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === "'" && (i === 0 || str[i - 1] !== "\\")) {
            inQuotes = !inQuotes;
            current += char;
        } else if (char === "," && !inQuotes) {
            result.push(current.trim());
            current = "";
        } else {
            current += char;
        }
    }
    if (current) result.push(current.trim());
    return result;
}

// Helper: Removes wrapping quotes and unescapes simple escaped quotes.
function stripQuotes(val) {
    return val.startsWith("'") && val.endsWith("'")
        ? val.slice(1, -1).replace(/\\'/g, "'")
        : val;
}

// Helper: Converts a SQL datetime string into a Date object.
function parseDate(str) {
    return new Date(stripQuotes(str).replace(" ", "T"));
}

// The migration function: parses SQL INSERT statements and inserts records into Dexie.
export async function migrateSQL(sqlText) {
    const insertRegex = /INSERT INTO\s+`(\w+)`\s+VALUES\s+(.+?);/gis;
    let match;

    while ((match = insertRegex.exec(sqlText)) !== null) {
        const table = match[1].toLowerCase();
        const valuesPart = match[2];

        // Match individual tuples e.g., (1, '2022-04-12 ...')
        const tupleRegex = /\(([^)]+)\)/g;
        let tupleMatch;
        const rows = [];

        while ((tupleMatch = tupleRegex.exec(valuesPart)) !== null) {
            const values = splitSQLValues(tupleMatch[1]);
            rows.push(values);
        }

        if (table === "node") {
            // Process Node rows: id, createdAt, updatedAt, image, label, color
            for (const row of rows) {
                if (row.length < 6) continue;
                const node = {
                    id: parseInt(row[0], 10),
                    createdAt: parseDate(row[1]),
                    updatedAt: parseDate(row[2]),
                    image: stripQuotes(row[3]),
                    label: stripQuotes(row[4]),
                    color: stripQuotes(row[5]),
                };
                await db.nodes.put(node);
            }
        } else if (table === "edge") {
            // Process Edge rows: id, createdAt, updatedAt, from, to, label
            for (const row of rows) {
                if (row.length < 6) continue;
                const edge = {
                    id: parseInt(row[0], 10),
                    createdAt: parseDate(row[1]),
                    updatedAt: parseDate(row[2]),
                    from: parseInt(row[3], 10),
                    to: parseInt(row[4], 10),
                    label: stripQuotes(row[5]),
                };
                await db.edges.put(edge);
            }
        }
    }
}

// Attaches migration event listener to the "Migrate" button.
export function setupMigration() {
    document.querySelector("#migrate").addEventListener("click", async () => {
        const sqlText = document.querySelector("textarea").value;
        try {
            await migrateSQL(sqlText);
            alert("Migration complete!");
        } catch (err) {
            console.error("Migration error:", err);
            alert("Migration failed. See console for details.");
        }
    });
}

export async function exportData() {
    try {
        const data = await getData();
        const jsonData = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data_export.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (err) {
        console.error("Export data failed", err);
    }
}

// New function: Imports data from a JSON string and populates the database.
export async function importData(jsonText) {
    try {
        const data = JSON.parse(jsonText);
        if (data.nodes && Array.isArray(data.nodes)) {
            for (const node of data.nodes) {
                await db.nodes.put(node);
            }
        }
        if (data.edges && Array.isArray(data.edges)) {
            for (const edge of data.edges) {
                await db.edges.put(edge);
            }
        }
        alert("Data import complete!");
    } catch (err) {
        console.error("Import data failed", err);
        alert("Data import failed. See console for details.");
    }
}
