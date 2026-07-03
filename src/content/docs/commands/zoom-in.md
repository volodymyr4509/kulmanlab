---
sidebar_position: 2
title: "Zoom In Command — Magnify the Viewport by 1.5× Per Step in KulmanLab CAD"
description: "The Zoom In command multiplies the current zoom level by 1.5× and exits immediately. Centered on the viewport midpoint. Zoom range 0.01–10,000. Use the scroll wheel to zoom toward the cursor instead."
keywords: [CAD zoom in, magnify viewport, zoom command CAD, 1.5x zoom step, kulmanlab]
---

# Zoom In

The `zoomin` command multiplies the current zoom level by **1.5×** and exits immediately, centered on the viewport midpoint. It is the toolbar equivalent of one scroll-wheel tick zoomed toward screen center rather than cursor.

## Zooming in

Click the **Zoom In** toolbar button or type `zoomin` in the terminal. The zoom is applied instantly and the command exits — no click on the canvas required.

## How the 1.5× step works

| Current zoom | After one Zoom In |
|-------------|------------------|
| 1.00× | 1.50× |
| 1.50× | 2.25× |
| 10.00× | 15.00× |
| 6,667× | 10,000× (capped) |

The zoom level is always shown in the **bottom-right corner** of the canvas next to the `zoom` label. The upper limit is **10,000×**; further steps do nothing.

## Toolbar zoom-in vs scroll wheel

| | Zoom In button | Scroll wheel |
|---|--------------|-------------|
| Zoom center | Viewport midpoint | Cursor position |
| Step size | 1.5× per click | ~1.1× per tick |
| Activation required | No | No — works always |
| Best for | Coarse navigation | Precise, cursor-targeted zoom |

## Keyboard reference

There are no keyboard shortcuts for this command. Use the scroll wheel instead — it works at any time without activating any command.

## Related view commands

| Command | What it does |
|---------|-------------|
| [Zoom Out](../zoom-out/) | Divides zoom by 1.5× per step |
| [Fit](../fit/) | Resets zoom to show all entities |
| [Pan](../pan/) | Shifts the viewport without zooming |
