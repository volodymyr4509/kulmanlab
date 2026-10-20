---
title: "PointDivide-Befehl — Punkte in gleichen Längen entlang eines Objekts setzen"
description: "Der Befehl PointDivide teilt eine Linie, Polylinie, einen Bogen, Kreis, eine Ellipse oder einen Spline in gleich lange Abschnitte und setzt an jeder Teilung einen Punkt; während Sie die Anzahl eingeben, erscheinen sie in der Vorschau."
keywords: ["CAD Teilen-Befehl", "Linie in gleiche Teile teilen CAD", "Punkte entlang eines Objekts CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Der Befehl `MitPunktenTeilen` setzt [Punkte](../point/), die ein Objekt in gleich lange Abschnitte teilen. Das Objekt selbst bleibt unverändert: Die Punkte sind neue Entitäten auf dem aktuellen Layer und in der aktuellen Farbe, praktisch zum Fangen.

## Ein Objekt teilen

1. Geben Sie `MitPunktenTeilen` im Terminal ein oder wählen Sie **Point Divide** im Array-Dropdown des Panels Edit.
2. **Klicken Sie auf das Objekt** — eine Linie, Polylinie, einen Bogen, Kreis, eine Ellipse oder einen Spline. Alles andere wird abgelehnt, und Sie können erneut wählen.
3. **Geben Sie die Anzahl der Abschnitte ein**, eine ganze Zahl von 2 bis 32767. Die Punkte erscheinen beim Tippen in der Vorschau auf dem Objekt.
4. Drücken Sie **Enter** oder **Space**, um sie zu setzen. Der Befehl endet.

## Wo die Punkte landen

- Der Abstand wird als Länge entlang des Objekts gemessen, nicht als Winkel, sodass eine Ellipse oder ein Spline in gleich lange Stücke geteilt wird. Bogensegmente einer Polylinie werden entlang ihrer Krümmung verfolgt.
- Bei einem offenen Objekt — Linie, offene Polylinie, Bogen, Teilellipse oder offener Spline — liegen die Punkte zwischen den Abschnitten, nie an den Enden: 5 Abschnitte ergeben 4 Punkte.
- Bei einem geschlossenen Objekt — Kreis, geschlossene Polylinie, ganze Ellipse oder geschlossener Spline — laufen die Punkte ringsum ab seinem Anfang, der ebenfalls einen Punkt bekommt: Ein Kreis beginnt bei Winkel 0, eine geschlossene Polylinie an ihrem ersten Eckpunkt. 5 Abschnitte ergeben 5 Punkte.
- Eine Zahl außerhalb von 2–32767 wird abgelehnt: Das Terminal nennt den Grund und leert die Eingabe, damit Sie neu tippen können.

Backspace löscht die letzte Ziffer. Escape fängt von vorn an, sodass Sie ein anderes Objekt wählen können. Enter oder Space, bevor ein Objekt gewählt ist, beendet den Befehl.

---

*Verwandt: [Point Interval](../point-interval/) für Punkte in festem Abstand, [Point](../point/) für einzelne Punkte und [ArrayPolar](../array-polar/), um Objekte statt Punkte zu wiederholen.*
