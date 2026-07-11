---
title: "Amri ya Area — Pima Eneo na Mzunguko wa Poligoni katika KulmanLab CAD"
description: "Amri ya Area hupima eneo lililofungwa na mzunguko wa poligoni inayofafanuliwa na pointi 3 au zaidi zilizobonyezwa, kwa kutumia fomula ya shoelace. Inasaidia uingizaji wa mwelekeo uliofungwa kwa pembe na uangaziaji wa kudumu wa matokeo kwenye turubai."
keywords: [kupima eneo la CAD, amri ya area, hesabu ya eneo la poligoni, kipimo cha mzunguko, fomula ya shoelace, kulmanlab CAD kipimo]
group: measure
order: 3
---

# Area

Amri ya `area` hupima eneo lililofungwa na mzunguko wa poligoni inayofafanuliwa na pointi tatu au zaidi zilizobonyezwa, na kuchapisha matokeo yote mawili kwenye terminal hadi tarakimu 4 za desimali. Ni amri ya tatu ya kipimo, pamoja na [Distance](../distance/) (urefu wa mstari mnyoofu) na [Angle](../angle/) (pembe ya ndani kwenye kilele).

## Muundo wa kipimo cha eneo

```
  ● pointi ya kwanza
   \
    \
     ● pointi ya pili
      \
       \             (mistari iliyokatika) hakikisho la ukingo wa kufunga
        ●───────────────┐
      pointi ya tatu    │  (mistari iliyokatika) hakikisho la ukingo unaofuata hadi kishale
                        ✕ kishale  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Vipeo** — kila pointi iliyobonyezwa (au kuandikwa) inakuwa kipeo cha poligoni; kingo zilizothibitishwa huchorwa kwa mstari thabiti na sehemu ya ndani hujazwa kwa uangaziaji wa nusu-uwazi.
- **Kingo za hakikisho** — mistari iliyokatika inaonyesha ukingo unaosubiri kutoka kipeo cha mwisho hadi kishale, na ukingo wa kufunga kutoka kishale kurudi kipeo cha kwanza.
- **Ukingo wa kufunga** — hubonyezi tena pointi ya kwanza; kubonyeza Enter hufunga poligoni kiotomatiki.

## Kupima eneo

1. Andika `area` kwenye terminal au bonyeza kitufe cha **Area** kwenye upau wa zana (mstari wa chini wa paneli ya Measure).
2. **Bonyeza pointi ya kwanza**, au andika `X,Y` na ubonyeze **Enter** kwa uratibu sahihi.
3. **Bonyeza kila kipeo cha ziada** kwa mfuatano kuzunguka umbo. Uingizaji wa uratibu unafanya kazi kwenye kila hatua.
4. Baada ya kuweka angalau **pointi 3**, bonyeza **Enter** (bila uingizaji wa uratibu au umbali unaosubiri) ili kufunga poligoni na kuhesabu matokeo.
5. Terminal huchapisha `Area: <thamani>  Perimeter: <thamani>`, na poligoni iliyofungwa — ujazo, mstari wa nje, na vishikizo vya vipeo — inabaki imeangaziwa kwenye turubai.
6. **Bonyeza mahali popote, bonyeza kitufe chochote, au bonyeza `Escape`** ili kuondoa matokeo na kumaliza amri.

## Kufunga pembe na umbali sahihi

Baada ya kipeo cha kwanza kuwekwa, kusonga kuelekea moja ya viwango vilivyowekwa vya ufuatiliaji wa pembe (10°, 15°, 20°, 30°, 45°, au 90°, vinavyoweza kuwekwa kupitia menyu ya upau wa zana) hufunga ukingo unaofuata kwenye mwelekeo huo:

- Hakikisho la ukingo hushikamana na mwelekeo uliofungwa, na kiashiria cha ufuatiliaji wa pembe huchorwa kwenye kipeo cha nanga.
- Andika urefu na ubonyeze **Enter** ili kuweka kipeo kinachofuata kwa umbali huo sahihi kando ya mwelekeo uliofungwa.
- Kubonyeza wakati umefungwa (bila urefu ulioandikwa) huweka kipeo kwenye makadirio ya kishale kwenye mwelekeo uliofungwa.

| Kitufe | Kitendo |
|-----|--------|
| `0`–`9`, `.` | Ongeza kwenye thamani ya urefu wa ukingo |
| `-` | Urefu hasi (kama herufi ya kwanza pekee) |
| `Backspace` | Futa herufi ya mwisho iliyochapishwa |
| `Enter` | Weka kipeo kinachofuata kwa urefu ulioandikwa |

## Kufunga poligoni

- Enter hufunga umbo tu baada ya **vipeo 3 au zaidi** kuwekwa — chini ya hapo, haina athari.
- Ukingo kutoka kipeo cha mwisho kurudi cha kwanza huongezwa kiotomatiki na huhesabiwa katika eneo na mzunguko.
- Pointi zinaweza kuwekwa kwa mfuatano wowote (saa au kinyume cha saa) — matokeo ni sawa.

## Area dhidi ya Distance dhidi ya Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Kinachopimwa | Eneo na mzunguko wa poligoni iliyofungwa | Urefu wa mstari mnyoofu | Pembe ya ndani kwenye kilele |
| Idadi ya mibonyezo | 3 au zaidi, kufungwa kwa Enter | 2 | 3 |
| Muundo wa matokeo | `12.3456  Perimeter: 45.6789` | `12.3456` (vitengo) | `45.0000°` |
| Hakikisho la turubai | Poligoni iliyojazwa na ukingo wa kufunga uliokatika | Mstari kutoka pointi ya kwanza hadi kishale | Mistari miwili kutoka kilele hadi kishale |
| Baada ya matokeo | Huondolewa kwa uingizaji wowote, kisha amri inamaliza | Kubonyeza huunganisha kipimo kipya | Kubonyeza huunganisha kipimo kipya |
| Bora kwa | Maeneo yaliyofungwa, eneo la chumba au paneli | Urefu wa pengo au kipande | Pembe ya ufunguzi kati ya vipengele viwili |

## Uingizaji wa uratibu

Badala ya kubonyeza, andika nafasi sahihi kwa kipeo chochote:

1. Andika thamani ya X.
2. Bonyeza `,` — terminal inaonyesha `[X], [Y{cursor}]`.
3. Andika thamani ya Y.
4. Bonyeza **Enter** kuthibitisha.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|-----|--------|
| `0`–`9`, `.`, `-` | Anza uingizaji wa uratibu wa X, au uingizaji wa urefu wa ukingo wakati kufunga pembe kumewashwa |
| `,` | Linda X na endelea na uingizaji wa Y |
| `Backspace` | Futa herufi ya mwisho iliyochapishwa |
| `Enter` | Thibitisha uratibu au urefu ulioandikwa; ikiwa kuna vipeo 3+ na hakuna uingizaji unaosubiri, hufunga poligoni |
| `Escape` | Wakati wa kuchagua vipeo: huondoa pointi zilizowekwa na kuanza tena kwenye pointi ya kwanza; baada ya matokeo kuonyeshwa: huyaondoa na kumaliza amri |

## Maelezo

- Eneo huhesabiwa kwa fomula ya shoelace na daima huripotiwa kama thamani chanya, bila kujali mfuatano wa mibonyezo.
- Poligoni zinazokatiza zenyewe (kingo zinazovuka) bado huzalisha matokeo ya nambari, lakini thamani huenda isilingane na eneo lililofungwa kwa macho — dumisha mfuatano wa mibonyezo usiokatiza kwa eneo lenye maana.
- Matokeo yanaonyeshwa kwenye **terminal na kama uangaziaji wa muda kwenye turubai pekee** — hakuna kinachoongezwa kwa kudumu kwenye mchoro.
- Tofauti na Distance na Angle, Area **haiunganishi** kiotomatiki kipimo kipya — baada ya kuondoa matokeo, endesha `area` tena ili kupima poligoni nyingine.
- Usahihi daima ni tarakimu 4 za desimali kwa eneo na mzunguko, kwa vitengo sawa na uratibu wa mchoro (hakuna ubadilishaji wa vitengo).
