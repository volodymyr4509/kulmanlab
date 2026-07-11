---
title: Extend-Befehl — Linienendpunkt bis zur nächsten Begrenzung dehnen in KulmanLab CAD
description: Der Extend-Befehl dehnt den nächsten Endpunkt einer gehoverten Linie bis zum nächsten Schnittpunkt mit einem anderen Element. Eine Live-Vorschau zeigt die verlängerte Linie vor dem Klicken. Extend funktioniert nur mit Line-Elementen und ignoriert Text, Spline und Multileader als Begrenzungen.
keywords: [CAD-Extend-Befehl, Linie verlängern CAD, Linie zur Begrenzung dehnen, Linienendpunkt verlängern, Hover-Verlängerungs-Vorschau, kulmanlab]
group: edit
order: 9
---

# Extend

Der `extend`-Befehl dehnt den nächsten Endpunkt einer [Line](../line/) bis zum nächsten Schnittpunkt, den sie mit einem anderen Element in der Zeichnung bilden würde. Hovern Sie nahe dem Endpunkt, den Sie verlängern möchten — eine Vorschau zeigt die verlängerte Linie — dann klicken Sie, um anzuwenden.

Extend funktioniert **nur mit Line-Elementen**. Die Begrenzungen, bis zu denen die Linie verlängert wird, können jeder andere Elementtyp außer Text, Mtext, Multileader und Spline sein.

## Eine Linie verlängern

1. Geben Sie `extend` im Terminal ein oder klicken Sie auf die Schaltfläche **Extend** in der Symbolleiste.
2. **Nahe einem Ende einer Linie hovern** — die Vorschau zeigt die Linie, verlängert bis zur nächsten Begrenzung in dieser Richtung.
3. **Klicken**, um die Verlängerung anzuwenden.

Der Befehl bleibt nach jeder Verlängerung aktiv, sodass Sie mehrere Linien nacheinander verlängern können. Drücken Sie **Escape**, um zu beenden.

```
  Vorher:                      Nachher:

  ──────           |           ──────────────|
  (kurze Linie)    (Begrenzung) (bis zur Begrenzung verlängert)
```

## Wie der Endpunkt ausgewählt wird

Der Befehl prüft, welchem Endpunkt der Mauszeiger näher ist:

- Mauszeiger **näher am Endpunkt** → das Ende wird vorwärts entlang der Linienrichtung verlängert.
- Mauszeiger **näher am Startpunkt** → der Start wird rückwärts verlängert (in entgegengesetzter Richtung).

Ein Strahl wird vom gewählten Endpunkt entlang der Linienrichtung ausgeworfen, und der **nächste Schnittpunkt** entlang dieses Strahls mit jedem anderen Element (ausgenommen die Linie selbst und die ignorierten Typen) wird zum neuen Endpunkt.

Wenn in dieser Richtung kein Schnittpunkt gefunden wird, erscheint keine Vorschau und das Klicken hat keine Wirkung.

## Begrenzungsausschlüsse

Die folgenden Elementtypen werden als Begrenzungen ignoriert — eine Linie verlängert sich nicht bis zu ihnen:

- Text / Mtext
- Multileader
- Spline

Alle anderen Typen (Line, Arc, Circle, Ellipse, Polyline, Dimension) dienen als gültige Begrenzungen.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Escape` | Extend-Modus beenden |

## Unterstützte Elemente

| Element | Kann verlängert werden? |
|---------|------------------------|
| Line | Ja |
| Arc, Circle, Ellipse | Nein |
| Polyline / Rectangle | Nein |
| Text, Spline, Dimension, Leader | Nein |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Was es tut | Dehnt einen Linienendpunkt bis zu einer Begrenzung | Entfernt ein Segment einer Linie |
| Auslöser | Hovern nahe dem zu dehnenden Endpunkt | Hovern über dem zu schneidenden Segment |
| Ergebnis | Linienendpunkt bewegt sich nach außen | Linie teilt sich oder wird kürzer |
| Beide | Nur Linien | Nur Linien |
