---
title: LayerMakeCurrent — Set an Entity's Layer as Current
description: The LayerMakeCurrent command sets the current drawing layer to match the layer of a clicked entity.
keywords: [layer make current, set current layer CAD, kulmanlab layer management]
group: layer
order: 1
---

# LayerMakeCurrent

The `LayerMakeCurrent` command sets the **current drawing layer** to whichever layer the clicked entity belongs to. New entities will then be drawn on that layer automatically.

## Usage

1. Type `LayerMakeCurrent` in the terminal or click the **Make Current** toolbar button (eyedropper icon).
2. **Click any entity** on the canvas.
3. The current layer is updated to match that entity's layer. The command finishes immediately.

## Behaviour details

- If you click on empty canvas (no entity hit), the terminal shows `no object found` and the command stays active so you can try again.
- Only the current layer setting is changed — no entities are modified.
- The updated layer is reflected in the layer selector in the toolbar.
