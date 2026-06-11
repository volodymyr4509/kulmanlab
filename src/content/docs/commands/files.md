---
sidebar_position: 3
title: Files — Recent Files Panel in KulmanLab CAD
description: The Files command opens the Recent Files panel — browse all drawings saved in your browser, restore any of them to the canvas, or delete ones you no longer need.
keywords: [recent files CAD, file history browser CAD, restore drawing, reopen DXF, browser storage CAD, KulmanLab files, saved drawings, IndexedDB CAD, manage drawings]
---

# Files

The **Files** command opens the **Recent Files** panel — a list of all drawings that have been saved to your browser's local storage. Use it to reopen a previous drawing or remove files you no longer need.

## How to open the Recent Files panel

Click the **Files** toolbar button (history icon) in the File panel at the top of the screen. The panel opens on the left side of the canvas.

## Recent Files panel

Each entry in the list shows the file name and two action buttons:

| Button | Action |
|--------|--------|
| ✓ **Restore** | Load the drawing onto the canvas — replaces the current content |
| ✕ **Delete** | Remove the file from browser storage permanently |

If no files have been saved yet, the panel shows "No files saved".

## How files are stored

KulmanLab saves drawings to **IndexedDB** — a persistent in-browser database. This means:

- Files survive page reloads and browser restarts.
- Files are stored **locally on your device** — they are not uploaded to any server.
- Each browser and device has its own independent storage. A drawing saved in Chrome on one computer is not available in Firefox or on another machine.
- Clearing the browser's site data will erase all saved files.

## Automatic file loading on startup

When you open KulmanLab CAD, the app automatically loads the **most recently modified file** from storage. You do not need to manually open it from the Files panel each time.

## Managing storage

There is no fixed limit on the number of drawings you can save, but browser storage is finite. If you notice storage warnings, delete older files from the Files panel.

To remove all saved drawings at once, use the [WipeStorage](./wipestorage) command.

## File names and versioning

Each file has a timestamp in its name (e.g. `myplan_May22_14:30:00.dxf`). This timestamp is added automatically when you [import](./import) a file, ensuring that re-importing the same source file creates a new entry rather than overwriting the previous version.

## Related commands

- [Import](./import) — load a drawing from your file system into browser storage
- [Export](./export) — download a drawing to your file system
- [New File](./new-file) — start a blank drawing (also saved automatically)
- [WipeStorage](./wipestorage) — clear all saved files from browser storage
