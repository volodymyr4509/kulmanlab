---
title: Trim Command — Cut Entity Segments at Intersections
description: The Trim command removes the portion of a Line, Arc, Circle, Ellipse, Polyline, or Spline between two adjacent intersection points nearest to the cursor. A preview shows exactly which segment will be cut before you click.
keywords: [CAD trim command, trim spline CAD, trim line CAD, trim circle CAD, trim arc CAD, trim ellipse CAD, trim polyline CAD, cut line intersection, hover trim preview, kulmanlab]
group: edit
order: 8
---

# Trim

The `trim` command removes the portion of a [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/), [Polyline](../polyline/), or [Spline](../spline-cv/) that lies between two adjacent intersection points, splitting the entity into one or more remaining pieces. The segment to cut is determined by the cursor position — hover over the part you want removed and click to trim it.

## Trimming an entity

1. Type `trim` in the terminal or click the **Trim** toolbar button.
2. **Hover over the segment** you want to remove — a preview highlights exactly the portion that will be cut.
3. **Click** to remove that segment.

The command stays active after each trim, so you can continue hovering and clicking to cut more segments — on the same entity or a different one. Press **Enter**, **Space**, or **Escape** to exit.

```
  Before:                     After trimming middle segment:

  ──────●──────●──────        ──────●          ●──────
      intersect  intersect       (left part)  (right part)
                                 (middle segment removed)
```

## How the trim segment is determined

The command projects the cursor position onto the hovered entity and finds all intersection points it has with other entities. These intersections divide the entity into segments — for a Line, Arc, or open Polyline, the entity's own endpoints act as additional fixed boundaries. A full Circle or Ellipse, a closed Polyline (including a Rectangle), or a closed Spline has no endpoints of its own, so at least two intersection points are needed before it can be trimmed at all. The segment whose interval contains the cursor's projection is highlighted and will be removed on click.

- **Line, Arc, and open Polyline** — the removed segment can be the leading portion (before the first intersection), a middle portion (between two intersections, splitting the entity into two pieces), or the trailing portion (after the last intersection).
- **Circle, Ellipse, and closed Polyline/Rectangle/Spline** — since there is no fixed start or end, only the arc between two *intersection points* can be removed. With fewer than two intersections, no preview appears and clicking does nothing. The rest of the shape becomes the single remaining piece.

## What trimming produces

| Entity | Result after trimming |
|--------|------------------------|
| Line | Up to two shorter Line entities |
| Arc | Up to two shorter Arc entities |
| Circle | One [Arc](../arc/) entity — the circle's closed shape is gone, so the remaining piece is stored as an arc |
| Ellipse | One Ellipse entity with a start and end angle — the remaining piece stays an Ellipse, now a partial one |
| Polyline (open) | Up to two shorter Polyline entities |
| Polyline (closed) / Rectangle | One open Polyline entity — the closed shape is gone, so the remaining piece is stored open |
| Spline | Up to two shorter Spline entities — each piece is the same curve over less of itself, stored by control vertices (a fit spline's fit points are dropped); a closed spline leaves one open piece |

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Exit trim mode |
| `Escape` | Exit trim mode |

## Supported entities

| Entity | Can be trimmed? |
|--------|----------------|
| Line | Yes |
| Arc | Yes |
| Circle | Yes — requires 2 or more intersection points |
| Ellipse | Yes — requires 2 or more intersection points |
| Polyline (open) | Yes |
| Polyline (closed) / Rectangle | Yes — requires 2 or more intersection points |
| Spline | Yes — a closed spline requires 2 or more intersection points |
| Text, Dimension, Leader | No |

The entities used as **cutting boundaries** can be a Line, Arc, Circle, Ellipse, Polyline, or Spline. Text, Dimension, and Leader entities never register intersections, so they can't act as boundaries either.

A [Spline](../spline-cv/) is cut by knot insertion rather than refitted, so each piece lies exactly where the original curve did.

A [Polyline](../polyline/)'s **arc segments** (drawn with the Arc toggle, or imported from another CAD tool) trim exactly like its straight segments — hover the arc portion between two intersections and click. The trimmed edge keeps its original curvature; only its length changes.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| What it does | Removes a segment of an entity | Stretches a line endpoint to a boundary |
| Trigger | Hover over the segment to cut | Hover near the endpoint to extend |
| Result | Entity splits or shortens | Line endpoint moves to the boundary |
| Supported entities | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
