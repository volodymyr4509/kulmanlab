---
title: Extend — Nyoosha Kipande Hadi Mpaka wa Karibu
description: Amri ya Extend hunyoosha mwisho wa karibu wa Line, Arc, Ellipse au Polyline iliyo wazi iliyoegemewa hadi makutano ya karibu zaidi na kipande kingine. Hakikisho la moja kwa moja linaonyesha kipande kilichonyooshwa kabla ya kubonyeza.
keywords: [CAD extend command, nyoosha mstari CAD, nyoosha arc CAD, nyoosha elipse CAD, nyoosha polyline CAD, nyoosha kipande hadi mpaka, hover extend preview, kulmanlab]
group: edit
order: 9
---

# Extend

Amri ya `Refusha` hunyoosha mwisho wa karibu wa [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) au Polyline iliyo wazi iliyoegemewa hadi makutano ya karibu zaidi ambayo yangeundwa na kipande kingine katika mchoro. Egemea karibu na mwisho unaotaka kunyoosha — hakikisho linaonyesha kipande kilichonyooshwa — kisha bonyeza kutekeleza.

Ni vipande vyenye mwisho halisi tu vinavyoweza kunyooshwa. [Circle](../circle/) na Ellipse kamili (360°) daima ni maumbo yaliyofungwa bila mwisho, hivyo haviwezi kunyooshwa kamwe — vivyo hivyo kwa Polyline iliyofungwa au Rectangle. Ellipse ya sehemu (upinde wa duaradufu) na Arc vina miisho na vinanyooshwa kwa njia sawa na Line.

## Kunyoosha kipande

1. Andika `Refusha` kwenye terminal au bonyeza kitufe cha **Extend** kwenye upau wa zana.
2. **Egemea karibu na mwisho mmoja** wa kipande unachotaka kunyoosha — hakikisho linakionyesha kikiwa kimenyooshwa hadi mpaka wa karibu zaidi katika mwelekeo huo.
3. **Bonyeza** kutekeleza upanuzi.

Amri inabaki hai baada ya kila upanuzi, hivyo unaweza kuendelea kuelea na kubonyeza kunyoosha vipande zaidi. Bonyeza **Enter**, **Space**, au **Escape** kutoka.

```
  Kabla:                       Baada:

  ──────           |           ──────────────|
  (mstari mfupi)   (mpaka)     (umenyooshwa hadi mpaka)
```

## Jinsi mwisho unavyochaguliwa

Amri inaangalia ni mwisho gani kishale kiko karibu nazo:

- **Line na Polyline iliyo wazi** — kishale kiko karibu zaidi na pointi ya mwisho hunyoosha mwisho mbele; kishale kiko karibu zaidi na pointi ya mwanzo hunyoosha mwanzo nyuma.
- **Arc na Ellipse ya sehemu** — kishale kiko karibu zaidi na mmoja wa miisho ya pembe hufanya upinde ukue katika mwelekeo huo, ukizunguka kituo na radi sawa (au umbo sawa la duaradufu), hadi kufikia mpaka unaofuata.

Mwali — au, kwa Arc na Ellipse, duara au mkondo wa msingi wa kipande chenyewe — hutupwa kutoka mwisho uliochaguliwa, na **makutano ya karibu zaidi** na kipande kingine chochote (isipokuwa kipande chenyewe na aina zilizopuuzwa) unakuwa mwisho mpya.

Ikiwa hakuna makutano yanayopatikana katika mwelekeo huo, hakuna hakikisho linaloonekana na kubonyeza hakufanyi chochote.

## Mipaka iliyotengwa

Aina zifuatazo za vipande hupuuzwa kama mipaka — kipande hakinyooshwi kukutana nazo:

- Text / Mtext
- Multileader

Aina zingine zote (Line, Arc, Circle, Ellipse, Polyline, Spline, Dimension) hutumika kama mipaka halali.

Ikiwa sehemu ya kwanza au ya mwisho ya Polyline yenyewe ni sehemu ya mviringo (iliyochorwa kwa kigeuza Arc), kuinyoosha hukuza mviringo kando ya duara lake — sawa na kunyoosha Arc inayojitegemea — badala ya kuishughulikia kama sehemu ya moja kwa moja.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|-----|--------|
| `Enter` / `Space` | Toka hali ya extend |
| `Escape` | Toka hali ya extend |

## Vipande vinavyotumika

| Kipande | Kinaweza kunyooshwa? |
|--------|----------------|
| Line | Ndiyo |
| Arc | Ndiyo |
| Ellipse | Ndiyo — tu ikiwa tayari ni upinde wa sehemu; duaradufu kamili haina mwisho |
| Circle | Hapana — daima umbo lililofungwa bila mwisho |
| Polyline (iliyo wazi) | Ndiyo |
| Polyline (iliyofungwa) / Rectangle | Hapana — daima umbo lililofungwa bila mwisho |
| Text, Spline, Dimension, Leader | Hapana |

## Extend dhidi ya Trim

| | Extend | Trim |
|---|--------|------|
| Kinachofanyika | Hunyoosha mwisho wa kipande hadi mpaka | Huondoa sehemu ya kipande |
| Kichocheo | Egemea karibu na mwisho wa kunyoosha | Egemea juu ya sehemu ya kukata |
| Matokeo | Mwisho unahamia nje | Kipande kinagawanywa au kufupishwa |
| Vipande vinavyotumika | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
