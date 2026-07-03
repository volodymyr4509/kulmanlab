---
sidebar_position: 2
title: Distance-Befehl — Geradlinigen Abstand zwischen zwei Punkten messen in KulmanLab CAD
description: Der Distance-Befehl misst den euklidischen Abstand zwischen zwei geklickten Punkten und zeigt das Ergebnis auf 4 Dezimalstellen an. Nach dem Ergebnis erneut klicken, um eine neue Messung vom letzten Punkt aus zu verketten.
keywords: [CAD-Abstandsmessung, distance-Befehl, Punkt-zu-Punkt-Messung, geradliniger Abstand, kulmanlab CAD-Messung]
---

# Distance

Der `distance`-Befehl misst den geradlinigen (euklidischen) Abstand zwischen zwei geklickten Punkten und gibt das Ergebnis im Terminal auf 4 Dezimalstellen aus. Es ist einer von zwei Messbefehlen — [Angle](../angle/) misst stattdessen die Winkelöffnung an einem Scheitelpunkt.

## Aufbau einer Abstandsmessung

```
  ● erster Punkt
   \
    \  Vorschaulinie (live)
     \
      ● zweiter Punkt    →  Terminal: "Distance: 12.3456"
```

- **Erster Punkt** — Ursprung der Messung.
- **Zweiter Punkt** — Endpunkt; das Platzieren gibt das Ergebnis sofort aus.
- **Ergebnis** — wird im Terminal angezeigt, nicht auf der Zeichenfläche platziert.

## Einen Abstand messen

1. Geben Sie `distance` im Terminal ein oder klicken Sie auf die Schaltfläche **Distance** in der Symbolleiste.
2. **Ersten Punkt klicken**, oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
3. **Zweiten Punkt klicken** — der gemessene Abstand erscheint im Terminal. Koordinateneingabe funktioniert hier ebenfalls.
4. **Erneut klicken** (optional), um eine neue Messung zu starten. Der Befehl bleibt aktiv.

Drücken Sie jederzeit `Escape`, um auf Schritt 2 zurückzusetzen.

## Messungen verketten

Nachdem das Ergebnis angezeigt wird, startet ein Klick sofort die nächste Messung — der geklickte Punkt wird zum neuen ersten Punkt. Dies ermöglicht die Messung einer Folge von Abständen, ohne den Befehl erneut zu aktivieren.

## Distance vs Angle

| | Distance | Angle |
|---|---------|-------|
| Was gemessen wird | Geradlinige Länge | Innenwinkel an einem Scheitelpunkt |
| Anzahl der Klicks | 2 | 3 |
| Ergebnisformat | `12.3456` (Einheiten) | `45.0000°` |
| Zeichenflächenvorschau | Linie vom ersten Punkt zum Mauszeiger | Zwei Linien vom Scheitelpunkt zum Mauszeiger |
| Geeignet für | Länge einer Lücke oder eines Segments | Öffnungswinkel zwischen zwei Merkmalen |

## Koordinateneingabe

Anstatt zu klicken, eine genaue Position für jeden der Punkte eingeben:

1. X-Wert eingeben.
2. `,` drücken — das Terminal zeigt `[X], [Y{cursor}]`.
3. Y-Wert eingeben.
4. **Enter** drücken, um zu bestätigen.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Eingegebene Koordinate bestätigen |
| `Escape` | Abbrechen und auf Schritt 2 zurücksetzen |

## Hinweise

- Ergebnisse werden **nur im Terminal** angezeigt — der Zeichnung wird nichts hinzugefügt.
- Das Ergebnis wird in denselben Einheiten wie die Zeichnungskoordinaten ausgedrückt (keine Einheitenumrechnung).
- Die Genauigkeit beträgt immer 4 Dezimalstellen.
