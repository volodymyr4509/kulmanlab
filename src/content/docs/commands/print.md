---
title: Print Command — Export the Drawing as PNG, JPEG, WebP, or PDF
description: The Print command opens the Print Manager — a dedicated export window with a live preview, format selector, monochrome toggle, and optional area selection. Exports up to 2000×2000 px. Supports PNG, JPEG, WebP, and PDF.
keywords: [CAD export PNG, CAD export PDF, print CAD drawing, print manager, monochrome export, kulmanlab export]
group: file
order: 4
---

# Print

The `print` command opens the **Print Manager** — a dedicated export window with a live preview canvas, format selector (PNG / JPEG / WebP / PDF), monochrome toggle, and optional area crop. Nothing is sent to a physical printer; the output is downloaded as a file.

## Opening the Print Manager

Click the **Print** toolbar button or type `print` in the terminal. The Print Manager opens immediately showing a preview of the current viewport.

## Print Manager layout

The window has two panels:
- **Left sidebar** — all export controls.
- **Right panel** — live preview canvas that updates as you change settings.

### Sidebar controls

| Control | Description |
|---------|-------------|
| **Change Area** | Crop to a custom rectangle on the canvas (see below) |
| **Monochrome** toggle | Convert all colored lines to black — on by default for clean print output |
| **Format** dropdown | PNG, JPEG, WebP, or PDF |
| **Export** button | Generate and download the file |

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
| **PNG** | Lossless, sharp lines | White background, no transparency |
| **JPEG** | Smaller file for sharing | 95% quality, slight compression |
| **WebP** | Smallest file for web | Same 95% quality, better compression than JPEG |
| **PDF** | Print-ready documents | Image embedded at 150 DPI inside PDF container |

The exported file is named `kulman-<timestamp>.<ext>` and downloads automatically.

## Export resolution and background

- Maximum resolution: **2000 × 2000 pixels**, scaled proportionally to the selected area.
- Background is always **white**.
- Layers marked as **non-plotting** are excluded from the export.

## Keyboard reference

| Key | Action |
|-----|--------|
| `Escape` (during area selection) | Cancel area selection, restore previous area |
| `Escape` (in Print Manager) | Close the Print Manager |
