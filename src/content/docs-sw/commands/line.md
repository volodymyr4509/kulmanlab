---
sidebar_position: 1
title: Line Command — Draw, Chain, Trim and Extend Lines in KulmanLab CAD
description: "Amri ya Line inachora sehemu za mstari mzito zinazoweza kuunganishwa mwisho hadi mwisho. Mistari ndiyo aina pekee ya kipengele ambacho Trim na Extend zinafanya kazi nacho. Uhifadhi kamili wa DXF kama vipande vya LINE."
keywords: [CAD line command, draw straight line CAD, chain line segments, trim line CAD, extend line CAD, angle lock CAD, DXF LINE entity, kulmanlab]
---

# Line

Amri ya `line` inachora sehemu za mstari mzito zinazohifadhiwa kama vipande tofauti vya `LINE` katika mfano wa DXF. Baada ya kila sehemu amri inabaki hai na kutumia tena nukta ya mwisho kama nukta mpya ya kuanzia, hivyo unaweza kujenga njia zilizounganishwa sehemu moja kwa wakati mmoja. Tofauti na [Polyline](../polyline/), mistari iliyounganishwa hubaki kama vipande huru — kila kimoja kinaweza kukatwa, kupanuliwa, au kufutwa bila kuathiri jirani zake.

## Kuchora mistari

1. Andika `line` kwenye terminal au bonyeza kitufe cha **Line** kwenye upau wa zana.
2. **Bonyeza nukta ya kuanzia**, au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
3. **Bonyeza nukta ya mwisho** — sehemu imewekwa na nukta ya mwisho inakuwa nukta ya kuanzia inayofuata. Uingizaji wa kuratibu unafanya kazi hapa pia.
4. Endelea kubonyeza (au kuandika) kuunganisha sehemu zaidi.
5. Bonyeza **Enter** au **Escape** kusimama.

```
  ●──────────●──────────●──────────●
 kuanzia   bonyeza 2    bonyeza 3  Enter kumaliza
            (inakuwa kuanzia kinachofuata kiotomatiki)
```

Unahitaji sehemu moja tu? Bonyeza **Enter** au **Escape** mara tu baada ya hatua ya 3.

## Uingizaji wa kuratibu

Badala ya kubonyeza, andika nafasi sahihi kwa mwanzo au nukta yoyote inayofuata:

1. Andika thamani ya X (tarakimu, `.`, au `-`).
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka nukta.

## Kufunga pembe na uingizaji wa urefu sahihi

Unapotembeza kishale baada ya kuweka nukta, amri inangoja mhimili wa kufunga 45° (0°, 45°, 90°, 135°, …). Pembe **inafungwa** wakati:

- kishale kiko angalau **5 × ukubwa wa kushika** kutoka kwa nanga, **na**
- iko ndani ya **1 ukubwa wa kushika** wa umbali wa perpendicular kutoka kwa mhimili wa karibu zaidi.

