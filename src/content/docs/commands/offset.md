---
sidebar_position: 11
title: Offset Command — Create Parallel Copies at a Fixed Distance in KulmanLab CAD
description: The Offset command creates a parallel copy of a Line, Circle, Arc, Ellipse, or Polyline at a typed distance. Distance is entered once and reused for multiple offsets. A side-click determines which direction the copy appears. Five entity types supported.
keywords: [CAD offset command, parallel copy CAD, offset line CAD, offset circle CAD, offset polyline CAD, concentric offset, kulmanlab]
---

# Offset

The `offset` command creates a parallel copy of an entity at a fixed perpendicular distance. You type the distance once, then click entities and pick a side — the command stays ready at the same distance so you can offset multiple objects in one session.

Supported entity types: **Line, Circle, Arc, Ellipse, Polyline** (including Rectangles).

## Using offset

1. Type `offset` in the terminal or click the **Offset** toolbar button.
2. **Type the offset distance** and press **Enter** or **Space**.
3. **Click an entity** to offset — if the entity is not a supported type, an error message appears and you can click a different entity.
4. **Move the cursor** to the side where the copy should appear — a live preview follows.
5. **Click** to place the offset copy.

After each placement the command returns to step 3 at the **same distance**, ready for the next offset. Press **Escape** to reset back to the distance-entry step.

```
  Distance: 10

  ─────────────────    ← original line
  ─────────────────    ← offset copy (10 units below)
```

## Per-entity offset behaviour

| Entity | How the offset is computed |
|--------|---------------------------|
| **Line** | Parallel line shifted perpendicular to the original direction |
| **Circle** | Concentric circle; click outside → larger radius, inside → smaller radius |
| **Arc** | Concentric arc at a new radius; same angular span preserved |
| **Ellipse** | Both semi-axes increased or decreased by the same distance |
| **Polyline** | Each segment offset independently; adjacent offset segments are mitered at corners |

For **Circle**, **Arc**, and **Ellipse**: if the inward offset would reduce any radius or semi-axis to zero or below, the offset is not applied.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the distance value |
| `Backspace` | Delete last typed character |
| `Enter` / `Space` | Confirm the typed distance and advance to entity selection |
| `Escape` | Reset to distance-entry step |

## Workflow note

The distance stays set until you press **Escape**. This makes it efficient to offset many entities at the same spacing — type the distance once, then click and pick side for each entity in turn.

## Offset vs Copy

| | Offset | Copy |
|---|--------|------|
| Displacement | Perpendicular to the entity's geometry | Arbitrary vector (base → destination) |
| Supported entities | Line, Circle, Arc, Ellipse, Polyline | All entity types |
| Distance input | Typed before selecting the entity | Typed or clicked after selecting |
| Best for | Parallel lines, concentric circles, inset/outset paths | Placing duplicates at arbitrary positions |
