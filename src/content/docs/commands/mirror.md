---
sidebar_position: 4
title: Mirror Command — Reflect Entities Across a Two-Point Axis in KulmanLab CAD
description: The Mirror command reflects selected entities across a mirror line defined by two clicks. The originals are always kept — Mirror creates new mirrored copies. The mirror axis can be at any angle and snaps to 45° increments.
keywords: [CAD mirror command, reflect entities CAD, mirror symmetry CAD, flip objects CAD, mirror axis CAD, kulmanlab]
---

# Mirror

The `mirror` command creates mirrored copies of selected entities reflected across a two-point axis. The originals are **always kept** — unlike [Move](../move/) or [Rotate](../rotate/), Mirror never modifies existing entities; it only adds new ones.

## Two ways to start

**Pre-select, then mirror** — select entities first, then activate:

1. Select one or more entities on the canvas.
2. Type `mirror` in the terminal or click the **Mirror** toolbar button.
3. **Click the first point** of the mirror axis, or type `X,Y` and press **Enter** for an exact coordinate.
4. **Click the second point** — mirrored copies are placed and the command exits. Coordinate entry works here too.

**Activate, then select** — start the command with nothing selected:

1. Type `mirror` or click the toolbar button.
2. **Select objects** — click to toggle, or drag to select by area.
3. Press **Enter** or **Space** to confirm the selection.
4. **Click the first point**, then **click the second point** of the mirror axis (coordinate entry available at both steps).

```
  Original:          Mirror axis:        Result:
                     |
  [entity A]    →    |    →    [entity A] + [mirrored A]
                     |
```

A live preview of the mirrored copies follows the cursor while you position the second axis point.

## Mirror axis

The axis is an infinite line through the two clicked points. It can be at any angle:

- Move the cursor close to a **45° snap axis** (0°, 45°, 90°, 135°, …) and the axis locks to that angle — useful for clean horizontal, vertical, or diagonal reflections.
- Click away from the snap zone for a free-angle axis.

## Coordinate entry

At either axis-point step, type an exact position instead of clicking:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to confirm.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Confirm selection |
| `0`–`9`, `.`, `-` | Start X coordinate entry |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate |
| `Escape` | Cancel and reset |

## Selection during the command

| Method | Behaviour |
|--------|-----------|
| **Click** | Toggles the entity under the cursor |
| **Drag right** (strict) | Adds entities fully inside the box |
| **Drag left** (crossing) | Adds entities that intersect the box |
| **Enter** / **Space** | Confirms the selection |

## What gets mirrored

Every entity type is supported. Geometry is reflected across the axis mathematically:

| Entity | What changes |
|--------|-------------|
| Line | Both endpoints reflected |
| Circle | Center reflected; radius unchanged |
| Arc | Center reflected; start and end angles recalculated across the axis |
| Ellipse | Center reflected; major axis direction flipped across the axis |
| Polyline / Rectangle | Every vertex reflected |
| Text | Anchor point reflected; text string is **not** reversed |
| Spline | All control vertices / fit points reflected |

## Mirror vs Copy

| | Mirror | Copy |
|---|--------|------|
| Originals | Always kept | Always kept |
| New entity position | Reflected across an axis | Offset by a displacement vector |
| Best for | Symmetric designs, bilateral features | Repeating geometry in any direction |
