---
sidebar_position: 21
title: "Amri ya Chamfer — Kata Kona ya Moja kwa Moja Kati ya Mistari Miwili katika KulmanLab CAD"
description: "Amri ya Chamfer inaunganisha vipengele viwili vya Line au Polyline kwa mkato wa diagonal wa moja kwa moja. Unabainisha umbali mbili — moja kando ya kila kipengele — na amri inakata vyote viwili hadi pointi hizo na kuingiza mstari wa kuunganisha."
keywords: [amri ya chamfer ya CAD, chamfer ya mstari CAD, mkato wa kona ya diagonal, kona ya bevel CAD, kulmanlab]
---

# Chamfer

Amri ya `chamfer` inakata kona ya diagonal ya moja kwa moja kati ya vipengele viwili vya [Line](../line/) au [Polyline](../polyline/). Unabainisha umbali wa kukata nyuma kando ya kila kipengele (d1 na d2), na amri inakata vipengele vyote viwili hadi pointi hizo na kuingiza mstari wa kuunganisha kati yao.

Kutumia umbali sawasawa kunazalisha mkato wa 45° ulio sawasawa; umbali tofauti unazalisha bevel isiyo sawasawa.

Chamfer inafanya kazi kwenye vipengele vya **Line na Polyline**.

## Kutumia chamfer

1. Andika `chamfer` kwenye terminal au bonyeza kitufe cha upau wa zana cha **Chamfer**.
2. **Andika umbali wa kwanza wa chamfer** (d1 — umbali kando ya kipengele cha kwanza) na ubonyeze **Enter**.
3. **Andika umbali wa pili wa chamfer** (d2 — umbali kando ya kipengele cha pili) na ubonyeze **Enter**.
4. **Bonyeza kipengele cha kwanza** — sehemu unayobonyeza inaamua upande gani wa makutano yoyote unaobakilishwa.
5. **Simama juu ya kipengele cha pili** — hakikisho la mstari wa kuchwa linaonyesha mkato wa chamfer unaosababika. Sogeza kishale hadi upande unaotaka kubaki.
6. **Bonyeza** kutumia. Vipengele vyote viwili vinakatwa na mstari wa chamfer unaingizwa.

```
  Kabla (d1=5, d2=8):          Baada:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Uchaguzi wa upande

Wakati mistari miwili inakutana, chamfer inatumika kwenye kona inayofafanuliwa na nafasi za klik — sehemu ya kila kipengele kwenye **upande sawa na kishale** inabaki.

- Bonyeza karibu na mwisho mmoja wa kipengele cha kwanza kuchagua nusu hiyo.
- Sogeza kishale hadi nusu inayotakiwa ya kipengele cha pili — hakikisho la kuchwa linasasishwa moja kwa moja.

Kwa Polylines, nafasi ya klik inaamua **sehemu** ya polyline inayoshiriki, na kilele cha karibu zaidi kwenye upande wa makutano ndicho kinachokatakatwa.

## Amri inachounda

- Ncha ya kipengele cha kwanza (au kilele cha polyline) kilicho karibu zaidi na makutano kinahamishiwa pointi **T1**, iko d1 kando ya kipengele cha kwanza kutoka makutano.
- Ncha ya kipengele cha pili (au kilele cha polyline) kilicho karibu zaidi na makutano kinahamishiwa pointi **T2**, iko d2 kando ya kipengele cha pili kutoka makutano.
- Kipengele kipya cha Line kinaingizwa kutoka **T1** hadi **T2**.

Mstari uliowekwa unaurithi mzigo wa sasa wa mstari, rangi, safu, na mipangilio ya aina ya mstari.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.` | Ongeza nambari kwenye thamani ya umbali wa sasa |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha umbali ulioandikwa na uendelee |
| `Escape` | Ghairi na urudi mwanzo |

## Vipengele vinavyosaidiwa

| Kipengele | Kinachosaidiwa |
|-----------|---------------|
| Line | Ndiyo |
| Polyline / Rectangle | Ndiyo |
| Arc, Circle, Ellipse | Hapana |
| Text, Spline, Dimension, Leader | Hapana |

## Chamfer dhidi ya Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Aina ya kona | Mkato wa moja kwa moja | Upinde wa mviringo |
| Uingizaji | Umbali mbili (d1, d2) | Radi moja |
| Kipengele kilichowekwa | Line | Arc |
| Vipengele vinavyosaidiwa | Lines na Polylines | Lines peke yake |
