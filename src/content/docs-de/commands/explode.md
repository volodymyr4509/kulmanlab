---
title: "Explode-Befehl — Polylinie oder Block in seine Teile zerlegen"
description: "Der Befehl Explode zerlegt eine Polylinie in ihre Line- und Arc-Entitäten oder eine Blockreferenz in die Entitäten, die ihr Block zeichnet — an Ort und Stelle. Die Teile sehen genau aus wie das Original."
keywords: [CAD-Explode-Befehl, Polyline explodieren CAD, Polyline in Linien zerlegen, Polyline in Line und Arc umwandeln, kulmanlab]
group: edit
order: 19
---

# Explode

Der `Zerlegen`-Befehl zerlegt eine [Polyline](../polyline/) in ihre einzelnen [Line](../line/)- und [Arc](../arc/)-Elemente — eines pro Segment, genau dort, wo die Eckpunkte der Polyline lagen. Die Teile ersetzen die Polyline an Ort und Stelle und behalten deren Linienstärke, Farbe, Layer und Linientyp.

Explode arbeitet mit **Polyline**-Entitäten und **Blockreferenzen**.

## Explode verwenden

Zwei Wege, dasselbe Muster wie bei [Delete](../delete/):

**Vorauswahl, dann explodieren** — der schnellste Weg:

1. Eine oder mehrere Polylinien auf der Zeichenfläche auswählen.
2. Geben Sie `Zerlegen` im Terminal ein oder wählen Sie **Explode** im Dropdown des Edit-Panels.

Die ausgewählten Polylinien werden sofort explodiert — kein separater Bestätigungsschritt, da bereits etwas ausgewählt ist.

**Aktivieren, dann auswählen**:

1. Geben Sie `Zerlegen` ein oder wählen Sie **Explode** im Dropdown, ohne dass etwas ausgewählt ist.
2. **Polylinien oder Blockreferenzen auswählen** — Klicken schaltet um, Ziehen wählt nach Bereich.
3. **Enter** oder **Space** drücken, um die ausgewählten Polylinien zu bestätigen und zu explodieren.

Bei der Auswahl werden nur Polylinien und Blockreferenzen erfasst — ein Klick auf eine Line, einen Circle oder eine andere Entität bewirkt nichts, und ein Bereichsziehen ignoriert alles andere darin oder daran.

## Was dabei entsteht

Jedes Segment der Polyline wird zu einem eigenständigen Element:

- Ein **gerades Segment** wird zu einer **Line**.
- Ein **Bogensegment** (aus Polylines [Arc-Option](../polyline/)) wird zu einem **Arc**, der Mittelpunkt, Radius und Schwenkbereich der ursprünglichen Kurve exakt entspricht.

Jede entstehende Line und jeder Arc übernimmt die **Linienstärke, Farbe, den Layer, Linientyp und Linientyp-Maßstab** der Quell-Polyline — an der Optik der Geometrie ändert sich nichts, nur dass es jetzt mehrere unabhängige Elemente statt einer verbundenen Polyline sind.

Eine **Blockreferenz** wird zu den Entitäten, die ihr Block zeichnet, dort platziert, wo die Referenz sie zeigte. Entitäten, die der Block ausgeblendet hält — die anderen Zustände eines dynamischen Blocks —, entfallen; jedes Attribut wird zu einem einfachen Text mit seinem Wert; mit ByBlock gezeichnete Teile übernehmen die Farbe der Referenz, Teile auf Layer 0 ihren Layer. Ein darin verschachtelter Block wird zu einer eigenen Blockreferenz, die Sie wiederum zerlegen können. Eine in X und Y unterschiedlich skalierte Referenz wird nicht erfasst, da ihre Kreise zu Ellipsen werden müssten.

Das Explodieren ist wie jede andere Bearbeitung mit einem einzigen [Undo](../undo/)-Schritt rückgängig zu machen.

## Auswahl während des Befehls

| Methode | Verhalten |
|---------|-----------|
| **Klick** | Schaltet die Polylinie oder Blockreferenz unter dem Cursor in die Auswahl bzw. heraus; ein Klick auf eine andere Entität bewirkt nichts |
| **Nach rechts ziehen** (streng) | Wählt nur Polylinien und Blockreferenzen, die ganz im Rahmen liegen |
| **Nach links ziehen** (kreuzend) | Wählt Polylinien und Blockreferenzen, die den Rahmen schneiden |
| **Enter** / **Space** | Bestätigt und zerlegt die Auswahl |

## Unterstützte Elemente

| Element | Unterstützt |
|---------|-------------|
| Polyline / Rectangle | Ja |
| Blockreferenz | Ja, außer bei unterschiedlicher Skalierung in X und Y |
| Line, Arc, Circle, Ellipse | Nein — nichts zum Explodieren |
| Text, Spline, Dimension, Leader, Hatch | Nein |
