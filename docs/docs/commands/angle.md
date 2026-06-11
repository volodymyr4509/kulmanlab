---
sidebar_position: 1
title: Angle Command — Measure the Interior Angle at a Vertex Using Three Points in KulmanLab CAD
description: The Angle command measures the interior angle (0°–180°) at a vertex defined by three clicked points. Click first-end, vertex, second-end. Result shown in the terminal to 4 decimal places.
keywords: [CAD angle measurement, three point angle, interior angle CAD, measure angle command, vertex angle, kulmanlab]
---

# Angle

The `angle` command measures the interior angle at a vertex formed by two line segments through three clicked points. The result — always between 0° and 180° — is displayed in the terminal to 4 decimal places. It is one of two measurement commands — [Distance](./distance) measures straight-line length instead.

## Anatomy of an angle measurement

```
  ● first point (end of first ray)
   \
    \  first ray preview
     \
      ● vertex (step 3)
     /
    /  second ray preview (to cursor)
   /
  ● third point  →  terminal: "Angle: 45.0000°"
```

- **First point** — one end of the angle (step 2).
- **Vertex** — the corner at which the angle is measured (step 3).
- **Third point** — the other end of the angle (step 4).

## Measuring an angle

1. Type `angle` in the terminal or click the **Angle** toolbar button.
2. **Click the first point** — one arm end of the angle. Or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click the vertex** — the corner where the two arms meet. Coordinate entry works here too.
4. **Click the third point** — the second arm end. Coordinate entry works here too. Placing this point prints the result.
5. **Click again** (optional) to start a new measurement from that click as the new first point.

## Interior angle convention

The command computes the angle using the dot product of the two rays from the vertex:

- **Always interior**: the result is the smaller angle, between 0° and 180°.
- The order you click the end points does not affect the result — only the vertex position matters.
- Collinear points (all three on one line) return 0° or 180°.

## Chaining measurements

After the result appears, clicking immediately starts the next measurement — the clicked point becomes the new first point. The command never auto-exits until you press `Escape`.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| What it measures | Interior angle at a vertex | Straight-line length |
| Number of clicks | 3 | 2 |
| Result format | `45.0000°` | `12.3456` (units) |
| Canvas preview | Two lines from vertex to both ends | Line from first point to cursor |
| Best for | Opening angle between two features | Length of a gap or segment |

## Coordinate entry

Instead of clicking, type an exact position for any of the three points:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to confirm.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate |
| `Escape` | Cancel and reset to step 2 |

## Notes

- Results are shown in the **terminal only** — nothing is added to the drawing.
- Precision is always 4 decimal places in degrees.
