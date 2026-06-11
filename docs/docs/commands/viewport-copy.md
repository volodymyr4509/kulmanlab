---
title: ViewportCopy Command — Duplicate a Viewport in KulmanLab CAD
description: The ViewportCopy command duplicates a selected viewport to a new position in the same layout, preserving scale and model view settings. Supports exact coordinate entry, angle locking, and typed distance input.
keywords: [viewport copy, duplicate viewport, copy viewport layout, angle lock viewport, exact coordinate viewport, kulmanlab]
---

# ViewportCopy

The `ViewportCopy` command copies a viewport to a new position, preserving its scale and model center. Only available in layout space.

## Copying a viewport

1. Switch to a paper layout tab.
2. Optionally click a viewport to pre-select it.
3. Type `ViewportCopy` in the terminal or click the **Viewport Copy** toolbar button.
4. If no viewport was pre-selected, **click the viewport** to copy.
5. **Click the base point** — the reference for the displacement. Or type `X,Y` and press **Enter** for an exact coordinate.
6. **Click the destination** — the viewport is placed at the base→destination offset. Or use coordinate entry / angle lock.

After placing, the command stays active — click another destination to place another copy of the same viewport. Press **Enter**, **Space**, or **Escape** to finish.

## Coordinate entry

At the base-point and destination steps you can type an exact coordinate instead of clicking:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to confirm.

## Angle locking and exact distance

After the base point is set, the command snaps to 45° axes (0°, 45°, 90°, 135°, …) when the cursor aligns. While locked:

- The preview snaps to the axis.
- Type a distance and press **Enter** to place the copy at exactly that offset along the locked direction.

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the distance value |
| `-` | Negative distance (reverses direction; first character only) |
| `Backspace` | Delete the last typed character |
| `Enter` | Place copy at typed distance |

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry, or distance when angle-locked |
| `,` | Lock X and move to Y entry |
| `Enter` | Confirm typed coordinate or distance |
| `Enter` / `Space` | Finish (when no input is in progress) |
| `Escape` | Cancel and reset |

## Notes

- ViewportCopy is only available when a paper layout tab is active.
- The copied viewport inherits the same scale, model center, locked state, and dimensions as the original.
- To create a new viewport from scratch, use [ViewportRectangle](./viewport-rectangle).
