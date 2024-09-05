// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
// import fs from "fs";

// I M P O R T   O F   F U N C T I O N S
// import { writeFile, readFile } from "./utils/fileUtils.js";
import { writeFileSync, readFileSync } from "./utils/fileUtils.js";

// C O D E
// Erstellt ein Beispiel-Objekt
let obj = { table: [] };
// Fügt ein Element zum Objekt hinzu
obj.table.push({ id: 1, square: 2 });
// Wandelt das Objekt in einen String um
let json = JSON.stringify(obj);

// WRITE //
// Schreibt die JSON-Daten in die Datei
// Für Asynchronen Code
// await writeFile("data.json", json);
// Für Synchronen Code
writeFileSync("data.json", json);

// Liest die Daten aus der Datei

// READE //
// Für Asynchronen Code
// const readData = await readFile("data.json");

// Für Synchronen Code
const readData = readFileSync("data.json");

// Arbeitet weiter mit den gelesenen Daten
if (readData) {
  console.log("Gelesene Daten:", readData);
} else {
  console.log("Fehler beim Lesen der Daten.");
}
