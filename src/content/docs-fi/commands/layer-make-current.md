---
title: LayerMakeCurrent — Aseta Entiteetin Taso Nykyiseksi
description: LayerMakeCurrent-komento asettaa nykyisen piirustustason vastaamaan napsautetun entiteetin tasoa.
keywords: [taso nykyiseksi, aseta nykyinen taso CAD, kulmanlab tasojen hallinta]
group: layer
order: 1
---

# LayerMakeCurrent

Komento `LayerMakeCurrent` asettaa **nykyisen piirustustason** vastaamaan tasoa, johon napsautettu entiteetti kuuluu. Uudet entiteetit piirretään sitten automaattisesti kyseiselle tasolle.

## Käyttö

1. Kirjoita `LayerMakeCurrent` terminaaliin tai napsauta **Make Current**-painiketta työkalurivillä (pipettikuvake).
2. **Napsauta mitä tahansa entiteettiä** piirtoalueella.
3. Nykyinen taso päivittyy vastaamaan kyseisen entiteetin tasoa. Komento päättyy välittömästi.

## Käyttäytymisen yksityiskohdat

- Jos napsautat tyhjää piirtoaluetta (mitään entiteettiä ei osu), terminaali näyttää `no object found` ja komento pysyy aktiivisena, jotta voit yrittää uudelleen.
- Vain nykyisen tason asetus muuttuu — mitään entiteettejä ei muokata.
- Päivitetty taso näkyy tasovalitsimessa työkalurivillä.
