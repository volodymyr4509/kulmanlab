---
title: ChangePrintArea Command — Crop the Print Manager Export to a Rectangle
description: The ChangePrintArea command picks two opposite corners on the canvas to set the region Print Manager exports. Supports typed X,Y coordinates and snapping, and remembers the area separately for Model space and for each layout.
keywords: [CAD print area, crop CAD export, change print area command, print manager crop, export region CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

The `ChangePrintArea` command sets the rectangular region that [Print Manager](../print-manager/) exports. It runs on the bare canvas with the Print Manager hidden, and takes two opposite corners — the same two picks as [Rectangle](../rectangle/), so typed coordinates and snapping behave exactly as they do there.

## Selecting an area

1. Type `ChangePrintArea` in the terminal, or click **Change Area** in the Print Manager sidebar. The Print Manager hides and the canvas becomes interactive.
2. **Click the first corner**, or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click the opposite corner**, or type `X,Y` again.

Print Manager reopens with the new area in the preview, which resizes to that area's exact aspect ratio.

Corners snap to grips and intersections like any other point pick, so you can crop to drawn geometry instead of by eye. The two corners can be given in any order — opposite corners define the same rectangle whichever you pick first.

Press `Escape` to cancel. Nothing is written, so Print Manager reopens with whatever area it already had.

## Where the area is remembered

The selection is stored per context rather than globally:

| Context | Slot |
|---------|------|
| Model space | One shared slot |
| Each layout | Its own slot, kept separately |

Reopening Print Manager on the same layout — or on Model — restores that context's own last crop instead of resetting, and switching between layouts leaves each one's area intact.

This is held in memory only. Reloading the page clears every stored area, and Print Manager falls back to the defaults below.

## Default area

With nothing stored for the current context, Print Manager opens on:

| Context | Default |
|---------|---------|
| Model space | The bounding box of all entities — the same extent [Fit](../fit/) zooms to |
| A layout | The full sheet |

## Related commands

| Command | What it does |
|---------|-------------|
| [Print Manager](../print-manager/) | The export window this area applies to |
| [Rectangle](../rectangle/) | The same two-corner pick, but draws a polyline |
| [Fit](../fit/) | Zooms to the extent Model space defaults to |
