---
title: Amri ya Array Grid — Kurudia Vipengele Mlalo na Wima
description: Amri ya Array Grid huunda gridi ya mstatili ya nakala kutoka kwa vipengele vilivyochaguliwa — andika idadi ya safu mlalo, safu wima, na nafasi kati yao moja kwa moja kwenye terminal, bila kubonyeza pointi yoyote.
keywords: [amri ya array CAD, arraygrid, array ya mstatili CAD, muundo wa gridi CAD, kurudia vipengele CAD, kunakili array CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Amri ya `ArrayGrid` huunda gridi ya mstatili ya nakala kutoka kwa vipengele vilivyochaguliwa — ingiza idadi ya safu mlalo, idadi ya safu wima, na nafasi kati yao, yote yakiandikwa kwenye terminal. Uchaguzi wa asili unachukua kiini cha safu mlalo 0, safu wima 0; kila kiini kingine ni nakala iliyohamishwa.

## Njia mbili za kuanza

**Chagua kwanza, kisha array** — chagua vipengele kwanza, kisha amilisha:

1. Chagua kipengele kimoja au zaidi kwenye kanvasi.
2. Andika `arraygrid` kwenye terminal (`arr` pekee inatosha — haina utata) au bonyeza kitufe cha upau wa zana cha **Array Grid**.
3. Andika idadi ya **safu mlalo** na ubonyeze **Enter**.
4. Andika idadi ya **safu wima** na ubonyeze **Enter**.
5. Andika **nafasi kati ya safu mlalo** na ubonyeze **Enter**.
6. Andika **nafasi kati ya safu wima** na ubonyeze **Enter** — gridi inaundwa mara moja.

**Amilisha, kisha chagua** — anza amri bila kitu chochote kilichochaguliwa:

1. Andika `arraygrid` au bonyeza kitufe cha upau wa zana.
2. **Chagua vitu** — bonyeza kubadilisha vipengele mmoja mmoja, au buruta kuchagua kwa eneo.
3. Bonyeza **Enter** au **Space** kuthibitisha uchaguzi.
4. Endelea na safu mlalo → safu wima → nafasi ya safu mlalo → nafasi ya safu wima kama hapo juu.

```
  Safu mlalo 2 x safu wima 3:

  [B] [B] [B]   <- safu mlalo 1 (nakala zilizohamishwa)
  [A] [A] [A]   <- safu mlalo 0: uchaguzi wa asili, nakala kulia
```

> Terminal inahitaji tu herufi za kutosha kutokuwa na utata — kuandika `arr` na kubonyeza **Enter** huamilisha Array Grid moja kwa moja, kwa sababu hakuna jina lingine la amri linaloanza na herufi hizo tatu (Arc, Area, Align, na Angle zote hutofautiana mapema zaidi).

## Safu mlalo, safu wima, na nafasi

| Ombi | Inakubali | Vidokezo |
|------|-----------|----------|
| Safu mlalo | Nambari kamili chanya (1, 2, 3…) | Tarakimu pekee — hakuna nukta ya desimali au alama |
| Safu wima | Nambari kamili chanya (1, 2, 3…) | Tarakimu pekee — hakuna nukta ya desimali au alama |
| Nafasi ya safu mlalo | Desimali yenye alama (mf. `10`, `-5.5`) | Umbali kati ya safu mlalo; hasi hubadilisha mwelekeo |
| Nafasi ya safu wima | Desimali yenye alama (mf. `10`, `-5.5`) | Umbali kati ya safu wima; hasi hubadilisha mwelekeo |

Ukiwa na safu mlalo 1 na safu wima 1, hakuna nakala inayoundwa — amri inamaliza bila kubadilisha mchoro.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Enter` / `Space` | Thibitisha uchaguzi na uendelee kwenye ombi la safu mlalo |
| `0`–`9` | Ingiza tarakimu za safu mlalo au safu wima |
| `0`–`9`, `.`, `-` | Ingiza tarakimu za nafasi ya safu mlalo/wima (`-` kama herufi ya kwanza pekee) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa ya ombi la sasa |
| `Enter` | Thibitisha ombi la sasa na uendelee kwenye linalofuata |
| `Escape` | Futa thamani za safu mlalo/wima/nafasi zilizoandikwa na urudi kwenye awamu ya uchaguzi |

## Uchaguzi wakati wa amri

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Chagua au aachia kipengele kilicho chini ya kishale kutoka/kwenye uchaguzi |
| **Buruta kulia** (mkali) | Ongeza vipengele vilivyo ndani kabisa ya sanduku |
| **Buruta kushoto** (makutano) | Ongeza vipengele vinavyoingiliana na mpaka wa sanduku |
| **Enter** / **Space** | Thibitisha uchaguzi na uendelee kwenye ombi la safu mlalo |

## Baada ya array

Nakala mpya zinaongezwa kwenye mchoro na amri inamaliza — uchaguzi wa asili unafutwa. Endesha **Array Grid** tena, au anza amri mpya.

## Array Grid dhidi ya Copy

| | Array Grid | Copy |
|---|-----------|------|
| Uchaguzi wa pointi | Hakuna — safu mlalo, safu wima, na nafasi vinaandikwa | Pointi ya msingi na lengwa vinabonyezwa (au kuandikwa) |
| Nakala zilizoundwa | Safu mlalo × Safu wima − 1 | Hasa 1 kwa kila operesheni ya kunakili |
| Mpangilio | Gridi ya mstatili ya kawaida | Popote, kwa offset yoyote |
| Bora kwa | Kurudia kipengele kimoja katika muundo wa kawaida (mashimo, vigae, vifungashio) | Nakala moja katika nafasi yoyote |

## Vipengele vinavyosaidiwa

Array Grid hufanya kazi na kila aina ya kipengele. Vipengele vyote hutekeleza `translate(dx, dy)` kwa ndani — operesheni ile ile inayotumiwa na [Copy](../copy/) na [Move](../move/) — hivyo hakuna kinachoondolewa.
