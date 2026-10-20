---
title: "PointInterval Command — Place Points a Set Length Apart Along an Object"
description: "The PointInterval command places points a typed length apart along a line, polyline, arc, circle, ellipse or spline, starting from the end you pick nearer, and previews them while you type the length."
keywords: ["place points at interval CAD", "points at fixed distance along line CAD", "CAD measure along object", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

The `pointinterval` command places [points](../point/) a set length apart along an object, the way you would mark stations along a path. The object itself is not changed: the points are new entities on the current layer and color, handy to snap to.

## Placing points at an interval

1. Type `pointinterval` in the terminal or choose **Point Interval** from the array dropdown in the Edit panel.
2. **Click the object near the end to start from** — a line, polyline, arc, circle, ellipse or spline. Anything else is refused, and you can pick again.
3. **Type the interval length.** The points preview on the object as you type.
4. Press **Enter** or **Space** to place them. The command ends.

## Where the points go

- The first point goes one interval in from the start and the rest follow one interval apart, measured along the object, curves included. No point goes on the start itself.
- On an open object — a line, open polyline, arc, partial ellipse or open spline — measuring starts from whichever end you clicked nearer. What is left over at the far end stays unmarked: the far end gets a point only when the interval fits exactly.
- On a closed object — a circle, closed polyline, full ellipse or closed spline — measuring starts from the object's own start, wherever you click: a circle at angle 0, going counter-clockwise, a closed polyline at its first vertex. The points stop short of the start.
- A length of 0 or less, one longer than the object, or one that would give more than 32767 points is refused: the terminal says why and clears it, so you can type again.

Backspace deletes the last character. Escape starts over, so you can pick another object. Enter or Space before an object is picked ends the command.

---

*Related: [Point Divide](../point-divide/) to split an object into a number of equal lengths, and [Point](../point/) for single points.*
