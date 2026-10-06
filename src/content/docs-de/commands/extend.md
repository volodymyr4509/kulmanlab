---
title: Extend-Befehl — Entität bis zur nächsten Begrenzung dehnen
description: Der Extend-Befehl dehnt den nächsten Endpunkt einer gehoverten Line, Arc, Ellipse oder offenen Polyline bis zum nächsten Schnittpunkt mit einem anderen Element. Eine Live-Vorschau zeigt das verlängerte Element vor dem Klicken.
keywords: [CAD-Extend-Befehl, Linie verlängern CAD, Bogen verlängern CAD, Ellipse verlängern CAD, Polylinie verlängern CAD, Element zur Begrenzung dehnen, Hover-Verlängerungs-Vorschau, kulmanlab]
group: edit
order: 9
---

# Extend

Der `Dehnen`-Befehl dehnt den nächsten Endpunkt einer gehoverten [Line](../line/), eines [Arc](../arc/), einer [Ellipse](../ellipse/) oder einer offenen [Polyline](../polyline/) bis zum nächsten Schnittpunkt, den sie mit einem anderen Element in der Zeichnung bilden würde. Hovern Sie nahe dem Endpunkt, den Sie verlängern möchten — eine Vorschau zeigt das verlängerte Element — dann klicken Sie, um anzuwenden.

Nur Elemente mit einem tatsächlichen Endpunkt können verlängert werden. Ein [Circle](../circle/) und eine vollständige (360°) Ellipse sind immer geschlossene Formen ohne Endpunkt, daher können sie nie verlängert werden — dasselbe gilt für eine geschlossene Polyline oder ein Rectangle. Eine teilweise Ellipse (ein elliptischer Bogen) und ein Arc haben Endpunkte und werden genauso verlängert wie eine Line.

## Ein Element verlängern

1. Geben Sie `Dehnen` im Terminal ein oder klicken Sie auf die Schaltfläche **Extend** in der Symbolleiste.
2. **Hovern Sie nahe einem Ende** des Elements, das Sie verlängern möchten — die Vorschau zeigt es bis zur nächsten Begrenzung in dieser Richtung verlängert.
3. **Klicken**, um die Verlängerung anzuwenden.

Der Befehl bleibt nach jeder Verlängerung aktiv, sodass Sie weiterhin hovern und klicken können, um weitere Elemente zu verlängern. Drücken Sie **Enter**, **Space** oder **Escape**, um zu beenden.

```
  Vorher:                      Nachher:

  ──────           |           ──────────────|
  (kurze Linie)    (Begrenzung) (bis zur Begrenzung verlängert)
```

## Wie der Endpunkt ausgewählt wird

Der Befehl prüft, welchem Ende der Mauszeiger näher ist:

- **Line und offene Polyline** — Mauszeiger näher am Endpunkt verlängert das Ende vorwärts; Mauszeiger näher am Startpunkt verlängert den Start rückwärts.
- **Arc und teilweise Ellipse** — Mauszeiger näher an einem der beiden Winkel-Enden lässt den Bogen in diese Richtung wachsen, entlang desselben Mittelpunkts und Radius (bzw. derselben Ellipsenform), bis er die nächste Begrenzung erreicht.

Ein Strahl — oder bei Arc und Ellipse der zugrunde liegende Kreis bzw. die zugrunde liegende Kurve des Elements — wird vom gewählten Ende ausgeworfen, und der **nächste Schnittpunkt** mit jedem anderen Element (ausgenommen das Element selbst und die ignorierten Typen) wird zum neuen Endpunkt.

Wenn in dieser Richtung kein Schnittpunkt gefunden wird, erscheint keine Vorschau und das Klicken hat keine Wirkung.

## Begrenzungsausschlüsse

Die folgenden Elementtypen werden als Begrenzungen ignoriert — ein Element verlängert sich nicht bis zu ihnen:

- Text / Mtext
- Multileader

Alle anderen Typen (Line, Arc, Circle, Ellipse, Polyline, Spline, Dimension) dienen als gültige Begrenzungen.

Ist das erste oder letzte Segment einer Polyline selbst ein Bogensegment (mit dem Arc-Umschalter gezeichnet), lässt eine Verlängerung den Bogen entlang seines eigenen Kreises wachsen — genauso, wie eine Verlängerung eines eigenständigen Arc funktioniert — statt es als gerades Segment zu behandeln.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Extend-Modus beenden |
| `Escape` | Extend-Modus beenden |

## Unterstützte Elemente

| Element | Kann verlängert werden? |
|---------|------------------------|
| Line | Ja |
| Arc | Ja |
| Ellipse | Ja — nur wenn sie bereits ein teilweiser Bogen ist; eine vollständige Ellipse hat keinen Endpunkt |
| Circle | Nein — immer eine geschlossene Form ohne Endpunkt |
| Polyline (offen) | Ja |
| Polyline (geschlossen) / Rectangle | Nein — immer eine geschlossene Form ohne Endpunkt |
| Text, Spline, Bemaßung, Leader | Nein |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Was es tut | Dehnt den Endpunkt eines Elements bis zu einer Begrenzung | Entfernt ein Segment eines Elements |
| Auslöser | Hovern nahe dem zu dehnenden Endpunkt | Hovern über dem zu schneidenden Segment |
| Ergebnis | Endpunkt bewegt sich nach außen | Element teilt sich oder wird kürzer |
| Unterstützte Elemente | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
