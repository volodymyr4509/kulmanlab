---
title: Amri ya ClipboardCopy — Kunakili vitu kwenye ubao wa kunakili wa mfumo
description: Amri ya ClipboardCopy huandika vitu vilivyochaguliwa kwenye ubao wa kunakili wa mfumo kama maandishi ya JSON, pamoja na tabaka na aina za mistari vinavyorejelea, ili viweze kubandikwa kwenye mchoro mwingine au kichupo kingine cha kivinjari kwa ClipboardPaste.
keywords: [kunakili ubao wa kunakili CAD, kunakili vitu kati ya michoro, kunakili vitu vya CAD, Ctrl+C CAD, kunakili kati ya vichupo, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Amri ya `ClipboardCopy` huandika vitu vilivyochaguliwa kwenye **ubao wa kunakili wa mfumo** wako kama maandishi ya JSON. Kwa sababu inatumia ubao halisi wa kunakili badala ya hifadhi ya muda ndani ya kumbukumbu, jiometri iliyonakiliwa hubaki hai nje ya mchoro: ibandike kwenye faili lingine, kichupo cha pili cha kivinjari, au dirisha utakalofungua baadaye kwa [ClipboardPaste](../clipboard-paste/).

Hii ndiyo tofauti na [Copy](../copy/): Copy hunakili vitu ndani ya mchoro wa sasa kwa hatua moja, wakati ClipboardCopy huviweka mahali ambapo vinaweza kuchukuliwa kutoka kwenye mchoro tofauti kabisa.

## Njia mbili za kuanza

**Chagua kwanza, kisha nakili** — njia ya haraka:

1. Chagua kitu kimoja au zaidi kwenye eneo la kuchora.
2. Bonyeza `Ctrl+C` (`Cmd+C` kwenye macOS), au andika `ClipboardCopy` kwenye terminali.
3. Vitu huandikwa kwenye ubao wa kunakili mara moja na amri huisha.

**Anzisha kwanza, kisha chagua** — kuanza bila kuchagua chochote:

1. Bonyeza `Ctrl+C` au andika `ClipboardCopy` wakati hakuna kilichochaguliwa.
2. Kidokezo huonyesha **pick objects to copy — Enter or Space to confirm**.
3. **Chagua vitu** — bofya kuweka au kuondoa vitu mmoja mmoja kwenye uteuzi, au buruta kuchagua kwa eneo.
4. Bonyeza **Enter** au **Space** kunakili uteuzi na kutoka.

Kubonyeza **Enter** au **Space** bila kuchagua chochote humaliza tu amri bila kugusa ubao wa kunakili.

## Kinachonakiliwa

Kilichomo kwenye ubao wa kunakili hubeba zaidi ya jiometri peke yake, ili kubandika kwenye mchoro usiofahamika bado kuonekane sahihi:

| Sehemu | Kusudi |
|--------|--------|
| **Vitu** | Umbo kamili lililopangwa la kila kitu kilichochaguliwa |
| **Kipimo cha marejeo** | Kona ya chini kushoto ya mipaka ya pamoja ya uteuzi — ndicho ClipboardPaste hukiunganisha na kishale |
| **Tabaka** | Ni tabaka tu ambayo vitu vilivyonakiliwa vinavirejelea kikweli, kwa jina |
| **Aina za mistari** | Ni aina za mistari tu ambazo vitu vilivyonakiliwa vinavirejelea kikweli, kwa jina |

Ni maingizo ya jedwali *yaliyorejelewa* pekee yanayosafiri na nakala — si majedwali kamili ya tabaka na aina za mistari ya mchoro asilia. Mifumo ya kivuli haibebwi kabisa wala haihitaji: jedwali la mifumo la mchoro ni seti chaguo-msingi iliyojengwa ndani, na faili zozote za `.pat` ulizopakia ziko kwenye hifadhi ya kila mtumiaji ambayo tayari inashirikiwa kati ya vichupo, hivyo kivuli kilichobandikwa hujitafutia mfumo wake.

## Uthibitisho

Ikifanikiwa, terminali huripoti idadi ya vitu vilivyoandikwa:

```
3 entities copied to clipboard
```

Kama kivinjari kikikataa ufikiaji wa ubao wa kunakili, terminali huonyesha **Copy failed: clipboard access denied** na hakuna kinachoandikwa. Hii ni uamuzi wa ruhusa wa kivinjari, si hitilafu ya mchoro — angalia [Ruhusa za ubao wa kunakili](#ruhusa-za-ubao-wa-kunakili) hapa chini.

## Kuchagua wakati amri inaendelea

| Njia | Tabia |
|------|-------|
| **Bofya** | Huweka au huondoa kitu kilicho chini ya kishale kwenye uteuzi |
| **Buruta kulia** (kali) | Huongeza vitu vilivyo ndani ya kisanduku kabisa |
| **Buruta kushoto** (kinachopishana) | Huongeza vitu vinavyopishana na ukingo wa kisanduku |
| **Enter** / **Space** | Huthibitisha uteuzi na kunakili |

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Ctrl+C` / `Cmd+C` | Washa ClipboardCopy |
| `Enter` / `Space` | Nakili uteuzi wa sasa, au toka kama hakuna kilichochaguliwa |
| `Escape` | Ghairi bila kunakili |

## Ruhusa za ubao wa kunakili

Kuandika kwenye ubao wa kunakili wa mfumo kunahitaji ruhusa ya kivinjari. Kiuhalisia, kunakili kunakoanzishwa kwa kubonyeza kitufe hupewa ruhusa bila kuulizwa katika vivinjari vya sasa vya kompyuta, lakini ukurasa uliopoteza umakini, au kivinjari chenye mipangilio mikali ya ubao wa kunakili, kinaweza kukataa. Ukiona ujumbe wa kukataliwa kwa ufikiaji, bofya mara moja kwenye eneo la kuchora kuupa ukurasa umakini kisha jaribu tena.

Kwa kuwa kilichomo ni maandishi ya kawaida ya JSON, chochote kingine unachonakili baadaye hukibadilisha — mstari wa maandishi au kiungo. Nakili tena kabla ya kubandika kama umeutumia ubao wa kunakili kwa jambo lingine katikati.

## Vitu vinavyotumika

ClipboardCopy hufanya kazi na kila aina ya kitu. Vitu hupangwa kwa utaratibu uleule unaotumiwa na usafirishaji asilia wa `.json`, hivyo hakuna kinachopotea njiani.

## Angalia pia

- [ClipboardPaste](../clipboard-paste/) — soma ubao wa kunakili tena na uweke vitu
- [Copy](../copy/) — nakili vitu ndani ya mchoro wa sasa
- [Export Manager](../export-manager/) — hifadhi mchoro mzima kama DXF au JSON
