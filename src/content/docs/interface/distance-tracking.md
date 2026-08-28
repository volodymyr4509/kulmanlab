---
title: Distance Tracking — Type an Exact Length From a Pinned Point
description: The Dist toggle lets the most recent vector pin act as the anchor that angle tracking measures from, so you can type an exact length and place a point at a precise distance and angle from an existing point — including the first point of a shape.
keywords: [distance tracking CAD, type exact distance CAD, dist toggle, distance tracking from pins, polar tracking CAD, exact length input, direct distance entry, kulmanlab]
group: interface
order: 3
---

# Distance Tracking

**Distance Tracking** lets you place a point by typing an exact length instead of clicking. It is controlled by the **Dist** toggle in the control bar, next to [Pins](../vector-pins/) and ANGL, and it is **on by default** with the setting persisting across sessions.

What it adds is narrow but useful: it lets the **most recent vector pin** act as the anchor that angle tracking measures from. Without it, a command can only measure from a point it has already collected itself — which means the *first* point of a shape has nothing to measure from at all.

## The three toggles work together

Distance Tracking is not self-contained. Two other toggles have to be in the right state before you can type a length:

| Toggle | Role |
|--------|------|
| **Pins** | Supplies the reference point. Hover a snap point for 500 ms to pin it — see [Vector Pins](../vector-pins/). |
| **ANGL** | Supplies the angle. Distance tracking only becomes available once the cursor is angle-locked, so ANGL must be set to a step (10°, 20°, 30°, 45°, 90°) rather than Off. |
| **Dist** | Allows the pin to be used as the anchor rather than only the command's own point. |

If you have Pins and Dist on but ANGL set to **Off**, nothing will happen: there is no locked direction to measure a length along.

## How Pins and Dist are coupled

Distance tracking is meaningless with pins switched off, so the two toggles are kept in step:

- Turning **Pins on** turns **Dist on** as well.
- Turning **Pins off** turns **Dist off** as well.
- Turning **Dist on** turns **Pins on** if it wasn't already.
- Turning **Dist off** leaves **Pins on**.

So Dist can never be active while Pins is inactive, but you can keep pin tracking for alignment while switching off distance tracking — useful if you want reference lines without the cursor locking to a pin when you meant to lock to your own last point.

## Placing a point at an exact distance

1. Turn on **Pins**, **Dist**, and set **ANGL** to an angle step.
2. Start a command that asks for a point — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/), and so on.
3. **Pin a reference point**: hover an existing snap point until the marker turns into a filled square.
4. Move the cursor away from the pin at roughly the angle you want. When it comes close to one of the ANGL steps, the direction **locks** — a tracking indicator appears from the pin.
5. **Type the length** and press **Enter** or **Space**. The point is placed exactly that far from the pin, along the locked angle.

The terminal prompt tells you when you can type. While locked it reads:

```
pick start point or enter length: [ ]
```

and the value you type appears in the brackets.

## Why the first point matters

This is the case that would be impossible otherwise. Consider starting a line exactly 250 units to the right of an existing corner:

1. Start [Line](../../commands/line/).
2. Pin the existing corner.
3. Move right until the direction locks at 0°.
4. Type `250`, press **Enter**.

The line now starts at a point 250 units from the corner, with no construction geometry and no arithmetic. Without Dist, the Line command has collected no points yet, so there is nothing for a typed length to be measured *from* — you could only click approximately, or draw a construction line and delete it afterwards.

For the **second and later** points the command already has its own anchor (the previous point), and that is used first. The pin is consulted as an alternative only when your own anchor is not locked, so pinning something does not hijack a lock you already have.

## Typing freezes the lock

Once you start typing digits, the anchor stops changing. Whichever point was locked when the first digit landed stays the anchor until you commit or clear the field — moving the mouse mid-entry will not silently swap the measurement to a different pin or to the command's own point.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append to the length |
| `-` | Negative length — reverses direction along the locked angle (first character only) |
| `Backspace` | Delete the last character |
| `Enter` / `Space` | Place the point at the typed length |
| `Escape` | Cancel the command; the lock and typed value are cleared |

Typing a length is optional. With the direction locked you can still click, and the point is projected onto the locked angle.

## Where it works

Distance tracking is available in every command that asks you to pick points:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) and [ViewportCopy](../../commands/viewport-copy/).

## See also

- [Vector Pins](../vector-pins/) — pinning points and tracking along their reference lines
- [Grid & Snap](../grid-snap/) — the other precision aids in the control bar
- [Distance](../../commands/distance/) — measuring an existing distance rather than typing a new one
