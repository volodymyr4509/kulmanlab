---
title: Trim-Befehl — Segmente an Schnittpunkten kürzen
description: Der Trim-Befehl entfernt den Abschnitt einer Line, eines Arc, Circle, einer Ellipse oder Polyline zwischen zwei benachbarten, dem Cursor nächstgelegenen Schnittpunkten. Eine Vorschau zeigt genau, welches Segment geschnitten wird, bevor Sie klicken.
keywords: [CAD Trim-Befehl, Linie kürzen CAD, Kreis kürzen CAD, Bogen kürzen CAD, Ellipse kürzen CAD, Polylinie kürzen CAD, Linie am Schnittpunkt schneiden, Hover-Trim-Vorschau, kulmanlab]
group: edit
order: 8
---

# Trim

Der `Stutzen`-Befehl entfernt den Abschnitt einer [Line](../line/), eines [Arc](../arc/), [Circle](../circle/), einer [Ellipse](../ellipse/) oder [Polyline](../polyline/), der zwischen zwei benachbarten Schnittpunkten liegt, und teilt die Entität in ein oder mehrere verbleibende Teile. Das zu schneidende Segment wird durch die Cursorposition bestimmt — fahren Sie mit dem Cursor über den Teil, den Sie entfernen möchten, und klicken Sie zum Kürzen.

## Eine Entität kürzen

1. Geben Sie `Stutzen` im Terminal ein oder klicken Sie auf die **Trim**-Schaltfläche in der Werkzeugleiste.
2. **Fahren Sie mit dem Cursor über das Segment**, das Sie entfernen möchten — eine Vorschau hebt genau den Abschnitt hervor, der geschnitten wird.
3. **Klicken Sie**, um dieses Segment zu entfernen.

Der Befehl bleibt nach jedem Trim aktiv, sodass Sie weiterhin über weitere Segmente fahren und klicken können — auf derselben oder einer anderen Entität. Drücken Sie **Enter**, **Space** oder **Escape** zum Beenden.

```
  Vorher:                          Nachher (mittleres Segment entfernt):

  ──────●──────●──────             ──────●          ●──────
      Schnitt    Schnitt              (linker Teil)  (rechter Teil)
                                      (mittleres Segment entfernt)
```

## Wie das Trim-Segment bestimmt wird

Der Befehl projiziert die Cursorposition auf die überfahrene Entität und findet alle Schnittpunkte, die sie mit anderen Entitäten hat. Diese Schnittpunkte teilen die Entität in Segmente auf — bei einer Line, einem Arc oder einer offenen Polyline dienen die eigenen Endpunkte der Entität als zusätzliche feste Grenzen. Ein vollständiger Circle oder eine vollständige Ellipse sowie eine geschlossene Polyline (einschließlich eines Rectangle) haben keine eigenen Endpunkte, daher sind mindestens zwei Schnittpunkte nötig, bevor überhaupt gekürzt werden kann. Das Segment, dessen Intervall die Projektion des Cursors enthält, wird hervorgehoben und beim Klicken entfernt.

- **Line, Arc und offene Polyline** — das entfernte Segment kann der führende Abschnitt (vor dem ersten Schnittpunkt), ein mittlerer Abschnitt (zwischen zwei Schnittpunkten, wodurch die Entität in zwei Teile geteilt wird) oder der abschließende Abschnitt (nach dem letzten Schnittpunkt) sein.
- **Circle, Ellipse und geschlossene Polyline/Rectangle** — da es keinen festen Anfang oder Ende gibt, kann nur der Bogen zwischen zwei *Schnittpunkten* entfernt werden. Bei weniger als zwei Schnittpunkten wird keine Vorschau angezeigt und Klicken hat keine Wirkung. Der Rest der Form wird zum einzigen verbleibenden Teil.

## Was das Kürzen erzeugt

| Entität | Ergebnis nach dem Kürzen |
|--------|------------------------|
| Line | Bis zu zwei kürzere Line-Entitäten |
| Arc | Bis zu zwei kürzere Arc-Entitäten |
| Circle | Eine [Arc](../arc/)-Entität — die geschlossene Form des Circle ist verschwunden, daher wird der verbleibende Teil als Bogen gespeichert |
| Ellipse | Eine Ellipse-Entität mit Start- und Endwinkel — der verbleibende Teil bleibt eine Ellipse, nun eine teilweise |
| Polyline (offen) | Bis zu zwei kürzere Polyline-Entitäten |
| Polyline (geschlossen) / Rectangle | Eine offene Polyline-Entität — die geschlossene Form ist verschwunden, daher wird der verbleibende Teil offen gespeichert |
| Spline | Bis zu zwei kürzere Spline-Entitäten — jedes Teilstück ist dieselbe Kurve über einen kleineren Bereich, gespeichert über Kontrollpunkte (die Fit-Punkte eines Fit-Splines entfallen); ein geschlossener Spline hinterlässt ein offenes Teilstück |

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Trim-Modus beenden |
| `Escape` | Trim-Modus beenden |

## Unterstützte Entitäten

| Entität | Kann gekürzt werden? |
|---------|---------------------|
| Line | Ja |
| Arc | Ja |
| Circle | Ja — erfordert 2 oder mehr Schnittpunkte |
| Ellipse | Ja — erfordert 2 oder mehr Schnittpunkte |
| Polyline (offen) | Ja |
| Polyline (geschlossen) / Rectangle | Ja — erfordert 2 oder mehr Schnittpunkte |
| Spline | Ja — ein geschlossener Spline benötigt 2 oder mehr Schnittpunkte |
| Text, Bemaßung, Leader | Nein |

Die als **Schnittgrenzen** verwendeten Entitäten können eine Line, ein Arc, Circle, eine Ellipse, Polyline oder ein Spline sein. Text-, Bemaßungs- und Leader-Entitäten registrieren nie Schnittpunkte und können daher ebenfalls keine Grenzen sein.

Ein Polyline-**Bogensegment** (mit dem Arc-Umschalter gezeichnet oder importiert) wird genauso wie seine geraden Segmente geschnitten — über den Bogenabschnitt zwischen zwei Schnittpunkten fahren und klicken. Die geschnittene Kante behält ihre Krümmung; nur ihre Länge ändert sich.

## Trim vs. Extend

| | Trim | Extend |
|---|------|--------|
| Funktion | Entfernt ein Segment einer Entität | Verlängert einen Linienendpunkt bis zu einer Grenze |
| Auslöser | Cursor über das zu schneidende Segment fahren | Cursor nahe dem zu verlängernden Endpunkt |
| Ergebnis | Entität wird geteilt oder verkürzt | Linienendpunkt bewegt sich zur Grenze |
| Unterstützte Entitäten | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
