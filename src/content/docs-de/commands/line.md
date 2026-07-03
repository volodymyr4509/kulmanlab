---
sidebar_position: 1
title: Befehl line — Linien zeichnen, verketten, trimmen und verlängern in KulmanLab CAD
description: Der Befehl line zeichnet einzelne gerade Liniensegmente, die end-to-end verkettet werden können. Linien sind der einzige Entitätstyp, auf den Trim und Extend wirken. Vollständiger DXF-Roundtrip als LINE-Entitäten.
keywords: [CAD line Befehl, gerade Linie zeichnen CAD, Liniensegmente verketten, Linie trimmen CAD, Linie verlängern CAD, Winkelsperre CAD, DXF LINE Entität, kulmanlab]
---

# Line

Der Befehl `line` zeichnet einzelne gerade Liniensegmente, die als separate `LINE`-Entitäten im DXF-Modell gespeichert werden. Nach jedem Segment bleibt der Befehl aktiv und verwendet den Endpunkt als neuen Startpunkt, sodass Sie verknüpfte Pfade Segment für Segment aufbauen können. Im Gegensatz zu einer [Polylinie](../polyline/) bleiben verkettete Linien unabhängige Entitäten — jede kann getrimmt, verlängert oder gelöscht werden, ohne ihre Nachbarn zu beeinflussen.

## Linien zeichnen

1. Geben Sie `line` im Terminal ein oder klicken Sie auf die Schaltfläche **Line** in der Symbolleiste.
2. **Klicken Sie auf den Startpunkt** oder geben Sie `X,Y` ein und drücken Sie **Enter** für eine genaue Koordinate.
3. **Klicken Sie auf den Endpunkt** — das Segment wird platziert und der Endpunkt wird zum nächsten Startpunkt. Koordinateneingabe funktioniert hier ebenfalls.
4. Klicken (oder tippen) Sie weiter, um weitere Segmente zu verketten.
5. Drücken Sie **Enter** oder **Escape** zum Beenden.

```
  ●──────────●──────────●──────────●
 Start     2. Klick  3. Klick   Enter zum Beenden
            (wird automatisch nächster Start)
```

Benötigen Sie nur ein einzelnes Segment? Drücken Sie **Enter** oder **Escape** direkt nach Schritt 3.

## Koordinateneingabe

Anstatt zu klicken, geben Sie eine genaue Position für den Start oder einen nachfolgenden Punkt ein:

1. Geben Sie den X-Wert ein (Ziffern, `.` oder `-`).
2. Drücken Sie `,` — das Terminal zeigt `[X], [Y{cursor}]`.
3. Geben Sie den Y-Wert ein.
4. Drücken Sie **Enter** zum Platzieren des Punktes.

## Winkelsperre und genaue Längeneingabe

Wenn Sie den Cursor nach dem Platzieren eines Punktes bewegen, überwacht der Befehl eine 45°-Einrastachse (0°, 45°, 90°, 135°, …). Der Winkel **sperrt** wenn:

- der Cursor mindestens **5 × Griffgröße** vom Anker entfernt ist, **und**
- er sich innerhalb von **1 Griffgröße** senkrechtem Abstand von der nächsten Achse befindet.

