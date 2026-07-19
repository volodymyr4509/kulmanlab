---
title: Dimension Linear-Befehl — Horizontale und vertikale Bemaßungen
description: Der Dimension Linear-Befehl misst den horizontalen oder vertikalen Abstand zwischen zwei Punkten. Die Bemaßungslinie ist immer achsenparallel — drücken Sie H oder V, um die Ausrichtung zu sperren, oder lassen Sie die Mauszeiger-Position automatisch entscheiden. Vollständiger DXF-Austausch als DIMENSION-Elemente.
keywords: [CAD-Linearbemaßung, horizontale Bemaßung CAD, vertikale Bemaßung CAD, dimlinear, H-V-Ausrichtungssperre, Bemaßungsversatz, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

Der `dimlinear`-Befehl platziert eine horizontale oder vertikale Bemaßung zwischen zwei Maßhilfslinien-Ursprüngen. Die Bemaßungslinie verläuft immer entweder vollkommen horizontal oder vollkommen vertikal — sie kann nicht in einem beliebigen Winkel platziert werden. Verwenden Sie [Dimension Aligned](../dim-aligned/), wenn Sie eine Bemaßung parallel zu einer diagonalen Linie benötigen.

## Aufbau einer linearen Bemaßung

```
  |←————— 5.00 —————→|
  |                   |
  ●  (Maßhilfslinie 1)     ●  (Maßhilfslinie 2)
  p1                  p2
```

- **Maßhilfslinien** — fallen von jedem gemessenen Punkt senkrecht zur Bemaßungslinie ab.
- **Bemaßungslinie** — horizontal (misst X-Abstand) oder vertikal (misst Y-Abstand).
- **Wert** — der projizierte Abstand entlang der gewählten Achse, nicht der wahre Punkt-zu-Punkt-Abstand.

## Eine lineare Bemaßung platzieren

1. Geben Sie `dimlinear` im Terminal ein oder klicken Sie auf die Schaltfläche **Dimension Linear** in der Symbolleiste.
2. **Ursprung der ersten Maßhilfslinie klicken** (p1), oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
3. **Ursprung der zweiten Maßhilfslinie klicken** (p2). Koordinateneingabe funktioniert hier ebenfalls.
4. **Mauszeiger bewegen**, um die Bemaßungslinie zu positionieren. Die Ausrichtung wird automatisch anhand der Mauszeiger-Position erkannt.
5. **Klicken**, um zu platzieren, oder einen Versatzabstand eingeben und **Enter** drücken für genaue Platzierung.

## Automatische Ausrichtungserkennung

Wenn keine Ausrichtung erzwungen wird, liest der Befehl die Mauszeiger-Position relativ zu den zwei gemessenen Punkten:

| Mauszeiger-Position | Erkannte Ausrichtung | Was gemessen wird |
|---------------------|---------------------|------------------|
| Ober- oder unterhalb der Punkte | Horizontal | Δ X zwischen p1 und p2 |
| Links oder rechts der Punkte | Vertikal | Δ Y zwischen p1 und p2 |

Drücken Sie **H**, um horizontal zu sperren, oder **V**, um vertikal zu sperren, jederzeit während der Platzierungsphase. Einmal gesperrt, ändert sich die Ausrichtung nicht mehr, wenn Sie den Mauszeiger bewegen.

## Eingegebener Versatzabstand

Eine Zahl während der Platzierung eingeben, um die Bemaßungslinie bei einem genauen Abstand von den gemessenen Punkten zu fixieren:

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zum Versatzabstand hinzufügen |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` / `Space` | Beim eingegebenen Abstand platzieren |

Die Mauszeiger-Seite (ober-/unterhalb für horizontal, links/rechts für vertikal) bestimmt das Vorzeichen — die Bemaßungslinie erscheint auf der Seite, auf der sich der Mauszeiger aktuell befindet.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten (p1/p2-Phasen) oder Versatzabstand (Platzierungsphase) |
| `,` | X sperren und zu Y-Eingabe wechseln (p1/p2-Phasen) |
| `H` | Horizontale Ausrichtung sperren (nur Platzierungsphase) |
| `V` | Vertikale Ausrichtung sperren (nur Platzierungsphase) |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` / `Space` | Eingegebene Koordinate oder Versatz bestätigen |
| `Escape` | Abbrechen |

## Dimension Linear vs Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Achse | Immer H oder V | Parallel zur gemessenen Linie |
| Misst | Nur X- oder Y-Komponente | Tatsächlichen euklidischen Abstand |
| H/V-Tasten | Ja — Ausrichtung sperren | Nein — folgt immer p1→p2 |
| Geeignet für | Orthogonale Layouts, Grundrisse | Diagonale Merkmale, angewinkelte Schnitte |

## Beschriftung bearbeiten — simple mode

**Doppelklicken** Sie auf eine platzierte lineare Bemaßung, um den Texteditor im **simple** mode zu öffnen. Der Editor ist mit dem aktuellen angezeigten Wert vorbelegt, sodass Sie den Cursor positionieren und ihn direkt bearbeiten können.

| Feature | Verhalten |
|---------|-----------|
| Bold / Italic / Font / Height | Gilt für die **gesamte** Beschriftung auf einmal |
| Zeichenweise Formatierung | Nicht unterstützt |
| `Enter` | Übernimmt den Wert und schließt den Editor |
| Mehrzeilig | Nicht unterstützt |

Siehe [Texteditor — simple mode](../../interface/text-editor/#simple-mode) für die vollständige Referenz.

## Bemaßungen verketten

Um weitere Bemaßungen ab der letzten Maßhilfslinie fortzusetzen, verwenden Sie [Dimension Continue](../dim-continue/) unmittelbar nach dem Platzieren dieser Bemaßung.

## DXF — DIMENSION-Element

Lineare Bemaßungen werden als `DIMENSION`-Elemente mit `rotationDeg` gespeichert, das auf `0` (horizontal) oder `90` (vertikal) gesetzt ist. Maßhilfslinien-Ursprünge, Bemaßungslinienposition, Textposition, gemessener Wert, Pfeilstil, Texthöhe und alle Anzeigeflags werden verlustfrei übertragen.
