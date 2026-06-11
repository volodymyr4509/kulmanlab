---
sidebar_position: 2
title: New File — Start a Blank Drawing in KulmanLab CAD
description: The New File command clears the canvas and opens a fresh blank drawing. A timestamped file name is generated automatically and saved to browser storage.
keywords: [new CAD file, new drawing, blank canvas CAD, create new drawing online, start new DXF, KulmanLab new file, reset canvas, clear drawing]
---

# New File

The **New File** command clears the canvas and starts a fresh blank drawing. A unique file name with a timestamp is generated automatically.

## How to create a new file

Click the **New File** toolbar button (new-page icon) in the File panel. The canvas clears immediately — no prompts or confirmation dialogs.

## What the new file contains

A freshly created file starts with:

- **No entities** on the canvas.
- **One default layer** named `0` with color white and linetype `Continuous`.
- A **generated file name** in the format `kulman-Mon01_HH:MM:SS.dxf` (e.g. `kulman-May22_14:30:00.dxf`).

The file is saved to browser storage automatically and appears in [Recent Files](./files).

## Warning — unsaved work is discarded

Clicking **New File** discards all entities on the current canvas without warning. If you want to keep the current drawing, [export](./export) it first.

## When to use New File vs Import

| Situation | Recommended action |
|-----------|-------------------|
| Starting a drawing from scratch | **New File** |
| Opening an existing DXF or JSON file | [Import](./import) |
| Copying a drawing to work on a variant | [Export](./export) the current file, then [Import](./import) the copy |

## Related commands

- [Import](./import) — open an existing DXF or JSON drawing
- [Export](./export) — download the drawing before starting fresh
- [Files](./files) — restore a previous drawing from browser storage
