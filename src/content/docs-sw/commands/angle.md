---
title: "Angle — Pima Pembe ya Ndani kwenye Kilele Kwa Kutumia Pointi Tatu"
description: "Amri ya Angle inapima pembe ya ndani (0°–180°) kwenye kilele kilichofafanuliwa na pointi tatu zilizopigiwa klik. Bonyeza pointi-ya-kwanza, kilele, pointi-ya-pili. Matokeo yanaonyeshwa kwenye terminal kwa nafasi 4 za desimali."
keywords: [kupima pembe ya CAD, pembe ya pointi tatu, pembe ya ndani CAD, amri ya kupima pembe, pembe ya kilele, kulmanlab]
group: measure
order: 2
---

# Angle

Amri ya `angle` inapima pembe ya ndani kwenye kilele inayoundwa na sehemu mbili za mstari kupitia pointi tatu zilizopigiwa klik. Matokeo — daima kati ya 0° na 180° — yanaonyeshwa kwenye terminal kwa nafasi 4 za desimali. Ni moja ya amri tatu za kupima — [Distance](../distance/) inapima urefu wa mstari mnyoofu, na [Area](../area/) inapima eneo na mzunguko wa poligoni iliyofungwa.

## Muundo wa kipimo cha pembe

```
  ● pointi ya kwanza (mwisho wa mwale wa kwanza)
   \
    \  hakikisho la mwale wa kwanza
     \
      ● kilele (hatua ya 3)
     /
    /  hakikisho la mwale wa pili (hadi kishale)
   /
  ● pointi ya tatu  →  terminal: "Angle: 45.0000°"
```

- **Pointi ya kwanza** — mwisho mmoja wa pembe (hatua ya 2).
- **Kilele** — kona ambapo pembe inapimwa (hatua ya 3).
- **Pointi ya tatu** — mwisho mwingine wa pembe (hatua ya 4).

## Kupima pembe

1. Andika `angle` kwenye terminal au bonyeza kitufe cha upau wa zana cha **Angle**.
2. **Bonyeza pointi ya kwanza** — mwisho wa mkono mmoja wa pembe. Au andika `X,Y` na ubonyeze **Enter** kwa kuratibu halisi.
3. **Bonyeza kilele** — kona ambapo mikono miwili inakutana. Uingizaji wa kuratibu unafanya kazi hapa pia.
4. **Bonyeza pointi ya tatu** — mwisho wa mkono wa pili. Uingizaji wa kuratibu unafanya kazi hapa pia. Kuweka pointi hii kunachapisha matokeo.
5. **Bonyeza tena** (hiari) ili kuanza kipimo kipya kutoka kwa klik hiyo kama pointi mpya ya kwanza.

## Mkataba wa pembe ya ndani

Amri inakokotoa pembe kwa kutumia bidhaa ya nukta ya mwale miwili kutoka kwa kilele:

- **Daima ya ndani**: matokeo ni pembe ndogo, kati ya 0° na 180°.
- Mpangilio unaobonyeza pointi za mwisho hauathiri matokeo — nafasi ya kilele peke yake ndiyo inayohusika.
- Pointi zilizo mstari (zote tatu kwenye mstari mmoja) zinarudisha 0° au 180°.

## Kuunganisha vipimo

Baada ya matokeo kuonekana, kubonyeza mara moja huanza kipimo kipya — pointi iliyopigiwa klik inakuwa pointi mpya ya kwanza. Amri haiondoki kiotomatiki hadi ubonyeze `Escape`.

## Angle dhidi ya Distance

| | Angle | Distance |
|---|-------|---------|
| Inachopima | Pembe ya ndani kwenye kilele | Urefu wa mstari wa moja kwa moja |
| Idadi ya klik | 3 | 2 |
| Muundo wa matokeo | `45.0000°` | `12.3456` (vitengo) |
| Hakikisho kwenye turubai | Mistari miwili kutoka kilele hadi ncha zote | Mstari kutoka pointi ya kwanza hadi kishale |
| Bora zaidi kwa | Pembe ya ufunguzi kati ya vipengele viwili | Urefu wa pengo au sehemu |

## Uingizaji wa kuratibu

Badala ya kubonyeza, andika nafasi halisi kwa pointi yoyote ya tatu:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuthibitisha.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X |
| `,` | Funga X na uhamie uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu iliyoandikwa |
| `Escape` | Ghairi na urudi hatua ya 2 |

## Maelezo

- Matokeo yanaonyeshwa kwenye **terminal peke yake** — hakuna kitu kinachongezwa kwenye mchoro.
- Usahihi ni daima nafasi 4 za desimali kwa digrii.
