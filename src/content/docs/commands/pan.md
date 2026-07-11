---
title: Pan Command — Click-and-Drag Viewport Navigation in KulmanLab CAD
description: The Pan command enters a persistent drag-to-scroll mode. Click and drag anywhere on the canvas to shift the view without changing the zoom level. Middle-click drag works at any time without activating Pan.
keywords: [CAD pan viewport, pan command, drag to navigate, canvas scroll CAD, viewport navigation, kulmanlab]
group: navigate
order: 1
---

# Pan

The `pan` command enters a persistent drag-to-scroll mode — click and drag anywhere on the canvas to shift the view. Zoom level is unchanged. Pan mode stays active until you press `Escape`, so you can drag multiple times in one activation.

## Panning the view

1. Type `pan` in the terminal or click the **Pan** toolbar button.
2. **Click and drag** anywhere on the canvas to shift the view.
3. Release and drag again as many times as needed.
4. Press `Escape` to exit pan mode.

## Middle-click drag — pan without activating the command

The fastest way to pan: **hold the middle mouse button and drag** at any time, even while another command is active. No command activation needed. Releasing the middle button returns to whatever state you were in.

## Pan vs zoom controls

| Action | Effect | Requires Pan mode? |
|--------|--------|-------------------|
| Left-click drag (Pan mode) | Shifts viewport | Yes |
| Middle-click drag | Shifts viewport | No — works always |
| Scroll wheel | Zooms toward cursor | No — works always |
| Double-click middle button | Fit all entities | No — works always |
| [Zoom In](../zoom-in/) / [Zoom Out](../zoom-out/) | Steps zoom 1.5× | No |
| [Fit](../fit/) | Fits all entities in view | No |

## Keyboard reference

| Key | Action |
|-----|--------|
| `Escape` | Exit pan mode |

## Tips

- Use the scroll wheel to zoom toward a target area, then pan to fine-tune position.
- **Double-click the middle mouse button** triggers [Fit](../fit/) instantly — the fastest way to reset a lost view.
- If you are mid-command (e.g., placing a line endpoint), middle-click drag to pan without cancelling the command.
