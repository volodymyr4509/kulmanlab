---
title: FontAdd — Lataa oma TTF-fontti suoraan terminaalista
description: FontAdd-komento avaa järjestelmän tiedostovalitsimen .ttf-fontin lataamiseksi avaamatta ensin Font Manager -valintaikkunaa. Se on sama lataus, jonka Font Managerin "Add Font" -painike käynnistää, täällä omana terminaalikomentonaan.
keywords: [font add komento, fontadd komento, lataa ttf terminaali, oma fontti CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Komento `LisääFontti` avaa järjestelmän tiedostovalitsimen oman `.ttf`-fontin lataamiseksi avaamatta ensin [Font Manager](../font-manager/) -valintaikkunaa. Se on sama lataus, jonka Font Managerin **Add Font** -painike käynnistää — FontAdd on vain suora reitti sinne terminaalista.

## Fontin lataaminen

1. Kirjoita `LisääFontti` terminaaliin tai napsauta **Add Font** [Font Manager](../font-manager/) -valintaikkunan alatunnisteessa.
2. Valitse `.ttf`-tiedosto järjestelmän valitsimesta. Vain TrueType-fontit tuetaan — `.otf` ja `.woff`/`.woff2` eivät ole tuettuja.

Komento päättyy heti kun tiedostovalitsin avautuu — sen jälkeen ei tarvita napsautusta eikä terminaalisyötettä. Fontti rekisteröityy ja ilmestyy **User**-ryhmään heti kun tiedosto on valittu.

## Mitä latauksessa tapahtuu

- Tiedostonimestä (ilman tiedostopäätettä) tulee fontin nimi. `MyFont.ttf`:n lataaminen lisää fontin nimeltä `MyFont`.
- Sellaisen tiedoston lataaminen, jonka nimi vastaa olemassa olevaa omaa fonttia, **korvaa** sen.
- Fontti tallennetaan pysyvästi selaimeen (IndexedDB) ja latautuu automaattisesti uudelleen seuraavan kerran, kun avaat KulmanLab CAD:in — se ei ole sidottu nykyiseen piirustukseen.

## Näppäinreferenssi

FontAdd-komennolla ei ole omaa näppäimistövuorovaikutusta — koko komento koostuu selaimen natiivista tiedostovalitsimesta. Kyseisen valintaikkunan peruuttaminen (tai tiedoston valitsematta jättäminen) jättää fonttilistan ennalleen.

## Liittyvät komennot

| Komento | Mitä se tekee |
|---------|-------------|
| [Font Manager](../font-manager/) | Selaa, esikatsele, valitse ja poista fontteja, mukaan lukien omat lataamasi |
| [Text](../text/) | Sijoittaa tekstimerkinnät, joihin fonttivalinnat koskevat |
