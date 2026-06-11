---
sidebar_position: 4
title: Text Editor — Rich-Text Formatting in KulmanLab CAD
description: The KulmanLab CAD text editor lets you place multi-line, richly formatted MTEXT labels with bold, italic, strikethrough, per-character font and height overrides, word-wrap, and full cursor navigation.
keywords: [CAD text editor, MTEXT, bold italic CAD, text formatting CAD, multi-line text CAD, word wrap CAD, kulmanlab]
---

# Text Editor

The text editor opens whenever you place a new text label with the `text` command or double-click an existing text entity. It supports multi-line content, per-character formatting, and word-wrap.

## Opening the editor

| Action | Result |
|--------|--------|
| `text` command → click position | Creates a new text entity and opens the editor |
| Double-click an existing text entity | Re-opens the editor for that entity |
| `Escape` inside the editor | Closes the editor and keeps all changes |

## Toolbar

The toolbar floats above the text's bounding box and stays anchored to the entity as you pan or zoom.

### Bold · Italic · Strikethrough

| Button | Shortcut | What it does |
|--------|----------|--------------|
| **B** | — | Toggle bold |
| *I* | — | Toggle italic |
| ~~S~~ | — | Toggle strikethrough |

**How toggling applies:**

- **With a text selection** — the style is applied to exactly the selected characters only.
- **No selection, cursor in existing text** — toggles the style on the whole entity (all segments).
- **Empty text or new entity** — the style is stored on the empty segment and applied to every character you type from that point on.

The button appears highlighted (active) when every character in the current selection — or the character immediately to the left of the cursor — has that style set.

### Font

The dropdown lists a curated set of cross-platform typefaces (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, Impact). The top option **Arial** is the default.

- **With a selection** — overrides the font for selected characters only.
- **No selection** — applies the font to the whole entity.

The dropdown reflects the font of the character left of the cursor when there is no selection.

### Height

The number field sets the **cap height** (height of a capital letter) in drawing units.

- **With a selection** — overrides the height for selected characters, independently of the entity's base height.
- **No selection** — changes the entity's base height (applies to all characters that do not have an individual height override).

The field reflects the height of the character left of the cursor. Leave it blank to use the entity default.

## Cursor and navigation

| Key | Action |
|-----|--------|
| `←` / `→` | Move caret one character left or right |
| `Home` | Jump to the start of the current hard line |
| `End` | Jump to the end of the current hard line |
| `Shift` + `←` / `→` | Extend or shrink the selection |
| `Backspace` | Delete the character to the left (or the selection) |
| `Delete` | Delete the character to the right (or the selection) |
| `Enter` | Insert a line break |
| `Escape` | Close the editor |

The cursor height automatically matches the cap height of the adjacent character, including the smaller size used for subscript and superscript.

## Word wrap

When a text entity has a **reference width** set, long lines are soft-wrapped at word boundaries to fit within that width.

To set or change the reference width while the entity is selected, drag the **resize grips** — the thin rectangles on the left and right edges of the dashed bounding box. The content reflows in real time as you drag.

Setting the reference width to zero (drag the grips together or delete the value in the properties panel) removes word wrap and lets lines grow freely.

## Multi-line text

Press `Enter` to insert a hard line break. Each hard line is independent — `Home` and `End` navigate within the current hard line only.

Hard line breaks and per-character formatting are stored using the MTEXT format and survive a full DXF round-trip.

## DXF compatibility

Text entities are stored as **MTEXT** in DXF files. Bold and italic are encoded as `\L`, `\K`, `\O`, and inline font switches (`\f`). Per-character height is encoded as `\H`. All formatting is preserved on export and readable by AutoCAD, LibreCAD, and other DXF-compatible applications.
