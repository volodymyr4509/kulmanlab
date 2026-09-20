---
title: Amri ya Fillet — Pinda Pembe kwa Upinde wa Tangent
description: "Amri ya Fillet inapinda pembe kati ya sehemu mbili za Line, Arc au Polyline kwa upinde wa tangent wa radi iliyobainishwa. Kupinda kona ya polyline yenyewe huingiza upinde moja kwa moja ndani yake; kupinda kwenye polyline iliyo wazi huunganisha pande zote mbili kuwa polyline mpya."
keywords: [CAD fillet command, round corner CAD, fillet arc, tangent arc, polyline fillet, arc fillet, kulmanlab]
group: edit
order: 11
---

# Fillet

Amri ya `Viringisha` inapinda pembe kati ya sehemu mbili za [Line](../line/), [Arc](../arc/) au [Polyline](../polyline/) kwa kuingiza upinde wa tangent wa radi fulani, na kupunguza (au kuunganisha) vipengele vilivyochaguliwa hadi sehemu hiyo.

Fillet inafanya kazi kwenye vipengele vya **Line, Arc, na Polyline** — ikiwa ni pamoja na sehemu za moja kwa moja au za mviringo za polyline yenyewe.

## Kutumia fillet

1. Andika `Viringisha` kwenye terminal au bonyeza kitufe cha **Fillet** kwenye upau wa zana.
2. **Andika radi ya fillet** na ubonyeze **Enter**.
3. **Bonyeza mstari wa kwanza, upinde, au sehemu ya polyline** — sehemu unayobonyeza inaamua upande gani wa makutano yoyote unaoachwa.
4. **Hover juu ya kipengele cha pili** — onyesho la upinde wa nukta linaonyesha fillet itakayotokea. Sogeza kishale upande unaotaka kuacha.
5. **Bonyeza** kutumia.

```
  Kabla:                      Baada ya fillet (radi r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Kuchagua upande kwa vipengele vinavyovuka

Vipengele viwili vinapovuka, fillet hutumika kwenye pembe iliyobainishwa na nafasi za kubonyeza — sehemu ya kila kipengele kwenye **upande sawa na kishale** inabaki.

- Bonyeza karibu na ncha moja ya kipengele cha kwanza kuchagua nusu hiyo.
- Sogeza kishale kwenye nusu inayotakiwa ya kipengele cha pili — onyesho la nukta husasishwa moja kwa moja.

## Amri hii inaunda nini

Matokeo yanategemea ulichochagua:

- **Vipengele viwili huru vya Line/Arc**, au jozi yoyote isiyo na polyline iliyo wazi: vyote viwili vinapunguzwa hadi sehemu za tangent **T1**/**T2**, na kipengele kipya cha Arc kinaingizwa kati yao.
- **Sehemu mbili za polyline moja zinazoshiriki kilele cha kona**: hakuna kipengele kipya — fillet yenyewe inakuwa sehemu ya polyline. Kilele cha kona kinabadilishwa na nukta mbili za tangent, na upinde kati yao unahifadhiwa kama thamani ya bulge ya ukingo huo — sawa kabisa na jinsi kona ya polyline iliyopindwa inavyosafiri kupitia DXF.
- **Hali nyingine yoyote inayohusisha polyline iliyo wazi** — polylines mbili tofauti zilizo wazi, au polyline moja iliyo wazi na kipengele huru cha Line/Arc: vyote viwili vinaunganishwa kuwa **polyline mpya**, ambapo kila upande unabaki hadi nukta yake ya tangent na upinde wa fillet unaongezwa kama sehemu ya ziada ya bulge, ikichukua nafasi ya vipengele asili.

Upinde ulioingizwa au kupanuliwa unarithi unene wa mstari wa sasa, rangi, safu, na mipangilio ya aina ya mstari (au, unapoungana na polyline, mipangilio ya polyline yenyewe).

## Kona zisizo na pembe halisi ya kupinda

Ikiwa sehemu mbili zilizochaguliwa tayari zinakutana kwa tangent kwenye kilele kimoja — kona ya polyline iliyonyooka, au mstari unaobadilika kwa upole kuwa sehemu ya mviringo ya mwendelezo wa tangent — hakuna kona halisi ambayo duara lolote linaweza kuipinda. Fillet hugundua hali hii na kukataa badala ya kuunda kitanzi kisichofaa, ikionyesha ujumbe `cannot fillet: no tangent circle fits there`.

## Marejeo ya kibodi

| Kitufe | Hatua |
|--------|-------|
| `0`–`9`, `.` | Ongeza tarakimu kwenye thamani ya radi |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` / `Space` | Thibitisha radi iliyoandikwa na uende kwenye kuchagua kipengele |
| `Escape` | Ghairi na weka upya |

## Viumbe vinavyoungwa mkono

| Kiumbe | Imeungwa mkono |
|--------|----------------|
| Line | Ndiyo |
| Arc | Ndiyo |
| Polyline (sehemu ya moja kwa moja au ya mviringo) | Ndiyo |
| Circle, Ellipse | Hapana |
| Text, Spline, Dimension, Leader | Hapana |

## Fillet dhidi ya Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Aina ya pembe | Upinde laini | Kata ya moja kwa moja |
| Ingizo | Radi moja | Umbali mbili (d1, d2) |
| Kiumbe kilichoingizwa | Arc | Line |
| Viumbe vinavyoungwa mkono | Line, Arc, na Polyline (sehemu ya moja kwa moja au ya mviringo) | Line na Polyline (sehemu za moja kwa moja pekee) |
