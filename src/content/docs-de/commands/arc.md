---
sidebar_position: 5
title: Arc-Befehl — Drei-Punkt-Bögen mit der Umkreismethode zeichnen in KulmanLab CAD
description: Der Arc-Befehl zeichnet einen Kreisbogen durch genau drei geklickte Punkte mithilfe der Umkreisgeometrie. Start- und End-Griffpunkte ermöglichen das Ziehen der Bogenendpunkte nach der Platzierung. Vollständiger DXF-Austausch als ARC-Elemente.
keywords: [CAD-Bogenbefehl, Drei-Punkt-Bogen CAD, Umkreis-Bogen, Bogen zeichnen CAD, ARC DXF-Element, Bogen-Griffpunkt-Bearbeitung, kulmanlab]
---

# Arc

Der `arc`-Befehl zeichnet einen Kreisbogen durch drei von Ihnen geklickte Punkte. Der Bogen wird als eindeutiger Umkreis berechnet, der alle drei Punkte passiert — Mittelpunkt oder Radius müssen nicht direkt angegeben werden. Der Bogen verläuft vom ersten Klick bis zum dritten Klick, wobei er durch den zweiten Klick geht.

## Einen Bogen zeichnen

1. Geben Sie `arc` im Terminal ein oder klicken Sie auf die Schaltfläche **Arc** in der Symbolleiste.
2. **Ersten Punkt klicken** — ein Ende des Bogens. Oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
3. **Zweiten Punkt klicken** — ein Punkt, durch den der Bogen verlaufen muss (steuert Krümmung und Richtung). Koordinateneingabe funktioniert hier ebenfalls.
4. **Dritten Punkt klicken** — das andere Ende des Bogens. Der Bogen wird platziert und der Befehl endet. Koordinateneingabe funktioniert hier ebenfalls.

```
           ● (2. Klick — Mittelpunkt auf der Kurve)
          / \
         /   \
        ●     ●
     1.       3.
```

Während Sie den dritten Punkt positionieren, verbindet eine Linienvorschau die ersten beiden Klicks. Ab dem zweiten Klick verfolgt eine Live-Bogenvorschau den Mauszeiger.

> **Kollineare Punkte**: Wenn alle drei Punkte auf einer Geraden liegen, kann der Bogen nicht berechnet werden und es wird kein Element platziert. Verschieben Sie den zweiten Punkt von der Linie weg und versuchen Sie es erneut.

## Koordinateneingabe

Bei jedem der drei Schritte können Sie eine genaue Position eingeben, anstatt zu klicken:

1. X-Wert eingeben.
2. `,` drücken — das Terminal zeigt `[X], [Y{cursor}]`.
3. Y-Wert eingeben.
4. **Enter** drücken, um den Punkt zu platzieren.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Eingegebene Koordinate bestätigen |
| `Escape` | Alle platzierten Punkte verwerfen und beenden |

## Griffpunkt-Bearbeitung — Endpunkte und Radius anpassen

Ein ausgewählter Bogen zeigt drei Griffpunkte:

| Griffpunkt | Position | Funktion |
|------------|----------|----------|
| **Mitte** | Geometrischer Mittelpunkt des Umkreises | Verschiebt den gesamten Bogen; Radius und Winkel bleiben unverändert |
| **Start** | Erster Endpunkt des Bogens | Ziehen, um den Start entlang des Umkreises zu verschieben — ändert sowohl Startwinkel als auch Radius |
| **Ende** | Letzter Endpunkt des Bogens | Ziehen, um das Ende entlang des Umkreises zu verschieben — ändert sowohl Endwinkel als auch Radius |

Das Ziehen eines Start- oder End-Griffpunkts positioniert ihn an die Zielposition und berechnet sowohl den Winkel als auch den Radius neu. Der gegenüberliegende Endpunkt bleibt fest.

## Bögen auswählen

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Wählt aus, wenn der Klick nahe der Bogenkurve landet (nicht der Sehne) |
| **Nach rechts ziehen** (streng) | Stichpunkte entlang des Bogens müssen alle innerhalb des Rahmens liegen |
| **Nach links ziehen** (Kreuzung) | Jeder Stichpunkt am Bogen, der innerhalb des Rahmens liegt, wählt ihn aus |

## Unterstützte Bearbeitungsbefehle

| Befehl | Was mit dem Bogen passiert |
|--------|---------------------------|
| [Move](../move/) | Verschiebt den Mittelpunkt; Radius und Winkel unverändert |
| [Copy](../copy/) | Erstellt einen identischen Bogen an einer neuen Position |
| [Rotate](../rotate/) | Dreht den Mittelpunkt und verschiebt Start-/Endwinkel um den Drehbetrag |
| [Mirror](../mirror/) | Spiegelt den Mittelpunkt und invertiert Start-/Endwinkel über die Spiegelachse |
| [Scale](../scale/) | Skaliert die Mittelpunktposition und multipliziert den Radius mit dem Skalierungsfaktor |
| [Offset](../offset/) | Erstellt einen konzentrischen Bogen mit größerem oder kleinerem Radius, gleicher Winkelspanne |
| [Delete](../delete/) | Entfernt den Bogen |

## Eigenschaften

**Allgemein**

| Eigenschaft | Standard | Bedeutung |
|-------------|---------|-----------|
| Farbe | 256 (ByLayer) | ACI-Farbindex |
| Ebene | `0` | Ebenenzuweisung |
| Linientyp | ByLayer | Benanntes Linientypenmuster |
| Linientyp-Skalierung | 1 | Skalierungsfaktor des Linientypmusters |
| Stärke | 0 | Extrusionsstärke |

**Geometrie**

| Eigenschaft | Bedeutung |
|-------------|-----------|
| Mittelpunkt X / Mittelpunkt Y | Mittelpunkt des Umkreises |
| Radius | Radius des Umkreises |
| Startwinkel | Winkel in Grad, an dem der Bogen beginnt (gemessen von der positiven X-Achse) |
| Endwinkel | Winkel in Grad, an dem der Bogen endet |

## Arc vs Circle — wann welches verwenden

| | Arc | Circle |
|---|-----|--------|
| Spanne | Partiell — vom ersten bis zum dritten Klick | Vollständige 360° |
| Eingabemethode | Drei Punkte auf der Kurve | Mittelpunkt + Radius (klicken oder eingeben) |
| Texteingabe | X,Y-Koordinate für jeden Punkt | Radiuswert (Mittelpunkt akzeptiert auch X,Y) |
| Größe nach Platzierung ändern | Start-/End-Griffpunkte ziehen | Beliebigen Kardinal-Griffpunkt ziehen |
| Geeignet für | Abrundungen, abgerundete Ecken, Bogenpfade | Vollständige Löcher, runde Merkmale |

## DXF — ARC-Element

Bögen werden als `ARC`-Elemente in der DXF-Datei gespeichert, mit Mittelpunktkoordinaten, Radius, Startwinkel und Endwinkel. Alle Eigenschaften — einschließlich Farbe, Ebene, Linientyp, Linientyp-Skalierung und Stärke — werden verlustfrei übertragen. Jede DXF-kompatible Anwendung (LibreCAD, FreeCAD usw.) liest diese als Standardbögen.
