---
title: Print Manager — Export the Drawing as PNG, JPEG, WebP, or PDF
description: The PrintManager command opens the Print Manager — a dedicated export window with a live preview that exactly matches the exported file, a Quality/DPI setting, format selector, a Default/Monochrome/Blueprint print style, and optional area crop. Supports PNG, JPEG, WebP, and PDF.
keywords: [CAD export PNG, CAD export PDF, print CAD drawing, print manager, print quality DPI, monochrome export, blueprint print style, kulmanlab export]
group: file
order: 4
---

# Print Manager

The `PrintManager` command opens the **Print Manager** — a dedicated export window with a live preview canvas, format selector (PNG / JPEG / WebP / PDF), a print Style selector (Default / Monochrome / Blueprint), and optional area crop. Nothing is sent to a physical printer; the output is downloaded as a file.

## Opening the Print Manager

Click the **Print** toolbar button or type `PrintManager` in the terminal. The Print Manager opens immediately showing a preview of the current viewport.

The preview is rendered through the exact same code path, at the exact same pixel resolution, as the file you eventually export — changing Quality, Style, or the export area all re-render the preview immediately, so what you see is what downloads, not an approximation of it.

## Print Manager layout

The window has two panels:
- **Left sidebar** — all export controls.
- **Right panel** — live preview canvas that updates as you change settings.

### Sidebar controls

| Control | Description |
|---------|-------------|
| **Change Area** | Crop to a custom rectangle on the canvas (see below) — actually crops the exported image, including on a layout with paper space, not just the on-screen preview |
| **Quality** dropdown | Sets the export resolution (see below) |
| **Style** dropdown | Default, Monochrome, or Blueprint — see *Print styles* below. Monochrome by default for clean print output |
| **Format** dropdown | PNG, JPEG, WebP, or PDF |
| **Export** button | Generate and download the file |

## Print styles

The **Style** dropdown controls both the ink color entities are drawn with and the page background:

| Style | Ink | Page background |
|-------|-----|------------------|
| **Default** | Each entity's own color | White |
| **Monochrome** *(default)* | Solid black, regardless of entity/layer color | White |
| **Blueprint** | Solid white, regardless of entity/layer color | Deep Prussian-blue, with a faint reference grid |

Blueprint reproduces the look of a traditional cyanotype architectural print — white linework on a dark blue sheet. Its reference grid is sized relative to the page rather than to DPI, so it reads the same density at every Quality setting instead of getting denser as resolution increases.

## Quality and resolution

The **Quality** dropdown sets the DPI the export is rendered at:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(default)* | 150 |
| Presentation | 300 |
| Max | 600 |

Higher Quality produces a larger, sharper image at the same physical size — line weights scale up together with the resolution, so a line keeps the same *physical* thickness on paper at any Quality setting rather than looking thinner as DPI increases. The one exception is a hairline (lineweight `0`), conventionally defined as "the thinnest line the output device can draw" — it stays a fixed 1-pixel width at every Quality level instead of scaling, matching how it behaves on the live canvas.

Changing Quality re-renders the preview immediately, so you see the actual sharpness (and file size trade-off) before exporting.

## Selecting a custom export area

By default the preview shows exactly what was visible on the canvas when you opened Print Manager. To export a specific region:

1. Click **Change Area** — the Print Manager hides and the canvas becomes interactive.
2. **Click the first corner** of the export rectangle.
3. **Click the opposite corner** — the Print Manager reopens with the selected area in the preview.

Press `Escape` during area selection to cancel and restore the previous area.

The preview canvas resizes dynamically to match the **exact aspect ratio** of the selected area, so the preview is pixel-accurate.

## Export formats

| Format | Best for | Notes |
|--------|----------|-------|
| **PNG** | Lossless, sharp lines | Style's page background baked in, no transparency |
| **JPEG** | Smaller file for sharing | 95% quality, slight compression |
| **WebP** | Smallest file for web | Same 95% quality, better compression than JPEG |
| **PDF** | Print-ready documents | Image embedded inside a PDF container at the selected Quality's DPI, sized so the page prints at true physical scale |

The exported file is named `kulman-<timestamp>.<ext>` and downloads automatically.

## Export resolution and background

- **Model space / viewport export**: capped at 2000 × 2000 pixels at the default Normal (150 DPI) Quality, scaled proportionally to the selected area; the cap scales with Quality too — Draft caps lower, Presentation and Max cap higher (up to 8000 × 8000 at Max/600 DPI).
- **Layout (paper space) export**: sized directly from the layout's paper dimensions at the selected DPI — e.g. an A4 sheet (210 × 297 mm) at Normal quality exports at roughly 1240 × 1754 px — so it isn't subject to the 2000 px viewport cap.
- Background follows the selected print **Style** — white for Default and Monochrome, deep Prussian-blue for Blueprint (see *Print styles* above).
- Layers marked as **non-plotting** are excluded from the export.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Escape` (during area selection) | Cancel area selection, restore previous area |
| `Escape` (in Print Manager) | Close the Print Manager |
