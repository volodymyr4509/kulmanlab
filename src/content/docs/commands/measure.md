---
title: "Measure Command — Read Distances, Lengths, Angles and Areas Around the Cursor"
description: "The Measure command reads the drawing around the cursor as you move it — the distance across to the nearest geometry, the length or radius of what it meets, the angle where lines meet — and gives the area and perimeter of a closed area on a click. Nothing in the drawing changes."
keywords: ["CAD measure command", "measure area and perimeter CAD", "live distance measurement CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

The `measure` command reads the drawing around the cursor as you move it, with no points to pick: how far it is across to the nearest geometry, how long or how round that geometry is, and the angle where lines meet. A click inside a closed area gives its area and perimeter. Nothing in the drawing is changed.

## Measuring

1. Type `measure` in the terminal or click **Measure**, the first button in the Measure panel.
2. **Move the cursor.** From it the command looks right, up, left and down for the nearest geometry and shows what it finds.
3. **Click inside a closed area** to fill it and read its area and perimeter — see below.
4. Press **Enter**, **Space** or **Escape** to finish.

## What it shows

- **Distance across** — from what the cursor meets on one side to what it meets on the other, horizontally and vertically. If only one side has anything, the distance runs from the cursor instead. Each end that meets something has a small filled dot; an end at the cursor has none.
- **Length or radius** — each object the command reaches is picked out with its length, or its radius when it is part of a circle.
- **Angle** — where two reached straight lines meet, the angle between them is written; a right angle is marked with a small square.

Lengths and angles are written as the current [DimensionStyle](../dimension-style/) writes them, in its unit format and precision.

## Area and perimeter

A click inside a closed area fills it and puts its area and perimeter in the prompt and the history. The region is found the way [Hatch](../hatch/) finds one: separate lines that meet end to end close an area just as a polyline does, and anything closed inside it is left out as an island — its edge counts toward the perimeter and its area is taken off.

The area is a plain number of square drawing units — feet and inches have no way to write one — while the perimeter follows the unit format. Click inside another area to measure it. If nothing closed surrounds the point, the terminal says why, with the same messages as Hatch: no boundary found, point is not enclosed, or boundary is open.

## Good to know

- It measures against lines, arcs, circles, ellipses, polylines and splines; lengths and areas are exact, including for ellipses and splines.
- Objects on frozen layers are ignored; objects on locked layers are measured.
- In a large drawing it only looks at what is near the cursor, so it stays responsive.

---

*Related: [Distance](../distance/), [Angle](../angle/) and [Area](../area/) for measurements between points you pick, and [Hatch](../hatch/) for how closed areas are found.*
