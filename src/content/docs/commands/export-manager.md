---
title: Export Manager — Download Drawings as DXF or JSON in KulmanLab CAD
description: Download the current drawing as DXF or JSON, ticking per entity type what goes in. Both carry geometry, text, dimensions, leaders and hatches, plus layers and linetypes.
keywords: [export DXF, export CAD file, download DXF browser, save DXF online, export JSON CAD, KulmanLab export, CAD file download, DXF export, save drawing to file, DXF download]
group: file
order: 6
---

# Export Manager

The `exportmanager` command downloads the current drawing to your file system. Two formats sit side by side — **DXF** for compatibility with other CAD tools and **JSON** for full-fidelity saves within KulmanLab CAD — and each has its own checklist of what to put in the file.

## How to export

1. Click the **Export** toolbar button (download icon) in the File panel, or type `exportmanager` in the terminal.
2. The **Export Manager** popup opens with two columns, **JSON** and **DXF**, each listing the drawing's entity types with a checkbox and a count.
3. Untick anything you want left out. Everything starts ticked.
4. Click **Export JSON** or **Export DXF**. The file downloads to your default downloads folder and the popup closes.

Press `Escape` to close the popup without exporting.

## Choosing what to export

Both columns list the same entity types, each with a count of how many are in the drawing:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Everything is ticked when the popup opens, so exporting straight away gives you the whole drawing. Untick a type to leave it out of that one file.

Four things worth knowing:

- **The two columns are independent.** Unticking Hatches under DXF has no effect on what **Export JSON** produces. Each format keeps its own selection.
- **A type you don't have is greyed out.** A row whose count is `0` can't be ticked, so the list doubles as a quick inventory of what the drawing actually contains.
- **The counts are a snapshot.** They are taken when the popup opens and don't update if the drawing changes behind it. Close and reopen to refresh them.
- **Nothing is deleted.** Unticking shapes the exported file only — the drawing itself is untouched.

**Linear Dimensions** covers linear, aligned, and continued dimensions: they are one entity type created by three different commands. Radius, diameter, and angular dimensions each get their own row.

This is what makes a cut file straightforward. Untick Text, the four dimension rows, Leaders, and Hatches, and **Export DXF** gives you cut geometry and nothing else — see [preparing a DXF for laser cutting](/blog/prepare-dxf-for-laser-cutting/).

## Choosing a format

| Format | Extension | Best for | Limitations |
|--------|-----------|----------|-------------|
| **JSON** *(native)* | `.json` | Saving work to reopen in KulmanLab CAD | Not compatible with other CAD tools |
| **DXF** | `.dxf` | Sharing with FreeCAD, LibreCAD, AutoCAD, etc. | How much survives depends on the receiving application |

**When to use JSON:** anytime you want to save a complete copy of your work. JSON is KulmanLab's native format and preserves every entity exactly — including dimensions, leaders, hatches, and all layer data.

**When to use DXF:** when you need to hand off the drawing to someone using another CAD application. The exported file uses AC1032 DXF format and can be opened in most DXF-compatible tools.

## What is exported per format

### JSON export

Every entity type is included:

- Lines, circles, arcs, ellipses, polylines, splines
- Text
- Dimensions (linear, aligned, continued, radius, diameter, angular)
- Leaders (multileaders)
- Hatches, including their pattern, scale, angle, and origin
- Layers and linetypes

### DXF export

Every entity type is included:

- Lines, circles, arcs, ellipses, polylines (exported as `LWPOLYLINE`), splines
- Text, written as `MTEXT` with its per-run formatting — font, height, bold, italic, underline, strikethrough
- Dimensions (linear, aligned, continued, radius, diameter, angular), as standard `DIMENSION` entities
- Leaders, as `MULTILEADER`
- Hatches, with their pattern, scale, angle, and origin
- Layers and linetypes

The file is written as AC1032 DXF, so a drawing exported from KulmanLab opens with its annotation intact in other DXF-capable tools rather than arriving as bare geometry.

What each receiving application then does with it still varies — DXF support differs between tools, and an older one may ignore entities a newer one reads. If a drawing has to look identical everywhere, [Print Manager](../print-manager/) captures it as a PDF or image instead.

## Exported file name

The downloaded file is named after the current drawing file (e.g. `myplan.json`), with the extension changed to match the chosen format. A drawing that has never been named exports as `drawing.dxf` or `drawing.json`.

## Difference between Export Manager and Print Manager

| Feature | Export Manager | Print Manager |
|---------|--------|-------|
| Output | Vector source file (.dxf / .json) | Raster image (.png / .jpeg / .webp / .pdf) |
| Editable in other tools | Yes (DXF) | No |
| Preserves layers & linetypes | Yes | No (rendered flat) |
| Captures dimensions & leaders | Yes | Yes |

Use **Export Manager** when you need an editable file. Use [Print Manager](../print-manager/) when you need a visual snapshot.

## Related commands

- [Import](../import/) — open a DXF or JSON file
- [Print Manager](../print-manager/) — export the canvas as a PNG, JPEG, WebP, or PDF image
- [File Manager](../file-manager/) — browse drawings saved in browser storage
