---
sidebar_position: 2
title: Amri ya Distance — Pima Umbali wa Mstari Mnyoofu Kati ya Pointi Mbili katika KulmanLab CAD
description: "Amri ya Distance hupima umbali wa Euclidean kati ya pointi mbili zilizobonyezwa na kuonyesha matokeo hadi tarakimu 4 za desimali. Bonyeza tena baada ya matokeo kuanza kipimo kipya kutoka pointi ya mwisho."
keywords: [CAD measure distance, distance command, point-to-point measurement, straight line distance, kulmanlab CAD measurement]
---

# Distance

Amri ya `distance` hupima umbali wa mstari mnyoofu (Euclidean) kati ya pointi mbili zilizobonyezwa na kuchapisha matokeo kwenye terminal hadi tarakimu 4 za desimali. Ni moja ya amri tatu za kipimo — [Angle](../angle/) hupima ufunguzi wa pembe kwenye kilele, na [Area](../area/) hupima eneo na mzunguko wa poligoni iliyofungwa.

## Muundo wa kipimo cha umbali

```
  ● pointi ya kwanza
   \
    \  mstari wa hakikisho (moja kwa moja)
     \
      ● pointi ya pili    →  terminal: "Distance: 12.3456"
```

- **Pointi ya kwanza** — asili ya kipimo.
- **Pointi ya pili** — mwisho; kuiweka huchapisha matokeo mara moja.
- **Matokeo** — yanaonyeshwa kwenye terminal, hayawekwi kwenye turubai.

## Kupima umbali

1. Andika `distance` kwenye terminal au bonyeza kitufe cha **Distance** kwenye upau wa zana.
2. **Bonyeza pointi ya kwanza**, au andika `X,Y` na ubonyeze **Enter** kwa uratibu sahihi.
3. **Bonyeza pointi ya pili** — umbali uliопimwa unaonekana kwenye terminal. Uingizaji wa uratibu unafanya kazi hapa pia.
4. **Bonyeza tena** (hiari) kuanza kipimo kipya. Amri inabaki hai.

Bonyeza `Escape` wakati wowote kurudi hatua ya 2.

## Kuunganisha vipimo

Baada ya matokeo kuonyeshwa, kubonyeza mara moja kunaanza kipimo kinachofuata — pointi iliyobonyezwa inakuwa pointi mpya ya kwanza. Hii inakuruhusu kupima mfululizo wa umbali bila kuanzisha amri tena.

## Distance dhidi ya Angle

| | Distance | Angle |
|---|---------|-------|
| Kinachopimwa | Urefu wa mstari mnyoofu | Pembe ya ndani kwenye kilele |
| Idadi ya mibonyezo | 2 | 3 |
| Muundo wa matokeo | `12.3456` (vitengo) | `45.0000°` |
| Hakikisho la turubai | Mstari kutoka pointi ya kwanza hadi kishale | Mistari miwili kutoka kilele hadi kishale |
| Bora kwa | Urefu wa pengo au kipande | Pembe ya ufunguzi kati ya vipengele viwili |

## Uingizaji wa uratibu

Badala ya kubonyeza, andika nafasi sahihi kwa pointi yoyote:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuthibitisha.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|-----|--------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa uratibu wa X |
| `,` | Linda X na endelea na uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyochapishwa |
| `Enter` | Thibitisha uratibu uliochapishwa |
| `Escape` | Ghairi na urudi hatua ya 2 |

## Maelezo

- Matokeo yanaonyeshwa kwenye **terminal pekee** — hakuna kinachоongezwa kwenye mchoro.
- Matokeo yanatolewa kwa vitengo sawa na uratibu wa mchoro (hakuna ubadilishaji wa vitengo).
- Usahihi daima ni tarakimu 4 za desimali.
