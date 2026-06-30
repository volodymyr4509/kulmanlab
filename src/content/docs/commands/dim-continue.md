---
sidebar_position: 15
title: Dimension Continue Command — Chain Dimensions from an Existing Baseline in KulmanLab CAD
description: The Dimension Continue command extends a chain of dimensions from the second extension line of the last placed dimension. It inherits the base dimension's angle, offset, arrow size, and text height automatically. Works with both linear and aligned bases.
keywords: [CAD dimension continue, dimcontinue, chain dimensions CAD, baseline dimension, continue dimension series, kulmanlab]
---

# Dimension Continue

The `dimcontinue` command chains new dimensions from the **second extension line** of an existing dimension. Each new segment is placed along the same measurement axis and at the same dimension-line offset as the base. All style properties — arrow size, text height, extension line lengths — are copied from the base automatically.

## How chained dimensions look

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (base    p3           p4
           ext2 → new start)
```

Each rectangle is a separate `DIMENSION` entity. They share the same dimension-line position and measurement direction.

## Starting a chain

1. Type `dimcontinue` in the terminal or click the **Dimension Continue** toolbar button.
2. **If a dimension was just placed** — the command picks it up automatically as the base (no click needed).
3. **If no recent dimension exists** — click any existing dimension to use it as the base.
4. **Click the next extension line origin** — a preview shows the new dimension as you move the cursor. Or type `X,Y` and press **Enter** for an exact coordinate.
5. Keep clicking (or typing) to extend the chain. Each placed dimension becomes the new base automatically.
6. Press **Enter**, **Space**, or **Escape** to finish the chain.

## What is inherited from the base dimension

| Property | Inherited from base |
|----------|---------------------|
| Measurement direction / angle | Yes — locked for the entire chain |
| Dimension line offset (distance from measured points) | Yes |
| Arrow size | Yes |
| Text height | Yes |
| Extension line offset and extension | Yes |
| Text alignment | Yes |
| Style name | Yes |
| Color, Layer | Not inherited — uses current layer |

## Measurement direction locking

The chain's measurement direction is **fixed to the base dimension's angle**:

- Linear base (H) → all continuations measure horizontal distance (Δ X).
- Linear base (V) → all continuations measure vertical distance (Δ Y).
- Aligned base at any angle → all continuations measure along that same angle.

You cannot change the direction mid-chain. Start a new [Dimension Linear](./dim-linear) or [Dimension Aligned](./dim-aligned) to dimension in a different direction.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate, or finish the chain if no input is in progress |
| `Space` / `Escape` | Finish the chain |

## Dimension Continue vs starting fresh

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Starting point | Fixed at last base's ext2 | Click anywhere |
| Angle | Locked to base | Free |
| Offset | Inherited from base | Set by cursor or typed |
| Style | Inherited from base | Current style |
| Best for | Cumulative measurements along a row | First dimension or changing direction |

## Editing labels after placement — simple mode

**Double-click** any dimension in the chain to open the text editor in **simple** mode. Each segment is independent and can be edited individually.

| Feature | Behaviour |
|---------|-----------|
| Bold / Italic / Font / Height | Apply to the **entire** label at once |
| Per-character formatting | Not supported |
| `Enter` | Commits the value and closes the editor |
| Multi-line | Not supported |

See [Text Editor — simple mode](../interface/text-editor#simple-mode) for the full reference.

## DXF — DIMENSION entities

Each segment in the chain is stored as an independent `DIMENSION` entity in the DXF file. They are not linked in the file — they share properties because they were created from the same base, but each can be edited individually after placement.
