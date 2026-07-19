---
title: Rectangle-Befehl — Achsenparallele Rechtecke zeichnen
description: Der Rectangle-Befehl erstellt ein achsenparalleles Rechteck aus zwei gegenüberliegenden Ecken. Das Ergebnis ist eine geschlossene LWPOLYLINE mit vier Eckpunkten — nach dem Platzieren identisch mit jeder anderen Polylinie, sodass alle Polylinie-Bearbeitungsbefehle anwendbar sind.
keywords: [CAD Rectangle-Befehl, Rechteck zeichnen CAD, achsenparalleles Rechteck, geschlossene Polylinie CAD, LWPOLYLINE DXF, Rechteck Griffpunkt-Bearbeitung, kulmanlab]
group: shapes
order: 3
---

# Rectangle

Der `rectangle`-Befehl zeichnet ein achsenparalleles Rechteck, das durch zwei gegenüberliegende Eckenklicks definiert wird. Das Ergebnis wird als **geschlossene `LWPOLYLINE`** mit vier Eckpunkten gespeichert — je einem an jeder Ecke. Es gibt keinen dedizierten Rechteck-Entitätstyp: Nach der Erstellung verhält sich die Form genau wie jede andere [Polylinie](../polyline/), und alle Polylinie-Bearbeitungsbefehle sind anwendbar.

## Ein Rechteck zeichnen

1. Geben Sie `rectangle` im Terminal ein oder klicken Sie auf die **Rectangle**-Schaltfläche in der Werkzeugleiste.
2. **Klicken Sie die erste Ecke** an, oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Koordinate.
3. **Klicken Sie die gegenüberliegende Ecke** an — das Rechteck wird sofort platziert und der Befehl beendet. Koordinateneingabe funktioniert hier ebenfalls.

```
  ● (erster Klick)────────────┐
  |                            |
  |   Live-Vorschau folgt      |
  |   dem Cursor nach Schritt 2|
  └────────────────────────────● (zweiter Klick)
```

Die beiden Klicks können ein beliebiges Paar diagonal gegenüberliegender Ecken sein — oben-links + unten-rechts oder unten-links + oben-rechts usw. Die Reihenfolge spielt keine Rolle.

## Koordinateneingabe

Bei jedem Eckenschritt können Sie eine exakte Position eingeben:

