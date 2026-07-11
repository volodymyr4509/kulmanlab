---
title: Linienstärke-Werkzeugleisten-Auswahl — Strichbreite in KulmanLab CAD steuern
description: Der Linienstärke-Auswähler in der KulmanLab CAD-Werkzeugleiste legt die Strichbreite fest, die auf alle neu gezeichneten Entitäten angewendet wird. Unterstützt Standard-DXF-Linienstärkewerte von 0,00 mm bis 2,11 mm sowie ByLayer- und Standard-Modi.
keywords: [CAD Linienstärke, Strichbreite, Linienbreite, DXF Linienstärke, ByLayer Linienstärke, kulmanlab]
group: interface
order: 4
---

# Linienstärke

Der **Linienstärke**-Chip in der Werkzeugleiste steuert die Strichbreite, die jeder neu gezeichneten Entität zugewiesen wird. Klicken Sie darauf, um das Auswahl-Dropdown zu öffnen.

## Optionen

| Wert | Bedeutung |
|------|-----------|
| **Vom Layer** | Entität übernimmt die auf ihrem Layer definierte Linienstärke. Die angezeigte tatsächliche Breite hängt von der Layer-Einstellung ab. |
| **Standard** | Verwendet die Anwendungs-Standardbreite — wird als dünne Linie gerendert (1 px). Überschreibt die Layer-Einstellung in DXF nicht. |
| **0,00 mm – 2,11 mm** | Eine explizite feste Breite. Die Entität trägt diesen Wert unabhängig von der Linienstärke ihres Layers. |

Standard-DXF-Linienstärkewerte sind verfügbar: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 und 2,11 mm.

## Anwendungsweise

Die ausgewählte Linienstärke wird auf jede nach der Änderung erstellte Entität angewendet. Sie wirkt sich nicht rückwirkend auf vorhandene Entitäten aus.

Um die Linienstärke vorhandener Entitäten zu ändern, wählen Sie diese aus und bearbeiten Sie das **Linienstärke**-Feld im Eigenschaftenpanel, oder verwenden Sie [MatchProperties](../../commands/match-properties/), um sie von einer anderen Entität zu kopieren.

## Darstellung

Linienstärken werden mit einem Maßstab von **3,78 px pro mm** (96 dpi) gerendert. Eine 0,25-mm-Linie ist auf dem Bildschirm ungefähr 1 px breit; eine 1,00-mm-Linie ist ungefähr 4 px. Sehr dünne Werte (0,00 mm und negative) werden immer mit mindestens 0,5 px gerendert, damit sie bei jeder Zoomstufe sichtbar bleiben.

## DXF-Kompatibilität

Linienstärkewerte werden als Ganzzahlen in Hundertstel Millimeter (z. B. 25 = 0,25 mm) in den DXF-Datensätzen `LWPOLYLINE`, `LINE`, `CIRCLE` und anderen Entitäten gespeichert. **Vom Layer** wird als `-1` und **Standard** als `-3` gespeichert, entsprechend der DXF-Spezifikation. Dateien gehen ohne Verlust bei jeder DXF-kompatiblen Anwendung durch.
