---
sidebar_position: 8
title: "Spline CV Command — Draw B-Splines by Placing Control Vertices in KulmanLab CAD"
description: "Amri ya Spline CV inachora B-spline ya cubic kwa kuweka ncha za udhibiti. Mkunjo huvutiwa kuelekea ncha lakini hupita tu katika ya kwanza na ya mwisho (vifundo vilivyofungwa). Kila kishiko cha CV kinaweza kuburuzwa kubadilisha mkunjo baada ya kuwekwa. Safari kamili ya DXF kama vipande vya SPLINE."
keywords: [CAD spline command, B-spline control vertices, clamped spline CAD, draw spline CAD, SPLINE DXF entity, spline grip editing, kulmanlab]
---

# Spline CV

Amri ya `splinecv` inachora **B-spline ya cubic** kwa kuweka ncha za udhibiti (CVs). Mkunjo unaotokana huvutiwa kuelekea kila CV lakini haupiti kwao — isipokuwa katika ncha ya kwanza kabisa na ya mwisho, ambapo **vifundo vilivyofungwa** hushikilia mkunjo hasa. Hii hukupa udhibiti wa angavu wa umbo: vuta ncha kusukuma mkunjo kuelekea bila kulazimisha kugusa kila nukta.

## Kuchora spline kwa ncha za udhibiti

1. Andika `splinecv` kwenye terminal au bonyeza kitufe cha **Spline CV** kwenye upau wa zana.
2. **Bonyeza kuweka ncha za udhibiti** — kila bonyeza inaongeza ncha. Au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
3. Bonyeza **Enter** kumaliza (inahitaji angalau ncha 2).

```
  CV ●         ● CV
      \       /
       \     /    ← mkunjo unavyovutwa kuelekea CVs
        \   /         lakini haupiti kwao
  CV ●   ●   ● CV (mwanzo/mwisho: mkunjo unagusa hapa)
```

Hakiki ya moja kwa moja inasasishwa unavyosogeza kishale baada ya kila ncha, ukionyesha jinsi spline itakavyoonekana na nukta inayofuata katika nafasi ya kishale. Bonyeza **Escape** kufuta ncha zote zilizowekwa na kutoka.

## Uingizaji wa kuratibu

Badala ya kubonyeza, andika nafasi sahihi kwa ncha yoyote ya udhibiti:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka ncha.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X |
| `,` | Funga X na nenda kwa uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu iliyoandikwa, au maliza spline kama hakuna uingizaji unaoendelea na ncha ≥ 2 zipo |
| `Escape` | Futa ncha zote na toka |

## Uhariri wa kushika — kubadilisha kupitia ncha za udhibiti

Spline ya CV iliyochaguliwa inaonyesha kishiko kimoja kwa kila ncha ya udhibiti:

| Kishiko | Mahali | Kinachofanya |
|---------|--------|--------------|
| **Ncha ya udhibiti** | Katika nafasi ya kila CV | Buruta kuhamisha CV hiyo — mkunjo unabadilika kuelekea nafasi mpya |

Hakuna kishiko cha "hamisha spline nzima". Kutafsiri spline nzima, tumia amri ya [Move](../move/).

## Kuchagua spline za CV

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Huchagua kama bonyeza iko karibu na nukta yoyote kwenye mkunjo |
| **Buruta kulia** (mkali) | Nukta zote za sampuli kwenye mkunjo lazima ziwe ndani ya sanduku la uchaguzi |
| **Buruta kushoto** (inayopita) | Sehemu yoyote ya mkunjo inayopita mpaka wa sanduku la uchaguzi huchagua spline |

## Amri za uhariri zinazosaidiwa

| Amri | Kinachotokea kwa spline |
|------|------------------------|
| [Move](../move/) | Hutafsiri ncha zote za udhibiti kwa msogeo uleule |
| [Copy](../copy/) | Huunda spline inayofanana katika nafasi mpya |
| [Rotate](../rotate/) | Huzungusha CVs zote karibu na nukta ya msingi iliyochaguliwa |
| [Mirror](../mirror/) | Huakisi CVs zote kwenye mhimili wa kioo |
| [Scale](../scale/) | Hupima CVs zote kwa usawa kutoka kwa nukta ya msingi |
| [Delete](../delete/) | Huondoa spline |

Splines hazisaidii **Offset**, **Trim**, au **Extend**.

## Sifa

**Jumla**

| Sifa | Chaguo-msingi | Maana |
|------|---------------|-------|
| Rangi | 256 (ByLayer) | Faharasa ya rangi ya ACI |
| Safu | `0` | Ugawaji wa safu |
| Aina ya mstari | ByLayer | Mfumo wa aina ya mstari uliopewa jina |
| Kiwango cha Aina ya Mstari | 1 | Kiwango cha kipengele kwenye mfumo wa aina ya mstari |
| Unene | 0 | Unene wa uchomaji |

**Jiometri**

| Sifa | Maana |
|------|-------|
| Daraja | Daraja la polynomial — daima 3 (cubic) |
| Ncha za Udhibiti | Kuratibu za CVs zote |
| Nukta za Ulingano | Tupu kwa spline za CV; imejazwa tu kwa spline za nukta za ulingano |

## Spline CV dhidi ya Spline Fit — ipi kutumia

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Mkunjo hupita kwenye nukta | Ya kwanza na ya mwisho tu (vilivyofungwa) | Kila nukta iliyobonyezwa hasa |
| Udhibiti wa umbo | Vuta CVs kuelekea eneo | Sogeza nukta za ulingano ambazo mkunjo lazima uguse |
| Athari ya uhariri wa kushika | CV husogea → mkunjo huvutwa | Nukta ya ulingano husogea → mkunjo unalinganiwa tena |
| Bora kwa | Mikunjo laini ya kisanaa, njia huru | Mikunjo lazima iguse kuratibu maalum |

## DXF — kipande cha SPLINE (umbo la ncha za udhibiti)

Spline za CV huhifadhiwa kama vipande vya `SPLINE` katika faili ya DXF, zikihifadhi daraja, vekta ya vifundo, na kuratibu zote za ncha za udhibiti. Sifa zote — rangi, safu, aina ya mstari, kiwango cha aina ya mstari, na unene — hufanywa safari ya kwenda na kurudi bila kupoteza. `splineFlag` imewekwa kuwa `9` (spline ya CV) hivyo umbo linahifadhiwa wakati wa kupakia upya. Programu yoyote ya DXF inayosaidia vipande vya `SPLINE` na data ya CV husoma hizi kwa usahihi.
