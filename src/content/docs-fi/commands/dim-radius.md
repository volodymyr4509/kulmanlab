---
title: Dimension Radius -komento — Merkitse Kaarien ja Ympyröiden Säteet
description: Dimension Radius -komento sijoittaa R-etuliitteisen säteen mitan kaarelle tai ympyrälle. Napsauta entiteettiä, siirrä sitten kohdistinta suunnataksesi mittaviivan keskipisteestä kehälle. Täysi DXF-edestakainen matka DIMENSION-säde-entiteetteinä.
keywords: [CAD säteen mitta, dimradius, merkitse ympyrän säde, kaaren säteen mitta, R-etuliite mitta, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

Komento `dimradius` sijoittaa säteen mitan kaarelle tai ympyrälle. Mittaviiva kulkee keskipisteestä kehän pisteeseen kohdistimen suunnassa, merkittynä `R <arvo>`. Mitoittaaksesi täyden halkaisijan sen sijaan, käytä [Dimension Diameter](../dim-diameter/)-komentoa.

## Säteen mitan anatomia

```
  ● (keskipiste)
   \
    \  R 5.00
     \
      ●────── teksti (kohdistimen puoli)
   (kaaren piste)
```

- **Mittaviiva** — keskipisteestä kaaren pisteen kautta kohdistimeen, nuolenkärjellä kaarella.
- **Merkintä** — `R` seurattuna säteen arvolla.

## Säteen mitan sijoittaminen

1. Kirjoita `dimradius` terminaaliin tai napsauta **Dimension Radius**-painiketta työkalurivillä.
2. **Napsauta kaarta tai ympyrää** valitaksesi sen.
3. **Siirrä kohdistinta** suunnataksesi mittaviivan — kaaren piste seuraa kohdistimen suuntaa keskipisteestä.
4. **Napsauta** sijoittaaksesi mitan.

Vain **Arc**- ja **Circle**-entiteetit voidaan valita. Muun entiteettityypin napsauttaminen ei tee mitään.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Escape` | Peruuta |

## Dimension Radius vs Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Mittaa | Säde (keskipiste reunaan) | Halkaisija (reunasta reunaan keskipisteen kautta) |
| Mittaviiva | Keskipiste → kaaren piste | Kaaren piste → kaaren piste (keskipisteen kautta) |
| Merkinnän etuliite | `R` | `⌀` |
| Nuolenkärjet | Yksi (kaaren pisteessä) | Kaksi (molemmissa kaaren pisteissä) |
| Paras käyttö | Kaarevan ominaisuuden yhden puolen merkintä | Täysien pyöreiden mittojen merkintä |

## Merkinnän muokkaaminen — yksinkertainen tila

**Kaksoisnapsauta** sijoitettua säteen mittaa avataksesi tekstieditorin **yksinkertaisessa** tilassa. Editori on esitäytetty nykyisellä renderöidyllä arvolla (esim. `R 5.00`), jotta voit sijoittaa kohdistimen ja muokata sitä suoraan.

| Ominaisuus | Käyttäytyminen |
|---------|-----------|
| Lihavointi / Kursivointi / Fontti / Korkeus | Koskee **koko** merkintää kerralla |
| Merkkikohtainen muotoilu | Ei tuettu |
| `Enter` | Vahvistaa arvon ja sulkee editorin |
| Monirivinen | Ei tuettu |

Katso [Tekstieditori — yksinkertainen tila](../../interface/text-editor/#simple-mode) täydellistä referenssiä varten.

## DXF — DIMENSION-säde-entiteetti

Säteen mitat tallennetaan `DIMENSION`-entiteetteinä säteen tyypin geometrialla, tallentaen keskipisteen koordinaatit, kaaren pisteen sijainnin ja mitatun säteen arvon. Kaikki ominaisuudet säilyvät edestakaisessa matkassa ilman häviötä.
