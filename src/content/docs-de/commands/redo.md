---
sidebar_position: 2
title: Redo-Befehl — Rückgängig gemachte Aktionen in KulmanLab CAD wiederherstellen
description: Der Redo-Befehl stellt die zuletzt durch Undo rückgängig gemachte Aktion wieder her und bewegt sich vorwärts durch den Verlaufsstapel. Redo ist nur nach einem Undo verfügbar und wird gelöscht, sobald eine neue Zeichenaktion ausgeführt wird.
keywords: [CAD Redo-Befehl, Redo-Verlauf CAD, Aktion wiederherstellen CAD, Undo Redo CAD, Browser-persistentes Redo, kulmanlab]
---

# Redo

Der `redo`-Befehl bewegt sich vorwärts durch den Undo-Verlauf und stellt Aktionen wieder her, die durch [Undo](./undo) rückgängig gemacht wurden. Redo ist nur verfügbar, wenn Sie mit Undo zurückgegangen sind und noch keine neue Änderung vorgenommen haben.

## So verwenden Sie Redo

- Geben Sie `redo` im Terminal ein, oder
- Klicken Sie auf die **Redo**-Schaltfläche in der Werkzeugleiste.

Jede Ausführung stellt eine zuvor rückgängig gemachte Aktion wieder her. Führen Sie den Befehl wiederholt aus, um schrittweise durch alle verfügbaren Redo-Einträge vorwärts zu gehen.

## Verhalten des Redo-Stapels

| Detail | Verhalten |
|--------|-----------|
| Verfügbar nach | Einem oder mehreren [Undo](./undo)-Schritten |
| Geleert durch | **Jede neue Zeichenaktion** — Hinzufügen, Bearbeiten oder Löschen einer Entität |
| Speicherung | Browser, pro Datei — überlebt das Neuladen der Seite (sofern vor dem Neuladen keine neue Aktion durchgeführt wurde) |
| Maximale Tiefe | Bis zu 20 Einträge (gleicher Pool wie Undo) |

Sobald eine neue Entität gezeichnet, gelöscht oder geändert wird, wird der Redo-Stapel geleert und diese Einträge können nicht wiederhergestellt werden. Nur rückgängig gemachte Aktionen, die nicht durch neue Arbeit überschrieben wurden, können wiederholt werden.

## Redo vs. Undo

| | Redo | Undo |
|---|------|------|
| Richtung | Bewegt sich **vorwärts** durch rückgängig gemachte Einträge | Bewegt sich **rückwärts** durch den Verlauf |
| Verfügbar wenn | Nach mindestens einem Undo, ohne neue Aktion | Mindestens eine aufgezeichnete Aktion vorhanden |
| Geleert durch | Jede neue Zeichenaktion | Nichts |

Die Redo-Schaltfläche in der Werkzeugleiste ist ausgegraut, wenn keine Einträge zum Wiederholen vorhanden sind. Verwenden Sie zuerst [Undo](./undo), um Redo-Einträge zu erstellen.
