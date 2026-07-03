---
sidebar_position: 1
title: Import — Open DXF or JSON Files in KulmanLab CAD
description: Use the Import command to open DXF or KulmanLab JSON files in KulmanLab CAD. Supports lines, circles, arcs, polylines, splines, text, dimensions, and leaders.
keywords: [import DXF file, open DXF in browser, import CAD file online, open DXF file, DXF viewer browser, import JSON CAD, KulmanLab import, free CAD DXF viewer, load drawing, DXF to browser]
---

# Import

The **Import** command loads an existing drawing from your local file system into KulmanLab CAD. Both the standard  **DXF** format and KulmanLab's own **JSON** format are supported.

## How to import a file

1. Click the **Import** toolbar button (folder icon) in the File panel at the top of the screen.
2. Your browser's file picker opens. Navigate to your drawing file and select it.
3. The drawing loads onto the canvas immediately. The viewport fits all entities automatically.

Alternatively, you can drag and drop a file directly onto the canvas.

## Supported file formats

| Format | Extension | When to use |
|--------|-----------|-------------|
| **DXF** | `.dxf` | Drawings from , FreeCAD, LibreCAD, or other CAD tools |
| **JSON** *(native)* | `.json` | Drawings previously saved from KulmanLab CAD — full fidelity |

## What gets imported from DXF

KulmanLab parses the following DXF entity types:

| Entity type | DXF code | Notes |
|-------------|----------|-------|
| Line | `LINE` | |
| Circle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Dimension | `DIMENSION` | |
| Multileader | `MULTILEADER` | |

Layer definitions and linetype tables are also imported from the DXF file when present.

Entities that use unsupported DXF types are silently skipped — the rest of the drawing still loads.

## File naming and storage

When you import a file, a timestamp is appended to the file name (for example `myplan_May22_14:30:00.dxf`). This lets you keep multiple versions of the same drawing in [Recent Files](../files/) without name collisions. If the file name already contains a timestamp, it is used as-is.

The drawing is automatically saved to browser storage (IndexedDB) after import, so it appears in the [Files](../files/) panel and survives page reloads.

## What happens to the current drawing

Importing replaces the current canvas. There is no merge or append. If you have unsaved changes, [export](../export/) the current drawing first.

## On startup

KulmanLab automatically reopens the most recently edited file when the page loads. If no saved files exist, a default sample drawing is loaded.

## Troubleshooting

| Problem | Likely cause | Fix |
|---------|-------------|-----|
| Canvas is empty after import | DXF entities use unsupported types (e.g. HATCH, INSERT) | The entities were skipped — check for the "no entities found" message in the terminal |
| Import button does nothing | Browser blocked the file picker | Click the button once more; some browsers require a fresh user gesture |
| Dimensions look wrong | DXF from a tool that writes non-standard dimension geometry | Re-export from the source app using a current DXF version |

## Related commands

- [Export](../export/) — download the current drawing as DXF or JSON
- [Files](../files/) — browse and restore drawings saved in the browser
- [New File](../new-file/) — start a blank drawing
