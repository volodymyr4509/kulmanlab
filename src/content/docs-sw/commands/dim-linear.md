---
sidebar_position: 13
title: Amri ya Dimension Linear — Vipimo vya Usawa na Wima katika KulmanLab CAD
description: "Amri ya Dimension Linear hupima umbali wa usawa au wima kati ya pointi mbili. Mstari wa kipimo daima uko sambamba na mhimili — bonyeza H au V kulinda mwelekeo, au acha nafasi ya kishale kuamua kiotomatiki. Uhifadhi kamili wa DXF kama viumbe vya DIMENSION."
keywords: [CAD dimension linear, kipimo cha usawa CAD, kipimo cha wima CAD, dimlinear, H V orientation lock, dimension offset, kulmanlab]
---

# Dimension Linear

Amri ya `dimlinear` huweka kipimo cha usawa au wima kati ya asili mbili za mistari ya upanuzi. Mstari wa kipimo daima unakwenda kwa usawa kabisa au wima kabisa — hauwezi kuwekwa kwa pembe yoyote. Tumia [Dimension Aligned](./dim-aligned) unapohitaji kipimo sambamba na mstari wa mwingiliano.

## Muundo wa kipimo cha mstari

```
  |←————— 5.00 —————→|
  |                   |
  ●  (ext line 1)     ●  (ext line 2)
  p1                  p2
```

- **Mistari ya upanuzi** — inashuka kutoka kila pointi iliyopimwa hadi kwenye mstari wa kipimo kwa pembe ya kulia.
- **Mstari wa kipimo** — wa usawa (hupima umbali wa X) au wima (hupima umbali wa Y).
- **Thamani** — umbali ulioorodheshwa kwenye mhimili uliochaguliwa, si umbali wa kweli wa pointi hadi pointi.

## Kuweka kipimo cha mstari

1. Andika `dimlinear` kwenye terminal au bonyeza kitufe cha **Dimension Linear** kwenye upau wa zana.
2. **Bonyeza asili ya kwanza ya mstari wa upanuzi** (p1), au andika `X,Y` na ubonyeze **Enter** kwa uratibu sahihi.
3. **Bonyeza asili ya pili ya mstari wa upanuzi** (p2). Uingizaji wa uratibu unafanya kazi hapa pia.
4. **Sogeza kishale** kuweka nafasi ya mstari wa kipimo. Mwelekeo hugunduliwa kiotomatiki kutoka nafasi ya kishale.
5. **Bonyeza** kuweka, au andika umbali wa nafasi na ubonyeze **Enter** kwa uwekaji sahihi.

## Ugunduzi wa mwelekeo kiotomatiki

Mwelekeo hapolazimishwa, amri inasoma nafasi ya kishale kulingana na pointi mbili zilizopimwa:

| Nafasi ya kishale | Mwelekeo uliogunduliwa | Kinachopimwa |
|-----------------|---------------------|-----------------|
| Juu au chini ya pointi | Usawa | Δ X kati ya p1 na p2 |
| Kushoto au kulia kwa pointi | Wima | Δ Y kati ya p1 na p2 |

Bonyeza **H** kulinda usawa au **V** kulinda wima wakati wowote wakati wa awamu ya uwekaji. Mara baada ya kulindwa, mwelekeo haubadiliki unaposogeza kishale.

## Umbali wa nafasi uliochapishwa

Andika nambari wakati wa uwekaji ili kulazimisha mstari wa kipimo umbali sahihi kutoka kwa pointi zilizopimwa:

| Kitufe | Kitendo |
|-----|--------|
| `0`–`9`, `.` | Ongeza tarakimu kwenye umbali wa nafasi |
| `Backspace` | Futa herufi ya mwisho iliyochapishwa |
| `Enter` / `Space` | Weka kwa umbali uliochapishwa |

Upande wa kishale (juu/chini kwa usawa, kushoto/kulia kwa wima) huamua ishara — mstari wa kipimo unaonekana upande ambao kishale kiko sasa hivi.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|-----|--------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa uratibu wa X (awamu za p1/p2), au umbali wa nafasi (awamu ya uwekaji) |
| `,` | Linda X na endelea na uingizaji wa Y (awamu za p1/p2) |
| `H` | Linda mwelekeo wa usawa (awamu ya uwekaji pekee) |
| `V` | Linda mwelekeo wa wima (awamu ya uwekaji pekee) |
| `Backspace` | Futa herufi ya mwisho iliyochapishwa |
| `Enter` / `Space` | Thibitisha uratibu au nafasi uliochapishwa |
| `Escape` | Ghairi |

## Dimension Linear dhidi ya Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Mhimili | Daima H au V | Sambamba na mstari uliопimwa |
| Hupima | Kipande cha X au Y pekee | Umbali wa kweli wa Euclidean |
| Vitufe vya H/V | Ndiyo — hulinda mwelekeo | Hapana — daima hufuata p1→p2 |
| Bora kwa | Mipangilio ya usawa na wima, michoro ya sakafu | Vipengele vya mwingiliano, mipasuko ya pembe |

## Kuunganisha vipimo

Kuongeza vipimo zaidi vikiendelea kutoka mstari wa mwisho wa upanuzi, tumia [Dimension Continue](./dim-continue) mara baada ya kuweka hiki.

## DXF — kiumbe cha DIMENSION

Vipimo vya mstari huhifadhiwa kama viumbe vya `DIMENSION` vyenye `rotationDeg` imewekwa kuwa `0` (usawa) au `90` (wima). Asili za mistari ya upanuzi, nafasi ya mstari wa kipimo, nafasi ya maandishi, thamani iliyopimwa, mtindo wa mshale, urefu wa maandishi, na bendera zote za onyesho huhifadhiwa bila kupoteza data.
