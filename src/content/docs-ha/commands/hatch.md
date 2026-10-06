---
title: Umarnin Hatch — Cika Wani Yanki da Pattern
description: Umarnin Hatch yana cika yankin da ke kewaye da wurin da aka danna da pattern — kowace hadewar layuka, baka, ellipses, da splines da ta rufe kanta tana kewaye da yanki, kuma duk wani siffa da aka rufe a ciki ya rage a matsayin tsibiri wanda ba a cika ba.
keywords: [umarnin hatch CAD, cika yanki CAD, pattern na hatch CAD, ANSI31, cikawa SOLID, cika iyaka CAD, abu na DXF HATCH, kulmanlab]
group: shapes
order: 7
---

# Hatch

Umarnin `Cikawa` yana cika yankin da ke kewaye da wurin da aka danna da pattern. Ba a fara zana iyaka ba — tana zuwa daga abin da aka riga aka zana a kan canvas, don haka [Line](../line/) huɗu daban-daban da suka hadu karshe da karshe suna kewaye da yanki daidai kamar yadda [Polyline](../polyline/) da aka rufe take yi, kuma duk wani siffa da aka rufe a ciki yankin ya zama tsibiri wanda cikawar ba ta taɓa shi.

## Cika Wani Yanki

1. Rubuta `Cikawa` a cikin terminal ko danna maballin **Hatch** a kan toolbar (alamar swatch).
2. **Danna wuri** a cikin yankin da kake son cikawa.
3. Umarnin ya kasance a aiki, don haka ci gaba da dannawa don cika wasu yankuna — kowace dannawa tana ƙirƙirar `Hatch` abu nata.
4. Danna **Enter**, **Space**, ko **Escape** idan ka gama.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   danna a cikin iyakar
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   waje; da'irar ta rage a
  └─────────────┘        └─────────────┘   matsayin tsibiri
