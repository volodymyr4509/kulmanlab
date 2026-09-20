---
title: "Polyline Command — Draw Multi-Segment Paths as a Single Entity"
description: "Amri ya Polyline inachora idadi yoyote ya sehemu zilizounganishwa zilizohifadhiwa kama kipande kimoja cha LWPOLYLINE. Vishiko vya ncha na katikati ya sehemu hukuruhusu kubadilisha sehemu yoyote ya njia baada ya kuunda. Inasaidia offset; haisaidii trim au extend."
keywords: [CAD polyline command, draw polyline CAD, multi-segment path CAD, LWPOLYLINE DXF, reshape polyline, vertex grip CAD, offset polyline, kulmanlab]
group: shapes
order: 2
---

# Polyline

Amri ya `Polilaini` inachora njia iliyounganishwa ya idadi yoyote ya sehemu za mstari au mviringo, zote zikihifadhiwa kama kipande kimoja cha `LWPOLYLINE`. Kwa sababu njia nzima ni kitu kimoja, kuichagua kunachagua kila sehemu mara moja — hamisha, zungusha, au pima umbo zima katika operesheni moja. Hii ndiyo tofauti kuu kutoka kwa [Lines](../line/) zilizounganishwa, ambapo kila sehemu ni kipande huru.

Polylines pia zinaweza **kufungwa**: amri ya [Rectangle](../rectangle/) inatumia kipande hicho hicho cha `LWPOLYLINE` na alama ya kufunga iliyowekwa.

## Kuchora polyline

1. Andika `Polilaini` kwenye terminal au bonyeza kitufe cha **Polyline** kwenye upau wa zana.
2. **Bonyeza nukta ya kwanza**, au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
3. **Bonyeza kila nukta inayofuata** — kila bonyeza inaongeza sehemu. Uingizaji wa kuratibu unafanya kazi katika kila hatua.
4. Bonyeza **Enter** au **Space** kumaliza (inahitaji angalau nukta 2 zilizowekwa).

```
  ●──────●
  1      2
          \
           \  sehemu 3 (inaendelea — kishale hapa)
            ●  ← bonyeza kuongeza, Enter/Space kumaliza
```

Kubonyeza **Escape** wakati wowote kunafuta nukta zote zilizowekwa na kutoka kwa amri.

## Kuchora sehemu ya mviringo

Bonyeza **A** wakati wowote baada ya ncha ya kwanza kubadilisha hali ya Arc — mtindo uleule wa chaguo la ndani ya mstari ambao chaguo la Copy la Rotate hutumia. Ombi linaonyesha hali ya sasa kama `[Arc=true]` / `[Arc=false]`; kubonyeza **A** tena hubadilisha kurudi, hivyo sehemu za mstari na mviringo zinaweza kuchanganywa kwa uhuru katika polyline moja.

Hali ya Arc ikiwa imewashwa, kila sehemu mpya ni mviringo wa mwendelezo wa tanjenti — huanza tanjenti kwa kile kilichokuja kabla yake moja kwa moja (mwelekeo wa sehemu ya mstari iliyotangulia, au tanjenti ya mwisho ya mviringo uliotangulia); sehemu ya kwanza kabisa huelekea mashariki kwa chaguo-msingi, kwa kuwa haina chochote cha kuwa tanjenti nayo.

## Uingizaji wa kuratibu

Badala ya kubonyeza, andika nafasi sahihi kwa ncha yoyote:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka ncha.

## Kufunga pembe na urefu sahihi wa sehemu

