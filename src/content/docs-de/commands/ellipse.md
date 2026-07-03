---
sidebar_position: 6
title: Ellipse-Befehl — Gedrehte Ellipsen durch Mittelpunkt und zwei Achsen zeichnen in KulmanLab CAD
description: Der Ellipse-Befehl zeichnet eine Ellipse mit drei Klicks — Mittelpunkt, erster Achsenendpunkt (beliebige Richtung), dann zweite Achsenlänge. Die beiden Achsen stehen immer senkrecht aufeinander. Jede Halbachse hat einen eigenen Griffpunkt zur unabhängigen Größenänderung nach der Platzierung. Vollständiger DXF-Austausch als ELLIPSE-Elemente.
keywords: [CAD-Ellipsenbefehl, Ellipse zeichnen CAD, gedrehte Ellipse CAD, Ellipsenachsen, ELLIPSE DXF-Element, Ellipsen-Griffpunkt-Bearbeitung, Achsenverhältnis, kulmanlab]
---

# Ellipse

Der `ellipse`-Befehl zeichnet eine Ellipse mit drei Klicks: einem Mittelpunkt, dem Endpunkt der ersten (Haupt-) Halbachse in beliebigem Winkel und der Länge der zweiten (Neben-) Halbachse. Die beiden Achsen stehen immer senkrecht aufeinander — die Richtung der zweiten Achse wird automatisch aus der ersten abgeleitet.

## Eine Ellipse zeichnen

1. Geben Sie `ellipse` im Terminal ein oder klicken Sie auf die Schaltfläche **Ellipse** in der Symbolleiste.
2. **Mittelpunkt klicken**, oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
3. **Ersten Achsenendpunkt klicken** — legt sowohl die Richtung als auch die Länge der ersten Halbachse fest. Koordinateneingabe funktioniert hier ebenfalls.
4. **Zweite Achsenlänge festlegen** — Mauszeiger senkrecht zur ersten Achse bewegen, dann klicken oder eine Länge eingeben.

```
               ● ← erster Achsenendpunkt (Schritt 3)
              /
  Mittelpunkt ●  /  ← erste Achse (beliebiger Winkel)
            |
            ● ← Mauszeiger hier legt zweite Achsenlänge fest (Schritt 4)
```

Die Ellipse wird nach Schritt 4 platziert und der Befehl endet.

## Achseneingabe — Klicken, Koordinate oder eingegebene Länge

**Mittelpunkt (Schritt 2):** klicken oder `X,Y` für eine genaue Position eingeben.

**Erster Achsenendpunkt (Schritt 3):** klicken oder `X,Y` für eine genaue Koordinate eingeben. Die Winkelsperre rastet auch an 45°-Schritten ein — bei Sperre eine Länge eingeben und **Enter** drücken, um den Endpunkt bei diesem exakten Abstand zu platzieren.

**Zweite Achse (Schritt 4):** Texteingabe der Länge ist immer verfügbar — keine Winkelsperre erforderlich. Die Richtung ist bereits senkrecht zur ersten Achse fixiert; die Eingabe legt nur die Länge fest.

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zur Achsenlänge hinzufügen (zweite Achsen-Phase) |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Achsenendpunkt bei der eingegebenen Länge platzieren |

## Koordinateneingabe (Mittelpunkt und erster Achsenendpunkt)

1. X-Wert eingeben.
2. `,` drücken — das Terminal zeigt `[X], [Y{cursor}]`.
3. Y-Wert eingeben.
4. **Enter** drücken, um zu bestätigen.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten (Mittelpunkt-/erste-Achse-Phasen) oder Achsenlänge bei Winkelsperre |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Zuletzt eingegebenes Zeichen löschen |
| `Enter` | Eingegebene Koordinate oder Länge bestätigen |
| `Escape` | Abbrechen und zurücksetzen |

## Griffpunkt-Bearbeitung — unabhängige Achsen-Größenänderung

