---
sidebar_position: 1
title: Move Command — Translate Selected Entities by Base Point in KulmanLab CAD
description: "Amri ya Move hutafsiri vipengele moja au zaidi vilivyochaguliwa kwa nukta ya msingi na lengwa. Inasaidia uchaguzi wa awali, ufungaji wa pembe, na uingizaji wa umbali sahihi. Baada ya kuhamia vipengele vinabaki vikichaguliwa katika nafasi yake mpya. Kila aina ya kipengele inasaidiwa."
keywords: [CAD move command, translate entities CAD, move objects CAD, angle lock move, exact distance move, grip move CAD, kulmanlab]
---

# Move

Amri ya `move` hutafsiri vipengele vilivyochaguliwa kutoka nafasi moja hadi nyingine kwa kufafanua nukta ya msingi na nukta ya lengwa. Tofauti na [Copy](../copy/), Move huondoa vipengele kutoka nafasi yake ya asili — hakuna nakala inayoundwa.

## Njia mbili za kuanza

**Chagua kwanza, kisha hamisha** — chagua vipengele kwanza, kisha anzisha:

1. Chagua vipengele moja au zaidi kwenye turubai.
2. Andika `move` kwenye terminal au bonyeza kitufe cha **Move** kwenye upau wa zana.
3. **Bonyeza nukta ya msingi**, au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
4. **Bonyeza nukta ya lengwa** — vipengele vinahamia na amri inatoka. Uingizaji wa kuratibu unafanya kazi hapa pia.

**Anzisha, kisha chagua** — anza amri bila chochote kilichochaguliwa:

1. Andika `move` au bonyeza kitufe cha upau wa zana.
2. **Chagua vitu** — bonyeza kubadilisha, au buruta kuchagua kwa eneo.
3. Bonyeza **Enter** au **Space** kuthibitisha uchaguzi.
4. **Bonyeza nukta ya msingi**, kisha **bonyeza nukta ya lengwa** (uingizaji wa kuratibu unapatikana katika hatua zote mbili).

```
  Kabla:             Baada ya:
  [kipengele A]  →   (nafasi tupu)    [kipengele A]
  (nafasi ya asili)                   (nafasi mpya)
```

Hakiki ya moja kwa moja ya vipengele vilivyohamishwa hufuata kishale unapoweka nafasi ya nukta ya lengwa.

## Uingizaji wa kuratibu

Badala ya kubonyeza, andika nafasi sahihi kwa nukta ya msingi au lengwa:

1. Andika thamani ya X (tarakimu, `.`, au `-`).
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuweka nukta.

## Kufunga pembe na umbali sahihi

Unapotembeza kishale baada ya kuweka nukta ya msingi, amri inangoja mhimili wa kufunga 45° (0°, 45°, 90°, 135°, …). Pembe **inafungwa** wakati:

- kishale kiko angalau **5 × ukubwa wa kushika** kutoka kwa nukta ya msingi, **na**
- iko ndani ya **1 ukubwa wa kushika** wa umbali wa perpendicular kutoka kwa mhimili wa karibu zaidi.

Inapofungwa, hakiki inakuwa kwenye mhimili na unaweza kuingiza umbali sahihi:

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.` | Ongeza tarakimu kwa thamani ya umbali |
| `-` | Umbali hasi — hubadilisha mwelekeo kwenye mhimili (herufi ya kwanza tu) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Hamisha vipengele kwa umbali uliowekwa |

Thamani iliyokusanywa inaonyeshwa moja kwa moja kwenye terminal. Bonyeza ukiwa umefungwa na bonyeza hiyo inayosukumwa kwenye mhimili, hivyo nukta ya lengwa daima iko juu yake.

Kurudi karibu na nukta ya msingi kunazima ufungaji.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X, au umbali wakati pembe imefungwa |
| `,` | Funga X na nenda kwa uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Thibitisha kuratibu au umbali ulioandikwa, au thibitisha uchaguzi kama hakuna kilichoandikwa |
| `Escape` | Ghairi na upya |

## Kuanzisha Move kutoka kwa kushika

Unaweza kuanzisha Move moja kwa moja kutoka kwa gridi ya kishika badala ya terminal:

- **Vishiko vya laini (Line)**: Bonyeza **kishiko cha katikati** cha mstari uliochaguliwa. Hii huanzisha Move kwa kutumia nafasi ya kishiko kama nukta ya msingi kiotomatiki. Kisha bonyeza tu nafasi ya lengwa (au andika umbali ukiwa umefungwa pembe).

Njia hii ni ya haraka kwa mabadiliko ya ndogo ambapo tayari unajua unachotaka kuhamisha na upenda kuepuka hatua ya kuchagua nukta ya msingi kwa mkono.

## Uchaguzi wakati wa amri

| Njia | Tabia |
|------|-------|
| **Bonyeza** | Hubadilisha kipengele chini ya kishale |
| **Buruta kulia** (mkali) | Huongeza vipengele vilivyo ndani kikamilifu ya sanduku |
| **Buruta kushoto** (inayopita) | Huongeza vipengele vinavyokutana na sanduku |
| **Enter** / **Space** | Huthibitisha uchaguzi |

## Baada ya kuhamia

Baada ya amri kukamilika:

- Vipengele vilivyohamishwa **vinabaki vikichaguliwa** katika nafasi yake mpya.
- Hakuna nakala iliyoundwa — vipengele viliondolewa kutoka nafasi yake ya asili.
- Unaweza kuendelea kuhariri au kuhamisha tena mara moja bila kuchagua upya.

## Move dhidi ya Copy

| | Move | Copy |
|---|------|------|
| Asili | Huondolewa kutoka nafasi ya asili | Daima huhifadhiwa mahali pake |
| Nakala mpya | Hapana | Ndiyo — kimoja au zaidi |
| Uchaguzi baada ya amri | Vipengele vilivyohamishwa vikichaguliwa | Nakala mpya vikichaguliwa |
| Bora kwa | Kupanga upya jiometri iliyopo | Kurudia jiometri katika nafasi nyingi |

## Vipengele vinavyosaidiwa

Kila aina ya kipengele inasaidiwa na Move — mistari, miduara, arki, ellipsi, polylines, mstatili, maandishi, splines, vipimo, na zaidi. Jiometri yote huhamishwa kwa usawa sawa na vekta ya msogeo kutoka nukta ya msingi hadi lengwa.
