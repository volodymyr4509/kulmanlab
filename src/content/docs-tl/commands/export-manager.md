---
title: Export Manager — I-download ang mga Drawing bilang DXF o JSON
description: I-download ang guhit bilang DXF o JSON, tinitikan ayon sa uri ng entity kung ano ang isasama. Dala ng dalawa ang heometriya, teksto, sukat, leader at hatch.
keywords: [export DXF, export CAD file, i-download ang DXF sa browser, i-save ang DXF online, export JSON CAD, KulmanLab export, i-download ang CAD file, DXF export, i-save ang drawing sa file, DXF download]
group: file
order: 6
---

# Export Manager

Dina-download ng utos na `TagapamahalaNgExport` ang kasalukuyang guhit sa iyong file system. Magkatabi ang dalawang pormat — **DXF** para sa pagkakatugma sa ibang kasangkapang CAD at **JSON** para sa buong-katapatang pag-save sa loob ng KulmanLab CAD — at may sariling checklist ang bawat isa kung ano ang ilalagay sa file.

## Paano mag-export

1. I-click ang **Export** toolbar button (download icon) sa File panel, o i-type ang `TagapamahalaNgExport` sa terminal.
2. Bumubukas ang popup na **Export Manager** nang may dalawang hanay, **JSON** at **DXF**, bawat isa'y nakalista ang mga uri ng entity sa guhit kasama ang checkbox at bilang.
3. Alisin ang tsek sa gusto mong iwanan. Nakatsek ang lahat sa simula.
4. I-click ang **Export JSON** o **Export DXF**. Bumababa ang file sa iyong default na downloads folder at nagsasara ang popup.

Pindutin ang `Escape` para isara ang popup nang hindi nag-export.

## Pagpili kung ano ang ie-export

Pareho ang mga uri ng entity na nakalista sa dalawang hanay, bawat isa'y may bilang kung ilan ang nasa guhit:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Nakatsek ang lahat pagbukas ng popup, kaya ang agad na pag-export ay nagbibigay ng buong guhit. Alisan ng tsek ang isang uri para maiwan ito sa file na iyon lamang.

- **Magkahiwalay ang dalawang hanay.** Ang pag-alis ng tsek sa Hatches sa ilalim ng DXF ay walang epekto sa nilalabas ng **Export JSON** — may sariling pili ang bawat pormat.
- **Kulay-abo ang uring wala ka.** Hindi matsekan ang hanay na `0` ang bilang, kaya nagsisilbi ring mabilisang talaan ng laman ng guhit ang listahan.
- **Snapshot ang mga bilang.** Kinukuha ang mga ito pagbukas ng popup at hindi nag-a-update kung nagbago ang guhit sa likod. Isara at buksang muli para mag-refresh.
- **Walang binubura.** Ang pag-alis ng tsek ay humuhubog lamang sa na-export na file; hindi nagagalaw ang guhit mismo.

Saklaw ng **Linear Dimensions** ang linear, aligned at continued na sukat: iisang uri ng entity na likha ng tatlong magkaibang utos. May sariling hanay ang radius, diameter at anggulo.

Para sa cut file, alisan ng tsek ang Text, ang apat na hanay ng sukat, Leaders at Hatches at i-click ang **Export DXF** — tingnan ang [paghahanda ng DXF para sa laser cutting](/tl/blog/prepare-dxf-for-laser-cutting/).

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
- Dimensions (linear, aligned, continued, radius, diameter, anggulo)
- Leaders (multileaders)
- Hatches, kasama ang pattern, scale, angle, at origin nito
- Layers at Linetypes

### DXF export

Kasama ang bawat entity type:

- Lines, Circles, Arcs, Ellipses, Polylines (ine-export bilang `LWPOLYLINE`), Splines
- Text
- Dimensions (linear, aligned, continued, radius, diameter, anggulo)
- Leaders (multileaders)
- Hatches, kasama ang pattern, scale, angle, at origin nito
- Layers at Linetypes

Isinusulat ang file bilang AC1032 na DXF, kaya ang guhit na ini-export mula sa KulmanLab ay bumubukas nang buo ang anotasyon sa ibang kasangkapang marunong ng DXF, hindi dumarating bilang hubad na heometriya.

Kung ano naman ang gagawin dito ng bawat tumatanggap na aplikasyon ay nag-iiba pa rin — magkakaiba ang suporta sa DXF sa bawat kasangkapan, at maaaring balewalain ng mas luma ang mga entity na nababasa ng mas bago. Kung kailangang magmukhang eksaktong pareho ang guhit saanman, ang [Print Manager](../print-manager/) ang kumukuha nito bilang PDF o larawan.

## Pangalan ng na-export na file

Ang na-download na file ay pinangalanan batay sa kasalukuyang drawing file (hal. `myplan.json`). Nagbabago ang extension para tumugma sa napiling format. Ang guhit na hindi pa kailanman napangalanan ay nae-export bilang `drawing.dxf` o `drawing.json`.

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
