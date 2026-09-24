---
title: TextStyle Command — Create and Manage Named Text Styles
description: The TextStyle command opens a dialog for creating, editing, and switching between named text styles — each with its own font, height, bold, italic, and annotative setting. New Text picks up whichever style is current at the moment it's drawn.
keywords: [text style CAD, CAD font style, named text style, text style manager, bold italic text CAD, text style DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

The `TextStyle` command opens a dialog listing every named text style in the drawing. Create new styles, edit an existing one's font and formatting, and choose which one is *current* — new [Text](../text/) is drawn with the current style's font, weight, and height at the moment it's created.

## Opening the Text Style dialog

- Type `TextStyle` in the terminal, **or**
- Click the **Text Style** button in the Annotate panel.

The dialog opens as a floating window: every style listed down the left, the selected one's properties on the right.

## The style list

Each row shows the style's name, plus:

| Marker | Meaning |
|--------|---------|
| ✓ | This is the *current* style — new Text picks up its font, weight, and height |
| **A** badge | The style is marked Annotative |

Click a row to select it for editing; double-click to select **and** make it current in one step.

## Editing a style

With a style selected, its properties sit on the right:

| Field | What it controls |
|-------|-------------------|
| Name | The style's name. `Standard` can't be renamed — the field is disabled for it. |
| Font | The typeface, picked from the same list [FontManager](../font-manager/) manages — upload a custom font there and it appears here too. |
| Height | A fixed text height, or `0` to leave it unset (shown as "Set per text") — a style with no height falls back to `12` for new text created with it. |
| Bold / Italic | Toggle each independently; the live sample box above updates immediately. |
| Annotative | Marks the style for a real DXF reader that treats annotative styles as scale-dependent. The flag round-trips through import and export but has no effect on how the style renders inside the app itself. |

The sample box shows the alphabet, a pangram, and digits set in the style's current font, weight, and slant.

A name that's empty, already used by another style, or contains a character a DXF file can't hold (`< > / \ " : ; ? * | , = \``) is rejected with an inline error, and **OK** stays disabled until every style's name is valid.

## Creating and deleting styles

- **New** duplicates the selected style — same font, height, and flags — under the next free name (`Style1`, `Style2`, …), and selects it for editing.
- **Delete** removes the selected style, but only when it's neither `Standard` nor the current style; the button is disabled otherwise.

## Setting the current style

**Set Current** makes the selected style the one new Text is created with, and is disabled once the selected style already is current. The same switch is available without opening this dialog: a dropdown next to the **Text Style** button in the Annotate panel lists every style and lets you pick the current one directly.

A style is only ever a *template at the moment of creation* — its font, weight, and height are copied onto the new Text entity when you draw it, not kept as a live link back to the style. Editing a style afterward, or even deleting it, changes nothing about Text already drawn with it; only what you draw *next* is affected.

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
