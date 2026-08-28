---
title: Abstandsverfolgung — Eine exakte Länge von einem gesetzten Pin aus eingeben
description: Der Dist-Schalter lässt den zuletzt gesetzten Vektor-Pin als Anker dienen, von dem aus die Winkelverfolgung misst. So geben Sie eine exakte Länge ein und setzen einen Punkt in genauem Abstand und Winkel zu einem vorhandenen Punkt — auch den ersten Punkt einer Form.
keywords: [Abstandseingabe CAD, exakte Länge eingeben CAD, Dist-Schalter, Abstandsverfolgung von Pins, Polarverfolgung CAD, direkte Abstandseingabe, kulmanlab]
group: interface
order: 3
---

# Abstandsverfolgung

**Die Abstandsverfolgung** lässt Sie einen Punkt setzen, indem Sie eine exakte Länge eintippen statt zu klicken. Gesteuert wird sie über den Schalter **Dist** in der Steuerleiste, neben [Pins](../vector-pins/) und ANGL. Sie ist **standardmäßig aktiv** und die Einstellung bleibt über Sitzungen hinweg erhalten.

Was sie hinzufügt, ist eng umrissen, aber nützlich: Sie lässt den **zuletzt gesetzten Vektor-Pin** als den Anker dienen, von dem aus die Winkelverfolgung misst. Ohne sie kann ein Befehl nur von einem Punkt aus messen, den er bereits selbst erfasst hat — was bedeutet, dass der *erste* Punkt einer Form überhaupt nichts hat, wovon aus gemessen werden könnte.

## Die drei Schalter arbeiten zusammen

Die Abstandsverfolgung steht nicht für sich allein. Zwei weitere Schalter müssen im richtigen Zustand sein, bevor Sie eine Länge eingeben können:

| Schalter | Aufgabe |
|----------|---------|
| **Pins** | Liefert den Bezugspunkt. Halten Sie den Mauszeiger 500 ms über einem Fangpunkt, um ihn zu pinnen — siehe [Vector Pins](../vector-pins/). |
| **ANGL** | Liefert den Winkel. Die Abstandsverfolgung wird erst verfügbar, sobald der Mauszeiger winkelgerastet ist, also muss ANGL auf eine Schrittweite (10°, 20°, 30°, 45°, 90°) statt auf Off stehen. |
| **Dist** | Erlaubt, den Pin als Anker zu verwenden statt nur den eigenen Punkt des Befehls. |

Sind Pins und Dist aktiv, ANGL aber auf **Off**, passiert nichts: Es gibt keine gerastete Richtung, entlang derer eine Länge gemessen werden könnte.

## Wie Pins und Dist gekoppelt sind

Die Abstandsverfolgung ist bei ausgeschalteten Pins bedeutungslos, deshalb bleiben die beiden Schalter im Gleichschritt:

- **Pins einschalten** schaltet auch **Dist ein**.
- **Pins ausschalten** schaltet auch **Dist aus**.
- **Dist einschalten** schaltet **Pins ein**, falls es das nicht schon war.
- **Dist ausschalten** lässt **Pins eingeschaltet**.

Dist kann also nie aktiv sein, während Pins inaktiv ist. Sie können die Pin-Verfolgung aber zum Ausrichten behalten und dabei die Abstandsverfolgung abschalten — nützlich, wenn Sie Bezugslinien wollen, ohne dass der Mauszeiger an einem Pin einrastet, während Sie auf Ihren eigenen letzten Punkt rasten wollten.

## Einen Punkt in exaktem Abstand setzen

1. Schalten Sie **Pins** und **Dist** ein und stellen Sie **ANGL** auf eine Winkelschrittweite.
2. Starten Sie einen Befehl, der einen Punkt verlangt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) und so weiter.
3. **Pinnen Sie einen Bezugspunkt**: Halten Sie den Mauszeiger über einem vorhandenen Fangpunkt, bis die Markierung zu einem gefüllten Quadrat wird.
4. Bewegen Sie den Mauszeiger vom Pin weg, ungefähr in den gewünschten Winkel. Kommt er einer der ANGL-Schrittweiten nahe, **rastet** die Richtung ein — vom Pin aus erscheint eine Verfolgungsanzeige.
5. **Tippen Sie die Länge** und drücken Sie **Enter** oder **Space**. Der Punkt wird genau in diesem Abstand vom Pin gesetzt, entlang des gerasteten Winkels.

Die Eingabeaufforderung im Terminal zeigt an, wann Sie tippen können. Im gerasteten Zustand lautet sie:

```
pick start point or enter length: [ ]
```

und der eingetippte Wert erscheint in den Klammern.

## Warum der erste Punkt entscheidend ist

Das ist der Fall, der sonst unmöglich wäre. Angenommen, eine Linie soll genau 250 Einheiten rechts von einer vorhandenen Ecke beginnen:

1. Starten Sie [Line](../../commands/line/).
2. Pinnen Sie die vorhandene Ecke.
3. Bewegen Sie den Mauszeiger nach rechts, bis die Richtung bei 0° einrastet.
4. Tippen Sie `250` und drücken Sie **Enter**.

Die Linie beginnt nun an einem Punkt 250 Einheiten von der Ecke entfernt — ohne Hilfsgeometrie und ohne Rechnerei. Ohne Dist hat der Line-Befehl noch keine Punkte erfasst, es gibt also nichts, *wovon* eine eingetippte Länge gemessen werden könnte — Sie könnten nur ungefähr klicken oder eine Hilfslinie ziehen und sie hinterher löschen.

Für den **zweiten und jeden weiteren** Punkt hat der Befehl bereits seinen eigenen Anker (den vorherigen Punkt), und der wird zuerst verwendet. Der Pin wird nur als Alternative herangezogen, wenn Ihr eigener Anker nicht gerastet ist — etwas zu pinnen kapert also keine Rastung, die Sie bereits haben.

## Tippen friert die Rastung ein

Sobald Sie Ziffern eingeben, ändert sich der Anker nicht mehr. Welcher Punkt auch immer gerastet war, als die erste Ziffer ankam, bleibt der Anker, bis Sie bestätigen oder das Feld leeren — Mausbewegungen während der Eingabe verschieben die Messung nicht stillschweigend auf einen anderen Pin oder auf den eigenen Punkt des Befehls.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Zur Länge hinzufügen |
| `-` | Negative Länge — kehrt die Richtung entlang des gerasteten Winkels um (nur erstes Zeichen) |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` / `Space` | Punkt in der eingetippten Länge setzen |
| `Escape` | Befehl abbrechen; Rastung und eingetippter Wert werden gelöscht |

Das Eintippen einer Länge ist optional. Bei gerasteter Richtung können Sie weiterhin klicken, und der Punkt wird auf den gerasteten Winkel projiziert.

## Wo es funktioniert

Die Abstandsverfolgung steht in jedem Befehl zur Verfügung, der Sie Punkte auswählen lässt:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) und [ViewportCopy](../../commands/viewport-copy/).

## Siehe auch

- [Vector Pins](../vector-pins/) — Punkte pinnen und entlang ihrer Bezugslinien verfolgen
- [Grid & Snap](../grid-snap/) — die übrigen Präzisionshilfen in der Steuerleiste
- [Distance](../../commands/distance/) — einen vorhandenen Abstand messen, statt einen neuen einzugeben
