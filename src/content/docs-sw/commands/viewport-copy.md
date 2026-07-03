---
title: "ViewportCopy Command — Duplicate a Viewport in KulmanLab CAD"
description: "Amri ya ViewportCopy huiga mwonekano uliochaguliwa kwenye nafasi mpya katika mpangilio uleule, ukihifadhi mipangilio ya kiwango na mwonekano wa mfano. Inasaidia uingizaji sahihi wa kuratibu, kufunga pembe, na uingizaji wa umbali ulioandikwa."
keywords: [viewport copy, duplicate viewport, copy viewport layout, angle lock viewport, exact coordinate viewport, kulmanlab]
---

# ViewportCopy

Amri ya `ViewportCopy` huiga mwonekano kwenye nafasi mpya, ukihifadhi kiwango chake na kitovu cha mfano. Inapatikana tu katika nafasi ya mpangilio (layout space).

## Kuiga mwonekano

1. Badilisha kwenye kichupo cha mpangilio wa karatasi.
2. Kwa hiari bonyeza mwonekano kuuchagua wanza.
3. Andika `ViewportCopy` kwenye terminal au bonyeza kitufe cha **Viewport Copy** kwenye upau wa zana.
4. Kama hakuna mwonekano uliochaguliwa kabla, **bonyeza mwonekano** wa kuiga.
5. **Bonyeza nukta ya msingi** — marejeleo ya msogeo. Au andika `X,Y` na ubonyeze **Enter** kwa kuratibu sahihi.
6. **Bonyeza mahali pa marudio** — mwonekano huwekwa kwa msogeo wa msingi→marudio. Au tumia uingizaji wa kuratibu / kufunga pembe.

Baada ya kuweka, amri inabaki hai — bonyeza mahali pa marudio pengine kuweka nakala nyingine ya mwonekano uleule. Bonyeza **Enter**, **Space**, au **Escape** kumaliza.

## Uingizaji wa kuratibu

Katika hatua za nukta ya msingi na mahali pa marudio unaweza kuandika kuratibu sahihi badala ya kubonyeza:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuthibitisha.

## Kufunga pembe na umbali sahihi

Baada ya nukta ya msingi kuwekwa, amri inakuwa kwenye mihimili ya 45° (0°, 45°, 90°, 135°, …) kishale kinapopanganishwa. Ukiwa umefungwa:

- Hakiki inakuwa kwenye mhimili.
- Andika umbali na ubonyeze **Enter** kuweka nakala hasa kwa umbali huo kwenye mwelekeo uliofungwa.

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.` | Ongeza tarakimu kwa thamani ya umbali |
| `-` | Umbali hasi (hubadilisha mwelekeo; herufi ya kwanza tu) |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` | Weka nakala kwa umbali ulioandikwa |

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa kuratibu ya X, au umbali ukiwa pembe imefungwa |
| `,` | Funga X na nenda kwa uingizaji wa Y |
| `Enter` | Thibitisha kuratibu au umbali ulioandikwa |
| `Enter` / `Space` | Maliza (wakati hakuna uingizaji unaoendelea) |
| `Escape` | Futa na rejesha |

## Maelezo

- ViewportCopy inapatikana tu wakati kichupo cha mpangilio wa karatasi kiko hai.
- Mwonekano ulioigwa unarith kiwango, kitovu cha mfano, hali ya kufungwa, na vipimo sawa na asili.
- Kuunda mwonekano mpya kutoka mwanzo, tumia [ViewportRectangle](../viewport-rectangle/).
