---
title: Circle-Befehl — Kreise durch Mittelpunkt und Radius zeichnen
description: Der Circle-Befehl platziert einen Kreis durch Klicken eines Mittelpunkts und anschließendes Klicken oder Eingeben des Radius. Vier Kardinal-Griffpunkte ermöglichen das Ändern des Radius durch Ziehen ohne erneutes Ausführen des Befehls. Vollständiger DXF-Austausch als CIRCLE-Elemente.
keywords: [CAD-Kreisbefehl, Kreis zeichnen CAD, Kreisradius-Eingabe, Kreis-Griffpunkt-Größenänderung, CIRCLE DXF-Element, dimradius Kreis, kulmanlab]
group: shapes
order: 4
---

# Circle

Der `circle`-Befehl zeichnet einen Kreis, der durch einen Mittelpunkt und einen Radius definiert wird. Nachdem der Mittelpunkt geklickt wurde, können Sie den Radius entweder durch Klicken eines zweiten Punktes auf der Zeichenfläche oder durch Eingabe einer genauen Zahl festlegen — beide Optionen sind gleichzeitig verfügbar.

## Einen Kreis zeichnen

1. Geben Sie `circle` im Terminal ein oder klicken Sie auf die Schaltfläche **Circle** in der Symbolleiste.
2. **Mittelpunkt klicken**, oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
3. Radius festlegen — entweder:
   - **Beliebigen Punkt klicken** auf der Zeichenfläche — der Abstand vom Mittelpunkt wird zum Radius, oder
   - **Radius eingeben** und **Enter** drücken für einen genauen Wert.

Der Kreis wird sofort platziert und der Befehl endet.

```
  Mittelpunkt ●
               \  Radiuslinie Vorschau
                \
                 ● ← hier klicken, oder eine Zahl eingeben
```

In der Radius-Phase zeigt die Live-Vorschau den Kreis im aktuellen Mauszeiger-Abstand und zeichnet auch eine Radiuslinie vom Mittelpunkt zum aktuellen Punkt.

## Mittelpunkt-Koordinateneingabe

Anstatt zu klicken, können Sie die Mittelpunktposition eingeben:

1. X-Wert eingeben.
2. `,` drücken — das Terminal zeigt `[X], [Y{cursor}]`.
3. Y-Wert eingeben.
4. **Enter** drücken, um den Mittelpunkt zu platzieren und zur Radiuseingabe zu wechseln.

## Texteingabe für Radius

Nachdem der Mittelpunkt platziert wurde, baut die Texteingabe sofort einen Radiuswert auf:

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zum Radiuswert hinzufügen |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Kreis mit dem eingegebenen Radius platzieren |

Der akkumulierte Wert wird in der Terminal-Eingabeaufforderung angezeigt (z. B. `enter radius of circle: 25`). Die Vorschau aktualisiert sich, um den eingegebenen Radius zu zeigen, während der Mauszeiger die Richtung der Radiuslinie steuert.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten (Mittelpunkt-Phase) oder Radius-Ziffer (Radius-Phase) |
| `,` | X sperren und zu Y-Eingabe wechseln (Mittelpunkt-Phase) |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Eingegebene Koordinate oder Radius bestätigen |
| `Escape` | Abbrechen und zurücksetzen |

## Griffpunkt-Bearbeitung — Radius ändern

Ein ausgewählter Kreis zeigt fünf Griffpunkte:

| Griffpunkt | Position | Funktion |
|------------|----------|----------|
| **Mitte** | Mittelpunkt | Verschiebt den gesamten Kreis; Radius bleibt unverändert |
| **Links** | Linkster Punkt (Mittelpunkt − Radius) | Ziehen, um neuen Radius = Abstand zum Mittelpunkt zu setzen |
| **Rechts** | Rechtster Punkt (Mittelpunkt + Radius) | Ziehen, um neuen Radius = Abstand zum Mittelpunkt zu setzen |
| **Oben** | Oberster Punkt | Ziehen, um neuen Radius = Abstand zum Mittelpunkt zu setzen |
| **Unten** | Unterster Punkt | Ziehen, um neuen Radius = Abstand zum Mittelpunkt zu setzen |

Alle vier Kardinal-Griffpunkte verhalten sich identisch — der neue Radius entspricht dem Abstand vom Mittelpunkt zur Zielposition. Der Mittelpunkt bleibt fest.

## Kreise auswählen

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Wählt aus, wenn der Klick nahe dem Umfang landet |
| **Nach rechts ziehen** (streng) | Das gesamte Begrenzungsquadrat (Mittelpunkt ± Radius) muss innerhalb des Rahmens liegen |
| **Nach links ziehen** (Kreuzung) | Jeder Teil des Umfangs, der die Rahmengrenze kreuzt oder berührt, wählt den Kreis aus |

## Unterstützte Bearbeitungsbefehle

| Befehl | Was mit dem Kreis passiert |
|--------|---------------------------|
| [Move](../move/) | Verschiebt den Mittelpunkt; Radius unverändert |
| [Copy](../copy/) | Erstellt einen identischen Kreis an einem neuen Mittelpunkt |
| [Rotate](../rotate/) | Dreht den Mittelpunkt um den Basispunkt; Radius unverändert |
| [Mirror](../mirror/) | Spiegelt den Mittelpunkt über die Spiegelachse; Radius unverändert |
| [Scale](../scale/) | Skaliert die Mittelpunktposition und multipliziert den Radius mit dem Skalierungsfaktor |
| [Offset](../offset/) | Erstellt einen konzentrischen Kreis mit größerem oder kleinerem Radius |
| [Delete](../delete/) | Entfernt den Kreis |

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
| Mittelpunkt X / Mittelpunkt Y | Koordinaten des Mittelpunkts |
| Radius | Kreisradius in Zeichnungseinheiten |

## Circle vs Arc — wann welches verwenden

| | Circle | Arc |
|---|--------|-----|
| Spanne | Vollständige 360° | Partiell — durch Start- und Endwinkel definiert |
| Wie zeichnen | Mittelpunkt + Radius | Drei Punkte auf der Kurve |
| Texteingabe | Radiuswert | Keine — nur per Klick |
| Griffpunkt-Größenänderung | 4 Kardinalpunkte | Start- und Endpunkte (Winkel + Radius) |
| Bemaßung | Radius: [Dim Radius](../dim-radius/) · Durchmesser: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Geeignet für | Vollständige Löcher, Lochkreise, runde Merkmale | Abrundungen, Teilkurven, Bogenpfade |

## DXF — CIRCLE-Element

Kreise werden als `CIRCLE`-Elemente in der DXF-Datei gespeichert. Mittelpunktkoordinaten, Radius, Farbe, Ebene, Linientyp, Linientyp-Skalierung und Stärke werden alle verlustfrei übertragen. Jede DXF-kompatible Anwendung liest diese als Standardkreise.
