---
title: Fillet Command — Round a Corner Between Two Lines in KulmanLab CAD
description: The Fillet command connects two Line entities with a tangent arc of a specified radius, trimming each line back to the tangent point. A dashed arc preview helps you pick the correct corner before clicking.
keywords: [CAD fillet command, round corner CAD, fillet arc, tangent arc two lines, kulmanlab]
group: edit
order: 11
---

# Fillet

The `fillet` command rounds the corner between two [Line](../line/) entities by inserting a tangent arc of a given radius and trimming each line back to the point where the arc begins. The result is a smooth, radiused corner connecting both lines.

Fillet works on **Line entities only**.

## Using fillet

1. Type `fillet` in the terminal or click the **Fillet** toolbar button.
2. **Type the fillet radius** and press **Enter**.
3. **Click the first line** — the portion you click determines which side of any intersection is kept.
4. **Hover over the second line** — a dashed arc preview shows the resulting fillet. Move the cursor to the side you want to keep.
5. **Click** to apply. Both lines are trimmed and the arc is inserted.

```
  Before:                     After fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Side selection for intersecting lines

When two lines cross each other, the fillet is applied on the corner defined by the click positions — the portion of each line on the **same side as the cursor** is kept.

- Click near one end of the first line to select that half.
- Move the cursor to the desired half of the second line — the dashed preview updates live.

## What the command creates

- The first line's endpoint nearest to the intersection is moved to the tangent point **T1**.
- The second line's endpoint nearest to the intersection is moved to the tangent point **T2**.
- A new Arc entity is inserted from **T1** to **T2**, tangent to both lines.

The inserted arc inherits the current lineweight, color, layer, and linetype settings.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.` | Append digit to the radius value |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm the typed radius and move to line selection |
| `Escape` | Cancel and reset |

## Supported entities

| Entity | Supported |
|--------|-----------|
| Line | Yes — as both first and second entity |
| Arc, Circle, Ellipse, Polyline | No |
| Text, Spline, Dimension, Leader | No |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Corner type | Rounded arc | Straight cut |
| Input | One radius | Two distances (d1, d2) |
| Inserted entity | Arc | Line |
| Supported entities | Lines only | Lines and Polylines |
