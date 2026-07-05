---
sidebar_position: 14
title: Dimension Aligned-Befehl — Wahre Abstands-Bemaßungen in beliebigem Winkel in KulmanLab CAD
description: Der Dimension Aligned-Befehl misst den tatsächlichen geradlinigen Abstand zwischen zwei Punkten. Die Bemaßungslinie verläuft parallel zur p1→p2-Linie in beliebigem Winkel — anders als Dimension Linear, das auf horizontal oder vertikal beschränkt ist. Vollständiger DXF-Austausch als DIMENSION-Elemente.
keywords: [CAD Bemaßung ausgerichtet, dimaligned, diagonale Bemaßung CAD, wahre Abstandsbemaßung, angewinkelte Bemaßung CAD, kulmanlab]
---

# Dimension Aligned

Der `dimaligned`-Befehl platziert eine Bemaßung, die den **tatsächlichen geradlinigen Abstand** zwischen zwei Punkten misst. Die Bemaßungslinie verläuft parallel zur die beiden Punkte verbindenden Linie, sodass sie in beliebigem Winkel stehen kann. Dies ist der wesentliche Unterschied zu [Dimension Linear](../dim-linear/), das auf horizontal oder vertikal beschränkt ist.

## Aufbau einer ausgerichteten Bemaßung

```
     ●  p2
    /|
   / |  (Maßhilfslinie 2, senkrecht zur Bemaßungslinie)
  /  |
 /←5.00→/
/  /
●  /  (Maßhilfslinie 1, senkrecht zur Bemaßungslinie)
p1
```

- **Maßhilfslinien** — senkrecht zur Bemaßungslinie, von jedem gemessenen Punkt aus gezeichnet.
- **Bemaßungslinie** — parallel zu p1→p2, auf einer Seite versetzt durch die Mauszeiger-Position.
- **Wert** — der tatsächliche euklidische Abstand `|p1 – p2|`.

## Eine ausgerichtete Bemaßung platzieren

1. Geben Sie `dimaligned` im Terminal ein oder klicken Sie auf die Schaltfläche **Dimension Aligned** in der Symbolleiste.
2. **Ursprung der ersten Maßhilfslinie klicken** (p1), oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
3. **Ursprung der zweiten Maßhilfslinie klicken** (p2). Koordinateneingabe funktioniert hier ebenfalls.
4. **Mauszeiger bewegen**, um den senkrechten Versatz der Bemaßungslinie festzulegen.
5. **Klicken**, um zu platzieren, oder einen Versatzabstand eingeben und **Enter** drücken für genaue Platzierung.

## Eingegebener Versatzabstand

Eine Zahl während der Platzierung eingeben, um die Bemaßungslinie bei einem exakten senkrechten Abstand von der p1→p2-Linie zu fixieren:

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zum Versatz hinzufügen |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` / `Space` | Beim eingegebenen Versatz platzieren |

Die Mauszeiger-Seite bestimmt, auf welcher Seite die Bemaßungslinie erscheint.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten (p1/p2-Phasen) oder Versatzabstand (Platzierungsphase) |
| `,` | X sperren und zu Y-Eingabe wechseln (p1/p2-Phasen) |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` / `Space` | Eingegebene Koordinate oder Versatz bestätigen |
| `Escape` | Abbrechen |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Bemaßungslinienwinkel | Parallel zu p1→p2 — beliebiger Winkel | Immer horizontal oder vertikal |
| Misst | Tatsächlichen euklidischen Abstand | Nur X- oder Y-Komponente |
| H/V-Ausrichtungssperre | Nein | Ja — `H`- und `V`-Tasten |
| Geeignet für | Diagonale Merkmale, angewinkelte Schnitte | Orthogonale Layouts, rasterbezogene Teile |

## Beschriftung bearbeiten — simple mode

**Doppelklicken** Sie auf eine platzierte ausgerichtete Bemaßung, um den Texteditor im **simple** mode zu öffnen. Der Editor ist mit dem aktuellen angezeigten Wert vorbelegt, sodass Sie den Cursor positionieren und ihn direkt bearbeiten können.

| Feature | Verhalten |
|---------|-----------|
| Bold / Italic / Font / Height | Gilt für die **gesamte** Beschriftung auf einmal |
| Zeichenweise Formatierung | Nicht unterstützt |
| `Enter` | Übernimmt den Wert und schließt den Editor |
| Mehrzeilig | Nicht unterstützt |

Siehe [Texteditor — simple mode](../../interface/text-editor/#simple-mode) für die vollständige Referenz.

## Bemaßungen verketten

Um weitere Bemaßungen ab der zweiten Maßhilfslinie dieser Bemaßung fortzusetzen, verwenden Sie [Dimension Continue](../dim-continue/) — es sperrt auf den gleichen Messwinkel wie diese ausgerichtete Bemaßung.

## DXF — DIMENSION-Element (ausgerichteter Typ)

Ausgerichtete Bemaßungen werden als `DIMENSION`-Elemente mit `dimType = 1` (ausgerichtet) gespeichert. Ursprünge der Maßhilfslinien, Bemaßungslinienposition, Textposition, gemessener Wert, Drehung, Pfeilstil und alle Anzeigeflags werden verlustfrei übertragen.
