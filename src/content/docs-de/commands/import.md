---
sidebar_position: 1
title: Import — DXF- oder JSON-Dateien in KulmanLab CAD öffnen
description: Verwenden Sie den Import-Befehl, um DXF- oder KulmanLab-JSON-Dateien in KulmanLab CAD zu öffnen. Unterstützt Linien, Kreise, Bögen, Polylinien, Splines, Text, Bemaßungen und Führungslinien.
keywords: [DXF-Datei importieren, DXF im Browser öffnen, CAD-Datei online importieren, DXF-Datei öffnen, DXF-Viewer Browser, JSON CAD importieren, KulmanLab import, kostenloser CAD DXF-Viewer, Zeichnung laden, DXF im Browser]
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

Layerdefinitionen und Linientyptabellen werden ebenfalls aus der DXF-Datei importiert, sofern vorhanden.

Entitäten mit nicht unterstützten DXF-Typen werden stillschweigend übersprungen — der Rest der Zeichnung wird trotzdem geladen.

## Dateiname und Speicherung

Beim Import einer Datei wird dem Dateinamen ein Zeitstempel angehängt (zum Beispiel `myplan_May22_14:30:00.dxf`). So können Sie mehrere Versionen derselben Zeichnung in [Zuletzt verwendete Dateien](../files/) aufbewahren, ohne Namenskonflikte zu erzeugen. Enthält der Dateiname bereits einen Zeitstempel, wird er unverändert übernommen.

Die Zeichnung wird nach dem Import automatisch im Browser-Speicher (IndexedDB) gespeichert, sodass sie im Panel [Dateien](../files/) erscheint und Seitenneulades übersteht.

## Was mit der aktuellen Zeichnung passiert

Beim Import wird die aktuelle Zeichenfläche ersetzt. Es gibt keine Zusammenführung oder Ergänzung. Wenn Sie nicht gespeicherte Änderungen haben, [exportieren](../export/) Sie die aktuelle Zeichnung zuerst.

## Beim Start

KulmanLab öffnet beim Laden der Seite automatisch die zuletzt bearbeitete Datei. Wenn keine gespeicherten Dateien vorhanden sind, wird eine Standard-Beispielzeichnung geladen.

## Fehlerbehebung

| Problem | Wahrscheinliche Ursache | Lösung |
|---------|------------------------|--------|
| Zeichenfläche ist nach dem Import leer | DXF-Entitäten verwenden nicht unterstützte Typen (z.B. HATCH, INSERT) | Die Entitäten wurden übersprungen — suchen Sie nach der Meldung „keine Entitäten gefunden" im Terminal |
| Import-Schaltfläche reagiert nicht | Browser hat die Dateiauswahl blockiert | Klicken Sie die Schaltfläche erneut; manche Browser erfordern eine neue Benutzergeste |
| Bemaßungen sehen falsch aus | DXF aus einem Werkzeug, das nicht standardkonforme Bemaßungsgeometrie schreibt | Aus der Quellanwendung erneut mit einer aktuellen DXF-Version exportieren |

## Verwandte Befehle

- [Export](../export/) — aktuelle Zeichnung als DXF oder JSON herunterladen
- [Dateien](../files/) — im Browser gespeicherte Zeichnungen durchsuchen und wiederherstellen
- [New File](../new-file/) — eine leere Zeichnung starten
