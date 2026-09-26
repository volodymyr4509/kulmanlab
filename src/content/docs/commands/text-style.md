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

Click a row to select it for editing; double-click to select **and** make it current in one step.

## Editing a style

With a style selected, its properties sit on the right:

| Field | What it controls |
|-------|-------------------|
| Name | The style's name. `Standard` can't be renamed — the field is disabled for it. |
| Font | The typeface, picked from the same list [FontManager](../font-manager/) manages — upload a custom font there and it appears here too. |
| Height | A fixed text height, or `0` to leave it unset (shown as "Set per text") — a style with no height falls back to `12` for new text created with it. |
| Bold / Italic | Toggle each independently; the live sample box above updates immediately. |
| Line Spacing | Multiplier applied between text rows. `1` uses normal spacing; larger values spread the rows farther apart. |
| Horizontal Alignment | Default paragraph alignment for new Text: Left, Center, Right, or Justify. |
| Frame | Draws a rectangular frame around new Text created with the style. |

The sample box shows the alphabet, a pangram, and digits in the style's current font, weight, and slant. Frame, line spacing, and alignment affect newly created Text rather than the sample.

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

Name, font files, fixed height, bold, italic, and the annotative flag belong to DXF text-style records and are preserved during import and export. Frame, line spacing, and horizontal alignment are per-Text defaults in KulmanLab rather than DXF STYLE-table fields, so they are not stored on the named style during a DXF round trip.
