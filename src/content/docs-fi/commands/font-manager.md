---
title: Font Manager -komento — Lataa ja Hallitse Omia TTF-fontteja
description: Font Manager -komento avaa valintaikkunan fonttien selaamiseen, esikatseluun ja valintaan, sekä omien .ttf-tiedostojen lataamiseen. Ladatut fontit tallennetaan selaimeen ja upotetaan nimellä DXF-vienteihin.
keywords: [font manager, oma fontti CAD, lataa ttf, oma fonttityyppi CAD, google fonts CAD, tekstifontti CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

Komento `FontManager` avaa valintaikkunan fonttien selaamiseen ja valintaan, sekä omien `.ttf`-tiedostojesi lataamiseen käytettäväksi [Text](../text/)- ja [Multileader](../leader/)-entiteeteissä.

## Font Managerin avaaminen

- Kirjoita `FontManager` terminaaliin, **tai**
- Napsauta **Font Manager**-painiketta [tekstieditorin](../../interface/text-editor/) työkalurivillä.

## Fonttiryhmät

| Ryhmä | Sisältö |
|-------|----------|
| **Default** | Sisäänrakennettu groteski-fontti — aina käytettävissä |
| **User** | Omat lataamasi `.ttf`-fontit (näkyy vasta kun olet lisännyt yhden) |
| **Free** | 15 mukana tulevaa Google Fontsia (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Yleiset käyttöjärjestelmän fontit (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Napsauta mitä tahansa fonttia listassa esikatsellaksesi sitä oikealla — nimi, aakkosnäyte, pangrammi ja numerot.

## Oman fontin lataaminen

1. Napsauta **Add Font** valintaikkunan alatunnisteessa (tai kirjoita `Font+` terminaaliin avataksesi tiedostovalitsimen suoraan).
2. Valitse `.ttf`-tiedosto. Vain TrueType-fontit tuetaan — `.otf` ja `.woff`/`.woff2` eivät tuettu.
3. Tiedostonimestä (ilman tiedostopäätettä) tulee fontin nimi **User**-ryhmässä. Esimerkiksi `MyFont.ttf`:n lataaminen lisää fontin nimeltä `MyFont`.

Ladatut fontit tallennetaan pysyvästi selaimeen (IndexedDB) ja latautuvat uudelleen automaattisesti seuraavan kerran kun avaat KulmanLab CAD:in.

## Oman fontin poistaminen

Pidä kohdistinta fontin päällä **User**-ryhmässä ja napsauta **×**-painiketta sen vieressä. Sisäänrakennettuja fontteja (Default, Free, System) ei voi poistaa.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `↑` / `↓` | Siirrä valintaa ylös tai alas fonttilistassa |
| `Escape` | Sulje Font Manager |

## DXF-yhteensopivuus

Fontin nimi upotetaan vietyihin **MTEXT**-entiteetteihin sisäänrakennettuna muotoilukoodina, joten KulmanLab CAD:in kautta edestakaisin kulkeva DXF säilyttää fonttimäärityksensä. Omia fontti*tiedostoja* ei upoteta DXF:ään — vain fontin *nimi* upotetaan. Jos tuot uudelleen piirustuksen, joka viittaa omaan fonttiin, jota et ole ladannut tähän laitteeseen, teksti renderöityy oletusfontilla, kunnes lataat samannimisen fontin.

## Liittyvät komennot

- [Text](../text/) — sijoittaa tekstimerkinnät, joihin fonttivalinnat koskevat
- [Match Properties](../match-properties/) — kopioi tekstin korkeuden, muttei fonttia, entiteettien välillä
