---
title: "Bemaßungsstil-Befehl — benannte Bemaßungsstile erstellen und verwalten"
description: "Benannte CAD-Bemaßungsstile für Pfeile, Hilfslinien, Mittelpunktmarken, Text, Genauigkeit, Ausrichtung und DXF-DIMSTYLE verwalten."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# Bemaßungsstil

Der Befehl öffnet einen Dialog zum Erstellen, Bearbeiten, Anzeigen und Auswählen benannter Bemaßungsstile. Neue lineare, ausgerichtete, Radius-, Durchmesser- und Winkelbemaßungen kopieren beim Erstellen den aktuellen Stil; vorhandene Bemaßungen bleiben unverändert.

## Dialog öffnen

Geben Sie den lokalisierten Befehl im Terminal ein oder klicken Sie im Panel **Beschriften** auf die Schaltfläche für den Bemaßungsstil. Links stehen alle sichtbaren Stile; ein Häkchen markiert den aktuellen Stil, und der Stift benennt einen Stil um.

## Linien und Pfeile

**Pfeil 1 / Pfeil 2 · Pfeilgröße · Hilfslinienabstand · Hilfslinienverlängerung · Mittelpunktmarkierung · Größe der Mittelpunktmarkierung**

Legen Sie die beiden Pfeilspitzen getrennt, Pfeilgröße, Abstand und Überstand der Hilfslinien sowie Typ und Größe der Mittelpunktmarke (`Keine`, `Markierung` oder `Linien`) fest.

## Text

**Textstil · Schrift · Texthöhe · Text mit Rahmen · Textabstand · Textanbindung · Text ausgerichtet · Genauigkeit · Winkelgenauigkeit**

Der Textbereich steuert Textstil-Schnellübernahme, Schrift, Höhe, Fett, Kursiv, Rahmen, Abstand, eine von neun Anheftungspositionen, Ausrichtung an der Maßlinie sowie lineare und Winkelgenauigkeit. Die Textstil-Auswahl ist eine einmalige Übernahme und keine aktive Verknüpfung.

Die Vorschau verwendet dieselben Renderer wie die Zeichenfläche. Wechseln Sie zwischen Linear-, Radius-, Durchmesser- und Winkelbeispielen, um Pfeile, Mittelpunktmarken, Textlage, Genauigkeit und Rahmen zu prüfen.

## Stile erstellen und verwalten

**Neu** dupliziert den ausgewählten Stil. `Standard` kann weder umbenannt noch gelöscht werden; der aktuelle Stil kann ebenfalls nicht gelöscht werden. Namen müssen eindeutig, nicht leer und DXF-gültig sein. Importierte annotative Stile bleiben verborgen, werden aber erhalten.

## Aktuellen Stil festlegen

**Aktuell setzen** macht den gewählten Stil zur Vorlage für neue Bemaßungen; dieselbe Auswahl gibt es im Dropdown des Beschriften-Panels. Die Werte werden beim Erstellen kopiert. Dimension Continue übernimmt stattdessen das vollständige Aussehen seiner Basisbemaßung.

## Speichern oder verwerfen

**OK** übernimmt alle Umbenennungen, Ergänzungen, Löschungen, Eigenschaften und die Auswahl des aktuellen Stils gemeinsam. **Schließen**, ein Klick auf den Hintergrund oder `Escape` verwirft sie.

## DXF-Kompatibilität

KulmanLab importiert und exportiert benannte `DIMSTYLE`-Tabelleneinträge einschließlich getrennter Pfeile, Hilfslinien, Text, Genauigkeit, Mittelpunktmarken, Rahmen, Textstil-Verweis und Annotativ-Flag. Beim Import haben objektspezifische `DSTYLE`-Überschreibungen Vorrang.

Beim Export verwendet der referenzierte `STYLE` variable Höhe (`40 = 0`) und speichert die zuletzt verwendete Höhe in Gruppe `42`. So überschreibt eine feste Texthöhe nicht die Texthöhe des Bemaßungsstils.

## Verwandte Befehle

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
