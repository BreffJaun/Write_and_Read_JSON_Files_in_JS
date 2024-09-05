// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
// import fs from "fs";

// I M P O R T   O F   F U N C T I O N S
import { writeFile, readFile } from "./utils/fileUtils.js";

// C O D E
// Erstellt ein Beispiel-Objekt
let obj = { table: [] };
// Fügt ein Element zum Objekt hinzu
obj.table.push({ id: 1, square: 2 });
// Wandelt das Objekt in einen String um
let json = JSON.stringify(obj);

// Schreibt die JSON-Daten in die Datei
await writeFile("data.json", json);

// Liest die Daten aus der Datei
const readData = await readFile("data.json");

// Arbeitet weiter mit den gelesenen Daten
if (readData) {
  console.log("Gelesene Daten:", readData);
} else {
  console.log("Fehler beim Lesen der Daten.");
}
