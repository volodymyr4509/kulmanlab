---
title: Befehl print — Zeichnung als PNG, JPEG, WebP oder PDF exportieren in KulmanLab CAD
description: Der Befehl print öffnet den Druck-Manager — ein dediziertes Exportfenster mit Live-Vorschau, Formatselektor, Monochrom-Schalter und optionaler Bereichsauswahl. Exportiert bis zu 2000×2000 Px. Unterstützt PNG, JPEG, WebP und PDF.
keywords: [CAD PNG exportieren, CAD PDF exportieren, CAD-Zeichnung drucken, Druck-Manager, Monochrom-Export, kulmanlab exportieren]
group: file
order: 4
---

# Print

Der Befehl `print` öffnet den **Druck-Manager** — ein dediziertes Exportfenster mit einer Live-Vorschau-Zeichenfläche, Formatselektor (PNG / JPEG / WebP / PDF), Monochrom-Schalter und optionalem Bereichszuschnitt. Es wird nichts an einen physischen Drucker gesendet; die Ausgabe wird als Datei heruntergeladen.

## Den Druck-Manager öffnen

Klicken Sie auf die Schaltfläche **Print** in der Symbolleiste oder geben Sie `print` im Terminal ein. Der Druck-Manager öffnet sich sofort mit einer Vorschau des aktuellen Ansichtsfensters.

## Layout des Druck-Managers

Das Fenster hat zwei Panels:
- **Linke Seitenleiste** — alle Exportsteuerungen.
- **Rechtes Panel** — Live-Vorschau-Zeichenfläche, die sich bei Einstellungsänderungen aktualisiert.

### Steuerungen der Seitenleiste

| Steuerung | Beschreibung |
|-----------|-------------|
| **Change Area** | Auf ein benutzerdefiniertes Rechteck auf der Zeichenfläche zuschneiden (siehe unten) |
| **Monochrome**-Schalter | Alle farbigen Linien in Schwarz umwandeln — standardmäßig für saubere Druckausgabe aktiviert |
| **Format**-Dropdown | PNG, JPEG, WebP oder PDF |
| **Export**-Schaltfläche | Datei generieren und herunterladen |

## Benutzerdefinierten Exportbereich auswählen

Standardmäßig zeigt die Vorschau genau das, was beim Öffnen des Druck-Managers auf der Zeichenfläche sichtbar war. Um eine bestimmte Region zu exportieren:

1. Klicken Sie auf **Change Area** — der Druck-Manager wird ausgeblendet und die Zeichenfläche wird interaktiv.
2. **Klicken Sie auf die erste Ecke** des Exportrechtecks.
3. **Klicken Sie auf die gegenüberliegende Ecke** — der Druck-Manager öffnet sich erneut mit dem ausgewählten Bereich in der Vorschau.

Drücken Sie `Escape` während der Bereichsauswahl, um abzubrechen und den vorherigen Bereich wiederherzustellen.

Die Vorschau-Zeichenfläche passt ihre Größe dynamisch an das **genaue Seitenverhältnis** des ausgewählten Bereichs an, sodass die Vorschau pixelgenau ist.

## Exportformate

| Format | Am besten für | Hinweise |
|--------|--------------|---------|
| **PNG** | Verlustfrei, scharfe Linien | Weißer Hintergrund, keine Transparenz |
| **JPEG** | Kleinere Datei zum Teilen | 95% Qualität, leichte Komprimierung |
| **WebP** | Kleinste Datei für Web | Gleiche 95% Qualität, bessere Komprimierung als JPEG |
| **PDF** | Druckfertige Dokumente | Bild eingebettet bei 150 DPI im PDF-Container |

Die exportierte Datei wird als `kulman-<Zeitstempel>.<Erweiterung>` benannt und automatisch heruntergeladen.

## Exportauflösung und Hintergrund

- Maximale Auflösung: **2000 × 2000 Pixel**, proportional zum ausgewählten Bereich skaliert.
- Der Hintergrund ist immer **weiß**.
- Layer, die als **nicht druckbar** markiert sind, werden vom Export ausgeschlossen.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `Escape` (während der Bereichsauswahl) | Bereichsauswahl abbrechen, vorherigen Bereich wiederherstellen |
| `Escape` (im Druck-Manager) | Druck-Manager schließen |
