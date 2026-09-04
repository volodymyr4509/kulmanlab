---
title: Export Manager — Download Drawings as DXF or JSON in KulmanLab CAD
description: Download the current drawing as DXF or JSON. Both carry every entity type — geometry, text, dimensions, leaders and hatches — along with layers and linetypes.
keywords: [export DXF, export CAD file, download DXF browser, save DXF online, export JSON CAD, KulmanLab export, CAD file download, DXF export, save drawing to file, DXF download]
group: file
order: 6
---

# Export Manager

The `exportmanager` command downloads the current drawing to your file system. Two formats are available, shown as side-by-side cards: **DXF** for compatibility with other CAD tools and **JSON** for full-fidelity saves within KulmanLab CAD — each card lists exactly which entity types that format carries.

## How to export

1. Click the **Export** toolbar button (download icon) in the File panel, or type `exportmanager` in the terminal.
2. The **Export Manager** popup opens showing the JSON and DXF cards side by side, each listing what it exports.
3. Click a card to select the format — **JSON** or **DXF**.
4. Click the **Export \<FORMAT\>** button. The file downloads to your default downloads folder automatically.

Press `Escape` to close the popup without exporting.

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
- Dimensions (linear, aligned, continued, radius, diameter)
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

The downloaded file is named after the current drawing file (e.g. `myplan.json`). The extension changes to match the chosen format.

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
