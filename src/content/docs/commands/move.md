---
sidebar_position: 1
title: Move Command — Translate Selected Entities by Base Point in KulmanLab CAD
description: The Move command translates one or more selected entities by a base point and destination. Supports pre-selection, angle locking, and exact distance input. After the move the entities stay selected at their new position. Every entity type is supported.
keywords: [CAD move command, translate entities CAD, move objects CAD, angle lock move, exact distance move, grip move CAD, kulmanlab]
---

# Move

The `move` command translates selected entities from a base point to a destination point. The displacement applied to every selected entity is the vector from base to destination. After the move all entities remain selected at their new position, ready for further edits.

## Two ways to start

**Pre-select, then move** — select entities first, then activate:

1. Select one or more entities on the canvas.
2. Type `move` in the terminal or click the **Move** toolbar button.
3. **Click the base point**, or type `X,Y` and press **Enter** for an exact coordinate.
4. **Click the destination** — all selected entities shift by the base→destination vector. Coordinate entry works here too.

**Activate, then select** — start the command with nothing selected:

1. Type `move` or click the toolbar button.
2. **Select objects** — click to toggle individual entities, or drag to select by area.
3. Press **Enter** or **Space** to confirm the selection.
4. **Click the base point**, then **click the destination** (coordinate entry available at both steps).

```
  Before:                    After:
  ● base                       → ● destination
  [entity A]                      [entity A moved]
  [entity B]                      [entity B moved]
```

A ghost preview of all selected entities follows the cursor from the base point to the destination, showing the result before you click.

## Coordinate entry

At the base-point or destination step, type an exact position instead of clicking:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to confirm.

## Angle locking and exact distance

After the base point is set the command watches for a 45° snap axis (0°, 45°, 90°, 135°, …). The direction **locks** when the cursor is far enough from the base and within one grip width of the axis. While locked:

- The ghost preview snaps to the axis.
- Type a distance and press **Enter** to move exactly that far along the locked direction.
- Clicking projects onto the axis, so the destination always lies exactly on it.

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append to the distance value |
| `-` | Negative distance — reverses direction along the axis (first character only) |
| `Backspace` | Delete the last typed character |
| `Enter` | Apply the move at the typed distance |

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Confirm selection and advance to base-point phase |
| `0`–`9`, `.`, `-` | Start X coordinate entry, or distance when angle-locked |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm coordinate or apply move at typed distance |
| `Escape` | Cancel and reset |

## Activating Move from a grip

Clicking the **midpoint grip** of a selected [Line](./line) launches Move automatically, with the midpoint already set as the base point and the move phase active. This is the fastest way to reposition a single line without going through the selection step.

## Selection during the command

When the command starts in selection phase:

| Method | Behaviour |
|--------|-----------|
| **Click** | Toggles the entity under the cursor in/out of the selection |
| **Drag right** (strict) | Adds entities fully inside the box |
| **Drag left** (crossing) | Adds entities that intersect the box boundary |
| **Enter** / **Space** | Confirms the selection and moves to the base-point phase |

## After the move

The moved entities remain selected at their new position. This means you can immediately:
- Run **Move** again to nudge them further.
- Run [Copy](./copy), [Rotate](./rotate), or [Scale](./scale) without re-selecting.
- Press **Delete** to remove them.

## Move vs Copy

| | Move | Copy |
|---|------|------|
| Original position | Vacated — entities are no longer there | Kept — originals stay in place |
| Result count | Same number of entities | One additional set per operation |
| Selection after | Moved entities selected at new position | Copied entities selected at new position |
| Best for | Repositioning geometry | Duplicating geometry |

## Supported entities

Move works on every entity type: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader, and all others. All entities implement `translate(dx, dy)` so none are excluded.
