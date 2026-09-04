---
title: "Export Manager — Sauke Zane a matsayin DXF ko JSON"
description: Sauke zane a matsayin DXF ko JSON. Duk biyu suna ɗauke da kowane abu — siffofi, rubutu, ma'auni, layukan nuni, lallausan zane — tare da sassa da nau'ikan layi.
keywords: [fitar da DXF, fitar da fayil na CAD, sauke DXF ta burauza, adana DXF ta kan layi, fitar da JSON CAD, fitarwar KulmanLab, sauke fayil na CAD, fitar da DXF, adana zane a fayil, sauke DXF]
group: file
order: 6
---

# Export Manager

Umarnin `exportmanager` yana sauke zanen na yanzu zuwa tsarin fayil ɗinka. Akwai tsari biyu, ana nuna su a matsayin katunan kusa da juna: **DXF** don dacewa da sauran kayan aikin CAD da **JSON** don ajiya cikakke a cikin KulmanLab CAD — kowane katin yana lissafa ainihin nau'ikan entities da wannan tsarin ke ɗauka.

## Yadda ake fitarwa

1. Danna maɓallin **Export** na kayan aiki (aikon sauke) a cikin panel na fayil, ko rubuta `exportmanager` a tashar umarni.
2. Popup ɗin **Export Manager** yana buɗewa yana nuna katunan JSON da DXF kusa da juna, kowanne yana lissafa abin da ake fitarwa.
3. Danna kati don zaɓar tsari — **JSON** ko **DXF**.
4. Danna maɓallin **Export \<FORMAT\>**. Ana sauke fayil ɗin kai tsaye zuwa babban fayil na saukewa naka.

Danna `Escape` don rufe popup ɗin ba tare da fitarwa ba.

## Zaɓen tsari

| Tsari | Ƙari | Mafi kyau don | Iyakoki |
|-------|------|----------------|---------|
| **JSON** *(na asali)* | `.json` | Ajiye aiki don sake buɗewa a KulmanLab CAD | Ba ya dacewa da sauran kayan aikin CAD |
| **DXF** | `.dxf` | Raba tare da FreeCAD, LibreCAD, da sauransu | Nawa ke tsira ya dogara ga manhajar da ta karɓa |

**Yaushe za a yi amfani da JSON:** duk lokacin da kake son ajiye cikakkiyar kwafin aikinka. JSON shine tsarin asali na KulmanLab kuma yana dawwamar da kowace entity daidai — ciki har da Dimensions, Leaders, Hatches, da duk bayanan Layer.

**Yaushe za a yi amfani da DXF:** lokacin da kake buƙatar mika zanen ga wani wanda ke amfani da wata manhajar CAD. Fayil ɗin da aka fitar yana amfani da tsarin DXF na AC1032 kuma ana iya buɗe shi a mafi yawan kayan aikin da suka dace da DXF.

## Abin da ake fitarwa a kowane tsari

### Fitar da JSON

Kowane nau'in entity yana ciki:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Dimensions (madaidaici, daidaitacce, ci gaba, radius, diameter)
- Leaders (multileaders)
- Hatches, ciki har da pattern, scale, angle, da origin nasu
- Layers da Linetypes

### Fitar da DXF

Kowane nau'in entity yana ciki:

- Lines, Circles, Arcs, Ellipses, Polylines (ana fitar dasu a matsayin `LWPOLYLINE`), Splines
- Text
- Dimensions (madaidaici, daidaitacce, ci gaba, radius, diameter)
- Leaders (multileaders)
- Hatches, ciki har da pattern, scale, angle, da origin nasu
- Layers da Linetypes

Ana rubuta fayil ɗin a matsayin DXF na AC1032, don haka zanen da aka fitar daga KulmanLab yana buɗewa a wasu kayan aikin da ke goyon bayan DXF tare da bayanansa cikakke, ba a matsayin siffofi kawai ba.

Abin da kowace manhajar da ta karɓa za ta yi da shi kuma ya bambanta — goyon bayan DXF ya sha bamban tsakanin kayan aiki, kuma tsohuwar na iya ƙyale abubuwan da sabuwar take karantawa. Idan dole zane ya zama iri ɗaya a ko'ina, [Print Manager](../print-manager/) yana ɗaukarsa a matsayin PDF ko hoto maimakon haka.

## Sunan fayil ɗin da aka fitar

Ana sanya wa fayil ɗin da aka sauke suna bisa fayil ɗin zane na yanzu (misali `myplan.json`). Ƙarin yana canzawa don ya dace da tsarin da aka zaɓa.

## Bambanci tsakanin Export Manager da Print Manager

| Fasali | Export Manager | Print Manager |
|--------|-----------------|-----------------|
| Fitarwa | Fayil na tushen vector (.dxf / .json) | Hoton raster (.png / .jpeg / .webp / .pdf) |
| Ana iya gyara a wasu kayan aiki | Eh (DXF) | A'a |
| Yana dawwamar da Layers & Linetypes | Eh | A'a (an rendar shi lebur) |
| Yana kama Dimensions & Leaders | Eh | Eh |

Yi amfani da **Export Manager** lokacin da kake buƙatar fayil da za a iya gyarawa. Yi amfani da [Print Manager](../print-manager/) lokacin da kake buƙatar hoton gani.

## Umarnin da suka shafi wannan

- [Import](../import/) — buɗe fayil na DXF ko JSON
- [Print Manager](../print-manager/) — fitar da canvas a matsayin hoton PNG, JPEG, WebP, ko PDF
- [File Manager](../file-manager/) — bincika zane-zanen da aka ajiye a cikin ajiyar burauza
