---
sidebar_position: 9
title: Spline Fit Command — Draw Interpolating Splines Through Clicked Points in KulmanLab CAD
description: The Spline Fit command draws a cubic spline that passes through every clicked point exactly. Internally the curve is stored with both fit points and computed control vertices. Dragging a fit-point grip re-interpolates the entire curve. Full DXF round-trip as SPLINE entities.
keywords: [CAD spline fit command, interpolating spline CAD, spline through points, draw smooth curve CAD, SPLINE DXF fit points, spline grip editing, kulmanlab]
---

# Spline Fit

The `splinefit` command draws a cubic spline that passes through every point you click — an interpolating curve. Unlike [Spline CV](./spline-cv), where the curve is only attracted toward control vertices, here the curve is forced to hit each clicked coordinate exactly. Internally the editor fits control vertices to achieve this, and those CVs are stored alongside the fit points in the DXF file.

## Drawing a spline through fit points

1. Type `splinefit` in the terminal or click the **Spline Fit** toolbar button.
2. **Click to place fit points** — the curve will pass through each one. Or type `X,Y` and press **Enter** for an exact coordinate.
3. Press **Enter** to finish (at least 2 points required).

```
  ●──────●──────●──────●  ← curve passes exactly through each click
  p1     p2     p3     p4
```

The live preview shows the current interpolated curve as you move the cursor, including the prospective next point at the cursor position. Press **Escape** to discard all placed points and exit.

## Coordinate entry

Instead of clicking, type an exact position for any fit point:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to place the fit point.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate, or finish the spline if no input is in progress and ≥ 2 points exist |
| `Escape` | Discard all points and exit |

## Grip editing — reshaping via fit points

A selected fit spline exposes one grip per fit point:

| Grip | Position | What it does |
|------|----------|--------------|
| **Fit point** | At each clicked position | Drag to move that fit point — the entire curve re-interpolates to pass through the new position |

Dragging one grip re-fits the whole curve, not just the adjacent segments. This differs from polyline grip editing, where moving a vertex only reshapes the two adjacent segments.

There is no "move whole spline" grip. To translate the entire spline, use the [Move](./move) command.

## Selecting fit splines

| Method | Behaviour |
|--------|-----------|
| **Click** | Selects if the click lands near any point on the curve |
| **Drag right** (strict) | All sample points along the curve must lie inside the selection box |
| **Drag left** (crossing) | Any part of the curve that crosses the selection box boundary selects it |

## Supported edit commands

| Command | What happens to the spline |
|---------|---------------------------|
| [Move](./move) | Translates all fit points and recomputed CVs by the same displacement |
| [Copy](./copy) | Creates an identical spline at a new position |
| [Rotate](./rotate) | Rotates all fit points around the chosen base point |
| [Mirror](./mirror) | Reflects all fit points across the mirror axis |
| [Scale](./scale) | Scales all fit points uniformly from the base point |
| [Delete](./delete) | Removes the spline |

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
| Fit Points | Coordinates of all clicked pass-through points |
| Control Vertices | Internally computed CVs used to render the curve |

## Spline Fit vs Spline CV — which to use

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Curve passes through points | Every clicked point exactly | First and last only (clamped) |
| Grip edit effect | Fit point moves → whole curve re-interpolated | CV moves → curve attracted toward new position |
| Shape predictability | High — curve follows clicks | Lower — curve lags behind CVs |
| Best for | Curves that must hit specific coordinates | Smooth aesthetic curves, free-form paths |

## DXF — SPLINE entity (fit-point form)

Fit splines are saved as `SPLINE` entities in the DXF file, storing both the fit point coordinates and the computed control vertices. The `splineFlag` is set to `8` (fit-point spline) so a reloading application knows which set of points to display as editable grips. All properties — color, layer, linetype, linetype scale, and thickness — round-trip without loss. DXF applications that support fit-point splines (LibreCAD, FreeCAD) will display the fit points as the primary editable data.
