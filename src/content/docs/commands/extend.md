---
title: Extend Command — Stretch an Entity to the Nearest Boundary
description: The Extend command stretches the nearest endpoint of a hovered Line, Arc, Ellipse, or open Polyline to the closest intersection with another entity. A live preview shows the extended entity before you click.
keywords: [CAD extend command, extend line CAD, extend arc CAD, extend ellipse CAD, extend polyline CAD, stretch entity to boundary, hover extend preview, kulmanlab]
group: edit
order: 9
---

# Extend

The `extend` command stretches the nearest endpoint of a hovered [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/), or open [Polyline](../polyline/) to the closest intersection it would form with another entity in the drawing. Hover near the endpoint you want to extend — a preview shows the extended entity — then click to apply.

Only entities with an actual endpoint can be extended. A [Circle](../circle/) and a full (360°) Ellipse are always closed shapes with no endpoint, so they can never be extended — same for a closed Polyline or Rectangle. A partial Ellipse (an elliptical arc) and an Arc do have endpoints and extend the same way a Line does.

## Extending an entity

1. Type `extend` in the terminal or click the **Extend** toolbar button.
2. **Hover near one end** of the entity you want to extend — the preview shows it extended to the nearest boundary in that direction.
3. **Click** to apply the extension.

The command stays active after each extension, so you can continue hovering and clicking to extend more entities. Press **Enter**, **Space**, or **Escape** to exit.

```
  Before:                      After:

  ──────           |           ──────────────|
  (short line)     (boundary)  (extended to boundary)
```

## How the endpoint is chosen

The command looks at which end the cursor is closer to:

- **Line and open Polyline** — cursor nearer the end point extends the end forward; cursor nearer the start point extends the start backward.
- **Arc and partial Ellipse** — cursor nearer one angular end grows the arc in that direction, sweeping around the same center and radius (or the same ellipse shape) until it reaches the next boundary.

A ray — or, for Arc and Ellipse, the entity's own underlying circle or curve — is cast from the chosen end, and the **closest intersection** with any other entity (excluding the entity itself and the ignored types) becomes the new endpoint.

If no intersection is found in that direction, no preview appears and clicking does nothing.

## Boundary exclusions

The following entity types are ignored as boundaries — an entity does not extend to meet them:

- Text / Mtext
- Multileader

All other types (Line, Arc, Circle, Ellipse, Polyline, Spline, Dimension) serve as valid boundaries.

If a [Polyline](../polyline/)'s **first or last segment** is itself an arc segment (drawn with the Arc toggle), extending it grows the arc along its own circle — the same way extending a standalone [Arc](../arc/) does — rather than treating it as a straight segment.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Exit extend mode |
| `Escape` | Exit extend mode |

## Supported entities

| Entity | Can be extended? |
|--------|----------------|
| Line | Yes |
| Arc | Yes |
| Ellipse | Yes — only if it's already a partial arc; a full ellipse has no endpoint |
| Circle | No — always a closed shape with no endpoint |
| Polyline (open) | Yes |
| Polyline (closed) / Rectangle | No — always a closed shape with no endpoint |
| Text, Spline, Dimension, Leader | No |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| What it does | Stretches an entity's endpoint to a boundary | Removes a segment of an entity |
| Trigger | Hover near the endpoint to stretch | Hover over the segment to cut |
| Result | Endpoint moves outward | Entity splits or shortens |
| Supported entities | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
