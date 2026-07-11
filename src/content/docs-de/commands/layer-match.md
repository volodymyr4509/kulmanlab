---
title: LayerMatch — Entitätslayer an eine Quelllayer anpassen in KulmanLab CAD
description: Der Befehl LayerMatch weist den Layer einer oder mehrerer Zielentitäten neu zu, sodass er mit dem Layer einer von Ihnen angeklickten Quellentität übereinstimmt.
keywords: [Layer angleichen, Layer anpassen CAD, Layer neu zuweisen kulmanlab, CAD-Layerverwaltung]
group: layer
order: 2
---

# LayerMatch

Der Befehl `LayerMatch` weist den Layer ausgewählter Entitäten neu zu, sodass er mit dem Layer einer von Ihnen angeklickten Quellentität übereinstimmt. Dies ist der schnellste Weg, eine Gruppe von Objekten auf den richtigen Layer zu verschieben, ohne den Layer-Manager öffnen zu müssen.

## Arbeitsablauf

**Zuerst auswählen, dann angleichen**:

1. Wählen Sie die Entitäten aus, deren Layer Sie ändern möchten.
2. Geben Sie `LayerMatch` ein oder klicken Sie auf die Schaltfläche **Layer Match** in der Symbolleiste (Pinsel-Symbol).
3. **Klicken Sie auf das Quellobjekt** — dasjenige, dessen Layer Sie kopieren möchten.
4. Alle ausgewählten Entitäten werden sofort auf den Layer des Quellobjekts verschoben.

**Aktivieren, dann auswählen**:

1. Geben Sie `LayerMatch` ein oder klicken Sie auf die Schaltfläche in der Symbolleiste, ohne etwas ausgewählt zu haben.
2. **Zielobjekte auswählen** — klicken Sie, um einzelne Entitäten umzuschalten, oder ziehen Sie, um flächig auszuwählen.
3. Drücken Sie **Enter** oder **Space**, um die Auswahl zu bestätigen.
4. **Klicken Sie auf das Quellobjekt** — dessen Layer wird auf alle Ziele angewendet.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Zielauswahl bestätigen und zur Quellauswahl-Phase wechseln |
| `Escape` | Zurücksetzen — zur Zielauswahl zurückkehren oder ganz abbrechen |

## Verhaltensdetails

- Nur die Eigenschaft `layer` wird geändert — Farbe, Linientyp, Linienstärke und Geometrie bleiben unverändert.
- Das Quellobjekt selbst wird nicht verändert.
- Der Befehl endet nach dem Anklicken der Quelle.
- Das Anklicken einer leeren Zeichenfläche während der Quellauswahl-Phase hat keine Wirkung.