```

## Marfe na maɓallan madannai

| Maɓalli | Aiki |
|-----|--------|
| `Enter` / `Space` | Kammala umarnin Hatch |
| `Escape` | Kammala umarnin Hatch (kamar Enter/Space) |

## Abin da zai iya zama iyaka

Kowace hadewar wadannan nau'ukan abubuwa na iya zama iyaka, a kowace hadewa, muddin sun hadu karshe da karshe ba tare da wani gibi ba:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (iyakarta ta rufe kanta)
- [Ellipse](../ellipse/) (rufe, ko bakan ellipse a bude a matsayin wani bangare na babban lup)
- [Polyline](../polyline/) (a bude ko a rufe) da [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/) — kowane madauki na spline mai gicciye kansa yanki ne na kansa

Abubuwan Text, Multileader, da Dimension ba a taba dauke su a matsayin iyaka ba.

## Tsibirai

Duk abin da aka rufe gabaki daya a cikin yankin da ka danna — da'ira, polyline da aka rufe, iyakar wani hatch — ya zama **tsibiri**: cikawar ta tsaya a gefenta kuma tsibirin da kansa ya rage babu kowa. Sanya siffa da aka rufe a cikin wata siffa da aka rufe kuma cikawar tana canzawa, rami a cikin cikawa a cikin rami, bin doka daya na ciki/waje a kowane mataki.

## Idan dannawa ta gaza

Idan wurin da ka danna ba a kewaye shi ba, ko kuma iyaka tana da gibi, terminal yana bayyana dalili maimakon yin shiru:

| Sako | Ma'ana |
|------|--------|
| "no boundary found" | Babu abin da aka samu a kowace hanya daga wurin da aka danna — babu wata iyaka kusa ko kadan |
| "point is not enclosed" | Akwai iyaka kusa, amma siffar da take yi ba ta kunshi wurin da ka danna ba |
| "boundary is open" | Iyaka mafi kusa tana da gibi a wani wuri — bi ta kuma duba kowace hadewa daidai take |
| "boundary too complex" | Ba a iya rufe lup na iyaka a cikin iyakar tafiya ba — yawanci hadewar abubuwa da yawa da suka mamaye juna |

Umarnin ya kasance a aiki bayan gazawar dannawa — karanta sako, gyara zanen ko danna wani wuri, sannan ka sake gwadawa.

## Zaben Pattern

Kowane sabon hatch yana farawa an cika shi da `ANSI31` (ko wani pattern da hatch na *karshe* da ka gyara ya yi amfani da shi) — babu mai zaben pattern kafin zanawa. Don amfani da wani pattern daban:

1. Zabi hatch da ke akwai kuma bude filin **Pattern** a cikin panel na properties — wannan yana bude mai zaben pattern, tebur na swatches masu suna wadanda aka rukuna bisa inda kowane pattern ya fito.
2. Danna wani pattern don amfani da shi — cikawar tana sabuntawa nan take.

Wannan zaben kuma ya zama tsoho ga hatch na *gaba* da za ka kirkira da umarnin `Cikawa`, hanya daya da zaben layer ko launi yake wucewa gaba. Don haka don hatch yankuna da yawa sabbin da wani pattern na musamman: cika yanki daya, saita pattern dinsa sau daya, sannan ci gaba da yin hatch — kowace cikawa bayan haka tana farawa da wannan pattern an riga an yi amfani da shi.

Duba [Hatch Manager](../hatch-manager/) don loda fayilolin pattern na `.pat` naka da kuma bincika dukkan laburare.

**SOLID** shigarwa ce ta yau da kullum a cikin jerin pattern, ba wani akwatin dubawa ko yanayi daban ba — zabi shi kamar yadda za ka zabi ANSI31 ko wani pattern mai suna.

## Properties

| Property | Ma'ana |
|----------|--------|
| Pattern | Sunan pattern, daga kalmomin pattern da aka raba (duba [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Yana daidaita nisa tsakanin layukan pattern — manyan darajoji suna sanya layukan pattern nisa da juna |
| Pattern Angle | Yana juya pattern ba tare da alaka da iyaka ba |
| Origin X / Origin Y | Inda maimaitawar pattern din kansa ta tsaya, a cikin daidaitattun zane |

Motsa, juya, madubi, ko daidaita hatch yana daukar wurin da aka sanya pattern din tare da shi, don haka cikawar ta kasance daidai da iyaka — ba ka bukatar sake saita scale ko angle bayan sauyawa.

## Gyara Grip na Iyaka

Hatch da aka zaba yana kama iyakarsa kamar yadda Polyline take kama kusurwoyinta — grip a kowace kusurwa inda gefuna biyu suka hadu, da kuma daya a tsakiyar kowane gefe (lup da aka rufe kamar hatch na da'ira ko ellipse yana kama a maimakon haka a wuraren axis dinsa hudu).

| Grip | Abin da yake yi |
|------|-------------------|
| **Kusurwa** | Yana motsa wannan kusurwa. Gefen dai-dai yana bi daidai; baka yana sake daidaitawa don ci gaba da wucewa ta wuraren biyu da ke kusa da shi; gefen ellipse ko spline zai iya sauka kawai a wani wuri a kan curve dinsa, don haka kusurwar tana manne wa wurin da ke kusa da ita a kansa |
| **Tsakiyar gefe — gefen layi, ellipse, ko spline** | Yana zamewa dukkan gefen; ana yanke ko kara gefunan da ke bangarorin biyu don su kasance a hade da shi |
| **Tsakiyar gefe — gefen baka** | Yana **lankwasa** bakan ta cikin cursor maimakon zamewar sa — karshen biyu suna rage daidai inda suke, kuma babu wani abu da ke motsawa a cikin iyaka |
| **Tsakiya** (dukkan hatch) | Yana kunna [Move](../move/) don dukkan hatch |

Preview na ja yana nuna iyaka a matsayin layin da aka tsagaggi maimakon cikawa mai kauri yayin da kake ja — cikawa ta asali ta rage a bayyane a kasa har sai ka saki, saboda preview zai iya zana ne kawai a kan abin da ke akwai, ba zai taba cire komai daga ciki ba.

## DXF — Abu na HATCH

Ana **shigo da** hatches daga abubuwan `HATCH`: KulmanLab yana karanta geometry na iyaka tare da sunan pattern, scale, da angle (DXF group codes 70/41/52) — **ba** ya karanta ma'anonin layukan pattern din kansa da aka rubuta a cikin fayil din. Maimakon haka, ana neman sunan pattern a cikin laburaren pattern na KulmanLab kansa (tsoffin da aka gina tare da duk abin da ka loda a cikin [Hatch Manager](../hatch-manager/)). Sunan da ba ya cikin laburarenka yana koma zuwa ANSI31 don zanen ya ci gaba da karantawa a matsayin hatched, kuma ana rubuta bayani sau daya.

Har yanzu ba a karanta lups na spline da wasu applications suka rubuta ba (DXF boundary edge type 4).

Ana **fitar da** lallausan zane zuwa DXF a matsayin abubuwan `HATCH`. Zoben iyaka suna fita tare da sunan tsari (lambar rukuni 2), alamar cikawa (70) da kusurwa da ma'aunin wannan lallausan zanen (52/41) — kuma sabanin hanyar shigarwa, ana kuma rubuta ma'anonin layukan tsarin da aka warware a ciki (78, tare da 53/43/44/45/46/79/49). An yi wannan bambanci da gangan: KulmanLab yana iya samun suna daga ɗakin karatunsa, amma aikace-aikacen da ke karɓar fayil ɗin ƙila ba shi da wannan tsarin, don haka layukan suna tafiya tare.

## Umarnin da suka shafi wannan

- [Hatch Manager](../hatch-manager/) — bincika laburaren pattern kuma loda fayilolin `.pat`
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — duka suna daukar wurin da aka sanya pattern na hatch tare da su
- [Delete](../delete/) — yana share hatch ba tare da shafar abubuwan da suka kirkiro iyakarsa ba
