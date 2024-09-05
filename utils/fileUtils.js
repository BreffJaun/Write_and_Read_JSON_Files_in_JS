// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import fs from "fs";

/* 
  Ablauf in writeFile:
  - Promise-Erstellung: Ein Promise wird erstellt, das entweder aufgelöst oder abgelehnt wird, je nachdem, ob die Datei erfolgreich geschrieben wird oder ein Fehler auftritt.
  - fs.writeFile: Diese Methode schreibt die übergebenen Daten in die Datei. Sie akzeptiert den Dateinamen, die Daten und die Kodierung.
  - Fehlerbehandlung: Wenn beim Schreiben der Datei ein Fehler auftritt, wird das Promise abgelehnt, andernfalls wird es aufgelöst.
  - Erfolgsmeldung: Wenn das Schreiben erfolgreich war, wird eine Nachricht in der Konsole ausgegeben.
  - Fehler im try-catch: Sollte es einen Fehler geben, wird dieser in der Konsole protokolliert. 
*/

// Funktion zum Schreiben der Datei mit Promises
// Für asynchronen Code
// export const writeFile = async (filename, data) => {
//   try {
//     const message = await new Promise((resolve, reject) => {
//       fs.writeFile(filename, data, "utf8", (err) => {
//         if (err) {
//           reject(`Fehler beim Schreiben der Datei: ${err}`);
//         } else {
//           resolve("Datei wurde erfolgreich geschrieben.");
//         }
//       });
//     });
//     console.log(message); // Nutze die Erfolgsmeldung hier
//   } catch (error) {
//     console.error(error);
//   }
// };

// Funktion zum Schreiben der Datei synchron
export const writeFileSync = (filename, data) => {
  try {
    fs.writeFileSync(filename, data, "utf8");
    console.log("Datei wurde erfolgreich geschrieben.");
  } catch (error) {
    console.error(`Fehler beim Schreiben der Datei: ${error}`);
  }
};

/* 
Ablauf in readFile:
  - Promise-Erstellung: Ein neues Promise wird erstellt, das entweder mit dem gelesenen Dateinhalt aufgelöst oder im Fehlerfall abgelehnt wird.
  - fs.readFile: Diese Methode liest den Dateiinhalt. Sie akzeptiert den Dateinamen, die Kodierung (hier "utf8") und eine Callback-Funktion, die den Inhalt der Datei verarbeitet.
  - Fehlerbehandlung: Wenn ein Fehler beim Lesen der Datei auftritt, wird das Promise abgelehnt, andernfalls wird der gelesene Dateinhalt aufgelöst.
  - Erfolgsmeldung: Nach erfolgreichem Lesen der Datei wird eine Nachricht in der Konsole ausgegeben.
  - JSON.parse: Der gelesene Dateinhalt wird von einem JSON-String in ein JavaScript-Objekt umgewandelt und zurückgegeben.
  - Fehler im try-catch: Wenn ein Fehler auftritt, wird dieser gefangen und in der Konsole ausgegeben. Im Fehlerfall wird null zurückgegeben, damit der Aufrufer erkennt, dass das Lesen fehlgeschlagen ist. 
*/

// Funktion zum Lesen der Datei mit Promises
// Für asynchronen Code
// export const readFile = async (filename) => {
//   try {
//     const data = await new Promise((resolve, reject) => {
//       fs.readFile(filename, "utf8", (err, data) => {
//         if (err) {
//           reject(`Fehler beim Lesen der Datei: ${err}`);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//     console.log("Datei wurde erfolgreich gelesen.");
//     return JSON.parse(data); // Die Daten werden als Objekt zurückgegeben
//   } catch (error) {
//     console.error(error);
//     return null; // Rückgabe von null im Fehlerfall, falls erforderlich
//   }
// };

// Funktion zum Lesen der Datei synchron
export const readFileSync = (filename) => {
  try {
    const data = fs.readFileSync(filename, "utf8");
    console.log("Datei wurde erfolgreich gelesen.");
    return JSON.parse(data); // Die Daten werden als Objekt zurückgegeben
  } catch (error) {
    console.error(`Fehler beim Lesen der Datei: ${error}`);
    return null; // Rückgabe von null im Fehlerfall
  }
};
