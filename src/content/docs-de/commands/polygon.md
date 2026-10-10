---
title: "Polygon-Befehl — regelmäßige Vielecke aus Mittelpunkt oder Kante zeichnen in KulmanLab CAD"
description: "Der Polygon-Befehl zeichnet ein regelmäßiges Vieleck mit 3 bis 1024 Seiten aus Mittelpunkt und Radius oder aus einer Kante. Das Ergebnis ist eine geschlossene LWPOLYLINE, sodass alle Polylinien-Bearbeitungsbefehle darauf anwendbar sind."
keywords: ["CAD Polygon-Befehl", "regelmäßiges Vieleck zeichnen CAD", "Sechseck Achteck Fünfeck CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Der Befehl `polygon` zeichnet ein regelmäßiges Vieleck — alle Seiten und Winkel sind gleich — mit 3 bis 1024 Seiten. Geben Sie `polygon` im Terminal ein. Das Ergebnis ist eine **geschlossene `LWPOLYLINE`**, die sich nach dem Platzieren wie jede andere [Polyline](../polyline/) verhält; alle Polylinien-Bearbeitungen gelten.

## Ein Polygon zeichnen

1. Geben Sie `polygon` im Terminal ein und tragen Sie die **Anzahl der Seiten** ein — eine ganze Zahl von 3 bis 1024 — und drücken Sie **Enter** oder **Space**. Die Abfrage ist mit der zuletzt verwendeten Anzahl vorbelegt (beim ersten Mal 4); beginnen Sie zu tippen, um sie zu ersetzen. Alles andere wird abgelehnt und bleibt zur Korrektur in der Abfrage.
2. **Klicken Sie auf den Mittelpunkt**, oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine exakte Koordinate. Drücken Sie zuerst `E`, um stattdessen von einer Kante auszugehen (siehe unten).
3. **Klicken Sie auf den Radius** — das Polygon wird live vorgeschaut — oder geben Sie den Radius ein und drücken Sie **Enter** oder **Space**.
4. Das Polygon wird platziert und der Befehl beendet.

## Optionen

| Option | Taste | Wirkung |
|---|---|---|
| Edge | `E` | Der erste Punkt wird statt des Mittelpunkts zum einen Ende einer Kante. Wählen Sie das zweite Ende; die übrigen Ecken entstehen gegen den Uhrzeigersinn, links der Kante vom ersten zum zweiten Ende. Drücken Sie erneut `E`, um zum Mittelpunkt zurückzukehren. |
| Inside | `I` | Standardmäßig an und von einem Polygon zum nächsten beibehalten. An: Die Ecken liegen auf dem Kreis mit dem angegebenen Radius. Aus: Das Polygon liegt außerhalb dieses Kreises, die Mitte jeder Kante auf ihm. |

- Ein Klick setzt eine Ecke (Inside an) oder die Kantenmitte (Inside aus) genau dorthin, wo der Cursor steht — der Cursor bestimmt also auch die Ausrichtung.
- Ein getippter Radius hat nichts, woran er sich ausrichten könnte; das Polygon liegt daher mit seiner untersten Kante waagerecht — es sei denn, die Winkelfixierung ist aktiv, dann folgt es dem fixierten Winkel.
- Jede Option wird in ihrem eigenen Schritt angeboten und lässt sich auch während der Zahleneingabe umschalten.

## Tastaturübersicht

| Taste | Aktion |
|---|---|
| `0`–`9`, `.` | Anzahl der Seiten, Radius, Koordinate oder Länge eingeben |
| `E` | Edge ein- oder ausschalten (Schritt des ersten Punkts) |
| `I` | Inside ein- oder ausschalten (Radius-Schritt) |
| `Enter` / `Space` | Anzahl der Seiten oder Radius bestätigen |
| `Escape` | Abbrechen |

## DXF — LWPOLYLINE-Entität

Ein Polygon wird als geschlossene `LWPOLYLINE` mit einem Eckpunkt pro Ecke gespeichert; DXF kennt keinen eigenen Polygontyp. Alle Eigenschaften — Eckpunktkoordinaten, Farbe, Layer, Linientyp, Linientypfaktor und Dicke — bleiben verlustfrei erhalten, und jeder DXF-Viewer liest es als geschlossene Polylinie.
