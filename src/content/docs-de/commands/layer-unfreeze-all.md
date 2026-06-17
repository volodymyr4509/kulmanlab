---
sidebar_position: 1
title: LayerUnfreezeAll — Alle Layer in KulmanLab CAD auftauen
description: Der Befehl LayerUnfreezeAll entfernt das Eingefroren-Flag von allen Layern der Zeichnung in einem Schritt.
keywords: [Layer auftauen, alle Layer auftauen CAD, kulmanlab Layerverwaltung]
---

# LayerUnfreezeAll

Der Befehl `LayerUnfreezeAll` entfernt das Eingefroren-Flag von **allen Layern** der Zeichnung sofort. Keine Auswahl oder Bestätigung erforderlich — er wird ausgeführt und endet in einem Schritt.

## Verwendung

Geben Sie `LayerUnfreezeAll` im Terminal ein oder klicken Sie auf die Schaltfläche **Unfreeze All** in der Symbolleiste (Sonnen-Symbol). Alle eingefrorenen Layer werden sofort sichtbar.

## Wann zu verwenden

Wird typischerweise nach [LayerIsolate](./layer-isolate) verwendet, um alle Layer wieder in ihren normalen sichtbaren Zustand zu versetzen.

## Verhaltensdetails

- Gilt für alle Layer unabhängig von ihrem aktuellen Zustand.
- Beeinflusst nicht gesperrte oder Plot-Flags — nur das Eingefroren-Flag wird geändert.
- Der Befehl endet sofort ohne Eingabeaufforderungen.
