---
title: Import — Buɗe Fayilolin DXF ko JSON a KulmanLab CAD
description: Yi amfani da umarnin Import don buɗe fayilolin DXF ko JSON na KulmanLab a KulmanLab CAD. Yana goyon bayan layuka, da'irori, baka, polylines, splines, rubutu, girma-girma, da leaders.
keywords: [shigo da fayil na DXF, buɗe DXF a burauza, shigo da fayil na CAD ta kan layi, buɗe fayil na DXF, mai kallon DXF na burauza, shigo da JSON CAD, KulmanLab import, mai kallon DXF na CAD kyauta, loda zane, DXF zuwa burauza]
group: file
order: 1
---

# Import

Umarnin **Import** yana loda zane da ke akwai daga tsarin fayil na gida naka zuwa KulmanLab CAD. Ana goyon bayan duka tsarin **DXF** na yau da kullum da tsarin **JSON** na kanta na KulmanLab.

## Yadda za a shigo da fayil

1. Danna maɓallin kayan aiki na **Import** (alamar folder) a panel na File a saman allo.
2. Mai zaɓen fayil na burauzarka yana buɗewa. Bincika zuwa fayil ɗin zanenka ka zaɓe shi.
3. Zanen yana loda a kan canvas nan take. Viewport yana daidaita dukkan abubuwa kai tsaye.

Ko kuma, za ka iya ja da jefa fayil kai tsaye a kan canvas.

## Tsarin fayil da ake goyon baya

| Tsari | Ƙari | Yaushe za a yi amfani |
|--------|-----------|-------------|
| **DXF** | `.dxf` | Zanen-zane daga FreeCAD, LibreCAD, ko wasu kayan aikin CAD |
| **JSON** *(na asali)* | `.json` | Zanen-zane da aka ajiye a baya daga KulmanLab CAD — cikakke inganci |

## Abin da ake shigo da shi daga DXF

KulmanLab yana fassara nauʼukan abubuwan DXF masu zuwa:

| Nauʼin abu | Lambar DXF | Bayanai |
|-------------|----------|-------|
| Line | `LINE` | |
| Circle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Dimension | `DIMENSION` | |
| Multileader | `MULTILEADER` | |
| Hatch | `HATCH` | Ana karanta sunan pattern, scale, da angle; suna da ba ya cikin laburaren pattern naka yana koma zuwa ANSI31. Duba [Hatch](../hatch/) |

Ana kuma shigo da ma'anonin layer da tebur na nauʼukan layi daga fayil ɗin DXF idan sun kasance.

Ana yin banza da abubuwan da ke amfani da nauʼukan DXF marasa goyon baya a shiru — sauran zanen har yanzu yana loda.

## Sunayen fayiloli da ajiya

Fayil ɗin da aka shigo da shi yana riƙe da sunansa na asali. Idan an riga an yi amfani da wannan suna ta wani zane da aka ajiye, ana ƙara wani ƙari irin na Finder/Explorer kai tsaye (`myplan (2)`, `myplan (3)`, …) don kada a rubuta a kan abin da ke can. Za ka iya sake wa fayil suna daga baya daga [File Manager](../file-manager/#sake-wa-fayil-suna).

Ana ajiye zanen kai tsaye zuwa ajiyar burauza (IndexedDB) bayan shigarwa, don haka yana bayyana a panel na [File Manager](../file-manager/) kuma yana wanzuwa bayan rananan-shafi.

## Abin da ke faruwa da zanen na yanzu

Shigarwa yana maye gurbin canvas na yanzu. Babu haɗuwa ko ƙarawa. Idan kana da canje-canje da ba a ajiye ba, [fitar](../export-manager/) da zanen na yanzu tukuna.

## A farawa

KulmanLab yana sake buɗe fayil ɗin da aka gyara kwanan nan kai tsaye idan shafin ya loda. Idan babu fayilolin da aka ajiye, ana loda zanen misali na tsoho.

## Warware matsala

| Matsala | Sanadi mai yiwuwa | Gyara |
|---------|-------------|-----|
| Canvas babu kome bayan shigarwa | Abubuwan DXF suna amfani da nauʼukan marasa goyon baya (misali INSERT) | An yi banza da abubuwan — tashar umarni tana lissafa kowane nau'in da aka tsallake tare da adadi, misali `Could not read INSERT: 12`. Fayil da ba zane mai inganci ba kwata-kwata yana nuna `Could not read <file>: not a valid drawing file` |
| Maɓallin Import ba ya yin komai | Burauza ta toshe mai zaɓen fayil | Danna maɓallin sake; wasu burauza suna bukatar sabuwar motsi na mai amfani |
| Girma-girma suna bayyana ba daidai ba | DXF daga kayan aiki wanda ke rubuta geometry na girma-girma mara ma'auni | Sake fitarwa daga manhajar tushe ta amfani da sigar DXF ta yanzu |

## Umarni masu alaƙa

- [Export Manager](../export-manager/) — sauke zanen na yanzu a matsayin DXF ko JSON
- [File Manager](../file-manager/) — bincika kuma mayar da zanen-zanen da aka ajiye a burauza
- [New File](../new-file/) — fara zane mai tsabta
