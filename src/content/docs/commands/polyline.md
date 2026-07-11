---
title: Polyline Command — Draw Multi-Segment Paths as a Single Entity in KulmanLab CAD
description: The Polyline command draws any number of connected segments stored as one LWPOLYLINE entity. Vertex and segment-midpoint grips let you reshape any part of the path after creation. Supports offset; does not support trim or extend.
keywords: [CAD polyline command, draw polyline CAD, multi-segment path CAD, LWPOLYLINE DXF, reshape polyline, vertex grip CAD, offset polyline, kulmanlab]
group: shapes
order: 2
---

# Polyline

The `polyline` command draws a connected path of any number of straight segments, all stored as a single `LWPOLYLINE` entity. Because the entire path is one object, selecting it selects every segment at once — move, rotate, or scale the whole shape in a single operation. This is the key distinction from chained [Lines](../line/), where each segment is an independent entity.

Polylines can also be **closed**: the [Rectangle](../rectangle/) command uses the same `LWPOLYLINE` entity with a close flag set.

## Drawing a polyline

1. Type `polyline` in the terminal or click the **Polyline** toolbar button.
2. **Click the first point**, or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click each subsequent point** — each click adds a segment. Coordinate entry works at every step.
4. Press **Enter** or **Space** to finish (requires at least 2 points placed).

```
  ●──────●
  1st    2nd
          \
           \  segment 3 (in progress — cursor here)
            ●  ← click to add, Enter/Space to finish
```

Pressing **Escape** at any time discards all placed points and exits the command.

## Coordinate entry

Instead of clicking, type an exact position for any vertex:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to place the vertex.

## Angle locking and exact segment length

The same 45° snap logic as the [Line](../line/#angle-locking-and-exact-length-input) command applies between any two consecutive points. When locked to an axis:

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the segment length |
| `-` | Negative length — reverses direction along the axis (first character only) |
| `Backspace` | Delete the last typed character |
| `Enter` | Place the next point at the typed distance |

The current accumulated length appears in the terminal prompt in real time. Clicking while locked projects onto the axis so the new vertex lands exactly on it.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry, or segment length when angle-locked |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate or length, or finish the polyline if nothing is typed and ≥ 2 points exist |
| `Space` | Finish the polyline (same as Enter when no input is in progress) |
| `Escape` | Discard all points and exit |

## Grip editing — vertices and segment midpoints

A selected polyline shows two types of grips:

| Grip | Position | What it does |
|------|----------|--------------|
| **Vertex** | At each placed point | Drag to reposition that vertex; all connected segments stretch to follow |
| **Segment midpoint** | Centre of each segment | Drag to translate **both** endpoints of that segment together, keeping the segment length and angle intact |

The segment-midpoint grip is unique to polylines — it lets you slide an individual segment sideways without changing its length. On a [Line](../line/), the midpoint grip instead activates the Move command for the whole entity.

There is no single "move the whole polyline" grip. To move the entire path use the [Move](../move/) command.

## Selecting polylines

| Method | Behaviour |
|--------|-----------|
| **Click** | Selects the polyline if the click lands within hit-test distance of any segment |
| **Drag right** (strict) | All vertices must fall inside the box |
| **Drag left** (crossing) | Any segment that crosses the box boundary selects the whole polyline |

Because a polyline is one entity, a crossing selection that touches any segment selects all segments.

## Supported edit commands

Polylines support all general transformations and offset, but **not** trim or extend (those are [Line](../line/)-only):

| Command | What happens to the polyline |
|---------|------------------------------|
| [Move](../move/) | Translates all vertices by the same displacement |
| [Copy](../copy/) | Creates an identical polyline at a new position |
| [Rotate](../rotate/) | Rotates all vertices around the chosen base point |
| [Mirror](../mirror/) | Reflects all vertices across the mirror axis |
| [Scale](../scale/) | Scales all vertices uniformly from the base point |
| [Offset](../offset/) | Creates a parallel polyline at a fixed perpendicular distance |
| [Delete](../delete/) | Removes the polyline from the drawing |

## Properties

When a polyline is selected the properties panel shows:

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
| Closed | Whether the last vertex connects back to the first |
| Vertex Count | Total number of vertices |
| Vertices | Coordinate list of all vertices |

## Polyline vs Line — when to use which

| | Polyline | Line |
|---|---------|------|
| Entity count | One `LWPOLYLINE` for the whole path | One `LINE` per segment |
| Closed shape | Yes (close flag) | No |
| Trim / Extend | No | Yes — segment by segment |
| Segment-midpoint grip | Translates the whole segment | Activates Move for the entity |
| Best for | Outlines, contours, shapes you keep whole | Construction lines, geometry you'll trim |

## DXF — LWPOLYLINE entity

Polylines are saved as `LWPOLYLINE` entities in the DXF file. All properties — vertex coordinates, closed flag, color, layer, linetype, linetype scale, and thickness — round-trip without loss. Rectangles drawn with the [Rectangle](../rectangle/) command also save as `LWPOLYLINE` (closed, four vertices) and are indistinguishable at the DXF level.

`LWPOLYLINE` entities from any DXF-compatible application (LibreCAD, FreeCAD, etc.) are read back as fully editable polylines in the editor.
