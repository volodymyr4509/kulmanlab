---
title: Array Grid Command — Repeat Entities in Rows and Columns
description: The Array Grid command creates a rectangular grid of copies from selected entities — type the number of rows, columns, and the spacing between them directly in the terminal, no point-picking required.
keywords: [CAD array command, arraygrid, rectangular array CAD, grid pattern CAD, repeat entities CAD, copy array CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

The `ArrayGrid` command creates a rectangular grid of copies from the selected entities — enter the number of rows, the number of columns, and the spacing between them, all typed at the terminal. The original selection occupies the row-0, column-0 cell; every other cell is a translated copy.

## Two ways to start

**Pre-select, then array** — select entities first, then activate:

1. Select one or more entities on the canvas.
2. Type `arraygrid` in the terminal (as few as `arr` is enough — it's unambiguous) or click the **Array Grid** toolbar button.
3. Type the number of **rows** and press **Enter**.
4. Type the number of **columns** and press **Enter**.
5. Type the **spacing between rows** and press **Enter**.
6. Type the **spacing between columns** and press **Enter** — the grid is created immediately.

**Activate, then select** — start the command with nothing selected:

1. Type `arraygrid` or click the toolbar button.
2. **Select objects** — click to toggle individual entities, or drag to select by area.
3. Press **Enter** or **Space** to confirm the selection.
4. Continue with rows → columns → row spacing → column spacing as above.

```
  2 rows x 3 columns:

  [B] [B] [B]   <- row 1 (translated copies)
  [A] [A] [A]   <- row 0: original selection, copies to the right
```

> The terminal only needs enough letters to be unambiguous — typing `arr` and pressing **Enter** activates Array Grid directly, since no other command name starts with those three letters (Arc, Area, Align, and Angle all diverge earlier).

## Rows, columns, and spacing

| Prompt | Accepts | Notes |
|--------|---------|-------|
| Rows | Positive whole numbers (1, 2, 3…) | Digits only — no decimal point or sign |
| Columns | Positive whole numbers (1, 2, 3…) | Digits only — no decimal point or sign |
| Row spacing | Signed decimal (e.g. `10`, `-5.5`) | Distance between rows; negative reverses direction |
| Column spacing | Signed decimal (e.g. `10`, `-5.5`) | Distance between columns; negative reverses direction |

With 1 row and 1 column, no copies are created — the command exits without changing the drawing.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Confirm selection and advance to the rows prompt |
| `0`–`9` | Enter digits for rows or columns |
| `0`–`9`, `.`, `-` | Enter digits for row/column spacing (`-` only as the first character) |
| `Backspace` | Delete the last typed character of the current prompt |
| `Enter` | Confirm the current prompt and advance to the next |
| `Escape` | Clear the typed rows/columns/spacing values and return to the selection phase |

## Selection during the command

| Method | Behaviour |
|--------|-----------|
| **Click** | Toggles the entity under the cursor in/out of the selection |
| **Drag right** (strict) | Adds entities fully inside the box |
| **Drag left** (crossing) | Adds entities that intersect the box boundary |
| **Enter** / **Space** | Confirms the selection and moves to the rows prompt |

## After the array

The new copies are added to the drawing and the command exits — the original selection is cleared. Run **Array Grid** again, or start a new command.

## Array Grid vs Copy

| | Array Grid | Copy |
|---|-----------|------|
| Point-picking | None — rows, columns, and spacing are typed | Base point and destination are clicked (or typed) |
| Copies created | Rows × columns − 1 | Exactly 1 per copy operation |
| Layout | Regular rectangular grid | Anywhere, at any offset |
| Best for | Repeating a unit across a regular pattern (holes, tiles, fasteners) | A single duplicate at an arbitrary position |

## Supported entities

Array Grid works on every entity type. All entities implement `translate(dx, dy)` internally, the same operation [Copy](../copy/) and [Move](../move/) use, so none are excluded.
