---
title: "PointInterval-komento — pisteet kiinteällä välillä objektia pitkin"
description: "PointInterval-komento sijoittaa pisteitä kirjoittamasi välin päähän toisistaan janaa, murtoviivaa, kaarta, ympyrää, ellipsiä tai splineä pitkin alkaen siitä päästä, jonka läheltä napsautat, ja esikatselee ne pituutta kirjoittaessasi."
keywords: ["pisteet välein CAD", "pisteet kiinteällä etäisyydellä janalla CAD", "CAD mittaus objektia pitkin", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

`PisteetVälein`-komento sijoittaa [pisteitä](../point/) kiinteällä välillä objektia pitkin, kuten paalutuksia reitin varrelle merkitään. Itse objekti ei muutu: pisteet ovat uusia entiteettejä nykyisellä tasolla ja värillä, käteviä kohdistukseen.

## Pisteet välein

1. Kirjoita `PisteetVälein` terminaaliin tai valitse **Point Interval** Edit-paneelin ruudukko-pudotusvalikosta.
2. **Napsauta objektia sen pään läheltä, josta aloitetaan** — jana, murtoviiva, kaari, ympyrä, ellipsi tai spline. Muut hylätään, ja voit valita uudelleen.
3. **Kirjoita välin pituus.** Pisteet näkyvät objektilla esikatseluna kirjoittaessasi.
4. Sijoita ne painamalla **Enter** tai **Space**. Komento päättyy.

## Mihin pisteet tulevat

- Ensimmäinen piste tulee yhden välin päähän alusta ja loput seuraavat yhden välin päässä toisistaan, objektia pitkin mitattuna kaaret mukaan lukien. Itse alkuun ei tule pistettä.
- Avoimessa objektissa — janassa, avoimessa murtoviivassa, kaaressa, osittaisessa ellipsissä tai avoimessa splinessä — mittaus alkaa siitä päästä, jonka läheltä napsautit. Kaukaiseen päähän jäävä loppu jää merkitsemättä: kaukainen pää saa pisteen vain, kun väli menee tasan.
- Suljetussa objektissa — ympyrässä, suljetussa murtoviivassa, täydessä ellipsissä tai suljetussa splinessä — mittaus alkaa objektin omasta alusta, napsautitpa mihin tahansa: ympyrä kulmasta 0 vastapäivään, suljettu murtoviiva ensimmäisestä kärjestään. Pisteet loppuvat ennen alkua.
- Pituus 0 tai vähemmän, objektia pidempi tai yli 32767 pistettä antava hylätään: terminaali kertoo syyn ja tyhjentää sen, jotta voit kirjoittaa uudelleen.

Backspace poistaa viimeisen merkin. Escape aloittaa alusta, joten voit valita toisen objektin. Enter tai Space ennen objektin valintaa lopettaa komennon.

---

*Aiheeseen liittyvää: [Point Divide](../point-divide/) objektin jakamiseen tiettyyn määrään yhtä pitkiä osia ja [Point](../point/) yksittäisiin pisteisiin.*
