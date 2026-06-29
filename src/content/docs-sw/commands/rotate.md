---
sidebar_position: 2
title: "Rotate Command — Rotate Entities Around a Base Point in KulmanLab CAD"
description: "Amri ya Rotate huzungusha vipande vilivyochaguliwa karibu na nukta ya msingi iliyochaguliwa. Pembe inaweza kuandikwa kwa usahihi au kuwekwa kwa kubonyeza — mwelekeo wa kishale kutoka kwa nukta ya msingi hadi bonyeza huamua pembe. Pembe chanya ni kinyume cha saa katika kuratibu za DXF."
keywords: [CAD rotate command, rotate entities CAD, rotate objects angle, counter-clockwise rotation CAD, typed angle rotate, kulmanlab]
---

# Rotate

Amri ya `rotate` huzungusha vipande vilivyochaguliwa karibu na nukta ya msingi. Unabainisha pembe ya kuzungusha ama kwa kuandika nambari katika digrii au kwa kubonyeza — pembe huhesabiwa kutoka kwa mwelekeo kati ya nukta ya msingi na nafasi ya bonyeza.

## Njia mbili za kuanza

**Chagua kwanza, kisha zungusha** — chagua vipande kwanza, kisha washa:

1. Chagua kipande kimoja au zaidi kwenye kanvasi.
2. Andika `rotate` kwenye terminal au bonyeza kitufe cha **Rotate** kwenye upau wa zana.
3. **Bonyeza nukta ya msingi** — katikati ya kuzungusha. Au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
4. **Andika pembe na ubonyeze Enter**, au **bonyeza** kuweka pembe kutoka kwa mwelekeo wa kishale.

**Washa kwanza, kisha chagua** — anza amri bila chochote kilichochaguliwa:

1. Andika `rotate` au bonyeza kitufe cha upau wa zana.
2. **Chagua vitu** — bonyeza kubadilisha, au buruta kuchagua kwa eneo.
3. Bonyeza **Enter** au **Space** kuthibitisha uchaguzi.
4. **Bonyeza nukta ya msingi** (uingizaji wa kuratibu unapatikana), kisha weka pembe.

```
  Kabla:             Baada (kuzungushwa 90° karibu na ●):
                        ╔══╗
  ●  [kipande]    →   ● ║    ║
                        ╚══╝
```

Hakiki ya kivuli ya vipande vilivyozungushwa inafuata pembe ya kishale baada ya nukta ya msingi kuwekwa.

## Kuweka pembe

**Pembe iliyoandikwa** — andika nambari (katika digrii) wakati wowote baada ya nukta ya msingi kuwekwa. Hakiki inakuwa kwenye pembe iliyoandikwa ukiendelea kubadilisha kabla ya kubonyeza Enter.

**Pembe ya bonyeza** — kama hakuna thamani iliyoandikwa, kubonyeza huweka pembe sawa na `atan2(kishaleY − msingiY, kishaleX − msingiX)` — mwelekeo kutoka kwa nukta ya msingi hadi bonyeza, katika digrii.

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.` | Ongeza tarakimu kwa thamani ya pembe |
| `-` | Pembe hasi (herufi ya kwanza tu) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Tekeleza kuzungushwa kwa pembe iliyoandikwa |

## Mwelekeo wa pembe

Pembe hufuata **mwenendo wa DXF**:

- Thamani **chanya** huzungusha **kinyume cha saa** katika kuratibu za kuchora (Y-juu).
- Kwenye skrini, ambapo mhimili wa Y umegerenzwa (Y-chini), pembe chanya zinaonekana **kwa saa**.

Thamani za kawaida: `90` = zamu ya robo, `180` = zamu ya nusu, `-90` = zamu ya robo iliyo kinyume.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Enter` / `Space` | Thibitisha uchaguzi |
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X (awamu ya nukta ya msingi), au thamani ya pembe (awamu ya pembe) |
| `,` | Funga X na nenda kwa uingizaji wa Y (awamu ya nukta ya msingi) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu au tekeleza kuzungushwa |
| `Escape` | Futa na rejesha |

## Uchaguzi wakati wa amri

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Hubadilisha kipande chini ya kishale |
| **Buruta kulia** (mkali) | Huongeza vipande vilivyo ndani kabisa ya sanduku |
| **Buruta kushoto** (inayopita) | Huongeza vipande vinavyoingilia sanduku |
| **Enter** / **Space** | Huthibitisha uchaguzi |

## Vipande vinavyosaidiwa

Rotate inafanya kazi kwenye kila aina ya kipande. Jiometri ya kila kipande huzungushwa karibu na nukta ya msingi — kwa mfano, Duara husogeza kitovu chake wakati radi inabaki sawa; Arc husogeza kitovu chake na kubadilisha pembe zake za mwanzo na mwisho kwa kiasi cha kuzungushwa; kipande cha Text husogeza nukta yake ya nanga na kuongeza pembe kwa sifa yake ya Digrii ya Kuzungusha.
