---
title: KulmanLab CAD — Befehlsreferenz
description: KulmanLab CAD Befehlsreferenz — vollständige Anleitung zu allen Zeichen-, Bearbeitungs-, Beschriftungs-, Ebenen-, Mess- und Dateibefehlen in KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, CAD-Befehle, kostenloses Browser-CAD, DXF-Editor online, Zeichenbefehle, kulmanlab-Befehle]
---

# KulmanLab CAD — Befehlsreferenz

Willkommen bei der **KulmanLab CAD** Befehlsreferenz. [KulmanLab CAD](https://kulmanlab.com) ist ein kostenloses, browserbasiertes CAD-Werkzeug zum Zeichnen, Bearbeiten und Exportieren von DXF-Dateien — keine Installation erforderlich. Verwenden Sie die Seitenleiste, um alle verfügbaren Befehle nach Bereich gegliedert zu durchsuchen.

## Formen

| Befehl | Funktion |
|--------|----------|
| [Line](./commands/line/) | Gerade Linie zwischen zwei Punkten zeichnen |
| [Polyline](./commands/polyline/) | Mehrsegmentigen offenen Pfad zeichnen |
| [Rectangle](./commands/rectangle/) | Achsenparalleles Rechteck zeichnen |
| [Circle](./commands/circle/) | Kreis durch Mittelpunkt und Radius zeichnen |
| [Arc](./commands/arc/) | Bogen durch drei Punkte zeichnen |
| [Ellipse](./commands/ellipse/) | Ellipse durch Mittelpunkt und zwei Achsen zeichnen |
| [Text](./commands/text/) | Textbeschriftung auf der Zeichenfläche platzieren |
| [Spline CV](./commands/spline-cv/) | Spline durch Platzieren von Kontrollpunkten zeichnen |
| [Spline Fit](./commands/spline-fit/) | Spline zeichnen, der durch geklickte Punkte verläuft |

## Bearbeiten

| Befehl | Funktion |
|--------|----------|
| [Move](./commands/move/) | Ausgewählte Elemente an eine neue Position verschieben |
| [Copy](./commands/copy/) | Ausgewählte Elemente an eine neue Position kopieren |
| [Rotate](./commands/rotate/) | Ausgewählte Elemente um einen Basispunkt drehen |
| [Mirror](./commands/mirror/) | Ausgewählte Elemente an einer Linie spiegeln |
| [Scale](./commands/scale/) | Ausgewählte Elemente um einen Basispunkt skalieren |
| [Delete](./commands/delete/) | Ausgewählte Elemente aus der Zeichnung entfernen |
| [Trim](./commands/trim/) | Liniensegment an seinen Schnittpunkten kürzen |
| [Extend](./commands/extend/) | Linie bis zur nächsten Begrenzungsschnittlinie verlängern |
| [Offset](./commands/offset/) | Parallele Kopie eines Elements in einem bestimmten Abstand erstellen |
| [Fillet](./commands/fillet/) | Ecke zwischen zwei Linien mit einem Tangentenbogen abrunden |
| [Chamfer](./commands/chamfer/) | Gerade diagonale Ecke zwischen zwei Linien oder Polylinien schneiden |
| [Undo](./commands/undo/) | Letzte Aktion rückgängig machen |
| [Redo](./commands/redo/) | Zuletzt rückgängig gemachte Aktion wiederherstellen |

## Beschriftung

| Befehl | Funktion |
|--------|----------|
| [Leader](./commands/leader/) | Mehrfach-Hinweislinie mit Pfeilspitze und Text zeichnen |
| [Leader+](./commands/leader-add/) | Zusätzlichen Arm zu einer vorhandenen Mehrfach-Hinweislinie hinzufügen |
| [Leader−](./commands/leader-remove/) | Arm von einer vorhandenen Mehrfach-Hinweislinie entfernen |
| [Dimension Linear](./commands/dim-linear/) | Horizontale oder vertikale Bemaßung hinzufügen |
| [Dimension Aligned](./commands/dim-aligned/) | An zwei Punkte ausgerichtete Bemaßung hinzufügen |
| [Dimension Continue](./commands/dim-continue/) | Neue Bemaßung an die letzte anschließen |
| [Dimension Radius](./commands/dim-radius/) | Radiusbemaßung für einen Kreis oder Bogen hinzufügen |
| [Dimension Diameter](./commands/dim-diameter/) | Durchmesserbemaßung für einen Kreis hinzufügen |
| [Dimension Angular](./commands/dim-angular/) | Winkelbemaßung für zwei Linien, einen Bogen oder einen Kreis hinzufügen |

## Ebene

| Befehl | Funktion |
|--------|----------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Aktuelle Ebene auf die Ebene des angeklickten Elements setzen |
| [LayerMatch](./commands/layer-match/) | Ausgewählte Elemente der Ebene eines Quellelements zuweisen |
| [LayerIsolate](./commands/layer-isolate/) | Alle Ebenen außer denen der ausgewählten Elemente einfrieren |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Alle Ebenen in einem Schritt auftauen |

## Layouts

| Befehl | Funktion |
|--------|----------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Ansichtsfenster in einem Papier-Layout durch Auswahl zweier Ecken erstellen |
| [ViewportCopy](./commands/viewport-copy/) | Ansichtsfenster an eine neue Position duplizieren |
| [PageManager](./commands/page-manager/) | Papiergröße und Maßstab für das aktive Layout bearbeiten |

## Navigation

| Befehl | Funktion |
|--------|----------|
| [Pan](./commands/pan/) | Klicken und ziehen, um das Ansichtsfenster zu verschieben |
| [Zoom In](./commands/zoom-in/) | Ansichtsfenster vergrößern |
| [Zoom Out](./commands/zoom-out/) | Ansichtsfenster verkleinern |
| [Fit](./commands/fit/) | Alle Elemente in das Ansichtsfenster einpassen |

## Messen

| Befehl | Funktion |
|--------|----------|
| [Distance](./commands/distance/) | Abstand zwischen zwei Punkten messen |
| [Angle](./commands/angle/) | Winkel zwischen drei Punkten messen |
| [Area](./commands/area/) | Fläche und Umfang eines Polygons messen |

## Stil

| Befehl | Funktion |
|--------|----------|
| [Match Properties](./commands/match-properties/) | Farbe, Ebene und andere Eigenschaften von einem Element auf andere übertragen |
| [Font Manager](./commands/font-manager/) | Schriftarten durchsuchen, auswählen und eigene TTF-Dateien hochladen |

## Datei

| Befehl | Funktion |
|--------|----------|
| [Import](./commands/import/) | DXF- oder JSON-Zeichnungsdatei öffnen |
| [New File](./commands/new-file/) | Neue leere Zeichnung beginnen |
| [Files](./commands/files/) | Zuletzt verwendete Zeichnungen durchsuchen und wiederherstellen |
| [Print](./commands/print/) | Zeichnungsbereich als Bild oder PDF exportieren |
| [Export](./commands/export/) | Zeichnung als DXF oder JSON herunterladen |
| [WipeStorage](./commands/wipestorage/) | Alle Zeichnungen aus dem Browser-Speicher löschen |

## Wiederherstellung

Wenn die App bei jedem Start abstürzt (zum Beispiel nach der Arbeit mit extrem großen Koordinaten), können Sie alle lokal gespeicherten Daten löschen, indem Sie `?reset` an die URL anhängen:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Dies löscht alles aus der lokalen Browser-Datenbank und beginnt eine neue leere Zeichnung. Der Parameter `?reset` entfernt sich automatisch aus der URL. Verwenden Sie dies als letztes Mittel, wenn [WipeStorage](./commands/wipestorage/) nicht erreichbar ist, weil die App gar nicht lädt.

## So funktionieren Befehle

Jeder Befehl folgt demselben Muster:

1. **Aktivieren** — klicken Sie auf die Symbolleisten-Schaltfläche oder geben Sie den Befehlsnamen im Terminal am unteren Bildschirmrand ein.
2. **Eingabeaufforderung befolgen** — das Terminal zeigt an, welche Eingabe als nächstes erwartet wird.
3. **Abschließen oder abbrechen** — die meisten Befehle enden automatisch nach der letzten Eingabe. Drücken Sie jederzeit **Escape**, um abzubrechen.

## Objekte auswählen

Mehrere Bearbeitungsbefehle (Move, Copy, Rotate, Mirror, Scale, Delete) verwenden dasselbe Auswahlverhalten:

- **Klicken** Sie auf ein Element, um es auszuwählen oder die Auswahl aufzuheben.
- **Nach rechts ziehen** (von links nach rechts) für strenge Auswahl — nur Elemente, die vollständig im Rahmen liegen, werden ausgewählt.
- **Nach links ziehen** (von rechts nach links) für Kreuzauswahl — jedes Element, das den Rahmen schneidet, wird ausgewählt.
- Drücken Sie **Enter** oder **Space**, um die Auswahl zu bestätigen und zum nächsten Schritt fortzufahren.
