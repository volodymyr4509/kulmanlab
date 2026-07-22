---
title: Text Editor — Rich and Simple Modes in KulmanLab CAD
description: The KulmanLab CAD text editor has two modes — rich (per-character formatting, multi-line, word-wrap for Text and Multileader) and simple (uniform style, single-line for dimension entities). A mode chip in the header shows which mode is active.
keywords: [CAD text editor, MTEXT, bold italic CAD, text formatting CAD, multi-line text CAD, word wrap CAD, rich text editor, simple text editor, dimension text editor, custom font CAD, upload ttf CAD, kulmanlab]
group: interface
order: 5
---

# Text Editor

The text editor opens when you place or double-click an editable entity. A small **mode chip** in the header — **rich** (accent color) or **simple** (muted) — shows which mode is active for the current entity.

## Editor modes

### Rich mode

Used by: **Text** (MTEXT labels) and **Multileader** annotations.

| Feature | Behaviour |
|---------|-----------|
| Bold / Italic / Strikethrough | Per-character (apply to selection, or whole entity if no selection) |
| Font and Height | Per-character override, or whole-entity default |
| Alignment (Left / Center / Right / Justify) | **Text only** — not available for Multileader |
| `Enter` | Inserts a hard line break |
| `Shift+←/→` | Extends or shrinks a text selection |
| `Home` / `End` | Jump to start / end of the current hard line |
| Word wrap | Supported via reference-width resize grips |

### Simple mode

Used by: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

The editor is pre-seeded with the current dimension's rendered label so you can position the cursor and edit the value directly.

| Feature | Behaviour |
|---------|-----------|
| Bold / Italic / Font / Height | Available — applies to the **entire** label at once |
| Per-character formatting | Not supported |
| `Enter` | **Commits** the value and closes the editor (no line break) |
| Multi-line | Not supported |
| Word wrap | Not supported |

## Opening the editor

| Action | Result |
|--------|--------|
| `text` command → click position | Creates a new text entity and opens the editor (**rich**) |
| Double-click an existing **Text** entity | Re-opens the editor in **rich** mode |
| Double-click an existing **Multileader** | Opens the editor in **rich** mode |
| Double-click a **dimension** entity | Opens the editor in **simple** mode |
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

The dropdown groups available typefaces into **Default** (the built-in sans-serif), **User** (your own uploaded fonts, if any), **Free** (a set of bundled Google Fonts), and **System** (common OS fonts such as Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, and Impact).

- **With a selection** — overrides the font for selected characters only.
- **No selection** — applies the font to the whole entity.

The dropdown reflects the font of the character left of the cursor when there is no selection.

Not limited to the built-in list — click the **Font Manager** button in the toolbar to upload your own `.ttf` file and add it to the **User** group. See [Font Manager](../../commands/font-manager/) for details.

### Height

The number field sets the **cap height** (height of a capital letter) in drawing units.

- **With a selection** — overrides the height for selected characters, independently of the entity's base height.
- **No selection** — changes the entity's base height (applies to all characters that do not have an individual height override).

The field reflects the height of the character left of the cursor. Leave it blank to use the entity default.

### Alignment

Four buttons — **Align Left**, **Align Center**, **Align Right**, **Justify** — set paragraph alignment. Available for **Text** entities only; Multileader and dimension labels don't show these buttons.

- Clicking a button re-justifies every row within the entity's existing bounding box — it doesn't move the insertion point or resize the box.
- Clicking the already-active button clears the override, falling back to the column implied by the entity's attachment point.
- **Justify** stretches inter-word spacing so each row fills the full row width.

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

## Copy, cut, and paste

| Key | Action |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Copy the selected text |
| `Ctrl+X` / `Cmd+X` | Cut the selected text |
| `Ctrl+V` / `Cmd+V` | Paste at the cursor |

Copy and cut require an active text selection. Pasted text is always plain — it takes on the formatting (bold, italic, font, height) already at the cursor rather than carrying over the formatting it had when copied.

In **rich mode**, line breaks in the pasted text are preserved. In **simple mode**, line breaks are stripped, since dimension labels are single-line.

## Word wrap

When a text entity has a **reference width** set, long lines are soft-wrapped at word boundaries to fit within that width.

To set or change the reference width while the entity is selected, drag the **resize grips** — the thin rectangles on the left and right edges of the dashed bounding box. The content reflows in real time as you drag.

Setting the reference width to zero (drag the grips together or delete the value in the properties panel) removes word wrap and lets lines grow freely.

## Multi-line text

Press `Enter` to insert a hard line break. Each hard line is independent — `Home` and `End` navigate within the current hard line only.

Hard line breaks and per-character formatting are stored using the MTEXT format and survive a full DXF round-trip.

## DXF compatibility

Text entities are stored as **MTEXT** in DXF files. Bold and italic are encoded as `\L`, `\K`, `\O`, and inline font switches (`\f`). Per-character height is encoded as `\H`. All formatting is preserved on export and readable by LibreCAD, FreeCAD, and other DXF-compatible applications.
