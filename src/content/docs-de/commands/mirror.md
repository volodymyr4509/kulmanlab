---
title: Befehl mirror — Entitäten über eine Zwei-Punkt-Achse spiegeln
description: Der Befehl mirror spiegelt ausgewählte Entitäten über eine durch zwei Klicks definierte Spiegelachse. Die Originale bleiben immer erhalten — mirror erstellt neue gespiegelte Kopien. Die Spiegelachse kann in jedem Winkel liegen und rastet in 45°-Schritten ein.
keywords: [CAD mirror Befehl, Entitäten spiegeln CAD, Spiegelsymmetrie CAD, Objekte spiegeln CAD, Spiegelachse CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Der Befehl `mirror` erstellt gespiegelte Kopien ausgewählter Entitäten, die über eine Zwei-Punkt-Achse reflektiert werden. Die Originale bleiben **immer erhalten** — im Gegensatz zu [Move](../move/) oder [Rotate](../rotate/) verändert mirror keine vorhandenen Entitäten; es werden nur neue hinzugefügt.

## Zwei Möglichkeiten zum Starten

**Zuerst auswählen, dann spiegeln** — wählen Sie zuerst Entitäten aus und aktivieren Sie dann den Befehl:

1. Wählen Sie eine oder mehrere Entitäten auf der Zeichenfläche aus.
2. Geben Sie `mirror` im Terminal ein oder klicken Sie auf die Schaltfläche **Mirror** in der Symbolleiste.
3. **Klicken Sie auf den ersten Punkt** der Spiegelachse oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
4. **Klicken Sie auf den zweiten Punkt** — gespiegelte Kopien werden platziert und der Befehl endet. Koordinateneingabe funktioniert hier ebenfalls.

**Aktivieren, dann auswählen** — Befehl ohne Auswahl starten:

1. Geben Sie `mirror` ein oder klicken Sie auf die Schaltfläche in der Symbolleiste.
2. **Objekte auswählen** — klicken zum Umschalten oder ziehen zur Flächenauswahl.
3. Drücken Sie **Enter** oder **Space** zur Bestätigung der Auswahl.
4. **Klicken Sie auf den ersten Punkt**, dann **klicken Sie auf den zweiten Punkt** der Spiegelachse (Koordinateneingabe bei beiden Schritten verfügbar).

```
  Original:          Spiegelachse:       Ergebnis:
                     |
  [Entität A]   →    |    →    [Entität A] + [gespiegelte A]
                     |
```

Eine Live-Vorschau der gespiegelten Kopien folgt dem Cursor, während Sie den zweiten Achsenpunkt positionieren.

## Spiegelachse

Die Achse ist eine unendliche Linie durch die zwei angeklickten Punkte. Sie kann in jedem Winkel liegen:

- Bewegen Sie den Cursor nah an eine **45°-Einrastachse** (0°, 45°, 90°, 135°, …) und die Achse rastet auf diesen Winkel ein — nützlich für saubere horizontale, vertikale oder diagonale Spiegelungen.
- Klicken Sie außerhalb der Einrastzone für eine freie Winkelachse.

## Koordinateneingabe

Bei jedem Achsenpunkt-Schritt können Sie eine genaue Position anstelle eines Klicks eingeben:

1. Geben Sie den X-Wert ein.
2. Drücken Sie `,` — das Terminal zeigt `[X], [Y{cursor}]`.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter** zum Bestätigen.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Auswahl bestätigen |
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Letztes getipptes Zeichen löschen |
| `Enter` | Getippte Koordinate bestätigen |
| `Escape` | Abbrechen und zurücksetzen |

## Auswahl während des Befehls

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Schaltet die Entität unter dem Cursor um |
| **Rechts ziehen** (streng) | Fügt vollständig innerhalb des Rahmens liegende Entitäten hinzu |
| **Links ziehen** (schneidend) | Fügt Entitäten hinzu, die den Rahmen schneiden |
| **Enter** / **Space** | Bestätigt die Auswahl |

## Was gespiegelt wird

Jeder Entitätstyp wird unterstützt. Geometrie wird mathematisch über die Achse reflektiert:

| Entität | Was sich ändert |
|---------|----------------|
| Linie | Beide Endpunkte gespiegelt |
| Kreis | Mittelpunkt gespiegelt; Radius unverändert |
| Bogen | Mittelpunkt gespiegelt; Start- und Endwinkel über die Achse neu berechnet |
| Ellipse | Mittelpunkt gespiegelt; Richtung der Hauptachse über die Achse gespiegelt |
| Polylinie / Rechteck | Jeder Scheitelpunkt gespiegelt |
| Text | Ankerpunkt gespiegelt; Textzeichenkette wird **nicht** umgekehrt |
| Spline | Alle Kontrollpunkte / Anpasspunkte gespiegelt |

## mirror vs. copy

| | mirror | copy |
|---|--------|------|
| Originale | Immer erhalten | Immer erhalten |
| Neue Entitätsposition | Über eine Achse reflektiert | Um einen Verschiebungsvektor versetzt |
| Am besten für | Symmetrische Designs, bilaterale Merkmale | Geometrie in beliebiger Richtung wiederholen |
