---
title: "Punkt-Befehl — Punkte in der Zeichnung setzen in KulmanLab CAD"
description: "Der Befehl Point setzt bei jedem Klick, eingegebenem X,Y oder Abstand entlang einer fixierten Richtung einen Punkt, bis Enter, Space oder Escape gedrückt wird. Punkte werden als Punktmarke gezeichnet, tragen den aktuellen Layer und die Farbe und bleiben als DXF-POINT-Entitäten erhalten."
keywords: ["CAD Punkt-Befehl", "Punkt setzen CAD", "DXF POINT Entität", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Der Befehl `Punkt` setzt bei jeder Wahl einen Punkt und bleibt aktiv, bis Sie Enter, Space oder Escape drücken. Ein Punkt ist eine Position ohne Größe: Er wird als kleine Punktmarke gezeichnet und trägt den aktuellen Layer und die Farbe. Er wird als `POINT`-Entität gespeichert.

## Punkte setzen

1. Geben Sie `Punkt` im Terminal ein oder klicken Sie auf **Point**, die letzte Schaltfläche im Panel Shapes.
2. **Klicken Sie**, wo der Punkt hin soll, oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Position. Jede Wahl setzt einen Punkt, und das Terminal protokolliert seine Koordinaten; der Befehl bleibt für den nächsten aktiv.
3. Oder fixieren Sie eine Richtung von einem [Vektor-Pin](../../interface/vector-pins/) aus und geben Sie einen Abstand ein — der Punkt landet genau so weit entlang davon.
4. Drücken Sie **Enter**, **Space** oder **Escape** zum Beenden. Enter und Space beenden nur, wenn gerade nichts eingegeben wird.

## Wie ein Punkt aussieht

Ein Punkt wird auf jeder Zoomstufe als Punktmarke mit 1,5 px Radius gezeichnet; er bleibt beim Herauszoomen sichtbar und wächst beim Hineinzoomen nicht. Der Punktstil der Zeichnung (`$PDMODE` und `$PDSIZE`) wird noch nicht gelesen, daher ist jeder Punkt eine Punktmarke, was auch immer eine DXF sagt.

## Punkte bearbeiten

Ein gewählter Punkt hat einen Griff, der ihn verschiebt. Eine Fensterauswahl nimmt einen Punkt, wenn er im Fenster liegt, in beiden Aufzugsrichtungen.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) und [Scale](../scale/) wirken auf Punkte wie auf jede andere Entität. Das Eigenschaftenfenster zeigt Position X und Position Y sowie Farbe und Layer.

## DXF — POINT-Entität

Punkte werden als `POINT`-Entitäten mit Position, Farbe und Layer (Gruppencodes 10/20, 62 und 8) aus DXF gelesen und dorthin geschrieben und bleiben auch über gespeichertes JSON erhalten. Beim Import wurden sie früher übersprungen. Der [Export Manager](../export-manager/) führt Points als eigene Zeile, sodass Sie sie vom Export ausnehmen können.

---

*Verwandt: [Line](../line/) für dieselbe Koordinateneingabe und [Vector Pins](../../interface/vector-pins/), um einen Punkt in festem Abstand entlang einer Richtung zu setzen.*
