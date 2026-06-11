---
sidebar_position: 10
title: Extend Command — Stretch a Line Endpoint to the Nearest Boundary in KulmanLab CAD
description: The Extend command stretches the nearest endpoint of a hovered Line to the closest intersection with another entity. A live preview shows the extended line before you click. Extend works on Line entities only and ignores Text, Spline, and Multileader as boundaries.
keywords: [CAD extend command, extend line CAD, stretch line to boundary, line endpoint extend, hover extend preview, kulmanlab]
---

# Extend

The `extend` command stretches the nearest endpoint of a [Line](./line) to the closest intersection it would form with another entity in the drawing. Hover near the endpoint you want to extend — a preview shows the extended line — then click to apply.

Extend works on **Line entities only**. The boundaries the line extends toward can be any other entity type except Text, Mtext, Multileader, and Spline.

## Extending a line

1. Type `extend` in the terminal or click the **Extend** toolbar button.
2. **Hover near one end of a line** — the preview shows the line extended to the nearest boundary in that direction.
3. **Click** to apply the extension.

The command stays active after each extension so you can extend multiple lines in sequence. Press **Escape** to exit.

```
  Before:                      After:

  ──────           |           ──────────────|
  (short line)     (boundary)  (extended to boundary)
```

## How the endpoint is chosen

The command looks at which endpoint the cursor is closer to:

- Cursor **nearer to the end point** → the end is extended forward along the line direction.
- Cursor **nearer to the start point** → the start is extended backward (in the opposite direction).

A ray is cast from the chosen endpoint along the line direction, and the **closest intersection** along that ray with any other entity (excluding the line itself and the ignored types) becomes the new endpoint.

If no intersection is found in that direction, no preview appears and clicking does nothing.

## Boundary exclusions

The following entity types are ignored as boundaries — a line does not extend to meet them:

- Text / Mtext
- Multileader
- Spline

All other types (Line, Arc, Circle, Ellipse, Polyline, Dimension) serve as valid boundaries.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Escape` | Exit extend mode |

## Supported entities

| Entity | Can be extended? |
|--------|----------------|
| Line | Yes |
| Arc, Circle, Ellipse | No |
| Polyline / Rectangle | No |
| Text, Spline, Dimension, Leader | No |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| What it does | Stretches a line endpoint to a boundary | Removes a segment of a line |
| Trigger | Hover near the endpoint to stretch | Hover over the segment to cut |
| Result | Line endpoint moves outward | Line splits or shortens |
| Both | Lines only | Lines only |
