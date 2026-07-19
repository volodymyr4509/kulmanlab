---
title: LayerMakeCurrent — Layer einer Entität als aktuell festlegen
description: Der Befehl LayerMakeCurrent setzt den aktuellen Zeichnungslayer auf den Layer der angeklickten Entität.
keywords: [Layer als aktuell setzen, aktuellen Layer setzen CAD, kulmanlab Layerverwaltung]
group: layer
order: 1
---

# LayerMakeCurrent

Der Befehl `LayerMakeCurrent` setzt den **aktuellen Zeichnungslayer** auf den Layer, zu dem die angeklickte Entität gehört. Neue Entitäten werden dann automatisch auf diesem Layer gezeichnet.

## Verwendung

1. Geben Sie `LayerMakeCurrent` im Terminal ein oder klicken Sie auf die Schaltfläche **Make Current** in der Symbolleiste (Pipetten-Symbol).
2. **Klicken Sie auf eine beliebige Entität** auf der Zeichenfläche.
3. Der aktuelle Layer wird auf den Layer dieser Entität aktualisiert. Der Befehl endet sofort.

## Verhaltensdetails

- Wenn Sie auf die leere Zeichenfläche klicken (keine Entität getroffen), zeigt das Terminal `no object found` an und der Befehl bleibt aktiv, damit Sie es erneut versuchen können.
- Nur die Einstellung des aktuellen Layers wird geändert — es werden keine Entitäten verändert.
- Der aktualisierte Layer wird in der Layer-Auswahl in der Symbolleiste angezeigt.
