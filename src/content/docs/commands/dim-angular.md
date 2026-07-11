---
title: Dimension Angular — Measure Angles Between Lines, Arcs and Circles in KulmanLab CAD
description: The DimensionAngular command places an angular dimension annotation on lines, arcs, or circles. Supports two-line angle, arc span, and circle sector modes.
keywords: [angular dimension CAD, angle dimension, measure angle between lines, DimensionAngular, arc dimension, angle annotation, CAD angle markup, kulmanlab angular dimension]
group: markup
order: 9
---

# Dimension Angular

The `DimensionAngular` command places an **angular dimension** arc annotation on the drawing. It measures and labels the angle between two lines, the span of an arc, or a sector of a circle.

## How to activate

Click the **Dimension Angular** toolbar button in the Markup panel, or type `DimensionAngular` in the terminal.

## Three input modes

The first click determines which mode is used:

### Two lines

1. **Click the first line.** The cursor position determines which side of the line is used.
2. **Click the second line.** The two lines must intersect (the intersection is computed automatically; it does not need to be visible on screen).
3. **Click to place** the dimension arc. Move the cursor to choose the radius and which angular sector is labelled — the annotation follows the cursor to whichever side of the vertex you are on.

Parallel lines cannot form an angular dimension; the command ignores the second click if the lines do not intersect.

### Arc

1. **Click an arc.** The dimension is created immediately from the arc's start angle to its end angle, using the arc's center as the vertex.
2. **Click to place** the dimension arc at the desired radius.

### Circle

1. **Click a circle.** The first angle endpoint snaps to the nearest point on the circle.
2. **Click a second point** on the circle to define the second angle endpoint.
3. **Click to place** the dimension arc.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Escape` | Cancel and return to the first pick |

## Behaviour details

- The dimension arc is always drawn on the side of the vertex where you place it — move the cursor across the vertex to flip to the supplementary angle.
- The measured angle is shown in degrees and updates live as you move the cursor during placement.
- The resulting annotation is a full `DimensionAngular` entity stored on the current layer. Its appearance properties (arrow size, text height, extension line length) can be adjusted in the Properties panel.
- Angular dimensions are included in JSON export but are not supported by the DXF exporter.

## Editing the label — simple mode

**Double-click** a placed angular dimension to open the text editor in **simple** mode. The editor is pre-seeded with the current rendered value so you can position the cursor and edit it directly.

| Feature | Behaviour |
|---------|-----------|
| Bold / Italic / Font / Height | Apply to the **entire** label at once |
| Per-character formatting | Not supported |
| `Enter` | Commits the value and closes the editor |
| Multi-line | Not supported |

See [Text Editor — simple mode](../../interface/text-editor/#simple-mode) for the full reference.

## Related commands

- [Dimension Linear](../dim-linear/) — horizontal or vertical dimension
- [Dimension Aligned](../dim-aligned/) — dimension aligned to two points
- [Dimension Radius](../dim-radius/) — radius dimension for arcs and circles
- [Dimension Diameter](../dim-diameter/) — diameter dimension for circles
