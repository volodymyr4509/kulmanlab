---
title: "DXF in PDF umwandeln — im richtigen Maßstab"
description: "DXF kostenlos im Browser in PDF umwandeln — auch in einem exakten Maßstab wie 1:50 auf A3, was Konverter-Seiten nicht können. Ohne Installation und Konto."
keywords: [DXF in PDF umwandeln, DXF zu PDF kostenlos, DXF PDF online, DXF PDF Maßstab, DXF maßstabsgetreu drucken, DXF Konverter, CAD Zeichnung als PDF, DXF PDF A3, Maßstab 1:50 PDF, DXF PDF ohne AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Anleitung
---

Um eine DXF in ein PDF umzuwandeln, öffnen Sie sie in einem browserbasierten CAD-Editor und exportieren — ohne Installation, ohne Konto, und die Datei bleibt auf Ihrem Rechner. Soll das PDF im Ausdruck maßhaltig sein, brauchen Sie ein Papier-Layout und einen exakten Maßstab; genau diesen Teil überspringen die meisten Konverter.

Um diesen Unterschied geht es hier. Ein allgemeiner Dateikonverter liefert Ihnen ein Bild Ihrer Zeichnung. Ein maßstäbliches PDF liefert eine Zeichnung, an die jemand ein Lineal anlegen kann.

## Der schnelle Weg: einfach ein PDF erzeugen

Wenn Sie nur etwas Lesbares zum Verschicken brauchen:

1. Öffnen Sie [app.kulmanlab.com](https://app.kulmanlab.com) und ziehen Sie Ihre `.dxf` auf die Zeichenfläche, oder nutzen Sie die Schaltfläche **Import** im Datei-Panel.
2. Klicken Sie auf **Print** oder tippen Sie `printmanager`.
3. Stellen Sie **Format** auf **PDF**.
4. Klicken Sie auf **Export**. Die Datei wird heruntergeladen.

Das war's. Die Vorschau wird über denselben Code-Pfad und in derselben Auflösung gerendert wie die exportierte Datei — Sie sehen also das Ergebnis und keine Annäherung daran.

Ein Punkt lohnt sich zu wissen: Anders als beim DXF-Export **behält das PDF alles, was auf dem Bildschirm steht** — Bemaßungen, Text, Schraffuren, Leader. Bei einer beschrifteten Zeichnung ist PDF das Format, das die Beschriftung mitnimmt.

## Der richtige Weg: im exakten Maßstab umwandeln

Wenn jemand danach messen oder bauen soll, reicht „passt auf eine Seite" nicht. Maßstab 1:50 heißt, dass 1 mm auf dem Papier 50 mm in Wirklichkeit sind — und das gilt nur, wenn Sie es bewusst einstellen.

1. **Wechseln Sie in ein Papier-Layout.** Klicken Sie unten auf einen Layout-Reiter; die Schaltfläche **+** legt einen neuen an. Layouts sind Papierbereich; im Modellbereich gibt es keine Seite, auf die sich skalieren ließe.
2. **Legen Sie das Blatt fest.** Tippen Sie `pagemanager`, oder rechtsklicken Sie den Layout-Reiter und wählen **Page Manager**. Wählen Sie Papierformat (A4, A3, A2, Letter …) und Ausrichtung.
3. **Setzen Sie ein Ansichtsfenster.** Tippen Sie `viewportrectangle` und picken Sie zwei gegenüberliegende Ecken. Das Ansichtsfenster ist ein Fenster auf Ihr Modell.
4. **Stellen Sie den Maßstab ein.** Nutzen Sie bei aktivem Ansichtsfenster den **Maßstabswähler** in der Steuerleiste. Wählen Sie ein Standardverhältnis oder tippen Sie ein eigenes — akzeptiert werden Verhältnisse (`1:200`, `5:1`) oder eine Dezimalzahl (`0.005`), dann Enter.
5. **Exportieren.** Print Manager → PDF → Export.

Das PDF ist so dimensioniert, dass die Seite im echten physischen Maßstab druckt. Drucken Sie es mit 100 % — nicht mit „An Seite anpassen", was alles stillschweigend umskaliert und die Arbeit zunichtemacht — dann stimmen die Maße auf dem Papier.

Ändern Sie danach Papierformat oder Maßstab, werden vorhandene Ansichtsfenster proportional mitskaliert, das Layout fällt also nicht auseinander.

## Die passende Qualitätsstufe

Das Dropdown **Quality** legt fest, mit welcher DPI das PDF gerendert wird:

| Quality | DPI | Wofür |
|---|---|---|
| Draft | 72 | Schnelle Kontrolle, kleinste Datei |
| Normal | 150 | Standard — reicht für A4-Anhänge |
| Presentation | 300 | Wenn genau hingeschaut wird |
| Max | 600 | Großformat, feine Details |

Linienstärken skalieren mit der Auflösung mit, eine Linie behält also bei jeder Stufe dieselbe *physische* Dicke auf dem Papier — höhere Qualität bringt eine schärfere Linie, keine dünnere. Ausnahme ist die Haarlinie (Linienstärke `0`), die konventionsgemäß auf jeder Stufe ein Pixel breit bleibt.

## Druckstile

Das Dropdown **Style** ändert Farbe und Blatt:

- **Monochrome** — durchgehend Schwarz auf Weiß, und die Voreinstellung. Das ist es, was Sie für Papier wollen: farbige Layer, die am Bildschirm gut lesbar sind, werden im Laserdruck zu matschigem Grau.
- **Default** — jede Entität in ihrer eigenen Farbe, weiße Seite.
- **Blueprint** — weiße Linien auf tiefem Preußischblau, im Stil einer klassischen Blaupause. Für Präsentationen, nicht für die Werkstatt.

## Nur einen Ausschnitt umwandeln

**Change Area** beschneidet den Export auf ein Rechteck, das Sie auf der Zeichenfläche aufziehen. Beschnitten wird die tatsächlich exportierte Datei, nicht nur die Vorschau, und es funktioniert im Layout ebenso wie im Modellbereich.

Die Ecken fangen an Grips und Schnittpunkten wie jeder andere Punkt, Sie können also an gezeichneter Geometrie beschneiden statt nach Augenmaß — praktisch, wenn ein Blatt vier Details trägt und Sie nur das dritte brauchen.

## Was das nicht leistet

Ehrliche Grenzen, bevor Sie sich darauf verlassen:

- **Das PDF ist ein Rasterbild in einem PDF-Container, kein Vektor.** Bei A4 und Normal ist das unsichtbar. Bei A1, oder wenn jemand ganz nah an ein Detail heranzoomt, ist ein Vektor-PDF aus einem Desktop-CAD-Paket schärfer. Für Großformate stellen Sie Quality auf Presentation oder Max — Vektor wird es dadurch nicht.
- **Nichts geht an einen physischen Drucker.** Sie bekommen eine Datei; das Drucken übernimmt Ihr Drucker.
- **Nur Desktop-Browser** — Chrome, Firefox, Safari, Edge. Keine mobile Version.
- **Nur 2D, DXF statt DWG.** Ist Ihre Datei eine `.dwg`, bitten Sie den Absender um einen DXF-Export.

## Wann etwas anderes besser passt

**Ein allgemeiner Dateikonverter** (CloudConvert, Zamzar und ähnliche) ist in Ordnung, wenn Sie wirklich nur ein Bild brauchen und die Druckgröße egal ist. Sie sind schnell und beherrschen Formate, die sonst niemand liest. 1:50 auf A3 liefern sie Ihnen nicht.

**Desktop-CAD** — LibreCAD, QCAD oder AutoCAD, falls vorhanden — erzeugt Vektor-PDFs und ist die richtige Antwort für großformatige technische Zeichnungen, die sauber gedruckt und genau geprüft werden.

**Dieser Weg** für das große Mittelfeld: eine DXF, die Sie heute als korrekt skaliertes, beschriftetes PDF brauchen, ohne irgendetwas zu installieren.

## Bevor Sie es verschicken

- Maßstab bewusst im Ansichtsfenster gesetzt, nicht auf dem gelassen, was gerade passte
- Papierformat passt zu dem, worauf der Empfänger tatsächlich druckt
- Quality über Normal gestellt, wenn es größer als A4 wird
- Style auf Monochrome, sofern Sie nicht ausdrücklich Farbe wollen
- Das PDF einmal geöffnet und geprüft, bevor Sie es anhängen
- Dem Empfänger gesagt, mit 100 % zu drucken, nicht mit „An Seite anpassen"

Diese letzte Zeile rettet mehr maßstäbliche Zeichnungen als alles andere auf dieser Liste.

---

*Weiterführend: [Print Manager](/de/docs/commands/print-manager/) für sämtliche Export-Einstellungen, [Page Manager](/de/docs/commands/page-manager/) für Papierformat und Layout-Maßstab, [ViewportRectangle](/de/docs/commands/viewport-rectangle/) zum Setzen und Skalieren von Ansichtsfenstern und [Import](/de/docs/commands/import/) dazu, was KulmanLab aus einer DXF liest.*
