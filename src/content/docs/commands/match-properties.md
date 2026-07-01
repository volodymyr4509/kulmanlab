---
sidebar_position: 1
title: Match Properties — Copy Entity Properties in KulmanLab CAD
description: The MatchProperties command copies color, layer, and other shared properties from a source entity to one or more target entities. Matches properties the same way desktop CAD tools do.
keywords: [match properties CAD, copy entity properties, MATCHPROP, match layer color, transfer properties, kulmanlab match properties, paint properties, copy layer CAD]
---

# Match Properties

The `MatchProperties` command copies **visual and layer properties** from a source entity to one or more target entities. Only properties that are shared between the source and target entity types are transferred — geometry is never changed.

## How to activate

Click the **Match Properties** toolbar button (paint roller icon) in the Style panel, or type `MatchProperties` in the terminal.

## Workflow

**Activate first, then pick source:**

1. Type `MatchProperties` or click the toolbar button with nothing pre-selected.
2. **Click the source entity** — the one whose properties you want to copy.
3. **Click each target entity** to apply the source properties. You can click multiple entities one by one.
4. To apply to a group at once, **drag a selection box** over the targets.
5. Press **Enter** or **Escape** to finish.

**Pre-select the source, then activate:**

1. Click a single entity to select it.
2. Activate `MatchProperties`. The selected entity is used as the source automatically.
3. Click target entities or drag-select, then **Enter** or **Escape** to finish.

## What properties are copied

MatchProperties copies properties that belong to a shared base class between the source and target. At minimum, **all entity types** share these properties:

| Property | Description |
|----------|-------------|
| **Color** | The entity's color index (includes "By Layer" / "By Block") |
| **Layer** | The layer the entity belongs to |

When the source and target are the same entity type (e.g. both are dimensions), additional type-specific properties are also copied — for example text height, arrow size, extension line settings.

Geometry (coordinates, radius, length, etc.) is never affected.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Confirm area selection or finish the command |
| `Escape` | Finish applying (if source is set) or cancel |

## Behaviour details

- The source entity itself is never modified.
- Each click or drag-select applies the source properties immediately — there is no confirmation step.
- Area selection follows the standard rules: drag **right** for strict selection (fully enclosed), drag **left** for crossing selection (any intersection).
- Clicking the source entity as a target is ignored.
- For entities with text (**Text**, **Dimensions**, **Multileaders**), only the text height is copied — font, bold, italic, and other text style settings are not matched.

## Related commands

- [LayerMatch](./layer-match) — move selected entities onto the same layer as a source (layer property only)
- [LayerMakeCurrent](./layer-make-current) — set the current drawing layer from a clicked entity
