---
sidebar_position: 6
title: Amri ya Ellipse — Chora Duaradufu Zilizozungushwa kwa Kituo na Mihimili Miwili katika KulmanLab CAD
description: "Amri ya Ellipse huchora duaradufu kwa mibonyezo mitatu — kituo, mwisho wa mhimili wa kwanza (mwelekeo wowote), kisha urefu wa mhimili wa pili. Mihimili miwili daima iko perpendicular. Kila nusu-mhimili ina mpini wake wa kubadilisha ukubwa kwa uhuru baada ya kuweka. Uhifadhi kamili wa DXF kama viumbe vya ELLIPSE."
keywords: [CAD ellipse command, draw ellipse CAD, rotated ellipse CAD, ellipse axes, ELLIPSE DXF entity, ellipse grip editing, axis ratio, kulmanlab]
---

# Ellipse

Amri ya `ellipse` huchora duaradufu kwa kutumia mibonyezo mitatu: pointi ya kituo, mwisho wa nusu-mhimili wa kwanza (mkubwa) kwa pembe yoyote, na urefu wa nusu-mhimili wa pili (mdogo). Mihimili miwili daima iko perpendicular kwa kila mmoja — mwelekeo wa mhimili wa pili hupatikana kiotomatiki kutoka wa kwanza.

## Kuchora duaradufu

1. Andika `ellipse` kwenye terminal au bonyeza kitufe cha **Ellipse** kwenye upau wa zana.
2. **Bonyeza pointi ya kituo**, au andika `X,Y` na ubonyeze **Enter** kwa uratibu sahihi.
3. **Bonyeza mwisho wa mhimili wa kwanza** — huweka mwelekeo na urefu wa nusu-mhimili wa kwanza. Uingizaji wa uratibu unafanya kazi hapa pia.
4. **Weka urefu wa mhimili wa pili** — sogeza kishale perpendicular kwa mhimili wa kwanza, kisha bonyeza au andika urefu.

```
               ● ← mwisho wa mhimili wa kwanza (hatua ya 3)
              /
  kituo ●  /  ← mhimili wa kwanza (pembe yoyote)
            |
            ● ← kishale hapa huweka urefu wa mhimili wa pili (hatua ya 4)
```

Duaradufu huwekwa baada ya hatua ya 4 na amri inatoka.

## Uingizaji wa mhimili — kubonyeza, uratibu, au urefu uliochapishwa

**Kituo (hatua ya 2):** bonyeza au andika `X,Y` kwa nafasi sahihi.

**Mwisho wa mhimili wa kwanza (hatua ya 3):** bonyeza, au andika `X,Y` kwa uratibu sahihi. Kulinda pembe pia kunashikamana na vipande vya digrii 45 — ukiwa umelindwa, andika urefu na ubonyeze **Enter** kuweka mwisho kwa umbali huo sahihi.

**Mhimili wa pili (hatua ya 4):** urefu uliochapishwa daima unapatikana — hakuna haja ya kulinda pembe. Mwelekeo tayari umewekwa perpendicular kwa mhimili wa kwanza; kuandika kunaweka urefu pekee.

| Kitufe | Kitendo |
|-----|--------|
| `0`–`9`, `.` | Ongeza tarakimu kwenye urefu wa mhimili (awamu ya mhimili wa pili) |
| `Backspace` | Futa herufi ya mwisho iliyochapishwa |
| `Enter` | Weka mwisho wa mhimili kwa urefu uliochapishwa |

## Uingizaji wa uratibu (kituo na mwisho wa mhimili wa kwanza)

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuthibitisha.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|-----|--------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa uratibu wa X (awamu za kituo/mhimili wa kwanza), au urefu wa mhimili ukiwa umelindwa pembe |
| `,` | Linda X na endelea na uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyochapishwa |
| `Enter` | Thibitisha uratibu au urefu uliochapishwa |
| `Escape` | Ghairi na upya |

## Uhariri wa mpini — kubadilisha ukubwa wa mhimili kwa uhuru

Duaradufu iliyochaguliwa huonyesha vipini vitano:

| Mpini | Idadi | Unachofanya |
|------|-------|--------------|
| **Kituo** | 1 | Huhamisha duaradufu nzima; mihimili yote haibadiliki |
| **Mwisho wa mhimili mkubwa** | 2 (ncha mbili kinyume cha mhimili mrefu) | Buruta kubadilisha urefu wa nusu-mhimili mkubwa; ukubwa halisi wa mhimili mdogo unabaki imara |
| **Mwisho wa mhimili mdogo** | 2 (ncha mbili kinyume cha mhimili mfupi) | Buruta kubadilisha urefu wa nusu-mhimili mdogo; mhimili mkubwa haubadiliki |

