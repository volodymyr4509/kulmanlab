---
title: Export — I-download ang mga Drawing bilang DXF o JSON sa KulmanLab CAD
description: Ida-download ng Export command ang kasalukuyang drawing bilang isang DXF () o JSON (native) file. Pinapanatili ng JSON ang lahat ng entities kasama ang dimensions at leaders; ang DXF ay compatible sa  at iba pang CAD tools.
keywords: [i-export ang DXF, i-export ang CAD file, i-download ang DXF sa browser, i-save ang DXF online, i-export ang JSON CAD, KulmanLab export, CAD file download, DXF export, i-save ang drawing bilang file, DXF download]
group: file
order: 5
---

# Export

Ida-download ng **Export** command ang kasalukuyang drawing patungo sa iyong file system. May dalawang available na format: **DXF** para sa compatibility sa ibang CAD tools at **JSON** para sa full-fidelity na pag-save sa loob ng KulmanLab CAD.

## Paano mag-export

1. I-click ang **Export** toolbar button (download icon) sa File panel.
2. Magbubukas ang **Export Manager** popup.
3. I-click ang isang format card para piliin ang format — **JSON** o **DXF**.
4. I-click ang **Export** button. Awtomatikong nada-download ang file patungo sa iyong default downloads folder.

## Pagpili ng format

| Format | Extension | Pinakamainam para sa | Mga limitasyon |
|--------|-----------|----------|-------------|
| **JSON** *(native)* | `.json` | Pag-save ng trabaho para buksan muli sa KulmanLab CAD | Hindi compatible sa ibang CAD tools |
| **DXF** | `.dxf` | Pagshe-share sa , FreeCAD, LibreCAD, atbp. | Hindi kasama sa export ang Dimensions at leaders |

**Kailan gagamitin ang JSON:** anumang oras na gusto mong i-save ang isang kumpletong kopya ng iyong trabaho. Ang JSON ay native format ng KulmanLab at pinapanatili nang eksakto ang bawat entity — kasama ang dimensions, leaders, at lahat ng layer data.

**Kailan gagamitin ang DXF:** kapag kailangan mong ipasa ang drawing sa taong gumagamit ng ibang CAD application. Gumagamit ang na-export na file ng AC1012 DXF format at puwedeng buksan sa karamihan ng mga tool na compatible sa DXF.

## Ano ang na-e-export bawat format

### JSON export

Kasama ang lahat ng entity types:

- Lines, circles, arcs, ellipses, polylines, splines, text
- Dimensions (linear, aligned, continued, radius, diameter)
- Multileaders
- Layer definitions at linetype tables

### DXF export

Kasama lang ang geometry-only entities:

- Lines, circles, arcs, ellipses, polylines (na-export bilang `LWPOLYLINE`), splines, text
- Layer definitions at linetype tables

**Hindi kasama sa DXF:** ang dimension entities at multileaders. Gumagamit ang mga ito ng KulmanLab-specific na data structures na hindi puwedeng katawanin nang tapat sa standard na DXF. Kung may mga annotation ang iyong drawing, gamitin ang JSON o [Print](../print/) para makuha ang mga ito nang visual.

## Pangalan ng na-export na file

Ang na-download na file ay pinangalanan ayon sa kasalukuyang drawing file (hal. `myplan_May22_14:30:00.json`). Nagbabago ang extension para tumugma sa napiling format.

## Pagkakaiba ng Export at Print

| Feature | Export | Print |
|---------|--------|-------|
| Output | Vector source file (.dxf / .json) | Raster image (.png / .jpeg / .webp / .pdf) |
| Editable sa ibang tools | Oo (DXF) | Hindi |
| Pinapanatili ang layers & linetypes | Oo | Hindi (naka-render nang patag) |
| Kinukuha ang dimensions & leaders | JSON lang | Oo |

Gamitin ang **Export** kapag kailangan mo ng editable na file. Gamitin ang [Print](../print/) kapag kailangan mo ng visual snapshot.

## Kaugnay na commands

- [Import](../import/) — buksan ang isang DXF o JSON file
- [Print](../print/) — i-export ang canvas bilang isang PNG, JPEG, WebP, o PDF na larawan
- [Files](../files/) — mag-browse ng mga drawing na naka-save sa browser storage
