---
title: Amri ya ClipboardPaste — Kubandika vitu kutoka ubao wa kunakili wa mfumo
description: Amri ya ClipboardPaste husoma kutoka ubao wa kunakili wa mfumo vitu vilivyoandikwa awali na ClipboardCopy na kuviweka kwenye kipimo cha kuingiza ulichochagua, huku ikiongeza tabaka na aina za mistari zinazokosekana kwenye mchoro lengwa.
keywords: [kubandika ubao wa kunakili CAD, kubandika vitu kati ya michoro, kubandika vitu vya CAD, Ctrl+V CAD, kubandika kati ya vichupo, kuunganisha tabaka wakati wa kubandika, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Amri ya `BandikaKutokaUbao` husoma vitu ambavyo [ClipboardCopy](../clipboard-copy/) iliandika kwenye **ubao wa kunakili wa mfumo** na kuviweka kwenye mchoro wa sasa mahali unapochagua. Kwa kuwa ubao wa kunakili ni ule halisi wa mfumo, chanzo kinaweza kuwa mchoro mwingine, kichupo kingine cha kivinjari, au kipindi cha mapema siku hiyo.

## Jinsi ya kubandika

1. Bonyeza `Ctrl+V` (`Cmd+V` kwenye macOS), au andika `BandikaKutokaUbao` kwenye terminali.
2. Kidokezo huonyesha **reading clipboard…** wakati kivinjari kinakabidhi maandishi ya ubao wa kunakili.
3. Baada ya kupakiwa, kidokezo hubadilika kuwa **pick insertion point** na muhtasari wa jiometri hufuata kishale chako.
4. **Bofya** kuweka vitu. Vinaongezwa kwenye mchoro na kubaki vimechaguliwa.

Muhtasari huo hushikiliwa na **kipimo cha marejeo** cha nakala — kona ya chini kushoto ya mipaka ya pamoja ya uteuzi wa awali. Kona hiyo iko chini ya kishale chako, hivyo mpangilio wa vitu vilivyonakiliwa kuhusiana na vingine huhifadhiwa sawasawa.

## Kinachotokea wakati wa kubandika

| Hatua | Tabia |
|-------|-------|
| **Vitambulisho vipya** | Kila kitu kilichobandikwa hupewa id mpya, hivyo kubandika mara mbili hutoa seti mbili zisizotegemeana |
| **Kuhamisha** | Vitu husogezwa kwa kiasi cha kishale − kipimo cha marejeo |
| **Kuunganisha tabaka** | Kila tabaka lililorejelewa lakini halipo kwenye mchoro lengwa huongezwa kwa jina |
| **Kuunganisha aina za mistari** | Kila aina ya mstari iliyorejelewa lakini haipo kwenye mchoro lengwa huongezwa kwa jina |
| **Uteuzi** | Uteuzi wa awali husafishwa na vitu vilivyobandikwa huwa uteuzi |

### Kuunganisha tabaka na aina za mistari

Maingizo ya jedwali yanayokosekana huongezwa; **yaliyopo huachwa kama yalivyo**. Kama ubao wa kunakili unabeba tabaka lenye jina `WALLS` la rangi nyekundu na mchoro lengwa tayari una tabaka `WALLS` la rangi ya bluu, ufafanuzi wa mchoro lengwa hushinda na vitu vilivyobandikwa hujiunga nalo — vitakuwa vya bluu. Kubandika hakufafanui upya chochote kwenye mchoro lengwa.

Hili ni muhimu unapoiga kati ya michoro yenye desturi tofauti za tabaka: angalia [Layer Manager](../layer-manager/) baada ya kubandika kati ya michoro kama rangi si zile ulizotarajia.

## Wakati ubao wa kunakili hauna cha kubandika

ClipboardPaste hukubali tu kilichotengenezwa na ClipboardCopy. Kingine chochote kilicho kwenye ubao wa kunakili — maandishi ya kawaida, kiungo, picha, JSON kutoka programu nyingine — hukataliwa na terminali huripoti:

```
Clipboard has no copied entities
```

Kama kivinjari kikikataa kabisa ufikiaji wa ubao wa kunakili, ujumbe huwa **Clipboard access denied**. Vyote viwili humaliza amri bila kubadilisha mchoro.

## Marejeo ya kibodi

| Kitufe | Kitendo |
|--------|---------|
| `Ctrl+V` / `Cmd+V` | Washa ClipboardPaste |
| `Escape` | Ghairi — vitu hutupwa na hakuna kinachoongezwa |

Kughairi wakati wa hatua ya kusoma ni salama: kama ubao wa kunakili ukijibu baada ya wewe kughairi au kuanzisha amri nyingine, matokeo yaliyochelewa hutupwa badala ya kuvuruga kinachoendelea wakati huo.

## Kunakili kati ya vichupo

Mtiririko wa kawaida kati ya michoro:

1. Fungua mchoro asilia, chagua jiometri, bonyeza `Ctrl+C`.
2. Nenda kwenye kichupo kingine — au fungua kichupo cha pili cha programu na upakie faili tofauti.
3. Bonyeza `Ctrl+V` na ubofye kipimo cha kuingiza.

Vichupo vyote viwili vina chanzo kimoja na vinashiriki ubao wa kunakili wa mfumo, hivyo hakuna kinachopakiwa na hakuna seva inayohusika. Kilichomo hubaki kuwa maandishi ya JSON kwenye ubao wako mwenyewe muda wote.

## Vitu vinavyotumika

Kila aina ya kitu ambacho ClipboardCopy inaweza kuandika, ClipboardPaste inaweza kukisoma tena — kwa mpangilio uleule unaotumiwa na muundo asilia wa `.json`.

## Angalia pia

- [ClipboardCopy](../clipboard-copy/) — andika uteuzi kwenye ubao wa kunakili
- [Copy](../copy/) — nakili vitu ndani ya mchoro wa sasa
- [Layer Manager](../layer-manager/) — kagua tabaka ambayo kubandika kumeleta
