---
sidebar_position: 6
title: Delete Command — Remove Entities from the Drawing in KulmanLab CAD
description: The Delete command removes selected entities permanently (undoable). Pre-selected entities are deleted instantly with no confirmation step. The Delete key works as a global shortcut even without activating the command. Supports single-click and area selection.
keywords: [CAD delete command, remove entities CAD, erase objects CAD, delete key CAD, undo delete CAD, kulmanlab]
---

# Delete

The `delete` command removes selected entities from the drawing. Deletions are recorded in the [Undo](../undo/) history and can be reversed with up to 20 steps. There is no separate "confirm delete" dialog — confirmation is a single key press.

## Two ways to delete

**Pre-select, then delete** — the fastest path:

1. Select one or more entities on the canvas.
2. Type `delete` in the terminal, click the **Delete** toolbar button, **or press the `Delete` key** directly.

Entities are removed instantly — no additional confirmation step.

**Activate, then select**:

1. Type `delete` or click the toolbar button (with nothing selected).
2. **Select objects** — click to toggle, or drag to select by area.
3. Press **Enter**, **Space**, or **Delete** to confirm and remove the selected entities.

## Delete key shortcut

The `Delete` key on the keyboard acts as a **global shortcut** — if any entities are currently selected, pressing it deletes them immediately, even without opening the Delete command in the terminal. This is the fastest single-step deletion workflow:

```
Click entity → press Delete key → done
```

## Selection during the command

| Method | Behaviour |
|--------|-----------|
| **Click** | Toggles the entity under the cursor in/out of the selection |
| **Drag right** (strict) | Selects only entities fully inside the box |
| **Drag left** (crossing) | Selects entities that intersect the box boundary |
| **Enter** / **Space** / **Delete** | Confirms and deletes selected entities |

## Recovering deleted entities

Deletions are undoable with the [Undo](../undo/) command (type `undo` or use the toolbar button). Up to **20 steps** can be reversed per file, and the history persists across page reloads. If you have exceeded 20 deletions without saving, earlier deletions cannot be recovered.

## Supported entities

Delete works on every entity type — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader, and all others.