Vipini vya mhimili mkubwa na mdogo ni huru — unaweza kubadilisha umbo la duaradufu bila kuendesha amri tena.

## Kuchagua duaradufu

| Njia | Tabia |
|--------|-----------|
| **Kubonyeza** | Huchagua ikiwa bonyezo liko karibu na muhtasari wa duaradufu |
| **Buruta kulia** (mkali) | Sanduku la kuzungumza la mhimili sambamba la duaradufu lazima liwe ndani kabisa ya sanduku la uchaguzi |
| **Buruta kushoto** (msalaba) | Sehemu yoyote ya muhtasari wa duaradufu inayovuka mpaka wa sanduku la uchaguzi huichagua |

## Amri za uhariri zinazotumika

| Amri | Kinachotokea kwa duaradufu |
|---------|-----------------------------|
| [Move](./move) | Huhamisha kituo; mihimili yote haibadiliki |
| [Copy](./copy) | Huunda duaradufu sawa kwenye kituo kipya |
| [Rotate](./rotate) | Huzungusha nafasi ya kituo na vektа ya mhimili mkubwa kwa pembe sawa |
| [Mirror](./mirror) | Huakisi kituo na kuhesabu upya mwelekeo wa mhimili mkubwa kwenye mhimili wa kioo |
| [Scale](./scale) | Hupanua nafasi ya kituo na kuzidisha urefu wa nusu-mihimili yote kwa kipengele |
| [Offset](./offset) | Huunda duaradufu ya muunganiko iliyowekwa nje au ndani kwa umbali maalum |
| [Delete](./delete) | Huondoa duaradufu |

## Sifa

**Jumla**

| Sifa | Chaguo-msingi | Maana |
|----------|---------|---------|
| Rangi | 256 (ByLayer) | Faharasa ya rangi ya ACI |
| Tabaka | `0` | Ugawaji wa tabaka |
| Aina ya mstari | ByLayer | Mfumo wa aina ya mstari uliopewa jina |
| Kiwango cha Aina ya Mstari | 1 | Kipengele cha kiwango kwenye mfumo wa aina ya mstari |
| Unene | 0 | Unene wa utokezaji |

**Jiometri**

| Sifa | Maana |
|----------|---------|
| Kituo X / Kituo Y | Kituo cha duaradufu |
| Mhimili Mkubwa X / Mhimili Mkubwa Y | Vektа kutoka kituo hadi mwisho wa mhimili mkubwa (inajumuisha mwelekeo na urefu) |
| Uwiano wa Mhimili | Uwiano wa nusu-mhimili mdogo kwa mkubwa (0 < uwiano ≤ 1) |
| Pembe ya Mwanzo / Pembe ya Mwisho | Pembe za kiparamita kwa digrii; zote ni 0°/360° kwa duaradufu kamili |

## Ellipse dhidi ya Circle — lini utumie lipi

| | Ellipse | Circle |
|---|---------|--------|
| Mihimili | Nusu-mihimili miwili huru kwa pembe yoyote | Eneo moja, linganifu |
| Kuzungusha | Inaweza kuwekwa kwa pembe yoyote | Hakuna kuzungusha |
| Uingizaji uliochapishwa | Urefu kwa kila mhimili | Eneo pekee |
| Kubadilisha mpini | Mkubwa na mdogo kwa uhuru | Pointi zote nne za kardinali kwa usawa |
| Bora kwa | Maoni ya mwingiliano, vipengele vya mviringo, mashimo ya mtazamo | Vipengele vya mviringo linganifu |

## DXF — kiumbe cha ELLIPSE

Duaradufu huhifadhiwa kama viumbe vya `ELLIPSE` kwenye faili la DXF. Muundo huhifadhi pointi ya kituo, vektа kamili ya mhimili mkubwa (mwelekeo + urefu), na uwiano wa mhimili. Kuzungusha, umbo, na sifa zote za mtindo huhifadhiwa bila kupoteza data. Duara **haihifadhiwi** kama duaradufu iliyoshuka — aina mbili za viumbe zinabaki tofauti katika muundo wa DXF.
