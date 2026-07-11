---
title: Line Command — Draw, Chain, Trim and Extend Lines in KulmanLab CAD
description: The Line command draws individual straight-line segments that can be chained end-to-end. Lines are the only entity type that Trim and Extend work on. Full DXF round-trip as LINE entities.
keywords: [CAD line command, draw straight line CAD, chain line segments, trim line CAD, extend line CAD, angle lock CAD, DXF LINE entity, kulmanlab]
group: shapes
order: 1
---

# Line

The `line` command draws individual straight-line segments stored as separate `LINE` entities in the DXF model. After each segment the command stays active and re-uses the endpoint as a new start point, so you can build connected paths one segment at a time. Unlike a [Polyline](../polyline/), chained lines remain independent entities — each one can be trimmed, extended, or deleted without affecting its neighbours.

## Drawing lines

1. Type `line` in the terminal or click the **Line** toolbar button.
2. **Click the start point**, or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click the end point** — the segment is placed and the endpoint becomes the next start point. Coordinate entry works here too.
4. Keep clicking (or typing) to chain more segments.
5. Press **Enter** or **Escape** to stop.

```
  ●──────────●──────────●──────────●
 start     2nd click  3rd click   Enter to finish
            (auto-becomes next start)
```

Only need a single segment? Press **Enter** or **Escape** right after step 3.

## Coordinate entry

Instead of clicking, type an exact position for the start or any subsequent point:

1. Type the X value (digits, `.`, or `-`).
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to place the point.

## Angle locking and exact length input

As you move the cursor after placing a point, the command watches for a 45° snap axis (0°, 45°, 90°, 135°, …). The angle **locks** when:

- the cursor is at least **5 × grip size** from the anchor, **and**
- it is within **1 grip size** of perpendicular distance from the nearest axis.

When locked the preview snaps to the axis and you can enter an exact length:

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the length value |
| `-` | Negative length — reverses direction along the axis (first character only) |
| `Backspace` | Delete the last typed character |
| `Enter` | Place the endpoint at the typed distance |

The accumulated value is shown live in the terminal (e.g. `click end point or enter length: 12.5`). Click while locked and the click is projected onto the axis, so the endpoint always lies exactly on it.

Moving back close to the anchor point disengages the lock.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry, or distance when angle-locked |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate or length, or finish the chain if nothing is typed |
| `Escape` | Finish the chain and exit |

## Grip editing — stretching endpoints

A selected line shows three grips:

| Grip | Where | What it does |
|------|-------|--------------|
| **Start** | First endpoint | Drag to reposition — the end stays fixed |
| **Midpoint** | Centre of the line | Activates **Move** for the whole line |
| **End** | Second endpoint | Drag to reposition — the start stays fixed |

Stretching one endpoint never affects the other. This differs from [Polyline](../polyline/) grip editing, where moving a vertex reshapes the entire path.

## Selecting lines

| Method | Behaviour |
|--------|-----------|
| **Click** | Selects the line if the click is within hit-test distance of the segment |
| **Drag right** (strict) | Line is selected only if both endpoints fall inside the box |
| **Drag left** (crossing) | Line is selected if any part of the segment crosses the box boundary |

## Supported edit commands

Lines are the **only** entity that [Trim](../trim/) and [Extend](../extend/) operate on. All standard transformation commands also apply:

| Command | What happens to a line |
|---------|------------------------|
| [Move](../move/) | Translates both endpoints by the same displacement |
| [Copy](../copy/) | Creates an identical line at a new position |
| [Rotate](../rotate/) | Rotates both endpoints around the chosen base point |
| [Mirror](../mirror/) | Reflects both endpoints across the mirror axis |
| [Scale](../scale/) | Scales both endpoints uniformly from the base point |
| [Offset](../offset/) | Creates a parallel line at a fixed perpendicular distance |
| [Trim](../trim/) | Cuts the line at intersections — **lines only** |
| [Extend](../extend/) | Stretches the nearest endpoint to reach a boundary — **lines only** |
| [Delete](../delete/) | Removes the line from the drawing |

## Properties

When a line is selected the properties panel shows every field that the DXF `LINE` record carries:

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
| Start X / Start Y | First endpoint coordinates |
| End X / End Y | Second endpoint coordinates |

All fields are editable directly in the panel without re-running the command.

## Line vs Polyline — when to use which

| | Line | Polyline |
|---|------|---------|
| Entity count | One `LINE` per segment | One `LWPOLYLINE` for the whole path |
| Trim / Extend | Yes — segment by segment | No |
| Closed shape | No | Yes (close flag) |
| Grip editing | Stretch individual endpoints | Move any vertex along the path |
| Best for | Construction lines, single segments, geometry you'll trim | Contours, outlines, shapes you keep whole |

## DXF — LINE entity

Lines are saved as `LINE` entities in the DXF file. Every property — start/end coordinates, color, layer, linetype, linetype scale, and thickness — round-trips without loss. When you open a DXF that contains `LINE` entities they become fully editable `Line` objects in the editor.

Lines drawn in the editor are also written as `LINE` entities on save, so they are readable by LibreCAD, FreeCAD, and any other DXF-compatible application.
