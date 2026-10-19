---
title: "Amri ya Point — weka nukta kwenye mchoro katika KulmanLab CAD"
description: "Amri ya Point huweka nukta kwa kila kubofya, X,Y iliyoandikwa au umbali kwenye mwelekeo uliofungwa, hadi Enter, Space au Escape. Nukta huchorwa kama kitone, hubeba safu na rangi ya sasa, na husafiri kama viumbe vya DXF POINT."
keywords: ["amri ya nukta CAD", "weka nukta CAD", "kiumbe cha DXF POINT", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Amri ya `Nukta` huweka nukta kwa kila uteuzi na hubaki hai hadi ubonyeze Enter, Space au Escape. Nukta ni mahali bila ukubwa: huchorwa kama kitone kidogo na hubeba safu na rangi ya sasa. Huhifadhiwa kama kiumbe cha `POINT`.

## Kuweka nukta

1. Andika `Nukta` kwenye terminal au bofya **Point**, kitufe cha mwisho kwenye paneli ya Shapes.
2. **Bofya** mahali nukta inapoenda, au andika `X,Y` na ubonyeze **Enter** kwa mahali halisi. Kila uteuzi huweka nukta na terminal huandika viwianishi vyake; amri hubaki hai kwa inayofuata.
3. Au funga mwelekeo kutoka kwa [pini ya vekta](../../interface/vector-pins/) na uandike umbali — nukta hutua hasa umbali huo kando yake.
4. Bonyeza **Enter**, **Space** au **Escape** kumaliza. Enter na Space humaliza tu wakati hakuna kinachoandikwa.

## Nukta inavyoonekana

Nukta huchorwa kama kitone chenye kipenyo-nusu cha 1 px katika kila kiwango cha kukuza, kwa hivyo hubaki ikionekana unapopunguza na haikui unapokuza. Mtindo wa nukta wa mchoro (`$PDMODE` na `$PDSIZE`) bado haujasomwa, kwa hivyo kila nukta ni kitone, DXF ikisema chochote.

## Kuhariri nukta

Nukta iliyochaguliwa ina kishikio kimoja, kinachoisogeza. Uteuzi wa kisanduku huchukua nukta ikiwa ndani ya kisanduku, kwa mwelekeo wowote wa kuburuta.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) na [Scale](../scale/) hufanya kazi kwenye nukta kama kwenye kiumbe kingine chochote. Dirisha la sifa linaonyesha Position X na Position Y, pamoja na rangi na safu.

## DXF — kiumbe cha POINT

Nukta husomwa kutoka na kuandikwa kwenye DXF kama viumbe vya `POINT` vyenye mahali, rangi na safu (misimbo ya kikundi 10/20, 62 na 8), na husafiri pia kupitia JSON iliyohifadhiwa. Hapo awali zilirukwa wakati wa kuingiza. [Export Manager](../export-manager/) huorodhesha Points kwenye safu yake, kwa hivyo unaweza kuziacha nje ya usafirishaji.

---

*Yanayohusiana: [Line](../line/) kwa uingizaji ule ule wa viwianishi, na [Vector Pins](../../interface/vector-pins/) kwa kuweka nukta kwa umbali uliowekwa kando ya mwelekeo.*
