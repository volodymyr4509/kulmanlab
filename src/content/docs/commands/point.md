---
title: "Point Command — Place Points on the Drawing in KulmanLab CAD"
description: "The Point command places a point at every click, typed X,Y or distance along a locked direction, until Enter, Space or Escape. Points are drawn as a dot, carry the current layer and color, and round-trip as DXF POINT entities."
keywords: ["CAD point command", "place point CAD", "DXF POINT entity", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

The `point` command places a point at every pick and stays active until you press Enter, Space or Escape. A point is a position with no size: it is drawn as a small dot and carries the current layer and color. It is stored as a `POINT` entity.

## Placing points

1. Type `point` in the terminal or click **Point**, the last button in the Shapes panel.
2. **Click** where the point goes, or type `X,Y` and press **Enter** for an exact position. Each pick places a point and the terminal logs its coordinates; the command stays active for the next.
3. Or lock a direction from a [vector pin](../../interface/vector-pins/) and type a distance — the point lands exactly that far along it.
4. Press **Enter**, **Space** or **Escape** to finish. Enter and Space finish only when nothing is being typed.

## How a point looks

A point is drawn as a dot 1.5 px in radius at every zoom level, so it stays visible when you zoom out and does not grow when you zoom in. The drawing's point style (`$PDMODE` and `$PDSIZE`) is not read yet, so every point is a dot, whatever a DXF says.

## Editing points

A selected point has one grip, which moves it. A box selection takes a point when the point is inside the box, in either drag direction.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) and [Scale](../scale/) work on points as on any other entity. The property window shows Position X and Position Y, plus color and layer.

## DXF — POINT entity

Points are read from and written to DXF as `POINT` entities, with position, color and layer (group codes 10/20, 62 and 8), and they round-trip through saved JSON. They used to be skipped on import. [Export Manager](../export-manager/) lists Points as their own row, so you can leave them out of an export.

---

*Related: [Line](../line/) for the same coordinate entry, and [Vector Pins](../../interface/vector-pins/) for placing a point a set distance along a direction.*
