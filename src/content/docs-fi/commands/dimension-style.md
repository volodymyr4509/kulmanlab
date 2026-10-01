---
title: "MittaTyyli-komento — nimettyjen mittatyylien luonti ja hallinta"
description: "Luo CAD-mittatyylejä nuolille, apuviivoille, keskiömerkeille, tekstille, tarkkuudelle, tasaukselle ja DXF DIMSTYLElle."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# MittaTyyli

Komento avaa valintaikkunan nimettyjen mittatyylien luontiin, muokkaukseen, esikatseluun ja valintaan. Uudet lineaariset, kohdistetut, säde-, halkaisija- ja kulmamitat kopioivat nykyisen tyylin luotaessa; olemassa olevat mitat eivät pysy linkitettyinä.

## Valintaikkunan avaaminen

Kirjoita lokalisoitu komento terminaaliin tai napsauta **Mittatyyli**-painiketta **Merkinnät**-paneelissa. Vasemmalla näkyvät tyylit; valintamerkki osoittaa nykyisen tyylin ja kynä nimeää sen uudelleen.

## Viivat ja nuolet

**Nuoli 1 / Nuoli 2 · Nuolen koko · Apuviivojen etäisyys · Apuviivojen jatke · Keskipistemerkki · Keskipistemerkin koko**

Aseta kaksi nuolenkärkeä erikseen, nuolen koko, apuviivojen etäisyys ja jatke sekä keskiömerkin tyyppi ja koko (`Ei mitään`, `Merkki` tai `Viivat`).

## Teksti

**Tekstityyli · Fontti · Tekstin korkeus · Tekstin kehys · Tekstin väli · Tekstin kiinnitys · Teksti tasattu · Tarkkuus · Kulman tarkkuus**

Tekstiosio hallitsee tekstityylistä pikatäyttöä, fonttia, korkeutta, lihavointia, kursivointia, kehystä, väliä, yhtä yhdeksästä kiinnityskohdasta, mittaviivan mukaista tasausta sekä lineaarista ja kulmatarkkuutta. Tekstityyli kopioi arvot kerran eikä ole elävä linkki.

Esikatselu käyttää samoja renderöijiä kuin piirtoalue. Vaihda lineaarisen, säde-, halkaisija- ja kulmanäytteen välillä tarkistaaksesi nuolet, keskiön, tekstin sijainnin, tarkkuuden ja kehykset.

## Tyylien luonti ja hallinta

**Uusi** monistaa valitun tyylin. `Standard`-tyyliä ei voi nimetä uudelleen tai poistaa, eikä nykyistä tyyliä voi poistaa. Nimien on oltava yksilöllisiä, ei tyhjiä ja kelvollisia DXF:lle. Tuodut annotatiiviset tyylit piilotetaan mutta säilytetään.

## Nykyisen tyylin asettaminen

**Aseta nykyiseksi** tekee valitusta tyylistä uusien mittojen mallin; Merkinnät-paneelin luettelo tarjoaa saman valinnan. Arvot kopioidaan luonnin yhteydessä. Dimension Continue perii koko ulkoasun perusmitalta.

## Tallentaminen tai hylkääminen

**OK** ottaa nimeämiset, lisäykset, poistot, ominaisuudet ja nykyisen tyylin käyttöön yhdessä. **Sulje**, taustan napsautus tai `Escape` hylkää muutokset.

## DXF-yhteensopivuus

KulmanLab tuo ja vie nimetyt `DIMSTYLE`-tietueet erillisine nuolineen, apuviivoineen, teksteineen, tarkkuuksineen, keskiömerkkeineen, kehyksineen, tekstityyliviitteineen ja annotatiivisine lippuineen. Tuonnissa oliokohtaiset `DSTYLE`-ohitukset ovat etusijalla.

Viennissä viitattu `STYLE` käyttää muuttuvaa korkeutta (`40 = 0`) ja tallentaa viimeisen korkeuden ryhmään `42`. Kiinteä tekstityylin korkeus ei näin ohita mittatyylin omaa tekstikorkeutta.

## Liittyvät komennot

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
