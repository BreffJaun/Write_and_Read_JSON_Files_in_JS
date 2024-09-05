# Write and Read JSON Files in JS

Dieses Projekt demonstriert die Verwendung von Promises und Async/Await für das Schreiben und Lesen von JSON-Daten in einer Datei mit Node.js. Es enthält Funktionen zum Schreiben und Lesen von Daten in eine JSON-Datei sowie ein Beispiel für deren Verwendung.

## Inhaltsverzeichnis

- [Write and Read JSON Files in JS](#write-and-read-json-files-in-js)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Projektübersicht](#projektübersicht)
    - [Funktionen](#funktionen)
  - [Installation](#installation)
  - [Verwendung](#verwendung)

## Projektübersicht

Dieses Projekt enthält zwei Hauptfunktionen:

- `writeFile(filename, data)`: Schreibt JSON-Daten in eine Datei.
- `readFile(filename)`: Liest JSON-Daten aus einer Datei und gibt sie als JavaScript-Objekt zurück.

### Funktionen

1. **`writeFile(filename, data)`**
   - Schreibt die übergebenen JSON-Daten (`data`) in die angegebene Datei (`filename`).
   - Nutzt Promises und Async/Await für asynchrone Operationen.
   - Gibt eine Erfolgsmeldung aus, wenn das Schreiben erfolgreich war, und behandelt Fehler.

2. **`readFile(filename)`**
   - Liest die Daten aus der angegebenen Datei (`filename`).
   - Wandelt die JSON-Daten in ein JavaScript-Objekt um und gibt es zurück.
   - Gibt eine Erfolgsmeldung aus, wenn das Lesen erfolgreich war, und behandelt Fehler.

## Installation

1. Klone das Repository:

  ```bash
  git clone <REPOSITORY_URL>
  ```

2. Navigiere in das Projektverzeichnis:
  ```bash
  cd <PROJECT_DIRECTORY>
  ```

3. Installiere die Abhängigkeiten:
  ```bash
  npm install
  ```

## Verwendung

1. Führe das Skript mit Node.js aus:
```bash
node index.js 
```






