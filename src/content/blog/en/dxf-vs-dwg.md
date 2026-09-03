---
title: "DXF vs DWG: What's the Difference?"
description: "DWG is AutoCAD's native format; DXF is the open exchange format. What actually differs, which one you need, and how to get a DXF when you've been sent a DWG."
keywords: [DXF vs DWG, difference between DXF and DWG, DWG or DXF, what is DWG, what is DXF, DWG to DXF, DXF DWG which format, CAD file formats, open DWG file, DXF file format]
date: 2026-09-02
author: KulmanLab
tag: Guide
---

DWG is AutoCAD's native file format — binary, proprietary, and undocumented by Autodesk. DXF is the exchange format Autodesk publishes so other programs can read the same drawings. Same geometry, different container, and only one of them is meant for handing files to people outside your own software.

That last point is the whole practical difference, and it decides which one you should be asking for.

## The short version

| | DXF | DWG |
|---|---|---|
| Stands for | Drawing Exchange Format | Drawing |
| Published spec | Yes, by Autodesk | No |
| Encoding | Text (also a binary variant) | Binary |
| Purpose | Moving drawings between programs | AutoCAD's own working format |
| File size | Larger | Smaller |
| Read by other software | Very widely | Patchily, via reverse-engineered libraries |
| Carries everything AutoCAD can do | No — a documented subset | Yes |

## Why two formats exist at all

Autodesk shipped AutoCAD in 1982 with DWG as its working format. It's built for one program's convenience: compact, binary, and free to change whenever AutoCAD needs it to.

That makes it a poor thing to send anyone. So Autodesk also published DXF — the same drawing written out in a documented, readable form that any developer can implement against. Open a `.dxf` in a text editor and you'll see group codes and section names in plain ASCII.

The two are versioned together. Each AutoCAD release brings a DWG revision and a matching DXF revision; the `AC1032` marker you sometimes see in a file header identifies the AutoCAD 2018 generation, for instance.

So DXF isn't the older or lesser format. It's the same drawing, deliberately made legible.

## What actually differs in practice

**Openness.** Autodesk documents DXF and does not document DWG. Programs that read DWG — and many do — rely on libraries built by reverse-engineering the format. That works well and is entirely legitimate, but it means DWG support lags new releases and varies between applications, while DXF support is something anyone can implement directly from the spec.

**Size.** A binary DWG is typically much smaller than the same drawing as ASCII DXF. On a large project that matters; on a single part it doesn't.

**Fidelity.** DWG holds everything AutoCAD can express, including object types other programs have no concept of. DXF covers a documented subset. For ordinary 2D drafting — lines, arcs, circles, polylines, text, dimensions, layers — the subset is everything you need. For a model leaning on proprietary AutoCAD objects, exporting to DXF loses some of it.

**Breadth of support.** Practically every CAD, CAM and vector tool reads DXF. Fewer read DWG, and the ones that do often support it less completely.

## Which one do you actually need?

**Someone sent you a file and you can't open it.** Check the real extension first. Most people say "DWG" for both, and half the time the file in your downloads is a `.dxf` you could already open. See [how to open a DXF without AutoCAD](/blog/open-dxf-file-without-autocad/).

**You're sending to a laser cutter, CNC shop or fabricator.** DXF, essentially always. Machine software and cutting services are built around it, and 2D cut geometry sits comfortably inside the documented subset. See [preparing a DXF for laser cutting](/blog/prepare-dxf-for-laser-cutting/).

**You're sending to an architect or engineer who works in AutoCAD.** Ask. Many prefer DWG because it's what their workflow expects, and they can open DXF perfectly well if not.

**You're archiving something for the long term.** DXF. A documented text format will still be readable in twenty years by someone with the spec and a text editor. That argument is the whole reason exchange formats exist.

**Someone just needs to look at it.** Neither — send a PDF. See [converting a DXF to PDF](/blog/convert-dxf-to-pdf/).

## Getting a DXF when you've been sent a DWG

The reliable route is to ask. Whoever sent the file opens it in their CAD program and does *Save As* or *Export* → DXF. It takes about ten seconds, every desktop CAD application can do it, and the file comes out of the software that created it rather than a third party's guess at it.

If asking isn't an option, converters exist. Two things to weigh: conversion is where fidelity gets lost, and you're uploading someone else's drawing to a service you don't control. For a hobby project that's fine. For client work, ask.

When you do request one, it's worth naming a version. **DXF R12 is the safest** — it's ancient, universally supported, and if the drawing is plain 2D geometry it loses nothing that matters. Older machine software in particular is much happier with it.

## Two things people get wrong

**"DXF is lossy."** Only in the sense that it doesn't carry proprietary AutoCAD object types. Lines, arcs, circles, polylines, text, dimensions and layers all survive intact. For 2D drafting work the loss is usually zero.

**"DXF is the old format."** It's been versioned alongside DWG since 1982 and still is. The confusion comes from R12 being so widely used as a compatibility target that people assume DXF stopped there.

## Where this tool sits

[KulmanLab](https://kulmanlab.com) reads **DXF, not DWG**, and it's worth saying why rather than treating it as an oversight: DXF is documented, so an implementation can be correct by reading the spec. DWG would mean depending on a reverse-engineered library, in a browser, for a format that changes on Autodesk's schedule.

If you have a `.dwg`, this won't open it. If you have a `.dxf`, you can open it in a browser tab with nothing to install: [app.kulmanlab.com](https://app.kulmanlab.com).

What it writes back out is geometry plus text — lines, circles, arcs, ellipses, polylines, splines and text, along with layers and linetypes. Hatches, dimensions and leaders don't currently make it into the exported DXF.

---

*Related: [Import](/docs/commands/import/) for exactly what KulmanLab reads from a DXF, and [Export Manager](/docs/commands/export-manager/) for what each export format carries.*
