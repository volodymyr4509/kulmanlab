---
title: LayerIsolate — Alle Layer außer den ausgewählten einfrieren in KulmanLab CAD
description: Der Befehl LayerIsolate friert alle Layer außer denen der ausgewählten Objekte ein, sodass Sie sich auf bestimmte Geometrie konzentrieren können, ohne etwas zu löschen.
keywords: [Layer isolieren, Layer einfrieren CAD, Layer isolieren kulmanlab, CAD-Layerverwaltung]
group: layer
order: 3
---

# LayerIsolate

Der Befehl `LayerIsolate` friert alle Layer **außer** denen der ausgewählten Objekte ein. Verwenden Sie ihn, um schnell auf bestimmte Geometrie zu fokussieren, ohne dabei dauerhaft etwas auszublenden oder zu löschen — heben Sie das Einfrieren mit [LayerUnfreezeAll](../layer-unfreeze-all/) auf, wenn Sie fertig sind.

## Zwei Möglichkeiten zum Starten

**Zuerst auswählen, dann isolieren** — wählen Sie zuerst Entitäten aus und aktivieren Sie dann den Befehl:

1. Wählen Sie eine oder mehrere Entitäten auf der Zeichenfläche aus.
2. Geben Sie `LayerIsolate` im Terminal ein oder klicken Sie auf die Schaltfläche **Layer Isolate** in der Symbolleiste.
3. Die Layer der ausgewählten Entitäten bleiben sichtbar; alle anderen werden sofort eingefroren.

**Aktivieren, dann auswählen**:

1. Geben Sie `LayerIsolate` ein oder klicken Sie auf die Schaltfläche in der Symbolleiste.
2. **Objekte auswählen** — klicken Sie auf einzelne Entitäten oder ziehen Sie, um flächig auszuwählen.
3. Drücken Sie **Enter** oder **Space** zur Bestätigung — die Isolierung wird angewendet.

## Tastaturkürzel

| Taste | Aktion |
|-------|--------|
| `Enter` / `Space` | Auswahl bestätigen und Isolierung anwenden |
| `Escape` | Abbrechen und Auswahl aufheben |

## Verhaltensdetails

- Alle Layer, die in der Auswahl **nicht** vertreten sind, werden auf eingefroren gesetzt.
- Layer, die **vertreten** sind, bleiben aufgetaut, auch wenn sie zuvor eingefroren waren.
- Die Auswahl wird nach der Isolierung geleert.
- Der Befehl endet automatisch nach der Anwendung.

## Isolierung aufheben

Führen Sie [LayerUnfreezeAll](../layer-unfreeze-all/) aus, um alle Layer in einem Schritt wieder sichtbar zu machen.
