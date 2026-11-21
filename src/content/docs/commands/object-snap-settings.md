---
title: "ObjectSnapSettings Command — Every Control Bar Setting in One Window"
description: "The ObjectSnapSettings command opens one window with every control bar setting — snapping, tangent snap, angle tracking, pins, typed input, lasso and display — each explained beside the list with a small drawing."
keywords: ["object snap settings CAD", "tangent snap CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

The `objectsnapsettings` command opens one window that holds every control bar setting. Each setting is explained beside the list, with a small drawing. Open it with the gear button in the control bar, or type `objectsnapsettings`. A setting changed here is the same as switching its button in the bar.

## The settings

### Where the cursor lands

| Control bar | What it does |
|---|---|
| `Snap` | The cursor jumps to the nearest grid point, so the points you pick land on round coordinates. A snap to an object near the cursor still wins. The grid step follows the zoom. |
| `TANG` | While a line is drawn from a point, bring the cursor near where it would just touch a circle, arc, ellipse or spline and it snaps there. Works in Line, Polyline and other commands, and when dragging the end of a line or polyline. |

### Guides while drawing

| Control bar | What it does |
|---|---|
| `ANGL` | When the cursor comes close to one of these angles from the last point, it locks onto that direction, shown as a dashed ray. While it is locked, type a length and press Enter to place the point that far along. |
| `Pins` | Rest the cursor on a snap point for a moment to pin it. A pinned point sends out horizontal and vertical guide lines, and the cursor snaps onto them and to where they cross. |
| `Dist` | Lets the last pinned point act as a start point: when the cursor locks onto an angle from the pin, type a length and press Enter to place the point that far from it. Needs vector pins. |

### Typing and selecting

| Control bar | What it does |
|---|---|
| `Rel` | A typed X,Y point is measured from the last point picked, as if it started with @. Backspace removes the @ for a point in the drawing's own coordinates. With it off, type @ yourself for an offset. |
| `Lasso` | Press and drag on empty space to draw a free-form loop around what you want, instead of a rectangle. What the loop takes in is selected. |

### Display

| Control bar | What it does |
|---|---|
| `Grid` | Shows the background grid. Its spacing changes as you zoom. Turning it off doesn't stop snapping to the grid. |
| `LWT` | Draws lines at their lineweight, so heavier lines look thicker. With it off every line is drawn thin, which can make a dense drawing easier to read. |

**ANGL** has its own row for the step: pick 10°, 20°, 30°, 45° or 90°, or choose **Custom** and type any angle from 1° to 180°.

Tangent snap, relative input and the lasso are off by default. **Reset to defaults** puts every setting back to how it starts.

---

*Related: [Vector Pins](../../interface/vector-pins/), [Distance Tracking](../../interface/distance-tracking/), [Grid & Snap](../../interface/grid-snap/), [Coordinate Entry](../../interface/coordinate-entry/)*
