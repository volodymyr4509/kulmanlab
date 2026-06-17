---
sidebar_position: 3
title: Files — Zuletzt verwendete Dateien in KulmanLab CAD
description: Der Files-Befehl öffnet das Panel für zuletzt verwendete Dateien — alle im Browser gespeicherten Zeichnungen durchsuchen, eine davon auf der Zeichenfläche wiederherstellen oder nicht mehr benötigte löschen.
keywords: [zuletzt verwendete Dateien CAD, Dateiverlauf Browser CAD, Zeichnung wiederherstellen, DXF erneut öffnen, Browser-Speicher CAD, KulmanLab-Dateien, gespeicherte Zeichnungen, IndexedDB CAD, Zeichnungen verwalten]
---

# Files

Der **Files**-Befehl öffnet das Panel **Zuletzt verwendete Dateien** — eine Liste aller Zeichnungen, die im lokalen Browser-Speicher gespeichert wurden. Verwenden Sie es, um eine frühere Zeichnung erneut zu öffnen oder nicht mehr benötigte Dateien zu entfernen.

## So öffnen Sie das Panel für zuletzt verwendete Dateien

Klicken Sie auf die Schaltfläche **Files** in der Symbolleiste (Verlaufssymbol) im Dateibereich oben auf dem Bildschirm. Das Panel öffnet sich auf der linken Seite der Zeichenfläche.

## Panel für zuletzt verwendete Dateien

Jeder Eintrag in der Liste zeigt den Dateinamen und zwei Aktionsschaltflächen:

| Schaltfläche | Aktion |
|--------------|--------|
| ✓ **Wiederherstellen** | Zeichnung auf die Zeichenfläche laden — ersetzt den aktuellen Inhalt |
| ✕ **Löschen** | Datei dauerhaft aus dem Browser-Speicher entfernen |

Wenn noch keine Dateien gespeichert wurden, zeigt das Panel "No files saved".

## Wie Dateien gespeichert werden

KulmanLab speichert Zeichnungen in **IndexedDB** — einer dauerhaften In-Browser-Datenbank. Das bedeutet:

- Dateien überleben Seitenaktualisierungen und Browser-Neustarts.
- Dateien werden **lokal auf Ihrem Gerät** gespeichert — sie werden nicht auf einen Server hochgeladen.
- Jeder Browser und jedes Gerät hat seinen eigenen unabhängigen Speicher. Eine in Chrome auf einem Computer gespeicherte Zeichnung ist nicht in Firefox oder auf einem anderen Computer verfügbar.
- Das Löschen der Websitedaten des Browsers löscht alle gespeicherten Dateien.

## Automatisches Laden von Dateien beim Start

Wenn Sie KulmanLab CAD öffnen, lädt die App automatisch die **zuletzt geänderte Datei** aus dem Speicher. Sie müssen sie nicht jedes Mal manuell aus dem Files-Panel öffnen.

## Speicher verwalten

Es gibt kein festes Limit für die Anzahl der Zeichnungen, die Sie speichern können, aber der Browser-Speicher ist begrenzt. Wenn Sie Speicherwarnungen bemerken, löschen Sie ältere Dateien aus dem Files-Panel.

Um alle gespeicherten Zeichnungen auf einmal zu entfernen, verwenden Sie den [WipeStorage](./wipestorage)-Befehl.

## Dateinamen und Versionierung

Jede Datei hat einen Zeitstempel im Namen (z. B. `myplan_May22_14:30:00.dxf`). Dieser Zeitstempel wird automatisch hinzugefügt, wenn Sie eine Datei [importieren](./import), sodass das erneute Importieren derselben Quelldatei einen neuen Eintrag erstellt, anstatt die vorherige Version zu überschreiben.

## Verwandte Befehle

- [Import](./import) — Zeichnung von Ihrem Dateisystem in den Browser-Speicher laden
- [Export](./export) — Zeichnung auf Ihr Dateisystem herunterladen
- [New File](./new-file) — leere Zeichnung beginnen (wird auch automatisch gespeichert)
- [WipeStorage](./wipestorage) — alle gespeicherten Dateien aus dem Browser-Speicher löschen
