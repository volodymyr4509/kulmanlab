---
sidebar_position: 2
title: Rotate Command — Rotate Entities Around a Base Point in KulmanLab CAD
description: The Rotate command rotates selected entities around a chosen base point. Angle can be typed precisely or set by clicking — the cursor direction from base point to click determines the angle. Positive angles are counter-clockwise in DXF coordinates.
keywords: [CAD rotate command, rotate entities CAD, rotate objects angle, counter-clockwise rotation CAD, typed angle rotate, kulmanlab]
---

# Rotate

The `rotate` command rotates selected entities around a base point. You specify the rotation angle either by typing a number in degrees or by clicking — the angle is computed from the direction between the base point and the click position.

## Two ways to start

**Pre-select, then rotate** — select entities first, then activate:

1. Select one or more entities on the canvas.
2. Type `rotate` in the terminal or click the **Rotate** toolbar button.
3. **Click the base point** — the center of rotation. Or type `X,Y` and press **Enter** for an exact coordinate.
4. **Type an angle and press Enter**, or **click** to set the angle from the cursor direction.

**Activate, then select** — start the command with nothing selected:

1. Type `rotate` or click the toolbar button.
2. **Select objects** — click to toggle, or drag to select by area.
3. Press **Enter** or **Space** to confirm the selection.
4. **Click the base point** (coordinate entry available), then set the angle.

```
  Before:            After (90° rotation around ●):
                        ╔══╗
  ●  [entity]    →   ● ║    ║
                        ╚══╝
```

A live ghost preview of the rotated entities follows the cursor angle after the base point is set.

## Setting the angle

**Typed angle** — type a number (in degrees) at any time after the base point is placed. The preview snaps to the typed angle while you continue to adjust before pressing Enter.

**Click angle** — if no typed value is present, clicking sets the angle equal to `atan2(cursorY − baseY, cursorX − baseX)` — the direction from base point to click, in degrees.

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the angle value |
| `-` | Negative angle (first character only) |
| `Backspace` | Delete the last typed character |
| `Enter` | Apply rotation at the typed angle |

## Angle direction

Angles follow the **DXF convention**:

- **Positive** values rotate **counter-clockwise** in drawing coordinates (Y-up).
- On screen, where the Y-axis is inverted (Y-down), positive angles appear **clockwise**.

Common values: `90` = quarter turn, `180` = half turn, `-90` = opposite quarter turn.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Confirm selection |
| `0`–`9`, `.`, `-` | Start X coordinate entry (base-point phase), or angle value (angle phase) |
| `,` | Lock X and move to Y entry (base-point phase) |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm coordinate or apply rotation |
| `Escape` | Cancel and reset |

## Selection during the command

| Method | Behaviour |
|--------|-----------|
| **Click** | Toggles the entity under the cursor |
| **Drag right** (strict) | Adds entities fully inside the box |
| **Drag left** (crossing) | Adds entities that intersect the box |
| **Enter** / **Space** | Confirms the selection |

## Supported entities

Rotate works on every entity type. Each entity's geometry is rotated around the base point — for example, a Circle moves its center while the radius stays the same; an Arc moves its center and shifts its start and end angles by the rotation amount; a Text entity moves its anchor point and adds the angle to its Rotation Degree property.
