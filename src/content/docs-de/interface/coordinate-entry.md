---
title: "Koordinateneingabe — exakte, relative und polare Punkte eingeben"
description: "Wo immer ein Befehl nach einem Punkt fragt, tippen Sie ihn statt zu klicken: X,Y für eine exakte Position, @X,Y vom letzten Punkt aus und Abstand<Winkel für einen polaren Punkt. Der Schalter Rel lässt jeden getippten Punkt relativ beginnen."
keywords: ["Koordinateneingabe CAD", "relative Koordinaten CAD", "Polarkoordinaten CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Koordinateneingabe

Wo immer ein Befehl nach einem Punkt fragt — der Anfang einer [Line](../../commands/line/), eine Ecke eines [Rectangle](../../commands/rectangle/), der Basispunkt eines [Move](../../commands/move/) oder ein Griff, den Sie ziehen —, können Sie ihn tippen statt zu klicken. Beginnen Sie eine Zahl zu tippen, und das Terminal zeigt die Eingabe; drücken Sie **Enter** oder **Space**, um den Punkt zu setzen.

## Vier Schreibweisen für einen Punkt

| Sie tippen | Der Punkt liegt |
|---|---|
| `100,50` | Bei X 100, Y 50 |
| `@100,50` | 100 in X und 50 in Y vom letzten Punkt aus |
| `100<45` | 100 vom Ursprung entfernt, unter 45° |
| `@100<45` | 100 vom letzten Punkt entfernt, unter 45° |

Winkel sind in Grad, gegen den Uhrzeigersinn ab der X-Achse, also ist `@50<90` 50 gerade nach oben und `@50<180` 50 nach links. Beide Werte dürfen negativ sein.

## Der letzte Punkt

`@` misst vom letzten Punkt, der in irgendeinem Befehl geklickt oder getippt wurde — der letzte Klick des vorigen Befehls zählt, ebenso ein Griff, den Sie gerade gezogen haben. Gibt es noch keinen letzten Punkt, wird `@100,50` als `100,50` gelesen. Der letzte Punkt wird vergessen, wenn Sie zwischen Modellbereich und Layout wechseln und wenn eine Zeichnung geöffnet wird.

## Rel: standardmäßig relativ

Der Schalter **Rel** in der Steuerleiste lässt jeden getippten Punkt relativ beginnen: Sobald Sie die erste Ziffer tippen, kommt ein `@` davor, sodass aus `100,50` `@100,50` wird. Drücken Sie **Backspace** über dem `@`, um diesen einen Punkt absolut zu machen. Ohne letzten Punkt wird kein `@` eingefügt. Rel ist standardmäßig aus und wird mit den anderen Schaltern der Steuerleiste gespeichert.

## Tasten beim Tippen

| Taste | Wirkung |
|---|---|
| `0`–`9`, `.`, `-` | Die Zahl tippen; `-` nur an ihrem Anfang |
| `@` | Den Punkt relativ machen, am Anfang von X |
| `,` oder **Space** | X beenden und zu Y wechseln |
| `<` | X als Abstand beenden und zu seinem Winkel wechseln |
| **Enter** oder **Space** | Den Punkt setzen, sobald Y einen Wert hat |
| **←** **→** **Home** **End** | Den Cursor im getippten Wert bewegen |
| **Backspace** | Vor dem Cursor löschen; am Anfang eines leeren Y zurück zu X |

Ein Punkt, der sich nicht als Zahlen lesen lässt, bleibt im Terminal stehen, damit Sie ihn korrigieren können. Jeder getippte Punkt hinterlässt eine Zeile im Terminalverlauf, so wie Sie ihn getippt haben — `Eingegeben: @100<45` —, vor der Zeile des Befehls, wo er gelandet ist.

## Getippte Punkte und Winkelverfolgung

Ist der Cursor an einen Strahl der Winkelverfolgung gebunden, ergibt eine getippte Zahl einen Abstand entlang dieses Strahls statt eines X. Tippen Sie zuerst `@`, beginnt stattdessen ein vollständiger Punkt, sodass `@100,50` auch auf einem gebundenen Strahl funktioniert.

---

*Verwandt: [Abstandsverfolgung](../distance-tracking/), um eine Länge entlang einer gebundenen Richtung zu tippen, und [Vector Pins](../vector-pins/), um von einem gesetzten Punkt aus zu messen.*