1. Geben Sie den X-Wert ein.
2. Drücken Sie `,` — das Terminal zeigt `[X], [Y{Cursor}]`.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter**, um die Ecke zu platzieren.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Enter` | Eingegebene Koordinate bestätigen |
| `Escape` | Abbrechen |

Die Seiten sind immer horizontal und vertikal — für den Rectangle-Befehl gibt es keine Winkelsperre.

## Griffpunkt-Bearbeitung — Nachträgliches Umformen

Ein ausgewähltes Rechteck zeigt Griffpunkte an jedem Eckpunkt und am Mittelpunkt jeder Seite:

| Griffpunkt | Position | Funktion |
|------------|----------|----------|
| **Ecke** | Jeder der 4 Eckpunkte | Ziehen zum Verschieben dieses Eckpunkts; die beiden angrenzenden Seiten dehnen sich mit — die gegenüberliegende Ecke bleibt fest |
| **Seitenmittelpunkt** | Mitte jeder der 4 Seiten | Ziehen zum gemeinsamen Verschieben beider Endpunkte dieser Seite, wobei Länge und Winkel der Seite erhalten bleiben |

Das Ziehen eines Ecken-Griffpunkts verwandelt das Rechteck in ein nicht-rechteckiges Viereck. Wenn Sie nur ein Rechteck in einer anderen Größe benötigen, ziehen Sie eine Ecke, während Sie die Seiten annähernd orthogonal halten, oder löschen Sie es und zeichnen Sie ein neues.

## Rechtecke auswählen

Da das Rechteck eine Polylinie ist, funktioniert die Auswahl auf die gleiche Weise:

| Methode | Verhalten |
|---------|-----------|
| **Klick** | Wählt aus, wenn der Klick auf einer der vier Seiten landet |
| **Nach rechts ziehen** (streng) | Alle vier Eckpunkte müssen innerhalb des Auswahlrahmens liegen |
| **Nach links ziehen** (schneidend) | Jede Seite, die die Rahmengrenze schneidet, wählt das gesamte Rechteck aus |

## Unterstützte Bearbeitungsbefehle

Alle Polylinie-Bearbeitungsbefehle sind anwendbar. Trim und Extend sind nur für [Line](../line/) verfügbar und funktionieren nicht bei Rechtecken:

| Befehl | Auswirkung auf das Rechteck |
|--------|-----------------------------|
| [Move](../move/) | Verschiebt alle vier Eckpunkte um denselben Versatz |
| [Copy](../copy/) | Erstellt ein identisches Rechteck an einer neuen Position |
| [Rotate](../rotate/) | Dreht alle vier Eckpunkte um den gewählten Basispunkt |
| [Mirror](../mirror/) | Spiegelt alle vier Eckpunkte an der Spiegelachse |
| [Scale](../scale/) | Skaliert alle vier Eckpunkte gleichmäßig vom Basispunkt aus |
| [Offset](../offset/) | Erstellt ein paralleles (nach innen oder außen versetztes) Rechteck in einem festen Abstand |
| [Delete](../delete/) | Entfernt das Rechteck aus der Zeichnung |

## Eigenschaften

Wenn ein Rechteck ausgewählt ist, zeigt das Eigenschaftenpanel dieselben Felder wie bei jeder Polylinie:

**Allgemein**

| Eigenschaft | Standard | Bedeutung |
|-------------|----------|-----------|
| Farbe | 256 (ByLayer) | ACI-Farbindex |
| Layer | `0` | Layer-Zuweisung |
| Linientyp | ByLayer | Benanntes Linientypmusters |
| Linientyp-Skalierung | 1 | Skalierungsfaktor für das Linienmuster |
| Stärke | 0 | Extrusionsstärke |

**Geometrie**

| Eigenschaft | Bedeutung |
|-------------|-----------|
| Geschlossen | Immer `true` für ein Rechteck |
| Anzahl der Eckpunkte | Immer `4` für ein unverändertes Rechteck |
| Eckpunkte | Koordinaten aller vier Ecken |

## Rectangle vs. Polylinie vs. Line

| | Rectangle | Polylinie | Line |
|---|-----------|-----------|------|
| Zeichenmethode | 2 Klicks (Ecken) | Jeden Eckpunkt anklicken | Jeden Endpunkt anklicken |
| Entitätstyp | Geschlossene `LWPOLYLINE` | Offene oder geschlossene `LWPOLYLINE` | `LINE` pro Segment |
| Seiten immer orthogonal | Ja (bei Erstellung) | Nein | Nein |
| Trim / Extend | Nein | Nein | Ja |
| Optimal für | Kästen, Rahmen, rechteckige Flächen | Beliebige Umrisse und Pfade | Einzelne Segmente, Hilfslinien |

## DXF — LWPOLYLINE-Entität

Rechtecke werden als geschlossene `LWPOLYLINE`-Entitäten mit vier Eckpunkten gespeichert. Alle Eigenschaften — Eckpunktkoordinaten, Farbe, Layer, Linientyp, Linientyp-Skalierung und Stärke — werden verlustfrei übertragen.

Es gibt keinen dedizierten `RECTANGLE`-Typ in DXF. Wenn eine Datei erneut geöffnet wird, erscheint die Form als geschlossene Vier-Eckpunkt-Polylinie statt als Rechteck. Jeder DXF-Viewer oder -Editor, der `LWPOLYLINE` unterstützt (LibreCAD, FreeCAD usw.), zeigt sie korrekt an.
