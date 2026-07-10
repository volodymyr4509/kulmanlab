---
sidebar_position: 5
title: Vector Pins — Entlang von Referenzlinien durch angeheftete Punkte einrasten in KulmanLab CAD
description: Mit Vector Pins heften Sie einen Fangpunkt an, indem Sie ihn eine halbe Sekunde mit dem Cursor überfahren, und verfolgen dann gestrichelte horizontale und vertikale Referenzlinien durch den angehefteten Punkt — neue Geometrie an vorhandenen Punkten ausrichten, ganz ohne Konstruktionslinien.
keywords: [Vector Pins, Objektfang-Verfolgung, Referenzlinien, Ausrichtungsverfolgung, Fangverfolgung CAD, Konstruktionslinien, kulmanlab]
---

# Vector Pins

**Vector Pins** sind eine Zeichenhilfe, mit der Sie neue Geometrie an vorhandenen Punkten ausrichten, ohne Konstruktionslinien zu zeichnen. Überfahren Sie einen Fangpunkt eine halbe Sekunde lang, um ihn *anzuheften* — der Pin projiziert dann unsichtbare horizontale und vertikale Referenzlinien, und der Cursor rastet auf ihnen ein, sobald er in ihre Nähe kommt. Es ist das Äquivalent von KulmanLab CAD zur Objektfang-Verfolgung in Desktop-CAD-Anwendungen.

Die Funktion wird über den **Pins**-Schalter in der Kontrollleiste gesteuert (neben Grid, Snap und ANGL). Sie ist **standardmäßig aktiviert**, und die Einstellung bleibt über Sitzungen hinweg erhalten.

## Einen Punkt anheften

1. Starten Sie einen Befehl, der nach einem Punkt fragt — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) und so weiter.
2. Bewegen Sie den Cursor über einen Fangpunkt vorhandener Geometrie — eine Endpunkt-, Mittelpunkt- oder Zentrumsmarkierung.
3. **Halten Sie den Cursor 500 ms still.** Die Markierung wird zu einem gefüllten **Quadrat** in Akzentfarbe — der Punkt ist jetzt angeheftet.
4. Wiederholen Sie das, um beliebig viele Punkte anzuheften. Jeder Pin projiziert weiterhin seine Referenzlinien.

Das Anheften funktioniert auch außerhalb eines Befehls: Das Überfahren eines **Griffs** einer ausgewählten Entität heftet ihn auf dieselbe Weise an.

## Verfolgung entlang der Referenzlinien

Jeder angeheftete Punkt projiziert zwei unsichtbare Referenzlinien — eine **horizontale** und eine **vertikale** — durch seine exakten Koordinaten. Während Sie den Cursor bewegen:

- Innerhalb von **12 px** der vertikalen Linie eines Pins rastet der Cursor auf ihr ein: Eine gestrichelte Linie in Akzentfarbe wird durch den Pin über die gesamte Ansicht gezeichnet, und eine **X-Markierung** zeigt die eingerastete Position. Ihre X-Koordinate ist jetzt *exakt* die X-Koordinate des Pins.
- Dasselbe gilt für die horizontale Linie und die Y-Koordinate des Pins.
- In der Nähe je einer Linie beider Ausrichtungen — auch von **zwei verschiedenen Pins** — rastet der Cursor auf deren **Schnittpunkt** ein, und beide gestrichelten Linien werden angezeigt. So platzieren Sie einen Punkt exakt bei (X von Pin A, Y von Pin B).

```
                    ┆ (gestrichelt, vertikale Linie von Pin ■)
                    ┆
   ■ Pin A ┄┄┄┄┄┄┄┄ ✕ ← Cursor auf dem Schnittpunkt eingerastet:
                    ┆    X von Pin B, Y von Pin A
                    ┆
                    ■ Pin B
```

Die eingerasteten Koordinaten werden direkt vom Pin übernommen, die Ausrichtung ist also exakt — ohne Rundung oder Gleitkomma-Abweichung.

## Fangpriorität

Reguläre Geometriefänge — Endpunkt, Mittelpunkt, Zentrum und Schnittpunkt — haben **Vorrang** vor den Pin-Referenzlinien. Ist der Cursor näher an einem Punktfang als an einer Referenzlinie, gewinnt der Punktfang. Die Pin-Verfolgung füllt die Lücken zwischen der Geometrie, sie blockiert nie das Einrasten auf der Geometrie selbst.

## Kombination mit der Winkelsperre

Vector Pins arbeiten mit dem Winkelraster (dem **ANGL**-Schalter in der Kontrollleiste) zusammen. Wenn ein Befehl den Cursor auf einen Winkelraster-Strahl gesperrt hat:

- Der Cursor bleibt auf die gesperrte Richtung beschränkt.
- Das Pin-Einrasten zielt dann auf die **Schnittpunkte des gesperrten Strahls mit den Pin-Referenzlinien** (nur vor dem Strahlursprung).

Das beantwortet Fragen wie *„Wo kreuzt die 45°-Richtung von meinem letzten Punkt die Höhe des Zentrums jenes Kreises?"* — sperren Sie den Winkel, und der Cursor rastet im Kreuzungspunkt ein. Das Strahl-Einrasten funktioniert in jedem Befehl mit Winkelsperre: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader und ViewportCopy.

## Lebenszyklus der Pins

Pins sind für die aktuelle Operation gedacht, nicht als dauerhafte Markierungen. Alle Pins werden gelöscht, wenn:

| Ereignis | Grund |
|----------|-------|
| Ein **neuer Befehl** startet | Jede Operation beginnt mit einem sauberen Satz an Referenzen |
| **Escape** gedrückt wird | Standardverhalten „alles abbrechen" |
| Der **Pins**-Schalter ausgeschaltet wird | Das Abschalten der Funktion entfernt ihren Zustand |
| Zwischen **Modell- und Papierbereich** gewechselt wird | Pin-Koordinaten gelten nur für einen Bereich |

Innerhalb eines einzelnen Befehls können Sie anheften, zeichnen, erneut anheften und weitermachen — Pins überstehen jeden Klick eines Mehrpunktbefehls wie Polyline.

## Typischer Arbeitsablauf

Eine Linie zeichnen, die direkt unterhalb des Zentrums eines Kreises beginnt:

1. Geben Sie `line` ein (oder klicken Sie auf die Line-Schaltfläche).
2. Überfahren Sie die **Zentrumsmarkierung** des Kreises eine halbe Sekunde lang — sie wird zu einem Quadrat in Akzentfarbe.
3. Bewegen Sie den Cursor nach unten: In der Nähe der Vertikalen des Kreises rastet der Cursor auf der gestrichelten Referenzlinie ein.
4. Klicken Sie — die Linie beginnt exakt auf der X-Koordinate des Kreises.
5. Setzen Sie die Linie wie gewohnt fort; der Pin bleibt für die nächsten Punkte verfügbar.

## Hinweise

- Das 500-ms-Überfahren funktioniert auf jeder Fangmarkierung, die der Cursor erreichen kann — auch auf Fangpunkten, die mitten im Befehl erscheinen.
- Das Überfahren eines bereits angehefteten Punkts bewirkt nichts; es gibt kein Lösen durch Überfahren. Löschen Sie Pins mit **Escape** oder durch Ausschalten von **Pins**.
- Die Fangdistanz für Referenzlinien beträgt dieselben 12 Bildschirmpixel wie beim regulären Punktfang, das Verhalten fühlt sich also bei jeder Zoomstufe gleich an.
- Angeheftete Punkte werden anstelle ihrer regulären Fangmarkierungen als Quadrate in Akzentfarbe dargestellt.
