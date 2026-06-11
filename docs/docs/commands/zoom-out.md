---
sidebar_position: 3
title: "Zoom Out Command — Reduce the Viewport Zoom by 1.5× Per Step in KulmanLab CAD"
description: "The Zoom Out command divides the current zoom level by 1.5× and exits immediately. Centered on the viewport midpoint. Use the scroll wheel to zoom out toward the cursor for finer control."
keywords: [CAD zoom out, reduce viewport zoom, zoom out command, overview CAD, 1.5x zoom step, kulmanlab]
---

# Zoom Out

The `zoomout` command divides the current zoom level by **1.5×** (equivalent to multiplying by ~0.667) and exits immediately, centered on the viewport midpoint. It is the inverse of [Zoom In](./zoom-in).

## Zooming out

Click the **Zoom Out** toolbar button or type `zoomout` in the terminal. The zoom is applied instantly and the command exits — no click on the canvas required.

## How the 1.5× step works

| Current zoom | After one Zoom Out |
|-------------|-------------------|
| 1.50× | 1.00× |
| 2.25× | 1.50× |
| 10.00× | 6.67× |
| 0.015× | 0.01× (floored) |

The zoom level is always shown in the **bottom-right corner** of the canvas. The lower limit is **0.01×**; further steps do nothing.

## Toolbar zoom-out vs scroll wheel

| | Zoom Out button | Scroll wheel |
|---|----------------|-------------|
| Zoom center | Viewport midpoint | Cursor position |
| Step size | 1.5× per click | ~1.1× per tick |
| Activation required | No | No — works always |
| Best for | Stepping back to see more context | Smooth, cursor-anchored zoom-out |

## Keyboard reference

There are no keyboard shortcuts for this command. Use the scroll wheel instead — it works at any time without activating any command.

## Related view commands

| Command | What it does |
|---------|-------------|
| [Zoom In](./zoom-in) | Multiplies zoom by 1.5× per step |
| [Fit](./fit) | Resets zoom to show all entities |
| [Pan](./pan) | Shifts the viewport without zooming |
