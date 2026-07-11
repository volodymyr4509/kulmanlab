---
title: Fit-Befehl — Alle Elemente mit einem Klick in das Ansichtsfenster einpassen in KulmanLab CAD
description: Der Fit-Befehl berechnet das Begrenzungsrechteck aller Elemente und passt Zoom und Verschiebung so an, dass jedes Element mit einem kleinen Rand sichtbar ist. Ein Doppelklick auf die mittlere Maustaste löst Fit aus, ohne den Befehl zu aktivieren.
keywords: [CAD-Ansicht einpassen, Zoom zum Einpassen, alle Elemente einrahmen, Fit-Befehl CAD, Begrenzungsrechteck-Zoom, kulmanlab]
group: navigate
order: 4
---

# Fit

Der `fit`-Befehl berechnet das Begrenzungsrechteck aller Elemente in der Zeichnung und passt sowohl Zoomstufe als auch Verschiebungsposition so an, dass jedes Element mit einem kleinen Rand sichtbar ist. Es ist der schnellste Weg, eine verlorene Ansicht wiederzufinden oder sich nach dem Importieren einer DXF-Datei zu orientieren.

## Die Ansicht einpassen

Klicken Sie auf die Schaltfläche **Fit** in der Symbolleiste oder geben Sie `fit` im Terminal ein. Die Ansicht passt sich sofort an und der Befehl endet — keine Interaktion erforderlich.

**Doppelklick auf die mittlere Maustaste** löst denselben Fit-Vorgang jederzeit aus, ohne einen Befehl zu aktivieren — die schnellste Tastenkombination, um eine verlorene Ansicht beim Zeichnen zurückzusetzen.

## So funktioniert die Begrenzungsrechteck-Anpassung

1. Fit findet das achsenparallele Begrenzungsrechteck aller Elemente (min X, max X, min Y, max Y).
2. Die Zoomstufe wird so eingestellt, dass die höhere oder breitere Dimension die Zeichenfläche mit einem Rand füllt.
3. Die Ansicht wird am Mittelpunkt des Begrenzungsrechtecks zentriert.

| Zeichnungszustand | Ergebnis |
|------------------|----------|
| Breiter als hoch | Zoom durch Breite begrenzt |
| Höher als breit | Zoom durch Höhe begrenzt |
| Einzelnes Element | Passt sich um dieses Element an |
| Leere Zeichnung | Ansicht ändert sich nicht |

## Fit vs manuelle Zoom-Steuerung

| | Fit | Zoom In / Zoom Out | Scrollrad |
|---|-----|--------------------|-----------|
| Zentriert auf | Alle Elemente | Ansichtsfenster-Mittelpunkt | Mauszeiger |
| Schrittgröße | Automatisch (einmalig) | 1,5× pro Schritt | ~1,1× pro Rastklick |
| Geeignet für | Verlorene Ansicht wiederfinden, nach Import orientieren | Schrittweises Zoomen von der Mitte | Präzises mauszeigerbezogenes Zoomen |

## Tastaturübersicht

Es gibt keine Tastenkombination für diesen Befehl. Verwenden Sie stattdessen die Tastenkombination **Doppelklick mittlere Maustaste**.

## Verwandte Ansichtsbefehle

| Befehl | Funktion |
|--------|----------|
| [Pan](../pan/) | Verschiebt das Ansichtsfenster ohne zu zoomen |
| [Zoom In](../zoom-in/) | Multipliziert den Zoom um 1,5× pro Schritt |
| [Zoom Out](../zoom-out/) | Dividiert den Zoom durch 1,5× pro Schritt |
