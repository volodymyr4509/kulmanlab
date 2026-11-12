---
title: "Coordinate Entry — Type Exact, Relative and Polar Points"
description: "Wherever a command asks for a point, type it instead of clicking: X,Y for an exact position, @X,Y to measure from the last point, and distance<angle for a polar point. The Rel toggle starts every typed point as relative."
keywords: ["coordinate entry CAD", "relative coordinates CAD", "polar coordinates CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Coordinate Entry

Wherever a command asks for a point — the start of a [Line](../../commands/line/), a corner of a [Rectangle](../../commands/rectangle/), the base point of a [Move](../../commands/move/), or a grip you are dragging — you can type it instead of clicking. Start typing a number and the terminal shows what you type; press **Enter** or **Space** to place the point.

## Four ways to write a point

| You type | The point is |
|---|---|
| `100,50` | At X 100, Y 50 |
| `@100,50` | 100 along X and 50 along Y from the last point |
| `100<45` | 100 from the origin, at 45° |
| `@100<45` | 100 from the last point, at 45° |

Angles are in degrees, counterclockwise from the X axis, so `@50<90` is 50 straight up and `@50<180` is 50 to the left. Either value can be negative.

## The last point

`@` measures from the last point picked or typed, in any command — the previous command's last click counts, and so does a grip you just dragged. With no last point yet, `@100,50` reads as `100,50`. The last point is forgotten when you switch between model space and a layout, and when a drawing is opened.

## Rel: relative by default

The **Rel** toggle in the control bar starts every typed point as relative: as soon as you type the first digit, an `@` goes in front of it, so `100,50` becomes `@100,50`. Press **Backspace** over the `@` to make that one point absolute. With no last point yet, no `@` is added. Rel is off by default and is remembered with the other control bar toggles.

## Keys while typing

| Key | Effect |
|---|---|
| `0`–`9`, `.`, `-` | Type the number; `-` only at its start |
| `@` | Make the point relative, at the start of X |
| `,` or **Space** | End X and go on to Y |
| `<` | End X as a distance and go on to its angle |
| **Enter** or **Space** | Place the point, once Y has a value |
| **←** **→** **Home** **End** | Move the caret within the value being typed |
| **Backspace** | Delete before the caret; at the start of an empty Y, go back to X |

A point that doesn't read as numbers stays in the terminal for you to correct. Each typed point leaves a line in the terminal history as you typed it — `Typed @100<45` — ahead of the command's own line with where it landed.

## Typed points and angle tracking

When the cursor is locked to an angle tracking ray, typing a number gives a distance along that ray rather than an X. Typing `@` first starts a full point instead, so `@100,50` still works on a locked ray.

---

*Related: [Distance Tracking](../distance-tracking/) to type a length along a locked direction, and [Vector Pins](../vector-pins/) to measure from a pinned point.*
