---
title: LayerManager — Manage All Layers in One Table
description: The LayerManager command opens a table of every layer in the drawing, letting you add layers, delete unused ones, and edit each one's freeze, lock, plot, color, lineweight, and linetype in place.
keywords: [layer manager, CAD layer table, manage layers CAD, add layer CAD, delete layer CAD, remove unused layer, freeze lock plot layer, kulmanlab layer management]
group: layer
order: 1
---

# LayerManager

The `LayerManager` command opens a table listing every layer in the drawing, with its **Freeze**, **Lock**, **Plot**, **Color**, **Lineweight**, and **Linetype** settings editable directly in the row. It's the central place to add layers, delete unused ones, and adjust how existing ones behave — the other layer commands ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) each do one focused thing without opening it.

## Opening the Layer Manager

- Type `LayerManager` in the terminal, **or**
- Click the **Layer Manager** button in the layer panel.

The dialog opens as a floating panel; nothing needs to be selected first.

## The layer table

| Column | What it controls |
|--------|-------------------|
| Name | The layer's name, shown read-only in the table (set once, at creation) |
| Freeze | Hides the layer's entities and excludes them from selection until unfrozen |
| Lock | Prevents entities on the layer from being edited, without hiding them |
| Plot | Whether the layer's entities are included when printing or exporting to PDF |
| Color | The layer's ACI color — click the swatch to open the color picker |
| Lineweight | The layer's line thickness — click the chip to open the lineweight picker |
| Linetype | The layer's dash pattern — click the chip to open the linetype picker |
| ✕ | Deletes the layer, when nothing is using it — see [Deleting a layer](#deleting-a-layer) |

Toggling Freeze, Lock, or Plot takes effect immediately — there's no separate save step. Entities set to **ByLayer** for color, lineweight, or linetype (the default) pick up whatever you set here; entities with an explicit override of their own are unaffected.

## Adding a layer

1. Click **+ Add Layer** at the bottom of the table.
2. Type a name and press **Enter** to confirm, or **Escape** to cancel.

Layer names may contain letters, numbers, spaces, and `_`, `-`, `$`. A name that's empty, already in use, or contains any other character is rejected with an inline error, and the row stays open for another try.

New layers start **unfrozen, unlocked, plottable**, with color 7 (white/black), lineweight Default, and linetype Continuous — the same defaults [Import](../import/) assigns to layer `0` in a blank drawing.

## Deleting a layer

Each row ends with a **✕** button that removes the layer from the drawing. Deletion is immediate — there is no confirmation step — but it is only offered for layers nothing depends on:

| Situation | Button state |
|-----------|--------------|
| Layer is empty | Enabled — *Delete layer* |
| Layer is assigned to at least one entity | Disabled — *Cannot delete: assigned to at least one entity* |
| Layer `0` | No button at all |

**"In use" spans the whole drawing**, not just what you're looking at. An entity sitting on a layout (paper space) counts exactly as much as one in model space, so a layer can look empty on screen and still refuse to delete. Frozen layers are no different: freezing hides entities but doesn't unassign them, so a frozen layer holding entities stays undeletable.

Layer `0` can never be deleted. It's the fallback every drawing is guaranteed to have, so the button isn't rendered for it at all rather than being shown disabled.

### "…is now in use and can't be deleted"

Occasionally the ✕ looks available but the click is refused with a banner at the top of the panel:

```
"WALLS" is now in use and can't be deleted
```

This isn't a contradiction. Working out which layers are in use means walking every entity in the drawing, so the result is cached and only rebuilt when the entity count changes — cheap at hundreds of entities, not at hundreds of thousands. Moving an existing entity onto a layer doesn't change the count, so the row's disabled state can be a moment out of date. Clicking re-checks from scratch before deleting anything, which is why the refusal happens at click time rather than the layer disappearing while something still references it.

Dismiss the banner with its own **✕**. The layer is untouched.

## What you can't do here

There's no indicator in the table for which layer is *current*; that's set by picking from the layer panel's dropdown or by [LayerMakeCurrent](../layer-make-current/), not from this dialog. Layer names are also fixed at creation — a layer can be deleted and recreated, but not renamed.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` | Confirm a new layer's name (while adding) |
| `Escape` | Cancel adding a layer, or close the dialog |

## Related commands

| Command | What it does |
|---------|-------------|
| [LayerMakeCurrent](../layer-make-current/) | Set the current layer to match a clicked entity's layer |
| [LayerMatch](../layer-match/) | Reassign selected entities to match the layer of a source entity |
| [LayerIsolate](../layer-isolate/) | Freeze all layers except those of the selected entities |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Unfreeze all layers in one step |
