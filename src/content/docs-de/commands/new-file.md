---
sidebar_position: 2
title: New File — Eine leere Zeichnung in KulmanLab CAD starten
description: Der Befehl New File löscht die Zeichenfläche und öffnet eine neue leere Zeichnung. Ein Dateiname mit Zeitstempel wird automatisch generiert und im Browser-Speicher gespeichert.
keywords: [neue CAD-Datei, neue Zeichnung, leere Zeichenfläche CAD, neue Zeichnung online erstellen, neue DXF starten, KulmanLab neue Datei, Zeichenfläche zurücksetzen, Zeichnung löschen]
---

# New File

Der Befehl **New File** löscht die Zeichenfläche und startet eine neue leere Zeichnung. Ein eindeutiger Dateiname mit einem Zeitstempel wird automatisch generiert.

## So erstellen Sie eine neue Datei

Klicken Sie auf die Schaltfläche **New File** in der Symbolleiste (Neue-Seite-Symbol) im Datei-Panel. Die Zeichenfläche wird sofort geleert — ohne Eingabeaufforderungen oder Bestätigungsdialoge.

## Was die neue Datei enthält

Eine neu erstellte Datei beginnt mit:

- **Keinen Entitäten** auf der Zeichenfläche.
- **Einem Standard-Layer** namens `0` mit weißer Farbe und Linientyp `Continuous`.
- Einem **generierten Dateinamen** im Format `kulman-Mon01_HH:MM:SS.dxf` (z.B. `kulman-May22_14:30:00.dxf`).

Die Datei wird automatisch im Browser-Speicher gespeichert und erscheint in [Zuletzt verwendete Dateien](../files/).

## Warnung — nicht gespeicherte Arbeit wird verworfen

Das Klicken auf **New File** verwirft alle Entitäten auf der aktuellen Zeichenfläche ohne Warnung. Wenn Sie die aktuelle Zeichnung behalten möchten, [exportieren](../export/) Sie sie zuerst.

## Wann New File vs. Import verwenden

| Situation | Empfohlene Aktion |
|-----------|------------------|
| Eine Zeichnung von Grund auf beginnen | **New File** |
| Eine vorhandene DXF- oder JSON-Datei öffnen | [Import](../import/) |
| Eine Zeichnung kopieren, um an einer Variante zu arbeiten | Aktuelle Datei [exportieren](../export/), dann die Kopie [importieren](../import/) |

## Verwandte Befehle

- [Import](../import/) — eine vorhandene DXF- oder JSON-Zeichnung öffnen
- [Export](../export/) — die Zeichnung herunterladen, bevor Sie neu beginnen
- [Dateien](../files/) — eine frühere Zeichnung aus dem Browser-Speicher wiederherstellen
