---
title: Befehl Führungsstil — Führungslinienstile verwalten
description: Erstellen Sie CAD-Führungslinienstile mit Pfeilspitze, Anbindung, Abstand, Drehung, Schrift, Höhe und Textrahmen.
keywords: [Führungsstil CAD, Führungslinienstil, MLEADERSTYLE, Pfeilspitze CAD, Textanbindung, DXF Stil, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Der Befehl `Führungsstil` öffnet die Verwaltung benannter Führungslinienstile. Jede neue [Führungslinie](../leader/) kopiert beim Erstellen die Einstellungen des *aktuellen* Stils.

## Stil bearbeiten

Geben Sie `Führungsstil` ein oder klicken Sie im Beschriftungsbereich auf **Führungslinienstil**. ✓ kennzeichnet den aktuellen Stil; mit dem Stift neben einem Namen benennen Sie ihn um. Die Vorschau wird sofort mit demselben Renderer wie die Zeichnung aktualisiert.

| Feld | Wirkung |
|---|---|
| Textanbindung | Oben, Mitte, Unten oder Unterstrichen |
| Pfeilspitze / Pfeilgröße | Symbol und Größe an der Armspitze |
| Abstand zur Anlandung | Abstand zwischen Anlandung und Text |
| Textdrehung | Drehung der Beschriftung in Grad |
| Textstil | Einmalige Übernahme von Schrift, Höhe, Fett und Kursiv aus einem [TextStyle](../text-style/) |
| Schrift / Texthöhe | Schriftart und Höhe der Beschriftung |
| Fett / Kursiv | Unabhängige Textformatierung |
| Text mit Rahmen | Rechteckiger Rahmen um die Beschriftung |

**Neu** dupliziert den ausgewählten Stil. `Standard` kann weder umbenannt noch gelöscht werden; auch der aktuelle Stil kann nicht gelöscht werden. **Aktuell setzen** gilt nur für künftig erstellte Führungslinien — vorhandene Objekte bleiben unverändert. Leere, doppelte oder für DXF ungültige Namen sperren **OK**. Importierte Beschriftungsstile sind verborgen, bleiben aber erhalten.

## Speichern und DXF

**OK** übernimmt alle Änderungen; **Schließen** oder `Escape` verwirft sie. KulmanLab liest und schreibt `MLEADERSTYLE`-Datensätze. Name, Pfeilspitze und -größe, Anlandungsabstand, Texthöhe, Textanbindung, Rahmen und Beschriftungskennzeichen werden als Stilfelder gespeichert. Drehung, Schrift, Fett und Kursiv sind KulmanLab-Vorgaben und werden beim Erstellen auf die Führungslinie kopiert.

Siehe auch [Leader](../leader/), [LeaderAdd](../leader-add/) und [LeaderRemove](../leader-remove/).
