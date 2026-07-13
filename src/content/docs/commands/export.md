---
title: Export — Download Drawings as DXF or JSON in KulmanLab CAD
description: The Export command downloads the current drawing as a DXF or JSON (native) file. JSON preserves all entities including dimensions and leaders; DXF is compatible with other CAD tools.
keywords: [export DXF, export CAD file, download DXF browser, save DXF online, export JSON CAD, KulmanLab export, CAD file download, DXF export, save drawing to file, DXF download]
group: file
order: 5
---

# Export

The **Export** command downloads the current drawing to your file system. Two formats are available: **DXF** for compatibility with other CAD tools and **JSON** for full-fidelity saves within KulmanLab CAD.

## How to export

1. Click the **Export** toolbar button (download icon) in the File panel.
2. The **Export Manager** popup opens.
3. Click a format card to select the format — **JSON** or **DXF**.
4. Click the **Export** button. The file downloads to your default downloads folder automatically.

## Choosing a format

| Format | Extension | Best for | Limitations |
|--------|-----------|----------|-------------|
| **JSON** *(native)* | `.json` | Saving work to reopen in KulmanLab CAD | Not compatible with other CAD tools |
| **DXF** | `.dxf` | Sharing with FreeCAD, LibreCAD, etc. | Dimensions and leaders are not exported |

**When to use JSON:** anytime you want to save a complete copy of your work. JSON is KulmanLab's native format and preserves every entity exactly — including dimensions, leaders, and all layer data.

**When to use DXF:** when you need to hand off the drawing to someone using another CAD application. The exported file uses AC1012 DXF format and can be opened in most DXF-compatible tools.

## What is exported per format

### JSON export

All entity types are included:

- Lines, circles, arcs, ellipses, polylines, splines, text
- Dimensions (linear, aligned, continued, radius, diameter)
- Multileaders
- Layer definitions and linetype tables

### DXF export

Geometry-only entities are included:

- Lines, circles, arcs, ellipses, polylines (exported as `LWPOLYLINE`), splines, text
- Layer definitions and linetype tables

**Not included in DXF:** dimension entities and multileaders. These use KulmanLab-specific data structures that cannot be represented faithfully in standard DXF. If your drawing has annotations, use JSON or [Print](../print/) to capture them visually.

## Exported file name

The downloaded file is named after the current drawing file (e.g. `myplan_May22_14:30:00.json`). The extension changes to match the chosen format.

## Difference between Export and Print

| Feature | Export | Print |
|---------|--------|-------|
| Output | Vector source file (.dxf / .json) | Raster image (.png / .jpeg / .webp / .pdf) |
| Editable in other tools | Yes (DXF) | No |
| Preserves layers & linetypes | Yes | No (rendered flat) |
| Captures dimensions & leaders | JSON only | Yes |

Use **Export** when you need an editable file. Use [Print](../print/) when you need a visual snapshot.

## Related commands

- [Import](../import/) — open a DXF or JSON file
- [Print](../print/) — export the canvas as a PNG, JPEG, WebP, or PDF image
- [Files](../files/) — browse drawings saved in browser storage
