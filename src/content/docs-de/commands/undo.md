---
sidebar_position: 1
title: Undo-Befehl — Schrittweise durch den Zeichnungsverlauf zurückgehen in KulmanLab CAD
description: Der Undo-Befehl macht die letzte Zeichenaktion jeweils einen Schritt rückgängig. Bis zu 20 Schritte werden pro Datei gespeichert und im Browser über Seitenneulades hinaus gesichert. Das Durchführen einer neuen Aktion nach einem Undo löscht den Redo-Stapel.
keywords: [CAD Undo-Befehl, Undo-Verlauf CAD, Aktion rückgängig machen CAD, Undo-Schritte CAD, Browser-persistentes Undo, kulmanlab]
---

# Undo

Der `undo`-Befehl macht die letzte Änderung an der Zeichnung rückgängig — einen Schritt pro Ausführung. Jedes Hinzufügen, Löschen oder Bearbeiten von Entitäten wird als separater Verlaufseintrag aufgezeichnet. Undo geht durch diese Einträge in umgekehrter Reihenfolge zurück.

## So verwenden Sie Undo

- Geben Sie `undo` im Terminal ein, oder
- Klicken Sie auf die **Undo**-Schaltfläche in der Werkzeugleiste.

Jede Ausführung macht eine aufgezeichnete Aktion rückgängig. Führen Sie den Befehl wiederholt aus, um weiter zurückzugehen.

## Verlaufsverhalten

| Detail | Wert |
|--------|------|
| Schritte pro Datei | Bis zu **20** |
| Speicherung | Browser (IndexedDB / localStorage), pro Dateiname |
| Überlebt Seitenneulad | Ja — der Verlauf wird beim erneuten Öffnen der Datei wiederhergestellt |
| Neue Aktion nach Undo | Löscht alle Redo-Einträge vor der aktuellen Position |
| Ältester Eintrag bei vollem Stapel | Wird gelöscht, um Platz für die neueste Änderung zu machen |

Jede Entitätsmutation wird aufgezeichnet: Neue Entitäten zeichnen, Entitäten löschen, Griffpunkte bearbeiten, Move, Rotate, Scale, Mirror, Trim, Extend und Offset anwenden — alle erstellen Verlaufseinträge.

## Undo vs. Redo

| | Undo | Redo |
|---|------|------|
| Richtung | Geht **rückwärts** durch den Verlauf | Geht **vorwärts** durch rückgängig gemachte Einträge |
| Verfügbar wenn | Mindestens eine aufgezeichnete Aktion vorhanden | Mindestens ein Undo wurde durchgeführt und keine neue Aktion wurde seitdem vorgenommen |
| Geleert durch | Nichts — Verlauf akkumuliert bis zum 20-Schritte-Limit | Jede neue Zeichenaktion |

Verwenden Sie [Redo](../redo/), um eine rückgängig gemachte Aktion wiederherzustellen. Die Werkzeugleistenschaltflächen sind ausgegraut, wenn die jeweilige Richtung nicht verfügbar ist.
