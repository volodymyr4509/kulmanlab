---
title: Linientyp-Werkzeugleisten-Auswahl — Strichmuster in KulmanLab CAD steuern
description: Der Linientyp-Auswähler in der KulmanLab CAD-Werkzeugleiste legt das Strichmuster fest, das auf alle neu gezeichneten Entitäten angewendet wird. Unterstützt alle aus der aktuellen DXF-Datei geladenen Linientypen sowie die integrierten Optionen ByLayer, ByBlock und Continuous.
keywords: [CAD Linientyp, Strichmuster, gestrichelte Linie, DXF Linientyp, ByLayer Linientyp, kulmanlab]
group: interface
order: 3
---

# Linientyp

Der **Linientyp**-Chip in der Werkzeugleiste steuert das Strichmuster, das jeder neu gezeichneten Entität zugewiesen wird. Klicken Sie darauf, um das Auswahl-Dropdown zu öffnen.

## Optionen

| Wert | Bedeutung |
|------|-----------|
| **Vom Layer** | Entität übernimmt den auf ihrem Layer definierten Linientyp. In DXF als `ByLayer` dargestellt. |
| **ByBlock** | Entität übernimmt den Linientyp des Blocks, zu dem sie gehört. Hat außerhalb eines Blocks keinen sichtbaren Effekt. |
| **Continuous** | Durchgehende Linie ohne Strichmuster. |
| **Benannte Linientypen** | Alle aus der aktuellen DXF-Datei geladenen Linientypen (z. B. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). Das Dropdown zeigt eine Live-Vorschau jedes Musters und seiner Definitionszeichenkette. |

## Anwendungsweise

Der ausgewählte Linientyp wird auf jede nach der Änderung erstellte Entität angewendet. Er wirkt sich nicht rückwirkend auf vorhandene Entitäten aus.

Um den Linientyp vorhandener Entitäten zu ändern, wählen Sie diese aus und bearbeiten Sie das **Linientyp**-Feld im Eigenschaftenpanel, oder verwenden Sie [MatchProperties](../../commands/match-properties/), um ihn von einer anderen Entität zu kopieren.

## Linientyp-Skalierung

Jede Entität hat auch eine **Linientyp-Skalierungs**-Eigenschaft (Standard `1`). Das Strichmuster wird mit diesem Faktor multipliziert. Der Wert `2` macht die Striche doppelt so lang; `0.5` macht sie halb so lang. Bearbeiten Sie ihn im Eigenschaftenpanel nach dem Auswählen einer Entität.

## Verfügbare Linientypen

Das Dropdown listet nur in der aktuell geladenen DXF-Datei vorhandene Linientypen auf. Eine neu erstellte Datei enthält nur `ByLayer`, `ByBlock` und `Continuous`. Wenn Sie eine DXF-Datei importieren, werden alle in der `$LTYPE`-Tabelle der Datei definierten Linientypen verfügbar.

Wenn Sie einen bestimmten Linientyp (z. B. `DASHED2`) benötigen, der nicht in der Liste ist, importieren Sie eine DXF-Datei, die ihn enthält — der Linientyp erscheint dann im Auswähler für die aktuelle Sitzung.

## DXF-Kompatibilität

Linienty-Namen werden als Zeichenketten in Entitätsdatensätzen gespeichert. `ByLayer` und `ByBlock` sind die Standard-DXF-Sentinelwerte. Alle benannten Linientypen und ihre Strichmuster werden beim Export exakt beibehalten und gehen bei LibreCAD, FreeCAD und anderen DXF-kompatiblen Anwendungen verlustfrei durch.
