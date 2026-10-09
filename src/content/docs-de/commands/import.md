---
title: Import — DXF- oder JSON-Dateien in KulmanLab CAD öffnen
description: Verwenden Sie den Import-Befehl, um DXF- oder KulmanLab-JSON-Dateien in KulmanLab CAD zu öffnen. Unterstützt Linien, Kreise, Bögen, Polylinien, Splines, Text, Bemaßungen und Führungslinien.
keywords: [DXF-Datei importieren, DXF im Browser öffnen, CAD-Datei online importieren, DXF-Datei öffnen, DXF-Viewer Browser, JSON CAD importieren, KulmanLab import, kostenloser CAD DXF-Viewer, Zeichnung laden, DXF im Browser]
group: file
order: 1
---

# Import

Der Befehl **Import** lädt eine vorhandene Zeichnung von Ihrem lokalen Dateisystem in KulmanLab CAD. Sowohl das Standardformat **DXF** als auch das eigene **JSON**-Format von KulmanLab werden unterstützt.

## So importieren Sie eine Datei

1. Klicken Sie auf die Schaltfläche **Import** in der Symbolleiste (Ordner-Symbol) im Datei-Panel oben auf dem Bildschirm.
2. Die Dateiauswahl Ihres Browsers öffnet sich. Navigieren Sie zu Ihrer Zeichnungsdatei und wählen Sie sie aus.
3. Die Zeichnung wird sofort auf der Zeichenfläche geladen. Die Ansicht passt sich automatisch allen Objekten an.

Alternativ können Sie eine Datei direkt auf die Zeichenfläche ziehen und ablegen.

## Unterstützte Dateiformate

| Format | Erweiterung | Verwendung |
|--------|-------------|------------|
| **DXF** | `.dxf` | Zeichnungen aus FreeCAD, LibreCAD oder anderen CAD-Werkzeugen |
| **JSON** *(nativ)* | `.json` | Zeichnungen, die zuvor aus KulmanLab CAD gespeichert wurden — vollständige Wiedergabetreue |

## Was beim DXF-Import übernommen wird

KulmanLab analysiert die folgenden DXF-Entitätstypen:

| Entitätstyp | DXF-Code | Hinweise |
|-------------|----------|---------|
| Linie | `LINE` | |
| Kreis | `CIRCLE` | |
| Bogen | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polylinie | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Bemaßung | `DIMENSION` | |
| Mehrfachführungslinie | `MULTILEADER` | |
| Hatch | `HATCH` | Mustername, Skalierung und Winkel werden gelesen; ein Name, der nicht in Ihrer Musterbibliothek ist, fällt auf ANSI31 zurück. Siehe [Hatch](../hatch/) |

Layerdefinitionen und Linientyptabellen werden ebenfalls aus der DXF-Datei importiert, sofern vorhanden.

Entitäten mit nicht unterstützten DXF-Typen werden stillschweigend übersprungen — der Rest der Zeichnung wird trotzdem geladen.

## Dateiname und Speicherung

Die importierte Datei behält ihren ursprünglichen Namen. Ist dieser Name bereits von einer anderen gespeicherten Zeichnung belegt, wird automatisch ein Suffix im Stil von Finder/Explorer angehängt (`myplan (2)`, `myplan (3)`, …), sodass der bestehende Eintrag niemals überschrieben wird. Sie können die Datei anschließend über den [File Manager](../file-manager/#eine-datei-umbenennen) umbenennen.

Die Zeichnung wird nach dem Import automatisch im Browser-Speicher (IndexedDB) gespeichert, sodass sie im Panel [File Manager](../file-manager/) erscheint und Seitenneulades übersteht.

## Was mit der aktuellen Zeichnung passiert

Beim Import wird die aktuelle Zeichenfläche ersetzt. Es gibt keine Zusammenführung oder Ergänzung. Wenn Sie nicht gespeicherte Änderungen haben, [exportieren](../export-manager/) Sie die aktuelle Zeichnung zuerst.

## Beim Start

KulmanLab öffnet beim Laden der Seite automatisch die zuletzt bearbeitete Datei. Wenn keine gespeicherten Dateien vorhanden sind, wird eine Standard-Beispielzeichnung geladen.

## Fehlerbehebung

| Problem | Wahrscheinliche Ursache | Lösung |
|---------|------------------------|--------|
| Zeichenfläche ist nach dem Import leer | DXF-Entitäten verwenden nicht unterstützte Typen (z.B. INSERT) | Die Entitäten wurden übersprungen — das Terminal listet jeden übersprungenen Typ mit Anzahl auf, zum Beispiel `Could not read INSERT: 12`. Eine Datei, die gar keine gültige Zeichnung ist, meldet `Could not read <file>: not a valid drawing file` |
| Import-Schaltfläche reagiert nicht | Browser hat die Dateiauswahl blockiert | Klicken Sie die Schaltfläche erneut; manche Browser erfordern eine neue Benutzergeste |
| Bemaßungen sehen falsch aus | DXF aus einem Werkzeug, das nicht standardkonforme Bemaßungsgeometrie schreibt | Aus der Quellanwendung erneut mit einer aktuellen DXF-Version exportieren |

## Verwandte Befehle

- [Export Manager](../export-manager/) — aktuelle Zeichnung als DXF oder JSON herunterladen
- [File Manager](../file-manager/) — im Browser gespeicherte Zeichnungen durchsuchen und wiederherstellen
- [New File](../new-file/) — eine leere Zeichnung starten
