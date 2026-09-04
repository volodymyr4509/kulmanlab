---
title: Export Manager — I-download ang mga Drawing bilang DXF o JSON
description: I-download ang guhit bilang DXF o JSON. Dala ng dalawa ang bawat entity — heometriya, teksto, sukat, leader, hatch — kasama ang mga layer at uri ng linya.
keywords: [export DXF, export CAD file, i-download ang DXF sa browser, i-save ang DXF online, export JSON CAD, KulmanLab export, i-download ang CAD file, DXF export, i-save ang drawing sa file, DXF download]
group: file
order: 6
---

# Export Manager

Ini-download ng command na `exportmanager` ang kasalukuyang drawing sa file system mo. May dalawang format na available, ipinapakita bilang magkatabing card: **DXF** para sa compatibility sa ibang CAD tool at **JSON** para sa full-fidelity na pag-save sa loob ng KulmanLab CAD — nakalista sa bawat card nang eksakto kung anong mga entity type ang dala ng format na iyon.

## Paano mag-export

1. I-click ang **Export** toolbar button (download icon) sa File panel, o i-type ang `exportmanager` sa terminal.
2. Bubukas ang **Export Manager** popup na nagpapakita ng JSON at DXF card nang magkatabi, bawat isa ay nakalista kung ano ang ie-export.
3. I-click ang isang card para piliin ang format — **JSON** o **DXF**.
4. I-click ang **Export \<FORMAT\>** na button. Awtomatikong nada-download ang file sa iyong default downloads folder.

Pindutin ang `Escape` para isara ang popup nang hindi nag-export.

## Pagpili ng format

| Format | Extension | Pinakamainam para sa | Mga limitasyon |
|--------|-----------|----------------------|-----------------|
| **JSON** *(native)* | `.json` | Pag-save ng trabaho para buksan muli sa KulmanLab CAD | Hindi compatible sa ibang CAD tool |
| **DXF** | `.dxf` | Pagbabahagi sa FreeCAD, LibreCAD, atbp. | Nakadepende sa tumatanggap na aplikasyon kung gaano karami ang matitira |

**Kailan gagamitin ang JSON:** anumang oras na gusto mong i-save ang kumpletong kopya ng iyong trabaho. Ang JSON ang native format ng KulmanLab at eksaktong pinapanatili ang bawat entity — kasama ang Dimensions, Leaders, Hatches, at lahat ng data ng layer.

**Kailan gagamitin ang DXF:** kapag kailangan mong ibigay ang drawing sa taong gumagamit ng ibang CAD application. Ang na-export na file ay gumagamit ng AC1032 DXF format at maaaring buksan sa karamihan ng mga tool na compatible sa DXF.

## Ano ang ine-export bawat format

### JSON export

Kasama ang bawat entity type:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Dimensions (linear, aligned, continued, radius, diameter)
- Leaders (multileaders)
- Hatches, kasama ang pattern, scale, angle, at origin nito
- Layers at Linetypes

### DXF export

Kasama ang bawat entity type:

- Lines, Circles, Arcs, Ellipses, Polylines (ine-export bilang `LWPOLYLINE`), Splines
- Text
- Dimensions (linear, aligned, continued, radius, diameter)
- Leaders (multileaders)
- Hatches, kasama ang pattern, scale, angle, at origin nito
- Layers at Linetypes

Isinusulat ang file bilang AC1032 na DXF, kaya ang guhit na ini-export mula sa KulmanLab ay bumubukas nang buo ang anotasyon sa ibang kasangkapang marunong ng DXF, hindi dumarating bilang hubad na heometriya.

Kung ano naman ang gagawin dito ng bawat tumatanggap na aplikasyon ay nag-iiba pa rin — magkakaiba ang suporta sa DXF sa bawat kasangkapan, at maaaring balewalain ng mas luma ang mga entity na nababasa ng mas bago. Kung kailangang magmukhang eksaktong pareho ang guhit saanman, ang [Print Manager](../print-manager/) ang kumukuha nito bilang PDF o larawan.

## Pangalan ng na-export na file

Ang na-download na file ay pinangalanan batay sa kasalukuyang drawing file (hal. `myplan.json`). Nagbabago ang extension para tumugma sa napiling format.

## Pagkakaiba ng Export Manager at Print Manager

| Feature | Export Manager | Print Manager |
|---------|-----------------|-----------------|
| Output | Vector source file (.dxf / .json) | Raster image (.png / .jpeg / .webp / .pdf) |
| Maaaring i-edit sa ibang tool | Oo (DXF) | Hindi |
| Pinapanatili ang layers at linetypes | Oo | Hindi (naka-render na patag) |
| Nakukuha ang dimensions at leaders | Oo | Oo |

Gamitin ang **Export Manager** kapag kailangan mo ng file na maaaring i-edit. Gamitin ang [Print Manager](../print-manager/) kapag kailangan mo ng visual na snapshot.

## Mga kaugnay na command

- [Import](../import/) — magbukas ng DXF o JSON file
- [Print Manager](../print-manager/) — i-export ang canvas bilang PNG, JPEG, WebP, o PDF na larawan
- [File Manager](../file-manager/) — mag-browse ng mga drawing na naka-save sa browser storage
