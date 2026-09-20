---
title: Print Manager — I-export ang Drawing bilang PNG, JPEG, WebP, o PDF
description: Binubuksan ng PrintManager command ang Print Manager — isang dedikadong export window na may live preview na eksaktong tumutugma sa na-export na file, isang setting ng Quality/DPI, format selector, isang Default/Monochrome/Blueprint na print style, at opsyonal na area selection. Sinusuportahan ang PNG, JPEG, WebP, at PDF.
keywords: [CAD export PNG, CAD export PDF, i-print ang CAD drawing, print manager, print quality DPI, monochrome export, blueprint print style, kulmanlab export]
group: file
order: 4
---

# Print Manager

Binubuksan ng `TagapamahalaNgPrint` command ang **Print Manager** — isang dedikadong export window na may live preview canvas, format selector (PNG / JPEG / WebP / PDF), isang Style selector (Default / Monochrome / Blueprint), at opsyonal na area crop. Walang ipinapadala sa physical printer; ang output ay ida-download bilang isang file.

## Pagbukas ng Print Manager

I-click ang **Print** toolbar button o i-type ang `TagapamahalaNgPrint` sa terminal. Agad na magbubukas ang Print Manager na nagpapakita ng preview ng kasalukuyang viewport.

Ang preview ay nire-render sa eksaktong parehong code path, sa eksaktong parehong pixel resolution, gaya ng file na sa huli ay i-e-export mo — ang pagbabago ng Quality, Style, o export area ay agad na nagre-render ulit ng preview, kaya ang nakikita mo ay ang mismong ida-download, hindi lang tantiya nito.

## Layout ng Print Manager

Ang window ay may dalawang panel:
- **Left sidebar** — lahat ng export controls.
- **Right panel** — live preview canvas na nag-a-update habang binabago mo ang mga setting.

### Sidebar controls

| Control | Paglalarawan |
|---------|-------------|
| **Change Area** | I-crop patungo sa isang custom rectangle sa canvas (tingnan sa ibaba) — talagang kino-crop ang na-export na larawan, kasama na sa layout na may paper space, hindi lang ang on-screen preview |
| **Quality** dropdown | Itinatakda ang export resolution (tingnan sa ibaba) |
| **Style** dropdown | Default, Monochrome, o Blueprint — tingnan ang *Mga print style* sa ibaba. Monochrome bilang default para sa malinis na print output |
| **Format** dropdown | PNG, JPEG, WebP, o PDF |
| **Export** button | Buuin at i-download ang file |

## Mga print style

Kinokontrol ng **Style** dropdown kapwa ang kulay ng tinta na gamit sa pagguhit ng mga entity at ang background ng page:

| Style | Tinta | Background ng page |
|-------|-------|----------------------|
| **Default** | Sariling kulay ng bawat entity | Puti |
| **Monochrome** *(default)* | Solid na itim, anuman ang kulay ng entity/layer | Puti |
| **Blueprint** | Solid na puti, anuman ang kulay ng entity/layer | Malalim na Prussian-blue, na may banayad na reference grid |

Ginagaya ng Blueprint ang tingin ng tradisyonal na cyanotype architectural print — puting linya sa isang madilim na asul na sheet. Ang laki ng reference grid nito ay batay sa laki ng page sa halip na DPI, kaya pareho ang density nito sa anumang Quality setting sa halip na lumapot habang tumataas ang resolution.

## Quality at resolution

Itinatakda ng **Quality** dropdown ang DPI kung saan ire-render ang export:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(default)* | 150 |
| Presentation | 300 |
| Max | 600 |

Ang mas mataas na Quality ay gumagawa ng mas malaki, mas malinaw na larawan sa parehong physical size — ang linewidth ay sumusunod sa scale ng resolution, kaya ang linya ay nananatiling parehong *physical* thickness sa papel kahit anong Quality setting, sa halip na tila manipis habang tumataas ang DPI. Ang tanging exception ay ang hairline (linewidth `0`), na karaniwang tinutukoy bilang "ang pinakamanipis na linya na kayang iguhit ng output device" — nananatili itong fixed na 1-pixel width sa bawat antas ng Quality, eksaktong tulad ng kilos nito sa live canvas.

Ang pagbabago ng Quality ay agad na nagre-render ulit ng preview, kaya makikita mo ang aktwal na kalinawan (at ang trade-off sa laki ng file) bago mag-export.

## Pagpili ng custom na export area

Bilang default, ipinapakita ng preview ang bounding box ng lahat ng entity sa Model space — ang parehong saklaw na sini-zoom ng [Fit](../fit/) — o ang buong sheet sa isang layout. Upang mag-export ng partikular na rehiyon:

1. I-click ang **Change Area** — nagtatago ang Print Manager at nagiging interactive ang canvas.
2. **I-click ang unang sulok** ng export rectangle.
3. **I-click ang kasalungat na sulok** — magbubukas muli ang Print Manager na may napiling area sa preview.

Pindutin ang `Escape` habang nasa area selection para kanselahin at ibalik ang naunang area.

Dynamic na nag-a-adjust ng size ang preview canvas para tumugma sa **eksaktong aspect ratio** ng napiling area, kaya pixel-accurate ang preview.

Ang piniling area ay hiwalay na naaalala para sa Model space at para sa bawat layout hanggang mag-reload ka ng pahina — tingnan ang [ChangePrintArea](../change-print-area/).

## Mga format ng export

| Format | Pinakamainam para sa | Mga tala |
|--------|----------|-------|
| **PNG** | Lossless, matulis na linya | Kasama ang background ng page ng Style, walang transparency |
| **JPEG** | Mas maliit na file para sa pagsha-share | 95% quality, bahagyang compression |
| **WebP** | Pinakamaliit na file para sa web | Parehong 95% quality, mas mahusay na compression kaysa JPEG |
| **PDF** | Mga print-ready na dokumento | Naka-embed na larawan sa loob ng PDF container sa DPI ng napiling Quality, sinukat para ma-print ang page sa tunay na physical scale |

Ang na-export na file ay pinangalanang `kulman-<timestamp>.<ext>` at awtomatikong nada-download.

## Export resolution at background

- **Model space / viewport export**: may limitasyong 2000 × 2000 pixels sa default na Normal (150 DPI) Quality, naka-scale nang proporsyonal sa napiling area; sumusunod din sa Quality ang limitasyon — mas mababa sa Draft, mas mataas sa Presentation at Max (hanggang 8000 × 8000 sa Max/600 DPI).
- **Layout (paper space) export**: sinusukat direkta mula sa paper dimensions ng layout sa napiling DPI — hal. ang A4 sheet (210 × 297 mm) sa Normal quality ay na-e-export sa humigit-kumulang 1240 × 1754 px — kaya hindi ito sakop ng 2000 px na limitasyon ng viewport.
- Sumusunod ang background sa napiling print na **Style** — puti para sa Default at Monochrome, malalim na Prussian-blue para sa Blueprint (tingnan ang *Mga print style* sa itaas).
- Ang mga layer na naka-mark bilang **non-plotting** ay hindi kasama sa export.

## Keyboard reference

| Key | Aksyon |
|-----|--------|
| `Escape` (habang nasa area selection) | Kanselahin ang area selection, ibalik ang naunang area |
| `Escape` (sa Print Manager) | Isara ang Print Manager |
