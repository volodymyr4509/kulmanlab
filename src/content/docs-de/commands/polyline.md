---
sidebar_position: 2
title: Befehl polyline — Mehrsegment-Pfade als einzelne Entität zeichnen in KulmanLab CAD
description: Der Befehl polyline zeichnet beliebig viele verbundene Segmente, die als eine LWPOLYLINE-Entität gespeichert werden. Scheitelpunkt- und Segment-Mittelpunkt-Griffpunkte ermöglichen die Umformung jedes Teils des Pfades nach der Erstellung. Unterstützt offset; unterstützt kein trim oder extend.
keywords: [CAD polyline Befehl, Polylinie zeichnen CAD, mehrsegmentiger Pfad CAD, LWPOLYLINE DXF, Polylinie umformen, Scheitelpunkt-Griffpunkt CAD, Polylinie versetzen, kulmanlab]
---

# Polyline

Der Befehl `polyline` zeichnet einen verbundenen Pfad aus beliebig vielen geraden Segmenten, der als eine einzige `LWPOLYLINE`-Entität gespeichert wird. Da der gesamte Pfad ein Objekt ist, wählt das Auswählen alle Segmente gleichzeitig aus — verschieben, drehen oder skalieren Sie die gesamte Form in einem einzigen Vorgang. Dies ist der wesentliche Unterschied zu verketteten [Linien](./line), wo jedes Segment eine unabhängige Entität ist.

Polylinien können auch **geschlossen** werden: Der Befehl [Rectangle](./rectangle) verwendet dieselbe `LWPOLYLINE`-Entität mit einem gesetzten Schließen-Flag.

## Eine Polylinie zeichnen

1. Geben Sie `polyline` im Terminal ein oder klicken Sie auf die Schaltfläche **Polyline** in der Symbolleiste.
2. **Klicken Sie auf den ersten Punkt** oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
3. **Klicken Sie auf jeden weiteren Punkt** — jeder Klick fügt ein Segment hinzu. Koordinateneingabe funktioniert bei jedem Schritt.
4. Drücken Sie **Enter** oder **Space** zum Beenden (erfordert mindestens 2 platzierte Punkte).

```
  ●──────●
  1.     2.
          \
           \  Segment 3 (im Gange — Cursor hier)
            ●  ← klicken zum Hinzufügen, Enter/Space zum Beenden
```

Das Drücken von **Escape** jederzeit verwirft alle platzierten Punkte und beendet den Befehl.

## Koordinateneingabe

Anstatt zu klicken, geben Sie eine genaue Position für jeden Scheitelpunkt ein:

1. Geben Sie den X-Wert ein.
2. Drücken Sie `,` — das Terminal zeigt `[X], [Y{cursor}]`.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter**, um den Scheitelpunkt zu platzieren.

## Winkelsperre und genaue Segmentlänge

