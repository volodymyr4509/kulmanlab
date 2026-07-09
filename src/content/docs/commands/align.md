---
sidebar_position: 7
title: Align Command — Translate, Rotate, and Scale Entities Using Point Pairs in KulmanLab CAD
description: The Align command repositions selected entities using one or two pairs of source/destination points, combining translate, rotate, and an optional uniform scale into a single operation. Works like a combined Move + Rotate + Scale.
keywords: [CAD align command, align entities CAD, translate rotate scale, point pair alignment, AutoCAD ALIGN equivalent, kulmanlab]
---

# Align

The `align` command repositions selected entities using one or two pairs of source/destination points. With one pair it behaves exactly like [Move](../move/) (translate only). With two pairs it also rotates the selection so the source-to-source direction matches the destination-to-destination direction, and can optionally scale it so the source segment length matches the destination segment length — translate, rotate, and scale in a single operation.

## Two ways to start

**Pre-select, then align** — select entities first, then activate:

1. Select one or more entities on the canvas.
2. Type `align` in the terminal or click the **Align** toolbar button.
3. **Click the first source point (S1)**, then **click the first destination point (D1)**.
4. **Click the second source point (S2)**, or press **Enter** to apply a translate-only alignment now.
5. **Click the second destination point (D2)**.
6. Answer the scale prompt: press **Y** to scale, or **N** / **Enter** to keep the original size.

**Activate, then select** — start the command with nothing selected:

1. Type `align` or click the toolbar button.
2. **Select objects** — click to toggle individual entities, or drag to select by area.
3. Press **Enter** or **Space** to confirm the selection.
4. Continue with S1 → D1 → S2 → D2 → scale prompt as above.

> The terminal only needs enough letters to be unambiguous — typing `al` and pressing **Enter** activates Align directly, since no other command name starts with those two letters.

## Anatomy of an alignment

```
  Source points (on the entities):     Destination points:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Result: the selection is translated so S1 lands on D1, then
  rotated around D1 so the S1→S2 direction matches the D1→D2
  direction — and, if you choose to scale, resized so |S1S2|
  becomes |D1D2|.
```

A live ghost preview follows the cursor at every step: a move preview while placing D1, then a rotated (dashed) preview once D2 is being positioned.

## One-point alignment (translate only)

After D1 is placed, press **Enter** instead of clicking a second source point. The selection is translated by the S1→D1 vector — no rotation or scaling — identical to a [Move](../move/) using S1 as the base point and D1 as the destination.

## Two-point alignment (translate + rotate + optional scale)

Once S2 and D2 are both placed:

- **Rotation angle** — the difference between the destination direction (`D1 → D2`) and the source direction (`S1 → S2`).
- **Scale prompt** — `scale objects to alignment points? [Yes/No] <N>` appears, with **No** as the default:
  - Press **Y** to also scale the selection uniformly around D1 so the `S1–S2` distance becomes the `D1–D2` distance.
  - Press **N** or **Enter** to keep the original size — only translate and rotate are applied.

Pressing a key at the scale prompt applies the alignment immediately — there's no separate confirmation step after choosing Yes or No.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Confirm selection and advance to the S1 phase |
| `Enter` (at the S2 step) | Skip rotation — apply a translate-only alignment using S1 and D1 |
| `Y` | Apply the alignment with scaling |
| `N` / `Enter` (at the scale prompt) | Apply the alignment without scaling |
| `Escape` | While picking points: discard them and return to the selection phase; with nothing selected: cancel the command |

## Selection during the command

When the command starts in selection phase:

| Method | Behaviour |
|--------|-----------|
| **Click** | Toggles the entity under the cursor in/out of the selection |
| **Drag right** (strict) | Adds entities fully inside the box |
| **Drag left** (crossing) | Adds entities that intersect the box boundary |
| **Enter** / **Space** | Confirms the selection and moves to the S1 phase |

## After aligning

The aligned entities remain selected at their new position, and the command ends automatically — run **Align** again, or switch to [Move](../move/), [Rotate](../rotate/), or [Scale](../scale/) without re-selecting.

## Align vs Move

| | Align | Move |
|---|-------|------|
| Point pairs | 1 (translate only) or 2 (translate + rotate + scale) | 1 (translate only) |
| Rotation | Yes, with a second point pair | No |
| Scaling | Optional, with a second point pair | No |
| Best for | Fitting one shape onto another using reference points | Simple repositioning |

## Supported entities

Align works on every entity type supported by Move, Rotate, and Scale — the same `translate`, `rotate`, and `scale` operations those commands use are applied in sequence, so nothing is excluded.
