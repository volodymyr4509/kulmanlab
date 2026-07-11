---
title: Amri ya Dimension Continue — Vipimo vya Mnyororo kutoka kwa Msingi Uliopo katika KulmanLab CAD
description: "Amri ya Dimension Continue inaendeleza mnyororo wa vipimo kutoka kwa mstari wa pili wa upanuzi wa kipimo kilichowekwa mwisho. Inarithi pembe ya kipimo cha msingi, mwelekeo, ukubwa wa mshale, na urefu wa maandishi kiotomatiki. Inafanya kazi na misingi ya mstari na iliyopangwa."
keywords: [CAD dimension continue, dimcontinue, chain dimensions CAD, baseline dimension, continue dimension series, kulmanlab]
group: markup
order: 6
---

# Dimension Continue

Amri ya `dimcontinue` inaunganisha vipimo vipya kutoka kwa **mstari wa pili wa upanuzi** wa kipimo kilichopo. Kila sehemu mpya imewekwa kwenye mhimili sawa wa kipimo na kwa mwelekeo sawa wa mstari wa kipimo kama msingi. Sifa zote za mtindo — ukubwa wa mshale, urefu wa maandishi, urefu wa mistari ya upanuzi — zinanakiliwa kutoka kwa msingi kiotomatiki.

## Jinsi vipimo vilivyounganishwa vinavyoonekana

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (base    p3           p4
           ext2 → new start)
```

Kila mstatili ni kipengele tofauti cha `DIMENSION`. Zinashiriki nafasi sawa ya mstari wa kipimo na mwelekeo wa kipimo.

## Kuanza mnyororo

1. Andika `dimcontinue` kwenye terminal au bonyeza kitufe cha **Dimension Continue** kwenye upau wa zana.
2. **Ikiwa kipimo kiliwekwa tu hivi karibuni** — amri inakichukua kiotomatiki kama msingi (haihitaji kubonyeza).
3. **Ikiwa hakuna kipimo cha hivi karibuni** — bonyeza kipimo chochote kilichopo ili kutumia kama msingi.
4. **Bonyeza asili ya mstari wa upanuzi unaofuata** — muhtasari unaonyesha kipimo kipya unapasogeza mshale. Au andika `X,Y` na bonyeza **Enter** kwa kuratibu sahihi.
5. Endelea kubonyeza (au kuandika) ili kupanua mnyororo. Kila kipimo kilichowekwa kinakuwa msingi mpya kiotomatiki.
6. Bonyeza **Enter**, **Space**, au **Escape** ili kumaliza mnyororo.

## Kinachorithiwa kutoka kwa kipimo cha msingi

| Sifa | Inarithiwa kutoka kwa msingi |
|------|------------------------------|
| Mwelekeo wa kipimo / pembe | Ndiyo — imefungwa kwa mnyororo wote |
| Mwelekeo wa mstari wa kipimo (umbali kutoka kwa pointi zilizopimwa) | Ndiyo |
| Ukubwa wa mshale | Ndiyo |
| Urefu wa maandishi | Ndiyo |
| Mwelekeo na upanuzi wa mstari wa upanuzi | Ndiyo |
| Upangaji wa maandishi | Ndiyo |
| Jina la mtindo | Ndiyo |
| Rangi, Safu | Hainarithiwi — inatumia safu ya sasa |

## Kufunga mwelekeo wa kipimo

Mwelekeo wa kipimo wa mnyororo **umefungwa kwa pembe ya kipimo cha msingi**:

- Msingi wa mstari (H) → endeleo zote hupima umbali wa usawa (Δ X).
- Msingi wa mstari (V) → endeleo zote hupima umbali wa wima (Δ Y).
- Msingi uliowekwa kwa pembe yoyote → endeleo zote hupima kando ya pembe hiyo hiyo.

Huwezi kubadilisha mwelekeo katikati ya mnyororo. Anza [Dimension Linear](../dim-linear/) au [Dimension Aligned](../dim-aligned/) mpya ili kupima kwa mwelekeo tofauti.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X |
| `,` | Funga X na nenda uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu iliyoandikwa, au maliza mnyororo ikiwa hakuna uingizaji unaoendelea |
| `Space` / `Escape` | Maliza mnyororo |

## Dimension Continue dhidi ya kuanza upya

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|-----------------------------|
| Pointi ya kuanza | Imefungwa kwenye ext2 ya msingi wa mwisho | Bonyeza popote |
| Pembe | Imefungwa kwenye msingi | Huru |
| Mwelekeo | Unarithiwa kutoka kwa msingi | Umewekwa na mshale au kuandikwa |
| Mtindo | Unarithiwa kutoka kwa msingi | Mtindo wa sasa |
| Bora kwa | Vipimo vya mkusanyo kando ya safu | Kipimo cha kwanza au kubadilisha mwelekeo |

## Kuhariri lebo baada ya kuwekwa — hali rahisi

**Bonyeza mara mbili** kipimo chochote katika mlolongo kufungua kihariri cha maandishi katika hali **rahisi**. Kila sehemu ni huru na inaweza kuhaririwa kibinafsi.

| Kipengele | Tabia |
|----------|-------|
| Bold / Italic / Font / Height | Inatumika kwa **lebo nzima** mara moja |
| Uumbizaji kwa kila herufi | Haisaidiwi |
| `Enter` | Inathibitisha thamani na kufunga kihariri |
| Mistari mingi | Haisaidiwi |

Angalia [Text Editor — hali rahisi](../../interface/text-editor/#simple-mode) kwa marejeo kamili.

## DXF — vipengele vya DIMENSION

Kila sehemu katika mnyororo imehifadhiwa kama kipengele huru cha `DIMENSION` katika faili ya DXF. Haviunganishwi kwenye faili — zinashiriki sifa kwa sababu ziliundwa kutoka kwa msingi sawa, lakini kila moja inaweza kuhaririwa kwa kujitegemea baada ya kuwekwa.
