---
title: "PointInterval-Befehl — Punkte in festem Abstand entlang eines Objekts setzen"
description: "Der Befehl PointInterval setzt Punkte in einem eingegebenen Abstand entlang einer Linie, Polylinie, eines Bogens, Kreises, einer Ellipse oder eines Splines, ab dem Ende, nahe dem Sie klicken; während Sie die Länge eingeben, erscheinen sie in der Vorschau."
keywords: ["Punkte im Abstand CAD", "Punkte in festem Abstand entlang Linie CAD", "CAD messen entlang Objekt", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Der Befehl `PunkteImAbstand` setzt [Punkte](../point/) in festem Abstand entlang eines Objekts, so wie man Stationen entlang einer Trasse markiert. Das Objekt selbst bleibt unverändert: Die Punkte sind neue Entitäten auf dem aktuellen Layer und in der aktuellen Farbe, praktisch zum Fangen.

## Punkte im Abstand setzen

1. Geben Sie `PunkteImAbstand` im Terminal ein oder wählen Sie **Point Interval** im Array-Dropdown des Panels Edit.
2. **Klicken Sie auf das Objekt nahe dem Ende, an dem begonnen wird** — eine Linie, Polylinie, einen Bogen, Kreis, eine Ellipse oder einen Spline. Alles andere wird abgelehnt, und Sie können erneut wählen.
3. **Geben Sie die Abstandslänge ein.** Die Punkte erscheinen beim Tippen in der Vorschau auf dem Objekt.
4. Drücken Sie **Enter** oder **Space**, um sie zu setzen. Der Befehl endet.

## Wo die Punkte landen

- Der erste Punkt liegt einen Abstand vom Anfang entfernt, die übrigen folgen im selben Abstand, gemessen entlang des Objekts, Kurven eingeschlossen. Auf den Anfang selbst kommt kein Punkt.
- Bei einem offenen Objekt — Linie, offene Polylinie, Bogen, Teilellipse oder offener Spline — wird ab dem Ende gemessen, nahe dem Sie geklickt haben. Was am fernen Ende übrig bleibt, bleibt unmarkiert: Das ferne Ende bekommt nur dann einen Punkt, wenn der Abstand genau aufgeht.
- Bei einem geschlossenen Objekt — Kreis, geschlossene Polylinie, ganze Ellipse oder geschlossener Spline — wird ab dem eigenen Anfang des Objekts gemessen, egal wo Sie klicken: ein Kreis ab Winkel 0 gegen den Uhrzeigersinn, eine geschlossene Polylinie ab ihrem ersten Eckpunkt. Die Punkte enden vor dem Anfang.
- Eine Länge von 0 oder weniger, eine längere als das Objekt oder eine, die mehr als 32767 Punkte ergäbe, wird abgelehnt: Das Terminal nennt den Grund und leert die Eingabe, damit Sie neu tippen können.

Backspace löscht das letzte Zeichen. Escape fängt von vorn an, sodass Sie ein anderes Objekt wählen können. Enter oder Space, bevor ein Objekt gewählt ist, beendet den Befehl.

---

*Verwandt: [Point Divide](../point-divide/), um ein Objekt in eine Anzahl gleicher Längen zu teilen, und [Point](../point/) für einzelne Punkte.*
