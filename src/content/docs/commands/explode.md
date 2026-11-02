---
title: "Explode Command — Break a Polyline or Block into Its Parts"
description: "The Explode command breaks a Polyline into its Line and Arc entities, or a block reference into the entities its block draws, in place. The pieces look exactly as the original did."
keywords: [CAD explode command, explode polyline CAD, break polyline into lines, convert polyline to line and arc, kulmanlab]
group: edit
order: 19
---

# Explode

The `explode` command breaks a [Polyline](../polyline/) into its individual [Line](../line/) and [Arc](../arc/) entities — one per segment, exactly where the polyline's own vertices were. The pieces replace the polyline in place and keep its lineweight, color, layer, and linetype.

Explode works on **Polyline** entities and **block references**.

## Using explode

Two ways to run it, the same pattern as [Delete](../delete/):

**Pre-select, then explode** — the fastest path:

1. Select one or more polylines on the canvas.
2. Type `explode` in the terminal, or choose **Explode** from the dropdown in the Edit panel.

The selected polylines are exploded instantly — no separate confirmation step, since something is already selected.

**Activate, then select**:

1. Type `explode` or choose **Explode** from the dropdown with nothing selected.
2. **Select polylines or block references** — click to toggle, or drag to select by area.
3. Press **Enter** or **Space** to confirm and explode the selected polylines.

Only polylines and block references are picked up during selection — clicking a Line, Circle, or any other entity does nothing, and an area drag ignores everything else inside or crossing it.

## What comes out

Every segment of the polyline becomes its own entity:

- A **straight segment** becomes a **Line**.
- An **arc segment** (from Polyline's [Arc option](../polyline/)) becomes an **Arc**, matching the original curve's center, radius, and sweep exactly.

Each resulting Line and Arc inherits the source polyline's **lineweight, color, layer, linetype, and linetype scale** — nothing about how the geometry looks changes, only that it's now several independent entities instead of one connected polyline.

A **block reference** becomes the entities its block draws, placed where the reference showed them. Entities the block holds hidden — a dynamic block's other states — are left out; each attribute becomes a plain Text with its value; pieces drawn ByBlock take the reference's color, and pieces on layer 0 take its layer. A block nested inside comes out as a block reference of its own, which you can explode in turn. A reference scaled differently in X and Y is not picked up, since its circles would have to become ellipses.

The explode is undoable as a single step with [Undo](../undo/), like any other edit.

## Selection during the command

| Method | Behaviour |
|--------|-----------|
| **Click** | Toggles the polyline or block reference under the cursor in/out of the selection; clicking any other entity does nothing |
| **Drag right** (strict) | Selects only polylines and block references fully inside the box |
| **Drag left** (crossing) | Selects polylines and block references that intersect the box boundary |
| **Enter** / **Space** | Confirms and explodes the selection |

## Supported entities

| Entity | Supported |
|--------|-----------|
| Polyline / Rectangle | Yes |
| Block reference | Yes, unless scaled differently in X and Y |
| Line, Arc, Circle, Ellipse | No — nothing to explode |
| Text, Spline, Dimension, Leader, Hatch | No |
