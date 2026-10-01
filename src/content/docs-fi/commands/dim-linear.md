---
title: Dimension Linear -komento — Vaaka- ja Pystysuorat Mitat
description: Dimension Linear -komento mittaa vaaka- tai pystysuoran etäisyyden kahden pisteen välillä. Mittaviiva on aina akseliin kohdistettu — paina H tai V lukitaksesi suunnan, tai anna kohdistimen sijainnin päättää automaattisesti. Täysi DXF-edestakainen matka DIMENSION-entiteetteinä.
keywords: [CAD dimension linear, vaakasuora mitta CAD, pystysuora mitta CAD, dimlinear, H V suuntalukitus, mitan siirtymä, kulmanlab]
group: markup
order: 4
---

# Dimension Linear

Komento `dimlinear` sijoittaa vaaka- tai pystysuoran mitan kahden apuviivan lähtöpisteen välille. Mittaviiva kulkee aina joko täysin vaaka- tai täysin pystysuoraan — sitä ei voi sijoittaa mielivaltaiseen kulmaan. Käytä [Dimension Aligned](../dim-aligned/)-komentoa, kun tarvitset mitan, joka on samansuuntainen diagonaalisen linjan kanssa.

## Lineaarisen mitan anatomia

```
  |←————— 5.00 —————→|
  |                   |
  ●  (apuviiva 1)     ●  (apuviiva 2)
  p1                  p2
```

- **Apuviivat** — putoavat jokaisesta mitatusta pisteestä kohtisuoraan mittaviivaan nähden.
- **Mittaviiva** — vaakasuora (mittaa X-etäisyyden) tai pystysuora (mittaa Y-etäisyyden).
- **Arvo** — projisoitu etäisyys valitun akselin suunnassa, ei todellinen pisteestä pisteeseen -etäisyys.

## Lineaarisen mitan sijoittaminen

1. Kirjoita `dimlinear` terminaaliin tai napsauta **Dimension Linear**-painiketta työkalurivillä.
2. **Napsauta ensimmäisen apuviivan lähtöpistettä** (p1), tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta toisen apuviivan lähtöpistettä** (p2). Koordinaattien syöttö toimii myös täällä.
4. **Siirrä kohdistinta** sijoittaaksesi mittaviivan. Suunta havaitaan automaattisesti kohdistimen sijainnista.
5. **Napsauta** sijoittaaksesi, tai kirjoita siirtymäetäisyys ja paina **Enter** tarkkaa sijoittelua varten.

## Automaattinen suunnan tunnistus

Kun mitään suuntaa ei ole pakotettu, komento lukee kohdistimen sijainnin suhteessa kahteen mitattuun pisteeseen:

| Kohdistimen sijainti | Havaittu suunta | Mitä mitataan |
|-----------------|---------------------|-----------------|
| Pisteiden ylä- tai alapuolella | Vaakasuora | Δ X pisteiden p1 ja p2 välillä |
| Pisteiden vasemmalla tai oikealla puolella | Pystysuora | Δ Y pisteiden p1 ja p2 välillä |

Paina **H** lukitaksesi vaakasuoran tai **V** lukitaksesi pystysuoran milloin tahansa sijoitusvaiheen aikana. Kun se on lukittu, suunta ei muutu kohdistinta liikutettaessa.

## Kirjoitettu siirtymäetäisyys

Kirjoita numero sijoituksen aikana kiinnittääksesi mittaviivan tarkkaan etäisyyteen mitatuista pisteistä:

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero siirtymäetäisyyteen |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` / `Space` | Sijoita kirjoitetulle etäisyydelle |

Kohdistimen puoli (ylä-/alapuoli vaakasuoralle, vasen/oikea pystysuoralle) määrää etumerkin — mittaviiva näkyy puolella, jolla kohdistin parhaillaan on.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö (p1/p2-vaiheet), tai siirtymäetäisyys (sijoitusvaihe) |
| `,` | Lukitse X ja siirry Y:n syöttöön (p1/p2-vaiheet) |
| `H` | Lukitse vaakasuora suunta (vain sijoitusvaihe) |
| `V` | Lukitse pystysuora suunta (vain sijoitusvaihe) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` / `Space` | Vahvista kirjoitettu koordinaatti tai siirtymä |
| `Escape` | Peruuta |

## Dimension Linear vs Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Akseli | Aina H tai V | Samansuuntainen mitatun linjan kanssa |
| Mittaa | Vain X- tai Y-komponentti | Todellinen euklidinen etäisyys |
| H/V-näppäimet | Kyllä — lukitsee suunnan | Ei — seuraa aina p1→p2:ta |
| Paras käyttö | Ortogonaaliset asettelut, pohjapiirrokset | Diagonaaliset ominaisuudet, kulmaleikkaukset |

## Merkinnän muokkaaminen — yksinkertainen tila

**Kaksoisnapsauta** sijoitettua lineaarista mittaa avataksesi tekstieditorin **yksinkertaisessa** tilassa. Editori on esitäytetty nykyisellä renderöidyllä arvolla, jotta voit sijoittaa kohdistimen ja muokata sitä suoraan.

| Ominaisuus | Käyttäytyminen |
|---------|-----------|
| Lihavointi / Kursivointi / Fontti / Korkeus | Koskee **koko** merkintää kerralla |
| Merkkikohtainen muotoilu | Ei tuettu |
| `Enter` | Vahvistaa arvon ja sulkee editorin |
| Monirivinen | Ei tuettu |

Katso [Tekstieditori — yksinkertainen tila](../../interface/text-editor/#simple-mode) täydellistä referenssiä varten.

## Mittojen ketjuttaminen

Lisätäksesi useampia mittoja, jotka jatkuvat viimeisestä apuviivasta, käytä [Dimension Continue](../dim-continue/)-komentoa heti tämän sijoittamisen jälkeen.

## DXF — DIMENSION-entiteetti

Lineaariset mitat tallennetaan `DIMENSION`-entiteetteinä, joilla `rotationDeg` on asetettu arvoon `0` (vaakasuora) tai `90` (pystysuora). Apuviivojen lähtöpisteet, mittaviivan sijainti, tekstin sijainti, mitattu arvo, nuolityyli, tekstin korkeus ja kaikki näyttöliput säilyvät edestakaisessa matkassa ilman häviötä.


## Mittatyyli

Uudet mitat kopioivat nykyisen [mittatyylin](../dimension-style/) nuolineen, apuviivoineen, teksteineen, tarkkuuksineen, tasauksineen, väleineen ja kehyksineen. Arvot kopioidaan luotaessa; myöhemmät tyylimuutokset eivät muuta olemassa olevia mittoja.
