---
title: Scale Command — Resize Entities Uniformly Around a Base Point
description: The Scale command resizes selected entities uniformly by a typed factor around a fixed base point. The factor is always keyboard-entered — there is no click-to-set-scale. A factor greater than 1 enlarges; less than 1 shrinks. Every entity type is supported.
keywords: [CAD scale command, resize entities CAD, scale objects CAD, uniform scale CAD, scale factor CAD, enlarge shrink CAD, kulmanlab]
group: edit
order: 5
---

# Scale

The `scale` command resizes selected entities uniformly around a base point. All distances from the base point are multiplied by the scale factor — a factor of `2` doubles all dimensions, `0.5` halves them. The factor is always entered by typing; there is no click-to-set-scale.

## Two ways to start

**Pre-select, then scale** — select entities first, then activate:

1. Select one or more entities on the canvas.
2. Type `scale` in the terminal or click the **Scale** toolbar button.
3. **Click the base point** — the fixed point that does not move during scaling. Or type `X,Y` and press **Enter** for an exact coordinate.
4. **Type the scale factor** and press **Enter**.

**Activate, then select** — start the command with nothing selected:

1. Type `scale` or click the toolbar button.
2. **Select objects** — click to toggle, or drag to select by area.
3. Press **Enter** or **Space** to confirm the selection.
4. **Click the base point** (coordinate entry available), then type the factor.

```
  Base ●                Base ●
        [entity]   →          [larger entity]
  factor = 2 → distances from ● are doubled
```

## Typing the scale factor

After the base point is placed the terminal shows `enter scale factor:` and waits for keyboard input:

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the factor |
| `-` | Negative factor (first character only — inverts then scales) |
| `Backspace` | Delete the last typed character |
| `Enter` | Apply the scale at the typed factor |

The factor must be non-zero. Common values:

| Factor | Effect |
|--------|--------|
| `2` | Doubles all dimensions |
| `0.5` | Halves all dimensions |
| `1.5` | Increases by 50% |
| `-1` | Mirrors across the base point (equal to a 180° rotation) |

There is no live preview while typing — the scaled result appears only after pressing **Enter**.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Confirm selection |
| `0`–`9`, `.`, `-` | Start X coordinate entry (base-point phase), or scale factor (factor phase) |
| `,` | Lock X and move to Y entry (base-point phase) |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm coordinate or apply scale |
| `Escape` | Cancel and reset |

## Selection during the command

| Method | Behaviour |
|--------|-----------|
| **Click** | Toggles the entity under the cursor |
| **Drag right** (strict) | Adds entities fully inside the box |
| **Drag left** (crossing) | Adds entities that intersect the box |
| **Enter** / **Space** | Confirms the selection |

## What gets scaled

All entity types are supported. Each entity scales its geometry relative to the base point:

| Entity | What changes |
|--------|-------------|
| Line | Both endpoints scaled away from the base point |
| Circle | Center scaled from the base point; radius multiplied by the factor |
| Arc | Center scaled; radius multiplied by the factor; angles unchanged |
| Ellipse | Center scaled; both semi-axis lengths multiplied by the factor |
| Polyline / Rectangle | Every vertex scaled from the base point |
| Text | Anchor point scaled; height multiplied by the factor |
| Spline | All control vertices / fit points scaled |
