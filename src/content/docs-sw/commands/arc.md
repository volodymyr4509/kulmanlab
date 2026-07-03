---
sidebar_position: 5
title: "Amri ya Arc — Chora Upinde wa Pointi Tatu Kwa Kutumia Njia ya Circumcircle katika KulmanLab CAD"
description: "Amri ya Arc inachora upinde wa mduara kupitia pointi tatu zilizopigiwa klik kwa kutumia jiometri ya circumcircle. Vipeo vya mwanzo na mwisho hukuruhusu kuburuta ncha za upinde hadi pembe na radi mpya baada ya kuweka. Mzunguko kamili wa DXF kama vipengele vya ARC."
keywords: [amri ya arc ya CAD, upinde wa pointi tatu CAD, upinde wa circumcircle, chora arc CAD, kipengele cha ARC DXF, uhariri wa kipeo cha arc, kulmanlab]
---

# Arc

Amri ya `arc` inachora upinde wa mduara kupitia pointi tatu unazobonyeza. Upinde unakokotolewa kama circumcircle ya kipekee inayopita pointi zote tatu — hakuna haja ya kubainisha kituo au radi moja kwa moja. Upinde unaendesha kutoka klik ya kwanza hadi klik ya tatu, ukipita kwenye ya pili.

## Kuchora upinde

1. Andika `arc` kwenye terminal au bonyeza kitufe cha upau wa zana cha **Arc**.
2. **Bonyeza pointi ya kwanza** — mwisho mmoja wa upinde. Au andika `X,Y` na ubonyeze **Enter** kwa kuratibu halisi.
3. **Bonyeza pointi ya pili** — pointi ambayo upinde lazima upite (inadhibiti mkondo na mwelekeo). Uingizaji wa kuratibu unafanya kazi hapa pia.
4. **Bonyeza pointi ya tatu** — mwisho mwingine wa upinde. Upinde uwekwa na amri inaondoka. Uingizaji wa kuratibu unafanya kazi hapa pia.

```
           ● (klik ya 2 — pointi ya katikati kwenye mkondo)
          / \
         /   \
        ●     ●
     ya 1       ya 3
```

Hakikisho la mstari linaunganisha klik mbili za kwanza unaposimamisha ya tatu. Kutoka kwa klik ya pili kuendelea hakikisho la upinde hai linafuatilia kishale.

> **Pointi zilizo mstari**: ikiwa pointi zote tatu ziko kwenye mstari wa moja kwa moja, upinde hauwezi kokotolewa na hakuna kipengele kinachowekwa. Sogeza pointi ya pili mbali na mstari na ujaribu tena.

## Uingizaji wa kuratibu

Katika hatua yoyote ya tatu unaweza kuandika nafasi halisi badala ya kubonyeza:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka pointi.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X |
| `,` | Funga X na uhamie uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu iliyoandikwa |
| `Escape` | Tupa pointi zote zilizowekwa na uondoke |

## Uhariri wa kipeo — kurekebisha ncha na radi

Upinde uliochaguliwa unaonyesha vipeo vitatu:

| Kipeo | Nafasi | Kinachofanya |
|-------|--------|--------------|
| **Center** | Kituo cha kijiometri cha circumcircle | Husongesha upinde wote; radi na pembe hazibadiliki |
| **Start** | Ncha ya kwanza kwenye upinde | Buruta ili kusongesha mwanzo kando ya circumcircle — hubadilisha pembe ya mwanzo na radi |
| **End** | Ncha ya mwisho kwenye upinde | Buruta ili kusongesha mwisho kando ya circumcircle — hubadilisha pembe ya mwisho na radi |

Kuburuta kipeo cha mwanzo au mwisho kukihamisha hadi mahali pa kuburuta na kukokotoa upya pembe na radi kutoka nafasi hiyo mpya kuhusu kituo. Ncha ya kinyume inabaki imara.

## Kuchagua upinde

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Huchagua ikiwa klik inashuka karibu na mkondo wa upinde (si kamba) |
| **Buruta kulia** (mkali) | Pointi za sampuli zilizosambazwa kando ya upinde lazima zote ziwe ndani ya sanduku |
| **Buruta kushoto** (makutano) | Pointi yoyote ya sampuli kwenye upinde inayoanguka ndani ya sanduku huuchagua |

## Amri za uhariri zinazosaidiwa

| Amri | Kinachotokea kwa upinde |
|------|------------------------|
| [Move](../move/) | Hutafsiri kituo; radi na pembe hazibadiliki |
| [Copy](../copy/) | Huunda upinde unaofanana katika nafasi mpya |
| [Rotate](../rotate/) | Huzungusha kituo na kubadilisha pembe za mwanzo/mwisho kwa kiasi cha mzunguko |
| [Mirror](../mirror/) | Huakisi kituo na kubadilisha pembe za mwanzo/mwisho upande wa pili wa mhimili wa kioo |
| [Scale](../scale/) | Hupima ukubwa wa nafasi ya kituo na kuzidisha radi kwa kiwango cha ukubwa |
| [Offset](../offset/) | Huunda upinde mseto kwa radi kubwa au ndogo, upeo wa pembe sawa |
| [Delete](../delete/) | Huondoa upinde |

## Mali

**Jumla**

| Mali | Chaguomsingi | Maana |
|------|-------------|-------|
| Color | 256 (ByLayer) | Faharasa ya rangi ya ACI |
| Layer | `0` | Ugawaji wa safu |
| Linetype | ByLayer | Muundo wa aina ya mstari uliopewa jina |
| Linetype Scale | 1 | Kiwango cha ukubwa kwenye muundo wa aina ya mstari |
| Thickness | 0 | Unene wa kuchomeka |

**Jiometri**

| Mali | Maana |
|------|-------|
| Center X / Center Y | Kituo cha circumcircle |
| Radius | Radi ya circumcircle |
| Start Angle | Pembe kwa digrii ambapo upinde unaanza (inayopimwa kutoka mhimili chanya wa X) |
| End Angle | Pembe kwa digrii ambapo upinde unaisha |

## Arc dhidi ya Circle — lini kutumia lipi

| | Arc | Circle |
|---|-----|--------|
| Upeo | Sehemu — kutoka klik ya kwanza hadi ya tatu | 360° kamili |
| Njia ya uingizaji | Pointi tatu kwenye mkondo | Kituo + radi (bonyeza au andika) |
| Uingizaji wa maandishi | Kuratibu ya X,Y kwa kila pointi | Thamani ya radi (kituo pia kinakubali X,Y) |
| Badilisha ukubwa baada ya kuweka | Buruta vipeo vya mwanzo/mwisho | Buruta kipeo chochote cha kardinali |
| Bora zaidi kwa | Vipande vya pembe, kona za mviringo, njia zenye upinde | Mashimo kamili, vipengele vya mviringo |

## DXF — kipengele cha ARC

Upinde huhifadhiwa kama vipengele vya `ARC` katika faili ya DXF, vikihifadhi kuratibu za kituo, radi, pembe ya mwanzo, na pembe ya mwisho. Mali zote — ikiwa ni pamoja na rangi, safu, aina ya mstari, kiwango cha aina ya mstari, na unene — huzunguka bila kupoteza. Programu yoyote inayolingana na DXF (LibreCAD, FreeCAD, n.k.) inasoma hizi kama upinde wa kawaida.
