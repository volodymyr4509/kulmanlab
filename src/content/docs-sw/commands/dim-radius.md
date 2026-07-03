---
sidebar_position: 16
title: Amri ya Dimension Radius — Weka Maelezo ya Radi za Mviringo na Duara katika KulmanLab CAD
description: "Amri ya Dimension Radius huweka kipimo cha radiali chenye awali ya R kwenye mviringo au duara. Bonyeza kipengele, kisha sogeza mshale ili kupanga mstari wa kipimo kutoka katikati hadi mzingo. Inasindikwa kikamilifu na DXF kama vipengele vya DIMENSION vya aina ya radi."
keywords: [CAD radius dimension, dimradius, annotate circle radius, arc radius dimension, R prefix dimension, kulmanlab]
---

# Dimension Radius

Amri ya `dimradius` huweka kipimo cha radi kwenye mviringo au duara. Mstari wa kipimo huendesha kutoka katikati hadi pointi kwenye mzingo kwa mwelekeo wa mshale, ukiandikwa `R <thamani>`. Ili kupima kipenyo kamili badala yake, tumia [Dimension Diameter](../dim-diameter/).

## Muundo wa kipimo cha radi

```
  ● (center)
   \
    \  R 5.00
     \
      ●────── text (cursor side)
   (arc point)
```

- **Mstari wa kipimo** — kutoka katikati kupitia pointi ya mviringo kuelekea mshale, na kichwa cha mshale kwenye mviringo.
- **Lebo** — `R` ikifuatiwa na thamani ya radi.

## Kuweka kipimo cha radi

1. Andika `dimradius` kwenye terminal au bonyeza kitufe cha **Dimension Radius** kwenye upau wa zana.
2. **Bonyeza mviringo au duara** ili uichague.
3. **Sogeza mshale** ili kupanga mstari wa kipimo — pointi ya mviringo inafuata mwelekeo wa mshale kutoka katikati.
4. **Bonyeza** kuweka kipimo.

Ni vipengele vya **Arc** na **Circle** pekee ndivyo vinavyoweza kuchaguliwa. Kubonyeza aina nyingine yoyote ya kipengele hakufanyi chochote.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Escape` | Ghairi |

## Dimension Radius dhidi ya Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Hupima | Radi (kutoka katikati hadi ukingo) | Kipenyo (kutoka ukingo hadi ukingo kupitia katikati) |
| Mstari wa kipimo | Katikati → pointi ya mviringo | Pointi ya mviringo → pointi ya mviringo (kupitia katikati) |
| Awali ya lebo | `R` | `⌀` |
| Vichwa vya mshale | Kimoja (kwenye pointi ya mviringo) | Viwili (kwenye pointi zote za mviringo) |
| Bora kwa | Kuweka maelezo ya upande mmoja wa kipengele kilichopinda | Kuweka maelezo ya vipimo vya duara kamili |

## Kuhariri lebo — hali rahisi

**Bonyeza mara mbili** kipimo cha radi kilichowekwa kufungua kihariri cha maandishi katika hali **rahisi**. Kihariri kimejazwa awali na thamani inayoonyeshwa kwa sasa (mfano: `R 5.00`) ili uweze kuweka mshale na kuihariri moja kwa moja.

| Kipengele | Tabia |
|----------|-------|
| Bold / Italic / Font / Height | Inatumika kwa **lebo nzima** mara moja |
| Uumbizaji kwa kila herufi | Haisaidiwi |
| `Enter` | Inathibitisha thamani na kufunga kihariri |
| Mistari mingi | Haisaidiwi |

Angalia [Text Editor — hali rahisi](../interface/text-editor#simple-mode) kwa marejeo kamili.

## DXF — kipengele cha DIMENSION cha aina ya radi

Vipimo vya radi vimehifadhiwa kama vipengele vya `DIMENSION` na jiometri ya aina ya radi, vikihifadhi kuratibu za katikati, nafasi ya pointi ya mviringo, na thamani ya radi iliyopimwa. Sifa zote zinasindikwa bila kupoteza.
