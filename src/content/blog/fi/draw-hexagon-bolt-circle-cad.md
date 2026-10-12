---
title: "Kuusikulmion tai reikäympyrän piirtäminen CADissa (Polygon ja polaarinen ruudukko)"
description: "Piirrä säännöllinen monikulmio keskipisteestä ja säteestä tai yhdestä sivusta ja toista sitten reiät jakoympyrälle polaarisella ruudukolla — ilmaiseksi selaimessa, tarkasti kirjoitetuin arvoin."
keywords: [kuusikulmion piirtäminen CADissa, säännöllinen monikulmio CAD, polaarinen ruudukko CAD, reikäympyrä piirustus, reikäkuvio CAD, ympyräkuvio CAD, kuusiomutterin piirtäminen, kahdeksankulmion piirtäminen CAD, jakoympyrän halkaisija PCD, ilmainen monikulmiotyökalu CAD]
date: 2026-10-11
author: KulmanLab
tag: Opas
---

Piirtääksesi säännöllisen monikulmion CADissa anna sivujen lukumäärä, valitse keskipiste ja sitten säde — tai valitse yksi sivu, jolloin loput määräytyvät itsestään. Piirtääksesi reikäympyrän piirrä yksi reikä ja toista se keskipisteen ympäri polaarisella ruudukolla. Tämä opas tekee molemmat tarkoilla luvuilla selaimessa osoitteessa [app.kulmanlab.com](https://app.kulmanlab.com) — ilmaiseksi, ilman asennusta, eikä tiedosto koskaan poistu koneeltasi.

Rakennamme [KulmanLabia](https://kulmanlab.com), joten alla olevat vaiheet käyttävät sen komentoja. Periaatteet — avainväli vastaan kulmamitta, jakoympyrän halkaisija, kääntyvätkö kopiot kiertäessään — ovat samat missä tahansa CAD-ohjelmassa.

## Säännöllisen monikulmion piirtäminen

Säännöllisessä monikulmiossa kaikki sivut ja kulmat ovat yhtä suuria: kuusikulmio mutterille, kahdeksankulmio kyltille, viisikulmio koristeelliselle leikkaukselle. KulmanLabissa se on komento **Polygon**.

1. Kirjoita `polygon` terminaaliin tai käytä Shapes-paneelin Polygon-painiketta.
2. Anna **sivujen lukumäärä** — mikä tahansa kokonaisluku 3–1024 — ja paina **Enter**. Kehote on esitäytetty viimeksi käytetyllä määrällä.
3. **Napsauta keskipistettä** tai kirjoita `X,Y` tarkkaa pistettä varten.
4. **Napsauta sädettä** tai kirjoita se ja paina **Enter**.

Tuloksena on yksi suljettu murtoviiva, joten kaikki, mitä murtoviivalle voi tehdä — siirtäminen, kääntäminen, siirtymä, skaalaus — toimii.

### Avainväli vai kulmamitta?

Tähän useimmat kompastuvat. ”Säde” voi tarkoittaa kahta eri etäisyyttä, ja kuusikulmio määritellään jommallakummalla sen mukaan, mitä piirrät:

| | Mitataan | Tyypillinen käyttö |
|---|---|---|
| **Inside päällä** (oletus) | Kulmiin | Muoto, jonka on mahduttava annetun ympyrän sisään |
| **Inside pois** | Kunkin sivun keskikohtaan | Muoto, jolla on annettu avainväli — mutterit, ruuvinkannat, avainkoot |

Vaihda painamalla `I` sädekehotteessa. Kuusiomutteri myydään avainvälin mukaan, joten käytä **Inside pois** ja kirjoita sen *puolikas*. M8-mutterille, jonka avainväli on 13 mm:

1. `polygon`, sitten `6` sivuiksi, sitten napsauta tai kirjoita keskipiste.
2. Paina `I` kytkeäksesi Insiden pois.
3. Kirjoita `6.5` ja paina **Enter**.

Sivut ovat täsmälleen 13 mm päässä toisistaan; kulmat ulottuvat 7,51 mm päähän keskipisteestä, noin 15 mm kulmamitta. Jos kirjoitat säteen napsauttamisen sijaan, monikulmio asettuu alin sivu vaakasuorassa, litteänä alas. Jos napsautat, se ottaa suuntansa napsautuskohdasta.

### Yhdestä sivusta

Joskus tiedät sivun pituuden, et sädettä — esimerkiksi kahdeksankulmaisen pöytälevyn, jonka sivut ovat 20 mm. Paina `E` ensimmäisen pisteen kehotteessa siirtyäksesi **Edge**-tilaan ja valitse yhden sivun kaksi päätä. Loput kärjet rakennetaan vastapäivään, kyseisen sivun vasemmalle puolelle. Kirjoittamalla `0,0` ja sitten `20,0` saat 20 mm:n sivun X-akselin suuntaisesti monikulmion ollessa sen yläpuolella.

## Reikäympyrän piirtäminen

Reikäympyrä — piirustuksissa ”PCD” — on keskipisteen ympärille tasavälein sijoitettujen reikien rengas. Piirrät yhden reiän ja toistat sen. KulmanLabissa se on **ArrayPolar**.

Otetaan kuusi 6,6 mm:n reikää 50 mm:n jakoympyrän halkaisijalle, keskitettynä origoon:

1. **Piirrä ensimmäinen reikä.** Suorita `circle`, kirjoita keskipiste `25` `,` `0` — puolet PCD:stä X-akselin suunnassa —, paina **Enter**, kirjoita sitten säde `3.3` ja paina **Enter**.
2. **Valitse se** napsauttamalla ympyrää.
3. **Suorita polaarinen ruudukko.** Kirjoita `arraypolar` tai käytä Edit-paneelin ArrayPolar-painiketta.
4. **Valitse kuvion keskipiste** — kirjoita `0,0`.
5. Terminaali näyttää ruudukon sellaisena kuin se on — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — ja viisi kopiota esikatsellaan livenä. Hyväksy painamalla **Enter**.

Siinä koko reikäympyrä. Eri lukumäärää varten paina ennen vahvistamista `I` ja kirjoita kohteiden määrä — alkuperäinen lasketaan yhdeksi ja niiden välinen kulma lasketaan puolestasi. Tai paina `A` ja kirjoita sen sijaan väli asteina; täyttökulma muotoillaan uudelleen vastaamaan.

Muutama tärkeä seikka:

- **Fill** on kulma ensimmäisestä kohteesta viimeiseen. Oletus 360° jakaa kohteet koko ympyrälle; pienempi luku jakaa ne kaarelle — esimerkiksi reikärivi neljänneskierrokselle. Negatiivinen kulma kulkee myötäpäivään.
- **Rotate** määrää, kääntyykö kukin kopio kiertäessään. Pyöreille rei'ille sillä ei ole väliä. Urille, hampaille ja kulmakiinnikkeille on: päällä — jokainen kopio osoittaa keskipisteeseen kuten alkuperäinen; pois — jokainen kopio säilyttää alkuperäisen suunnan ja vain siirretään paikalleen. Vaihda painamalla `R` ennen vahvistamista.
- Ruudukko tekee **kopioita** — alkuperäinen pysyy paikallaan, ja jokainen kohde on tavallinen entiteetti, jota voit muokata jälkeenpäin.

## Kaikki yhdessä: laippa

Piirrä kuusikulmio ääriviivaksi, ympyrä keskelle porausta varten ja reikäympyrä kiinnitysrei'ille. Kolme komentoa, jokainen mitta kirjoitettu tarkasti, eikä mitään mitattavaa näytöltä.

Jos kappale on menossa laserleikkurille, poista jakoympyrän löytämiseksi piirtämäsi apuympyrä — se leikattaisiin kuten kaikki muukin — ja tarkista tiedosto oppaamme avulla: [DXF:n valmistelu laserleikkausta varten](/fi/blog/prepare-dxf-for-laser-cutting/). Monikulmio on rakenteensa puolesta suljettu polku, mikä on yleisin syy siihen, että leikkauspalvelut hylkäävät tiedostoja.

## Mitä tämä ei tee

- **Vain säännölliset monikulmiot.** Kaikki sivut ovat yhtä pitkiä. Epäsäännöllinen ääriviiva — muoto, jossa osa sivuista on pidempiä — on [murtoviiva](/fi/docs/commands/polyline/), jonka piirrät piste pisteeltä.
- **Vain 2D.** Se piirtää litteitä ääriviivoja. Mallinnettua mutteria tai kierteistä pulttia et saa.
- **Vain työpöytäselaimet** — Chrome, Firefox, Safari ja Edge. Mobiiliversiota ei ole.

---

*Aiheeseen liittyvää: [Polygon](/fi/docs/commands/polygon/) ja [ArrayPolar](/fi/docs/commands/array-polar/) kaikkia valintoja ja näppäimiä varten, [Circle](/fi/docs/commands/circle/) tarkkojen säteiden kirjoittamiseen ja [ArrayGrid](/fi/docs/commands/array-grid/) kohteiden toistamiseen riveinä ja sarakkeina keskipisteen ympäri toistamisen sijaan.*
