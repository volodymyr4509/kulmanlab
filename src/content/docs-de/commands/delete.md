---
sidebar_position: 6
title: Delete-Befehl — Elemente aus der Zeichnung entfernen in KulmanLab CAD
description: Der Delete-Befehl entfernt ausgewählte Elemente dauerhaft (rückgängig machbar). Vorausgewählte Elemente werden sofort ohne Bestätigungsschritt gelöscht. Die Entf-Taste funktioniert als globale Tastenkombination, ohne den Befehl aktivieren zu müssen. Unterstützt Einzel-Klick- und Flächenauswahl.
keywords: [CAD-Löschbefehl, Elemente entfernen CAD, Objekte löschen CAD, Entf-Taste CAD, Löschen rückgängig CAD, kulmanlab]
---

# Delete

Der `delete`-Befehl entfernt ausgewählte Elemente aus der Zeichnung. Löschungen werden im [Undo](../undo/)-Verlauf aufgezeichnet und können mit bis zu 20 Schritten rückgängig gemacht werden. Es gibt kein separates Dialogfeld zur Löschbestätigung — die Bestätigung erfolgt mit einem einzigen Tastendruck.

## Zwei Arten zu löschen

**Vorauswahl, dann löschen** — der schnellste Weg:

1. Ein oder mehrere Elemente auf der Zeichenfläche auswählen.
2. `delete` im Terminal eingeben, auf die Schaltfläche **Delete** in der Symbolleiste klicken **oder direkt die `Delete`-Taste drücken**.

Elemente werden sofort entfernt — kein zusätzlicher Bestätigungsschritt.

**Aktivieren, dann auswählen**:

1. `delete` eingeben oder auf die Symbolleisten-Schaltfläche klicken (ohne Auswahl).
2. **Objekte auswählen** — klicken zum Umschalten oder ziehen zur Flächenauswahl.
3. **Enter**, **Space** oder **Delete** drücken, um die ausgewählten Elemente zu bestätigen und zu entfernen.

## Delete-Tastenkombination

Die `Delete`-Taste auf der Tastatur wirkt als **globale Tastenkombination** — wenn Elemente aktuell ausgewählt sind, löscht sie diese sofort, auch ohne den Delete-Befehl im Terminal zu öffnen. Dies ist der schnellste einstufige Lösch-Workflow:

```
Element klicken → Delete-Taste drücken → fertig
```

## Auswahl während des Befehls

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Schaltet das Element unter dem Mauszeiger in die Auswahl ein/aus |
| **Nach rechts ziehen** (streng) | Wählt nur Elemente, die vollständig innerhalb des Rahmens liegen |
| **Nach links ziehen** (Kreuzung) | Wählt Elemente, die die Rahmengrenze schneiden |
| **Enter** / **Space** / **Delete** | Bestätigt und löscht ausgewählte Elemente |

## Gelöschte Elemente wiederherstellen

Löschungen können mit dem [Undo](../undo/)-Befehl rückgängig gemacht werden (geben Sie `undo` ein oder verwenden Sie die Symbolleisten-Schaltfläche). Bis zu **20 Schritte** können pro Datei rückgängig gemacht werden, und der Verlauf bleibt auch nach Seitenaktualisierungen erhalten. Wenn Sie mehr als 20 Löschungen ohne Speichern vorgenommen haben, können frühere Löschungen nicht wiederhergestellt werden.

## Unterstützte Elemente

Delete funktioniert mit jedem Elementtyp — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader und alle anderen.
