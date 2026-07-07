---
sidebar_position: 2
title: Distance Command — Measure Straight-Line Distance Between Two Points in KulmanLab CAD
description: The Distance command measures the Euclidean distance between two clicked points and displays the result to 4 decimal places. Click again after the result to chain a new measurement from the last point.
keywords: [CAD measure distance, distance command, point-to-point measurement, straight line distance, kulmanlab CAD measurement]
---

# Distance

The `distance` command measures the straight-line (Euclidean) distance between two clicked points and prints the result in the terminal to 4 decimal places. It is one of three measurement commands — [Angle](../angle/) measures the angular opening at a vertex, and [Area](../area/) measures the enclosed area and perimeter of a polygon.

## Anatomy of a distance measurement

```
  ● first point
   \
    \  preview line (live)
     \
      ● second point    →  terminal: "Distance: 12.3456"
```

- **First point** — origin of the measurement.
- **Second point** — endpoint; placing it prints the result immediately.
- **Result** — displayed in the terminal, not placed on the canvas.

## Measuring a distance

1. Type `distance` in the terminal or click the **Distance** toolbar button.
2. **Click the first point**, or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click the second point** — the measured distance appears in the terminal. Coordinate entry works here too.
4. **Click again** (optional) to start a new measurement. The command stays active.

Press `Escape` at any time to reset to step 2.

## Chaining measurements

After the result is shown, clicking immediately starts the next measurement — the clicked point becomes the new first point. This lets you measure a sequence of distances without reactivating the command.

## Distance vs Angle

| | Distance | Angle |
|---|---------|-------|
| What it measures | Straight-line length | Interior angle at a vertex |
| Number of clicks | 2 | 3 |
| Result format | `12.3456` (units) | `45.0000°` |
| Canvas preview | Line from first point to cursor | Two lines from vertex to cursor |
| Best for | Length of a gap or segment | Opening angle between two features |

## Coordinate entry

Instead of clicking, type an exact position for either point:

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
- The result is expressed in the same units as the drawing coordinates (no unit conversion).
- Precision is always 4 decimal places.
