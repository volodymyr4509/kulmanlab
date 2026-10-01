---
title: TextStyle Command — Create and Manage Named Text Styles
description: Create and manage named CAD text styles with font, height, bold, italic, line spacing, alignment, and text-frame defaults. New Text uses the current style.
keywords: [text style CAD, CAD font style, named text style, text style manager, bold italic text CAD, text frame CAD, text line spacing CAD, text alignment CAD, text style DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

The `TextStyle` command opens a dialog listing every named text style in the drawing. Create styles, edit their formatting defaults, and choose which one is *current*. New [Text](../text/) copies the current style's settings when it is created.

## Opening the Text Style dialog

- Type `TextStyle` in the terminal, **or**
- Click the **Text Style** button in the Annotate panel.

The dialog opens as a floating window: every style listed down the left, the selected one's properties on the right.

## The style list

Each row shows the style's name. A check mark identifies the *current* style—the one used by new Text.

| Marker | Meaning |
|--------|---------|
| ✓ | This is the *current* style—new Text copies its formatting defaults |

Click a row to select it for editing; double-click to select **and** make it current in one step. Use the pencil beside a style name to rename it inline. `Standard` cannot be renamed.

## Editing a style

With a style selected, its properties sit on the right:

| Field | What it controls |
|-------|-------------------|
| Font | The typeface, picked from the same list [FontManager](../font-manager/) manages — upload a custom font there and it appears here too. |
| Height | A required positive text height. New and legacy styles with a zero or negative height use `1`; the manager accepts values greater than `0`. |
| Bold / Italic | Toggle each independently; the live sample box above updates immediately. |
| Line Spacing | Multiplier applied between text rows. `1` uses normal spacing; larger values spread the rows farther apart. |
| Horizontal Alignment | Default paragraph alignment for new Text: Left, Center, Right, or Justify. |
| Frame | Draws a rectangular frame around new Text created with the style. |

The preview draws a two-line pangram through the same renderer as canvas Text. Font, height, bold, italic, frame, line spacing, and horizontal alignment all update immediately; the zoom readout shows the scale used to fit the preview. New styles default to **Left** alignment.

Annotative styles imported from DXF are currently hidden because annotative scaling is not rendered yet. Their records are preserved, but they cannot be selected or edited in this dialog.

A name that's empty, already used by another style, or contains a character a DXF file can't hold (`< > / \ " : ; ? * | , = \``) is rejected with an inline error, and **OK** stays disabled until every style's name is valid.

## Creating and deleting styles

- **New** duplicates the selected style—all its formatting defaults—under the next free name (`Style1`, `Style2`, …), and selects it for editing.
- **Delete** removes the selected style, but only when it's neither `Standard` nor the current style; the button is disabled otherwise.

## Setting the current style

**Set Current** makes the selected style the one new Text is created with, and is disabled once that style is already current. The same switch is available without opening the dialog: the dropdown next to **Text Style** in the Annotate panel lists every visible style.

A style is a *template at the moment of creation*. Font, height, bold, italic, line spacing, alignment, and frame are copied onto the new Text entity; the entity is not kept live-linked to the style. Editing or deleting the style later does not change existing Text.

## Saving or discarding changes

Every edit here works on a copy of the style table. **OK** writes the copies back — renames, new styles, deletions, and the current-style choice all take effect together — and closes the dialog. **Close** (or `Escape`) discards everything, whether you clicked New, Delete, or a checkbox, and leaves the drawing exactly as it was.

## Keyboard reference

| Key | Action |
|-----|--------|
| `↑` / `↓` | Move the selection up or down the style list |
| `Escape` | Discard changes and close the dialog |

## Related commands

| Command | What it does |
|---------|-------------|
| [Text](../text/) | Draws a text label — takes its font, weight, and height from the current text style |
| [FontManager](../font-manager/) | Browse, select, and upload the custom fonts a text style's Font field draws from |
| [MatchProperties](../match-properties/) | Copies a text entity's height to others — not its font, bold, or italic |

## DXF compatibility

Name, font files, bold, italic, and the annotative flag belong to DXF text-style records and are preserved during import and export. KulmanLab writes STYLE group `40` as `0` (variable height) and stores the style's last-used height in group `42`; this keeps a fixed STYLE height from overriding a dimension style's own text height in other CAD applications. Frame, line spacing, and horizontal alignment are per-Text defaults in KulmanLab rather than DXF STYLE-table fields, so they are not stored on the named style during a DXF round trip.
