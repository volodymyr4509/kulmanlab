---
sidebar_position: 1
title: Befehl pan — Klicken-und-Ziehen-Navigation in KulmanLab CAD
description: Der Befehl pan aktiviert einen dauerhaften Ziehen-zum-Scrollen-Modus. Klicken und ziehen Sie auf der Zeichenfläche, um die Ansicht zu verschieben, ohne die Zoomstufe zu ändern. Mittelmaus-Ziehen funktioniert jederzeit ohne Aktivierung von pan.
keywords: [CAD Ansicht verschieben, pan Befehl, zum Navigieren ziehen, Zeichenfläche scrollen CAD, Ansichtsnavigation, kulmanlab]
---

# Pan

Der Befehl `pan` aktiviert einen dauerhaften Ziehen-zum-Scrollen-Modus — klicken und ziehen Sie auf der Zeichenfläche, um die Ansicht zu verschieben. Die Zoomstufe bleibt unverändert. Der Pan-Modus bleibt aktiv, bis Sie `Escape` drücken, sodass Sie bei einer Aktivierung mehrmals ziehen können.

## Die Ansicht verschieben

1. Geben Sie `pan` im Terminal ein oder klicken Sie auf die Schaltfläche **Pan** in der Symbolleiste.
2. **Klicken und ziehen** Sie auf der Zeichenfläche, um die Ansicht zu verschieben.
3. Loslassen und bei Bedarf erneut ziehen.
4. Drücken Sie `Escape`, um den Pan-Modus zu beenden.

## Mittelmaus-Ziehen — Verschieben ohne Aktivierung des Befehls

Der schnellste Weg zum Verschieben: **Mittlere Maustaste gedrückt halten und ziehen** — jederzeit, auch während ein anderer Befehl aktiv ist. Keine Befehlsaktivierung nötig. Das Loslassen der mittleren Maustaste kehrt in den vorherigen Zustand zurück.

## pan vs. Zoomsteuerung

| Aktion | Wirkung | Pan-Modus erforderlich? |
|--------|---------|------------------------|
| Links-Klick-Ziehen (Pan-Modus) | Ansicht verschieben | Ja |
| Mittelmaus-Ziehen | Ansicht verschieben | Nein — funktioniert immer |
| Mausrad | Zum Cursor heran-/herauszoomen | Nein — funktioniert immer |
| Mittlere Maustaste doppelklicken | Alle Entitäten einpassen | Nein — funktioniert immer |
| [Zoom In](../zoom-in/) / [Zoom Out](../zoom-out/) | Zoom um 1,5× stufenweise | Nein |
| [Fit](../fit/) | Alle Entitäten in die Ansicht einpassen | Nein |

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `Escape` | Pan-Modus beenden |

## Tipps

- Verwenden Sie das Mausrad, um zu einem Zielbereich zu zoomen, und verschieben Sie dann die Ansicht zur Feinpositionierung.
- **Mittlere Maustaste doppelklicken** löst sofort [Fit](../fit/) aus — der schnellste Weg, eine verlorene Ansicht zurückzusetzen.
- Wenn Sie sich mitten in einem Befehl befinden (z.B. Linienendpunkt platzieren), ziehen Sie mit der mittleren Maustaste, um zu verschieben, ohne den Befehl abzubrechen.
