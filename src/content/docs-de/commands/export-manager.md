---
title: Export-Manager — Zeichnungen als DXF oder JSON herunterladen
description: Die Zeichnung als DXF oder JSON laden, je Elementtyp ankreuzen, was hineinkommt. Beide tragen Geometrie, Text, Bemaßungen, Leader, Schraffuren, Layer und Linientypen.
keywords: [DXF exportieren, CAD-Datei exportieren, DXF im Browser herunterladen, DXF online speichern, JSON-CAD exportieren, KulmanLab Export, CAD-Datei herunterladen, DXF-Export, Zeichnung in Datei speichern, DXF-Download]
group: file
order: 6
---

# Export-Manager

Der Befehl `Exportmanager` lädt die aktuelle Zeichnung auf Ihr Dateisystem herunter. Zwei Formate stehen nebeneinander — **DXF** für die Kompatibilität mit anderen CAD-Werkzeugen und **JSON** für verlustfreie Sicherungen innerhalb von KulmanLab CAD — und jedes hat seine eigene Checkliste dessen, was in die Datei kommt.

## So exportieren Sie

1. Klicken Sie auf die Schaltfläche **Export** in der Symbolleiste (Download-Symbol) im Dateibereich, oder geben Sie `Exportmanager` im Terminal ein.
2. Das Popup **Export Manager** öffnet sich mit zwei Spalten, **JSON** und **DXF**, die jeweils die Elementtypen der Zeichnung mit Kontrollkästchen und Anzahl auflisten.
3. Haken Sie ab, was weggelassen werden soll. Anfangs ist alles angehakt.
4. Klicken Sie auf **Export JSON** oder **Export DXF**. Die Datei landet in Ihrem Standard-Download-Ordner und das Popup schließt sich.

Drücken Sie `Escape`, um das Popup ohne Export zu schließen.

## Auswählen, was exportiert wird

Beide Spalten listen dieselben Elementtypen auf, jeweils mit der Anzahl in der Zeichnung:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Beim Öffnen ist alles angehakt, ein sofortiger Export liefert also die ganze Zeichnung. Nehmen Sie den Haken weg, um einen Typ aus genau dieser Datei herauszuhalten.

- **Die beiden Spalten sind unabhängig.** Hatches unter DXF abzuwählen ändert nichts daran, was **Export JSON** erzeugt — jedes Format behält seine eigene Auswahl.
- **Was Sie nicht haben, ist ausgegraut.** Eine Zeile mit der Anzahl `0` lässt sich nicht anhaken, die Liste ist damit zugleich eine schnelle Bestandsaufnahme der Zeichnung.
- **Die Zahlen sind eine Momentaufnahme.** Sie entstehen beim Öffnen und aktualisieren sich nicht, wenn sich die Zeichnung dahinter ändert. Zum Auffrischen schließen und erneut öffnen.
- **Es wird nichts gelöscht.** Das Abwählen formt nur die exportierte Datei; die Zeichnung selbst bleibt unangetastet.

**Linear Dimensions** umfasst lineare, ausgerichtete und fortgesetzte Bemaßungen: ein Elementtyp, erzeugt von drei verschiedenen Befehlen. Radius, Durchmesser und Winkel haben je eine eigene Zeile.

Für eine Schnittdatei nehmen Sie die Haken bei Text, den vier Bemaßungszeilen, Leaders und Hatches weg und klicken **Export DXF** — siehe [eine DXF fürs Laserschneiden vorbereiten](/de/blog/prepare-dxf-for-laser-cutting/).

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
- Bemaßungen (linear, ausgerichtet, fortgesetzt, Radius, Durchmesser, Winkel)
- Leaders (Mehrfach-Hinweislinien)
- Hatches, einschließlich Muster, Skalierung, Winkel und Ursprung
- Layers und Linetypes

### DXF-Export

Jeder Elementtyp ist enthalten:

- Lines, Circles, Arcs, Ellipses, Polylines (als `LWPOLYLINE` exportiert), Splines
- Text
- Bemaßungen (linear, ausgerichtet, fortgesetzt, Radius, Durchmesser, Winkel)
- Leaders (Mehrfach-Hinweislinien)
- Hatches, einschließlich Muster, Skalierung, Winkel und Ursprung
- Layers und Linetypes

Die Datei wird als AC1032-DXF geschrieben, sodass eine aus KulmanLab exportierte Zeichnung in anderen DXF-fähigen Werkzeugen mit intakter Beschriftung öffnet, statt als nackte Geometrie anzukommen.

Was das empfangende Programm dann daraus macht, ist weiterhin unterschiedlich — die DXF-Unterstützung fällt je nach Werkzeug anders aus, und ein älteres ignoriert womöglich Elemente, die ein neueres liest. Muss eine Zeichnung überall identisch aussehen, hält [Druck-Manager](../print-manager/) sie stattdessen als PDF oder Bild fest.

## Name der exportierten Datei

Die heruntergeladene Datei wird nach der aktuellen Zeichnungsdatei benannt (z. B. `myplan.json`). Die Erweiterung ändert sich entsprechend dem gewählten Format. Eine nie benannte Zeichnung wird als `drawing.dxf` oder `drawing.json` exportiert.

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
