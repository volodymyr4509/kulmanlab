---
sidebar_position: 1
title: LayerIsolate — Freeze All Layers Except Selected in KulmanLab CAD
description: The LayerIsolate command freezes every layer except those used by the selected objects, letting you focus on specific geometry without deleting anything.
keywords: [layer isolate, freeze layers CAD, isolate layer kulmanlab, CAD layer management]
---

# LayerIsolate

The `LayerIsolate` command freezes every layer **except** those belonging to the selected objects. Use it to quickly focus on specific geometry without hiding or deleting anything permanently — unfreeze with [LayerUnfreezeAll](../layer-unfreeze-all/) when done.

## Two ways to start

**Pre-select, then isolate** — select entities first, then activate:

1. Select one or more entities on the canvas.
2. Type `LayerIsolate` in the terminal or click the **Layer Isolate** toolbar button.
3. The layers of the selected entities remain visible; all others are frozen immediately.

**Activate, then select**:

1. Type `LayerIsolate` or click the toolbar button.
2. **Pick objects** — click individual entities or drag to select by area.
3. Press **Enter** or **Space** to confirm — isolation is applied.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Confirm selection and apply isolation |
| `Escape` | Cancel and clear selection |

## Behaviour details

- All layers that are **not** represented in the selection are set to frozen.
- Layers that **are** represented remain unfrozen, even if they were frozen before.
- The selection is cleared after isolation is applied.
- The command finishes automatically after applying.

## Undoing isolation

Run [LayerUnfreezeAll](../layer-unfreeze-all/) to restore all layers to visible in one step.
