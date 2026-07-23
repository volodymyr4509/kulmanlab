---
title: Dimension Aligned — Todelliset Etäisyysmitat Kulmassa
description: Dimension Aligned -komento mittaa todellisen suoraviivaisen etäisyyden kahden pisteen välillä. Mittaviiva kulkee samansuuntaisesti p1→p2-linjan kanssa missä tahansa kulmassa — toisin kuin Dimension Linear, joka on rajoitettu vaaka- tai pystysuoraan. Täysi DXF-edestakainen matka DIMENSION-entiteetteinä.
keywords: [CAD dimension aligned, dimaligned, diagonaalinen mitta CAD, todellinen etäisyysmitta, kulmamitta CAD, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

Komento `dimaligned` sijoittaa mitan, joka mittaa **todellisen suoraviivaisen etäisyyden** kahden pisteen välillä. Mittaviiva kulkee samansuuntaisesti kahta pistettä yhdistävän linjan kanssa, joten se voi olla missä tahansa kulmassa. Tämä on keskeinen ero [Dimension Linear](../dim-linear/)-komentoon, joka on rajoitettu vaaka- tai pystysuoraan.

## Kohdistetun mitan anatomia

```
     ●  p2
    /|
   / |  (apuviiva 2, kohtisuorassa mittaviivaan nähden)
  /  |
 /←5.00→/
/  /
●  /  (apuviiva 1, kohtisuorassa mittaviivaan nähden)
p1
```

- **Apuviivat** — kohtisuorassa mittaviivaan nähden, piirretty jokaisesta mitatusta pisteestä.
- **Mittaviiva** — samansuuntainen p1→p2:n kanssa, siirretty toiselle puolelle kohdistimen sijainnin mukaan.
- **Arvo** — todellinen euklidinen etäisyys `|p1 – p2|`.

## Kohdistetun mitan sijoittaminen

1. Kirjoita `dimaligned` terminaaliin tai napsauta **Dimension Aligned**-painiketta työkalurivillä.
2. **Napsauta ensimmäisen apuviivan lähtöpistettä** (p1), tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta toisen apuviivan lähtöpistettä** (p2). Koordinaattien syöttö toimii myös täällä.
4. **Siirrä kohdistinta** toiselle puolelle asettaaksesi mittaviivan kohtisuoran siirtymän.
5. **Napsauta** sijoittaaksesi, tai kirjoita siirtymäetäisyys ja paina **Enter** tarkkaa sijoittelua varten.

## Kirjoitettu siirtymäetäisyys

Kirjoita numero sijoituksen aikana kiinnittääksesi mittaviivan tarkkaan kohtisuoraan etäisyyteen p1→p2-linjasta:

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero siirtymään |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` / `Space` | Sijoita kirjoitetulle siirtymälle |

Kohdistimen puoli määrää, kummalla puolella mittaviiva näkyy.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö (p1/p2-vaiheet), tai siirtymäetäisyys (sijoitusvaihe) |
| `,` | Lukitse X ja siirry Y:n syöttöön (p1/p2-vaiheet) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` / `Space` | Vahvista kirjoitettu koordinaatti tai siirtymä |
| `Escape` | Peruuta |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Mittaviivan kulma | Samansuuntainen p1→p2:n kanssa — mikä tahansa kulma | Aina vaaka- tai pystysuora |
| Mittaa | Todellinen euklidinen etäisyys | Vain X- tai Y-komponentti |
| H/V-suuntalukitus | Ei | Kyllä — `H`- ja `V`-näppäimet |
| Paras käyttö | Diagonaaliset ominaisuudet, kulmaleikkaukset | Ortogonaaliset asettelut, ruudukkoon kohdistetut osat |

## Merkinnän muokkaaminen — yksinkertainen tila

**Kaksoisnapsauta** sijoitettua kohdistettua mittaa avataksesi tekstieditorin **yksinkertaisessa** tilassa. Editori on esitäytetty nykyisellä renderöidyllä arvolla, jotta voit sijoittaa kohdistimen ja muokata sitä suoraan.

| Ominaisuus | Käyttäytyminen |
|---------|-----------|
| Lihavointi / Kursivointi / Fontti / Korkeus | Koskee **koko** merkintää kerralla |
| Merkkikohtainen muotoilu | Ei tuettu |
| `Enter` | Vahvistaa arvon ja sulkee editorin |
| Monirivinen | Ei tuettu |

Katso [Tekstieditori — yksinkertainen tila](../../interface/text-editor/#simple-mode) täydellistä referenssiä varten.

## Mittojen ketjuttaminen

Lisätäksesi useampia mittoja, jotka jatkuvat tämän mitan toisesta apuviivasta, käytä [Dimension Continue](../dim-continue/)-komentoa — se lukittuu samaan mittauskulmaan kuin tämä kohdistettu mitta.

## DXF — DIMENSION-entiteetti (kohdistettu tyyppi)

Kohdistetut mitat tallennetaan `DIMENSION`-entiteetteinä, joilla on `dimType = 1` (aligned). Apuviivojen lähtöpisteet, mittaviivan sijainti, tekstin sijainti, mitattu arvo, kierto, nuolityyli ja kaikki näyttöliput säilyvät edestakaisessa matkassa ilman häviötä.
