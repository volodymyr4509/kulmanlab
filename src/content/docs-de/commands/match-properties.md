---
title: Eigenschaften übertragen — Entitätseigenschaften kopieren
description: Der Befehl MatchProperties kopiert Farbe, Layer und andere gemeinsame Eigenschaften von einer Quellentität auf eine oder mehrere Zielentitäten. Überträgt Eigenschaften genauso wie Desktop-CAD-Werkzeuge.
keywords: [Eigenschaften übertragen CAD, Entitätseigenschaften kopieren, MATCHPROP, Layer Farbe angleichen, Eigenschaften übertragen, kulmanlab Eigenschaften übertragen, Eigenschaften malen, Layer kopieren CAD]
group: style
order: 1
---

# Match Properties

Der Befehl `MatchProperties` kopiert **visuelle Eigenschaften und Layer-Eigenschaften** von einer Quellentität auf eine oder mehrere Zielentitäten. Nur Eigenschaften, die zwischen dem Quell- und Zielentitätstyp geteilt werden, werden übertragen — die Geometrie wird nie verändert.

## So aktivieren Sie den Befehl

Klicken Sie auf die Schaltfläche **Match Properties** in der Symbolleiste (Farbrolle-Symbol) im Stil-Panel oder geben Sie `MatchProperties` im Terminal ein.

## Arbeitsablauf

**Zuerst aktivieren, dann Quelle auswählen:**

1. Geben Sie `MatchProperties` ein oder klicken Sie auf die Schaltfläche in der Symbolleiste, ohne vorher etwas ausgewählt zu haben.
2. **Klicken Sie auf die Quellentität** — diejenige, deren Eigenschaften Sie kopieren möchten.
3. **Klicken Sie auf jede Zielentität**, um die Quelleigenschaften anzuwenden. Sie können mehrere Entitäten nacheinander anklicken.
4. Um die Eigenschaften auf eine Gruppe gleichzeitig anzuwenden, **ziehen Sie einen Auswahlrahmen** über die Ziele.
5. Drücken Sie **Enter** oder **Escape** zum Beenden.

**Zuerst Quelle auswählen, dann aktivieren:**

1. Klicken Sie auf eine einzelne Entität, um sie auszuwählen.
2. Aktivieren Sie `MatchProperties`. Die ausgewählte Entität wird automatisch als Quelle verwendet.
3. Klicken Sie auf Zielentitäten oder ziehen Sie eine Auswahl, dann **Enter** oder **Escape** zum Beenden.

## Welche Eigenschaften werden kopiert

MatchProperties kopiert Eigenschaften, die zu einer gemeinsamen Basisklasse zwischen Quelle und Ziel gehören. Mindestens teilen **alle Entitätstypen** diese Eigenschaften:

| Eigenschaft | Beschreibung |
|-------------|-------------|
| **Farbe** | Der Farbindex der Entität (einschließlich „By Layer" / „By Block") |
| **Layer** | Der Layer, zu dem die Entität gehört |

Wenn Quelle und Ziel denselben Entitätstyp haben (z.B. beide Bemaßungen), werden auch zusätzliche typspezifische Eigenschaften kopiert — zum Beispiel Texthöhe, Pfeilspitzengröße, Einstellungen für Hilfslinien.

Geometrie (Koordinaten, Radius, Länge usw.) wird nie beeinflusst.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Flächenauswahl bestätigen oder Befehl beenden |
| `Escape` | Anwenden beenden (wenn Quelle gesetzt) oder abbrechen |

## Verhaltensdetails

- Die Quellentität selbst wird nie verändert.
- Jeder Klick oder jede Flächenauswahl wendet die Quelleigenschaften sofort an — es gibt keinen Bestätigungsschritt.
- Die Flächenauswahl folgt den Standardregeln: **rechts** ziehen für strenge Auswahl (vollständig eingeschlossen), **links** ziehen für schneidende Auswahl (jede Überschneidung).
- Das Anklicken der Quellentität als Ziel wird ignoriert.
- Bei Entitäten mit Text (**Text**, **Bemaßungen**, **Mehrfachführungslinien**) wird nur die Texthöhe kopiert — Schriftart, Fett, Kursiv und andere Textstil-Einstellungen werden nicht übernommen.

## Verwandte Befehle

- [LayerMatch](../layer-match/) — ausgewählte Entitäten auf denselben Layer wie eine Quelle verschieben (nur Layer-Eigenschaft)
- [LayerMakeCurrent](../layer-make-current/) — den aktuellen Zeichnungslayer von einer angeklickten Entität übernehmen
