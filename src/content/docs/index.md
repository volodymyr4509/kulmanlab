---
title: KulmanLab CAD — Command Reference
description: KulmanLab CAD command reference — complete guide to every drawing, edit, markup, layer, measure, and file command in KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, CAD commands, free browser CAD, DXF editor online, drawing commands, kulmanlab commands]
---

# KulmanLab CAD — Command Reference

Welcome to the **KulmanLab CAD** command reference. [KulmanLab CAD](https://kulmanlab.com) is a free browser-based CAD tool for drawing, editing, and exporting DXF files — no installation required. Use the sidebar to browse all available commands grouped by panel.

## Shapes

| Command | What it does |
|---------|-------------|
| [Line](./commands/line/) | Draw a straight line between two points |
| [Polyline](./commands/polyline/) | Draw a multi-segment open path |
| [Rectangle](./commands/rectangle/) | Draw an axis-aligned rectangle |
| [Circle](./commands/circle/) | Draw a circle by center and radius |
| [Arc](./commands/arc/) | Draw an arc through three points |
| [Ellipse](./commands/ellipse/) | Draw an ellipse by center and two axes |
| [Text](./commands/text/) | Place a text label on the canvas |
| [Spline CV](./commands/spline-cv/) | Draw a spline by placing control vertices |
| [Spline Fit](./commands/spline-fit/) | Draw a spline that passes through clicked points |

## Edit

| Command | What it does |
|---------|-------------|
| [Move](./commands/move/) | Move selected entities to a new position |
| [Copy](./commands/copy/) | Copy selected entities to a new position |
| [Rotate](./commands/rotate/) | Rotate selected entities around a base point |
| [Mirror](./commands/mirror/) | Mirror selected entities across a line |
| [Scale](./commands/scale/) | Scale selected entities around a base point |
| [Align](./commands/align/) | Translate, rotate, and optionally scale entities using point pairs |
| [Delete](./commands/delete/) | Remove selected entities from the drawing |
| [Trim](./commands/trim/) | Trim a line segment at its intersections |
| [Extend](./commands/extend/) | Extend a line to the nearest boundary intersection |
| [Offset](./commands/offset/) | Create a parallel copy of an entity at a given distance |
| [Fillet](./commands/fillet/) | Round a corner between two lines with a tangent arc |
| [Chamfer](./commands/chamfer/) | Cut a straight diagonal corner between two lines or polylines |
| [Undo](./commands/undo/) | Undo the last action |
| [Redo](./commands/redo/) | Redo the last undone action |

## Markup

| Command | What it does |
|---------|-------------|
| [Leader](./commands/leader/) | Draw a multileader annotation with arrowhead and text |
| [Leader+](./commands/leader-add/) | Add an extra arm to an existing multileader |
| [Leader−](./commands/leader-remove/) | Remove an arm from an existing multileader |
| [Dimension Linear](./commands/dim-linear/) | Add a horizontal or vertical dimension |
| [Dimension Aligned](./commands/dim-aligned/) | Add a dimension aligned to two points |
| [Dimension Continue](./commands/dim-continue/) | Chain a new dimension from the last one |
| [Dimension Radius](./commands/dim-radius/) | Add a radius dimension to a circle or arc |
| [Dimension Diameter](./commands/dim-diameter/) | Add a diameter dimension to a circle |
| [Dimension Angular](./commands/dim-angular/) | Add an angular dimension to two lines, an arc, or a circle |

## Layer

| Command | What it does |
|---------|-------------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Set the current layer to match a clicked entity's layer |
| [LayerMatch](./commands/layer-match/) | Reassign selected entities to match the layer of a source entity |
| [LayerIsolate](./commands/layer-isolate/) | Freeze all layers except those of the selected entities |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Unfreeze all layers in one step |

## Layouts

| Command | What it does |
|---------|-------------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Create a viewport in a paper layout by picking two corners |
| [ViewportCopy](./commands/viewport-copy/) | Duplicate a viewport to a new position |
| [PageManager](./commands/page-manager/) | Edit paper size and scale for the active layout |

## Navigate

| Command | What it does |
|---------|-------------|
| [Pan](./commands/pan/) | Click and drag to move the viewport |
| [Zoom In](./commands/zoom-in/) | Zoom the viewport in |
| [Zoom Out](./commands/zoom-out/) | Zoom the viewport out |
| [Fit](./commands/fit/) | Fit all entities into the viewport |

## Measure

| Command | What it does |
|---------|-------------|
| [Distance](./commands/distance/) | Measure the distance between two points |
| [Angle](./commands/angle/) | Measure the angle between three points |
| [Area](./commands/area/) | Measure the area and perimeter of a polygon |

## Style

| Command | What it does |
|---------|-------------|
| [Match Properties](./commands/match-properties/) | Copy color, layer, and other properties from one entity to others |
| [Font Manager](./commands/font-manager/) | Browse, select, and upload custom TTF fonts |

## File

| Command | What it does |
|---------|-------------|
| [Import](./commands/import/) | Open a DXF or JSON drawing file |
| [New File](./commands/new-file/) | Start a fresh blank drawing |
| [Files](./commands/files/) | Browse and restore recent drawings |
| [Print](./commands/print/) | Export a drawing area as an image or PDF |
| [Export](./commands/export/) | Download the drawing as DXF or JSON |
| [WipeStorage](./commands/wipestorage/) | Clear all drawings from browser storage |

## Recovery

If the app crashes on every startup (for example, after working with extremely large coordinates), you can clear all locally stored data by appending `?reset` to the URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

This deletes everything from the browser's local database and starts a fresh blank drawing. The `?reset` parameter removes itself from the URL automatically. Use this as a last resort when [WipeStorage](./commands/wipestorage/) is unreachable because the app won't load at all.

## How commands work

Every command follows the same pattern:

1. **Activate** — click the toolbar button or type the command name in the terminal at the bottom of the screen.
2. **Follow the prompt** — the terminal shows what input is expected next.
3. **Finish or cancel** — most commands finish automatically after the last input. Press **Escape** at any time to cancel.

## Selecting objects

Several edit commands (Move, Copy, Rotate, Mirror, Scale, Delete) share the same selection behaviour:

- **Click** an entity to select or deselect it.
- **Drag right** (left to right) for strict selection — only entities fully inside the box are selected.
- **Drag left** (right to left) for crossing selection — any entity that intersects the box is selected.
- Press **Enter** or **Space** to confirm the selection and proceed to the next step.
