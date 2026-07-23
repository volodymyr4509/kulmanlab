---
title: Trim-komento — Leikkaa Viivasegmenttejä Leikkauspisteistä
description: Trim-komento poistaa sen osan viivasta, joka sijaitsee kahden vierekkäisen leikkauspisteen välillä lähinnä kohdistinta. Punainen hover-esikatselu näyttää tarkalleen, mikä segmentti leikataan ennen napsautusta. Trim toimii vain Line-entiteeteillä — ei kaarilla, ympyröillä tai murtoviivoilla.
keywords: [CAD trim-komento, leikkaa viiva CAD, leikkaa viivan risteys, hover trim -esikatselu, vain viivat trim, kulmanlab]
group: edit
order: 8
---

# Trim

Komento `trim` poistaa sen osan [Line](../line/)-entiteetistä, joka sijaitsee kahden vierekkäisen leikkauspisteen välillä, jakaen viivan yhteen tai kahteen lyhyempään segmenttiin. Leikattava segmentti määräytyy kohdistimen sijainnin mukaan — pidä kohdistinta poistettavan osan päällä ja napsauta leikataksesi sen.

Trim toimii vain **Line-entiteeteillä**. Kaarien, ympyröiden, murtoviivojen ja muiden entiteettityyppien kohdalla käytä [Delete](../delete/)-komentoa tai kahvamuokkausta sen sijaan.

## Viivan leikkaaminen

1. Kirjoita `trim` terminaaliin tai napsauta **Trim**-painiketta työkalurivillä.
2. **Pidä kohdistinta poistettavan viivasegmentin päällä** — punainen esikatselu korostaa tarkalleen osan, joka leikataan.
3. **Napsauta** poistaaksesi kyseisen segmentin.

Komento pysyy aktiivisena jokaisen leikkauksen jälkeen, jotta voit jatkaa hoveringia ja napsauttamista leikataksesi lisää segmenttejä. Paina **Escape** poistuaksesi.

```
  Ennen:                        Keskisegmentin leikkaamisen jälkeen:

  ──────●──────●──────        ──────●          ●──────
      risteys  risteys           (vasen osa)  (oikea osa)
                                 (keskisegmentti poistettu)
```

## Miten trim-segmentti määräytyy

Komento projisoi kohdistimen sijainnin viivalle, jonka päällä se on, ja löytää kaikki leikkauspisteet, jotka viivalla on muiden entiteettien kanssa. Nämä leikkausparametrit jakavat viivan segmentteihin. Segmentti, jonka väli sisältää kohdistimen projektion, korostuu ja poistetaan napsautettaessa.

- Jos kohdistin on **ennen ensimmäistä leikkauspistettä**: viivan johtava osa poistetaan.
- Jos kohdistin on **kahden leikkauspisteen välissä**: keskimmäinen osa poistetaan; viiva jakautuu kahteen.
- Jos kohdistin on **viimeisen leikkauspisteen jälkeen**: seuraava osa poistetaan.
- Jos viivalla **ei ole leikkauspisteitä** minkään muun entiteetin kanssa: esikatselua ei näytetä ja napsauttaminen ei tee mitään.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Escape` | Poistu trim-tilasta |

## Tuetut entiteetit

| Entiteetti | Voidaanko leikata? |
|--------|----------------|
| Line | Kyllä |
| Arc, Circle, Ellipse | Ei |
| Polyline / Rectangle | Ei |
| Text, Spline, Dimension, Leader | Ei |

Entiteetit, joita käytetään **leikkausrajoina**, voivat olla mitä tahansa tyyppiä — vain leikattavan viivan on oltava Line-entiteetti.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Mitä se tekee | Poistaa viivan segmentin | Venyttää viivan päätepisteen rajaan |
| Laukaisin | Pidä kohdistinta segmentin päällä leikataksesi | Pidä kohdistinta lähellä päätepistettä jatkaaksesi |
| Tulos | Viiva jakautuu tai lyhenee | Viivan päätepiste siirtyy rajaan |
| Molemmat | Vain viivat | Vain viivat |
