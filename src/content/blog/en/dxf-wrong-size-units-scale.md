---
title: "Why Your DXF Opened at the Wrong Size (and How to Fix It)"
description: "A DXF that opens 25.4× too small or 1000× too big is a units mismatch, not a broken file. How to identify the ratio, rescale the drawing, and check the fix."
keywords: [DXF wrong scale, DXF wrong size, DXF units, DXF mm or inches, DXF imported too small, DXF scale factor, DXF 25.4, fix DXF scale, DXF units mismatch, rescale DXF]
date: 2026-09-04
author: KulmanLab
tag: Guide
---

A DXF opens and the part that should be 40 mm across measures 1.575. Or a floor plan arrives the size of a city block. The file isn't broken and nobody did anything wrong — the drawing is fine, and the number attached to it got lost on the way.

That is worth understanding before you rescale anything, because the fix takes ten seconds once you know which ratio you are looking at, and guessing at it is how you end up cutting the wrong size twice.

## DXF barely carries units at all

A DXF stores coordinates as plain numbers. A line from `0,0` to `40,0` is forty *somethings* long. The format does not attach a unit to a coordinate, and there is nowhere it could — the number is the geometry.

The nearest thing is a header variable called `$INSUNITS`, a single code for the whole file: `1` for inches, `4` for millimetres, `6` for metres, and so on. Two things make it weaker than it sounds. It is one value for an entire drawing, so it cannot describe a file assembled from mixed sources. And it is advisory: many applications read it only when *inserting* one drawing into another, and ignore it entirely when you simply open the file, on the reasonable grounds that the person opening a drawing usually knows what they drew.

So "40" travels intact and "millimetres" does not. Every wrong-size DXF you will ever receive is that sentence.

## Identify the ratio first

Measure one feature whose real size you actually know — a hole diameter, a sheet edge, a standard fixing centre. Divide the size it should be by the size it measures. The result is almost always one of these:

| Ratio | What happened |
|---|---|
| **25.4** | Drawn in inches, being read as millimetres |
| **0.03937** | Drawn in millimetres, being read as inches |
| **1000** | Drawn in metres, being read as millimetres |
| **0.001** | Drawn in millimetres, being read as metres |
| **12** | Feet read as inches |
| **304.8** | Feet read as millimetres |

If your number is one of those, you have a units mismatch and nothing else, and the rest of this guide takes a minute.

If it is not — 1.37, say, or 3.2 — stop. That is not a units problem, and rescaling will make a drawing that is wrong in a harder way to spot. Skip to the last section.

## Fix it

You need something that measures and something that scales. Any CAD tool does this; here it is in [KulmanLab](https://kulmanlab.com/), which opens a DXF in a browser tab with nothing to install:

1. Open the file — drag it onto the page, or use [Import](/docs/commands/import/).
2. Run [Distance](/docs/commands/distance/) and pick the two ends of your known feature. Snapping matters here: pick the actual endpoints, not somewhere near them, or you will bake your own error into the factor.
3. Divide. Known size ÷ measured size. A 40 mm hole reading 1.575 gives 40 ÷ 1.575 ≈ **25.4**.
4. Select everything, run [Scale](/docs/commands/scale/), pick a base point, and type the factor.

The base point stays fixed while everything else moves, so put it somewhere you can reason about — a corner of the part, or the origin. For a drawing you are about to send for cutting, the origin is usually the sensible choice.

It helps that KulmanLab has no units setting of its own. Coordinates are just numbers, which is exactly the state you want a drawing in while you are working out what its numbers mean. There is no unit conversion happening behind you and nothing to fight.

## Check the fix before you trust it

Measure a *second* feature, somewhere else in the drawing, that you also know the real size of. Then check it.

This is the step people skip, and it is the only one that catches the bad case. If the second measurement now comes out right, the drawing was uniformly in the wrong units and it is now uniformly in the right ones. Done.

If the second measurement is *still* wrong, and wrong by a different amount, the drawing was never a simple units mismatch. You have just scaled an inconsistent drawing, which is worse than where you started, because the error is no longer a clean ratio anyone can spot.

[Area](/docs/commands/area/) is a useful second opinion here, especially on sheet goods. Area scales by the *square* of the factor, so a 25.4× length error shows up as a 645× area error — a discrepancy that is hard to talk yourself out of.

## Stop it happening next time

Units get lost between people, so the fix lives there too.

**Say the unit when you send the file.** One line in the message. "All dimensions in mm." This costs nothing and removes the entire problem.

**Send a reference dimension with it.** Tell them one real measurement — "the outer plate is 300 mm wide". Now the receiver can verify the file rather than assume it, and if anything did go wrong they can fix it in a minute without coming back to you.

**Ask, when you are the one receiving.** If a file arrives with no stated units and you are about to cut material from it, one message is cheaper than one ruined sheet.

**Draw in the units your output expects.** Laser cutting, CNC and most fabrication workflows expect millimetres. If that is where the file is going, draw it in millimetres and there is no conversion left to get wrong. See [preparing a DXF for laser cutting](/blog/prepare-dxf-for-laser-cutting/).

## When it is not a units problem

If your ratio was not a clean unit conversion, the likely causes are different in kind:

- **The drawing mixes scales.** Someone drew part of it at 1:1 and pasted in a detail at 1:5, or a block was inserted at a scale factor and never corrected. Fix the offending geometry rather than the whole file.
- **You measured paper-space geometry.** A title block or annotation frame is drawn at sheet size, not model size. Measure something that is part of the actual object.
- **You measured the wrong thing.** A nominal 40 mm hole may be drawn at 39.8 for fit, and a "300 mm" panel may be 300 to the outside of a rebate you cannot see. Pick a feature with an unambiguous edge.

In each of those the answer is to find out what the drawing actually is, not to scale it. A drawing whose parts disagree with each other will keep costing you material until someone opens it and looks.

---

*Related: [Distance](/docs/commands/distance/) for measuring, [Scale](/docs/commands/scale/) for the fix, [Area](/docs/commands/area/) for the second opinion, and [Export Manager](/docs/commands/export-manager/) for what each format carries when you send it back out.*
