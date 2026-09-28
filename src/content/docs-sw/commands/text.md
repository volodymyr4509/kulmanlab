---
title: "Text Command — Place MTEXT Labels in KulmanLab CAD"
description: "Amri ya Text huweka lebo ya MTEXT ya mistari mingi yenye uumbizaji tajiri. Bonyeza nafasi, andika katika kihariri cha popup, na ubonyeze Escape kuthibitisha. Bonyeza mara mbili lebo yoyote iliyopo kufungua tena kihariri."
keywords: [CAD text command, MTEXT, place text label CAD, text annotation CAD, bold italic CAD, multi-line text CAD, kulmanlab]
group: markup
order: 0
---

# Text

Amri ya `Maandishi` huweka lebo ya maandishi ya mistari mingi. Baada ya kubonyeza nafasi kwenye kanvasi, kihariri cha popup hufunguka katika hali **tajiri** — unaweza kuandika maudhui, kutumia herufi nzito/italiki/mstari wa chini/kupigwa mstari kwa kila herufi, kubadilisha fonti na urefu, na kuingiza mapumziko ya mstari. Bonyeza **Escape** kuthibitisha na kufunga kihariri.

Angalia ukurasa wa [Text Editor](../../interface/text-editor/) kwa marejeo kamili ya kihariri, ikijumuisha ulinganisho wa hali **tajiri** na **rahisi**.

## Kuweka lebo ya maandishi

1. Andika `Maandishi` kwenye terminal au bonyeza kitufe cha **Text** kwenye upau wa zana.
2. **Bonyeza nafasi ya nanga** kwenye kanvasi. Au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
3. **Popup ya kihariri cha maandishi** hufunguka juu ya lebo mpya. Andika maudhui yako.
4. Bonyeza **Escape** kuthibitisha lebo na kufunga kihariri.

Maandishi mapya hunakili fonti, urefu, uzito, mlalo, nafasi ya mistari, mpangilio mlalo na fremu kutoka [MtindoWaMaandishi](../text-style/) wa sasa. Mtindo `Standard` hutumia urefu wa **kipimo 1 cha mchoro** na mpangilio wa kushoto.

## Kuhariri lebo iliyopo

**Bonyeza mara mbili** lebo yoyote ya maandishi kwenye kanvasi kufungua tena kihariri kwa lebo hiyo.

## Uingizaji wa kuratibu kwa nanga

Badala ya kubonyeza, andika nafasi sahihi:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka nanga na kufungua kihariri.

## Marejeo ya kibodi

**Awamu ya nanga**

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X |
| `,` | Funga X na nenda kwa uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu iliyoandikwa |

**Awamu ya kihariri cha maandishi** (angalia [Text Editor](../../interface/text-editor/) kwa marejeo kamili)

| Kitufe | Kitendo |
|--------|---------|
| Herufi yoyote inayochapishwa | Ingiza kwenye kishale |
| `Backspace` / `Delete` | Futa herufi iliyo karibu au uchaguzi |
| `Enter` | Ingiza mapumziko ya mstari |
| `←` / `→` | Sogeza kishale |
| `Home` / `End` | Ruka mwanzo / mwisho wa mstari mgumu |
| `Escape` | Thibitisha na funga kihariri |

## Uhariri wa kushika — kubadilisha nafasi

Lebo ya maandishi iliyochaguliwa inaonyesha kishiko kimoja katika nukta ya nanga:

| Kishiko | Mahali | Kinachofanya |
|---------|--------|--------------|
| **Nanga** | Chini-kushoto ya maandishi | Buruta kubadilisha nafasi ya lebo |

## Kuchagua maandishi

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Huchagua kama bonyeza iko ndani ya sanduku la mipaka la maandishi lililozungushwa |
| **Buruta kulia** (mkali) | Kona zote nne za sanduku la mipaka lazima ziwe ndani ya eneo la uchaguzi |
| **Buruta kushoto** (inayopita) | Mwingiliano wowote kati ya sanduku la mipaka la maandishi na eneo la uchaguzi huchagua lebo |

## Amri za uhariri zinazosaidiwa

| Amri | Kinachotokea kwa maandishi |
|------|---------------------------|
| [Move](../move/) | Husogeza nukta ya nanga |
| [Copy](../copy/) | Huunda lebo inayofanana katika nafasi mpya |
| [Rotate](../rotate/) | Huzungusha nafasi ya nanga na kuongeza pembe kwa Digrii ya Kuzungusha |
| [Mirror](../mirror/) | Huakisi nukta ya nanga kwenye mhimili wa kioo (mnyororo wa maandishi haupinduliwi) |
| [Scale](../scale/) | Hupima nafasi ya nanga na kuzidisha urefu na kiwango cha pima |
| [Delete](../delete/) | Huondoa lebo |

Maandishi hayasaidii **Offset**, **Trim**, au **Extend**.

## Sifa

Lebo ya maandishi inapochaguliwa paneli ya sifa inaonyesha:

**Jumla**

| Sifa | Chaguo-msingi | Maana |
|------|---------------|-------|
| Rangi | 256 (ByLayer) | Faharasa ya rangi ya ACI |
| Safu | `0` | Ugawaji wa safu |

**Jiometri**

| Sifa | Maana |
|------|-------|
| Nafasi X / Nafasi Y | Kuratibu za nukta ya nanga |
| Height | Urefu wa msingi katika vipimo vya mchoro, unaonakiliwa kutoka MtindoWaMaandishi wa sasa unapoundwa |
| Digrii ya Kuzungusha | Kuzungusha kinyume cha saa katika digrii |

**Sifa**

| Sifa | Maana |
|------|-------|
| Maudhui | Mnyororo wa maandishi (msimbo wa ndani wa MTEXT umehifadhiwa) |
| Nukta ya Ushikamanisho | Msimbo wa ulinganifu (1 = juu-kushoto … 9 = chini-kulia) |

Maandishi hayana sifa za Aina ya Mstari, Kiwango cha Aina ya Mstari, au Unene.

Sehemu ya **Sifa** pia huonyesha mpangilio mlalo, upana wa marejeo, nafasi ya mistari na fremu.

## DXF — kipande cha MTEXT

Lebo huhifadhiwa kama vipengee vya **MTEXT**. Nzito na mlalo hutumia `\f`, mstari chini `\L`/`\l`, mstari katikati `\K`/`\k`, na urefu kwa herufi hutumia `\H`. Upana wa marejeo, nafasi ya mistari, mpangilio wa aya, mzunguko na kiambatisho pia huhifadhiwa. Fremu husafirishwa kwa alama ya fremu ya MTEXT na kipimo cha mpaka kinachooana na AutoCAD. Tazama [MtindoWaMaandishi](../text-style/) na [Kidhibiti Fonti](../font-manager/).
