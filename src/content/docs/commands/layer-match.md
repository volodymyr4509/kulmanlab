---
title: LayerMatch — Reassign Entity Layers to Match a Source
description: The LayerMatch command reassigns the layer of one or more target entities to match the layer of a source entity you click.
keywords: [layer match, match layer CAD, reassign layer kulmanlab, CAD layer management]
group: layer
order: 2
---

# LayerMatch

The `LayerMatch` command reassigns the layer of selected entities to match the layer of a source entity you click. It is the fastest way to move a group of objects onto the correct layer without opening the Layer Manager.

## Workflow

**Pre-select, then match**:

1. Select the entities whose layer you want to change.
2. Type `LayerMatch` or click the **Layer Match** toolbar button (paint icon).
3. **Click the source object** — the one whose layer you want to copy.
4. All selected entities move to the source object's layer immediately.

**Activate, then select**:

1. Type `LayerMatch` or click the toolbar button with nothing selected.
2. **Pick target objects** — click to toggle individual entities or drag to select by area.
3. Press **Enter** or **Space** to confirm the selection.
4. **Click the source object** — its layer is applied to all targets.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Confirm target selection and advance to source-pick phase |
| `Escape` | Reset — return to target selection or cancel entirely |

## Behaviour details

- Only the `layer` property is changed — color, linetype, lineweight, and geometry are untouched.
- The source object itself is not modified.
- The command finishes after the source is clicked.
- Clicking on empty canvas during the source-pick phase does nothing.
