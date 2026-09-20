---
title: Umarnin Hatch Manager — Bincika da Loda Pattern na .pat
description: Umarnin Hatch Manager yana bude akwatin tattaunawa don bincika pattern na hatch tare da preview na swatch kai tsaye, da kuma loda fayilolin pattern na .pat naka. Fayilolin da aka loda ana ajiye su a cikin browser kuma suna rufe pattern din da aka gina wanda ke da suna daya.
keywords: [hatch manager, pattern na hatch na musamman CAD, loda fayil na pat, acad.pat, laburaren pattern na hatch, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Umarnin `SarrafaSalo` yana bude akwatin tattaunawa don bincika pattern na hatch tare da preview na swatch kai tsaye, da kuma loda fayilolin pattern na `.pat` naka don amfani da su tare da [Hatch](../hatch/).

## Buɗe Hatch Manager

Rubuta `SarrafaSalo` a cikin terminal. Wannan ya bambanta da mai zaben pattern da ke bude idan ka danna chip na **Pattern** na hatch — mai zaben yana zaben pattern don hatch daya, Hatch Manager shine inda kake kara ko cire fayilolin `.pat`.

## Rukunin Pattern

| Rukuni | Abin ciki |
|--------|-----------|
| **User** | Pattern daga fayilolin `.pat` da kake loda kanka, an rarraba su bisa fayil din da kowane pattern ya fito (ana nunawa ne kawai bayan ka loda daya) |
| **Standard** | `SOLID` tare da tebur na pattern na wannan zanen — kowane sabon zane yana farawa da laburare daya da aka gina, daidai da yadda layers dinsa da linetypes suke |

Danna kowane pattern a cikin jerin (ko yi amfani da `↑`/`↓`) don yi masa preview a dama — swatch da aka zana da lambar coding daya da ake cika canvas da ita, don haka shi ne ainihin abin da zanen zai nuna, tare da suna, bayani, da adadin layukan pattern.

## Loda Fayil na Pattern na Musamman

1. Danna **Add .pat File** a kasan akwatin tattaunawa.
2. Zabi fayil na `.pat` — tsarin yau da kullum na pattern na hatch. Fayil daya sau da yawa yana bayyana pattern masu suna da yawa a lokaci daya; duka suna bayyana a matsayin shigarwar daban-daban da aka rarraba a karkashin sunan wannan fayil.
3. Ana ajiye fayilolin da aka loda a kai a cikin browser (IndexedDB), an tsara su daga na baya-bayan nan da aka kara, kuma ana sake lodawa su ta atomatik lokacin da ka sake bude KulmanLab CAD.

Lodawa fayil da ke bayyana pattern da ke da suna daya da wanda aka gina **yana rufe** tsohon — wannan shine hanyar da ake goyon baya don samun ma'anonin pattern na hukuma na Autodesk: loda ainihin `acad.pat`, kuma sigoginsa na ANSI31 da sauran sunayen daidai suna daukar wurin kimantawar KulmanLab kansa.

Idan wani zane ya yi ishara da sunan pattern da ba ya cikin laburarenka — an shigo da shi daga DXF wanda ya yi amfani da pattern daga `acad.pat` da ba ka loda ba — hatch din yana ci gaba da bayyana, yana amfani da `ANSI31` a matsayin madadi, maimakon komawa zuwa cikawa mara pattern.

## Cire Fayil na Pattern

Danna **×** kusa da sunan fayil a cikin rukunin **User** don cire shi tare da kowane pattern da ya bayyana. Kowane hatch da ke amfani da daya daga cikin wadancan pattern nan take yana komawa zuwa `ANSI31`. Ba za a iya cire pattern na **Standard** da aka gina ba.

## Bayanin Keyboard

| Key | Aiki |
|-----|------|
| `↑` / `↓` | Motsa zaben sama ko kasa a cikin jerin pattern |
| `Escape` | Rufe Hatch Manager |

## Umarnin da suka shafi wannan

- [Hatch](../hatch/) — yana cika yankin da aka danna ta amfani da pattern da aka zaba a halin yanzu
- [Font Manager](../font-manager/) — irin wannan tsari na lodawa/bincike, don fonts na musamman maimakon pattern na hatch
