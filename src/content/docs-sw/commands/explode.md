---
title: "Amri ya Explode — vunja polyline au kizuizi kuwa sehemu zake"
description: "Amri ya Explode huvunja polyline kuwa vitu vya Line na Arc, au rejeleo la kizuizi kuwa vitu ambavyo kizuizi chake huchora, papo hapo. Vipande huonekana sawasawa na asili."
keywords: [amri ya explode CAD, lipua polyline CAD, vunja polyline kuwa mistari, badilisha polyline kuwa line na arc, kulmanlab]
group: edit
order: 19
---

# Explode

Amri ya `Vunja` inavunja [Polyline](../polyline/) kuwa vipengele vyake vya [Line](../line/) na [Arc](../arc/) binafsi — kimoja kwa kila sehemu, hasa mahali ambapo vipeo vya polyline vyenyewe vilikuwa. Vipande hivyo vinachukua nafasi ya polyline pale pale na kudumisha unene wa mstari, rangi, tabaka, na aina ya mstari wake.

Explode hufanya kazi kwenye vitu vya **Polyline** na **marejeleo ya vizuizi**.

## Kutumia explode

Njia mbili za kuiendesha, muundo uleule kama [Delete](../delete/):

**Chagua kwanza, kisha explode** — njia ya haraka zaidi:

1. Chagua polyline moja au zaidi kwenye kanvasi.
2. Andika `Vunja` kwenye terminal, au chagua **Explode** kutoka menyu kunjuzi kwenye paneli ya Edit.

Polyline zilizochaguliwa zinavunjwa papo hapo — hakuna hatua ya uthibitisho tofauti, kwa sababu kitu tayari kimechaguliwa.

**Washa amri, kisha chagua**:

1. Andika `Vunja` au chagua **Explode** kutoka menyu kunjuzi bila kitu kilichochaguliwa.
2. **Chagua polyline au marejeleo ya vizuizi** — bofya kubadilisha, au buruta kuchagua kwa eneo.
3. Bonyeza **Enter** au **Nafasi** ili kuthibitisha na kuvunja polyline zilizochaguliwa.

Wakati wa kuchagua, polyline na marejeleo ya vizuizi pekee huchukuliwa — kubofya Line, Circle au kitu kingine hakufanyi chochote, na kuburuta eneo hupuuza kila kitu kingine ndani au kinachovuka.

## Kinachotokea

Kila sehemu ya polyline inakuwa kipengele chake chenyewe:

- **Sehemu iliyonyooka** inakuwa **Line**.
- **Sehemu ya mkunjo** (kutoka [chaguo la Arc](../polyline/) la Polyline) inakuwa **Arc**, inayolingana kikamilifu na kitovu, radius, na mzunguko wa mkunjo asili.

Kila Line na Arc inayotokana hurithi **unene wa mstari, rangi, tabaka, aina ya mstari, na kipimo cha aina ya mstari** cha polyline chanzo — hakuna kinachobadilika kuhusu jinsi jiometri inavyoonekana, ni tu kwamba sasa ni vipengele kadhaa huru badala ya polyline moja iliyounganishwa.

**Rejeleo la kizuizi** huwa vitu ambavyo kizuizi chake huchora, vikiwekwa mahali rejeleo lilipoviorodhesha. Vitu ambavyo kizuizi huficha — hali nyingine za kizuizi badilifu — huachwa; kila sifa huwa Text ya kawaida yenye thamani yake; vipande vilivyochorwa ByBlock huchukua rangi ya rejeleo, na vipande vilivyo kwenye safu 0 huchukua safu yake. Kizuizi kilicho ndani hutoka kama rejeleo la kizuizi lake lenyewe, unaloweza kulivunja pia. Rejeleo lililopimwa tofauti katika X na Y halichukuliwi, kwa kuwa duara zake zingelazimika kuwa elipsi.

Kuvunjwa kunaweza kutenduliwa kama hatua moja kwa [Undo](../undo/), kama uhariri mwingine wowote.

## Uchaguzi wakati wa amri

| Njia | Tabia |
|------|-------|
| **Bofya** | Huweka au kuondoa polyline au rejeleo la kizuizi chini ya kishale kwenye uteuzi; kubofya kitu kingine hakufanyi chochote |
| **Buruta kulia** (kali) | Huchagua polyline na marejeleo ya vizuizi yaliyo ndani ya kisanduku kabisa pekee |
| **Buruta kushoto** (kuvuka) | Huchagua polyline na marejeleo ya vizuizi yanayokata mpaka wa kisanduku |
| **Enter** / **Space** | Huthibitisha na kuvunja uteuzi |

## Vipengele vinavyosaidiwa

| Kipengele | Kinachosaidiwa |
|-----------|---------------|
| Polyline / Rectangle | Ndiyo |
| Rejeleo la kizuizi | Ndiyo, isipokuwa kipimo cha X na Y kikiwa tofauti |
| Line, Arc, Circle, Ellipse | Hapana — hakuna cha kuvunja |
| Text, Spline, Dimension, Leader, Hatch | Hapana |
