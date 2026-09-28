---
title: LeaderStyle Command — Create and Manage Named Leader Styles
description: Create and manage named CAD leader styles with arrowhead, arrow size, landing gap, text attachment, rotation, font, height, formatting, and frame defaults.
keywords: [leader style CAD, multileader style, MLEADERSTYLE, CAD arrowhead style, leader text attachment, leader landing gap, DXF leader style, kulmanlab]
group: style
order: 7
---

# LeaderStyle

The `LeaderStyle` command opens a dialog for creating, editing, and selecting named leader styles. Every new [Leader](../leader/) copies the *current* style's leader and text settings when it is created.

## Opening the Leader Style dialog

- Type `LeaderStyle` in the terminal, **or**
- Click the **Leader Style** button in the Annotate panel.

The list on the left contains every visible leader style. A check mark identifies the current style. Click a style to edit it; use the pencil beside its name to rename it.

## Leader settings

| Field | What it controls |
|---|---|
| Text Attachment | Where the landing meets the label: Top, Middle, Bottom, or Underline |
| Arrowhead | The symbol at each arm tip, selected from the visual arrowhead picker |
| Arrow Size | The size of the arrowhead in drawing units |
| Landing Gap | Space between the landing endpoint and the text |
| Text Rotation | Label rotation in degrees; clearing the field resets it to `0` |

## Text settings

| Field | What it controls |
|---|---|
| Text Style | Quick-fills Font, Text Height, Bold, and Italic from a named [TextStyle](../text-style/) |
| Font | Typeface for the new leader's label |
| Text Height | Label height in drawing units |
| Bold / Italic | Independent formatting defaults |
| Frame Text | Draws a rectangular frame around the label |

Text Style is a one-time quick fill, not a live link. Editing any copied value does not change the source text style, and later changes to that text style do not update the leader style.

The preview uses the same multileader renderer as the canvas and updates immediately. Its zoom value shows the scale used to fit the complete arrow, landing, and text into the preview.

## Creating, renaming, and deleting styles

- **New** duplicates the selected style under the next free name (`Leader1`, `Leader2`, …).
- Use the pencil in the style row to rename it. `Standard` cannot be renamed.
- **Delete** removes the selected style only when it is neither `Standard` nor the current style.

Names must be non-empty, unique even among hidden styles, and valid for DXF. Names containing `< > / \ " : ; ? * | , = \`` are rejected, and **OK** remains disabled until every visible style has a valid name.

Annotative styles imported from DXF are currently hidden because annotative scaling is not rendered yet. Their records remain in the drawing and are written back unchanged unless the visible style table is otherwise saved.

## Setting the current style

**Set Current** makes the selected style the default for future leaders. The dropdown beside **Leader Style** in the Annotate panel provides the same choice without opening the dialog.

A leader style is copied at creation time. Existing leaders are not live-linked and do not change when a style is edited, renamed, or deleted.

## Saving or discarding changes

All edits are made on copies. **OK** applies renames, additions, deletions, property changes, and the current-style choice together. **Close**, the window's close button, clicking the backdrop, or pressing `Escape` discards them.

| Key | Action |
|---|---|
| `↑` / `↓` | Move through the style list when focus is not in an input |
| `Escape` | Discard changes and close the dialog |

## DXF compatibility

KulmanLab imports and exports `MLEADERSTYLE` records. Name, arrowhead, arrow size, landing gap, text height, text attachment, frame, and the annotative flag round-trip as named-style fields. On export, group `342` points to the TextStyle whose font, bold, italic, and height match the LeaderStyle, falling back to `Standard` when no style matches. This DXF reference does not make the in-app quick fill a live link. The one Text Attachment setting is written to both the left and right attachment fields so it remains correct when a leader changes sides in AutoCAD.

## Related commands

| Command | What it does |
|---|---|
| [Leader](../leader/) | Draws a multileader using the current leader style |
| [LeaderAdd](../leader-add/) | Adds an arrowhead arm to an existing leader |
| [LeaderRemove](../leader-remove/) | Removes an arm from a leader with multiple arms |
| [TextStyle](../text-style/) | Supplies text settings through the quick-fill selector |
