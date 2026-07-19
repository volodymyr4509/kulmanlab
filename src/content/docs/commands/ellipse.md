---
title: Ellipse Command — Draw Rotated Ellipses by Center and Two Axes
description: The Ellipse command draws an ellipse in three clicks — center, first axis endpoint (any direction), then second axis length. The two axes are always perpendicular. Each semi-axis has its own grip for independent resizing after placement. Full DXF round-trip as ELLIPSE entities.
keywords: [CAD ellipse command, draw ellipse CAD, rotated ellipse CAD, ellipse axes, ELLIPSE DXF entity, ellipse grip editing, axis ratio, kulmanlab]
group: shapes
order: 6
---

# Ellipse

The `ellipse` command draws an ellipse using three clicks: a center point, the endpoint of the first (major) semi-axis at any angle, and the length of the second (minor) semi-axis. The two axes are always perpendicular to each other — the second axis direction is derived automatically from the first.

## Drawing an ellipse

1. Type `ellipse` in the terminal or click the **Ellipse** toolbar button.
2. **Click the center point**, or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click the first axis endpoint** — sets both the direction and the length of the first semi-axis. Coordinate entry works here too.
4. **Set the second axis length** — move the cursor perpendicular to the first axis, then click or type a length.

```
               ● ← first axis endpoint (step 3)
              /
  center ●  /  ← first axis (any angle)
            |
            ● ← cursor here sets second axis length (step 4)
```

The ellipse is placed after step 4 and the command exits.

## Axis input — click, coordinate, or typed length

**Center (step 2):** click or type `X,Y` for an exact position.

**First axis endpoint (step 3):** click, or type `X,Y` for an exact coordinate. Angle locking also snaps to 45° increments — while locked, type a length and press **Enter** to place the endpoint at that exact distance.

**Second axis (step 4):** typed length is always available — no angle lock required. The direction is already fixed perpendicular to the first axis; typing sets only the length.

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the axis length (second axis phase) |
| `Backspace` | Delete the last typed character |
| `Enter` | Place the axis endpoint at the typed length |

## Coordinate entry (center and first axis endpoint)

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to confirm.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry (center/first-axis phases), or axis length when angle-locked |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate or length |
| `Escape` | Cancel and reset |

## Grip editing — independent axis resizing

A selected ellipse exposes five grips:

| Grip | Count | What it does |
|------|-------|--------------|
| **Center** | 1 | Moves the whole ellipse; both axes unchanged |
| **Major axis endpoints** | 2 (opposite ends of the longer axis) | Drag to resize the major semi-axis length; minor axis absolute size stays constant |
| **Minor axis endpoints** | 2 (opposite ends of the shorter axis) | Drag to resize the minor semi-axis length; major axis unchanged |

Major and minor axis grips are independent — you can reshape the ellipse without re-running the command.

## Selecting ellipses

| Method | Behaviour |
|--------|-----------|
| **Click** | Selects if the click lands near the ellipse outline |
| **Drag right** (strict) | The axis-aligned bounding box of the ellipse must fit entirely inside the selection box |
| **Drag left** (crossing) | Any part of the ellipse outline that crosses the selection box boundary selects it |

## Supported edit commands

| Command | What happens to the ellipse |
|---------|-----------------------------|
| [Move](../move/) | Translates the center; both axes unchanged |
| [Copy](../copy/) | Creates an identical ellipse at a new center |
| [Rotate](../rotate/) | Rotates the center position and the major axis vector by the same angle |
| [Mirror](../mirror/) | Reflects the center and recalculates the major axis direction across the mirror axis |
| [Scale](../scale/) | Scales the center position and multiplies both semi-axis lengths by the factor |
| [Offset](../offset/) | Creates a concentric ellipse offset outward or inward by a fixed distance |
| [Delete](../delete/) | Removes the ellipse |

## Properties

**General**

| Property | Default | Meaning |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI color index |
| Layer | `0` | Layer assignment |
| Linetype | ByLayer | Named linetype pattern |
| Linetype Scale | 1 | Scale factor on the linetype pattern |
| Thickness | 0 | Extrusion thickness |

**Geometry**

| Property | Meaning |
|----------|---------|
| Center X / Center Y | Center of the ellipse |
| Major Axis X / Major Axis Y | Vector from center to the major axis endpoint (encodes both direction and length) |
| Axis Ratio | Ratio of minor semi-axis to major semi-axis (0 < ratio ≤ 1) |
| Start Angle / End Angle | Parametric angles in degrees; both are 0°/360° for a full ellipse |

## Ellipse vs Circle — when to use which

| | Ellipse | Circle |
|---|---------|--------|
| Axes | Two independent semi-axes at any angle | One radius, symmetric |
| Rotation | Can be placed at any angle | No rotation |
| Typed input | Per-axis length | Radius only |
| Grip resize | Major and minor independently | All four cardinal points equally |
| Best for | Oblique views, oval features, perspective holes | Symmetric round features |

## DXF — ELLIPSE entity

Ellipses are saved as `ELLIPSE` entities in the DXF file. The format stores the center point, the full major axis vector (direction + length), and the axis ratio. Rotation, shape, and all style properties round-trip without loss. A circle is **not** stored as a degenerate ellipse — the two entity types remain distinct in the DXF model.
