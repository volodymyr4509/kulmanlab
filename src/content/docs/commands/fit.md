---
title: Fit Command — Frame All Entities in the Viewport in One Click in KulmanLab CAD
description: The Fit command calculates the bounding box of all entities and adjusts zoom and pan so every entity is visible with a small margin. Double-click the middle mouse button triggers Fit without activating the command.
keywords: [CAD fit view, zoom to fit, frame all entities, fit command CAD, bounding box zoom, kulmanlab]
group: navigate
order: 4
---

# Fit

The `fit` command calculates the bounding box of all entities in the drawing and adjusts both zoom level and pan position so every entity is visible with a small margin. It is the fastest way to recover a lost view or orient yourself after importing a DXF file.

## Fitting the view

Click the **Fit** toolbar button or type `fit` in the terminal. The view adjusts immediately and the command exits — no interaction required.

**Double-click the middle mouse button** triggers the same Fit operation at any time without activating any command — the fastest shortcut to reset a lost view mid-drawing.

## How the bounding box fit works

1. Fit finds the axis-aligned bounding box enclosing all entities (min X, max X, min Y, max Y).
2. The zoom level is set so the taller or wider dimension fills the canvas with a margin.
3. The view is centered on the bounding box midpoint.

| Drawing state | Result |
|--------------|--------|
| Wider than tall | Zoom constrained by width |
| Taller than wide | Zoom constrained by height |
| Single entity | Fits around just that entity |
| Empty drawing | View does not change |

## Fit vs manual zoom controls

| | Fit | Zoom In / Zoom Out | Scroll wheel |
|---|-----|--------------------|-------------|
| Centers on | All entities | Viewport midpoint | Cursor |
| Step size | Automatic (one shot) | 1.5× per step | ~1.1× per tick |
| Best for | Recovering lost view, post-import orient | Stepping in/out from center | Precise cursor-targeted zoom |

## Keyboard reference

There is no keyboard shortcut for this command. Use the **middle mouse button double-click** shortcut instead.

## Related view commands

| Command | What it does |
|---------|-------------|
| [Pan](../pan/) | Shifts the viewport without zooming |
| [Zoom In](../zoom-in/) | Multiplies zoom by 1.5× per step |
| [Zoom Out](../zoom-out/) | Divides zoom by 1.5× per step |
