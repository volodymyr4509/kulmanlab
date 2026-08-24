---
title: "Export Manager — Sauke Zane a matsayin DXF ko JSON"
description: "Export Manager yana sauke zanen na yanzu a matsayin fayil na DXF ko JSON (na asali). Kowane tsari yana lissafa ainihin nau'ikan entities da yake ɗauka, kusa da juna, domin ka gani kafin sauke abin da DXF ke barin — a yanzu Hatches, Dimensions, Leaders, da Text."
keywords: [fitar da DXF, fitar da fayil na CAD, sauke DXF ta burauza, adana DXF ta kan layi, fitar da JSON CAD, fitarwar KulmanLab, sauke fayil na CAD, fitar da DXF, adana zane a fayil, sauke DXF]
group: file
order: 6
---

# Export Manager

Umarnin `exportmanager` yana sauke zanen na yanzu zuwa tsarin fayil ɗinka. Akwai tsari biyu, ana nuna su a matsayin katunan kusa da juna: **DXF** don dacewa da sauran kayan aikin CAD da **JSON** don ajiya cikakke a cikin KulmanLab CAD — kowane katin yana lissafa ainihin nau'ikan entities da wannan tsarin ke ɗauka.

## Yadda ake fitarwa

1. Danna maɓallin **Export** na kayan aiki (aikon sauke) a cikin panel na fayil, ko rubuta `exportmanager` a tashar umarni.
2. Popup ɗin **Export Manager** yana buɗewa yana nuna katunan JSON da DXF kusa da juna, kowanne yana lissafa abin da ake fitarwa (kuma, ga DXF, abin da ake barin).
3. Danna kati don zaɓar tsari — **JSON** ko **DXF**.
4. Danna maɓallin **Export \<FORMAT\>**. Ana sauke fayil ɗin kai tsaye zuwa babban fayil na saukewa naka.

Danna `Escape` don rufe popup ɗin ba tare da fitarwa ba.

## Zaɓen tsari

| Tsari | Ƙari | Mafi kyau don | Iyakoki |
|-------|------|----------------|---------|
| **JSON** *(na asali)* | `.json` | Ajiye aiki don sake buɗewa a KulmanLab CAD | Ba ya dacewa da sauran kayan aikin CAD |
| **DXF** | `.dxf` | Raba tare da FreeCAD, LibreCAD, da sauransu | Hatches, Dimensions, Leaders, da Text ba a fitar dasu ba |

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

Kawai entities na geometry ne ake ciki:

- Lines, Circles, Arcs, Ellipses, Polylines (ana fitar dasu a matsayin `LWPOLYLINE`), Splines
- Layers da Linetypes

**Ba a fitar zuwa DXF ba:** Hatches, Dimensions, Leaders, da Text. Dimensions da Leaders suna amfani da tsarin bayanai na musamman na KulmanLab wanda ba za a iya wakilta daidai a cikin DXF na yau da kullum ba; ba a fitar da Hatches zuwa DXF ko kaɗan ba tukuna, ko da yake ana shigo dasu daga can; fitar da Text ma ba a aiwatar dashi ba tukuna. Idan zanenka yana da ɗayan waɗannan, yi amfani da JSON ko [Print Manager](../print-manager/) don kama su.

## Sunan fayil ɗin da aka fitar

Ana sanya wa fayil ɗin da aka sauke suna bisa fayil ɗin zane na yanzu (misali `myplan.json`). Ƙarin yana canzawa don ya dace da tsarin da aka zaɓa.

## Bambanci tsakanin Export Manager da Print Manager

| Fasali | Export Manager | Print Manager |
|--------|-----------------|-----------------|
| Fitarwa | Fayil na tushen vector (.dxf / .json) | Hoton raster (.png / .jpeg / .webp / .pdf) |
| Ana iya gyara a wasu kayan aiki | Eh (DXF) | A'a |
| Yana dawwamar da Layers & Linetypes | Eh | A'a (an rendar shi lebur) |
| Yana kama Dimensions & Leaders | JSON kawai | Eh |

Yi amfani da **Export Manager** lokacin da kake buƙatar fayil da za a iya gyarawa. Yi amfani da [Print Manager](../print-manager/) lokacin da kake buƙatar hoton gani.

## Umarnin da suka shafi wannan

- [Import](../import/) — buɗe fayil na DXF ko JSON
- [Print Manager](../print-manager/) — fitar da canvas a matsayin hoton PNG, JPEG, WebP, ko PDF
- [File Manager](../file-manager/) — bincika zane-zanen da aka ajiye a cikin ajiyar burauza
