---
sidebar_position: 7
title: "Trim Command — Cut Line Segments at Intersections in KulmanLab CAD"
description: "Amri ya Trim huondoa sehemu ya Line kati ya nukta mbili za karibu za makutano zilizo karibu zaidi na kishale. Hakiki ya hover nyekundu inaonyesha hasa sehemu gani itakatwa kabla ya kubonyeza. Trim inafanya kazi kwenye vipande vya Line pekee — si arcs, circles, au polylines."
keywords: [CAD trim command, trim line CAD, cut line intersection, hover trim preview, line only trim, kulmanlab]
---

# Trim

Amri ya `trim` huondoa sehemu ya [Line](./line) inayolala kati ya nukta mbili za karibu za makutano, ikigawanya mstari katika sehemu moja au mbili fupi zaidi. Sehemu ya kukata inatambuliwa na nafasi ya kishale — elea juu ya sehemu unayotaka kuondoa na ubonyeze kukata.

Trim inafanya kazi kwenye **vipande vya Line pekee**. Kwa arcs, circles, polylines, na aina nyingine za vipande tumia [Delete](./delete) au uhariri wa kushika badala yake.

## Kukata mstari

1. Andika `trim` kwenye terminal au bonyeza kitufe cha **Trim** kwenye upau wa zana.
2. **Elea juu ya sehemu ya mstari** unayotaka kuondoa — hakiki nyekundu inaonyesha hasa sehemu itakayokatwa.
3. **Bonyeza** kuondoa sehemu hiyo.

Amri inabaki hai baada ya kila kukata, hivyo unaweza kuendelea kuelea na kubonyeza kukata sehemu zaidi. Bonyeza **Escape** kutoka.

```
  Kabla:                     Baada ya kukata sehemu ya kati:

  ──────●──────●──────        ──────●          ●──────
      makutano  makutano       (sehemu ya kushoto)  (sehemu ya kulia)
                                 (sehemu ya kati imeondolewa)
```

## Jinsi sehemu ya kukata inavyotambuliwa

Amri inasukuma nafasi ya kishale kwenye mstari ulioeleweka na kupata nukta zote za makutano ambazo mstari una na vipande vingine. Vigezo hivi vya makutano hugawanya mstari katika sehemu. Sehemu ambayo kipindi chake kina makadirio ya kishale inawekwa alama na itaondolewa ukibonyeza.

- Kama kishale kiko **kabla ya makutano ya kwanza**: sehemu hiyo ya mwanzo wa mstari huondolewa.
- Kama kishale kiko **kati ya makutano mawili**: sehemu hiyo ya kati huondolewa; mstari hugawanywa katika mbili.
- Kama kishale kiko **baada ya makutano ya mwisho**: sehemu hiyo ya mwisho huondolewa.
- Kama mstari **hauna makutano** na kipande kingine chochote: hakuna hakiki inayoonyeshwa na kubonyeza hakufanyi chochote.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Escape` | Toka kwenye hali ya kukata |

## Vipande vinavyosaidiwa

| Kipande | Kinaweza kukatwa? |
|---------|------------------|
| Line | Ndiyo |
| Arc, Circle, Ellipse | Hapana |
| Polyline / Rectangle | Hapana |
| Text, Spline, Dimension, Leader | Hapana |

Vipande vinavyotumika kama **mipaka ya kukata** vinaweza kuwa aina yoyote — ni mstari unaookatwa tu ambao lazima uwe kipande cha Line.

## Trim dhidi ya Extend

| | Trim | Extend |
|---|------|--------|
| Kinachofanya | Huondoa sehemu ya mstari | Hunyoosha nukta ya mwisho ya mstari hadi mpaka |
| Kichocheo | Elea juu ya sehemu ya kukata | Elea karibu na nukta ya mwisho ya kupanua |
| Matokeo | Mstari hugawanywa au kufupishwa | Nukta ya mwisho ya mstari husogea hadi mpaka |
| Zote | Mistari pekee | Mistari pekee |
