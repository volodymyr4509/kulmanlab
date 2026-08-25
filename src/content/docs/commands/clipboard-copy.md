---
title: ClipboardCopy Command — Copy Entities to the System Clipboard
description: The ClipboardCopy command writes selected entities to the system clipboard as JSON text, together with the layers and linetypes they reference, so they can be pasted into another drawing or another browser tab with ClipboardPaste.
keywords: [CAD clipboard copy, copy entities between drawings, copy CAD objects to clipboard, Ctrl+C CAD, cross-tab copy paste CAD, copy between browser tabs, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

The `ClipboardCopy` command writes the selected entities to your **system clipboard** as JSON text. Because it uses the real clipboard rather than an in-memory buffer, the copied geometry survives outside the drawing: paste it into a different file, a second browser tab, or a window you open later with [ClipboardPaste](../clipboard-paste/).

This is the difference from [Copy](../copy/): Copy duplicates entities inside the current drawing in one gesture, while ClipboardCopy puts them somewhere they can be retrieved from a different drawing entirely.

## Two ways to start

**Pre-select, then copy** — the fast path:

1. Select one or more entities on the canvas.
2. Press `Ctrl+C` (`Cmd+C` on macOS), or type `ClipboardCopy` in the terminal.
3. The entities are written to the clipboard immediately and the command exits.

**Activate, then select** — start with nothing selected:

1. Press `Ctrl+C` or type `ClipboardCopy` with an empty selection.
2. The prompt reads **pick objects to copy — Enter or Space to confirm**.
3. **Select objects** — click to toggle individual entities, or drag to select by area.
4. Press **Enter** or **Space** to copy the selection and exit.

Pressing **Enter** or **Space** while nothing is selected simply ends the command without touching the clipboard.

## What gets copied

The clipboard payload carries more than raw geometry, so a paste into an unrelated drawing still looks right:

| Part | Purpose |
|------|---------|
| **Entities** | The full serialized form of every selected entity |
| **Reference point** | The lower-left corner of the selection's combined bounds — what ClipboardPaste anchors to the cursor |
| **Layers** | Only the layers the copied entities actually reference, by name |
| **Linetypes** | Only the linetypes the copied entities actually reference, by name |

Only *referenced* table entries travel with the copy — not the whole source drawing's layer and linetype tables. Hatch patterns are not bundled at all and don't need to be: a drawing's pattern table is the built-in default set, and any `.pat` files you have uploaded live in a per-user store that is already shared across tabs, so a pasted hatch resolves its own pattern.

## Confirmation

On success the terminal reports how many entities were written:

```
3 entities copied to clipboard
```

If the browser refuses clipboard access, the terminal shows **Copy failed: clipboard access denied** and nothing is written. This is a browser permission decision, not a drawing error — see [Clipboard permissions](#clipboard-permissions) below.

## Selection during the command

| Method | Behaviour |
|--------|-----------|
| **Click** | Toggles the entity under the cursor in/out of the selection |
| **Drag right** (strict) | Adds entities fully inside the box |
| **Drag left** (crossing) | Adds entities that intersect the box boundary |
| **Enter** / **Space** | Confirms the selection and copies |

## Keyboard reference

| Key | Action |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Activate ClipboardCopy |
| `Enter` / `Space` | Copy the current selection, or exit if nothing is selected |
| `Escape` | Cancel without copying |

## Clipboard permissions

Writing to the system clipboard requires browser permission. In practice a copy triggered by a keypress is granted without a prompt in current desktop browsers, but a page that has lost focus, or a browser with strict clipboard settings, can refuse. If you see the access-denied message, click once on the canvas to give the page focus and try again.

Because the payload is ordinary JSON text, anything else you copy afterwards — a line of text, a URL — replaces it. Copy again before pasting if you have used the clipboard for something else in between.

## Supported entities

ClipboardCopy works on every entity type. Entities are serialized with the same mechanism the native `.json` export uses, so nothing is dropped on the way out.

## See also

- [ClipboardPaste](../clipboard-paste/) — read the clipboard back and place the entities
- [Copy](../copy/) — duplicate entities within the current drawing
- [Export Manager](../export-manager/) — save a whole drawing to DXF or JSON
