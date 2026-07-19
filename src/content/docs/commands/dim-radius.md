---
title: Dimension Radius Command — Annotate Arc and Circle Radii
description: The Dimension Radius command places an R-prefixed radial dimension on an arc or circle. Click the entity, then move the cursor to orient the dimension line from center to circumference. Full DXF round-trip as DIMENSION radius entities.
keywords: [CAD radius dimension, dimradius, annotate circle radius, arc radius dimension, R prefix dimension, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

The `dimradius` command places a radius dimension on an arc or circle. The dimension line runs from the center to a point on the circumference in the cursor's direction, labeled `R <value>`. To dimension a full diameter instead, use [Dimension Diameter](../dim-diameter/).

## Anatomy of a radius dimension

```
  ● (center)
   \
    \  R 5.00
     \
      ●────── text (cursor side)
   (arc point)
```

- **Dimension line** — from center through an arc point toward the cursor, with an arrowhead at the arc.
- **Label** — `R` followed by the radius value.

## Placing a radius dimension

1. Type `dimradius` in the terminal or click the **Dimension Radius** toolbar button.
2. **Click an arc or circle** to select it.
3. **Move the cursor** to orient the dimension line — the arc-point tracks the cursor direction from the center.
4. **Click** to place the dimension.

Only **Arc** and **Circle** entities can be selected. Clicking any other entity type does nothing.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Escape` | Cancel |

## Dimension Radius vs Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Measures | Radius (center to edge) | Diameter (edge to edge through center) |
| Dimension line | Center → arc point | Arc point → arc point (through center) |
| Label prefix | `R` | `⌀` |
| Arrowheads | One (at arc point) | Two (at both arc points) |
| Best for | Annotating one side of a curved feature | Annotating full circular dimensions |

## Editing the label — simple mode

**Double-click** a placed radius dimension to open the text editor in **simple** mode. The editor is pre-seeded with the current rendered value (e.g. `R 5.00`) so you can position the cursor and edit it directly.

| Feature | Behaviour |
|---------|-----------|
| Bold / Italic / Font / Height | Apply to the **entire** label at once |
| Per-character formatting | Not supported |
| `Enter` | Commits the value and closes the editor |
| Multi-line | Not supported |

See [Text Editor — simple mode](../../interface/text-editor/#simple-mode) for the full reference.

## DXF — DIMENSION radius entity

Radius dimensions are saved as `DIMENSION` entities with radius-type geometry, storing the center coordinates, the arc-point position, and the measured radius value. All properties round-trip without loss.
