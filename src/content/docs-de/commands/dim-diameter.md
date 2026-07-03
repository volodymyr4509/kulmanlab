---
sidebar_position: 17
title: "Dimension Diameter-Befehl — Vollständige Kreis- und Bogendurchmesser beschriften in KulmanLab CAD"
description: "Der Dimension Diameter-Befehl platziert eine Durchmesserbemaßung (mit dem Durchmessersymbol als Präfix) durch den Mittelpunkt eines Bogens oder Kreises. Bewegen Sie den Mauszeiger, um die Bemaßungslinie in beliebigem Winkel zu drehen. Vollständiger DXF-Austausch als DIMENSION-Durchmesserelemente."
keywords: [CAD-Durchmesserbemaßung, dimdiameter, Kreisdurchmesser beschriften, Bogendurchmesserbemaßung, Durchmessersymbol CAD, kulmanlab]
---

# Dimension Diameter

Der `dimdiameter`-Befehl platziert eine Durchmesserbemaßung auf einem Bogen oder Kreis. Die Bemaßungslinie erstreckt sich über den gesamten Durchmesser — durch den Mittelpunkt zwischen zwei diametral gegenüberliegenden Bogenpunkten — und ist mit `⌀ <Wert>` beschriftet. Um stattdessen nur den Radius vom Mittelpunkt bis zur Kante zu beschriften, verwenden Sie [Dimension Radius](../dim-radius/).

## Aufbau einer Durchmesserbemaßung

```
  ●──────────── ⌀ 10.00 ────────────●
  (entfernter Bogenpunkt)              (naher Bogenpunkt / Textseite)
```

- **Bemaßungslinie** — erstreckt sich über den gesamten Durchmesser, mit Pfeilspitzen an beiden Bogen-Schnittpunkten.
- **Naher Bogenpunkt** — der Umfangspunkt auf der Mauszeiger-Seite (wo die Textbeschriftung sitzt).
- **Entfernter Bogenpunkt** — der diametral gegenüberliegende Punkt.
- **Beschriftung** — `⌀` gefolgt vom Durchmesserwert.

## Eine Durchmesserbemaßung platzieren

1. Geben Sie `dimdiameter` im Terminal ein oder klicken Sie auf die Schaltfläche **Dimension Diameter** in der Symbolleiste.
2. **Bogen oder Kreis klicken**, um ihn auszuwählen.
3. **Mauszeiger bewegen**, um die Bemaßungslinie in den gewünschten Winkel zu drehen.
4. **Klicken**, um die Bemaßung zu platzieren.

Es können nur **Arc**- und **Circle**-Elemente ausgewählt werden.

## Tastaturübersicht

| Taste | Aktion |
|-------|--------|
| `Escape` | Abbrechen |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Misst | Vollständigen Durchmesser (2 × Radius) | Radius (Mittelpunkt bis Kante) |
| Bemaßungslinie | Kante → Kante durch Mittelpunkt | Mittelpunkt → Kante |
| Beschriftungspräfix | `⌀` | `R` |
| Pfeilspitzen | Zwei (an beiden Bogenpunkten) | Eine (am Bogenpunkt) |
| Geeignet für | Vollständige Kreisbohrung oder Wellenbemaßungen | Beschriftung einer Seite eines gekrümmten Merkmals |

## Beschriftung bearbeiten — simple mode

**Doppelklicken** Sie auf eine platzierte Durchmesserbemaßung, um den Texteditor im **simple** mode zu öffnen. Der Editor ist mit dem aktuellen angezeigten Wert vorbelegt (z. B. `⌀ 10.00`), sodass Sie den Cursor positionieren und ihn direkt bearbeiten können.

| Feature | Verhalten |
|---------|-----------|
| Bold / Italic / Font / Height | Gilt für die **gesamte** Beschriftung auf einmal |
| Zeichenweise Formatierung | Nicht unterstützt |
| `Enter` | Übernimmt den Wert und schließt den Editor |
| Mehrzeilig | Nicht unterstützt |

Siehe [Texteditor — simple mode](../interface/text-editor#simple-mode) für die vollständige Referenz.

## DXF — DIMENSION-Durchmesserelement

Durchmesserbemaßungen werden als `DIMENSION`-Elemente mit Durchmesser-Geometrietyp gespeichert, mit beiden Bogenpunkt-Positionen und dem gemessenen Durchmesserwert (2 × Radius). Alle Eigenschaften werden verlustfrei übertragen.
