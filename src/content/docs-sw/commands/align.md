---
title: "Amri ya Align — Kuhamisha, Kuzungusha na Kupima Vipengele kwa Jozi za Pointi katika KulmanLab CAD"
description: "Amri ya Align huweka upya vipengele vilivyochaguliwa kwa kutumia jozi moja au mbili za pointi za chanzo/marudio — inachanganya kuhamisha, kuzungusha, na kupima sawia kwa hiari katika operesheni moja. Inafanya kazi kama mchanganyiko wa Move + Rotate + Scale."
keywords: [amri ya align CAD, kupatanisha vipengele CAD, kuhamisha kuzungusha kupima, upatanisho wa jozi za pointi, sawa na ALIGN ya AutoCAD, kulmanlab]
group: edit
order: 6
---

# Align

Amri ya `align` huweka upya vipengele vilivyochaguliwa kwa kutumia jozi moja au mbili za pointi za chanzo/marudio. Kwa jozi moja, hufanya kazi sawa na [Move](../move/) (kuhamisha tu). Kwa jozi mbili, pia huzungusha uteuzi ili mwelekeo wa chanzo-hadi-chanzo ulingane na mwelekeo wa marudio-hadi-marudio, na inaweza kwa hiari kuupima ili urefu wa sehemu ya chanzo ulingane na urefu wa sehemu ya marudio — kuhamisha, kuzungusha, na kupima katika operesheni moja.

## Njia mbili za kuanza

**Chagua kwanza, kisha patanisha** — chagua vipengele kwanza, kisha anzisha:

1. Chagua vipengele moja au zaidi kwenye turubai.
2. Andika `align` kwenye terminal au bonyeza kitufe cha **Align** kwenye upau wa zana.
3. **Bonyeza pointi ya kwanza ya chanzo (S1)**, kisha **bonyeza pointi ya kwanza ya marudio (D1)**.
4. **Bonyeza pointi ya pili ya chanzo (S2)**, au bonyeza **Enter** kutumia upatanisho wa kuhamisha tu sasa hivi.
5. **Bonyeza pointi ya pili ya marudio (D2)**.
6. Jibu swali la kupima: bonyeza **Y** kupima, au **N** / **Enter** kudumisha ukubwa wa asili.

**Anzisha, kisha chagua** — anza amri bila chochote kilichochaguliwa:

1. Andika `align` au bonyeza kitufe cha upau wa zana.
2. **Chagua vitu** — bonyeza kubadilisha vipengele mmoja mmoja, au buruta kuchagua kwa eneo.
3. Bonyeza **Enter** au **Space** kuthibitisha uchaguzi.
4. Endelea na S1 → D1 → S2 → D2 → swali la kupima kama hapo juu.

> Terminal inahitaji tu herufi za kutosha kutokuwa na utata — kuandika `al` na kubonyeza **Enter** huanzisha Align moja kwa moja, kwa sababu hakuna amri nyingine inayoanza na herufi hizo mbili.

## Muundo wa upatanisho

```
  Pointi za chanzo (kwenye vipengele):  Pointi za marudio:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Matokeo: uteuzi unahamishwa ili S1 itue kwenye D1, kisha
  kuzungushwa kuzunguka D1 ili mwelekeo wa S1→S2 ulingane na
  mwelekeo wa D1→D2 — na, ukichagua kupima, unabadilishwa
  ukubwa ili |S1S2| iwe |D1D2|.
```

Hakikisho la mzuka hufuata kishale kwenye kila hatua: hakikisho la kuhamisha wakati wa kuweka D1, kisha hakikisho la kuzunguka (mistari iliyokatika) mara D2 inapowekwa.

## Upatanisho wa pointi moja (kuhamisha tu)

Baada ya D1 kuwekwa, bonyeza **Enter** badala ya kubonyeza pointi ya pili ya chanzo. Uteuzi unahamishwa kwa vekta ya S1→D1 — bila kuzungusha au kupima — sawa kabisa na [Move](../move/) ukitumia S1 kama pointi ya msingi na D1 kama marudio.

## Upatanisho wa pointi mbili (kuhamisha + kuzungusha + kupima kwa hiari)

Mara S2 na D2 zote mbili zikiwekwa:

- **Pembe ya mzunguko** — tofauti kati ya mwelekeo wa marudio (`D1 → D2`) na mwelekeo wa chanzo (`S1 → S2`).
- **Swali la kupima** — `scale objects to alignment points? [Yes/No] <N>` linaonekana, likiwa na **No** kama chaguo-msingi:
  - Bonyeza **Y** kupima uteuzi pia kwa usawa kuzunguka D1 ili umbali wa `S1–S2` uwe umbali wa `D1–D2`.
  - Bonyeza **N** au **Enter** kudumisha ukubwa wa asili — kuhamisha na kuzungusha tu ndiko kunatumika.

Kubonyeza kitufe chochote kwenye swali la kupima hutumia upatanisho papo hapo — hakuna hatua tofauti ya uthibitisho baada ya kuchagua Ndiyo au Hapana.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Enter` / `Space` | Thibitisha uchaguzi na uendelee kwenye hatua ya S1 |
| `Enter` (kwenye hatua ya S2) | Ruka mzunguko — tumia upatanisho wa kuhamisha tu ukitumia S1 na D1 |
| `Y` | Tumia upatanisho pamoja na kupima |
| `N` / `Enter` (kwenye swali la kupima) | Tumia upatanisho bila kupima |
| `Escape` | Wakati wa kuweka pointi: huacha pointi zilizowekwa na kurudi kwenye hatua ya uchaguzi; bila chochote kilichochaguliwa: hughairi amri |

## Uchaguzi wakati wa amri

Wakati amri inaanza katika hatua ya uchaguzi:

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Hubadilisha kipengele chini ya kishale ndani/nje ya uchaguzi |
| **Buruta kulia** (mkali) | Huongeza vipengele vilivyo ndani kikamilifu ya sanduku |
| **Buruta kushoto** (inayopita) | Huongeza vipengele vinavyokutana na mpaka wa sanduku |
| **Enter** / **Space** | Huthibitisha uchaguzi na kuendelea kwenye hatua ya S1 |

## Baada ya kupatanisha

Vipengele vilivyopatanishwa vinabaki vikichaguliwa katika nafasi yake mpya, na amri inamalizika kiotomatiki — endesha **Align** tena, au badilisha kwenda [Move](../move/), [Rotate](../rotate/), au [Scale](../scale/) bila kuchagua upya.

## Align dhidi ya Move

| | Align | Move |
|---|-------|------|
| Jozi za pointi | 1 (kuhamisha tu) au 2 (kuhamisha + kuzungusha + kupima) | 1 (kuhamisha tu) |
| Mzunguko | Ndiyo, kwa jozi ya pili ya pointi | Hapana |
| Kupima | Kwa hiari, kwa jozi ya pili ya pointi | Hapana |
| Bora kwa | Kulinganisha umbo moja na lingine kwa kutumia pointi za marejeleo | Kupanga upya kwa urahisi |

## Vipengele vinavyosaidiwa

Align hufanya kazi kwenye kila aina ya kipengele kinachosaidiwa na Move, Rotate, na Scale — shughuli zile zile za `translate`, `rotate`, na `scale` zinazotumiwa na amri hizo zinatumika kwa mfuatano, hivyo hakuna kinachoachwa nje.
