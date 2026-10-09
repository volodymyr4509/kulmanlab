---
title: ClipboardPaste Command — Paste Entities from the System Clipboard
description: The ClipboardPaste command reads entities previously written by ClipboardCopy from the system clipboard and places them at a picked insertion point, adding any layers and linetypes the destination drawing is missing.
keywords: [CAD clipboard paste, paste entities between drawings, paste CAD objects, Ctrl+V CAD, cross-tab copy paste CAD, paste between browser tabs, merge layers on paste, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

The `ClipboardPaste` command reads entities that [ClipboardCopy](../clipboard-copy/) wrote to the **system clipboard** and places them in the current drawing at a point you pick. Because the clipboard is the real system one, the source can be a different drawing, a different browser tab, or a session from earlier in the day.

## How to paste

1. Press `Ctrl+V` (`Cmd+V` on macOS), or type `ClipboardPaste` in the terminal.
2. The prompt reads **reading clipboard…** while the browser hands over the clipboard text.
3. Once loaded, the prompt changes to **pick insertion point** and a preview of the pasted geometry follows your cursor.
4. **Click** to place the entities. They are added to the drawing and left selected.

The preview is anchored by the copy's **reference point** — the lower-left corner of the original selection's combined bounds. That corner sits under your cursor, so the relative arrangement of the copied entities is preserved exactly.

## What happens on paste

| Step | Behaviour |
|------|-----------|
| **New identities** | Every pasted entity is given a fresh id, so pasting twice yields two independent sets |
| **Translation** | Entities are offset by cursor − reference point |
| **Layer merge** | Any referenced layer the destination drawing lacks is added by name |
| **Linetype merge** | Any referenced linetype the destination drawing lacks is added by name |
| **Selection** | The previous selection is cleared and the pasted entities become the selection |

### Layer and linetype merging

Missing table entries are added; **existing ones are left alone**. If the clipboard carries a layer named `WALLS` in red and the destination already has a `WALLS` layer in blue, the destination's definition wins and the pasted entities join it — they will be blue. Nothing in the destination drawing is redefined by a paste.

This matters when copying between drawings with different layer conventions: check the [Layer Manager](../layer-manager/) after a cross-drawing paste if the colours are not what you expected.

## When the clipboard has nothing to paste

ClipboardPaste only accepts payloads that ClipboardCopy produced. Anything else on the clipboard — plain text, a URL, an image, JSON from another application — is rejected and the terminal reports:

```
Clipboard has no copied entities
```

If the browser refuses clipboard access entirely, the message is **Blocked by the browser: allow clipboard in site settings, by the address bar** instead. Both end the command without changing the drawing.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Ctrl+V` / `Cmd+V` | Activate ClipboardPaste |
| `Escape` | Cancel — the entities are discarded and nothing is added |

Escaping during the read phase is safe: if the clipboard resolves after you have already cancelled or started another command, the late result is discarded rather than interrupting whatever is active by then.

## Copying between tabs

The typical cross-drawing workflow:

1. Open the source drawing, select the geometry, press `Ctrl+C`.
2. Switch to the other tab — or open a second tab on the app and load a different file.
3. Press `Ctrl+V` and click an insertion point.

Both tabs are the same origin and share the system clipboard, so nothing is uploaded and no server is involved. The payload is JSON text on your own clipboard the entire time.

## Supported entities

Every entity type that ClipboardCopy can write, ClipboardPaste can read back — the same serialization the native `.json` format uses.

## See also

- [ClipboardCopy](../clipboard-copy/) — write the selection to the clipboard
- [Copy](../copy/) — duplicate entities within the current drawing
- [Layer Manager](../layer-manager/) — inspect the layers a paste brought in
