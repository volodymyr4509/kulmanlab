---
sidebar_position: 8
title: Spline CV Command — Draw B-Splines by Placing Control Vertices in KulmanLab CAD
description: The Spline CV command draws a cubic B-spline by placing control vertices. The curve is attracted toward vertices but passes through only the first and last ones (clamped knots). Each CV grip can be dragged to reshape the curve after placement. Full DXF round-trip as SPLINE entities.
keywords: [CAD spline command, B-spline control vertices, clamped spline CAD, draw spline CAD, SPLINE DXF entity, spline grip editing, kulmanlab]
---

# Spline CV

The `splinecv` command draws a **cubic B-spline** by placing control vertices (CVs). The resulting curve is attracted toward each CV but does not pass through them — except at the very first and last vertex, where **clamped knots** anchor the curve exactly. This gives you intuitive shape control: pull a vertex to push the curve toward it without forcing it to touch every point.

## Drawing a spline by control vertices

1. Type `splinecv` in the terminal or click the **Spline CV** toolbar button.
2. **Click to place control vertices** — each click adds a vertex. Or type `X,Y` and press **Enter** for an exact coordinate.
3. Press **Enter** to finish (at least 2 vertices required).

```
  CV ●         ● CV
      \       /
       \     /    ← curve pulled toward CVs
        \   /         but not passing through them
  CV ●   ●   ● CV (start/end: curve touches here)
```

The live preview updates as you move the cursor after each vertex, showing how the spline will look with the next point at the cursor position. Press **Escape** to discard all placed vertices and exit.

## Coordinate entry

Instead of clicking, type an exact position for any control vertex:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to place the vertex.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate, or finish the spline if no input is in progress and ≥ 2 vertices exist |
| `Escape` | Discard all vertices and exit |

## Grip editing — reshaping via control vertices

A selected CV spline exposes one grip per control vertex:

| Grip | Position | What it does |
|------|----------|--------------|
| **Control vertex** | At each CV position | Drag to move that CV — the curve reshapes toward the new position |

There is no "move whole spline" grip. To translate the entire spline, use the [Move](../move/) command.

## Selecting CV splines

| Method | Behaviour |
|--------|-----------|
| **Click** | Selects if the click lands near any point on the curve |
| **Drag right** (strict) | All sample points along the curve must lie inside the selection box |
| **Drag left** (crossing) | Any part of the curve that crosses the selection box boundary selects it |

## Supported edit commands

| Command | What happens to the spline |
|---------|---------------------------|
| [Move](../move/) | Translates all control vertices by the same displacement |
| [Copy](../copy/) | Creates an identical spline at a new position |
| [Rotate](../rotate/) | Rotates all CVs around the chosen base point |
| [Mirror](../mirror/) | Reflects all CVs across the mirror axis |
| [Scale](../scale/) | Scales all CVs uniformly from the base point |
| [Delete](../delete/) | Removes the spline |

Splines do not support **Offset**, **Trim**, or **Extend**.

## Properties

**General**

| Property | Default | Meaning |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI color index |
| Layer | `0` | Layer assignment |
| Linetype | ByLayer | Named linetype pattern |
| Linetype Scale | 1 | Scale factor on the linetype pattern |
| Thickness | 0 | Extrusion thickness |

**Geometry**

| Property | Meaning |
|----------|---------|
| Degree | Polynomial degree — always 3 (cubic) |
| Control Vertices | Coordinates of all CVs |
| Fit Points | Empty for CV splines; populated only for fit-point splines |

## Spline CV vs Spline Fit — which to use

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Curve passes through points | First and last only (clamped) | Every clicked point exactly |
| Shape control | Pull CVs toward a region | Move fit points the curve must touch |
| Grip edit effect | CV moves → curve attracted | Fit point moves → curve re-interpolated |
| Best for | Smooth aesthetic curves, free-form paths | Curves that must hit specific coordinates |

## DXF — SPLINE entity (control-vertex form)

CV splines are saved as `SPLINE` entities in the DXF file, storing the degree, the knot vector, and all control vertex coordinates. All properties — color, layer, linetype, linetype scale, and thickness — round-trip without loss. The `splineFlag` is set to `9` (CV spline) so the form is preserved on reload. Any DXF application that supports `SPLINE` entities with CV data reads these correctly.
