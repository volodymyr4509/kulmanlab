---
sidebar_position: 3
title: Copy Command — Duplicate Entities at a New Position in KulmanLab CAD
description: The Copy command creates translated duplicates of selected entities while leaving the originals in place. Supports pre-selection, angle locking, and exact distance input. The copies are placed and the command exits; originals remain unchanged.
keywords: [CAD copy command, duplicate entities CAD, copy objects CAD, clone geometry CAD, angle lock copy, exact distance copy, kulmanlab]
---

# Copy

The `copy` command creates translated duplicates of selected entities and places them offset from a base point to a destination — the originals stay exactly where they are. This is the one key difference from [Move](../move/): Copy adds new entities to the drawing; Move relocates existing ones.

## Two ways to start

**Pre-select, then copy** — select entities first, then activate:

1. Select one or more entities on the canvas.
2. Type `copy` in the terminal or click the **Copy** toolbar button.
3. **Click the base point**, or type `X,Y` and press **Enter** for an exact coordinate.
4. **Click the destination** — duplicates appear at the base→destination offset. Coordinate entry works here too.

**Activate, then select** — start the command with nothing selected:

1. Type `copy` or click the toolbar button.
2. **Select objects** — click to toggle individual entities, or drag to select by area.
3. Press **Enter** or **Space** to confirm the selection.
4. **Click the base point**, then **click the destination** (coordinate entry available at both steps).

```
  Before:               After:
  [entity A]            [entity A]  ← originals untouched
  [entity B]            [entity B]
                        [copy of A] ← new entities
                        [copy of B]
```

A ghost preview of the copies follows the cursor from the base point to the destination.

## Coordinate entry

At the base-point or destination step, type an exact position instead of clicking:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to confirm.

## Angle locking and exact distance

After the base point is set the command snaps to 45° axes (0°, 45°, 90°, 135°, …) when the cursor is far enough and near the axis. While locked, type a distance and press **Enter** to place the copies at exactly that offset.

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append to the distance value |
| `-` | Negative distance — reverses direction along the axis (first character only) |
| `Backspace` | Delete the last typed character |
| `Enter` | Place copies at the typed distance |

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Confirm selection and advance to base-point phase |
| `0`–`9`, `.`, `-` | Start X coordinate entry, or distance when angle-locked |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm coordinate or apply copy at typed distance |
| `Escape` | Cancel and reset |

## Selection during the command

| Method | Behaviour |
|--------|-----------|
| **Click** | Toggles the entity under the cursor in/out of the selection |
| **Drag right** (strict) | Adds entities fully inside the box |
| **Drag left** (crossing) | Adds entities that intersect the box boundary |
| **Enter** / **Space** | Confirms the selection |

## After the copy

The **originals remain selected** — the new copies are added to the drawing but the selection is cleared and the command exits. To work with the copies immediately, run Copy again on the selection, or start a new command.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Originals | Stay in place | Removed from original position |
| Result count | Increases by the number of copied entities | Unchanged |
| After operation | Originals still selected | Moved entities selected at new position |
| Best for | Repeating geometry, symmetric layouts | Repositioning geometry |

## Supported entities

Copy works on every entity type. All entities implement `translate(dx, dy)` internally so none are excluded.
