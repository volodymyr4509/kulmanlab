---
title: "Polygon Command — Draw Regular Polygons by Center or Edge in KulmanLab CAD"
description: "The Polygon command draws a regular polygon with 3 to 1024 sides from its center and a radius, or from one edge. The result is a closed LWPOLYLINE, so every polyline edit command applies to it."
keywords: ["CAD polygon command", "draw regular polygon CAD", "hexagon octagon pentagon CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

The `polygon` command draws a regular polygon — all sides and angles equal — with 3 to 1024 sides. Type `polygon` in the terminal. The result is a **closed `LWPOLYLINE`**, so once placed it behaves like any other [Polyline](../polyline/) and every polyline edit applies to it.

## Drawing a polygon

1. Type `polygon` in the terminal and enter the **number of sides** — a whole number from 3 to 1024 — then press **Enter** or **Space**. The prompt is pre-filled with the last count you used (4 the first time); start typing to replace it. Anything else is refused and stays in the prompt to correct.
2. **Click the center**, or type `X,Y` and press **Enter** for an exact coordinate. Press `E` first to start from an edge instead (see below).
3. **Click the radius** — the polygon previews live — or type the radius and press **Enter** or **Space**.
4. The polygon is placed and the command exits.

## Options

| Option | Key | Effect |
|---|---|---|
| Edge | `E` | The first point becomes one end of an edge instead of the center. Pick the second end; the remaining corners are built counter-clockwise, to the left of the edge from the first end to the second. Press `E` again to go back to the center. |
| Inside | `I` | On by default, and kept from one polygon to the next. On: the corners lie on the circle of the given radius. Off: the polygon sits outside that circle, with the middle of each edge on it. |

- A click puts a corner (Inside on) or the middle of an edge (Inside off) exactly where the cursor is, so the cursor also sets the orientation.
- A typed radius has nothing to aim along, so the polygon sits with its lowest edge level — unless angle locking is on, in which case it follows the locked angle.
- Each option is offered at its own step and can be flipped even while a number is being typed.

## Keyboard reference

| Key | Action |
|---|---|
| `0`–`9`, `.` | Type the number of sides, the radius, or a coordinate or length |
| `E` | Turn Edge on or off (first-point step) |
| `I` | Turn Inside on or off (radius step) |
| `Enter` / `Space` | Confirm the number of sides or the radius |
| `Escape` | Cancel |

## DXF — LWPOLYLINE entity

A polygon is saved as a closed `LWPOLYLINE` with one vertex per corner; DXF has no dedicated polygon type. All properties — vertex coordinates, color, layer, linetype, linetype scale, and thickness — round-trip without loss, and any DXF viewer reads it as a closed polyline.
