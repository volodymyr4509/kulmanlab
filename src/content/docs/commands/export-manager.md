---
title: Export Manager — Download Drawings as DXF or JSON in KulmanLab CAD
description: The Export Manager downloads the current drawing as a DXF or JSON (native) file. Each format lists exactly which entity types it carries, side by side, so you can see before downloading what DXF leaves out — currently hatches, dimensions, leaders, and text.
keywords: [export DXF, export CAD file, download DXF browser, save DXF online, export JSON CAD, KulmanLab export, CAD file download, DXF export, save drawing to file, DXF download]
group: file
order: 6
---

# Export Manager

The `exportmanager` command downloads the current drawing to your file system. Two formats are available, shown as side-by-side cards: **DXF** for compatibility with other CAD tools and **JSON** for full-fidelity saves within KulmanLab CAD — each card lists exactly which entity types that format carries.

## How to export

1. Click the **Export** toolbar button (download icon) in the File panel, or type `exportmanager` in the terminal.
2. The **Export Manager** popup opens showing the JSON and DXF cards side by side, each listing what it exports (and, for DXF, what it leaves out).
3. Click a card to select the format — **JSON** or **DXF**.
4. Click the **Export \<FORMAT\>** button. The file downloads to your default downloads folder automatically.

Press `Escape` to close the popup without exporting.

## Choosing a format

| Format | Extension | Best for | Limitations |
|--------|-----------|----------|-------------|
| **JSON** *(native)* | `.json` | Saving work to reopen in KulmanLab CAD | Not compatible with other CAD tools |
| **DXF** | `.dxf` | Sharing with FreeCAD, LibreCAD, etc. | Hatches, dimensions, leaders, and text are not exported |

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

Geometry-only entities are included:

- Lines, circles, arcs, ellipses, polylines (exported as `LWPOLYLINE`), splines
- Layers and linetypes

**Not exported to DXF:** hatches, dimensions, leaders, and text. Dimensions and leaders use KulmanLab-specific data structures that cannot be represented faithfully in standard DXF; hatches don't export to DXF yet at all, even though they do import from it; text export isn't implemented yet either. If your drawing has any of these, use JSON or [Print Manager](../print-manager/) to capture them.

## Exported file name

The downloaded file is named after the current drawing file (e.g. `myplan.json`). The extension changes to match the chosen format.

## Difference between Export Manager and Print Manager

| Feature | Export Manager | Print Manager |
|---------|--------|-------|
| Output | Vector source file (.dxf / .json) | Raster image (.png / .jpeg / .webp / .pdf) |
| Editable in other tools | Yes (DXF) | No |
| Preserves layers & linetypes | Yes | No (rendered flat) |
| Captures dimensions & leaders | JSON only | Yes |

Use **Export Manager** when you need an editable file. Use [Print Manager](../print-manager/) when you need a visual snapshot.

## Related commands

- [Import](../import/) — open a DXF or JSON file
- [Print Manager](../print-manager/) — export the canvas as a PNG, JPEG, WebP, or PDF image
- [File Manager](../file-manager/) — browse drawings saved in browser storage
