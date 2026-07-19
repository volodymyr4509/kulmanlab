---
title: Trim-Befehl — Liniensegmente an Schnittpunkten kürzen
description: Der Trim-Befehl entfernt den Abschnitt einer Line zwischen zwei benachbarten, dem Cursor nächstgelegenen Schnittpunkten. Eine rote Hover-Vorschau zeigt genau an, welches Segment geschnitten wird, bevor Sie klicken. Trim funktioniert nur bei Line-Entitäten — nicht bei Bögen, Kreisen oder Polylinien.
keywords: [CAD Trim-Befehl, Linie kürzen CAD, Linie am Schnittpunkt schneiden, Hover-Trim-Vorschau, nur Linie kürzen, kulmanlab]
group: edit
order: 8
---

# Trim

Der `trim`-Befehl entfernt den Abschnitt einer [Line](../line/), der zwischen zwei benachbarten Schnittpunkten liegt, und teilt die Linie in ein oder zwei kürzere Segmente. Das zu schneidende Segment wird durch die Cursorposition bestimmt — fahren Sie mit dem Cursor über den Teil, den Sie entfernen möchten, und klicken Sie zum Kürzen.

Trim funktioniert **nur bei Line-Entitäten**. Für Bögen, Kreise, Polylinien und andere Entitätstypen verwenden Sie stattdessen [Delete](../delete/) oder die Griffpunkt-Bearbeitung.

## Eine Linie kürzen

1. Geben Sie `trim` im Terminal ein oder klicken Sie auf die **Trim**-Schaltfläche in der Werkzeugleiste.
2. **Fahren Sie mit dem Cursor über das Liniensegment**, das Sie entfernen möchten — eine rote Vorschau hebt genau den Abschnitt hervor, der geschnitten wird.
3. **Klicken Sie**, um dieses Segment zu entfernen.

Der Befehl bleibt nach jedem Trim aktiv, sodass Sie weiterhin über weitere Segmente fahren und klicken können, um mehr zu schneiden. Drücken Sie **Escape** zum Beenden.

```
  Vorher:                          Nachher (mittleres Segment entfernt):

  ──────●──────●──────             ──────●          ●──────
      Schnitt    Schnitt              (linker Teil)  (rechter Teil)
                                      (mittleres Segment entfernt)
```

## Wie das Trim-Segment bestimmt wird

Der Befehl projiziert die Cursorposition auf die überfahrene Linie und findet alle Schnittpunkte, die die Linie mit anderen Entitäten hat. Diese Schnittpunktparameter teilen die Linie in Segmente auf. Das Segment, dessen Intervall die Projektion des Cursors enthält, wird hervorgehoben und beim Klicken entfernt.

- Liegt der Cursor **vor dem ersten Schnittpunkt**: Dieser führende Abschnitt der Linie wird entfernt.
- Liegt der Cursor **zwischen zwei Schnittpunkten**: Dieser mittlere Abschnitt wird entfernt; die Linie wird in zwei Teile geteilt.
- Liegt der Cursor **nach dem letzten Schnittpunkt**: Dieser abschließende Abschnitt wird entfernt.
- Hat die Linie **keine Schnittpunkte** mit einer anderen Entität: Es wird keine Vorschau angezeigt und Klicken hat keine Wirkung.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Escape` | Trim-Modus beenden |

## Unterstützte Entitäten

| Entität | Kann gekürzt werden? |
|---------|---------------------|
| Line | Ja |
| Arc, Circle, Ellipse | Nein |
| Polylinie / Rectangle | Nein |
| Text, Spline, Bemaßung, Leader | Nein |

Die als **Schnittgrenzen** verwendeten Entitäten können von beliebigem Typ sein — nur die zu kürzende Linie muss eine Line-Entität sein.

## Trim vs. Extend

| | Trim | Extend |
|---|------|--------|
| Funktion | Entfernt ein Segment einer Linie | Verlängert einen Linienendpunkt bis zu einer Grenze |
| Auslöser | Cursor über das zu schneidende Segment fahren | Cursor nahe dem zu verlängernden Endpunkt |
| Ergebnis | Linie wird geteilt oder verkürzt | Linienendpunkt bewegt sich zur Grenze |
| Beide | Nur Linien | Nur Linien |
