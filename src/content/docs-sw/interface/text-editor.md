---
sidebar_position: 4
title: "Text Editor — Rich-Text Formatting in KulmanLab CAD"
description: "Kihariri cha maandishi cha KulmanLab CAD hukuruhusu kuweka lebo za MTEXT za mistari mingi zenye uumbizaji tajiri na herufi nzito, italiki, kupigwa mstari, kubatilisha fonti na urefu kwa kila herufi, kuvingirishwa kwa maneno, na urambazaji kamili wa kishale."
keywords: [CAD text editor, MTEXT, bold italic CAD, text formatting CAD, multi-line text CAD, word wrap CAD, kulmanlab]
---

# Text Editor

Kihariri cha maandishi hufunguka wakati wowote unapoweka lebo mpya ya maandishi na amri ya `text` au unapobonyeza mara mbili kipande cha maandishi kilichopo. Inasaidia maudhui ya mistari mingi, uumbizaji wa kila herufi, na kuvingirishwa kwa maneno.

## Kufungua kihariri

| Kitendo | Matokeo |
|---------|---------|
| Amri ya `text` → bonyeza nafasi | Huunda kipande kipya cha maandishi na kufungua kihariri |
| Bonyeza mara mbili kipande cha maandishi kilichopo | Hufungua upya kihariri kwa kipande hicho |
| `Escape` ndani ya kihariri | Hufunga kihariri na kuhifadhi mabadiliko yote |

## Upau wa zana

Upau wa zana huelea juu ya sanduku la mipaka la maandishi na kubaki umeshikwa kwenye kipande unavyopanua au kupanua.

### Nzito · Italiki · Kupigwa Mstari

| Kitufe | Mkato | Kinachofanya |
|--------|-------|--------------|
| **B** | — | Kubadilisha nzito |
| *I* | — | Kubadilisha italiki |
| ~~S~~ | — | Kubadilisha kupigwa mstari |

**Jinsi kubadilisha kunavyotumika:**

- **Na uchaguzi wa maandishi** — mtindo unatumika kwa herufi zilizochaguliwa tu hasa.
- **Hakuna uchaguzi, kishale kwenye maandishi yaliyopo** — hubadilisha mtindo kwenye kipande kizima (sehemu zote).
- **Maandishi tupu au kipande kipya** — mtindo huhifadhiwa kwenye sehemu tupu na kutumika kwa kila herufi unayoandika kutoka hapo.

Kitufe kinaonekana kimewekwa alama (kikifanya kazi) wakati kila herufi katika uchaguzi wa sasa — au herufi moja kwa kushoto ya kishale — ina mtindo huo umewekwa.

### Fonti

Menyu ya kuchagua inaorodhesha mkusanyo uliochaguliwa wa aina za herufi za msalaba-mfumo (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, Impact). Chaguo la juu **Arial** ndilo la chaguo-msingi.

- **Na uchaguzi** — hubatilisha fonti kwa herufi zilizochaguliwa tu.
- **Hakuna uchaguzi** — hutumia fonti kwenye kipande kizima.

Menyu ya kuchagua inaonyesha fonti ya herufi ya kushoto ya kishale wakati hakuna uchaguzi.

### Urefu

Uga wa nambari huweka **urefu wa kichwa** (urefu wa herufi kubwa) katika vitengo vya kuchora.

- **Na uchaguzi** — hubatilisha urefu kwa herufi zilizochaguliwa, kwa kujitegemea na urefu wa msingi wa kipande.
- **Hakuna uchaguzi** — hubadilisha urefu wa msingi wa kipande (inatumika kwa herufi zote ambazo hazina ubatilishaji wa urefu wa mtu binafsi).

Uga unaonyesha urefu wa herufi ya kushoto ya kishale. Iacha tupu kutumia chaguo-msingi la kipande.

## Kishale na urambazaji

| Kitufe | Kitendo |
|--------|---------|
| `←` / `→` | Sogeza kishale herufi moja kushoto au kulia |
| `Home` | Ruka mwanzo wa mstari mgumu wa sasa |
| `End` | Ruka mwisho wa mstari mgumu wa sasa |
| `Shift` + `←` / `→` | Panua au punguza uchaguzi |
| `Backspace` | Futa herufi ya kushoto (au uchaguzi) |
| `Delete` | Futa herufi ya kulia (au uchaguzi) |
| `Enter` | Ingiza mapumziko ya mstari |
| `Escape` | Funga kihariri |

Urefu wa kishale hulingana kiotomatiki na urefu wa kichwa wa herufi iliyo karibu, ikijumuisha ukubwa mdogo unaotumika kwa hali ya chini na ya juu.

## Kuvingirishwa kwa maneno

Kipande cha maandishi kikiwa na **upana wa rejeleo** uliowekwa, mistari mirefu huvingiriwa laini kwenye mipaka ya maneno kulingana na upana huo.

Kuweka au kubadilisha upana wa rejeleo wakati kipande kimechaguliwa, kokota **vishiko vya kubadilisha ukubwa** — mstatili nyembamba kwenye kingo za kushoto na kulia za sanduku la mipaka linalopigwa. Maudhui huundwa upya moja kwa moja unavyoburuta.

Kuweka upana wa rejeleo kuwa sifuri (kokota vishiko pamoja au ufute thamani kwenye paneli ya sifa) huondoa kuvingirishwa kwa maneno na kuruhusu mistari kukua kwa uhuru.

## Maandishi ya mistari mingi

Bonyeza `Enter` kuingiza mapumziko ya mstari mgumu. Kila mstari mgumu ni huru — `Home` na `End` huabiri ndani ya mstari mgumu wa sasa tu.

Mapumziko ya mstari mgumu na uumbizaji wa kila herufi huhifadhiwa kwa kutumia muundo wa MTEXT na husalia baada ya safari kamili ya DXF.

## Uoanifu wa DXF

Vipande vya maandishi huhifadhiwa kama **MTEXT** katika faili za DXF. Herufi nzito na italiki zimewekwa msimbo kama `\L`, `\K`, `\O`, na ubadilishaji wa fonti wa ndani (`\f`). Urefu wa kila herufi umewekwa msimbo kama `\H`. Uumbizaji wote huhifadhiwa wakati wa kusafirisha na unasomwa na LibreCAD, FreeCAD, na programu nyingine zinazooana na DXF.
