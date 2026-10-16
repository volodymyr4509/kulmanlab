---
title: "Measure-Befehl — Abstände, Längen, Winkel und Flächen um den Cursor ablesen"
description: "Der Befehl Measure liest die Zeichnung um den Cursor beim Bewegen ab — den Abstand zur nächsten Geometrie, Länge oder Radius des Getroffenen, den Winkel, wo Linien aufeinandertreffen — und liefert per Klick Fläche und Umfang eines geschlossenen Bereichs. In der Zeichnung ändert sich nichts."
keywords: ["CAD Messbefehl", "Fläche und Umfang messen CAD", "Live-Abstandsmessung CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

Der Befehl `measure` liest die Zeichnung um den Cursor beim Bewegen ab, ohne dass Punkte zu wählen sind: wie weit es bis zur nächsten Geometrie ist, wie lang oder wie rund diese Geometrie ist und welchen Winkel Linien dort bilden. Ein Klick in einen geschlossenen Bereich liefert dessen Fläche und Umfang. In der Zeichnung ändert sich nichts.

## Messen

1. Geben Sie `measure` im Terminal ein oder klicken Sie auf **Measure**, die erste Schaltfläche im Panel Measure.
2. **Bewegen Sie den Cursor.** Von dort aus schaut der Befehl nach rechts, oben, links und unten nach der nächsten Geometrie und zeigt, was er findet.
3. **Klicken Sie in einen geschlossenen Bereich**, um ihn zu füllen und Fläche und Umfang abzulesen — siehe unten.
4. Drücken Sie **Enter**, **Space** oder **Escape** zum Beenden.

## Was angezeigt wird

- **Abstand quer** — von dem, was der Cursor auf der einen Seite trifft, zu dem, was er auf der anderen trifft, waagerecht und senkrecht. Hat nur eine Seite etwas, reicht der Abstand vom Cursor aus. Jedes Ende, das etwas trifft, hat einen kleinen gefüllten Punkt; ein Ende am Cursor hat keinen.
- **Länge oder Radius** — jedes erreichte Objekt wird mit seiner Länge hervorgehoben, oder mit seinem Radius, wenn es Teil eines Kreises ist.
- **Winkel** — wo zwei erreichte gerade Linien aufeinandertreffen, wird der Winkel zwischen ihnen angegeben; ein rechter Winkel ist mit einem kleinen Quadrat markiert.

Längen und Winkel werden so geschrieben, wie der aktuelle [DimensionStyle](../dimension-style/) sie schreibt, in seinem Einheitenformat und seiner Genauigkeit.

## Fläche und Umfang

Ein Klick in einen geschlossenen Bereich füllt ihn und schreibt Fläche und Umfang in die Abfrage und den Verlauf. Der Bereich wird so gefunden wie bei [Hatch](../hatch/): einzelne Linien, die Ende an Ende aufeinandertreffen, schließen einen Bereich wie eine Polylinie, und alles Geschlossene darin bleibt als Insel ausgespart — seine Kante zählt zum Umfang, seine Fläche wird abgezogen.

Die Fläche ist eine einfache Zahl in Quadrat-Zeicheneinheiten — Fuß und Zoll können keine Fläche schreiben —, der Umfang folgt dem Einheitenformat. Klicken Sie in einen weiteren Bereich, um ihn zu messen. Umgibt den Punkt nichts Geschlossenes, nennt das Terminal den Grund mit denselben Meldungen wie Hatch: no boundary found, point is not enclosed oder boundary is open.

## Gut zu wissen

- Gemessen wird gegen Linien, Bögen, Kreise, Ellipsen, Polylinien und Splines; Längen und Flächen sind exakt, auch bei Ellipsen und Splines.
- Objekte auf eingefrorenen Layern werden ignoriert; Objekte auf gesperrten Layern werden gemessen.
- In einer großen Zeichnung betrachtet er nur, was nahe am Cursor liegt, und bleibt so reaktionsschnell.

---

*Verwandt: [Distance](../distance/), [Angle](../angle/) und [Area](../area/) für Messungen zwischen gewählten Punkten sowie [Hatch](../hatch/) dazu, wie geschlossene Bereiche gefunden werden.*
