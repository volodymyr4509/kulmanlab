---
sidebar_position: 5
title: Print Command — I-export ang Drawing bilang PNG, JPEG, WebP, o PDF sa KulmanLab CAD
description: Binubuksan ng Print command ang Print Manager — isang dedikadong export window na may live preview, format selector, monochrome toggle, at opsyonal na area selection. Nag-e-export hanggang 2000×2000 px. Sinusuportahan ang PNG, JPEG, WebP, at PDF.
keywords: [CAD export PNG, CAD export PDF, i-print ang CAD drawing, print manager, monochrome export, kulmanlab export]
---

# Print

Binubuksan ng `print` command ang **Print Manager** — isang dedikadong export window na may live preview canvas, format selector (PNG / JPEG / WebP / PDF), monochrome toggle, at opsyonal na area crop. Walang ipinapadala sa physical printer; ang output ay ida-download bilang isang file.

## Pagbukas ng Print Manager

I-click ang **Print** toolbar button o i-type ang `print` sa terminal. Agad na magbubukas ang Print Manager na nagpapakita ng preview ng kasalukuyang viewport.

## Layout ng Print Manager

Ang window ay may dalawang panel:
- **Left sidebar** — lahat ng export controls.
- **Right panel** — live preview canvas na nag-a-update habang binabago mo ang mga setting.

### Sidebar controls

| Control | Paglalarawan |
|---------|-------------|
| **Change Area** | I-crop patungo sa isang custom rectangle sa canvas (tingnan sa ibaba) |
| **Monochrome** toggle | I-convert ang lahat ng may kulay na linya patungo sa itim — naka-on bilang default para sa malinis na print output |
| **Format** dropdown | PNG, JPEG, WebP, o PDF |
| **Export** button | Buuin at i-download ang file |

## Pagpili ng custom na export area

Bilang default, ipinapakita ng preview ang eksaktong nakikita sa canvas noong binuksan mo ang Print Manager. Para mag-export ng specific na rehiyon:

1. I-click ang **Change Area** — nagtatago ang Print Manager at nagiging interactive ang canvas.
2. **I-click ang unang sulok** ng export rectangle.
3. **I-click ang kasalungat na sulok** — magbubukas muli ang Print Manager na may napiling area sa preview.

Pindutin ang `Escape` habang nasa area selection para kanselahin at ibalik ang naunang area.

Dynamic na nag-a-adjust ng size ang preview canvas para tumugma sa **eksaktong aspect ratio** ng napiling area, kaya pixel-accurate ang preview.

## Mga format ng export

| Format | Pinakamainam para sa | Mga tala |
|--------|----------|-------|
| **PNG** | Lossless, matulis na linya | Puting background, walang transparency |
| **JPEG** | Mas maliit na file para sa pagsha-share | 95% quality, bahagyang compression |
| **WebP** | Pinakamaliit na file para sa web | Parehong 95% quality, mas mahusay na compression kaysa JPEG |
| **PDF** | Mga print-ready na dokumento | Naka-embed na larawan sa 150 DPI sa loob ng PDF container |

Ang na-export na file ay pinangalanang `kulman-<timestamp>.<ext>` at awtomatikong nada-download.

## Export resolution at background

- Maximum na resolution: **2000 × 2000 pixels**, naka-scale nang proporsyonal sa napiling area.
- Palaging **puti** ang background.
- Ang mga layer na naka-mark bilang **non-plotting** ay hindi kasama sa export.

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Escape` (habang nasa area selection) | Kanselahin ang area selection, ibalik ang naunang area |
| `Escape` (sa Print Manager) | Isara ang Print Manager |
