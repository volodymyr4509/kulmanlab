---
title: "ObjectSnapSettings-Befehl — Alle Einstellungen der Steuerleiste"
description: "Der Befehl ObjectSnapSettings öffnet ein Fenster mit allen Einstellungen der Steuerleiste — Objektfang, Tangentenfang, Winkelverfolgung, Pins, getippte Eingabe, Lasso und Anzeige — jede neben der Liste mit einer kleinen Zeichnung erklärt."
keywords: ["Objektfang-Einstellungen CAD", "Tangentenfang CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

Der Befehl `Objektfangeinstellungen` öffnet ein Fenster, das alle Einstellungen der Steuerleiste enthält. Jede Einstellung wird neben der Liste mit einer kleinen Zeichnung erklärt. Öffnen Sie es mit der Zahnrad-Schaltfläche in der Steuerleiste oder tippen Sie `Objektfangeinstellungen`. Eine hier geänderte Einstellung entspricht dem Umschalten ihrer Schaltfläche in der Leiste.

## Die Einstellungen

### Wo der Cursor landet

| Steuerleiste | Was sie bewirkt |
|---|---|
| `Snap` | Der Cursor springt zum nächsten Rasterpunkt, sodass gewählte Punkte auf runden Koordinaten liegen. Ein Objektfang in Cursornähe hat weiterhin Vorrang. Der Rasterabstand folgt dem Zoom. |
| `TANG` | Während eine Linie von einem Punkt aus gezeichnet wird, rastet der Cursor dort ein, wo sie einen Kreis, Bogen, eine Ellipse oder einen Spline gerade berührt. Funktioniert in Linie, Polylinie und anderen Befehlen sowie beim Ziehen eines Linien- oder Polylinienendes. |

### Hilfslinien beim Zeichnen

| Steuerleiste | Was sie bewirkt |
|---|---|
| `ANGL` | Kommt der Cursor einem dieser Winkel vom letzten Punkt nahe, rastet er in diese Richtung ein, gezeigt als gestrichelter Strahl. Solange er eingerastet ist, eine Länge eingeben und Enter drücken, um den Punkt in diesem Abstand zu setzen. |
| `Pins` | Den Cursor kurz auf einem Fangpunkt ruhen lassen, um ihn anzuheften. Ein angehefteter Punkt sendet waagerechte und senkrechte Hilfslinien aus; der Cursor rastet auf ihnen und an ihren Schnittpunkten ein. |
| `Dist` | Der zuletzt angeheftete Punkt dient als Startpunkt: Rastet der Cursor in einem Winkel vom Pin ein, eine Länge eingeben und Enter drücken, um den Punkt in diesem Abstand zu setzen. Erfordert Vektor-Pins. |

### Eingabe und Auswahl

| Steuerleiste | Was sie bewirkt |
|---|---|
| `Rel` | Ein eingegebener X,Y-Punkt wird vom zuletzt gewählten Punkt aus gemessen, als begänne er mit @. Rücktaste entfernt das @ für einen Punkt in den Koordinaten der Zeichnung. Ausgeschaltet tippt man das @ für einen Versatz selbst. |
| `Lasso` | Auf leerer Fläche drücken und ziehen, um statt eines Rechtecks eine freie Schleife um das Gewünschte zu zeichnen. Was die Schleife einschließt, wird ausgewählt. |

### Anzeige

| Steuerleiste | Was sie bewirkt |
|---|---|
| `Grid` | Zeigt das Hintergrundraster. Sein Abstand ändert sich beim Zoomen. Ausschalten beendet das Fangen am Raster nicht. |
| `LWT` | Zeichnet Linien in ihrer Linienstärke, sodass schwerere Linien dicker aussehen. Ausgeschaltet wird jede Linie dünn gezeichnet, was dichte Zeichnungen leichter lesbar machen kann. |

**ANGL** hat eine eigene Zeile für die Schrittweite: Wählen Sie 10°, 20°, 30°, 45° oder 90° oder wählen Sie **Eigener** und tippen Sie einen beliebigen Winkel von 1° bis 180°.

Tangentenfang, relative Eingabe und das Lasso sind standardmäßig aus. **Auf Standard zurücksetzen** setzt alle Einstellungen auf ihren Anfangszustand zurück.

---

*Verwandt: [Vector Pins](../../interface/vector-pins/), [Abstandsverfolgung](../../interface/distance-tracking/), [Raster & Einrasten](../../interface/grid-snap/), [Koordinateneingabe](../../interface/coordinate-entry/)*
