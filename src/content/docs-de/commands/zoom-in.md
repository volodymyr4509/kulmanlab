---
sidebar_position: 2
title: "Zoom In-Befehl — Ansicht um 1,5× pro Schritt vergrößern in KulmanLab CAD"
description: "Der Zoom In-Befehl multipliziert die aktuelle Zoomstufe mit 1,5× und beendet sich sofort. Zentriert auf den Viewport-Mittelpunkt. Zoom-Bereich 0,01–10.000. Verwenden Sie stattdessen das Scrollrad, um zum Cursor hin zu zoomen."
keywords: [CAD Zoom In, Ansicht vergrößern, Zoom-Befehl CAD, "1,5×-Zoomschritt", kulmanlab]
---

# Zoom In

Der `zoomin`-Befehl multipliziert die aktuelle Zoomstufe mit **1,5×** und beendet sich sofort, zentriert auf den Viewport-Mittelpunkt. Er ist das Werkzeugleisten-Äquivalent eines Scrollrad-Ticks, der zur Bildschirmmitte hin gezoomt wird, anstatt zum Cursor.

## Heranzoomen

Klicken Sie auf die **Zoom In**-Schaltfläche in der Werkzeugleiste oder geben Sie `zoomin` im Terminal ein. Der Zoom wird sofort angewendet und der Befehl beendet — kein Klicken auf die Zeichenfläche erforderlich.

## Wie der 1,5×-Schritt funktioniert

| Aktuelle Zoomstufe | Nach einem Zoom In |
|-------------------|--------------------|
| 1,00× | 1,50× |
| 1,50× | 2,25× |
| 10,00× | 15,00× |
| 6.667× | 10.000× (begrenzt) |

Die Zoomstufe wird immer in der **unteren rechten Ecke** der Zeichenfläche neben dem `zoom`-Label angezeigt. Die Obergrenze beträgt **10.000×**; weitere Schritte haben keine Wirkung.

## Zoom In-Schaltfläche vs. Scrollrad

| | Zoom In-Schaltfläche | Scrollrad |
|---|---------------------|-----------|
| Zoom-Mittelpunkt | Viewport-Mittelpunkt | Cursorposition |
| Schrittgröße | 1,5× pro Klick | ~1,1× pro Tick |
| Aktivierung erforderlich | Nein | Nein — funktioniert immer |
| Optimal für | Grobe Navigation | Präzises, cursorgesteuertes Zoomen |

## Tastaturübersicht

Es gibt keine Tastaturkürzel für diesen Befehl. Verwenden Sie stattdessen das Scrollrad — es funktioniert jederzeit, ohne einen Befehl zu aktivieren.

## Verwandte Ansichtsbefehle

| Befehl | Funktion |
|--------|----------|
| [Zoom Out](./zoom-out) | Teilt den Zoom durch 1,5× pro Schritt |
| [Fit](./fit) | Setzt den Zoom zurück, um alle Entitäten anzuzeigen |
| [Pan](./pan) | Verschiebt den Viewport ohne Zoomen |
