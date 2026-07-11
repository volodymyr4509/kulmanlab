---
title: Raster & Einrasten — Zeichnungen an einem regelmäßigen Raster ausrichten in KulmanLab CAD
description: Die Raster- und Einrast-Umschalter in KulmanLab CAD blenden ein Referenzraster auf der Zeichenfläche ein und sperren die Cursorbewegung auf Rasterpunkte. Der Rasterabstand passt sich automatisch an die aktuelle Zoomstufe an, sodass immer runde Modellwerte angezeigt werden.
keywords: [CAD Raster, Einrasten am Raster, Rasterabstand, Zeichnungshilfen, kulmanlab, Rasterpunkte, orthogonales Einrasten]
group: interface
order: 1
---

# Raster & Einrasten

Zwei Umschalter in der Steuerleiste ermöglichen das Einblenden eines Referenzrasters und das Sperren des Cursors auf dessen Schnittpunkte beim Zeichnen.

| Schaltfläche | Funktion |
|--------------|----------|
| **Raster** | Zeigt ein visuelles Punkt- oder Linienraster auf der Zeichenfläche an |
| **Einrasten** | Sperrt den Cursor auf den nächsten Rasterpunkt, wenn kein geometrischer Einrastpunkt näher ist |

Die beiden Umschalter sind unabhängig — Sie können das Raster anzeigen, ohne einzurasten, einrasten ohne das Raster anzuzeigen, oder beides zusammen verwenden.

## Raster und Einrasten aktivieren

Klicken Sie in der Steuerleisten-Werkzeugleiste auf **Raster** oder **Einrasten**. Der aktive Zustand wird hervorgehoben. Einstellungen werden sitzungsübergreifend gespeichert.

Wenn **Einrasten** aktiviert ist, wechselt das Raster automatisch seine Darstellung von Linien zu **Punkten** — die Punkte markieren die exakten Positionen, auf die der Cursor einrastet.

## Adaptiver Rasterabstand

Der Rasterabstand passt sich beim Zoomen automatisch an, sodass Rasterlinien immer einen angenehmen Abstand auf dem Bildschirm haben (~40 px). Der Schritt ist immer eine „runde" Zahl — ein Vielfaches von 1, 2 oder 5 bei beliebiger Zehnerpotenz:

| Beispiel-Zoom / Modellmaßstab | Rasterabstand |
|-------------------------------|---------------|
| Herausgezoomt (großer Bereich) | 100, 500, 1000 … |
| Mittlerer Zoom | 10, 20, 50 … |
| Herangezoomt (Feindetail) | 1, 2, 5 … |
| Sehr nah | 0,1, 0,2, 0,5 … |

Das bedeutet, dass jeder Einrastpunkt auf eine runde Koordinate im Modellraum fällt — es akkumulieren sich keine Gleitkomma-Offsets.

## Einrast-Priorität

**Endpunkt- und Schnittpunkt-Einrasten haben immer Vorrang vor dem Raster.** Der Cursor rastet nur dann auf einen Rasterpunkt ein, wenn er nicht in der Nähe eines geometrischen Einrastkandidaten ist (Endpunkt, Mittelpunkt, Zentrum oder Schnittpunkt).

Das bedeutet, Sie können mit aktiviertem Raster-Einrasten zeichnen und trotzdem präzise auf vorhandene Geometrie einrasten, wenn der Cursor nahe genug daran vorbeiführt. Das Raster ist ein Fallback, keine Überschreibung.

## Layout-Modus

- **Modellraum** — Punkte oder Linien füllen den gesamten sichtbaren Zeichenflächenbereich.
- **Layout-(Papier-)Raum** — Punkte werden auf das Papierrechteck begrenzt und reichen nicht darüber hinaus.
- **Innerhalb eines Viewports** — Das Raster folgt dem Modell-Koordinatensystem im Maßstab des Viewports, sodass Punkte unabhängig von der Viewport-Vergrößerung auf dieselben Modelleinheiten ausgerichtet sind.

## Typischer Arbeitsablauf

1. Schalten Sie **Raster** und **Einrasten** ein, bevor Sie eine Zeichnung mit regelmäßigem Abstand beginnen.
2. Zoomen Sie auf die Ebene, bei der der Rasterabstand Ihrem gewünschten Inkrement entspricht (z. B. zoomen, bis die Punkte 10 Einheiten auseinander liegen).
3. Zeichnen — der Cursor rastet automatisch auf Rasterpunkte ein. Vorhandene Geometrie rastet weiterhin normal ein, wenn Sie in ihrer Nähe sind.
4. Schalten Sie **Einrasten** aus, wenn Sie freie Cursorbewegung benötigen oder nur auf Geometrie einrasten möchten.
