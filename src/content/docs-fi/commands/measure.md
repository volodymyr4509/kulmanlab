---
title: "Measure-komento — lue etäisyydet, pituudet, kulmat ja alat kursorin ympäriltä"
description: "Measure-komento lukee piirustuksen kursorin ympäriltä sitä liikuttaessasi — etäisyyden lähimpään geometriaan, kohtaamansa pituuden tai säteen, kulman jossa viivat kohtaavat — ja antaa napsautuksella suljetun alueen pinta-alan ja piirin. Mikään piirustuksessa ei muutu."
keywords: ["CAD mittauskomento", "pinta-alan ja piirin mittaus CAD", "reaaliaikainen etäisyysmittaus CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

`measure`-komento lukee piirustuksen kursorin ympäriltä sitä liikuttaessasi ilman pisteiden valintaa: kuinka kaukana lähin geometria on, kuinka pitkä tai pyöreä se on ja millä kulmalla viivat kohtaavat. Napsautus suljetun alueen sisällä antaa sen pinta-alan ja piirin. Mikään piirustuksessa ei muutu.

## Mittaaminen

1. Kirjoita `measure` terminaaliin tai napsauta **Measure**, Measure-paneelin ensimmäistä painiketta.
2. **Liikuta kursoria.** Siitä komento katsoo oikealle, ylös, vasemmalle ja alas lähintä geometriaa ja näyttää löytämänsä.
3. **Napsauta suljetun alueen sisällä** täyttääksesi sen ja lukeaksesi sen pinta-alan ja piirin — katso alla.
4. Lopeta painamalla **Enter**, **Space** tai **Escape**.

## Mitä se näyttää

- **Etäisyys poikki** — siitä, mitä kursori kohtaa toisella puolella, siihen, mitä se kohtaa toisella, vaaka- ja pystysuunnassa. Jos vain toisella puolella on jotain, etäisyys alkaa kursorista. Jokaisessa päässä, joka kohtaa jotain, on pieni täytetty piste; kursorin päässä ei ole.
- **Pituus tai säde** — jokainen kohde, jonka komento tavoittaa, korostetaan pituudellaan tai säteellään, jos se on osa ympyrää.
- **Kulma** — missä kaksi tavoitettua suoraa kohtaa, niiden välinen kulma kirjoitetaan; suora kulma merkitään pienellä neliöllä.

Pituudet ja kulmat kirjoitetaan niin kuin nykyinen [DimensionStyle](../dimension-style/) ne kirjoittaa, sen yksikkömuodossa ja tarkkuudella.

## Pinta-ala ja piiri

Napsautus suljetun alueen sisällä täyttää sen ja tuo pinta-alan ja piirin kehotteeseen ja historiaan. Alue löydetään kuten [Hatch](../hatch/) sen löytää: erilliset päittäin kohtaavat viivat sulkevat alueen kuten murtoviiva, ja kaikki suljettu sen sisällä jätetään saarena pois — sen reuna lasketaan piiriin ja sen ala vähennetään.

Pinta-ala on tavallinen luku neliöpiirustusyksiköissä — jalat ja tuumat eivät osaa kirjoittaa alaa — kun taas piiri seuraa yksikkömuotoa. Napsauta toisen alueen sisällä mitataksesi sen. Jos pistettä ei ympäröi mikään suljettu, terminaali kertoo syyn samoilla viesteillä kuin Hatch: no boundary found, point is not enclosed tai boundary is open.

## Hyvä tietää

- Se mittaa janoja, kaaria, ympyröitä, ellipsejä, murtoviivoja ja splinejä vasten; pituudet ja alat ovat tarkkoja, myös ellipseillä ja spline-käyrillä.
- Jäädytettyjen tasojen kohteet ohitetaan; lukittujen tasojen kohteet mitataan.
- Suuressa piirustuksessa se katsoo vain kursorin lähellä olevaa, joten se pysyy reagoivana.

---

*Aiheeseen liittyvää: [Distance](../distance/), [Angle](../angle/) ja [Area](../area/) valitsemiesi pisteiden välisiin mittauksiin sekä [Hatch](../hatch/) siihen, miten suljetut alueet löydetään.*
