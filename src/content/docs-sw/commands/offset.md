---
title: "Offset Command — Create Parallel Copies at a Fixed Distance in KulmanLab CAD"
description: "Amri ya Offset huunda nakala sambamba ya Line, Circle, Arc, Ellipse, au Polyline kwa umbali uliowekwa. Umbali huingizwa mara moja na kutumika tena kwa offset nyingi. Bonyeza upande huamua upande gani nakala inaonekana. Aina tano za vipengele zinasaidiwa."
keywords: [CAD offset command, parallel copy CAD, offset line CAD, offset circle CAD, offset polyline CAD, concentric offset, kulmanlab]
group: edit
order: 10
---

# Offset

Amri ya `offset` huunda nakala sambamba ya kipengele kwa umbali wa perpendicular uliowekwa. Unaandika umbali mara moja, kisha ubonyeze vipengele na kuchagua upande — amri inabaki tayari kwa umbali uleule ili uweze kuoffset vipengele vingi katika kikao kimoja.

Aina za vipengele zinazosaidiwa: **Line, Circle, Arc, Ellipse, Polyline** (pamoja na Rectangles).

## Kutumia offset

1. Andika `offset` kwenye terminal au bonyeza kitufe cha **Offset** kwenye upau wa zana.
2. **Andika umbali wa offset** na ubonyeze **Enter** au **Space**.
3. **Bonyeza kipengele** cha kuoffset — kama kipengele si aina inayosaidiwa, ujumbe wa hitilafu unaonekana na unaweza kubonyeza kipengele tofauti.
4. **Sogeza kishale** kuelekea upande ambapo nakala inapaswa kuonekana — hakiki ya moja kwa moja inafuata.
5. **Bonyeza** kuweka nakala ya offset.

Baada ya kila uwekaji amri inarudi hatua ya 3 kwa **umbali uleule**, tayari kwa offset inayofuata. Bonyeza **Escape** kurudi hatua ya uingizaji wa umbali.

```
  Umbali: 10

  ─────────────────    ← mstari wa asili
  ─────────────────    ← nakala ya offset (vitengo 10 chini)
```

## Tabia ya offset kwa kila kipengele

| Kipengele | Jinsi offset inavyohesabiwa |
|-----------|----------------------------|
| **Line** | Mstari sambamba uliobadilishwa perpendicular kwa mwelekeo wa asili |
| **Circle** | Duara linalofanana katikati; bonyeza nje → radius kubwa, ndani → radius ndogo |
| **Arc** | Upinde unaofanana katikati kwa radius mpya; upeo uleule wa pembe unahifadhiwa |
| **Ellipse** | Mihimili yote miwili imeongezwa au kupunguzwa kwa umbali sawa |
| **Polyline** | Kila sehemu imeoffset kwa kujitegemea; sehemu za offset zilizo karibu zinaunganishwa kwenye pembe |

Kwa **Circle**, **Arc**, na **Ellipse**: kama offset ya ndani ingepunguza radius yoyote au mihimili hadi sifuri au chini, offset haitekelezwi.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `0`–`9`, `.` | Ongeza tarakimu kwa thamani ya umbali |
| `Backspace` | Futa herufi ya mwisho iliyoandikwa |
| `Enter` / `Space` | Thibitisha umbali ulioandikwa na endelea kwa uchaguzi wa kipengele |
| `Escape` | Rudi hatua ya uingizaji wa umbali |

## Dokezo la mtiririko wa kazi

Umbali unabaki umewekwa hadi ubonyeze **Escape**. Hii inafanya iwe na ufanisi kuoffset vipengele vingi kwa nafasi sawa — andika umbali mara moja, kisha ubonyeze na uchague upande kwa kila kipengele kwa mpangilio.

## Offset dhidi ya Copy

| | Offset | Copy |
|---|--------|------|
| Msogeo | Perpendicular kwa jiometri ya kipengele | Vekta ya kiholela (msingi → lengwa) |
| Vipengele vinavyosaidiwa | Line, Circle, Arc, Ellipse, Polyline | Aina zote za vipengele |
| Uingizaji wa umbali | Unaandikwa kabla ya kuchagua kipengele | Unaandikwa au kubonyezwa baada ya kuchagua |
| Bora kwa | Mistari sambamba, miduara inayofanana katikati, njia za ndani/nje | Kuweka nakala katika nafasi za kiholela |
