---
sidebar_position: 9
title: Spline Fit-Befehl — Interpolierende Splines durch geklickte Punkte zeichnen in KulmanLab CAD
description: Der Spline Fit-Befehl zeichnet einen kubischen Spline, der exakt durch jeden geklickten Punkt verläuft. Intern wird die Kurve sowohl mit Fit-Punkten als auch mit berechneten Kontrollpunkten gespeichert. Das Ziehen eines Fit-Punkt-Griffpunkts interpoliert die gesamte Kurve neu. Vollständiger DXF-Durchlauf als SPLINE-Entitäten.
keywords: [CAD Spline Fit-Befehl, interpolierender Spline CAD, Spline durch Punkte, glatte Kurve zeichnen CAD, SPLINE DXF Fit-Punkte, Spline Griffpunkt-Bearbeitung, kulmanlab]
---

# Spline Fit

Der `splinefit`-Befehl zeichnet einen kubischen Spline, der durch jeden von Ihnen geklickten Punkt verläuft — eine interpolierende Kurve. Im Gegensatz zu [Spline CV](../spline-cv/), wo die Kurve nur zu Kontrollpunkten hingezogen wird, wird die Kurve hier gezwungen, jede geklickte Koordinate exakt zu treffen. Intern berechnet der Editor Kontrollpunkte, um dies zu erreichen, und diese CVs werden zusammen mit den Fit-Punkten in der DXF-Datei gespeichert.

## Einen Spline durch Fit-Punkte zeichnen

1. Geben Sie `splinefit` im Terminal ein oder klicken Sie auf die **Spline Fit**-Schaltfläche in der Werkzeugleiste.
2. **Klicken Sie zum Platzieren von Fit-Punkten** — die Kurve wird durch jeden verlaufen. Oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Koordinate.
3. Drücken Sie **Enter** zum Fertigstellen (mindestens 2 Punkte erforderlich).

```
  ●──────●──────●──────●  ← Kurve verläuft exakt durch jeden Klick
  p1     p2     p3     p4
```

Die Live-Vorschau zeigt die aktuelle interpolierte Kurve, wenn Sie den Cursor bewegen, einschließlich des voraussichtlichen nächsten Punkts an der Cursorposition. Drücken Sie **Escape**, um alle platzierten Punkte zu verwerfen und zu beenden.

## Koordinateneingabe

Statt zu klicken, geben Sie eine exakte Position für jeden Fit-Punkt ein:

1. Geben Sie den X-Wert ein.
2. Drücken Sie `,` — das Terminal zeigt `[X], [Y{Cursor}]`.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter**, um den Fit-Punkt zu platzieren.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Letztes eingegebenes Zeichen löschen |
| `Enter` | Eingegebene Koordinate bestätigen oder den Spline fertigstellen, wenn keine Eingabe aktiv ist und ≥ 2 Punkte vorhanden sind |
| `Escape` | Alle Punkte verwerfen und beenden |

## Griffpunkt-Bearbeitung — Umformen über Fit-Punkte

Ein ausgewählter Fit-Spline zeigt einen Griffpunkt pro Fit-Punkt:

| Griffpunkt | Position | Funktion |
|------------|----------|----------|
| **Fit-Punkt** | An jeder geklickten Position | Ziehen zum Verschieben dieses Fit-Punkts — die gesamte Kurve wird neu interpoliert, um durch die neue Position zu verlaufen |

Das Ziehen eines Griffpunkts passt die gesamte Kurve neu an, nicht nur die angrenzenden Segmente. Dies unterscheidet sich von der Polylinie-Griffpunkt-Bearbeitung, bei der das Verschieben eines Eckpunkts nur die zwei angrenzenden Segmente umformt.

Es gibt keinen „ganzen Spline verschieben"-Griffpunkt. Um den gesamten Spline zu verschieben, verwenden Sie den [Move](../move/)-Befehl.

## Fit-Splines auswählen

| Methode | Verhalten |
|---------|-----------|
| **Klick** | Wählt aus, wenn der Klick nahe einem Punkt auf der Kurve landet |
| **Nach rechts ziehen** (streng) | Alle Abtastpunkte entlang der Kurve müssen innerhalb des Auswahlrahmens liegen |
| **Nach links ziehen** (schneidend) | Jeder Teil der Kurve, der die Auswahlrahmengrenze schneidet, wählt sie aus |

## Unterstützte Bearbeitungsbefehle

| Befehl | Auswirkung auf den Spline |
|--------|--------------------------|
| [Move](../move/) | Verschiebt alle Fit-Punkte und neu berechneten CVs um denselben Versatz |
| [Copy](../copy/) | Erstellt einen identischen Spline an einer neuen Position |
| [Rotate](../rotate/) | Dreht alle Fit-Punkte um den gewählten Basispunkt |
| [Mirror](../mirror/) | Spiegelt alle Fit-Punkte an der Spiegelachse |
| [Scale](../scale/) | Skaliert alle Fit-Punkte gleichmäßig vom Basispunkt aus |
| [Delete](../delete/) | Entfernt den Spline |

Splines unterstützen weder **Offset**, **Trim** noch **Extend**.

## Eigenschaften

**Allgemein**

| Eigenschaft | Standard | Bedeutung |
|-------------|----------|-----------|
| Farbe | 256 (ByLayer) | ACI-Farbindex |
| Layer | `0` | Layer-Zuweisung |
| Linientyp | ByLayer | Benanntes Linienmuster |
| Linientyp-Skalierung | 1 | Skalierungsfaktor für das Linienmuster |
| Stärke | 0 | Extrusionsstärke |

**Geometrie**

| Eigenschaft | Bedeutung |
|-------------|-----------|
| Grad | Polynomgrad — immer 3 (kubisch) |
| Fit-Punkte | Koordinaten aller geklickten Durchlaufpunkte |
| Kontrollpunkte | Intern berechnete CVs zum Rendern der Kurve |

## Spline Fit vs. Spline CV — welchen verwenden?

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Kurve verläuft durch Punkte | Jeden geklickten Punkt exakt | Nur ersten und letzten (eingespannt) |
| Griffpunkt-Bearbeitungseffekt | Fit-Punkt verschiebt sich → gesamte Kurve wird neu interpoliert | CV verschiebt sich → Kurve wird zur neuen Position hingezogen |
| Formvorhersagbarkeit | Hoch — Kurve folgt Klicks | Geringer — Kurve bleibt hinter CVs zurück |
| Optimal für | Kurven, die bestimmte Koordinaten treffen müssen | Glatte ästhetische Kurven, Freiform-Pfade |

## DXF — SPLINE-Entität (Fit-Punktform)

Fit-Splines werden als `SPLINE`-Entitäten in der DXF-Datei gespeichert und speichern sowohl die Fit-Punktkoordinaten als auch die berechneten Kontrollpunkte. Der `splineFlag` wird auf `8` (Fit-Punkt-Spline) gesetzt, damit eine neu ladende Anwendung weiß, welche Punktmenge als bearbeitbare Griffpunkte angezeigt werden soll. Alle Eigenschaften — Farbe, Layer, Linientyp, Linientyp-Skalierung und Stärke — werden verlustfrei übertragen. DXF-Anwendungen, die Fit-Punkt-Splines unterstützen (LibreCAD, FreeCAD), zeigen die Fit-Punkte als primär bearbeitbare Daten an.
