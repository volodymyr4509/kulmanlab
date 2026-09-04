---
title: Export-Manager — Zeichnungen als DXF oder JSON herunterladen
description: Die aktuelle Zeichnung als DXF oder JSON herunterladen. Beide tragen jeden Elementtyp — Geometrie, Text, Bemaßungen, Leader, Schraffuren — samt Layern und Linientypen.
keywords: [DXF exportieren, CAD-Datei exportieren, DXF im Browser herunterladen, DXF online speichern, JSON-CAD exportieren, KulmanLab Export, CAD-Datei herunterladen, DXF-Export, Zeichnung in Datei speichern, DXF-Download]
group: file
order: 6
---

# Export-Manager

Der Befehl `exportmanager` lädt die aktuelle Zeichnung auf Ihr Dateisystem herunter. Zwei Formate stehen als nebeneinanderliegende Karten zur Verfügung: **DXF** für die Kompatibilität mit anderen CAD-Werkzeugen und **JSON** für verlustfreie Speicherung innerhalb von KulmanLab CAD — jede Karte listet genau auf, welche Elementtypen dieses Format enthält.

## So exportieren Sie

1. Klicken Sie auf die Schaltfläche **Export** in der Symbolleiste (Download-Symbol) im Dateibereich, oder geben Sie `exportmanager` im Terminal ein.
2. Das Popup **Export-Manager** öffnet sich und zeigt die JSON- und DXF-Karten nebeneinander, jede mit einer Auflistung dessen, was exportiert wird.
3. Klicken Sie auf eine Karte, um das Format auszuwählen — **JSON** oder **DXF**.
4. Klicken Sie auf die Schaltfläche **Export \<FORMAT\>**. Die Datei wird automatisch in Ihren Standard-Download-Ordner heruntergeladen.

Drücken Sie `Escape`, um das Popup ohne Export zu schließen.

## Format auswählen

| Format | Erweiterung | Geeignet für | Einschränkungen |
|--------|-------------|--------------|-----------------|
| **JSON** *(nativ)* | `.json` | Arbeit speichern, um sie in KulmanLab CAD wieder zu öffnen | Nicht kompatibel mit anderen CAD-Werkzeugen |
| **DXF** | `.dxf` | Weitergabe an FreeCAD, LibreCAD usw. | Wie viel erhalten bleibt, hängt vom empfangenden Programm ab |

**Wann JSON verwenden:** immer wenn Sie eine vollständige Kopie Ihrer Arbeit speichern möchten. JSON ist das native Format von KulmanLab und bewahrt jedes Element genau — einschließlich Bemaßungen, Hinweislinien, Hatches und aller Ebenendaten.

**Wann DXF verwenden:** wenn Sie die Zeichnung an jemanden übergeben möchten, der eine andere CAD-Anwendung verwendet. Die exportierte Datei verwendet das AC1032-DXF-Format und kann in den meisten DXF-kompatiblen Werkzeugen geöffnet werden.

## Was pro Format exportiert wird

### JSON-Export

Jeder Elementtyp ist enthalten:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Bemaßungen (linear, ausgerichtet, fortgesetzt, Radius, Durchmesser)
- Leaders (Mehrfach-Hinweislinien)
- Hatches, einschließlich Muster, Skalierung, Winkel und Ursprung
- Layers und Linetypes

### DXF-Export

Jeder Elementtyp ist enthalten:

- Lines, Circles, Arcs, Ellipses, Polylines (als `LWPOLYLINE` exportiert), Splines
- Text
- Bemaßungen (linear, ausgerichtet, fortgesetzt, Radius, Durchmesser)
- Leaders (Mehrfach-Hinweislinien)
- Hatches, einschließlich Muster, Skalierung, Winkel und Ursprung
- Layers und Linetypes

Die Datei wird als AC1032-DXF geschrieben, sodass eine aus KulmanLab exportierte Zeichnung in anderen DXF-fähigen Werkzeugen mit intakter Beschriftung öffnet, statt als nackte Geometrie anzukommen.

Was das empfangende Programm dann daraus macht, ist weiterhin unterschiedlich — die DXF-Unterstützung fällt je nach Werkzeug anders aus, und ein älteres ignoriert womöglich Elemente, die ein neueres liest. Muss eine Zeichnung überall identisch aussehen, hält [Druck-Manager](../print-manager/) sie stattdessen als PDF oder Bild fest.

## Name der exportierten Datei

Die heruntergeladene Datei wird nach der aktuellen Zeichnungsdatei benannt (z. B. `myplan.json`). Die Erweiterung ändert sich entsprechend dem gewählten Format.

## Unterschied zwischen Export-Manager und Druck-Manager

| Funktion | Export-Manager | Druck-Manager |
|----------|--------|-------|
| Ausgabe | Vektorquelldatei (.dxf / .json) | Rasterbild (.png / .jpeg / .webp / .pdf) |
| In anderen Werkzeugen bearbeitbar | Ja (DXF) | Nein |
| Bewahrt Layers & Linetypes | Ja | Nein (gerendert flach) |
| Erfasst Bemaßungen & Leaders | Ja | Ja |

Verwenden Sie **Export-Manager**, wenn Sie eine bearbeitbare Datei benötigen. Verwenden Sie den [Druck-Manager](../print-manager/), wenn Sie einen visuellen Schnappschuss benötigen.

## Verwandte Befehle

- [Import](../import/) — DXF- oder JSON-Datei öffnen
- [Druck-Manager](../print-manager/) — Zeichenfläche als PNG, JPEG, WebP oder PDF exportieren
- [File Manager](../file-manager/) — im Browser-Speicher gespeicherte Zeichnungen durchsuchen
