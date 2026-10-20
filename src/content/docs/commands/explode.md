---
title: Explode Command — Break a Polyline into Line and Arc Entities
description: The Explode command breaks a Polyline into its individual Line and Arc entities, one per segment, in place. Each piece keeps the source polyline's lineweight, color, layer, and linetype. Works on Polyline entities only.
keywords: [CAD explode command, explode polyline CAD, break polyline into lines, convert polyline to line and arc, kulmanlab]
group: edit
order: 19
---

# Explode

The `explode` command breaks a [Polyline](../polyline/) into its individual [Line](../line/) and [Arc](../arc/) entities — one per segment, exactly where the polyline's own vertices were. The pieces replace the polyline in place and keep its lineweight, color, layer, and linetype.

Explode works on **Polyline** entities only.

## Using explode

Two ways to run it, the same pattern as [Delete](../delete/):

**Pre-select, then explode** — the fastest path:

1. Select one or more polylines on the canvas.
2. Type `explode` in the terminal, or click the **Explode** toolbar button in the Edit panel.

The selected polylines are exploded instantly — no separate confirmation step, since something is already selected.

**Activate, then select**:

1. Type `explode` or click the toolbar button with nothing selected.
2. **Select polylines** — click to toggle, or drag to select by area.
3. Press **Enter** or **Space** to confirm and explode the selected polylines.

Only polylines are picked up during selection — clicking a Line, Circle, or any other entity does nothing, and an area drag ignores everything except the polylines inside or crossing it.

## What comes out

Every segment of the polyline becomes its own entity:

- A **straight segment** becomes a **Line**.
- An **arc segment** (from Polyline's [Arc option](../polyline/)) becomes an **Arc**, matching the original curve's center, radius, and sweep exactly.

Each resulting Line and Arc inherits the source polyline's **lineweight, color, layer, linetype, and linetype scale** — nothing about how the geometry looks changes, only that it's now several independent entities instead of one connected polyline.

The explode is undoable as a single step with [Undo](../undo/), like any other edit.

## Selection during the command

| Method | Behaviour |
|--------|-----------|
| **Click** | Toggles the polyline under the cursor in/out of the selection; clicking a non-polyline entity does nothing |
| **Drag right** (strict) | Selects only polylines fully inside the box |
| **Drag left** (crossing) | Selects polylines that intersect the box boundary |
| **Enter** / **Space** | Confirms and explodes the selected polylines |

## Supported entities

| Entity | Supported |
|--------|-----------|
| Polyline / Rectangle | Yes |
| Line, Arc, Circle, Ellipse | No — nothing to explode |
| Text, Spline, Dimension, Leader, Hatch | No |
