---
title: "Sechseck oder Lochkreis in CAD zeichnen (Polygon und polares Array)"
description: "Zeichnen Sie ein regelmäßiges Vieleck aus Mittelpunkt und Radius oder aus einer Kante und wiederholen Sie dann Bohrungen auf einem Teilkreis mit einem polaren Array — kostenlos im Browser, mit exakt eingegebenen Werten."
keywords: [Sechseck in CAD zeichnen, regelmäßiges Vieleck CAD, polares Array CAD, Lochkreis zeichnen, Lochbild CAD, Kreismuster CAD, Sechskantmutter zeichnen, Achteck zeichnen CAD, Teilkreisdurchmesser PCD, kostenloses CAD Polygon-Werkzeug]
date: 2026-10-11
author: KulmanLab
tag: Anleitung
---

Um in CAD ein regelmäßiges Vieleck zu zeichnen, geben Sie die Anzahl der Seiten an, wählen den Mittelpunkt und dann einen Radius — oder Sie wählen eine Kante und der Rest ergibt sich. Für einen Lochkreis zeichnen Sie eine Bohrung und wiederholen sie mit einem polaren Array um den Mittelpunkt. Diese Anleitung macht beides, mit exakten Zahlen, im Browser unter [app.kulmanlab.com](https://app.kulmanlab.com) — kostenlos, ohne Installation, und die Datei verlässt Ihren Rechner nie.

Wir entwickeln [KulmanLab](https://kulmanlab.com), daher verwenden die Schritte unten dessen Befehle. Die Ideen — Schlüsselweite gegenüber Eckenmaß, Teilkreisdurchmesser, ob sich Kopien beim Umlauf mitdrehen — sind in jedem CAD-Programm dieselben.

## Ein regelmäßiges Vieleck zeichnen

Ein regelmäßiges Vieleck hat gleiche Seiten und gleiche Winkel: ein Sechseck für eine Mutter, ein Achteck für ein Schild, ein Fünfeck für einen dekorativen Ausschnitt. In KulmanLab ist das der Befehl **Polygon**.

1. Geben Sie `polygon` im Terminal ein oder nutzen Sie die Schaltfläche Polygon im Panel Shapes.
2. Geben Sie die **Anzahl der Seiten** ein — eine beliebige ganze Zahl von 3 bis 1024 — und drücken Sie **Enter**. Die Abfrage ist mit der zuletzt verwendeten Anzahl vorbelegt.
3. **Klicken Sie auf den Mittelpunkt** oder geben Sie `X,Y` für einen exakten Punkt ein.
4. **Klicken Sie auf den Radius** oder geben Sie ihn ein und drücken Sie **Enter**.

Das Ergebnis ist eine einzelne geschlossene Polylinie, sodass alles funktioniert, was Sie mit einer Polylinie tun können — verschieben, drehen, versetzen, skalieren.

### Schlüsselweite oder Eckenmaß?

Hier stolpern die meisten. „Radius" kann zwei verschiedene Abstände meinen, und ein Sechseck wird je nach Zweck über den einen oder den anderen angegeben:

| | Gemessen bis | Typische Verwendung |
|---|---|---|
| **Inside an** (Standard) | Zu den Ecken | Eine Form, die in einen gegebenen Kreis passen muss |
| **Inside aus** | Zur Mitte jeder Kante | Eine Form mit vorgegebener Schlüsselweite — Muttern, Schraubenköpfe, Schlüsselgrößen |

Mit `I` bei der Radius-Abfrage schalten Sie um. Eine Sechskantmutter wird über ihre Schlüsselweite verkauft; verwenden Sie also **Inside aus** und geben Sie die *Hälfte* davon ein. Für eine M8-Mutter mit 13 mm Schlüsselweite:

1. `polygon`, dann `6` für die Seiten, dann den Mittelpunkt anklicken oder eingeben.
2. Drücken Sie `I`, um Inside auszuschalten.
3. Geben Sie `6.5` ein und drücken Sie **Enter**.

Die Flächen liegen genau 13 mm auseinander; die Ecken reichen 7,51 mm vom Mittelpunkt, also etwa 15 mm Eckenmaß. Geben Sie den Radius ein, statt zu klicken, liegt das Vieleck mit der untersten Kante waagerecht, Fläche nach unten. Klicken Sie stattdessen, übernimmt das Vieleck seine Ausrichtung von der Klickstelle.

### Aus einer Kante

Manchmal kennen Sie eine Seitenlänge, keinen Radius — etwa eine achteckige Tischplatte mit 20 mm Seitenlänge. Drücken Sie bei der Abfrage des ersten Punkts `E`, um in den Modus **Edge** zu wechseln, und wählen Sie die beiden Enden einer Kante. Die übrigen Ecken werden gegen den Uhrzeigersinn links dieser Kante aufgebaut. Mit `0,0` und dann `20,0` liegt eine 20-mm-Kante entlang der X-Achse, das Vieleck darüber.

## Einen Lochkreis zeichnen

Ein Lochkreis — oder Teilkreis, auf Zeichnungen „PCD" — ist ein Ring gleichmäßig verteilter Bohrungen um einen Mittelpunkt. Sie zeichnen eine Bohrung und wiederholen sie. In KulmanLab geht das mit **ArrayPolar**.

Nehmen wir sechs 6,6-mm-Bohrungen auf einem Teilkreisdurchmesser von 50 mm, zentriert im Ursprung:

1. **Zeichnen Sie die erste Bohrung.** Starten Sie `circle`, geben Sie den Mittelpunkt als `25` `,` `0` ein — der halbe PCD entlang der X-Achse —, drücken Sie **Enter**, geben Sie dann den Radius `3.3` ein und drücken Sie **Enter**.
2. **Wählen Sie sie aus**, indem Sie auf den Kreis klicken.
3. **Starten Sie das polare Array.** Geben Sie `arraypolar` ein oder nutzen Sie die Schaltfläche ArrayPolar im Panel Edit.
4. **Wählen Sie den Mittelpunkt des Musters** — geben Sie `0,0` ein.
5. Das Terminal zeigt das Array, wie es steht — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` —, und die fünf Kopien erscheinen live in der Vorschau. Drücken Sie **Enter**, um zu bestätigen.

Das ist der ganze Lochkreis. Für eine andere Anzahl drücken Sie vor dem Bestätigen `I` und geben die Zahl der Elemente ein — das Original zählt als eins, der Winkel dazwischen wird berechnet. Oder drücken Sie `A` und geben stattdessen den Abstand in Grad ein; der Füllwinkel wird entsprechend neu formuliert.

Ein paar wichtige Details:

- **Fill** ist der Winkel vom ersten bis zum letzten Element. Die voreingestellten 360° verteilen die Elemente über den ganzen Kreis; eine kleinere Zahl verteilt sie über einen Bogen — etwa eine Lochreihe über ein Viertel. Ein negativer Winkel läuft im Uhrzeigersinn.
- **Rotate** bestimmt, ob sich jede Kopie beim Umlauf mitdreht. Bei runden Bohrungen ist das egal. Bei einer Nut, einem Zahn oder einem Winkel nicht: An — jede Kopie zeigt wie das Original zum Mittelpunkt; aus — jede Kopie behält die Ausrichtung des Originals und wird nur an ihren Platz verschoben. Drücken Sie `R`, um vor dem Bestätigen umzuschalten.
- Das Array erzeugt **Kopien** — das Original bleibt, wo es ist, und jedes Element ist eine gewöhnliche Entität, die Sie danach weiter bearbeiten können.

## Alles zusammen: ein Flansch

Zeichnen Sie ein Sechseck als Kontur, einen Kreis in der Mitte als Bohrung und einen Lochkreis für die Befestigungslöcher. Drei Befehle, jedes Maß exakt eingegeben, nichts vom Bildschirm abzumessen.

Geht das Teil an einen Laserschneider, löschen Sie einen Hilfskreis, den Sie zum Finden des Teilkreises gezeichnet haben — er würde wie alles andere geschnitten — und prüfen Sie die Datei anhand unserer Anleitung zum [Vorbereiten einer DXF für das Laserschneiden](/de/blog/prepare-dxf-for-laser-cutting/). Das Vieleck ist von Konstruktion her ein geschlossener Pfad — der häufigste Grund, warum Schneidedienste Dateien ablehnen.

## Was das nicht kann

- **Nur regelmäßige Vielecke.** Alle Seiten sind gleich. Eine unregelmäßige Kontur — eine Form, bei der einige Seiten länger sind — ist eine [Polylinie](/de/docs/commands/polyline/), die Sie Punkt für Punkt zeichnen.
- **Nur 2D.** Gezeichnet werden flache Konturen. Eine modellierte Mutter oder eine Schraube mit Gewinde bekommen Sie nicht.
- **Nur Desktop-Browser** — Chrome, Firefox, Safari und Edge. Eine mobile Version gibt es nicht.

---

*Weiterführend: [Polygon](/de/docs/commands/polygon/) und [ArrayPolar](/de/docs/commands/array-polar/) für alle Optionen und Tasten, [Circle](/de/docs/commands/circle/) zum Eingeben exakter Radien und [ArrayGrid](/de/docs/commands/array-grid/) zum Wiederholen von Objekten in Zeilen und Spalten statt um einen Mittelpunkt.*
