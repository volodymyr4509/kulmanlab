---
title: "How to Convert a DXF to PDF (at the Right Scale)"
description: "Convert DXF to PDF free in your browser — including at an exact scale like 1:50 on A3, which converter sites can't do. No install, no account."
keywords: [convert DXF to PDF, DXF to PDF free, DXF to PDF online, DXF to PDF scale, print DXF to scale, DXF to PDF converter, CAD drawing to PDF, DXF PDF A3, 1:50 scale PDF, DXF to PDF without AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Guide
---

To convert a DXF to PDF, open it in a browser-based CAD editor and export — no install, no account, and the file stays on your computer. If the PDF needs to measure correctly when printed, you need a paper layout and an exact scale, which is the part most converters skip entirely.

That distinction is the whole point of this guide. A general-purpose file converter gives you a picture of your drawing. A scaled PDF gives you a drawing someone can put a ruler on.

## The quick way: just make a PDF

When you only need something readable to email or attach:

1. Open [app.kulmanlab.com](https://app.kulmanlab.com) and drag your `.dxf` onto the canvas, or use the **Import** button in the File panel.
2. Click the **Print** button, or type `printmanager`.
3. Set **Format** to **PDF**.
4. Click **Export**. The file downloads.

That's it. The preview panel renders through the same code path and at the same resolution as the exported file, so what you see is what you get rather than an approximation.

One thing worth knowing: **the PDF keeps everything on screen** — dimensions, text, hatching, leaders — laid out exactly as drawn. DXF export carries all of that too, so the choice between them isn't about what survives. It's about what the recipient needs: PDF if they only have to read or print it, DXF if they have to edit it.

## The right way: convert at an exact scale

If someone is going to measure or build from this, "fits on a page" isn't good enough. A drawing at 1:50 means 1 mm on paper is 50 mm in reality, and that only holds if you set it deliberately.

1. **Switch to a paper layout.** Click a layout tab at the bottom of the screen — the **+** button adds one. Layouts are paper space; model space has no page to scale onto.
2. **Set the sheet.** Type `pagemanager`, or right-click the layout tab and choose **Page Manager**. Pick your paper format (A4, A3, A2, Letter…) and orientation.
3. **Place a viewport.** Type `viewportrectangle` and pick two opposite corners. The viewport is a window onto your model.
4. **Set the scale.** With the viewport active, use the **scale selector** in the control bar. Pick a standard ratio, or type your own — it accepts ratio format (`1:200`, `5:1`) or a plain decimal (`0.005`), then Enter.
5. **Export.** Print Manager → PDF → Export.

The PDF is sized so the page prints at true physical scale. Print it at 100% — no "fit to page", which silently rescales everything and undoes the work — and measurements on paper will be correct.

If you change the paper size or scale afterwards, existing viewports rescale proportionally, so the layout doesn't fall apart.

## Choosing a Quality setting

The **Quality** dropdown sets the DPI the PDF is rendered at:

| Quality | DPI | Use for |
|---|---|---|
| Draft | 72 | Quick check, smallest file |
| Normal | 150 | Default — fine for A4 email attachments |
| Presentation | 300 | Printing something people will look at closely |
| Max | 600 | Large formats, fine detail |

Line weights scale with the resolution, so a line keeps the same *physical* thickness on paper at every setting — a higher Quality gives you a sharper line, not a thinner one. The exception is hairline (lineweight `0`), which stays one pixel at every level, by convention.

## Print styles

The **Style** dropdown changes the ink and the page:

- **Monochrome** — solid black on white, and the default. This is what you want for anything going on paper: coloured layers that read well on screen turn into muddy greys on a laser printer.
- **Default** — each entity's own colour, white page.
- **Blueprint** — white linework on deep Prussian blue, in the style of a traditional cyanotype. For presentation, not for the workshop.

## Converting only part of a drawing

**Change Area** crops the export to a rectangle you pick on the canvas. It crops the actual exported file, not just the preview, and it works on a layout as well as in model space.

The corners snap to grips and intersections like any other point pick, so you can crop to drawn geometry instead of eyeballing it — useful when a sheet holds four details and you only want the third.

## What this doesn't do

Honest limitations, before you rely on it:

- **The PDF is a raster image inside a PDF container, not vector.** At A4 and Normal Quality that's invisible. At A1, or for someone zooming right in on a detail, a vector PDF from a desktop CAD package will be crisper. Bump Quality to Presentation or Max for large formats — but it doesn't become vector.
- **Nothing goes to a physical printer.** You get a file; printing it is your printer's job.
- **Desktop browsers only** — Chrome, Firefox, Safari, Edge. No mobile version.
- **2D only, DXF not DWG.** If your file is a `.dwg`, ask the sender to export DXF instead.

## When to use something else

**A general file converter** (CloudConvert, Zamzar and similar) is fine if you genuinely just need a picture and don't care what size it prints at. They're fast and they handle formats nobody else does. They will not give you 1:50 on A3.

**Desktop CAD** — LibreCAD, QCAD, or AutoCAD if you have it — produces vector PDFs and is the right answer for large-format technical drawings that will be printed properly and scrutinised.

**This**, for the large middle: a DXF you need as a correctly-scaled, annotated PDF, today, without installing anything.

## Before you send it

- Scale set deliberately in the viewport, not left at whatever fitted
- Paper format matches what the recipient will actually print on
- Quality raised above Normal if it's going on anything bigger than A4
- Monochrome style unless you specifically want colour
- Opened the PDF once to check it before attaching it
- Told the recipient to print at 100%, not "fit to page"

That last line saves more scaled drawings than anything else on this list.

---

*Related: [Print Manager](/docs/commands/print-manager/) for every export setting, [Page Manager](/docs/commands/page-manager/) for paper size and layout scale, [ViewportRectangle](/docs/commands/viewport-rectangle/) for placing and scaling viewports, and [Import](/docs/commands/import/) for what KulmanLab reads from a DXF.*
