---
title: "Export Manager — Sauke Zane a matsayin DXF ko JSON"
description: Sauke zane a matsayin DXF ko JSON, kana zaɓar kowane nau'i da zai shiga. Duk biyu suna ɗauke da siffofi, rubutu, ma'auni, layukan nuni da lallausan zane.
keywords: [fitar da DXF, fitar da fayil na CAD, sauke DXF ta burauza, adana DXF ta kan layi, fitar da JSON CAD, fitarwar KulmanLab, sauke fayil na CAD, fitar da DXF, adana zane a fayil, sauke DXF]
group: file
order: 6
---

# Export Manager

Umarnin `exportmanager` yana sauke zanen yanzu zuwa tsarin fayilolinka. Tsari biyu suna gefe da gefe — **DXF** don daidaituwa da sauran kayan aikin CAD da **JSON** don ajiya cikakke a cikin KulmanLab CAD — kuma kowanne yana da nasa jerin abin da za a sa cikin fayil.

## Yadda ake fitarwa

1. Danna maɓallin **Export** na kayan aiki (aikon sauke) a cikin panel na fayil, ko rubuta `exportmanager` a tashar umarni.
2. Taga **Export Manager** tana buɗewa da ginshiƙai biyu, **JSON** da **DXF**, kowanne yana lissafa nau'ikan abubuwan zanen tare da akwatin zaɓi da adadi.
3. Cire alamar daga abin da ba ka so. Tun farko duk suna da alama.
4. Danna **Export JSON** ko **Export DXF**. Fayil ɗin yana saukowa cikin babban fayil ɗin saukewa kuma taga tana rufewa.

Danna `Escape` don rufe popup ɗin ba tare da fitarwa ba.

## Zaɓar abin da za a fitar

Ginshiƙai biyu suna lissafa nau'ikan abubuwa iri ɗaya, kowanne da adadin da ke cikin zanen:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Duk suna da alama lokacin buɗe taga, don haka fitarwa nan take tana ba ka zanen gaba ɗaya. Cire alamar wani nau'i domin a bar shi daga wannan fayil ɗin kaɗai.

- **Ginshiƙan biyu masu zaman kansu ne.** Cire alamar Hatches a ƙarƙashin DXF ba ya canza abin da **Export JSON** ke samarwa — kowane tsari yana riƙe nasa zaɓin.
- **Nau'in da ba ka da shi yana bayyana a hade.** Layin da adadinsa yake `0` ba za a iya sa masa alama ba, don haka jerin yana zama takaitaccen ƙidayar zanen.
- **Adadin hoto ne na lokaci ɗaya.** Ana ɗauka lokacin buɗe taga kuma ba ya sabuntawa idan zanen ya canza a baya. Rufe ka sake buɗewa domin sabuntawa.
- **Ba a share komai ba.** Cire alama tana tsara fayil ɗin da aka fitar kawai; zanen kansa bai canza ba.

**Linear Dimensions** ya haɗa da ma'aunin madaidaici, na jeri da na ci gaba: nau'i ɗaya da umarni uku daban-daban ke ƙirƙira. Radius, diamita da kusurwa kowanne yana da layinsa.

Domin fayil ɗin yankewa, cire alamar Text, layukan ma'auni huɗu, Leaders da Hatches sannan ka danna **Export DXF** — duba [shirya DXF domin yankewa da laser](/ha/blog/prepare-dxf-for-laser-cutting/).

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
- Dimensions (madaidaici, daidaitacce, ci gaba, radius, diameter, kusurwa)
- Leaders (multileaders)
- Hatches, ciki har da pattern, scale, angle, da origin nasu
- Layers da Linetypes

### Fitar da DXF

Kowane nau'in entity yana ciki:

- Lines, Circles, Arcs, Ellipses, Polylines (ana fitar dasu a matsayin `LWPOLYLINE`), Splines
- Text
- Dimensions (madaidaici, daidaitacce, ci gaba, radius, diameter, kusurwa)
- Leaders (multileaders)
- Hatches, ciki har da pattern, scale, angle, da origin nasu
- Layers da Linetypes

Ana rubuta fayil ɗin a matsayin DXF na AC1032, don haka zanen da aka fitar daga KulmanLab yana buɗewa a wasu kayan aikin da ke goyon bayan DXF tare da bayanansa cikakke, ba a matsayin siffofi kawai ba.

Abin da kowace manhajar da ta karɓa za ta yi da shi kuma ya bambanta — goyon bayan DXF ya sha bamban tsakanin kayan aiki, kuma tsohuwar na iya ƙyale abubuwan da sabuwar take karantawa. Idan dole zane ya zama iri ɗaya a ko'ina, [Print Manager](../print-manager/) yana ɗaukarsa a matsayin PDF ko hoto maimakon haka.

## Sunan fayil ɗin da aka fitar

Ana sanya wa fayil ɗin da aka sauke suna bisa fayil ɗin zane na yanzu (misali `myplan.json`). Ƙarin yana canzawa don ya dace da tsarin da aka zaɓa. Zanen da ba a taɓa ba shi suna ba yana fita da sunan `drawing.dxf` ko `drawing.json`.

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
