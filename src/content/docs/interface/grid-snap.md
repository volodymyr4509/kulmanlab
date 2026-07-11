---
title: Grid & Snap — Align Drawings to a Regular Grid in KulmanLab CAD
description: The Grid and Snap toggles in KulmanLab CAD overlay a reference grid on the canvas and lock cursor movement to grid points. The grid spacing adapts automatically to the current zoom level so it always shows round model values.
keywords: [CAD grid, snap to grid, grid spacing, drawing aids, kulmanlab, grid dots, orthogonal snap]
group: interface
order: 1
---

# Grid & Snap

Two toggle buttons in the control bar let you overlay a reference grid and lock the cursor to its intersections while drawing.

| Button | What it does |
|--------|-------------|
| **Grid** | Shows a visual dot or line grid on the canvas |
| **Snap** | Locks the cursor to the nearest grid point when no geometry snap is closer |

The two toggles are independent — you can show the grid without snapping, snap without showing the grid, or use both together.

## Enabling grid and snap

Click **Grid** or **Snap** in the control bar toolbar. Active state is highlighted. Settings are persisted across sessions.

When **Snap** is enabled, the grid automatically switches its display from lines to **dots** — the dots mark the exact points the cursor will snap to.

## Adaptive grid spacing

The grid spacing adjusts automatically as you zoom so that grid lines are always a comfortable distance apart on screen (~40 px). The step is always a "nice" number — a multiple of 1, 2, or 5 at any power of ten:

| Example zoom / model scale | Grid step |
|---------------------------|-----------|
| Zoomed out (large area) | 100, 500, 1000 … |
| Medium zoom | 10, 20, 50 … |
| Zoomed in (fine detail) | 1, 2, 5 … |
| Very close | 0.1, 0.2, 0.5 … |

This means every snap point lands on a round coordinate in model space — no floating-point offsets accumulate.

## Snap priority

**Endpoint and intersection snaps always take priority over the grid.** The cursor snaps to a grid point only when it is not near any geometry snap candidate (endpoint, midpoint, center, or intersection).

This means you can draw with snap-to-grid enabled and still snap precisely to existing geometry when the cursor passes close enough to it. The grid is a fallback, not an override.

## Layout mode

- **Model space** — dots or lines fill the entire visible canvas area.
- **Layout (paper) space** — dots are clipped to the paper rectangle and do not extend outside it.
- **Inside a viewport** — the grid follows the model coordinate system at the viewport's scale, so dots align with the same model units regardless of the viewport magnification.

## Typical workflow

1. Turn on **Grid** and **Snap** before starting a drawing that requires regular spacing.
2. Zoom to the level where the grid step matches your desired increment (e.g. zoom until dots are 10 units apart).
3. Draw — the cursor snaps to grid points automatically. Existing geometry still snaps normally when you are close to it.
4. Turn **Snap** off when you need free cursor movement or want to snap only to geometry.
