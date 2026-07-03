---
sidebar_position: 14
title: Amri ya Dimension Aligned — Vipimo vya Umbali wa Kweli kwa Pembe Yoyote katika KulmanLab CAD
description: "Amri ya Dimension Aligned hupima umbali wa kweli wa mstari ulionyoofu kati ya pointi mbili. Mstari wa kipimo hufanana na mstari wa p1→p2 kwa pembe yoyote — tofauti na Dimension Linear ambayo iko mdogo kwa usawa au wima. Inasaidiana kikamilifu na DXF kama vipengele vya DIMENSION."
keywords: [CAD dimension aligned, dimaligned, diagonal dimension CAD, true distance dimension, angled dimension CAD, kulmanlab]
---

# Dimension Aligned

Amri ya `dimaligned` huweka kipimo ambacho hupima **umbali wa kweli wa mstari ulionyoofu** kati ya pointi mbili. Mstari wa kipimo hufanana na mstari unaoungana pointi hizo mbili, hivyo unaweza kuwa kwa pembe yoyote. Hii ndiyo tofauti kuu kutoka kwa [Dimension Linear](../dim-linear/), ambayo iko mdogo kwa usawa au wima.

## Muundo wa kipimo kilichopangwa

```
     ●  p2
    /|
   / |  (ext line 2, perpendicular to dim line)
  /  |
 /←5.00→/
/  /
●  /  (ext line 1, perpendicular to dim line)
p1
```

- **Mistari ya upanuzi** — inayopendeza mstari wa kipimo, iliyochorwa kutoka kwa kila pointi iliyopimwa.
- **Mstari wa kipimo** — unafanana na p1→p2, umeshiftishwa upande mmoja kwa nafasi ya mshale.
- **Thamani** — umbali wa kweli wa Euclidean `|p1 – p2|`.

## Kuweka kipimo kilichopangwa

1. Andika `dimaligned` kwenye terminal au bonyeza kitufe cha **Dimension Aligned** kwenye upau wa zana.
2. **Bonyeza asili ya mstari wa kwanza wa upanuzi** (p1), au andika `X,Y` na bonyeza **Enter** kwa kuratibu sahihi.
3. **Bonyeza asili ya mstari wa pili wa upanuzi** (p2). Uingizaji wa kuratibu unafanya kazi hapa pia.
4. **Sogeza mshale** upande mmoja ili kuweka mwelekeo wa mstari wa kipimo.
5. **Bonyeza** kuweka, au andika umbali wa mwelekeo na bonyeza **Enter** kwa uwekaji sahihi.

## Umbali wa mwelekeo ulioandikwa

Andika nambari wakati wa uwekaji ili kurekebisha mstari wa kipimo kwa umbali sahihi wa mwelekeo kutoka kwa mstari wa p1→p2:

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.` | Ongeza tarakimu kwa mwelekeo |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` / `Space` | Weka kwa mwelekeo ulioandikwa |

Upande wa mshale huamua upande ambao mstari wa kipimo utaonekana.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X (hatua za p1/p2), au umbali wa mwelekeo (hatua ya uwekaji) |
| `,` | Funga X na nenda uingizaji wa Y (hatua za p1/p2) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` / `Space` | Thibitisha kuratibu au mwelekeo ulioandikwa |
| `Escape` | Ghairi |

## Dimension Aligned dhidi ya Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Pembe ya mstari wa kipimo | Inafanana na p1→p2 — pembe yoyote | Usawa au wima daima |
| Hupima | Umbali wa kweli wa Euclidean | Kipande cha X au Y pekee |
| Kufunga mwelekeo wa H/V | Hapana | Ndiyo — vifungo vya `H` na `V` |
| Bora kwa | Vipengele vya diagonal, vikato vya pembe | Mpangilio wa mstari wa moja kwa moja, sehemu zilizopangwa kwenye gridi |

## Kuhariri lebo — hali rahisi

**Bonyeza mara mbili** kipimo kilichopangwa kilichowekwa kufungua kihariri cha maandishi katika hali **rahisi**. Kihariri kimejazwa awali na thamani inayoonyeshwa kwa sasa ili uweze kuweka mshale na kuihariri moja kwa moja.

| Kipengele | Tabia |
|----------|-------|
| Bold / Italic / Font / Height | Inatumika kwa **lebo nzima** mara moja |
| Uumbizaji kwa kila herufi | Haisaidiwi |
| `Enter` | Inathibitisha thamani na kufunga kihariri |
| Mistari mingi | Haisaidiwi |

Angalia [Text Editor — hali rahisi](../interface/text-editor#simple-mode) kwa marejeo kamili.

## Mnyororo wa vipimo

Ili kuongeza vipimo zaidi vikiendelea kutoka kwa mstari wa pili wa upanuzi wa hiki, tumia [Dimension Continue](../dim-continue/) — inafunga kwenye pembe sawa ya kipimo kama kipimo hiki kilichopangwa.

## DXF — kipengele cha DIMENSION (aina iliyopangwa)

Vipimo vilivyopangwa vimehifadhiwa kama vipengele vya `DIMENSION` na `dimType = 1` (aligned). Asili za mistari ya upanuzi, nafasi ya mstari wa kipimo, nafasi ya maandishi, thamani iliyopimwa, mzunguko, mtindo wa mshale, na bendera zote za uonyeshaji zinasindikwa bila kupoteza.
