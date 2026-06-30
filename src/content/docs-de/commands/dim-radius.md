---
sidebar_position: 16
title: Dimension Radius-Befehl — Bogen- und Kreisradien beschriften in KulmanLab CAD
description: Der Dimension Radius-Befehl platziert eine mit R-Präfix versehene Radiusbemaßung auf einem Bogen oder Kreis. Klicken Sie das Element an, dann bewegen Sie den Mauszeiger, um die Bemaßungslinie vom Mittelpunkt zum Umfang auszurichten. Vollständiger DXF-Austausch als DIMENSION-Radiuselemente.
keywords: [CAD-Radiusbemaßung, dimradius, Kreisradius beschriften, Bogenradiusbemaßung, R-Präfix-Bemaßung, kulmanlab]
---

# Dimension Radius

Der `dimradius`-Befehl platziert eine Radiusbemaßung auf einem Bogen oder Kreis. Die Bemaßungslinie verläuft vom Mittelpunkt zu einem Punkt auf dem Umfang in Richtung des Mauszeigers und ist mit `R <Wert>` beschriftet. Um stattdessen einen vollständigen Durchmesser zu bemaßen, verwenden Sie [Dimension Diameter](./dim-diameter).

## Aufbau einer Radiusbemaßung

```
  ● (Mittelpunkt)
   \
    \  R 5.00
     \
      ●────── Text (Mauszeiger-Seite)
   (Bogenpunkt)
```

- **Bemaßungslinie** — vom Mittelpunkt durch einen Bogenpunkt in Richtung Mauszeiger, mit einer Pfeilspitze am Bogen.
- **Beschriftung** — `R` gefolgt vom Radiuswert.

## Eine Radiusbemaßung platzieren

1. Geben Sie `dimradius` im Terminal ein oder klicken Sie auf die Schaltfläche **Dimension Radius** in der Symbolleiste.
2. **Bogen oder Kreis klicken**, um ihn auszuwählen.
3. **Mauszeiger bewegen**, um die Bemaßungslinie auszurichten — der Bogenpunkt verfolgt die Mauszeiger-Richtung vom Mittelpunkt aus.
4. **Klicken**, um die Bemaßung zu platzieren.

Es können nur **Arc**- und **Circle**-Elemente ausgewählt werden. Das Klicken auf einen anderen Elementtyp hat keine Wirkung.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Escape` | Abbrechen |

## Dimension Radius vs Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Misst | Radius (Mittelpunkt bis Kante) | Durchmesser (Kante bis Kante durch Mittelpunkt) |
| Bemaßungslinie | Mittelpunkt → Bogenpunkt | Bogenpunkt → Bogenpunkt (durch Mittelpunkt) |
| Beschriftungspräfix | `R` | `⌀` |
| Pfeilspitzen | Eine (am Bogenpunkt) | Zwei (an beiden Bogenpunkten) |
| Geeignet für | Beschriftung einer Seite eines gekrümmten Merkmals | Beschriftung vollständiger Kreisbemaßungen |

## Beschriftung bearbeiten — simple mode

**Doppelklicken** Sie auf eine platzierte Radiusbemaßung, um den Texteditor im **simple** mode zu öffnen. Der Editor ist mit dem aktuellen angezeigten Wert vorbelegt (z. B. `R 5.00`), sodass Sie den Cursor positionieren und ihn direkt bearbeiten können.

| Feature | Verhalten |
|---------|-----------|
| Bold / Italic / Font / Height | Gilt für die **gesamte** Beschriftung auf einmal |
| Zeichenweise Formatierung | Nicht unterstützt |
| `Enter` | Übernimmt den Wert und schließt den Editor |
| Mehrzeilig | Nicht unterstützt |

Siehe [Texteditor — simple mode](../interface/text-editor#simple-mode) für die vollständige Referenz.

## DXF — DIMENSION-Radiuselement

Radiusbemaßungen werden als `DIMENSION`-Elemente mit Radius-Geometrietyp gespeichert, mit Mittelpunktkoordinaten, der Bogenpunkt-Position und dem gemessenen Radiuswert. Alle Eigenschaften werden verlustfrei übertragen.
