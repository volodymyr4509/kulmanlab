---
sidebar_position: 8
title: Spline CV-Befehl — B-Splines durch Platzieren von Kontrollpunkten zeichnen in KulmanLab CAD
description: Der Spline CV-Befehl zeichnet einen kubischen B-Spline durch Platzieren von Kontrollpunkten. Die Kurve wird zu den Punkten hingezogen, verläuft aber nur durch den ersten und letzten (eingespannte Knoten). Jeder CV-Griffpunkt kann nach der Platzierung gezogen werden, um die Kurve umzuformen. Vollständiger DXF-Durchlauf als SPLINE-Entitäten.
keywords: [CAD Spline-Befehl, B-Spline Kontrollpunkte, eingespannter Spline CAD, Spline zeichnen CAD, SPLINE DXF-Entität, Spline Griffpunkt-Bearbeitung, kulmanlab]
---

# Spline CV

Der `splinecv`-Befehl zeichnet einen **kubischen B-Spline** durch Platzieren von Kontrollpunkten (CVs). Die resultierende Kurve wird zu jedem CV hingezogen, verläuft aber nicht durch sie — ausgenommen beim allerersten und letzten Eckpunkt, wo **eingespannte Knoten** die Kurve exakt verankern. Dies gibt Ihnen intuitive Formkontrolle: Ziehen Sie einen Punkt, um die Kurve dorthin zu schieben, ohne sie zu zwingen, jeden Punkt zu berühren.

## Einen Spline durch Kontrollpunkte zeichnen

1. Geben Sie `splinecv` im Terminal ein oder klicken Sie auf die **Spline CV**-Schaltfläche in der Werkzeugleiste.
2. **Klicken Sie zum Platzieren von Kontrollpunkten** — jeder Klick fügt einen Punkt hinzu. Oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Koordinate.
3. Drücken Sie **Enter** zum Fertigstellen (mindestens 2 Punkte erforderlich).

```
  CV ●         ● CV
      \       /
       \     /    ← Kurve wird zu CVs hingezogen
        \   /         aber verläuft nicht durch sie
  CV ●   ●   ● CV (Start/Ende: Kurve berührt hier)
```

Die Live-Vorschau aktualisiert sich, wenn Sie den Cursor nach jedem Punkt bewegen, und zeigt, wie der Spline mit dem nächsten Punkt an der Cursorposition aussehen wird. Drücken Sie **Escape**, um alle platzierten Punkte zu verwerfen und zu beenden.

## Koordinateneingabe

Statt zu klicken, geben Sie eine exakte Position für jeden Kontrollpunkt ein:

1. Geben Sie den X-Wert ein.
2. Drücken Sie `,` — das Terminal zeigt `[X], [Y{Cursor}]`.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter**, um den Punkt zu platzieren.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Letztes eingegebenes Zeichen löschen |
| `Enter` | Eingegebene Koordinate bestätigen oder den Spline fertigstellen, wenn keine Eingabe aktiv ist und ≥ 2 Punkte vorhanden sind |
| `Escape` | Alle Punkte verwerfen und beenden |

## Griffpunkt-Bearbeitung — Umformen über Kontrollpunkte

Ein ausgewählter CV-Spline zeigt einen Griffpunkt pro Kontrollpunkt:

| Griffpunkt | Position | Funktion |
|------------|----------|----------|
| **Kontrollpunkt** | An jeder CV-Position | Ziehen zum Verschieben dieses CV — die Kurve formt sich zur neuen Position hin um |

Es gibt keinen „ganzen Spline verschieben"-Griffpunkt. Um den gesamten Spline zu verschieben, verwenden Sie den [Move](../move/)-Befehl.

## CV-Splines auswählen

| Methode | Verhalten |
|---------|-----------|
| **Klick** | Wählt aus, wenn der Klick nahe einem Punkt auf der Kurve landet |
| **Nach rechts ziehen** (streng) | Alle Abtastpunkte entlang der Kurve müssen innerhalb des Auswahlrahmens liegen |
| **Nach links ziehen** (schneidend) | Jeder Teil der Kurve, der die Auswahlrahmengrenze schneidet, wählt sie aus |

## Unterstützte Bearbeitungsbefehle

| Befehl | Auswirkung auf den Spline |
|--------|--------------------------|
| [Move](../move/) | Verschiebt alle Kontrollpunkte um denselben Versatz |
| [Copy](../copy/) | Erstellt einen identischen Spline an einer neuen Position |
| [Rotate](../rotate/) | Dreht alle CVs um den gewählten Basispunkt |
| [Mirror](../mirror/) | Spiegelt alle CVs an der Spiegelachse |
| [Scale](../scale/) | Skaliert alle CVs gleichmäßig vom Basispunkt aus |
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
| Kontrollpunkte | Koordinaten aller CVs |
| Fit-Punkte | Leer bei CV-Splines; nur bei Fit-Punkt-Splines befüllt |

## Spline CV vs. Spline Fit — welchen verwenden?

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Kurve verläuft durch Punkte | Nur ersten und letzten (eingespannt) | Jeden geklickten Punkt exakt |
| Formkontrolle | CVs zu einem Bereich ziehen | Fit-Punkte verschieben, durch die die Kurve verlaufen muss |
| Griffpunkt-Bearbeitungseffekt | CV verschiebt sich → Kurve wird hingezogen | Fit-Punkt verschiebt sich → Kurve wird neu interpoliert |
| Optimal für | Glatte ästhetische Kurven, Freiform-Pfade | Kurven, die bestimmte Koordinaten treffen müssen |

## DXF — SPLINE-Entität (Kontrollpunktform)

CV-Splines werden als `SPLINE`-Entitäten in der DXF-Datei gespeichert, wobei Grad, Knotenvektor und alle Kontrollpunktkoordinaten gespeichert werden. Alle Eigenschaften — Farbe, Layer, Linientyp, Linientyp-Skalierung und Stärke — werden verlustfrei übertragen. Der `splineFlag` wird auf `9` (CV-Spline) gesetzt, sodass die Form beim Neuladen erhalten bleibt. Jede DXF-Anwendung, die `SPLINE`-Entitäten mit CV-Daten unterstützt, liest diese korrekt.
