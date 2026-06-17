---
sidebar_position: 3
title: "Zoom Out-Befehl — Ansicht um 1,5× pro Schritt verkleinern in KulmanLab CAD"
description: "Der Zoom Out-Befehl teilt die aktuelle Zoomstufe durch 1,5× und beendet sich sofort. Zentriert auf den Viewport-Mittelpunkt. Verwenden Sie das Scrollrad zum Herauszoomen zum Cursor für feinere Kontrolle."
keywords: [CAD Zoom Out, Ansicht verkleinern, Herauszoomen-Befehl, Übersicht CAD, "1,5×-Zoomschritt", kulmanlab]
---

# Zoom Out

Der `zoomout`-Befehl teilt die aktuelle Zoomstufe durch **1,5×** (entspricht einer Multiplikation mit ~0,667) und beendet sich sofort, zentriert auf den Viewport-Mittelpunkt. Er ist das Gegenteil von [Zoom In](./zoom-in).

## Herauszoomen

Klicken Sie auf die **Zoom Out**-Schaltfläche in der Werkzeugleiste oder geben Sie `zoomout` im Terminal ein. Der Zoom wird sofort angewendet und der Befehl beendet — kein Klicken auf die Zeichenfläche erforderlich.

## Wie der 1,5×-Schritt funktioniert

| Aktuelle Zoomstufe | Nach einem Zoom Out |
|-------------------|---------------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (Untergrenze) |

Die Zoomstufe wird immer in der **unteren rechten Ecke** der Zeichenfläche angezeigt. Die Untergrenze beträgt **0,01×**; weitere Schritte haben keine Wirkung.

## Zoom Out-Schaltfläche vs. Scrollrad

| | Zoom Out-Schaltfläche | Scrollrad |
|---|----------------------|-----------|
| Zoom-Mittelpunkt | Viewport-Mittelpunkt | Cursorposition |
| Schrittgröße | 1,5× pro Klick | ~1,1× pro Tick |
| Aktivierung erforderlich | Nein | Nein — funktioniert immer |
| Optimal für | Schrittweises Zurückgehen für mehr Kontext | Gleichmäßiges, cursorverankertes Herauszoomen |

## Tastaturübersicht

Es gibt keine Tastaturkürzel für diesen Befehl. Verwenden Sie stattdessen das Scrollrad — es funktioniert jederzeit, ohne einen Befehl zu aktivieren.

## Verwandte Ansichtsbefehle

| Befehl | Funktion |
|--------|----------|
| [Zoom In](./zoom-in) | Multipliziert den Zoom mit 1,5× pro Schritt |
| [Fit](./fit) | Setzt den Zoom zurück, um alle Entitäten anzuzeigen |
| [Pan](./pan) | Verschiebt den Viewport ohne Zoomen |
