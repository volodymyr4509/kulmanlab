---
title: Vector Pins — Snap Along Reference Lines Through Pinned Points in KulmanLab CAD
description: Vector Pins let you pin a snap point by hovering it for half a second, then track the cursor along dashed horizontal and vertical reference lines through the pinned point — align new geometry with existing points without construction lines.
keywords: [vector pins, object snap tracking, reference lines, alignment tracking, snap tracking CAD, construction lines, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** are a drawing aid that lets you align new geometry with existing points without drawing construction lines. Hover a snap point for half a second to *pin* it — the pin then projects invisible horizontal and vertical reference lines, and the cursor snaps onto them whenever it comes close. It is KulmanLab CAD's equivalent of object snap tracking in desktop CAD applications.

The feature is controlled by the **Pins** toggle in the control bar (next to Grid, Snap, and ANGL). It is **on by default**, and the setting persists across sessions.

## Pinning a point

1. Start a command that asks for a point — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/), and so on.
2. Move the cursor over a snap point of existing geometry — an endpoint, midpoint, or center marker.
3. **Hold the cursor still for 500 ms.** The marker turns into a filled accent **square** — the point is now pinned.
4. Repeat to pin as many points as you need. Each pin keeps projecting its reference lines.

Pinning also works outside a command: hovering a **grip** of a selected entity pins it the same way.

## Tracking along reference lines

Every pinned point projects two invisible reference lines — one **horizontal** and one **vertical** — through its exact coordinates. As you move the cursor:

- Within **12 px** of a pin's vertical line, the cursor snaps onto it: a dashed accent line is drawn through the pin across the whole view, and an **X marker** shows the snapped position. Your X coordinate is now *exactly* the pin's X.
- The same applies to the horizontal line for the pin's Y coordinate.
- Near one line of each orientation — even from **two different pins** — the cursor snaps to their **intersection**, and both dashed lines are shown. This places a point exactly at (X of pin A, Y of pin B).

```
                    ┆ (dashed, vertical line of pin ■)
                    ┆
   ■ pin A ┄┄┄┄┄┄┄┄ ✕ ← cursor snapped to the intersection:
                    ┆    X from pin B, Y from pin A
                    ┆
                    ■ pin B
```

Snapped coordinates are taken directly from the pin, so alignment is exact — no rounding or floating-point drift.

## Snap priority

Regular geometry snaps — endpoint, midpoint, center, and intersection — **take precedence** over pin reference lines. If the cursor is closer to a point snap than to a reference line, the point snap wins. Pin tracking fills the gaps between geometry, it never blocks snapping to the geometry itself.

## Combining with angle lock

Vector pins work together with angle tracking (the **ANGL** toggle in the control bar). When a command has locked the cursor to an angle-tracking ray:

- The cursor stays constrained to the locked direction.
- Pin snapping switches to targeting the **intersections of the locked ray with the pin reference lines** (only ahead of the ray origin).

This answers questions like *"where does the 45° direction from my last point cross the height of that circle's center?"* — lock the angle, and the cursor clicks into the crossing point. Ray snapping works in every command with angle locking: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader, and ViewportCopy.

## Pin lifecycle

Pins are meant for the operation at hand, not as permanent markers. All pins are cleared when:

| Event | Why |
|-------|-----|
| A **new command** fires | Each operation starts with a clean set of references |
| **Escape** is pressed | Standard cancel-everything behaviour |
| The **Pins** toggle is switched off | Turning the feature off removes its state |
| Switching between **model and paper space** | Pin coordinates are specific to one space |

Within a single command you can pin, draw, pin again, and keep going — pins survive every click of a multi-point command such as Polyline.

## Typical workflow

Draw a line that starts directly below a circle's center:

1. Type `line` (or click the Line button).
2. Hover the circle's **center marker** for half a second — it becomes an accent square.
3. Move the cursor down: near the circle's vertical, the cursor locks onto the dashed reference line.
4. Click — the line starts exactly at the circle's X coordinate.
5. Continue the line as usual; the pin stays available for the next points.

## Notes

- The 500 ms hover works on any snap marker the cursor can reach — including snap points that appear mid-command.
- Hovering a point that is already pinned does nothing; there is no unpin-by-hover. Clear pins with **Escape** or by toggling **Pins** off.
- The snap distance for reference lines is the same 12 screen pixels used by regular point snapping, so the feel is consistent at any zoom level.
- Pinned points render as accent squares in place of their regular snap markers.
