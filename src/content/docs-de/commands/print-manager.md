---
title: Druck-Manager — Zeichnung als PNG, JPEG, WebP oder PDF exportieren
description: Der Befehl PrintManager öffnet den Druck-Manager — ein dediziertes Exportfenster mit einer Live-Vorschau, die exakt dem exportierten Bild entspricht, einer Qualität/DPI-Einstellung, Formatselektor, einem Default/Monochrome/Blueprint-Druckstil und optionaler Bereichsauswahl. Unterstützt PNG, JPEG, WebP und PDF.
keywords: [CAD PNG exportieren, CAD PDF exportieren, CAD-Zeichnung drucken, Druck-Manager, Druckqualität DPI, Monochrom-Export, Blueprint-Druckstil, kulmanlab exportieren]
group: file
order: 4
---

# Druck-Manager

Der Befehl `PrintManager` öffnet den **Druck-Manager** — ein dediziertes Exportfenster mit einer Live-Vorschau-Zeichenfläche, Formatselektor (PNG / JPEG / WebP / PDF), einem Stil-Selektor (Default / Monochrome / Blueprint) und optionalem Bereichszuschnitt. Es wird nichts an einen physischen Drucker gesendet; die Ausgabe wird als Datei heruntergeladen.

## Den Druck-Manager öffnen

Klicken Sie auf die Schaltfläche **Print** in der Symbolleiste oder geben Sie `PrintManager` im Terminal ein. Der Druck-Manager öffnet sich sofort mit einer Vorschau des aktuellen Ansichtsfensters.

Die Vorschau wird über exakt denselben Code-Pfad, in exakt derselben Pixelauflösung gerendert wie die Datei, die Sie letztlich exportieren — eine Änderung von Qualität, Stil oder Exportbereich rendert die Vorschau sofort neu, sodass das, was Sie sehen, genau dem entspricht, was heruntergeladen wird, keine Annäherung.

## Layout des Druck-Managers

Das Fenster hat zwei Panels:
- **Linke Seitenleiste** — alle Exportsteuerungen.
- **Rechtes Panel** — Live-Vorschau-Zeichenfläche, die sich bei Einstellungsänderungen aktualisiert.

### Steuerungen der Seitenleiste

| Steuerung | Beschreibung |
|-----------|-------------|
| **Change Area** | Auf ein benutzerdefiniertes Rechteck auf der Zeichenfläche zuschneiden (siehe unten) — schneidet tatsächlich das exportierte Bild zu, auch bei einem Layout mit Papierbereich, nicht nur die Bildschirmvorschau |
| **Quality**-Dropdown | Legt die Exportauflösung fest (siehe unten) |
| **Style**-Dropdown | Default, Monochrome oder Blueprint — siehe *Druckstile* unten. Standardmäßig Monochrome für eine saubere Druckausgabe |
| **Format**-Dropdown | PNG, JPEG, WebP oder PDF |
| **Export**-Schaltfläche | Datei generieren und herunterladen |

## Druckstile

Das **Style**-Dropdown steuert sowohl die Tintenfarbe, mit der Entitäten gezeichnet werden, als auch den Seitenhintergrund:

| Stil | Tinte | Seitenhintergrund |
|------|-------|--------------------|
| **Default** | Die eigene Farbe jeder Entität | Weiß |
| **Monochrome** *(Standard)* | Vollflächig Schwarz, unabhängig von Entitäts-/Layerfarbe | Weiß |
| **Blueprint** | Vollflächig Weiß, unabhängig von Entitäts-/Layerfarbe | Tiefes Preußischblau, mit einem dezenten Referenzraster |

Blueprint reproduziert die Optik eines traditionellen Cyanotypie-Architekturdrucks — weiße Linien auf einem dunkelblauen Blatt. Sein Referenzraster ist relativ zur Seitengröße dimensioniert, nicht zur DPI, sodass es bei jeder Qualitätsstufe gleich dicht wirkt, statt mit steigender Auflösung dichter zu werden.

## Qualität und Auflösung

Das Dropdown **Qualität** legt die DPI fest, mit der der Export gerendert wird:

| Qualität | DPI |
|----------|-----|
| Draft | 72 |
| Normal *(Standard)* | 150 |
| Presentation | 300 |
| Max | 600 |

