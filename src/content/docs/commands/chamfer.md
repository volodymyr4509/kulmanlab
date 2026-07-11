---
title: Chamfer Command — Cut a Straight Corner Between Two Lines in KulmanLab CAD
description: The Chamfer command connects two Line or Polyline entities with a straight diagonal cut. You specify two distances — one along each entity — and the command trims both back to those points and inserts a connecting line.
keywords: [CAD chamfer command, chamfer line CAD, diagonal corner cut, bevel corner CAD, kulmanlab]
group: edit
order: 12
---

# Chamfer

The `chamfer` command cuts a straight diagonal corner between two [Line](../line/) or [Polyline](../polyline/) entities. You specify how far back to cut along each entity (d1 and d2), and the command trims both entities to those points and inserts a connecting line between them.

Using equal distances produces a symmetric 45° cut; different distances produce an asymmetric bevel.

Chamfer works on **Line and Polyline** entities.

## Using chamfer

1. Type `chamfer` in the terminal or click the **Chamfer** toolbar button.
2. **Type the first chamfer distance** (d1 — distance along the first entity) and press **Enter**.
3. **Type the second chamfer distance** (d2 — distance along the second entity) and press **Enter**.
4. **Click the first entity** — the portion you click determines which side of any intersection is kept.
5. **Hover over the second entity** — a dashed line preview shows the resulting chamfer cut. Move the cursor to the side you want to keep.
6. **Click** to apply. Both entities are trimmed and the chamfer line is inserted.

```
  Before (d1=5, d2=8):        After:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Side selection

When two lines cross each other, the chamfer is applied on the corner defined by the click positions — the portion of each entity on the **same side as the cursor** is kept.

- Click near one end of the first entity to select that half.
- Move the cursor to the desired half of the second entity — the dashed preview updates live.

For Polylines, the click position determines which **segment** of the polyline participates, and the nearest vertex on the intersection side is the one that gets trimmed.

## What the command creates

- The first entity's endpoint (or polyline vertex) nearest to the intersection is moved to point **T1**, located d1 along the first entity from the intersection.
- The second entity's endpoint (or polyline vertex) nearest to the intersection is moved to point **T2**, located d2 along the second entity from the intersection.
- A new Line entity is inserted from **T1** to **T2**.

The inserted line inherits the current lineweight, color, layer, and linetype settings.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the current distance value |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm the typed distance and advance |
| `Escape` | Cancel and reset |

## Supported entities

| Entity | Supported |
|--------|-----------|
| Line | Yes |
| Polyline / Rectangle | Yes |
| Arc, Circle, Ellipse | No |
| Text, Spline, Dimension, Leader | No |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Corner type | Straight cut | Rounded arc |
| Input | Two distances (d1, d2) | One radius |
| Inserted entity | Line | Arc |
| Supported entities | Lines and Polylines | Lines only |
