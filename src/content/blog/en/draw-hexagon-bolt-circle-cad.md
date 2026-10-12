---
title: "How to Draw a Hexagon or Bolt Circle in CAD (Polygon and Polar Array)"
description: "Draw a regular polygon from a centre and radius or from one edge, then repeat holes round a bolt circle with a polar array — free in your browser, with exact typed values."
keywords: [draw hexagon in CAD, regular polygon CAD, polar array CAD, bolt circle drawing, bolt hole pattern CAD, circular pattern CAD, hex nut drawing, draw octagon CAD, PCD bolt circle, free CAD polygon tool]
date: 2026-10-11
author: KulmanLab
tag: Guide
---

To draw a regular polygon in CAD, give the number of sides, pick the centre, then give a radius — or pick one edge and let the rest follow. To draw a bolt circle, draw one hole and repeat it round the centre with a polar array. This guide does both, with exact numbers, in a browser at [app.kulmanlab.com](https://app.kulmanlab.com) — free, nothing to install, and the file never leaves your computer.

We build [KulmanLab](https://kulmanlab.com), so the steps below use its commands. The ideas — across-flats versus across-corners, pitch circle diameter, whether copies turn as they go round — are the same in any CAD program.

## Draw a regular polygon

A regular polygon has equal sides and equal angles: a hexagon for a nut, an octagon for a sign, a pentagon for a decorative cut-out. In KulmanLab it is the **Polygon** command.

1. Type `polygon` in the terminal, or use the Polygon button in the Shapes panel.
2. Enter the **number of sides** — any whole number from 3 to 1024 — and press **Enter**. The prompt is pre-filled with the count you used last.
3. **Click the centre**, or type `X,Y` for an exact point.
4. **Click the radius**, or type it and press **Enter**.

The result is a single closed polyline, so everything you can do to a polyline — move, rotate, offset, scale — works on it.

### Across flats or across corners?

This is the part that trips people up. "Radius" can mean two different distances, and a hexagon is specified by one of them depending on what you are drawing:

| | Measured to | Typical use |
|---|---|---|
| **Inside on** (the default) | The corners | A shape that must fit inside a given circle |
| **Inside off** | The middle of each edge | A shape with a given width across flats — nuts, bolt heads, spanner sizes |

Press `I` at the radius prompt to switch. A hex nut is sold by its width across flats, so use **Inside off** and type *half* of it. For an M8 nut, 13 mm across flats:

1. `polygon`, then `6` for the sides, then click or type the centre.
2. Press `I` to turn Inside off.
3. Type `6.5` and press **Enter**.

The flats are exactly 13 mm apart; the corners reach 7.51 mm from the centre, about 15 mm across corners. Type the radius rather than clicking it and the polygon sits with its lowest edge level, flat on the bottom. Click it instead and the polygon takes its orientation from where you click.

### From one edge

Sometimes you know a side length, not a radius — an octagonal tabletop with 20 mm sides, say. Press `E` at the first-point prompt to switch to **Edge** mode, then pick the two ends of one edge. The remaining corners are built counter-clockwise, to the left of that edge. Typing `0,0` and then `20,0` puts a 20 mm edge along the X axis with the polygon above it.

## Draw a bolt circle

A bolt circle — or pitch circle, "PCD" on drawings — is a ring of holes equally spaced round a centre. You draw one hole, then repeat it. In KulmanLab that is **ArrayPolar**.

Take six 6.6 mm holes on a 50 mm pitch circle diameter, centred on the origin:

1. **Draw the first hole.** Run `circle`, type the centre as `25` `,` `0` — half the PCD along the X axis — press **Enter**, then type the radius `3.3` and press **Enter**.
2. **Select it** by clicking the circle.
3. **Run the polar array.** Type `arraypolar`, or use the ArrayPolar button in the Edit panel.
4. **Pick the centre of the pattern** — type `0,0`.
5. The terminal shows the array as it stands — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — and the five copies preview live. Press **Enter** to accept.

That is the whole bolt circle. For a different count, press `I` before confirming and type the number of items — the original counts as one, and the angle between them is worked out for you. Or press `A` and type the spacing in degrees instead; the fill angle is restated to match.

A few details that matter:

- **Fill** is the angle from the first item to the last. The default 360° spreads items round a full circle; a smaller number spreads them over an arc — a row of holes round a quarter turn, say. A negative angle runs clockwise.
- **Rotate** decides whether each copy turns as it goes round. For circular holes it makes no difference. For a slot, a tooth or a bracket it does: on, every copy faces the centre as the original did; off, every copy keeps the original's orientation and is only moved into place. Press `R` to flip it before confirming.
- The array makes **copies** — the original stays where it is, and every item is an ordinary entity you can edit afterwards.

## Put them together: a flange

Draw a hexagon for the outline, a circle in the middle for the bore, and a bolt circle for the mounting holes. Three commands, every dimension typed exactly, and nothing to measure off the screen.

If the part is going to a laser cutter, delete any construction circle you drew to find the pitch circle — it would be cut like everything else — and check the file against our guide to [preparing a DXF for laser cutting](/blog/prepare-dxf-for-laser-cutting/). The polygon is a closed path by construction, which is the most common thing cutting services reject files for.

## What this won't do

- **Regular polygons only.** Every side is equal. An irregular outline — a shape with a few sides longer than others — is a [polyline](/docs/commands/polyline/) you draw point by point.
- **2D only.** This draws flat outlines. It will not give you a modelled nut or a threaded bolt.
- **Desktop browsers only** — Chrome, Firefox, Safari and Edge. There is no mobile version.

---

*Related: [Polygon](/docs/commands/polygon/) and [ArrayPolar](/docs/commands/array-polar/) for every option and key, [Circle](/docs/commands/circle/) for typing exact radii, and [ArrayGrid](/docs/commands/array-grid/) for repeating objects in rows and columns instead of round a centre.*
