---
title: "Amri ya Trim — Kata Sehemu kwenye Makutano"
description: "Amri ya Trim huondoa sehemu ya Line, Arc, Circle, Ellipse au Polyline kati ya nukta mbili za karibu za makutano zilizo karibu zaidi na kishale. Hakiki inaonyesha hasa sehemu gani itakatwa kabla ya kubonyeza."
keywords: [CAD trim command, kata mstari CAD, kata duara CAD, kata arc CAD, kata elipse CAD, kata polyline CAD, cut line intersection, hover trim preview, kulmanlab]
group: edit
order: 8
---

# Trim

Amri ya `Kata` huondoa sehemu ya [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) au [Polyline](../polyline/) inayolala kati ya nukta mbili za karibu za makutano, ikigawanya kipande katika sehemu moja au zaidi zilizobaki. Sehemu ya kukata inatambuliwa na nafasi ya kishale — elea juu ya sehemu unayotaka kuondoa na ubonyeze kukata.

## Kukata kipande

1. Andika `Kata` kwenye terminal au bonyeza kitufe cha **Trim** kwenye upau wa zana.
2. **Elea juu ya sehemu** unayotaka kuondoa — hakiki inaonyesha hasa sehemu itakayokatwa.
3. **Bonyeza** kuondoa sehemu hiyo.

Amri inabaki hai baada ya kila kukata, hivyo unaweza kuendelea kuelea na kubonyeza kukata sehemu zaidi — kwenye kipande hicho hicho au kingine. Bonyeza **Enter**, **Space**, au **Escape** kutoka.

```
  Kabla:                     Baada ya kukata sehemu ya kati:

  ──────●──────●──────        ──────●          ●──────
      makutano  makutano       (sehemu ya kushoto)  (sehemu ya kulia)
                                 (sehemu ya kati imeondolewa)
```

## Jinsi sehemu ya kukata inavyotambuliwa

Amri inasukuma nafasi ya kishale kwenye kipande kilichoeleweka na kupata nukta zote za makutano ambazo kipande hicho kina na vipande vingine. Makutano haya hugawanya kipande katika sehemu — kwa Line, Arc, au Polyline iliyo wazi, nukta za mwisho za kipande chenyewe hufanya kazi kama mipaka ya ziada iliyowekwa. Circle au Ellipse kamili, au Polyline iliyofungwa (ikiwemo Rectangle), hazina nukta za mwisho zenyewe, hivyo nukta mbili za makutano angalau zinahitajika kabla ya kukatwa hata kidogo. Sehemu ambayo kipindi chake kina makadirio ya kishale inawekwa alama na itaondolewa ukibonyeza.

- **Line, Arc, na Polyline iliyo wazi** — sehemu inayoondolewa inaweza kuwa sehemu ya mwanzo (kabla ya makutano ya kwanza), sehemu ya kati (kati ya makutano mawili, ikigawanya kipande katika mbili), au sehemu ya mwisho (baada ya makutano ya mwisho).
- **Circle, Ellipse na Polyline iliyofungwa/Rectangle** — kwa kuwa hakuna mwanzo au mwisho uliowekwa, ni upinde tu kati ya *nukta mbili za makutano* unaoweza kuondolewa. Ikiwa makutano ni chini ya mawili, hakuna hakiki inayoonyeshwa na kubonyeza hakufanyi chochote. Sehemu iliyobaki ya umbo inakuwa sehemu pekee iliyobaki.

## Kukata hutoa nini

| Kipande | Matokeo baada ya kukata |
|--------|------------------------|
| Line | Hadi vipande viwili vifupi zaidi vya Line |
| Arc | Hadi vipande viwili vifupi zaidi vya Arc |
| Circle | Kipande kimoja cha [Arc](../arc/) — umbo lililofungwa la duara hupotea, hivyo sehemu iliyobaki huhifadhiwa kama upinde |
| Ellipse | Kipande kimoja cha Ellipse chenye pembe ya mwanzo na mwisho — sehemu iliyobaki inabaki kuwa Ellipse, sasa ya sehemu |
| Polyline (iliyo wazi) | Hadi vipande viwili vifupi zaidi vya Polyline |
| Polyline (iliyofungwa) / Rectangle | Kipande kimoja cha Polyline kilicho wazi — umbo lililofungwa hupotea, hivyo sehemu iliyobaki huhifadhiwa ikiwa wazi |
| Spline | Hadi vitu viwili vifupi vya Spline — kila kipande ni mkunjo huo huo kwenye sehemu ndogo zaidi, kinachohifadhiwa kwa vipeo vya udhibiti (nukta za fit za spline ya Fit hutupwa); spline iliyofungwa huacha kipande kimoja wazi |

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Enter` / `Space` | Toka kwenye hali ya kukata |
| `Escape` | Toka kwenye hali ya kukata |

## Vipande vinavyosaidiwa

| Kipande | Kinaweza kukatwa? |
|---------|------------------|
| Line | Ndiyo |
| Arc | Ndiyo |
| Circle | Ndiyo — inahitaji nukta 2 au zaidi za makutano |
| Ellipse | Ndiyo — inahitaji nukta 2 au zaidi za makutano |
| Polyline (iliyo wazi) | Ndiyo |
| Polyline (iliyofungwa) / Rectangle | Ndiyo — inahitaji nukta 2 au zaidi za makutano |
| Spline | Ndiyo — spline iliyofungwa inahitaji nukta 2 au zaidi za makutano; spline pia hukatwa mahali inapojikata yenyewe |
| Text, Dimension, Leader | Hapana |

Vitu vinavyotumika kama **mipaka ya kukata** vinaweza kuwa Line, Arc, Circle, Ellipse, Polyline, au Spline. Vitu vya Text, Dimension na Leader havirekodi makutano kamwe, kwa hivyo haviwezi kuwa mipaka pia.

**Sehemu za mviringo** za Polyline (zilizochorwa kwa kigeuza Arc, au zilizoingizwa) hukatwa sawasawa na sehemu zake za moja kwa moja — elea juu ya sehemu ya mviringo kati ya makutano mawili kisha ubofye. Ukingo uliokatwa unabaki na mviringo wake; urefu wake tu ndio unabadilika.

## Trim dhidi ya Extend

| | Trim | Extend |
|---|------|--------|
| Kinachofanya | Huondoa sehemu ya kipande | Hunyoosha nukta ya mwisho ya mstari hadi mpaka |
| Kichocheo | Elea juu ya sehemu ya kukata | Elea karibu na nukta ya mwisho ya kupanua |
| Matokeo | Kipande hugawanywa au kufupishwa | Nukta ya mwisho ya mstari husogea hadi mpaka |
| Vipande vinavyosaidiwa | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
