---
sidebar_position: 4
title: Mirror Command — Reflect Entities Across a Two-Point Axis in KulmanLab CAD
description: "Amri ya Mirror huakisi vipengele vilivyochaguliwa kwenye mstari wa kioo uliofafanuliwa na mibonyezo miwili. Asili daima huhifadhiwa — Mirror huunda nakala mpya zilizoakisiwa. Mhimili wa kioo unaweza kuwa katika pembe yoyote na hufunga kwa nyongeza za 45°."
keywords: [CAD mirror command, reflect entities CAD, mirror symmetry CAD, flip objects CAD, mirror axis CAD, kulmanlab]
---

# Mirror

Amri ya `mirror` huunda nakala zilizoakisiwa za vipengele vilivyochaguliwa zilizoonekana kwenye mhimili wa nukta mbili. Asili **daima huhifadhiwa** — tofauti na [Move](./move) au [Rotate](./rotate), Mirror haibadilishi vipengele vilivyopo kamwe; inaongeza tu vipya.

## Njia mbili za kuanza

**Chagua kwanza, kisha onyesha kioo** — chagua vipengele kwanza, kisha anzisha:

1. Chagua vipengele moja au zaidi kwenye turubai.
2. Andika `mirror` kwenye terminal au bonyeza kitufe cha **Mirror** kwenye upau wa zana.
3. **Bonyeza nukta ya kwanza** ya mhimili wa kioo, au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
4. **Bonyeza nukta ya pili** — nakala zilizoakisiwa zimewekwa na amri inatoka. Uingizaji wa kuratibu unafanya kazi hapa pia.

**Anzisha, kisha chagua** — anza amri bila chochote kilichochaguliwa:

1. Andika `mirror` au bonyeza kitufe cha upau wa zana.
2. **Chagua vitu** — bonyeza kubadilisha, au buruta kuchagua kwa eneo.
3. Bonyeza **Enter** au **Space** kuthibitisha uchaguzi.
4. **Bonyeza nukta ya kwanza**, kisha **bonyeza nukta ya pili** ya mhimili wa kioo (uingizaji wa kuratibu unapatikana katika hatua zote mbili).

```
  Asili:             Mhimili wa kioo:    Matokeo:
                     |
  [kipengele A]  →   |    →    [kipengele A] + [A iliyoakisiwa]
                     |
```

Hakiki ya moja kwa moja ya nakala zilizoakisiwa hufuata kishale unapoweka nafasi ya nukta ya pili ya mhimili.

## Mhimili wa kioo

Mhimili ni mstari usio na kikomo kupitia nukta mbili zilizobonyezwa. Unaweza kuwa katika pembe yoyote:

- Sogeza kishale karibu na **mhimili wa kufunga 45°** (0°, 45°, 90°, 135°, …) na mhimili hufunga kwa pembe hiyo — muhimu kwa uakisi safi wa usawa, wima, au msalaba.
- Bonyeza mbali na eneo la kufunga kwa mhimili wa pembe huru.

## Uingizaji wa kuratibu

Katika hatua yoyote ya nukta ya mhimili, andika nafasi sahihi badala ya kubonyeza:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuthibitisha.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Enter` / `Space` | Thibitisha uchaguzi |
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X |
| `,` | Funga X na nenda kwa uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu iliyoandikwa |
| `Escape` | Ghairi na upya |

## Uchaguzi wakati wa amri

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Hubadilisha kipengele chini ya kishale |
| **Buruta kulia** (mkali) | Huongeza vipengele vilivyo ndani kikamilifu ya sanduku |
| **Buruta kushoto** (inayopita) | Huongeza vipengele vinavyokutana na sanduku |
| **Enter** / **Space** | Huthibitisha uchaguzi |

## Kinachoakisiwa

Kila aina ya kipengele inasaidiwa. Jiometri huakisiwa kwenye mhimili kihisabati:

| Kipengele | Kinachobadilika |
|-----------|-----------------|
| Line | Nukta zote mbili za mwisho huakisiwa |
| Circle | Kituo huakisiwa; radius haubadiliki |
| Arc | Kituo huakisiwa; pembe za mwanzo na mwisho huhesabiliwa upya kwenye mhimili |
| Ellipse | Kituo huakisiwa; mwelekeo wa mhimili mkuu hubadilishwa kwenye mhimili |
| Polyline / Rectangle | Kila ncha huakisiwa |
| Maandishi | Nukta ya nanga huakisiwa; mfuatano wa maandishi **haupinduliwi** |
| Spline | Ncha zote za kudhibiti / nukta za kufaa huakisiwa |

## Mirror dhidi ya Copy

| | Mirror | Copy |
|---|--------|------|
| Asili | Daima huhifadhiwa | Daima huhifadhiwa |
| Nafasi ya kipengele kipya | Huakisiwa kwenye mhimili | Inahamishwa kwa vekta ya msogeo |
| Bora kwa | Miundo ya ulinganifu, vipengele vya pande mbili | Kurudia jiometri katika mwelekeo wowote |
