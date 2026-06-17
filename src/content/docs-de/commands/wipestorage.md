---
title: Wipe Storage-Befehl — Alle Browserdaten in KulmanLab CAD löschen
description: Der wipestorage-Befehl löscht dauerhaft alle im Browser gespeicherten Dateien, Layer, Linientypen und den Undo-Verlauf. Erfordert die Eingabe von YES zur Bestätigung. Verwenden Sie ihn beim Zurücksetzen einer beschädigten oder überfüllten lokalen Datenbank.
keywords: [CAD Speicher löschen, Browserdaten löschen CAD, CAD-App zurücksetzen, lokale Dateien löschen CAD, kulmanlab wipestorage]
---

# Wipe Storage

Der `wipestorage`-Befehl löscht dauerhaft **alle im Browser gespeicherten Daten** für KulmanLab CAD — jede gespeicherte Datei, Layer- und Linientyptabelle sowie den Undo-Verlauf. Die Seite wird danach automatisch neu geladen.

:::danger Unwiderruflich
Diese Aktion kann nicht rückgängig gemacht werden. Alle im Browser gespeicherten Dateien werden gelöscht. Exportieren Sie alle Zeichnungen, die Sie behalten möchten, als `.json`- oder `.dxf`-Dateien, bevor Sie diesen Befehl ausführen.
:::

## Wann verwenden

- Der Browser-Speicher ist beschädigt und die App kann Dateien nicht laden oder speichern.
- Sie möchten die App vollständig auf einen sauberen Zustand zurücksetzen.
- Sie wechseln Browser oder Gerät und benötigen die lokale Kopie nicht mehr.

## So führen Sie es aus

1. Geben Sie `wipestorage` im Terminal ein und drücken Sie **Enter**.
2. Das Terminal fordert auf: *Gesamten lokalen Browser-Speicher löschen? Geben Sie YES zur Bestätigung ein*
3. Geben Sie `YES` (beliebige Groß-/Kleinschreibung) ein und drücken Sie **Enter**.

Die App löscht die Datenbank und lädt die Seite neu. Wenn Sie etwas anderes als `YES` eingeben und **Enter** drücken oder **Escape** drücken, wird der Befehl abgebrochen und nichts wird gelöscht.

## Was gelöscht wird

| Daten | Gelöscht |
|-------|----------|
| Alle im Browser gespeicherten Dateien | Ja |
| Layer- und Linientyptabellen für jede Datei | Ja |
| Undo / Redo-Verlauf für jede Datei | Ja |

Nur lokal in **diesem Browser** gespeicherte Daten sind betroffen. Bereits als `.json`- oder `.dxf`-Dateien exportierte Dateien werden nicht berührt.
