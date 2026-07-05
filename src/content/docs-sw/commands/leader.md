---
sidebar_position: 10
title: Amri ya Leader — Chora Maelezo ya Multileader yenye Kichwa cha Mshale na Maandishi katika KulmanLab CAD
description: "Amri ya Leader inachora maelezo ya multileader katika awamu nne: ncha ya mshale, kiwiko cha dogleg, nafasi ya maandishi, na lebo iliyoandikwa. Mwelekeo wa maandishi unabadilishwa moja kwa moja kulingana na nafasi ya dogleg. Uagizaji tu katika DXF — viongozi haviandikwi wakati wa kuhifadhi."
keywords: [CAD leader command, multileader annotation, leader CAD, arrow label annotation, dogleg leader, text direction CAD, kulmanlab]
---

# Leader

Amri ya `leader` inachora maelezo ya multileader katika hatua nne: mshale unaogusa kipengele, mstari wa kiongozi unaopinda kwenye dogleg, nanga ya maandishi, na lebo iliyoandikwa. Kati ya amri zote za maelezo, Leader ndiyo pekee inayojumuisha awamu ya kuingiza maandishi ya mwingiliano yenye mwanga wa mshale unaokimbia.

## Muundo wa multileader

```
  ◄── arrowhead tip  (hatua ya 2 — inagusa kipengele)
      \
       \  mstari wa kiongozi
        \
         ●──── dogleg (hatua ya 3) ──── nanga ya maandishi (hatua ya 4)
                                        Maandishi ya lebo  (hatua ya 5)
```

- **Ncha ya mshale** — ncha ya kuelekeza inayowekwa kwenye kipengele kinachofafanuliwa.
- **Dogleg** — kiwiko ambapo mstari wa kiongozi unapinda kuelekea maandishi.
- **Nanga ya maandishi** — mahali ambapo lebo inawekwa. Maandishi yanalingana kushoto au kulia moja kwa moja.

## Kuchora kiongozi

1. Andika `leader` kwenye terminal au bonyeza kitufe cha **Leader** kwenye upau wa zana.
2. **Bonyeza ncha ya mshale**, au andika `X,Y` na bonyeza **Enter** kwa kuratibu sahihi.
3. **Bonyeza dogleg** — mpindo katika kiongozi. Pembe inafungwa kwa vipande vya 45°; andika urefu na bonyeza **Enter** kwa uwekaji sahihi. Au andika `X,Y` kuingiza kuratibu kamili.
4. **Bonyeza nafasi ya maandishi** — mahali ambapo lebo inashikamana. Chaguzi sawa zinatumika: bonyeza, kufunga pembe + urefu, au `X,Y`.
5. **Andika maandishi ya lebo** — mwanga wa turubai unasasishwa moja kwa moja na mshale unaokimbia. Bonyeza **Enter** kuweka.

## Uingizaji wa kuratibu (awamu zote za pointi)

Katika hatua yoyote ya kuchagua pointi (ncha, dogleg, nafasi ya maandishi) unaweza kuandika kuratibu sahihi badala ya kubonyeza:

1. Andika thamani ya X (tarakimu, `.`, au `-`).
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]` ikithibitisha X imefungwa.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka pointi.

## Kufunga pembe (hatua za 3 na 4)

Baada ya kila pointi iliyowekwa, amri inashikamana na miehele ya 45° wakati mshale uko mbali ya kutosha. Wakati umefungwa:
- Mwanga unashikamana na mhimili.
- Andika urefu na bonyeza **Enter** kuweka pointi inayofuata kwa umbali huo sahihi.

Kufunga pembe na uingizaji wa kuratibu vinashindana — mara tu ukiandika tarakimu bila `,` ya awali, amri inatafsiri kama umbali (kufunga pembe lazima kuwe hai). Ili kuingiza kuratibu kamili badala yake, anza na nambari ya X ikifuatiwa na koma.

## Kuhariri lebo ya maandishi

Ukiandika lebo katika hatua ya 5, unaweza kusogea na kuhariri maandishi kabla ya kuweka:

| Kitufe | Kitendo |
|--------|---------|
| Herufi yoyote inayoweza kuchapishwa | Weka kwenye nafasi ya mshale |
| `←` / `→` | Sogeza mshale kushoto au kulia |
| `Backspace` | Futa herufi iliyo upande wa kushoto wa mshale |
| `Delete` | Futa herufi iliyo upande wa kulia wa mshale |
| `Enter` | Weka kiongozi |

## Mwelekeo wa maandishi wa moja kwa moja

Mwelekeo wa maandishi unabadilishwa kulingana na nafasi ya mshale relative na dogleg:

| Nafasi ya mshale | Mwelekeo wa maandishi |
|------------------|-----------------------|
| Upande wa **kulia** wa dogleg | Kushoto kwenda kulia kutoka nanga ya maandishi |
| Upande wa **kushoto** wa dogleg | Kulia kwenda kushoto (imeshikamana upande wa kulia) |

Hakuna marekebisho ya mkono yanayohitajika — sogeza mshale upande unaotaka lebo na itajilinganya sahihi.

## Marejeo ya kibodi

**Awamu za pointi (ncha, dogleg, nafasi ya maandishi)**

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza kuandika kuratibu ya X (kisha `,` kufunga X na kuingiza Y) |
| `,` | Thibitisha X na hamia uingizaji wa Y |
| `0`–`9`, `.`, `-` | Jenga umbali wakati pembe imefungwa |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu au umbali ulioandikwa |

**Awamu ya uingizaji wa maandishi**

| Kitufe | Kitendo |
|--------|---------|
| Herufi inayoweza kuchapishwa | Weka kwenye mshale |
| `←` / `→` | Sogeza mshale |
| `Backspace` | Futa kushoto |
| `Delete` | Futa kulia |
| `Enter` | Weka kiongozi |

| Kitufe | Kitendo |
|--------|---------|
| `Escape` | Ghairi na anza upya hadi hatua ya 2 |

## Kuhariri kiongozi kilichopo

**Bonyeza mara mbili** multileader iliyowekwa kufungua tena kihariri cha maandishi katika hali **tajiri**. Katika hali tajiri unaweza kutumia herufi nzito, italiki, na ubatilishaji wa fonti au urefu kwa kila herufi, na kuingiza mapumziko ya mstari kwa `Enter`. Bonyeza **Escape** kuthibitisha na kufunga.

Angalia [Text Editor — hali tajiri](../../interface/text-editor/#rich-mode) kwa marejeo kamili.

## Kuongeza na kuondoa mikono

- Ili kuongeza mkono wa mshale wa ziada kwenye kiongozi kilichopo: [Leader+](../leader-add/)
- Ili kuondoa mkono kutoka kwa kiongozi chenye mikono miwili au zaidi: [Leader−](../leader-remove/)

## DXF — uagizaji tu

**Viongozi ni wa uagizaji tu.** Vitu vya `MLEADER` kutoka kwa faili za DXF vinasomwa na kuonyeshwa kwa usahihi, lakini viongozi vilivyochorwa katika mhariri **haviandikwi** unapohifadhi faili ya DXF. Tumia viongozi kwa maelezo ya kuona; epuka kutegemea kwa mtiririko wa kazi wa kwenda na kurudi.
