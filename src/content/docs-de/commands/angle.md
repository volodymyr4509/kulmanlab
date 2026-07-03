---
sidebar_position: 1
title: Angle-Befehl — Innenwinkel an einem Scheitelpunkt mit drei Punkten messen in KulmanLab CAD
description: Der Angle-Befehl misst den Innenwinkel (0°–180°) an einem Scheitelpunkt, der durch drei geklickte Punkte definiert wird. Ersten Endpunkt, Scheitelpunkt und zweiten Endpunkt klicken. Ergebnis wird im Terminal auf 4 Dezimalstellen angezeigt.
keywords: [CAD-Winkelmessung, Drei-Punkt-Winkel, Innenwinkel CAD, Winkel-Befehl messen, Scheitelpunkt-Winkel, kulmanlab]
---

# Angle

Der `angle`-Befehl misst den Innenwinkel an einem Scheitelpunkt, der durch zwei Liniensegmente durch drei geklickte Punkte gebildet wird. Das Ergebnis — immer zwischen 0° und 180° — wird im Terminal auf 4 Dezimalstellen angezeigt. Es ist einer von zwei Messbefehlen — [Distance](../distance/) misst stattdessen die geradlinige Länge.

## Aufbau einer Winkelmessung

```
  ● erster Punkt (Ende des ersten Strahls)
   \
    \  Vorschau erster Strahl
     \
      ● Scheitelpunkt (Schritt 3)
     /
    /  Vorschau zweiter Strahl (zur Mauszeiger-Position)
   /
  ● dritter Punkt  →  Terminal: "Angle: 45.0000°"
```

- **Erster Punkt** — ein Ende des Winkels (Schritt 2).
- **Scheitelpunkt** — die Ecke, an der der Winkel gemessen wird (Schritt 3).
- **Dritter Punkt** — das andere Ende des Winkels (Schritt 4).

## Einen Winkel messen

1. Geben Sie `angle` im Terminal ein oder klicken Sie auf die Schaltfläche **Angle** in der Symbolleiste.
2. **Ersten Punkt klicken** — ein Armende des Winkels. Oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
3. **Scheitelpunkt klicken** — die Ecke, an der sich die beiden Arme treffen. Koordinateneingabe funktioniert hier ebenfalls.
4. **Dritten Punkt klicken** — das zweite Armende. Koordinateneingabe funktioniert hier ebenfalls. Das Platzieren dieses Punktes gibt das Ergebnis aus.
5. **Erneut klicken** (optional), um eine neue Messung von diesem Klick als neuem ersten Punkt zu starten.

## Konvention des Innenwinkels

Der Befehl berechnet den Winkel mithilfe des Skalarprodukts der beiden Strahlen vom Scheitelpunkt:

- **Immer Innenwinkel**: Das Ergebnis ist der kleinere Winkel, zwischen 0° und 180°.
- Die Reihenfolge, in der Sie die Endpunkte klicken, hat keinen Einfluss auf das Ergebnis — nur die Scheitelpunktposition ist relevant.
- Kollineare Punkte (alle drei auf einer Linie) ergeben 0° oder 180°.

## Messungen verketten

Nachdem das Ergebnis erscheint, startet ein Klick sofort die nächste Messung — der geklickte Punkt wird zum neuen ersten Punkt. Der Befehl beendet sich nie automatisch, bis Sie `Escape` drücken.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| Was gemessen wird | Innenwinkel an einem Scheitelpunkt | Geradlinige Länge |
| Anzahl der Klicks | 3 | 2 |
| Ergebnisformat | `45.0000°` | `12.3456` (Einheiten) |
| Zeichenflächenvorschau | Zwei Linien vom Scheitelpunkt zu beiden Enden | Linie vom ersten Punkt zum Mauszeiger |
| Geeignet für | Öffnungswinkel zwischen zwei Merkmalen | Länge einer Lücke oder eines Segments |

## Koordinateneingabe

Statt zu klicken, geben Sie eine genaue Position für jeden der drei Punkte ein:

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
- Die Genauigkeit beträgt immer 4 Dezimalstellen in Grad.
