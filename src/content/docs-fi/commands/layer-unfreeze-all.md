---
title: LayerUnfreezeAll — Poista Tasojen Jäädytys KulmanLab CAD:issa
description: LayerUnfreezeAll-komento poistaa jäädytyslipun jokaiselta piirustuksen tasolta yhdessä vaiheessa.
keywords: [poista tason jäädytys, poista kaikkien tasojen jäädytys CAD, kulmanlab tasojen hallinta]
group: layer
order: 4
---

# LayerUnfreezeAll

Komento `LayerUnfreezeAll` poistaa jäädytyslipun **jokaiselta tasolta** piirustuksessa välittömästi. Valintaa tai vahvistusta ei tarvita — se ajetaan ja päättyy yhdessä vaiheessa.

## Käyttö

Kirjoita `LayerUnfreezeAll` terminaaliin tai napsauta **Unfreeze All**-painiketta työkalurivillä (aurinkokuvake). Kaikki jäädytetyt tasot muuttuvat näkyviksi välittömästi.

## Milloin käyttää

Käytetään tyypillisesti [LayerIsolate](../layer-isolate/)-komennon jälkeen palauttamaan kaikki tasot normaaliin näkyvään tilaan.

## Käyttäytymisen yksityiskohdat

- Koskee kaikkia tasoja niiden nykyisestä tilasta riippumatta.
- Ei vaikuta lukitus- tai tulostuslippuihin — vain jäädytyslippu muuttuu.
- Komento päättyy välittömästi ilman kehotteita.
