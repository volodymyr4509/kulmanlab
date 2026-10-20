---
title: "PointDivide Command — Place Points at Equal Lengths Along an Object"
description: "The PointDivide command divides a line, polyline, arc, circle, ellipse or spline into segments of equal length and places a point at each division, previewing them while you type the number of segments."
keywords: ["CAD divide command", "divide line into equal parts CAD", "place points along object CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

The `pointdivide` command places [points](../point/) that split an object into segments of equal length. The object itself is not changed: the points are new entities on the current layer and color, handy to snap to.

## Dividing an object

1. Type `pointdivide` in the terminal or choose **Point Divide** from the array dropdown in the Edit panel.
2. **Click the object** — a line, polyline, arc, circle, ellipse or spline. Anything else is refused, and you can pick again.
3. **Type the number of segments**, a whole number from 2 to 32767. The points preview on the object as you type.
4. Press **Enter** or **Space** to place them. The command ends.

## Where the points go

- Spacing is by length along the object, not by angle, so an ellipse or a spline is cut into pieces of equal length. Polyline arc segments are followed along their curve.
- On an open object — a line, open polyline, arc, partial ellipse or open spline — the points go between the segments, never on the ends: 5 segments give 4 points.
- On a closed object — a circle, closed polyline, full ellipse or closed spline — the points go all the way round from its start, which gets a point too: a circle starts at angle 0, a closed polyline at its first vertex. 5 segments give 5 points.
- A number outside 2–32767 is refused: the terminal says why and clears it, so you can type again.

Backspace deletes the last digit. Escape starts over, so you can pick another object. Enter or Space before an object is picked ends the command.

---

*Related: [Point Interval](../point-interval/) to place points a set length apart, [Point](../point/) for single points, and [ArrayPolar](../array-polar/) to repeat objects rather than points.*
