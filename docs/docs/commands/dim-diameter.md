---
sidebar_position: 17
title: "Dimension Diameter Command — Annotate Full Circle and Arc Diameters in KulmanLab CAD"
description: "The Dimension Diameter command places a diameter dimension (prefixed with the diameter symbol) across an arc or circle through the center. Move the cursor to rotate the dimension line to any angle. Full DXF round-trip as DIMENSION diameter entities."
keywords: [CAD diameter dimension, dimdiameter, annotate circle diameter, arc diameter dimension, diameter symbol CAD, kulmanlab]
---

# Dimension Diameter

The `dimdiameter` command places a diameter dimension on an arc or circle. The dimension line spans the full diameter — passing through the center between two diametrically opposite arc points — and is labeled `⌀ <value>`. To annotate just the radius from center to one edge, use [Dimension Radius](./dim-radius).

## Anatomy of a diameter dimension

```
  ●──────────── ⌀ 10.00 ────────────●
  (far arc point)              (near arc point / text side)
```

- **Dimension line** — spans the full diameter, with arrowheads at both arc-intersection points.
- **Near arc point** — the circumference point on the cursor side (where the text label sits).
- **Far arc point** — the diametrically opposite point.
- **Label** — `⌀` followed by the diameter value.

## Placing a diameter dimension

1. Type `dimdiameter` in the terminal or click the **Dimension Diameter** toolbar button.
2. **Click an arc or circle** to select it.
3. **Move the cursor** to rotate the dimension line to the desired angle.
4. **Click** to place the dimension.

Only **Arc** and **Circle** entities can be selected.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Escape` | Cancel |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Measures | Full diameter (2 × radius) | Radius (center to edge) |
| Dimension line | Edge → edge through center | Center → edge |
| Label prefix | `⌀` | `R` |
| Arrowheads | Two (at both arc points) | One (at arc point) |
| Best for | Full circular hole or shaft dimensions | Annotating one side of a curved feature |

## DXF — DIMENSION diameter entity

Diameter dimensions are saved as `DIMENSION` entities with diameter-type geometry, storing both arc-point positions and the measured diameter value (2 × radius). All properties round-trip without loss.
