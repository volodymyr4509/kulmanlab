---
sidebar_position: 17
title: "Amri ya Dimension Diameter — Weka Maelezo ya Vipimo vya Kipenyo cha Duara na Mviringo katika KulmanLab CAD"
description: "Amri ya Dimension Diameter huweka kipimo cha kipenyo (chenye awali ya alama ya kipenyo) kwenye mviringo au duara kupitia katikati. Sogeza mshale ili kuzungusha mstari wa kipimo kwenye pembe yoyote. Inasindikwa kikamilifu na DXF kama vipengele vya DIMENSION vya aina ya kipenyo."
keywords: [CAD diameter dimension, dimdiameter, annotate circle diameter, arc diameter dimension, diameter symbol CAD, kulmanlab]
---

# Dimension Diameter

Amri ya `dimdiameter` huweka kipimo cha kipenyo kwenye mviringo au duara. Mstari wa kipimo unapita kipenyo chote — kupita katikati kati ya pointi mbili zinazopingana za mviringo — na umewekwa lebo `⌀ <thamani>`. Ili kuweka maelezo ya radi pekee kutoka katikati hadi ukingo mmoja, tumia [Dimension Radius](../dim-radius/).

## Muundo wa kipimo cha kipenyo

```
  ●──────────── ⌀ 10.00 ────────────●
  (far arc point)              (near arc point / text side)
```

- **Mstari wa kipimo** — unaenea kipenyo chote, na vichwa vya mshale kwenye pointi zote mbili za makutano ya mviringo.
- **Pointi ya karibu ya mviringo** — pointi ya mzingo upande wa mshale (ambapo lebo ya maandishi inakaa).
- **Pointi ya mbali ya mviringo** — pointi inayopingana kipenyo.
- **Lebo** — `⌀` ikifuatiwa na thamani ya kipenyo.

## Kuweka kipimo cha kipenyo

1. Andika `dimdiameter` kwenye terminal au bonyeza kitufe cha **Dimension Diameter** kwenye upau wa zana.
2. **Bonyeza mviringo au duara** ili uichague.
3. **Sogeza mshale** ili kuzungusha mstari wa kipimo kwenye pembe inayotakiwa.
4. **Bonyeza** kuweka kipimo.

Ni vipengele vya **Arc** na **Circle** pekee ndivyo vinavyoweza kuchaguliwa.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Escape` | Ghairi |

## Dimension Diameter dhidi ya Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Hupima | Kipenyo kamili (2 × radi) | Radi (kutoka katikati hadi ukingo) |
| Mstari wa kipimo | Ukingo → ukingo kupitia katikati | Katikati → ukingo |
| Awali ya lebo | `⌀` | `R` |
| Vichwa vya mshale | Viwili (kwenye pointi zote za mviringo) | Kimoja (kwenye pointi ya mviringo) |
| Bora kwa | Vipimo vya tundu kamili la duara au shimbo | Kuweka maelezo ya upande mmoja wa kipengele kilichopinda |

## Kuhariri lebo — hali rahisi

**Bonyeza mara mbili** kipimo cha kipenyo kilichowekwa kufungua kihariri cha maandishi katika hali **rahisi**. Kihariri kimejazwa awali na thamani inayoonyeshwa kwa sasa (mfano: `⌀ 10.00`) ili uweze kuweka mshale na kuihariri moja kwa moja.

| Kipengele | Tabia |
|----------|-------|
| Bold / Italic / Font / Height | Inatumika kwa **lebo nzima** mara moja |
| Uumbizaji kwa kila herufi | Haisaidiwi |
| `Enter` | Inathibitisha thamani na kufunga kihariri |
| Mistari mingi | Haisaidiwi |

Angalia [Text Editor — hali rahisi](../interface/text-editor#simple-mode) kwa marejeo kamili.

## DXF — kipengele cha DIMENSION cha aina ya kipenyo

Vipimo vya kipenyo vimehifadhiwa kama vipengele vya `DIMENSION` na jiometri ya aina ya kipenyo, vikihifadhi nafasi za pointi zote za mviringo na thamani ya kipenyo iliyopimwa (2 × radi). Sifa zote zinasindikwa bila kupoteza.
