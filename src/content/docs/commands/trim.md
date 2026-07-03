---
sidebar_position: 7
title: Trim Command — Cut Line Segments at Intersections in KulmanLab CAD
description: The Trim command removes the portion of a Line between two adjacent intersection points nearest to the cursor. A red hover preview shows exactly which segment will be cut before you click. Trim works on Line entities only — not arcs, circles, or polylines.
keywords: [CAD trim command, trim line CAD, cut line intersection, hover trim preview, line only trim, kulmanlab]
---

# Trim

The `trim` command removes the portion of a [Line](../line/) that lies between two adjacent intersection points, splitting the line into one or two shorter segments. The segment to cut is determined by the cursor position — hover over the part you want removed and click to trim it.

Trim works on **Line entities only**. For arcs, circles, polylines, and other entity types use [Delete](../delete/) or grip editing instead.

## Trimming a line

1. Type `trim` in the terminal or click the **Trim** toolbar button.
2. **Hover over the line segment** you want to remove — a red preview highlights exactly the portion that will be cut.
3. **Click** to remove that segment.

The command stays active after each trim, so you can continue hovering and clicking to cut more segments. Press **Escape** to exit.

```
  Before:                     After trimming middle segment:

  ──────●──────●──────        ──────●          ●──────
      intersect  intersect       (left part)  (right part)
                                 (middle segment removed)
```

## How the trim segment is determined

The command projects the cursor position onto the hovered line and finds all intersection points the line has with other entities. These intersection parameters divide the line into segments. The segment whose interval contains the cursor's projection is highlighted and will be removed on click.

- If the cursor is **before the first intersection**: that leading portion of the line is removed.
- If the cursor is **between two intersections**: that middle portion is removed; the line splits into two.
- If the cursor is **after the last intersection**: that trailing portion is removed.
- If the line has **no intersections** with any other entity: no preview is shown and clicking does nothing.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Escape` | Exit trim mode |

## Supported entities

| Entity | Can be trimmed? |
|--------|----------------|
| Line | Yes |
| Arc, Circle, Ellipse | No |
| Polyline / Rectangle | No |
| Text, Spline, Dimension, Leader | No |

The entities used as **cutting boundaries** can be any type — only the line being trimmed must be a Line entity.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| What it does | Removes a segment of a line | Stretches a line endpoint to a boundary |
| Trigger | Hover over the segment to cut | Hover near the endpoint to extend |
| Result | Line splits or shortens | Line endpoint moves to the boundary |
| Both | Lines only | Lines only |
