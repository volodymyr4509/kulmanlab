---
title: Explode-Befehl — Eine Polyline in Line- und Arc-Elemente zerlegen
description: Der Explode-Befehl zerlegt eine Polyline in ihre einzelnen Line- und Arc-Elemente, eines pro Segment, an Ort und Stelle. Jedes Teil behält die Linienstärke, Farbe, den Layer und den Linientyp der Quell-Polyline. Funktioniert nur mit Polyline-Elementen.
keywords: [CAD-Explode-Befehl, Polyline explodieren CAD, Polyline in Linien zerlegen, Polyline in Line und Arc umwandeln, kulmanlab]
group: edit
order: 16
---

# Explode

Der `Zerlegen`-Befehl zerlegt eine [Polyline](../polyline/) in ihre einzelnen [Line](../line/)- und [Arc](../arc/)-Elemente — eines pro Segment, genau dort, wo die Eckpunkte der Polyline lagen. Die Teile ersetzen die Polyline an Ort und Stelle und behalten deren Linienstärke, Farbe, Layer und Linientyp.

Explode funktioniert nur mit **Polyline**-Elementen.

## Explode verwenden

Zwei Wege, dasselbe Muster wie bei [Delete](../delete/):

**Vorauswahl, dann explodieren** — der schnellste Weg:

1. Eine oder mehrere Polylinien auf der Zeichenfläche auswählen.
2. `Zerlegen` im Terminal eingeben oder auf die Schaltfläche **Explode** im Edit-Panel klicken.

Die ausgewählten Polylinien werden sofort explodiert — kein separater Bestätigungsschritt, da bereits etwas ausgewählt ist.

**Aktivieren, dann auswählen**:

1. `Zerlegen` eingeben oder auf die Symbolleisten-Schaltfläche klicken (ohne Auswahl).
2. **Polylinien auswählen** — klicken zum Umschalten oder ziehen zur Flächenauswahl.
3. **Enter** oder **Space** drücken, um die ausgewählten Polylinien zu bestätigen und zu explodieren.

Bei der Auswahl werden nur Polylinien erfasst — das Klicken auf eine Line, Circle oder ein anderes Element bewirkt nichts, und eine Flächenauswahl ignoriert alles außer den Polylinien darin oder an ihrer Grenze.

## Was dabei entsteht

Jedes Segment der Polyline wird zu einem eigenständigen Element:

- Ein **gerades Segment** wird zu einer **Line**.
- Ein **Bogensegment** (aus Polylines [Arc-Option](../polyline/)) wird zu einem **Arc**, der Mittelpunkt, Radius und Schwenkbereich der ursprünglichen Kurve exakt entspricht.

Jede entstehende Line und jeder Arc übernimmt die **Linienstärke, Farbe, den Layer, Linientyp und Linientyp-Maßstab** der Quell-Polyline — an der Optik der Geometrie ändert sich nichts, nur dass es jetzt mehrere unabhängige Elemente statt einer verbundenen Polyline sind.

Das Explodieren ist wie jede andere Bearbeitung mit einem einzigen [Undo](../undo/)-Schritt rückgängig zu machen.

## Auswahl während des Befehls

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Schaltet die Polylinie unter dem Mauszeiger in die Auswahl ein/aus; das Klicken auf ein Nicht-Polylinien-Element bewirkt nichts |
| **Nach rechts ziehen** (streng) | Wählt nur Polylinien, die vollständig innerhalb des Rahmens liegen |
| **Nach links ziehen** (Kreuzung) | Wählt Polylinien, die die Rahmengrenze schneiden |
| **Enter** / **Space** | Bestätigt und explodiert die ausgewählten Polylinien |

## Unterstützte Elemente

| Element | Unterstützt |
|---------|-------------|
| Polyline / Rectangle | Ja |
| Line, Arc, Circle, Ellipse | Nein — nichts zum Explodieren |
| Text, Spline, Dimension, Leader, Hatch | Nein |