Bei gesperrter Ansicht rastet die Vorschau auf die Achse ein und Sie können eine genaue Länge eingeben:

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.` | Ziffer zum Längenwert anhängen |
| `-` | Negative Länge — kehrt die Richtung entlang der Achse um (nur als erstes Zeichen) |
| `Backspace` | Letztes getipptes Zeichen löschen |
| `Enter` | Endpunkt in der getippten Entfernung platzieren |

Der angesammelte Wert wird live im Terminal angezeigt (z.B. `click end point or enter length: 12.5`). Das Klicken bei gesperrter Achse projiziert auf die Achse, sodass der Endpunkt immer genau auf ihr liegt.

Das Zurückbewegen des Cursors in die Nähe des Ankerpunktes hebt die Sperre auf.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `0`–`9`, `.`, `-` | X-Koordinateneingabe starten oder Entfernung bei Winkelsperre |
| `,` | X sperren und zu Y-Eingabe wechseln |
| `Backspace` | Letztes getipptes Zeichen löschen |
| `Enter` | Getippte Koordinate oder Länge bestätigen, oder Kette beenden wenn nichts getippt |
| `Escape` | Kette beenden und beenden |

## Griffpunkt-Bearbeitung — Endpunkte strecken

Eine ausgewählte Linie zeigt drei Griffpunkte:

| Griffpunkt | Position | Funktion |
|------------|----------|----------|
| **Start** | Erster Endpunkt | Ziehen zum Neupositionieren — Ende bleibt fest |
| **Mittelpunkt** | Mitte der Linie | Aktiviert **Move** für die gesamte Linie |
| **Ende** | Zweiter Endpunkt | Ziehen zum Neupositionieren — Start bleibt fest |

Das Strecken eines Endpunktes beeinflusst den anderen nie. Dies unterscheidet sich von der Griffpunkt-Bearbeitung bei [Polylinie](../polyline/), wo das Verschieben eines Scheitelpunkts den gesamten Pfad umformt.

## Linien auswählen

| Methode | Verhalten |
|---------|-----------|
| **Klicken** | Wählt die Linie aus, wenn der Klick innerhalb des Trefferbereichs des Segments liegt |
| **Rechts ziehen** (streng) | Linie wird nur ausgewählt, wenn beide Endpunkte innerhalb des Rahmens liegen |
| **Links ziehen** (schneidend) | Linie wird ausgewählt, wenn ein Teil des Segments die Rahmengrenze schneidet |

## Unterstützte Bearbeitungsbefehle

Linien sind die **einzige** Entität, auf die [Trim](../trim/) und [Extend](../extend/) wirken. Alle standardmäßigen Transformationsbefehle gelten ebenfalls:

| Befehl | Wirkung auf eine Linie |
|--------|------------------------|
| [Move](../move/) | Verschiebt beide Endpunkte um die gleiche Verschiebung |
| [Copy](../copy/) | Erstellt eine identische Linie an einer neuen Position |
| [Rotate](../rotate/) | Dreht beide Endpunkte um den gewählten Basispunkt |
| [Mirror](../mirror/) | Spiegelt beide Endpunkte über die Spiegelachse |
| [Scale](../scale/) | Skaliert beide Endpunkte gleichmäßig vom Basispunkt aus |
| [Offset](../offset/) | Erstellt eine parallele Linie in einem festen senkrechten Abstand |
| [Trim](../trim/) | Schneidet die Linie an Schnittpunkten — **nur Linien** |
| [Extend](../extend/) | Streckt den nächstgelegenen Endpunkt bis zu einer Grenze — **nur Linien** |
| [Delete](../delete/) | Entfernt die Linie aus der Zeichnung |

## Eigenschaften

Wenn eine Linie ausgewählt ist, zeigt das Eigenschaftenpanel alle Felder des DXF-`LINE`-Datensatzes:

**Allgemein**

| Eigenschaft | Standard | Bedeutung |
|-------------|---------|-----------|
| Farbe | 256 (ByLayer) | ACI-Farbindex |
| Layer | `0` | Layer-Zuweisung |
| Linientyp | ByLayer | Benanntes Linientypenmuster |
| Linientypskala | 1 | Skalierungsfaktor des Linientypmusters |
| Dicke | 0 | Extrusionsdicke |

**Geometrie**

| Eigenschaft | Bedeutung |
|-------------|-----------|
| Start X / Start Y | Koordinaten des ersten Endpunkts |
| End X / End Y | Koordinaten des zweiten Endpunkts |

Alle Felder können direkt im Panel bearbeitet werden, ohne den Befehl erneut auszuführen.

## Linie vs. Polylinie — wann welche verwenden

| | Linie | Polylinie |
|---|-------|----------|
| Entitätsanzahl | Eine `LINE` pro Segment | Eine `LWPOLYLINE` für den gesamten Pfad |
| Trim / Extend | Ja — Segment für Segment | Nein |
| Geschlossene Form | Nein | Ja (Schließen-Flag) |
| Griffpunkt-Bearbeitung | Einzelne Endpunkte strecken | Jeden Scheitelpunkt entlang des Pfades verschieben |
| Am besten für | Konstruktionslinien, einzelne Segmente, Geometrie zum Trimmen | Konturen, Umrisse, Formen, die ganz bleiben |

## DXF — LINE-Entität

Linien werden als `LINE`-Entitäten in der DXF-Datei gespeichert. Jede Eigenschaft — Start-/Endkoordinaten, Farbe, Layer, Linientyp, Linientypskala und Dicke — macht den Roundtrip verlustfrei. Wenn Sie eine DXF-Datei mit `LINE`-Entitäten öffnen, werden diese zu vollständig bearbeitbaren `Line`-Objekten im Editor.

Im Editor gezeichnete Linien werden beim Speichern ebenfalls als `LINE`-Entitäten geschrieben und sind damit von LibreCAD, FreeCAD und anderen DXF-kompatiblen Anwendungen lesbar.
