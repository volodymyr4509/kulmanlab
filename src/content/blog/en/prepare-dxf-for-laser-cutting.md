---
title: "How to Prepare a DXF File for Laser Cutting"
description: "Why cutting services reject DXF files, and how to fix yours — closed paths, units, kerf, and layers — free in your browser with nothing to install."
keywords: [DXF for laser cutting, prepare DXF laser cutter, laser cutting file format, DXF rejected laser cutting, closed paths DXF, kerf allowance laser, laser cutting file setup, DXF units laser, cut score engrave layers, free DXF editor laser]
date: 2026-09-02
author: KulmanLab
tag: Guide
---

A DXF for laser cutting needs four things: closed paths, correct units, cut geometry only — no dimensions, notes or hatching — and layers that separate cut from score and engrave. This guide covers each, and how to check yours before a service rejects it.

You can do all of it free in a browser at [app.kulmanlab.com](https://app.kulmanlab.com) — no install, no account, and the file never leaves your computer. This is the workflow we originally built KulmanLab for, so the caveats that apply to other CAD tasks mostly don't apply here: laser cutting is 2D, and DXF is what cutting services want.

## Why files get rejected

Five reasons account for nearly all of it.

**Open paths.** A shape that looks closed but has a hair-thin gap at one corner isn't a region — it's a set of disconnected lines. Cutters need to know what's inside and what's outside, and an open contour has no inside. This is the single most common rejection.

**Wrong or ambiguous units.** DXF does not reliably record what its numbers mean. The same file can be millimetres, centimetres, inches or feet, and often the file doesn't say. A part that arrives 25.4× too big or too small is this.

**Non-geometry clutter.** Dimensions, title blocks, notes, hatching, construction lines. The machine will happily try to cut your annotation.

**Duplicate lines.** Two identical lines stacked on top of each other means the laser cuts the same path twice — wasted time, scorched edges, and on thin material a fire risk.

**Everything on one layer.** If cut, score and engrave aren't separated, the service can't tell which is which and will ask you to resubmit.

## Preparing the file

Drag your `.dxf` onto the canvas at [app.kulmanlab.com](https://app.kulmanlab.com), or use the **Import** button in the File panel. The drawing loads and the view fits to it.

**1. Look at what you actually have.** Type `fit` to bring everything into view. Zoom into each corner of each part — gaps are invisible at full-drawing zoom and obvious at 10×. This is the check that saves you a rejection email.

**2. Delete what shouldn't be cut.** Construction lines, notes, borders, dimensions. `layer-isolate` shows one layer at a time, which is how you find strays hiding under the real geometry.

**3. Close the gaps.** `trim` cuts back overhanging ends where two lines cross past each other. Where lines fall short, drag an endpoint grip onto its neighbour — grips snap, so the ends actually meet rather than nearly meeting.

**4. Check your sizes.** `distance` measures between two points, `area` measures an enclosed region from clicked points. Measure one feature you know the real dimension of. If it reads 25.4 times off, your file is in the wrong unit system.

**5. Separate cut from score and engrave.** Put each operation on its own layer with an obvious name — `CUT`, `SCORE`, `ENGRAVE`. Most services either ask for this or ask for separate files. `layer-manager` creates and assigns them.

Then export: **Export** → **DXF**. KulmanLab writes plain AC1032 DXF, which is what cutting services and machine software expect.

## Kerf

The laser removes material as it cuts — roughly 0.1–0.3 mm depending on machine, material and thickness. Cut a 50 mm square and you get a slightly-under-50 mm square, and a part meant to press-fit into it won't.

Two ways to handle it:

**Let the service handle it.** Most cutting services apply kerf compensation themselves, and if they do, compensating yourself makes parts wrong in the other direction. Ask before you adjust anything.

**Do it yourself.** `offset` makes a parallel copy of a shape at a fixed distance — half the kerf width, outward for parts you want to keep at size, inward for holes. It works on lines, circles, arcs, ellipses and polylines. It's one entity at a time, so it's practical for a handful of critical features, not for a sheet of two hundred parts.

If tolerance matters, cut one test piece before committing material.

## What to check about DXF export

Worth knowing before you rely on it:

- **Annotation exports now — so clear it out yourself.** Text, dimensions, leaders and hatches all go into the exported DXF. That is what you want for a general handoff, but for a cut file it means anything you left in the drawing really will be in the file. The export no longer quietly strips it for you, so delete it, or keep it on layers you remove before exporting.
- **Text lands as `MTEXT`, which is not the same as engravable geometry.** Lettering exports with its formatting intact, but plenty of machine software wants outlines rather than live text on an engrave layer. Check what yours accepts before planning engraved lettering around it.
- **Block references don't import.** A drawing built from repeated block symbols arrives incomplete, so check part counts against the original.

Splines *do* export. Some machine software handles them poorly and prefers polylines — if yours does, redraw curves as polylines or arcs.

## A caution about automation

KulmanLab has **no preflight checker**. Nothing scans for open contours, duplicate lines or unit problems and reports them. The checks above are manual: zoom in, measure, look.

That's fine for a handful of parts and tedious for a full nested sheet. If you're producing sheets regularly, a tool with an automated validator will serve you better — and for one-off parts, which is most people most of the time, looking at the file carefully catches the same problems.

## Before you send it

- Every cut path closed — corners checked at high zoom
- One known dimension measured and correct
- No dimensions, notes, borders or construction geometry left
- No duplicate lines stacked on each other
- Cut, score and engrave on separate, clearly named layers
- Kerf: either applied, or deliberately left for the service
- Exported as DXF, reopened once to confirm it looks right

That last one costs ten seconds and catches export surprises before the service does.

---

*Related: [Import](/docs/commands/import/) for what KulmanLab reads from a DXF, [Export Manager](/docs/commands/export-manager/) for exactly what each format carries, [Offset](/docs/commands/offset/) for kerf compensation, and [LayerManager](/docs/commands/layer-manager/) for setting up cut and engrave layers.*
