---
sidebar_position: 9
title: Dimension Angular — Winkel zwischen Linien, Bögen und Kreisen messen in KulmanLab CAD
description: Der DimensionAngular-Befehl platziert eine Winkelbemaßungs-Annotation auf Linien, Bögen oder Kreisen. Unterstützt Zwei-Linien-Winkel, Bogenspanne und Kreissektor-Modi.
keywords: [Winkelbemaßung CAD, Winkelbemaßung, Winkel zwischen Linien messen, DimensionAngular, Bogenbemaßung, Winkelannotation, CAD-Winkelbeschriftung, kulmanlab Winkelbemaßung]
---

# Dimension Angular

Der `DimensionAngular`-Befehl platziert eine **Winkelbemaßungs-**Bogenannotation auf der Zeichnung. Er misst und beschriftet den Winkel zwischen zwei Linien, die Spanne eines Bogens oder einen Sektor eines Kreises.

## So aktivieren Sie den Befehl

Klicken Sie auf die Schaltfläche **Dimension Angular** in der Symbolleiste im Beschriftungsbereich oder geben Sie `DimensionAngular` im Terminal ein.

## Drei Eingabemodi

Der erste Klick bestimmt, welcher Modus verwendet wird:

### Zwei Linien

1. **Erste Linie klicken.** Die Mauszeiger-Position bestimmt, welche Seite der Linie verwendet wird.
2. **Zweite Linie klicken.** Die beiden Linien müssen sich schneiden (der Schnittpunkt wird automatisch berechnet; er muss nicht auf dem Bildschirm sichtbar sein).
3. **Klicken, um den Bemaßungsbogen zu platzieren.** Bewegen Sie den Mauszeiger, um den Radius und den beschrifteten Winkelsektor auszuwählen — die Annotation folgt dem Mauszeiger auf die jeweilige Seite des Scheitelpunkts.

Parallele Linien können keine Winkelbemaßung bilden; der Befehl ignoriert den zweiten Klick, wenn sich die Linien nicht schneiden.

### Bogen

1. **Bogen klicken.** Die Bemaßung wird sofort vom Start- bis zum Endwinkel des Bogens erstellt, mit dem Bogenmittelpunkt als Scheitelpunkt.
2. **Klicken, um den Bemaßungsbogen** beim gewünschten Radius zu platzieren.

### Kreis

1. **Kreis klicken.** Der erste Winkelendpunkt rastet am nächsten Punkt auf dem Kreis ein.
2. **Zweiten Punkt auf dem Kreis klicken**, um den zweiten Winkelendpunkt zu definieren.
3. **Klicken, um den Bemaßungsbogen zu platzieren.**

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Escape` | Abbrechen und zur ersten Auswahl zurückkehren |

## Verhaltensdetails

- Der Bemaßungsbogen wird immer auf der Seite des Scheitelpunkts gezeichnet, auf der Sie ihn platzieren — bewegen Sie den Mauszeiger über den Scheitelpunkt, um zum Ergänzungswinkel zu wechseln.
- Der gemessene Winkel wird in Grad angezeigt und aktualisiert sich live, während Sie den Mauszeiger während der Platzierung bewegen.
- Die resultierende Annotation ist ein vollständiges `DimensionAngular`-Element, das auf der aktuellen Ebene gespeichert wird. Seine Darstellungseigenschaften (Pfeilgröße, Texthöhe, Maßhilfslinienlänge) können im Eigenschaften-Panel angepasst werden.
- Winkelbemaßungen sind im JSON-Export enthalten, werden aber vom DXF-Exporter nicht unterstützt.

## Beschriftung bearbeiten — simple mode

**Doppelklicken** Sie auf eine platzierte Winkelbemaßung, um den Texteditor im **simple** mode zu öffnen. Der Editor ist mit dem aktuellen angezeigten Wert vorbelegt, sodass Sie den Cursor positionieren und ihn direkt bearbeiten können.

| Feature | Verhalten |
|---------|-----------|
| Bold / Italic / Font / Height | Gilt für die **gesamte** Beschriftung auf einmal |
| Zeichenweise Formatierung | Nicht unterstützt |
| `Enter` | Übernimmt den Wert und schließt den Editor |
| Mehrzeilig | Nicht unterstützt |

Siehe [Texteditor — simple mode](../../interface/text-editor/#simple-mode) für die vollständige Referenz.

## Verwandte Befehle

- [Dimension Linear](../dim-linear/) — horizontale oder vertikale Bemaßung
- [Dimension Aligned](../dim-aligned/) — an zwei Punkte ausgerichtete Bemaßung
- [Dimension Radius](../dim-radius/) — Radiusbemaßung für Bögen und Kreise
- [Dimension Diameter](../dim-diameter/) — Durchmesserbemaßung für Kreise
