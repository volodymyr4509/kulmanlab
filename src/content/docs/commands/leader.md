---
sidebar_position: 10
title: Leader Command — Draw Multileader Annotations with Arrowhead and Text in KulmanLab CAD
description: "The Leader command draws a four-phase multileader annotation: arrowhead tip, dogleg elbow, text position, and typed label. Text direction adjusts automatically based on dogleg position. Import-only in DXF — leaders are not written on save."
keywords: [CAD leader command, multileader annotation, leader CAD, arrow label annotation, dogleg leader, text direction CAD, kulmanlab]
---

# Leader

The `leader` command draws a multileader annotation in four steps: an arrowhead that touches a feature, a leader line that bends at a dogleg, a text anchor, and a typed label. Of all annotation commands, Leader is the only one that includes an interactive text-input phase with a blinking cursor preview.

## Anatomy of a multileader

```
  ◄── arrowhead tip  (step 2 — touches the feature)
      \
       \  leader line
        \
         ●──── dogleg (step 3) ──── text anchor (step 4)
                                    Label text  (step 5)
```

- **Arrowhead tip** — the pointed end placed at the feature being annotated.
- **Dogleg** — the elbow where the leader line bends toward the text.
- **Text anchor** — where the label is positioned. Text aligns left or right automatically.

## Drawing a leader

1. Type `leader` in the terminal or click the **Leader** toolbar button.
2. **Click the arrowhead tip**, or type `X,Y` and press **Enter** for an exact coordinate.
3. **Click the dogleg** — the bend in the leader. Angle locks to 45° increments; type a length and press **Enter** for precise placement. Or type `X,Y` to enter an absolute coordinate.
4. **Click the text position** — where the label anchors. Same options apply: click, angle-lock + length, or `X,Y`.
5. **Type the label text** — the canvas preview updates live with a blinking cursor. Press **Enter** to place.

## Coordinate entry (all point phases)

At any point-picking step (tip, dogleg, text position) you can type an exact coordinate instead of clicking:

1. Type the X value (digits, `.`, or `-`).
2. Press `,` — the terminal shows `[X], [Y{cursor}]` confirming X is locked.
3. Type the Y value.
4. Press **Enter** to place the point.

## Angle locking (steps 3 and 4)

After each placed point, the command snaps to 45° axes when the cursor is far enough away. While locked:
- The preview snaps to the axis.
- Type a length and press **Enter** to place the next point at that exact distance.

Angle locking and coordinate entry are mutually exclusive — once you type a digit without a prior `,`, the command interprets it as a distance (angle lock must be active). To enter an absolute coordinate instead, start with the X number followed by a comma.

## Text label editing

While typing the label in step 5, you can navigate and edit the text before placing:

| Key | Action |
|-----|--------|
| Any printable character | Insert at the cursor position |
| `←` / `→` | Move the cursor left or right |
| `Backspace` | Delete the character to the left of the cursor |
| `Delete` | Delete the character to the right of the cursor |
| `Enter` | Place the leader |

## Automatic text direction

The text alignment adjusts to the cursor position relative to the dogleg:

| Cursor position | Text direction |
|-----------------|---------------|
| To the **right** of the dogleg | Left-to-right from the text anchor |
| To the **left** of the dogleg | Right-to-left (anchored on the right side) |

No manual adjustment needed — move the cursor to the side where you want the label and it aligns correctly.

## Keyboard reference

**Point phases (tip, dogleg, text position)**

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start typing X coordinate (then `,` to lock X and enter Y) |
| `,` | Confirm X and move to Y entry |
| `0`–`9`, `.`, `-` | Build up distance when angle-locked |
| `Backspace` | Delete last typed character |
| `Enter` | Confirm typed coordinate or distance |

**Text input phase**

| Key | Action |
|-----|--------|
| Printable character | Insert at cursor |
| `←` / `→` | Move cursor |
| `Backspace` | Delete left |
| `Delete` | Delete right |
| `Enter` | Place the leader |

| Key | Action |
|-----|--------|
| `Escape` | Cancel and reset to step 2 |

## Editing an existing leader

**Double-click** a placed multileader to reopen the text editor in **rich** mode. In rich mode you can apply bold, italic, and per-character font or height overrides, and insert line breaks with `Enter`. Press **Escape** to commit and close.

See [Text Editor — rich mode](../../interface/text-editor/#rich-mode) for the full reference.

## Adding and removing arms

- To add an extra arrowhead arm to an existing leader: [Leader+](../leader-add/)
- To remove an arm from a leader that has two or more: [Leader−](../leader-remove/)

## DXF — import only

**Leaders are import-only.** `MLEADER` entities from DXF files are read and displayed correctly, but leaders drawn in the editor are **not written** when saving a DXF file. Use leaders for visual annotation; avoid relying on them for round-trip workflows.
