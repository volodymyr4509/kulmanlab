---
title: Match Properties — Kopioi Ominaisuuksia KulmanLab CAD:issa
description: MatchProperties-komento kopioi värin, tason ja muut jaetut ominaisuudet lähde-entiteetistä yhteen tai useampaan kohde-entiteettiin. Sovittaa ominaisuudet samalla tavalla kuin työpöytä-CAD-työkalut.
keywords: [match properties CAD, kopioi entiteetin ominaisuudet, MATCHPROP, sovita tason väri, siirrä ominaisuudet, kulmanlab match properties, maalaa ominaisuudet, kopioi taso CAD]
group: style
order: 1
---

# Match Properties

Komento `MatchProperties` kopioi **visuaaliset ja tasoon liittyvät ominaisuudet** lähde-entiteetistä yhteen tai useampaan kohde-entiteettiin. Vain ominaisuudet, jotka jaetaan lähde- ja kohde-entiteettityyppien välillä, siirretään — geometriaa ei koskaan muuteta.

## Aktivointi

Napsauta **Match Properties**-painiketta (maalitelakuvake) Style-paneelissa, tai kirjoita `MatchProperties` terminaaliin.

## Työnkulku

**Aktivoi ensin, valitse sitten lähde:**

1. Kirjoita `MatchProperties` tai napsauta työkalurivin painiketta ilman mitään esivalittuna.
2. **Napsauta lähde-entiteettiä** — sitä, jonka ominaisuudet haluat kopioida.
3. **Napsauta jokaista kohde-entiteettiä** soveltaaksesi lähteen ominaisuudet. Voit napsauttaa useita entiteettejä yksi kerrallaan.
4. Soveltaaksesi ryhmään kerralla, **vedä valintalaatikko** kohteiden yli.
5. Paina **Enter** tai **Escape** viimeistelläksesi.

**Valitse lähde ensin, aktivoi sitten:**

1. Napsauta yhtä entiteettiä valitaksesi sen.
2. Aktivoi `MatchProperties`. Valittua entiteettiä käytetään automaattisesti lähteenä.
3. Napsauta kohde-entiteettejä tai vedä valitaksesi, sitten **Enter** tai **Escape** viimeistelläksesi.

## Mitkä ominaisuudet kopioidaan

MatchProperties kopioi ominaisuudet, jotka kuuluvat lähteen ja kohteen väliseen jaettuun perusluokkaan. Vähintään **kaikki entiteettityypit** jakavat nämä ominaisuudet:

| Ominaisuus | Kuvaus |
|----------|-------------|
| **Väri** | Entiteetin väri-indeksi (sisältää "By Layer" / "By Block") |
| **Taso** | Taso, johon entiteetti kuuluu |

Kun lähde ja kohde ovat samaa entiteettityyppiä (esim. molemmat ovat mittoja), myös lisätyyppikohtaiset ominaisuudet kopioidaan — esimerkiksi tekstin korkeus, nuolen koko, apuviiva-asetukset.

Geometriaan (koordinaatit, säde, pituus jne.) ei koskaan vaikuteta.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Vahvista aluevalinta tai viimeistele komento |
| `Escape` | Viimeistele soveltaminen (jos lähde on asetettu) tai peruuta |

## Käyttäytymisen yksityiskohdat

- Lähde-entiteettiä itseään ei koskaan muokata.
- Jokainen napsautus tai vetovalinta soveltaa lähteen ominaisuudet välittömästi — vahvistusvaihetta ei ole.
- Aluevalinta noudattaa standardisääntöjä: vedä **oikealle** tiukkaa valintaa varten (täysin sisällytetty), vedä **vasemmalle** risteysvalintaa varten (mikä tahansa leikkaus).
- Lähde-entiteetin napsauttaminen kohteena ohitetaan.
- Tekstiä sisältäville entiteeteille (**Text**, **Dimensions**, **Multileaders**) kopioidaan vain tekstin korkeus — fontti, lihavointi, kursivointi ja muut tekstityyliasetukset eivät sovi.

## Liittyvät komennot

- [LayerMatch](../layer-match/) — siirrä valitut entiteetit samalle tasolle kuin lähde (vain tasoinominaisuus)
- [LayerMakeCurrent](../layer-make-current/) — aseta nykyinen piirustustaso napsautetusta entiteetistä