Mantiki ile ile ya kufunga 45° kama amri ya [Line](../line/#angle-locking-and-exact-length-input) inatumika kati ya nukta mbili zinazofuatana. Ukifungwa kwenye mhimili:

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.` | Ongeza tarakimu kwa urefu wa sehemu |
| `-` | Urefu hasi — hubadilisha mwelekeo kwenye mhimili (herufi ya kwanza tu) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Weka nukta inayofuata kwa umbali uliowekwa |

Urefu uliyokusanywa wa sasa unaonekana kwenye kidokezo cha terminal moja kwa moja. Kubonyeza ukiwa umefungwa kunasukuma kwenye mhimili hivyo ncha mpya iko juu yake hasa.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X, au urefu wa sehemu ukiwa pembe imefungwa |
| `,` | Funga X na nenda kwa uingizaji wa Y |
| `A` | Badilisha hali ya Arc kwa sehemu inayofuata (baada ya ncha ya kwanza, bila uingizaji unaoendelea) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu au urefu ulioandikwa, au maliza polyline kama hakuna kilichoandikwa na nukta ≥ 2 zipo |
| `Space` | Maliza polyline (sawa na Enter wakati hakuna uingizaji unaoendelea) |
| `Escape` | Futa nukta zote na toka |

## Uhariri wa kushika — ncha na katikati ya sehemu

Polyline iliyochaguliwa inaonyesha aina mbili za vishiko:

| Kishiko | Mahali | Kinachofanya |
|---------|--------|--------------|
| **Ncha** | Katika kila nukta iliyowekwa | Buruta kubadilisha nafasi ya ncha hiyo; sehemu zote zilizounganishwa hupanuka kufuata |
| **Katikati ya sehemu** | Katikati ya kila sehemu | Buruta kutafsiri **nukta zote mbili** za mwisho za sehemu hiyo pamoja, ukihifadhi urefu na pembe ya sehemu |

Kishiko cha katikati ya sehemu ni kipekee kwa polylines — hukuruhusu kusogeza sehemu moja pembeni bila kubadilisha urefu wake. Katika [Line](../line/), kishiko cha katikati badala yake kinawasha amri ya Move kwa kipande kizima.

Hakuna kishiko kimoja cha "hamisha polyline nzima". Kuhamisha njia nzima tumia amri ya [Move](../move/).

## Kuchagua polylines

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Huchagua polyline kama bonyeza iko ndani ya umbali wa mtihani wa kukaribia wa sehemu yoyote |
| **Buruta kulia** (mkali) | Ncha zote lazima ziwe ndani ya sanduku |
| **Buruta kushoto** (inayopita) | Sehemu yoyote inayopita mpaka wa sanduku huchagua polyline nzima |

Kwa sababu polyline ni kipande kimoja, uchaguzi wa kupita unaogusa sehemu yoyote huchagua sehemu zote.

## Amri za uhariri zinazosaidiwa

Polylines zinasaidia kila mabadiliko ya kawaida, pamoja na offset, trim, extend, chamfer, na fillet (kwa chamfer ni sehemu za moja kwa moja pekee zinazohesabiwa, wakati fillet inashughulikia sehemu za moja kwa moja na za mviringo):

| Amri | Kinachotokea kwa polyline |
|------|--------------------------|
| [Move](../move/) | Hutafsiri ncha zote kwa msogeo uleule |
| [Copy](../copy/) | Huunda polyline inayofanana katika nafasi mpya |
| [Rotate](../rotate/) | Huzungusha ncha zote karibu na nukta ya msingi iliyochaguliwa |
| [Mirror](../mirror/) | Huakisi ncha zote kwenye mhimili wa kioo |
| [Scale](../scale/) | Hupima ncha zote kwa usawa kutoka kwa nukta ya msingi |
| [Offset](../offset/) | Huunda polyline sambamba kwa umbali wa perpendicular uliowekwa |
| [Trim](../trim/) | Huondoa sehemu kati ya makutano mawili, kwa sehemu za moja kwa moja au mviringo sawa |
| [Extend](../extend/) | Hunyoosha sehemu ya kwanza au ya mwisho hadi mpaka unaofuata |
| [Chamfer](../chamfer/) | Hupinda kona kati ya sehemu mbili za moja kwa moja zilizo jirani |
| [Fillet](../fillet/) | Hupinda kona kati ya sehemu mbili zilizo jirani (za moja kwa moja au za mviringo) za polyline moja kama bulge ya upinde wa tangent; kupinda kwenye polyline nyingine iliyo wazi au kipengele huru cha Line/Arc huunganisha vyote viwili kuwa polyline mpya |
| [Explode](../explode/) | Inavunja polyline kuwa entiti huru za mstari na mkunjo, moja kwa kila sehemu |
| [Delete](../delete/) | Huondoa polyline kutoka kwa mchoro |

## Sifa

Polyline inapochaguliwa paneli ya sifa inaonyesha:

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
| Imefungwa | Je, ncha ya mwisho inaunganishwa na ya kwanza |
| Hesabu ya Ncha | Jumla ya ncha zote |
| Ncha | Orodha ya kuratibu za ncha zote |

## Polyline dhidi ya Line — lini kutumia ipi

| | Polyline | Line |
|---|---------|------|
| Hesabu ya vipande | Moja `LWPOLYLINE` kwa njia nzima | Moja `LINE` kwa kila sehemu |
| Umbo lililofungwa | Ndiyo (alama ya kufunga) | Hapana |
| Sehemu za mviringo | Ndiyo, kwa kila sehemu kupitia kigeuza `Arc` | Hapana — sehemu iliyopinda inahitaji kipande cha [Arc](../arc/) tofauti |
| Trim / Extend | Ndiyo | Ndiyo — sehemu kwa sehemu |
| Kishiko cha katikati ya sehemu | Hutafsiri sehemu nzima | Inawasha Move kwa kipande |
| Bora kwa | Mihtasari, mipaka, maumbo unayotunza kamili | Mistari ya ujenzi, jiometri utakayokata |

## DXF — kipande cha LWPOLYLINE

Polylines huhifadhiwa kama vipande vya `LWPOLYLINE` katika faili ya DXF. Sifa zote — kuratibu za ncha, alama ya kufunga, rangi, safu, aina ya mstari, kiwango cha aina ya mstari, na unene — hufanywa safari ya kwenda na kurudi bila kupoteza. Mstatili uliochorwa kwa amri ya [Rectangle](../rectangle/) pia huhifadhiwa kama `LWPOLYLINE` (imefungwa, ncha nne) na haiwezi kutofautishwa katika kiwango cha DXF.

Vipande vya `LWPOLYLINE` kutoka programu yoyote inayolingana na DXF (LibreCAD, FreeCAD, n.k.) husomwa tena kama polylines zinazoweza kuhaririwa kikamilifu katika kihariri.
