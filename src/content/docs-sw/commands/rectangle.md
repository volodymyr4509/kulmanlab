---
sidebar_position: 3
title: "Rectangle Command — Draw Axis-Aligned Rectangles in KulmanLab CAD"
description: "Amri ya Rectangle huunda mstatili ulioratibiwa na mhimili kutoka kwa kona mbili zilizo kinyume. Matokeo ni LWPOLYLINE iliyofungwa yenye ncha nne — inafanana na polyline nyingine yoyote baada ya kuwekwa, hivyo kila amri ya uhariri wa polyline inatumika kwake."
keywords: [CAD rectangle command, draw rectangle CAD, axis-aligned rectangle, closed polyline CAD, LWPOLYLINE DXF, rectangle grip editing, kulmanlab]
---

# Rectangle

Amri ya `rectangle` inachora mstatili ulioratibiwa na mhimili uliofafanuliwa na mibonyezo miwili ya kona zilizo kinyume. Matokeo huhifadhiwa kama **`LWPOLYLINE` iliyofungwa** yenye ncha nne — moja katika kila kona. Hakuna aina maalum ya kipande cha mstatili: baada ya kuunda umbo hufanya kazi hasa kama [Polyline](./polyline) nyingine yoyote na kila uhariri wa polyline unatumika kwake.

## Kuchora mstatili

1. Andika `rectangle` kwenye terminal au bonyeza kitufe cha **Rectangle** kwenye upau wa zana.
2. **Bonyeza kona ya kwanza**, au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
3. **Bonyeza kona iliyo kinyume** — mstatili huwekwa mara moja na amri hutoka. Uingizaji wa kuratibu unafanya kazi hapa pia.

```
  ● (bonyeza ya kwanza)────────────┐
  |                                |
  |   hakiki ya moja kwa moja     |
  |   inafuata kishale baada      |
  |   ya hatua ya 2               |
  └────────────────────────────────● (bonyeza ya pili)
```

Mibonyezo miwili inaweza kuwa jozi yoyote ya kona zilizo kinyume — juu-kushoto + chini-kulia, au chini-kushoto + juu-kulia, n.k. Mpangilio hauna maana.

## Uingizaji wa kuratibu

Katika hatua yoyote ya kona unaweza kuandika nafasi sahihi:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka kona.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X |
| `,` | Funga X na nenda kwa uingizaji wa Y |
| `Enter` | Thibitisha kuratibu iliyoandikwa |
| `Escape` | Futa |

Pande daima ni za usawa na wima — hakuna kufunga pembe kwa amri ya rectangle.

## Uhariri wa kushika — kubadilisha baada ya kuunda

Mstatili uliochaguliwa unaonyesha vishiko katika kila ncha na katika katikati ya kila upande:

| Kishiko | Mahali | Kinachofanya |
|---------|--------|--------------|
| **Kona** | Kila moja ya ncha 4 | Buruta kuhamisha ncha hiyo; pande mawili yanayounganika yananyooshwa kufuata — kona iliyo kinyume inabaki |
| **Katikati ya upande** | Katikati ya kila moja ya pande 4 | Buruta kutafsiri nukta zote mbili za mwisho za upande huo pamoja, ukihifadhi urefu na pembe ya upande |

Kuburuta kishiko cha kona kunabadilisha mstatili kuwa mraba usio wa mstatili. Ukihitaji tu mstatili wenye ukubwa tofauti, buruta kona ukihifadhi pande zinazoonekana kwa usawa, au ufute na uchore mpya.

## Kuchagua mstatili

Kwa sababu mstatili ni polyline, uchaguzi hufanya kazi kwa njia ile ile:

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Huchagua kama bonyeza iko kwenye mojawapo ya pande nne |
| **Buruta kulia** (mkali) | Ncha zote nne lazima ziwe ndani ya sanduku la uchaguzi |
| **Buruta kushoto** (inayopita) | Upande wowote unaopita mpaka wa sanduku huchagua mstatili wote |

## Amri za uhariri zinazosaidiwa

Amri zote za uhariri wa polyline zinatumika. Trim na Extend ni za [Line](./line) pekee na hazifanyi kazi kwenye mstatili:

| Amri | Kinachotokea kwa mstatili |
|------|--------------------------|
| [Move](./move) | Hutafsiri ncha zote nne kwa msogeo uleule |
| [Copy](./copy) | Huunda mstatili unaolingana katika nafasi mpya |
| [Rotate](./rotate) | Huzungusha ncha zote nne karibu na nukta ya msingi iliyochaguliwa |
| [Mirror](./mirror) | Huakisi ncha zote nne kwenye mhimili wa kioo |
| [Scale](./scale) | Hupima ncha zote nne kwa usawa kutoka kwa nukta ya msingi |
| [Offset](./offset) | Huunda mstatili sambamba (ndani au nje) kwa umbali uliowekwa |
| [Delete](./delete) | Huondoa mstatili kutoka kwa mchoro |

## Sifa

Mstatili unapochaguliwa paneli ya sifa inaonyesha uga zile zile kama polyline yoyote:

**Jumla**

| Sifa | Chaguo-msingi | Maana |
|------|---------------|-------|
| Rangi | 256 (ByLayer) | Faharasa ya rangi ya ACI |
| Safu | `0` | Ugawaji wa safu |
| Aina ya mstari | ByLayer | Mfumo wa aina ya mstari uliopewa jina |
| Kiwango cha Aina ya Mstari | 1 | Kiwango cha kipengele kwenye mfumo wa aina ya mstari |
| Unene | 0 | Unene wa uchomaji |

**Jiometri**

| Sifa | Maana |
|------|-------|
| Imefungwa | Daima `kweli` kwa mstatili |
| Hesabu ya Ncha | Daima `4` kwa mstatili usiobadilishwa |
| Ncha | Kuratibu za kona zote nne |

## Mstatili dhidi ya Polyline dhidi ya Line

| | Mstatili | Polyline | Line |
|---|---------|---------|------|
| Jinsi ya kuchora | Mibonyezo 2 (kona) | Bonyeza kila ncha | Bonyeza kila nukta ya mwisho |
| Aina ya kipande | `LWPOLYLINE` iliyofungwa | `LWPOLYLINE` wazi au iliyofungwa | `LINE` kwa kila sehemu |
| Pande daima za kulia | Ndiyo (wakati wa kuunda) | Hapana | Hapana |
| Trim / Extend | Hapana | Hapana | Ndiyo |
| Bora kwa | Visanduku, fremu, maeneo ya mstatili | Mihtasari na njia za kiholela | Sehemu za mtu binafsi, mistari ya ujenzi |

## DXF — kipande cha LWPOLYLINE

Mstatili huhifadhiwa kama vipande vya `LWPOLYLINE` vilivyofungwa vyenye ncha nne. Sifa zote — kuratibu za ncha, rangi, safu, aina ya mstari, kiwango cha aina ya mstari, na unene — hufanywa safari ya kwenda na kurudi bila kupoteza.

Hakuna aina maalum ya `RECTANGLE` katika DXF. Faili inapofunguliwa tena, umbo linaonekana kama polyline iliyofungwa yenye ncha nne badala ya mstatili. Kiangalia au kihariri chochote cha DXF kinachosaidia `LWPOLYLINE` (LibreCAD, FreeCAD, n.k.) kitaionyesha vizuri.