Inapofungwa, hakiki inakuwa kwenye mhimili na unaweza kuingiza urefu sahihi:

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.` | Ongeza tarakimu kwa thamani ya urefu |
| `-` | Urefu hasi — hubadilisha mwelekeo kwenye mhimili (herufi ya kwanza tu) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Weka nukta ya mwisho kwa umbali uliowekwa |

Thamani iliyokusanywa inaonyeshwa moja kwa moja kwenye terminal (mfano `click end point or enter length: 12.5`). Bonyeza ukiwa umefungwa na bonyeza hiyo inayosukumwa kwenye mhimili, hivyo nukta ya mwisho daima iko juu yake.

Kurudi karibu na nukta ya nanga kunazima ufungaji.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X, au umbali wakati pembe imefungwa |
| `,` | Funga X na nenda kwa uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu au urefu ulioandikwa, au maliza mnyororo kama hakuna kilichoandikwa |
| `Escape` | Maliza mnyororo na toka |

## Uhariri wa kushika — kunyoosha nukta za mwisho

Mstari uliochaguliwa unaonyesha vishiko vitatu:

| Kishiko | Mahali | Kinachofanya |
|---------|--------|--------------|
| **Mwanzo** | Nukta ya kwanza ya mwisho | Buruta kubadilisha nafasi — mwisho unabaki |
| **Katikati** | Katikati ya mstari | Inawasha **Move** kwa mstari wote |
| **Mwisho** | Nukta ya pili ya mwisho | Buruta kubadilisha nafasi — mwanzo unabaki |

Kunyoosha nukta moja ya mwisho haziathiri nyingine. Hii inatofautiana na uhariri wa kushika wa [Polyline](../polyline/), ambapo kuhamisha ncha huumba upya njia nzima.

## Kuchagua mistari

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Huchagua mstari kama bonyeza iko ndani ya umbali wa mtihani wa kukaribia sehemu |
| **Buruta kulia** (mkali) | Mstari huchaguliwa tu kama nukta zote mbili za mwisho ziko ndani ya sanduku |
| **Buruta kushoto** (inayopita) | Mstari huchaguliwa kama sehemu yoyote ya sehemu inapita mpaka wa sanduku |

## Amri za uhariri zinazosaidiwa

Mistari ndiyo kipengele **pekee** ambacho [Trim](../trim/) na [Extend](../extend/) zinafanya kazi nacho. Amri zote za kawaida za mabadiliko pia zinatumika:

| Amri | Kinachotokea kwa mstari |
|------|------------------------|
| [Move](../move/) | Hutafsiri nukta zote mbili za mwisho kwa msogeo uleule |
| [Copy](../copy/) | Huunda mstari unaolingana katika nafasi mpya |
| [Rotate](../rotate/) | Huzungusha nukta zote mbili za mwisho karibu na nukta ya msingi iliyochaguliwa |
| [Mirror](../mirror/) | Huakisi nukta zote mbili za mwisho kwenye mhimili wa kioo |
| [Scale](../scale/) | Hupima nukta zote mbili kwa usawa kutoka kwa nukta ya msingi |
| [Offset](../offset/) | Huunda mstari sambamba kwa umbali wa perpendicular uliowekwa |
| [Trim](../trim/) | Hukata mstari katika makutano — **mistari tu** |
| [Extend](../extend/) | Hunyoosha nukta ya karibu zaidi ya mwisho kufikia mpaka — **mistari tu** |
| [Delete](../delete/) | Huondoa mstari kutoka kwa mchoro |

## Sifa

Mstari unapochaguliwa paneli ya sifa inaonyesha kila uga ambao rekodi ya DXF `LINE` inabeba:

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
| Mwanzo X / Mwanzo Y | Kuratibu za nukta ya kwanza ya mwisho |
| Mwisho X / Mwisho Y | Kuratibu za nukta ya pili ya mwisho |

Nyuga zote zinaweza kuhaririwa moja kwa moja kwenye paneli bila kuendesha tena amri.

## Line dhidi ya Polyline — lini kutumia ipi

| | Line | Polyline |
|---|------|---------|
| Hesabu ya vipande | Moja `LINE` kwa kila sehemu | Moja `LWPOLYLINE` kwa njia nzima |
| Trim / Extend | Ndiyo — sehemu kwa sehemu | Hapana |
| Umbo lililofungwa | Hapana | Ndiyo (alama ya kufunga) |
| Uhariri wa kushika | Nyoosha nukta za mwisho za mtu binafsi | Hamisha ncha yoyote kwenye njia |
| Bora kwa | Mistari ya ujenzi, sehemu moja, jiometri utakayokata | Mihtasari, mipaka, maumbo unayotunza kamili |

## DXF — kipande cha LINE

Mistari huhifadhiwa kama vipande vya `LINE` katika faili ya DXF. Kila sifa — kuratibu za mwanzo/mwisho, rangi, safu, aina ya mstari, kiwango cha aina ya mstari, na unene — hufanywa safari ya kwenda na kurudi bila kupoteza. Unapofungua DXF iliyo na vipande vya `LINE` vinakuwa vitu vya `Line` vinavyoweza kuhaririwa kikamilifu katika kihariri.

Mistari iliyochorwa katika kihariri pia huandikwa kama vipande vya `LINE` wakati wa kuhifadhi, hivyo inaweza kusomwa na LibreCAD, FreeCAD, na programu nyingine yoyote inayolingana na DXF.
