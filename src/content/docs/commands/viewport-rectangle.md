---
title: ViewportRectangle Command — Create a Viewport in a Layout in KulmanLab CAD
description: The ViewportRectangle command creates a viewport in a paper layout by picking two opposite corners. The viewport shows the model space entities at the layout's default scale.
keywords: [viewport rectangle, create viewport, layout viewport, paper space viewport, kulmanlab]
---

# ViewportRectangle

The `ViewportRectangle` command creates a new viewport in the active paper layout by picking two opposite corners. Only available in layout space.

## Creating a viewport

1. Switch to a paper layout using the tab at the bottom of the screen.
2. Type `ViewportRectangle` in the terminal or click the **Viewport Rectangle** toolbar button.
3. **Click the first corner**, or type `X,Y` and press **Enter** for an exact coordinate.
4. **Click the opposite corner** — the viewport is placed immediately. Coordinate entry works here too.

The new viewport shows the full model at the layout's default scale. Use the scroll wheel inside the viewport to zoom, or middle-drag to pan the model view.

## Coordinate entry

At either corner step you can type an exact coordinate:

1. Type the X value.
2. Press `,` — the terminal shows `[X], [Y{cursor}]`.
3. Type the Y value.
4. Press **Enter** to place the point.

## Keyboard reference

| Key | Action |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X coordinate entry |
| `,` | Lock X and move to Y entry |
| `Enter` | Confirm typed coordinate |
| `Escape` | Cancel |

## Editing a viewport

After placing a viewport, click it to select it:

- **Drag the edges or corners** to resize.
- **Drag the center grip** to move it.
- Use the **scale selector** in the control bar to set an exact scale (e.g. 1:50). To enter a scale not in the list, type it directly in the input field at the bottom of the dropdown — accepts ratio format (`1:200`, `5:1`) or a plain decimal (`0.005`), then press **Enter**.
- Right-click a viewport and use **Lock** to prevent accidental changes.

## Notes

- ViewportRectangle is only available when a paper layout tab is active. Running it in model space shows an error message and exits.
- To copy an existing viewport, use [ViewportCopy](../viewport-copy/).
