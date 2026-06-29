---
sidebar_position: 10
title: Amri ya Extend — Nyoosha Mwisho wa Mstari Hadi Mpaka wa Karibu Zaidi katika KulmanLab CAD
description: "Amri ya Extend hunyoosha mwisho wa karibu wa Mstari ulioegemewa hadi makutano ya karibu zaidi na kiumbe kingine. Hakikisho la moja kwa moja linaonyesha mstari ulionyooshwa kabla ya kubonyeza. Extend inafanya kazi kwenye viumbe vya Line pekee na hupuuza Text, Spline, na Multileader kama mipaka."
keywords: [CAD extend command, extend line CAD, stretch line to boundary, line endpoint extend, hover extend preview, kulmanlab]
---

# Extend

Amri ya `extend` hunyoosha mwisho wa karibu wa [Line](./line) hadi makutano ya karibu zaidi ambayo yangeundwa na kiumbe kingine katika mchoro. Egemea karibu na mwisho unaotaka kunyoosha — hakikisho linaonyesha mstari ulionyooshwa — kisha bonyeza kutekeleza.

Extend inafanya kazi kwenye **viumbe vya Line pekee**. Mipaka ambayo mstari unanyooshwa kwake inaweza kuwa aina yoyote nyingine ya kiumbe isipokuwa Text, Mtext, Multileader, na Spline.

## Kunyoosha mstari

1. Andika `extend` kwenye terminal au bonyeza kitufe cha **Extend** kwenye upau wa zana.
2. **Egemea karibu na mwisho mmoja wa mstari** — hakikisho linaonyesha mstari ulionyooshwa hadi mpaka wa karibu zaidi katika mwelekeo huo.
3. **Bonyeza** kutekeleza upanuzi.

Amri inabaki hai baada ya kila upanuzi ili uweze kunyoosha mistari mingi kwa mfululizo. Bonyeza **Escape** kutoka.

```
  Kabla:                       Baada:

  ──────           |           ──────────────|
  (mstari mfupi)   (mpaka)     (umenyooshwa hadi mpaka)
```

## Jinsi mwisho unavyochaguliwa

Amri inaangalia ni mwisho gani kishale kiko karibu nazo:

- Kishale **kiko karibu zaidi na pointi ya mwisho** → mwisho unyooshwa mbele kwenye mwelekeo wa mstari.
- Kishale **kiko karibu zaidi na pointi ya mwanzo** → mwanzo unyooshwa nyuma (katika mwelekeo kinyume).

Mwali hutupwa kutoka mwisho uliochaguliwa kwenye mwelekeo wa mstari, na **makutano ya karibu zaidi** kwenye mwali huo na kiumbe kingine chochote (isipokuwa mstari wenyewe na aina zilizopuuzwa) unakuwa mwisho mpya.

Ikiwa hakuna makutano yanayopatikana katika mwelekeo huo, hakuna hakikisho linaloonekana na kubonyeza hakufanyi chochote.

## Mipaka iliyotengwa

Aina zifuatazo za viumbe hupuuzwa kama mipaka — mstari haуnyooshwi kukutana nazo:

- Text / Mtext
- Multileader
- Spline

Aina zingine zote (Line, Arc, Circle, Ellipse, Polyline, Dimension) hutumika kama mipaka halali.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|-----|--------|
| `Escape` | Toka hali ya extend |

## Viumbe vinavyotumika

| Kiumbe | Kinaweza kunyooshwa? |
|--------|----------------|
| Line | Ndiyo |
| Arc, Circle, Ellipse | Hapana |
| Polyline / Rectangle | Hapana |
| Text, Spline, Dimension, Leader | Hapana |

## Extend dhidi ya Trim

| | Extend | Trim |
|---|--------|------|
| Kinachofanyika | Hunyoosha mwisho wa mstari hadi mpaka | Huondoa kipande cha mstari |
| Kichocheo | Egemea karibu na mwisho wa kunyoosha | Egemea juu ya kipande cha kukata |
| Matokeo | Mwisho wa mstari unahamia nje | Mstari unagawanywa au kufupishwa |
| Zote | Mistari pekee | Mistari pekee |
