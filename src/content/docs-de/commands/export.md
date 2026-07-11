---
title: Export — Zeichnungen als DXF oder JSON herunterladen in KulmanLab CAD
description: Der Export-Befehl lädt die aktuelle Zeichnung als DXF- oder JSON-Datei (nativ) herunter. JSON bewahrt alle Elemente einschließlich Bemaßungen und Hinweislinien; DXF ist kompatibel mit anderen CAD-Werkzeugen.
keywords: [DXF exportieren, CAD-Datei exportieren, DXF im Browser herunterladen, DXF online speichern, JSON-CAD exportieren, KulmanLab Export, CAD-Datei herunterladen, DXF-Export, Zeichnung in Datei speichern, DXF-Download]
group: file
order: 5
---

# Export

Der **Export**-Befehl lädt die aktuelle Zeichnung auf Ihr Dateisystem herunter. Zwei Formate stehen zur Verfügung: **DXF** für die Kompatibilität mit anderen CAD-Werkzeugen und **JSON** für verlustfreie Speicherung innerhalb von KulmanLab CAD.

## So exportieren Sie

1. Klicken Sie auf die Schaltfläche **Export** in der Symbolleiste (Download-Symbol) im Dateibereich.
2. Das Popup **Export Manager** öffnet sich.
3. Klicken Sie auf eine Formatkarte, um das Format auszuwählen — **JSON** oder **DXF**.
4. Klicken Sie auf die Schaltfläche **Export**. Die Datei wird automatisch in Ihren Standard-Download-Ordner heruntergeladen.

## Format auswählen

| Format | Erweiterung | Geeignet für | Einschränkungen |
|--------|-------------|--------------|-----------------|
| **JSON** *(nativ)* | `.json` | Arbeit speichern, um sie in KulmanLab CAD wieder zu öffnen | Nicht kompatibel mit anderen CAD-Werkzeugen |
| **DXF** | `.dxf` | Weitergabe an FreeCAD, LibreCAD usw. | Bemaßungen und Hinweislinien werden nicht exportiert |

**Wann JSON verwenden:** immer wenn Sie eine vollständige Kopie Ihrer Arbeit speichern möchten. JSON ist das native Format von KulmanLab und bewahrt jedes Element genau — einschließlich Bemaßungen, Hinweislinien und alle Ebenendaten.

**Wann DXF verwenden:** wenn Sie die Zeichnung an jemanden übergeben möchten, der eine andere CAD-Anwendung verwendet. Die exportierte Datei verwendet das AC1012-DXF-Format und kann in den meisten DXF-kompatiblen Werkzeugen geöffnet werden.

## Was pro Format exportiert wird

### JSON-Export

Alle Elementtypen sind enthalten:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines, Text
- Bemaßungen (linear, ausgerichtet, fortgesetzt, Radius, Durchmesser)
- Mehrfach-Hinweislinien
- Ebenendefinitionen und Linientypentabellen

### DXF-Export

Nur Geometrieelemente sind enthalten:

- Lines, Circles, Arcs, Ellipses, Polylines (als `LWPOLYLINE` exportiert), Splines, Text
- Ebenendefinitionen und Linientypentabellen

**Nicht im DXF enthalten:** Bemaßungselemente und Mehrfach-Hinweislinien. Diese verwenden KulmanLab-spezifische Datenstrukturen, die im Standard-DXF nicht zuverlässig dargestellt werden können. Wenn Ihre Zeichnung Annotationen enthält, verwenden Sie JSON oder [Print](../print/), um diese visuell zu erfassen.

## Name der exportierten Datei

Die heruntergeladene Datei wird nach der aktuellen Zeichnungsdatei benannt (z. B. `myplan_May22_14:30:00.json`). Die Erweiterung ändert sich entsprechend dem gewählten Format.

## Unterschied zwischen Export und Print

| Funktion | Export | Print |
|----------|--------|-------|
| Ausgabe | Vektorquelldatei (.dxf / .json) | Rasterbild (.png / .jpeg / .webp / .pdf) |
| In anderen Werkzeugen bearbeitbar | Ja (DXF) | Nein |
| Bewahrt Ebenen & Linientypen | Ja | Nein (gerendert flach) |
| Erfasst Bemaßungen & Hinweislinien | Nur JSON | Ja |

Verwenden Sie **Export**, wenn Sie eine bearbeitbare Datei benötigen. Verwenden Sie [Print](../print/), wenn Sie einen visuellen Schnappschuss benötigen.

## Verwandte Befehle

- [Import](../import/) — DXF- oder JSON-Datei öffnen
- [Print](../print/) — Zeichenfläche als PNG, JPEG, WebP oder PDF exportieren
- [Files](../files/) — im Browser-Speicher gespeicherte Zeichnungen durchsuchen
