---
title: Export — Sauke Zanen-zane a matsayin DXF ko JSON
description: Umarnin Export yana sauke zanen na yanzu a matsayin fayil na DXF ko JSON (na asali). JSON yana kiyaye dukkan abubuwa ciki har da girma-girma da leaders; DXF yana dacewa da wasu kayan aikin CAD.
keywords: [fitar da DXF, fitar da fayil na CAD, saukar DXF ta burauza, ajiye DXF ta kan layi, fitar da JSON CAD, KulmanLab export, saukar fayil na CAD, fitar da DXF, ajiye zane a matsayin fayil, saukar DXF]
group: file
order: 5
---

# Export

Umarnin **Export** yana sauke zanen na yanzu zuwa tsarin fayil naka. Tsari biyu ake da su: **DXF** don dacewa da wasu kayan aikin CAD da **JSON** don ajiya cikakke a cikin KulmanLab CAD.

## Yadda za a fitar

1. Danna maɓallin kayan aiki na **Export** (alamar sauke) a panel na File.
2. Popup ɗin **Export Manager** yana buɗewa.
3. Danna kati na tsari don zaɓen tsari — **JSON** ko **DXF**.
4. Danna maɓallin **Export**. Fayil yana sauka zuwa folder ɗin sauke ka na tsoho kai tsaye.

## Zaɓen tsari

| Tsari | Ƙari | Mafi kyau don | Iyaka |
|--------|-----------|----------|-------------|
| **JSON** *(na asali)* | `.json` | Ajiye aiki don sake buɗewa a KulmanLab CAD | Ba ya dacewa da wasu kayan aikin CAD |
| **DXF** | `.dxf` | Bayarwa da FreeCAD, LibreCAD, da sauransu | Ba a fitar da girma-girma da leaders ba |

**Yaushe za a yi amfani da JSON:** kowane lokaci da kake son ajiye cikakken kwafin aikinka. JSON shine tsarin asali na KulmanLab kuma yana kiyaye kowane abu daidai — ciki har da girma-girma, leaders, da dukkan bayanan layer.

**Yaushe za a yi amfani da DXF:** idan kana bukatar bayar da zanen ga wani mai amfani da wata manhajar CAD. Fayil ɗin da aka fitar yana amfani da tsarin DXF na AC1012 kuma za a iya buɗe shi a yawancin kayan aiki masu dacewa da DXF.

## Abin da ake fitarwa a kowace tsari

### Fitar da JSON

Ana haɗa dukkan nauʼukan abubuwa:

- Layi, da'irori, baka, ellipses, polylines, splines, rubutu
- Girma-girma (layi, daidaici, ci-gaba, radius, diameter)
- Multileaders
- Ma'anonin layer da tebur na nauʼukan layi

### Fitar da DXF

Ana haɗa abubuwan geometry kaɗai:

- Layi, da'irori, baka, ellipses, polylines (an fitar da su a matsayin `LWPOLYLINE`), splines, rubutu
- Ma'anonin layer da tebur na nauʼukan layi

**Ba a haɗa su a DXF ba:** abubuwan girma-girma da multileaders. Waɗannan suna amfani da tsarin bayanai na musamman ga KulmanLab da ba za a iya wakiltar su daidai a DXF na yau da kullum ba. Idan zanenka yana da bayanai, yi amfani da JSON ko [Print](../print/) don kama su ta hoto.

## Sunan fayil ɗin da aka fitar

Fayil ɗin da aka sauke ana masa suna bisa fayilin zane na yanzu (misali `myplan_May22_14:30:00.json`). Ƙarin yana canzawa don dacewa da tsarin da aka zaɓa.

## Bambanci tsakanin Export da Print

| Fasali | Export | Print |
|---------|--------|-------|
| Fitarwa | Fayil na tushen vector (.dxf / .json) | Hoto na raster (.png / .jpeg / .webp / .pdf) |
| Ana iya gyarawa a wasu kayan aiki | Eh (DXF) | Aʼa |
| Yana kiyaye layers da nauʼukan layi | Eh | Aʼa (an rinda shi flat) |
| Yana kama girma-girma da leaders | JSON kaɗai | Eh |

Yi amfani da **Export** idan kana bukatar fayil da za a iya gyarawa. Yi amfani da [Print](../print/) idan kana bukatar hoto na wucin gadi.

## Umarni masu alaƙa

- [Import](../import/) — buɗe fayil na DXF ko JSON
- [Print](../print/) — fitar da canvas a matsayin hoto na PNG, JPEG, WebP, ko PDF
- [Files](../files/) — bincika zanen-zanen da aka ajiye a ajiyar burauza