Eine höhere Qualität erzeugt ein größeres, schärferes Bild bei gleicher physischer Größe — Linienstärken skalieren zusammen mit der Auflösung, sodass eine Linie bei jeder Qualitätsstufe die gleiche *physische* Dicke auf dem Papier behält, statt bei steigender DPI dünner zu wirken. Die einzige Ausnahme ist eine Haarlinie (Linienstärke `0`), die herkömmlich als "die dünnste Linie, die das Ausgabegerät zeichnen kann" definiert wird — sie behält bei jeder Qualitätsstufe eine feste Breite von 1 Pixel, genau wie auf der Live-Zeichenfläche.

Eine Änderung der Qualität rendert die Vorschau sofort neu, sodass Sie die tatsächliche Schärfe (und den Kompromiss bei der Dateigröße) vor dem Export sehen.

## Benutzerdefinierten Exportbereich auswählen

Standardmäßig zeigt die Vorschau den Begrenzungsrahmen aller Objekte im Modellbereich — dieselbe Ausdehnung, auf die [Fit](../fit/) zoomt — oder das gesamte Blatt bei einem Layout. Um einen bestimmten Bereich zu exportieren:

1. Klicken Sie auf **Change Area** — der Druck-Manager wird ausgeblendet und die Zeichenfläche wird interaktiv.
2. **Klicken Sie auf die erste Ecke** des Exportrechtecks.
3. **Klicken Sie auf die gegenüberliegende Ecke** — der Druck-Manager öffnet sich erneut mit dem ausgewählten Bereich in der Vorschau.

Drücken Sie `Escape` während der Bereichsauswahl, um abzubrechen und den vorherigen Bereich wiederherzustellen.

Die Vorschau-Zeichenfläche passt ihre Größe dynamisch an das **genaue Seitenverhältnis** des ausgewählten Bereichs an, sodass die Vorschau pixelgenau ist.

Der gewählte Bereich wird bis zum Neuladen der Seite getrennt für den Modellbereich und für jedes Layout gemerkt — siehe [ChangePrintArea](../change-print-area/).

## Exportformate

| Format | Am besten für | Hinweise |
|--------|--------------|---------|
| **PNG** | Verlustfrei, scharfe Linien | Seitenhintergrund des Stils eingebettet, keine Transparenz |
| **JPEG** | Kleinere Datei zum Teilen | 95% Qualität, leichte Komprimierung |
| **WebP** | Kleinste Datei für Web | Gleiche 95% Qualität, bessere Komprimierung als JPEG |
| **PDF** | Druckfertige Dokumente | Bild eingebettet in einen PDF-Container bei der DPI der gewählten Qualität, so bemessen, dass die Seite in wahrem physischem Maßstab gedruckt wird |

Die exportierte Datei wird als `kulman-<Zeitstempel>.<Erweiterung>` benannt und automatisch heruntergeladen.

## Exportauflösung und Hintergrund

- **Model-Space-/Ansichtsfenster-Export**: bei der Standard-Qualität Normal (150 DPI) auf 2000 × 2000 Pixel begrenzt, proportional zum ausgewählten Bereich skaliert; die Grenze skaliert ebenfalls mit der Qualität — Draft niedriger, Presentation und Max höher (bis zu 8000 × 8000 bei Max/600 DPI).
- **Layout-(Papierbereich-)Export**: direkt aus den Papierabmessungen des Layouts bei der gewählten DPI bemessen — z. B. exportiert ein A4-Blatt (210 × 297 mm) bei Qualität Normal mit etwa 1240 × 1754 px — unterliegt also nicht der 2000-px-Grenze des Ansichtsfensters.
- Der Hintergrund richtet sich nach dem gewählten Druck-**Style** — weiß bei Default und Monochrome, tiefes Preußischblau bei Blueprint (siehe *Druckstile* oben).
- Layer, die als **nicht druckbar** markiert sind, werden vom Export ausgeschlossen.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `Escape` (während der Bereichsauswahl) | Bereichsauswahl abbrechen, vorherigen Bereich wiederherstellen |
| `Escape` (im Druck-Manager) | Druck-Manager schließen |
