---
title: Area Command — Measure Polygon Area and Perimeter
description: The Area command measures the enclosed area and perimeter of a polygon defined by 3 or more clicked points, using the shoelace formula. Supports angle-locked directional entry and a persistent on-canvas highlight of the result.
keywords: [CAD measure area, area command, polygon area calculator, perimeter measurement, shoelace formula, kulmanlab CAD measurement]
group: measure
order: 3
---

# Area

The `area` command measures the enclosed area and perimeter of a polygon defined by three or more clicked points, and prints both results in the terminal to 4 decimal places. It is the third measurement command, alongside [Distance](../distance/) (straight-line length) and [Angle](../angle/) (interior angle at a vertex).

## Anatomy of an area measurement

```
  ● first point
   \
    \
     ● second point
      \
       \             (dashed) closing edge preview
        ●───────────────┐
      third point       │  (dashed) next-edge preview to cursor
                         ✕ cursor  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Vertices** — every clicked (or typed) point becomes a polygon vertex; committed edges are drawn solid and the interior is filled with a translucent highlight.
- **Preview edges** — dashed lines show the pending edge from the last vertex to the cursor, and the closing edge from the cursor back to the first vertex, so you can see the shape before committing it.
- **Closing edge** — you never click the first point again; pressing Enter closes the polygon automatically.

## Measuring an area

1. Type `area` in the terminal or click the **Area** toolbar button (bottom row of the Measure panel).
2. **Click the first point**, or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click each additional vertex** in order around the shape. Coordinate entry works at every step.
4. Once at least **3 points** are placed, press **Enter** (with no coordinate or distance entry pending) to close the polygon and compute the result.
5. The terminal prints `Area: <value>  Perimeter: <value>`, and the closed polygon — fill, outline, and vertex grips — stays highlighted on the canvas.
6. **Click anywhere, press any key, or press `Escape`** to dismiss the result and end the command.

## Angle locking and exact distance

After the first vertex is placed, moving toward one of the configured angle-tracking increments (10°, 15°, 20°, 30°, 45°, or 90°, set via the toolbar dropdown) locks the next edge to that direction:

- The edge preview snaps to the locked direction, and an angle-tracking indicator is drawn at the anchor vertex.
- Type a length and press **Enter** to place the next vertex at exactly that distance along the locked direction.
- Clicking while locked (with no typed length) places the vertex at the cursor's projection onto the locked direction.

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append to the edge-length value |
| `-` | Negative length (first character only) |
| `Backspace` | Delete the last typed character |
| `Enter` | Place the next vertex at the typed length |

## Closing the polygon

- Enter only closes the shape once **3 or more** vertices are placed — with fewer, it has no effect.
- The edge from the last vertex back to the first is added automatically and counted in both the area and the perimeter.
- Points may be placed in any order (clockwise or counterclockwise) — the result is identical either way.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| What it measures | Enclosed area & perimeter of a polygon | Straight-line length | Interior angle at a vertex |
| Number of clicks | 3 or more, closed with Enter | 2 | 3 |
| Result format | `12.3456  Perimeter: 45.6789` | `12.3456` (units) | `45.0000°` |
| Canvas preview | Filled polygon with dashed closing edge | Line from first point to cursor | Two lines from vertex to both ends |
| After result | Dismiss with any input, then command exits | Click to chain a new measurement | Click to chain a new measurement |
| Best for | Enclosed regions, room or panel area | Length of a gap or segment | Opening angle between two features |

## Coordinate entry

Instead of clicking, type an exact position for any vertex:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to confirm.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry, or edge-length entry while angle-locked |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm a typed coordinate or length; with 3+ vertices and no pending entry, closes the polygon |
| `Escape` | While picking vertices, discard them and restart at the first point; once the result is shown, dismiss it and exit |

## Notes

- The area is computed with the [shoelace formula](https://en.wikipedia.org/wiki/Shoelace_formula) and is always reported as a positive value, regardless of click order.
- Self-intersecting polygons (edges that cross) still produce a numeric result, but the value may not match the visually enclosed region — keep click order non-crossing for a meaningful area.
- Results are shown in the **terminal and as a temporary canvas highlight only** — nothing is added to the drawing as a permanent entity.
- Unlike Distance and Angle, Area does **not** chain into a new measurement automatically — after you dismiss the result, run `area` again to measure another polygon.
- Precision is always 4 decimal places for both area and perimeter, in the same units as the drawing coordinates (no unit conversion).
