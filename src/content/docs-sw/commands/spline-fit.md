---
sidebar_position: 9
title: "Spline Fit Command — Draw Interpolating Splines Through Clicked Points in KulmanLab CAD"
description: "Amri ya Spline Fit inachora spline ya cubic inayopita kwenye kila nukta iliyobonyezwa hasa. Ndani mkunjo huhifadhiwa na nukta za ulingano na ncha za udhibiti zilizohesabiwa. Kuburuta kishiko cha nukta ya ulingano kunalingania upya mkunjo wote. Safari kamili ya DXF kama vipande vya SPLINE."
keywords: [CAD spline fit command, interpolating spline CAD, spline through points, draw smooth curve CAD, SPLINE DXF fit points, spline grip editing, kulmanlab]
---

# Spline Fit

Amri ya `splinefit` inachora spline ya cubic inayopita kwenye kila nukta unayobonyeza — mkunjo wa ulingano. Tofauti na [Spline CV](./spline-cv), ambapo mkunjo tu huvutwa kuelekea ncha za udhibiti, hapa mkunjo unalazimishwa kugusa kila kuratibu iliyobonyezwa hasa. Ndani kihariri hufanya ulingano wa ncha za udhibiti kufikia hili, na CVs hizo huhifadhiwa pamoja na nukta za ulingano katika faili ya DXF.

## Kuchora spline kupitia nukta za ulingano

1. Andika `splinefit` kwenye terminal au bonyeza kitufe cha **Spline Fit** kwenye upau wa zana.
2. **Bonyeza kuweka nukta za ulingano** — mkunjo utapita kwenye kila moja. Au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
3. Bonyeza **Enter** kumaliza (inahitaji angalau nukta 2).

```
  ●──────●──────●──────●  ← mkunjo hupita hasa kwenye kila bonyeza
  n1     n2     n3     n4
```

Hakiki ya moja kwa moja inaonyesha mkunjo wa sasa wa ulingano unavyosogeza kishale, ikijumuisha nukta inayofuata inayowezekana katika nafasi ya kishale. Bonyeza **Escape** kufuta nukta zote zilizowekwa na kutoka.

## Uingizaji wa kuratibu

Badala ya kubonyeza, andika nafasi sahihi kwa nukta yoyote ya ulingano:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka nukta ya ulingano.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X |
| `,` | Funga X na nenda kwa uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu iliyoandikwa, au maliza spline kama hakuna uingizaji unaoendelea na nukta ≥ 2 zipo |
| `Escape` | Futa nukta zote na toka |

## Uhariri wa kushika — kubadilisha kupitia nukta za ulingano

Spline ya ulingano iliyochaguliwa inaonyesha kishiko kimoja kwa kila nukta ya ulingano:

| Kishiko | Mahali | Kinachofanya |
|---------|--------|--------------|
| **Nukta ya ulingano** | Katika kila nafasi iliyobonyezwa | Buruta kuhamisha nukta ya ulingano hiyo — mkunjo wote unalinganiwa upya kupita nafasi mpya |

Kuburuta kishiko kimoja kunalingania upya mkunjo wote, si sehemu za karibu tu. Hii inatofautiana na uhariri wa kushika wa polyline, ambapo kuhamisha ncha kunabadilisha sehemu mbili za karibu tu.

Hakuna kishiko cha "hamisha spline nzima". Kutafsiri spline nzima, tumia amri ya [Move](./move).

## Kuchagua spline za ulingano

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Huchagua kama bonyeza iko karibu na nukta yoyote kwenye mkunjo |
| **Buruta kulia** (mkali) | Nukta zote za sampuli kwenye mkunjo lazima ziwe ndani ya sanduku la uchaguzi |
| **Buruta kushoto** (inayopita) | Sehemu yoyote ya mkunjo inayopita mpaka wa sanduku la uchaguzi huchagua spline |

## Amri za uhariri zinazosaidiwa

| Amri | Kinachotokea kwa spline |
|------|------------------------|
| [Move](./move) | Hutafsiri nukta zote za ulingano na CVs zilizohesabiwa upya kwa msogeo uleule |
| [Copy](./copy) | Huunda spline inayofanana katika nafasi mpya |
| [Rotate](./rotate) | Huzungusha nukta zote za ulingano karibu na nukta ya msingi iliyochaguliwa |
| [Mirror](./mirror) | Huakisi nukta zote za ulingano kwenye mhimili wa kioo |
| [Scale](./scale) | Hupima nukta zote za ulingano kwa usawa kutoka kwa nukta ya msingi |
| [Delete](./delete) | Huondoa spline |

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
| Nukta za Ulingano | Kuratibu za nukta zote za kupita zilizobonyezwa |
| Ncha za Udhibiti | CVs zilizohesabiwa ndani zinazotumika kutoa mkunjo |

## Spline Fit dhidi ya Spline CV — ipi kutumia

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Mkunjo hupita kwenye nukta | Kila nukta iliyobonyezwa hasa | Ya kwanza na ya mwisho tu (vilivyofungwa) |
| Athari ya uhariri wa kishiko | Nukta ya ulingano husogea → mkunjo wote unalinganiwa upya | CV husogea → mkunjo huvutwa kuelekea nafasi mpya |
| Utabirifu wa umbo | Juu — mkunjo unafuata mibonyezo | Chini — mkunjo hubaki nyuma ya CVs |
| Bora kwa | Mikunjo lazima iguse kuratibu maalum | Mikunjo laini ya kisanaa, njia huru |

## DXF — kipande cha SPLINE (umbo la nukta za ulingano)

Spline za ulingano huhifadhiwa kama vipande vya `SPLINE` katika faili ya DXF, zikihifadhi kuratibu za nukta za ulingano na ncha za udhibiti zilizohesabiwa. `splineFlag` imewekwa kuwa `8` (spline ya nukta za ulingano) hivyo programu inayopakia upya inajua ni seti gani ya nukta kuonyesha kama vishiko vinavyoweza kuhaririwa. Sifa zote — rangi, safu, aina ya mstari, kiwango cha aina ya mstari, na unene — hufanywa safari ya kwenda na kurudi bila kupoteza. Programu za DXF zinazosaidia spline za nukta za ulingano (LibreCAD, FreeCAD) zitaonyesha nukta za ulingano kama data inayoweza kuhaririwa ya msingi.
