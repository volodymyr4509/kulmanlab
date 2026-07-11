---
title: Amri ya Fillet — Pinda Pembe Kati ya Mistari Miwili katika KulmanLab CAD
description: "Amri ya Fillet inaunganisha viumbe viwili vya Line kwa upinde wa tangent wa radi iliyobainishwa, ikipunguza kila mstari hadi sehemu ya tangent. Onyesho la upinde wa nukta ya mstari linakusaidia kuchagua pembe sahihi kabla ya kubonyeza."
keywords: [CAD fillet command, round corner CAD, fillet arc, tangent arc two lines, kulmanlab]
group: edit
order: 11
---

# Fillet

Amri ya `fillet` inapinda pembe kati ya viumbe viwili vya [Line](../line/) kwa kuingiza upinde wa tangent wa radi fulani na kupunguza kila mstari hadi sehemu ambapo upinde unaanza. Matokeo ni pembe laini, yenye radi inayounganisha mistari yote miwili.

Fillet inafanya kazi kwenye **viumbe vya Line peke yake**.

## Kutumia fillet

1. Andika `fillet` kwenye terminal au bonyeza kitufe cha **Fillet** kwenye upau wa zana.
2. **Andika radi ya fillet** na ubonyeze **Enter**.
3. **Bonyeza mstari wa kwanza** — sehemu unayobonyeza inaamua upande gani wa makutano yoyote unaoachwa.
4. **Hover juu ya mstari wa pili** — onyesho la upinde wa nukta ya mstari linaonyesha fillet itakayotokea. Sogeza kishale upande unaotaka kuacha.
5. **Bonyeza** kutumia. Mistari yote miwili inapunguzwa na upinde unaingizwa.

```
  Kabla:                      Baada ya fillet (radi r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Kuchagua upande kwa mistari inayovuka

Mistari miwili inapovuka, fillet hutumika kwenye pembe iliyobainishwa na nafasi za kubonyeza — sehemu ya kila mstari kwenye **upande sawa na kishale** inabaki.

- Bonyeza karibu na ncha moja ya mstari wa kwanza kuchagua nusu hiyo.
- Sogeza kishale kwenye nusu inayotakiwa ya mstari wa pili — onyesho la nukta la mstari husasishwa moja kwa moja.

## Amri hii inaunda nini

- Ncha ya mstari wa kwanza iliyo karibu na makutano inasogezwa hadi sehemu ya tangent **T1**.
- Ncha ya mstari wa pili iliyo karibu na makutano inasogezwa hadi sehemu ya tangent **T2**.
- Kiumbe kipya cha Arc kinaingizwa kutoka **T1** hadi **T2**, kikiwa tangent kwa mistari yote miwili.

Upinde uliongezwa unarith unene wa mstari wa sasa, rangi, safu, na mipangilio ya aina ya mstari.

## Marejeo ya kibodi

| Kitufe | Hatua |
|--------|-------|
| `0`–`9`, `.` | Ongeza tarakimu kwenye thamani ya radi |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha radi iliyoandikwa na uende kwenye kuchagua mstari |
| `Escape` | Ghairi na weka upya |

## Viumbe vinavyoungwa mkono

| Kiumbe | Imeungwa mkono |
|--------|----------------|
| Line | Ndiyo — kama kiumbe cha kwanza na cha pili |
| Arc, Circle, Ellipse, Polyline | Hapana |
| Text, Spline, Dimension, Leader | Hapana |

## Fillet dhidi ya Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Aina ya pembe | Upinde laini | Kata ya moja kwa moja |
| Ingizo | Radi moja | Umbali mbili (d1, d2) |
| Kiumbe kilichoingizwa | Arc | Line |
| Viumbe vinavyoungwa mkono | Mistari peke yake | Mistari na Polylines |