Dieselbe 45°-Einrastlogik wie beim Befehl [Line](./line#angle-locking-and-exact-length-input) gilt zwischen zwei aufeinanderfolgenden Punkten. Bei gesperrter Achse:

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zur Segmentlänge anhängen |
| `-` | Negative Länge — kehrt die Richtung entlang der Achse um (nur als erstes Zeichen) |
| `Backspace` | Letztes getipptes Zeichen löschen |
| `Enter` | Nächsten Punkt in der getippten Entfernung platzieren |

Die aktuell angesammelte Länge erscheint in Echtzeit in der Terminal-Eingabeaufforderung. Das Klicken bei gesperrter Achse projiziert auf die Achse, sodass der neue Scheitelpunkt genau auf ihr liegt.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten oder Segmentlänge bei Winkelsperre |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Letztes getipptes Zeichen löschen |
| `Enter` | Getippte Koordinate oder Länge bestätigen, oder Polylinie beenden wenn nichts getippt und ≥ 2 Punkte vorhanden |
| `Space` | Polylinie beenden (wie Enter, wenn keine Eingabe läuft) |
| `Escape` | Alle Punkte verwerfen und beenden |

## Griffpunkt-Bearbeitung — Scheitelpunkte und Segment-Mittelpunkte

Eine ausgewählte Polylinie zeigt zwei Arten von Griffpunkten:

| Griffpunkt | Position | Funktion |
|------------|----------|----------|
| **Scheitelpunkt** | An jedem platzierten Punkt | Ziehen zum Neupositionieren dieses Scheitelpunkts; alle verbundenen Segmente strecken sich mit |
| **Segment-Mittelpunkt** | Mitte jedes Segments | Ziehen zum Verschieben **beider** Endpunkte dieses Segments zusammen, wobei Segmentlänge und Winkel erhalten bleiben |

Der Segment-Mittelpunkt-Griffpunkt ist einzigartig für Polylinien — er ermöglicht das seitliche Verschieben eines einzelnen Segments ohne Längenänderung. Bei einer [Linie](./line) aktiviert der Mittelpunkt-Griffpunkt stattdessen den Move-Befehl für die gesamte Entität.

Es gibt keinen einzelnen Griffpunkt zum „Verschieben der gesamten Polylinie". Um den gesamten Pfad zu verschieben, verwenden Sie den Befehl [Move](./move).

## Polylinien auswählen

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Wählt die Polylinie aus, wenn der Klick innerhalb des Trefferbereichs eines Segments liegt |
| **Rechts ziehen** (streng) | Alle Scheitelpunkte müssen innerhalb des Rahmens liegen |
| **Links ziehen** (schneidend) | Jedes Segment, das die Rahmengrenze schneidet, wählt die gesamte Polylinie aus |

Da eine Polylinie eine Entität ist, wählt eine schneidende Auswahl, die ein beliebiges Segment berührt, alle Segmente aus.

## Unterstützte Bearbeitungsbefehle

Polylinien unterstützen alle allgemeinen Transformationen und offset, aber **nicht** trim oder extend (diese sind nur für [Linie](./line)):

| Befehl | Wirkung auf die Polylinie |
|--------|--------------------------|
| [Move](./move) | Verschiebt alle Scheitelpunkte um die gleiche Verschiebung |
| [Copy](./copy) | Erstellt eine identische Polylinie an einer neuen Position |
| [Rotate](./rotate) | Dreht alle Scheitelpunkte um den gewählten Basispunkt |
| [Mirror](./mirror) | Spiegelt alle Scheitelpunkte über die Spiegelachse |
| [Scale](./scale) | Skaliert alle Scheitelpunkte gleichmäßig vom Basispunkt aus |
| [Offset](./offset) | Erstellt eine parallele Polylinie in einem festen senkrechten Abstand |
| [Delete](./delete) | Entfernt die Polylinie aus der Zeichnung |

## Eigenschaften

Wenn eine Polylinie ausgewählt ist, zeigt das Eigenschaftenpanel:

**Allgemein**

| Eigenschaft | Standard | Bedeutung |
|-------------|---------|-----------|
| Farbe | 256 (ByLayer) | ACI-Farbindex |
| Layer | `0` | Layer-Zuweisung |
| Linientyp | ByLayer | Benanntes Linientypenmuster |
| Linientypskala | 1 | Skalierungsfaktor des Linientypmusters |
| Dicke | 0 | Extrusionsdicke |

**Geometrie**

| Eigenschaft | Bedeutung |
|-------------|-----------|
| Geschlossen | Ob der letzte Scheitelpunkt mit dem ersten verbindet |
| Scheitelpunktanzahl | Gesamtzahl der Scheitelpunkte |
| Scheitelpunkte | Koordinatenliste aller Scheitelpunkte |

## Polylinie vs. Linie — wann welche verwenden

| | Polylinie | Linie |
|---|----------|-------|
| Entitätsanzahl | Eine `LWPOLYLINE` für den gesamten Pfad | Eine `LINE` pro Segment |
| Geschlossene Form | Ja (Schließen-Flag) | Nein |
| Trim / Extend | Nein | Ja — Segment für Segment |
| Segment-Mittelpunkt-Griffpunkt | Verschiebt das gesamte Segment | Aktiviert Move für die Entität |
| Am besten für | Umrisse, Konturen, Formen, die ganz bleiben | Konstruktionslinien, Geometrie zum Trimmen |

## DXF — LWPOLYLINE-Entität

Polylinien werden als `LWPOLYLINE`-Entitäten in der DXF-Datei gespeichert. Alle Eigenschaften — Scheitelpunktkoordinaten, Schließen-Flag, Farbe, Layer, Linientyp, Linientypskala und Dicke — machen den Roundtrip verlustfrei. Mit dem Befehl [Rectangle](./rectangle) gezeichnete Rechtecke werden ebenfalls als `LWPOLYLINE` (geschlossen, vier Scheitelpunkte) gespeichert und sind auf DXF-Ebene nicht zu unterscheiden.

`LWPOLYLINE`-Entitäten aus jeder DXF-kompatiblen Anwendung (LibreCAD, FreeCAD usw.) werden als vollständig bearbeitbare Polylinien im Editor eingelesen.