Eine ausgewählte Ellipse zeigt fünf Griffpunkte:

| Griffpunkt | Anzahl | Funktion |
|------------|--------|----------|
| **Mitte** | 1 | Verschiebt die gesamte Ellipse; beide Achsen unverändert |
| **Hauptachsen-Endpunkte** | 2 (gegenüberliegende Enden der längeren Achse) | Ziehen, um die Haupthalbachsenlänge zu ändern; absolute Größe der Nebenhalbachse bleibt konstant |
| **Nebenhachsen-Endpunkte** | 2 (gegenüberliegende Enden der kürzeren Achse) | Ziehen, um die Nebenhalbachsenlänge zu ändern; Hauptachse unverändert |

Haupt- und Nebenhachsen-Griffpunkte sind unabhängig — die Ellipse kann ohne erneutes Ausführen des Befehls umgeformt werden.

## Ellipsen auswählen

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Wählt aus, wenn der Klick nahe der Ellipsenkontur landet |
| **Nach rechts ziehen** (streng) | Das achsenparallele Begrenzungsrechteck der Ellipse muss vollständig innerhalb des Auswahlrahmens liegen |
| **Nach links ziehen** (Kreuzung) | Jeder Teil der Ellipsenkontur, der die Auswahlrahmengrenze kreuzt, wählt sie aus |

## Unterstützte Bearbeitungsbefehle

| Befehl | Was mit der Ellipse passiert |
|--------|------------------------------|
| [Move](../move/) | Verschiebt den Mittelpunkt; beide Achsen unverändert |
| [Copy](../copy/) | Erstellt eine identische Ellipse an einem neuen Mittelpunkt |
| [Rotate](../rotate/) | Dreht die Mittelpunktposition und den Hauptachsenvektor um den gleichen Winkel |
| [Mirror](../mirror/) | Spiegelt den Mittelpunkt und berechnet die Hauptachsenrichtung über die Spiegelachse neu |
| [Scale](../scale/) | Skaliert die Mittelpunktposition und multipliziert beide Halbachsenlängen mit dem Faktor |
| [Offset](../offset/) | Erstellt eine konzentrische Ellipse, die nach außen oder innen um einen festen Abstand versetzt ist |
| [Delete](../delete/) | Entfernt die Ellipse |

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
| Mittelpunkt X / Mittelpunkt Y | Mittelpunkt der Ellipse |
| Hauptachse X / Hauptachse Y | Vektor vom Mittelpunkt zum Hauptachsenendpunkt (kodiert sowohl Richtung als auch Länge) |
| Achsenverhältnis | Verhältnis der Nebenhalbachse zur Haupthalbachse (0 < Verhältnis ≤ 1) |
| Startwinkel / Endwinkel | Parametrische Winkel in Grad; beide sind 0°/360° für eine vollständige Ellipse |

## Ellipse vs Circle — wann welches verwenden

| | Ellipse | Circle |
|---|---------|--------|
| Achsen | Zwei unabhängige Halbachsen in beliebigem Winkel | Ein Radius, symmetrisch |
| Drehung | Kann in beliebigem Winkel platziert werden | Keine Drehung |
| Texteingabe | Pro-Achse-Länge | Nur Radius |
| Griffpunkt-Größenänderung | Haupt- und Nebenhachse unabhängig | Alle vier Kardinalpunkte gleichmäßig |
| Geeignet für | Schräge Ansichten, ovale Merkmale, Perspektivlöcher | Symmetrisch runde Merkmale |

## DXF — ELLIPSE-Element

Ellipsen werden als `ELLIPSE`-Elemente in der DXF-Datei gespeichert. Das Format speichert den Mittelpunkt, den vollständigen Hauptachsenvektor (Richtung + Länge) und das Achsenverhältnis. Drehung, Form und alle Stileigenschaften werden verlustfrei übertragen. Ein Kreis wird **nicht** als degenerierte Ellipse gespeichert — die beiden Elementtypen bleiben im DXF-Modell eigenständig.
