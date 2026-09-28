---
title: Text Command — Place MTEXT Labels in KulmanLab CAD
description: The Text command places a multi-line, richly formatted MTEXT label. Click a position, type in the popup editor, and press Escape to commit. Double-click any existing label to reopen the editor.
keywords: [CAD text command, MTEXT, place text label CAD, text annotation CAD, bold italic CAD, multi-line text CAD, kulmanlab]
group: markup
order: 0
---

# Text

The `text` command places a multi-line text label. After you click a position on the canvas, a popup editor opens in **rich** mode — you can type content, apply bold/italic/underline/strikethrough per character, change fonts and heights, and insert line breaks. Press **Escape** to commit and close the editor.

See the [Text Editor](../../interface/text-editor/) page for the full editor reference, including a comparison of **rich** and **simple** modes.

## Placing a text label

1. Type `text` in the terminal or click the **Text** toolbar button.
2. **Click the anchor position** on the canvas. Or type `X,Y` and press **Enter** for an exact coordinate.
3. The **text editor popup** opens above the new label. Type your content.
4. Press **Escape** to commit the label and close the editor.

New Text copies font, height, bold, italic, line spacing, horizontal alignment, and frame from the current [TextStyle](../text-style/). The built-in `Standard` style uses a height of **1 drawing unit** and Left alignment.

## Editing an existing label

**Double-click** any text label on the canvas to reopen the editor for that label.

## Coordinate entry for the anchor

Instead of clicking, type an exact position:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to place the anchor and open the editor.

## Keyboard reference

**Anchor phase**

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry |
| `,` | Lock X and move to Y entry |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate |

**Text editor phase** (see [Text Editor](../../interface/text-editor/) for the full reference)

| Key | Action |
|-----|--------|
| Any printable character | Insert at cursor |
| `Backspace` / `Delete` | Delete adjacent character or selection |
| `Enter` | Insert a line break |
| `←` / `→` | Move caret |
| `Home` / `End` | Jump to start / end of hard line |
| `Escape` | Commit and close the editor |

## Grip editing — repositioning

A selected text label exposes one grip at the anchor point:

| Grip | Position | What it does |
|------|----------|--------------|
| **Anchor** | Bottom-left of the text | Drag to reposition the label |

## Selecting text

| Method | Behaviour |
|--------|-----------|
| **Click** | Selects if the click lands within the rotated bounding box of the text |
| **Drag right** (strict) | All four corners of the bounding box must lie inside the selection area |
| **Drag left** (crossing) | Any overlap between the text bounding box and the selection area selects it |

## Supported edit commands

| Command | What happens to the text |
|---------|--------------------------|
| [Move](../move/) | Moves the anchor point |
| [Copy](../copy/) | Creates an identical label at a new position |
| [Rotate](../rotate/) | Rotates the anchor position and adds the angle to Rotation Degree |
| [Mirror](../mirror/) | Reflects the anchor point across the mirror axis (text string is not flipped) |
| [Scale](../scale/) | Scales the anchor position and multiplies the height by the scale factor |
| [Delete](../delete/) | Removes the label |

Text does not support **Offset**, **Trim**, or **Extend**.

## Properties

When a text label is selected the properties panel shows:

**General**

| Property | Default | Meaning |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI color index |
| Layer | `0` | Layer assignment |

**Geometry**

| Property | Meaning |
|----------|---------|
| Position X / Position Y | Anchor point coordinates |
| Height | Base text height in drawing units, copied from the current TextStyle when created |
| Rotation Degree | Counter-clockwise rotation in degrees |

**Properties**

| Property | Meaning |
|----------|---------|
| Content | The text string (MTEXT inline codes preserved) |
| Attachment Point | Alignment code (1 = top-left … 9 = bottom-right) |
| Horizontal Alignment | Left, Center, Right, or Justify within the reference width |
| Reference Width | Width used for wrapping and paragraph alignment; `0` means no explicit width |
| Line Spacing | Multiplier applied between text rows |
| Frame | Draws a rectangular frame around the text |

Text does not have Linetype, Linetype Scale, or Thickness properties.

## DXF — MTEXT entity

Text labels are stored as **MTEXT** entities in the DXF file. Bold and italic use inline font-switch codes (`\f`), underline uses `\L`/`\l`, strikethrough uses `\K`/`\k`, and per-character height overrides use `\H`. Reference width, line spacing, paragraph alignment, rotation, and attachment also round-trip. A Text frame is exported with the MTEXT frame flag and AutoCAD-compatible border scale.

## Related commands

| Command | What it does |
|---|---|
| [TextStyle](../text-style/) | Sets the formatting defaults copied by newly created Text |
| [FontManager](../font-manager/) | Manages the fonts available to Text and TextStyle |
