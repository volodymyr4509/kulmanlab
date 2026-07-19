---
title: Dimension Linear Command — Horizontal and Vertical Dimensions
description: The Dimension Linear command measures the horizontal or vertical distance between two points. The dimension line is always axis-aligned — press H or V to lock orientation, or let the cursor position decide automatically. Full DXF round-trip as DIMENSION entities.
keywords: [CAD dimension linear, horizontal dimension CAD, vertical dimension CAD, dimlinear, H V orientation lock, dimension offset, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

The `dimlinear` command places a horizontal or vertical dimension between two extension-line origins. The dimension line always runs either perfectly horizontal or perfectly vertical — it cannot be placed at an arbitrary angle. Use [Dimension Aligned](../dim-aligned/) when you need a dimension parallel to a diagonal line.

## Anatomy of a linear dimension

```
  |←————— 5.00 —————→|
  |                   |
  ●  (ext line 1)     ●  (ext line 2)
  p1                  p2
```

- **Extension lines** — drop from each measured point perpendicular to the dimension line.
- **Dimension line** — horizontal (measures X distance) or vertical (measures Y distance).
- **Value** — the projected distance along the chosen axis, not the true point-to-point distance.

## Placing a linear dimension

1. Type `dimlinear` in the terminal or click the **Dimension Linear** toolbar button.
2. **Click the first extension line origin** (p1), or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click the second extension line origin** (p2). Coordinate entry works here too.
4. **Move the cursor** to position the dimension line. Orientation is detected automatically from cursor position.
5. **Click** to place, or type an offset distance and press **Enter** for precise placement.

## Automatic orientation detection

When no orientation is forced, the command reads the cursor position relative to the two measured points:

| Cursor position | Detected orientation | What is measured |
|-----------------|---------------------|-----------------|
| Above or below the points | Horizontal | Δ X between p1 and p2 |
| Left or right of the points | Vertical | Δ Y between p1 and p2 |

Press **H** to lock horizontal or **V** to lock vertical at any time during the placement phase. Once locked, the orientation does not change as you move the cursor.

## Typed offset distance

Type a number during placement to fix the dimension line at an exact distance from the measured points:

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the offset distance |
| `Backspace` | Delete the last typed character |
| `Enter` / `Space` | Place at the typed distance |

The cursor side (above/below for horizontal, left/right for vertical) determines the sign — the dimension line appears on the side the cursor is currently on.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry (p1/p2 phases), or offset distance (placement phase) |
| `,` | Lock X and move to Y entry (p1/p2 phases) |
| `H` | Lock horizontal orientation (placement phase only) |
| `V` | Lock vertical orientation (placement phase only) |
| `Backspace` | Delete last typed character |
| `Enter` / `Space` | Confirm typed coordinate or offset |
| `Escape` | Cancel |

## Dimension Linear vs Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Axis | Always H or V | Parallel to the measured line |
| Measures | X or Y component only | True Euclidean distance |
| H/V keys | Yes — lock orientation | No — always follows p1→p2 |
| Best for | Orthogonal layouts, floor plans | Diagonal features, angled cuts |

## Editing the label — simple mode

**Double-click** a placed linear dimension to open the text editor in **simple** mode. The editor is pre-seeded with the current rendered value so you can position the cursor and edit it directly.

| Feature | Behaviour |
|---------|-----------|
| Bold / Italic / Font / Height | Apply to the **entire** label at once |
| Per-character formatting | Not supported |
| `Enter` | Commits the value and closes the editor |
| Multi-line | Not supported |

See [Text Editor — simple mode](../../interface/text-editor/#simple-mode) for the full reference.

## Chaining dimensions

To add more dimensions continuing from the last extension line, use [Dimension Continue](../dim-continue/) immediately after placing this one.

## DXF — DIMENSION entity

Linear dimensions are saved as `DIMENSION` entities with `rotationDeg` set to `0` (horizontal) or `90` (vertical). Extension line origins, dimension line position, text position, measured value, arrow style, text height, and all display flags round-trip without loss.
