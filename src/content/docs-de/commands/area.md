---
sidebar_position: 3
title: Area-Befehl — Fläche und Umfang eines Polygons messen in KulmanLab CAD
description: Der Area-Befehl misst die eingeschlossene Fläche und den Umfang eines Polygons aus 3 oder mehr geklickten Punkten, mithilfe der Gauß'schen Trapezformel. Unterstützt winkelgesperrte Richtungseingabe und eine bleibende Hervorhebung des Ergebnisses.
keywords: [CAD Flächenmessung, area-Befehl, Polygonfläche berechnen, Umfangsmessung, Gauß'sche Trapezformel, kulmanlab CAD-Messung]
---

# Area

Der `area`-Befehl misst die eingeschlossene Fläche und den Umfang eines Polygons aus drei oder mehr geklickten Punkten und gibt beide Ergebnisse im Terminal auf 4 Dezimalstellen aus. Es ist der dritte Messbefehl neben [Distance](../distance/) (geradlinige Länge) und [Angle](../angle/) (Innenwinkel an einem Scheitelpunkt).

## Aufbau einer Flächenmessung

```
  ● erster Punkt
   \
    \
     ● zweiter Punkt
      \
       \             (gestrichelt) Vorschau der Schließkante
        ●───────────────┐
      dritter Punkt     │  (gestrichelt) Vorschau der nächsten Kante zum Mauszeiger
                        ✕ Mauszeiger  →  Terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Eckpunkte** — jeder geklickte (oder eingegebene) Punkt wird ein Eckpunkt des Polygons; abgeschlossene Kanten werden durchgezogen dargestellt und das Innere mit einer transparenten Hervorhebung gefüllt.
- **Vorschaukanten** — gestrichelte Linien zeigen die ausstehende Kante vom letzten Eckpunkt zum Mauszeiger sowie die Schließkante vom Mauszeiger zurück zum ersten Eckpunkt.
- **Schließkante** — der erste Punkt wird nie erneut geklickt; Enter schließt das Polygon automatisch.

## Eine Fläche messen

1. Geben Sie `area` im Terminal ein oder klicken Sie auf die Schaltfläche **Area** in der Symbolleiste (untere Reihe des Messen-Panels).
2. **Ersten Punkt klicken**, oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
3. **Jeden weiteren Eckpunkt** der Reihe nach entlang der Form klicken. Koordinateneingabe funktioniert bei jedem Schritt.
4. Sobald mindestens **3 Punkte** platziert sind, drücken Sie **Enter** (ohne ausstehende Koordinaten- oder Längeneingabe), um das Polygon zu schließen und das Ergebnis zu berechnen.
5. Das Terminal gibt `Area: <Wert>  Perimeter: <Wert>` aus, und das geschlossene Polygon — Füllung, Umriss und Eckpunkt-Griffe — bleibt auf der Zeichenfläche hervorgehoben.
6. **Irgendwohin klicken, eine beliebige Taste drücken oder `Escape` drücken**, um das Ergebnis auszublenden und den Befehl zu beenden.

## Winkelsperre und exakte Distanz

Nachdem der erste Eckpunkt platziert wurde, rastet die Bewegung in Richtung eines der eingestellten Winkelraster-Schritte (10°, 15°, 20°, 30°, 45° oder 90°, über das Dropdown in der Symbolleiste einstellbar) auf diese Richtung ein:

- Die Kantenvorschau rastet auf die gesperrte Richtung ein, und am Ankerpunkt wird eine Winkelraster-Anzeige eingeblendet.
- Geben Sie eine Länge ein und drücken Sie **Enter**, um den nächsten Eckpunkt in genau diesem Abstand entlang der gesperrten Richtung zu platzieren.
- Ein Klick bei aktiver Sperre (ohne eingegebene Länge) platziert den Eckpunkt an der Projektion des Mauszeigers auf die gesperrte Richtung.

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Zum Längenwert der Kante hinzufügen |
| `-` | Negative Länge (nur als erstes Zeichen) |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Nächsten Eckpunkt in der eingegebenen Länge platzieren |

## Das Polygon schließen

- Enter schließt die Form erst, sobald **3 oder mehr** Eckpunkte platziert sind — mit weniger hat es keine Wirkung.
- Die Kante vom letzten Eckpunkt zurück zum ersten wird automatisch hinzugefügt und in Fläche und Umfang mitgezählt.
- Die Punkte können in beliebiger Reihenfolge platziert werden (im oder gegen den Uhrzeigersinn) — das Ergebnis ist identisch.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Was gemessen wird | Eingeschlossene Fläche & Umfang eines Polygons | Geradlinige Länge | Innenwinkel an einem Scheitelpunkt |
| Anzahl der Klicks | 3 oder mehr, mit Enter geschlossen | 2 | 3 |
| Ergebnisformat | `12.3456  Perimeter: 45.6789` | `12.3456` (Einheiten) | `45.0000°` |
| Zeichenflächenvorschau | Gefülltes Polygon mit gestrichelter Schließkante | Linie vom ersten Punkt zum Mauszeiger | Zwei Linien vom Scheitelpunkt zum Mauszeiger |
| Nach dem Ergebnis | Mit beliebiger Eingabe ausblenden, dann endet der Befehl | Klick verkettet eine neue Messung | Klick verkettet eine neue Messung |
| Geeignet für | Eingeschlossene Bereiche, Raum- oder Plattenfläche | Länge einer Lücke oder eines Segments | Öffnungswinkel zwischen zwei Merkmalen |

## Koordinateneingabe

Anstatt zu klicken, eine genaue Position für jeden Eckpunkt eingeben:

1. X-Wert eingeben.
2. `,` drücken — das Terminal zeigt `[X], [Y{cursor}]`.
3. Y-Wert eingeben.
4. **Enter** drücken, um zu bestätigen.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten, oder Kantenlängeneingabe bei aktiver Winkelsperre |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Eingegebene Koordinate oder Länge bestätigen; schließt bei 3+ Eckpunkten ohne ausstehende Eingabe das Polygon |
| `Escape` | Während der Eckpunktauswahl: platzierte Punkte verwerfen und beim ersten Punkt neu beginnen; nach Anzeige des Ergebnisses: ausblenden und Befehl beenden |

## Hinweise

- Die Fläche wird mit der [Gauß'schen Trapezformel](https://de.wikipedia.org/wiki/Gau%C3%9Fsche_Trapezformel) berechnet und immer als positiver Wert ausgegeben, unabhängig von der Klickreihenfolge.
- Selbstüberschneidende Polygone (sich kreuzende Kanten) liefern weiterhin ein numerisches Ergebnis, das aber möglicherweise nicht der visuell eingeschlossenen Region entspricht — für ein aussagekräftiges Ergebnis Kanten nicht kreuzen lassen.
- Ergebnisse werden **nur im Terminal und als vorübergehende Hervorhebung auf der Zeichenfläche** angezeigt — der Zeichnung wird kein dauerhaftes Element hinzugefügt.
- Anders als Distance und Angle verkettet sich Area **nicht** automatisch zu einer neuen Messung — nach dem Ausblenden des Ergebnisses `area` erneut aufrufen, um ein weiteres Polygon zu messen.
- Die Genauigkeit beträgt immer 4 Dezimalstellen für Fläche und Umfang, in denselben Einheiten wie die Zeichnungskoordinaten (keine Einheitenumrechnung).
