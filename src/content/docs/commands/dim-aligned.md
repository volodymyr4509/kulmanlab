---
sidebar_position: 14
title: Dimension Aligned Command — True-Distance Dimensions at Any Angle in KulmanLab CAD
description: The Dimension Aligned command measures the true straight-line distance between two points. The dimension line runs parallel to the p1→p2 line at any angle — unlike Dimension Linear which is restricted to horizontal or vertical. Full DXF round-trip as DIMENSION entities.
keywords: [CAD dimension aligned, dimaligned, diagonal dimension CAD, true distance dimension, angled dimension CAD, kulmanlab]
---

# Dimension Aligned

The `dimaligned` command places a dimension that measures the **true straight-line distance** between two points. The dimension line runs parallel to the line connecting the two points, so it can be at any angle. This is the key difference from [Dimension Linear](../dim-linear/), which is restricted to horizontal or vertical.

## Anatomy of an aligned dimension

```
     ●  p2
    /|
   / |  (ext line 2, perpendicular to dim line)
  /  |
 /←5.00→/
/  /
●  /  (ext line 1, perpendicular to dim line)
p1
```

- **Extension lines** — perpendicular to the dimension line, drawn from each measured point.
- **Dimension line** — parallel to p1→p2, offset to one side by cursor position.
- **Value** — the true Euclidean distance `|p1 – p2|`.

## Placing an aligned dimension

1. Type `dimaligned` in the terminal or click the **Dimension Aligned** toolbar button.
2. **Click the first extension line origin** (p1), or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click the second extension line origin** (p2). Coordinate entry works here too.
4. **Move the cursor** to one side to set the perpendicular offset of the dimension line.
5. **Click** to place, or type an offset distance and press **Enter** for precise placement.

## Typed offset distance

Type a number during placement to fix the dimension line at an exact perpendicular distance from the p1→p2 line:

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the offset |
| `Backspace` | Delete the last typed character |
| `Enter` / `Space` | Place at the typed offset |

The cursor side determines which side the dimension line appears on.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry (p1/p2 phases), or offset distance (placement phase) |
| `,` | Lock X and move to Y entry (p1/p2 phases) |
| `Backspace` | Delete last typed character |
| `Enter` / `Space` | Confirm typed coordinate or offset |
| `Escape` | Cancel |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Dimension line angle | Parallel to p1→p2 — any angle | Always horizontal or vertical |
| Measures | True Euclidean distance | X or Y component only |
| H/V orientation lock | No | Yes — `H` and `V` keys |
| Best for | Diagonal features, angled cuts | Orthogonal layouts, grid-aligned parts |

## Editing the label — simple mode

**Double-click** a placed aligned dimension to open the text editor in **simple** mode. The editor is pre-seeded with the current rendered value so you can position the cursor and edit it directly.

| Feature | Behaviour |
|---------|-----------|
| Bold / Italic / Font / Height | Apply to the **entire** label at once |
| Per-character formatting | Not supported |
| `Enter` | Commits the value and closes the editor |
| Multi-line | Not supported |

See [Text Editor — simple mode](../../interface/text-editor/#simple-mode) for the full reference.

## Chaining dimensions

To add more dimensions continuing from the second extension line of this one, use [Dimension Continue](../dim-continue/) — it locks to the same measurement angle as this aligned dimension.

## DXF — DIMENSION entity (aligned type)

Aligned dimensions are saved as `DIMENSION` entities with `dimType = 1` (aligned). Extension line origins, dimension line position, text position, measured value, rotation, arrow style, and all display flags round-trip without loss.
