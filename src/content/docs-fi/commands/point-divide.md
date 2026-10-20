---
title: "PointDivide-komento — pisteet yhtä pitkin välein objektia pitkin"
description: "PointDivide-komento jakaa janan, murtoviivan, kaaren, ympyrän, ellipsin tai splinen yhtä pitkiin osiin ja sijoittaa pisteen jokaiseen jakokohtaan esikatsellen ne, kun kirjoitat osien määrää."
keywords: ["CAD jakokomento", "janan jakaminen yhtä suuriin osiin CAD", "pisteet objektia pitkin CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

`JaaPisteillä`-komento sijoittaa [pisteitä](../point/), jotka jakavat objektin yhtä pitkiin osiin. Itse objekti ei muutu: pisteet ovat uusia entiteettejä nykyisellä tasolla ja värillä, käteviä kohdistukseen.

## Objektin jakaminen

1. Kirjoita `JaaPisteillä` terminaaliin tai valitse **Point Divide** Edit-paneelin ruudukko-pudotusvalikosta.
2. **Napsauta objektia** — jana, murtoviiva, kaari, ympyrä, ellipsi tai spline. Muut hylätään, ja voit valita uudelleen.
3. **Kirjoita osien määrä**, kokonaisluku 2–32767. Pisteet näkyvät objektilla esikatseluna kirjoittaessasi.
4. Sijoita ne painamalla **Enter** tai **Space**. Komento päättyy.

## Mihin pisteet tulevat

- Väli mitataan pituutena objektia pitkin, ei kulmana, joten ellipsi tai spline jaetaan yhtä pitkiin paloihin. Murtoviivan kaariosia seurataan niiden kaarta pitkin.
- Avoimessa objektissa — janassa, avoimessa murtoviivassa, kaaressa, osittaisessa ellipsissä tai avoimessa splinessä — pisteet tulevat osien väliin, ei koskaan päihin: 5 osaa antaa 4 pistettä.
- Suljetussa objektissa — ympyrässä, suljetussa murtoviivassa, täydessä ellipsissä tai suljetussa splinessä — pisteet kiertävät koko matkan sen alusta, joka saa myös pisteen: ympyrä alkaa kulmasta 0, suljettu murtoviiva ensimmäisestä kärjestään. 5 osaa antaa 5 pistettä.
- Alueen 2–32767 ulkopuolinen luku hylätään: terminaali kertoo syyn ja tyhjentää sen, jotta voit kirjoittaa uudelleen.

Backspace poistaa viimeisen numeron. Escape aloittaa alusta, joten voit valita toisen objektin. Enter tai Space ennen objektin valintaa lopettaa komennon.

---

*Aiheeseen liittyvää: [Point Interval](../point-interval/) pisteisiin kiinteällä välillä, [Point](../point/) yksittäisiin pisteisiin ja [ArrayPolar](../array-polar/) objektien toistamiseen pisteiden sijaan.*
