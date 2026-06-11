---
sidebar_position: 3
title: Rectangle Command — Draw Axis-Aligned Rectangles in KulmanLab CAD
description: The Rectangle command creates an axis-aligned rectangle from two opposite corners. The result is a closed LWPOLYLINE with four vertices — identical to any other polyline once placed, so every polyline edit command applies to it.
keywords: [CAD rectangle command, draw rectangle CAD, axis-aligned rectangle, closed polyline CAD, LWPOLYLINE DXF, rectangle grip editing, kulmanlab]
---

# Rectangle

The `rectangle` command draws an axis-aligned rectangle defined by two opposite corner clicks. The result is stored as a **closed `LWPOLYLINE`** with four vertices — one at each corner. There is no dedicated rectangle entity type: after creation the shape behaves exactly like any other [Polyline](./polyline) and every polyline edit applies to it.

## Drawing a rectangle

1. Type `rectangle` in the terminal or click the **Rectangle** toolbar button.
2. **Click the first corner**, or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click the opposite corner** — the rectangle is placed instantly and the command exits. Coordinate entry works here too.

```
  ● (first click)────────────┐
  |                          |
  |   live preview follows   |
  |   cursor after step 2    |
  └──────────────────────────● (second click)
```

The two clicks can be any pair of diagonally opposite corners — top-left + bottom-right, or bottom-left + top-right, etc. The order does not matter.

## Coordinate entry

At either corner step you can type an exact position:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to place the corner.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry |
| `,` | Lock X and move to Y entry |
| `Enter` | Confirm typed coordinate |
| `Escape` | Cancel |

The sides are always horizontal and vertical — there is no angle locking for the rectangle command.

## Grip editing — reshaping after creation

A selected rectangle shows grips at every vertex and at the midpoint of each side:

| Grip | Position | What it does |
|------|----------|--------------|
| **Corner** | Each of the 4 vertices | Drag to move that vertex; the two adjacent sides stretch to follow — the opposite corner stays fixed |
| **Side midpoint** | Centre of each of the 4 sides | Drag to translate both endpoints of that side together, keeping the side's length and angle |

Dragging a corner grip turns the rectangle into a non-rectangular quadrilateral. If you only need a rectangle that is a different size, drag a corner while keeping the sides roughly orthogonal, or delete it and draw a new one.

## Selecting rectangles

Because the rectangle is a polyline, selection works the same way:

| Method | Behaviour |
|--------|-----------|
| **Click** | Selects if the click lands on any of the four sides |
| **Drag right** (strict) | All four vertices must lie inside the selection box |
| **Drag left** (crossing) | Any side that crosses the box boundary selects the whole rectangle |

## Supported edit commands

All polyline edit commands apply. Trim and Extend are [Line](./line)-only and do not work on rectangles:

| Command | What happens to the rectangle |
|---------|-------------------------------|
| [Move](./move) | Translates all four vertices by the same displacement |
| [Copy](./copy) | Creates an identical rectangle at a new position |
| [Rotate](./rotate) | Rotates all four vertices around the chosen base point |
| [Mirror](./mirror) | Reflects all four vertices across the mirror axis |
| [Scale](./scale) | Scales all four vertices uniformly from the base point |
| [Offset](./offset) | Creates a parallel (inset or outset) rectangle at a fixed distance |
| [Delete](./delete) | Removes the rectangle from the drawing |

## Properties

When a rectangle is selected the properties panel shows the same fields as any polyline:

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
| Closed | Always `true` for a rectangle |
| Vertex Count | Always `4` for an unmodified rectangle |
| Vertices | Coordinates of all four corners |

## Rectangle vs Polyline vs Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| How to draw | 2 clicks (corners) | Click each vertex | Click each endpoint |
| Entity type | Closed `LWPOLYLINE` | Open or closed `LWPOLYLINE` | `LINE` per segment |
| Sides always orthogonal | Yes (at creation) | No | No |
| Trim / Extend | No | No | Yes |
| Best for | Boxes, frames, rectangular areas | Arbitrary outlines and paths | Individual segments, construction lines |

## DXF — LWPOLYLINE entity

Rectangles are saved as closed `LWPOLYLINE` entities with four vertices. All properties — vertex coordinates, color, layer, linetype, linetype scale, and thickness — round-trip without loss.

There is no dedicated `RECTANGLE` type in DXF. When a file is reopened, the shape appears as a closed four-vertex polyline rather than a rectangle. Any DXF viewer or editor that supports `LWPOLYLINE` (AutoCAD, LibreCAD, etc.) will display it correctly.
