---
title: "Dimension Diameter — Merkitse Täydet Ympyrä- ja Kaarihalkaisijat"
description: "Dimension Diameter -komento sijoittaa halkaisijamitan (halkaisijasymbolilla varustettuna) kaaren tai ympyrän yli keskipisteen kautta. Siirrä kohdistinta kiertääksesi mittaviivaa mihin tahansa kulmaan. Täysi DXF-edestakainen matka DIMENSION-halkaisijaentiteetteinä."
keywords: [CAD halkaisijamitta, dimdiameter, merkitse ympyrän halkaisija, kaaren halkaisijamitta, halkaisijasymboli CAD, kulmanlab]
group: markup
order: 8
---

# Dimension Diameter

Komento `dimdiameter` sijoittaa halkaisijamitan kaarelle tai ympyrälle. Mittaviiva kattaa koko halkaisijan — kulkien keskipisteen kautta kahden vastakkaisen kaaren pisteen välillä — ja merkitään `⌀ <arvo>`. Merkitäksesi vain säteen keskipisteestä yhteen reunaan, käytä [Dimension Radius](../dim-radius/)-komentoa.

## Halkaisijamitan anatomia

```
  ●──────────── ⌀ 10.00 ────────────●
  (kaukainen kaaren piste)              (lähin kaaren piste / tekstin puoli)
```

- **Mittaviiva** — kattaa koko halkaisijan, nuolenkärjillä molemmissa kaaren leikkauspisteissä.
- **Lähin kaaren piste** — kehän piste kohdistimen puolella (jossa tekstimerkintä sijaitsee).
- **Kaukainen kaaren piste** — diametraalisesti vastakkainen piste.
- **Merkintä** — `⌀` seurattuna halkaisija-arvolla.

## Halkaisijamitan sijoittaminen

1. Kirjoita `dimdiameter` terminaaliin tai napsauta **Dimension Diameter**-painiketta työkalurivillä.
2. **Napsauta kaarta tai ympyrää** valitaksesi sen.
3. **Siirrä kohdistinta** kiertääksesi mittaviivaa haluttuun kulmaan.
4. **Napsauta** sijoittaaksesi mitan.

Vain **Arc**- ja **Circle**-entiteetit voidaan valita.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Escape` | Peruuta |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Mittaa | Täysi halkaisija (2 × säde) | Säde (keskipiste reunaan) |
| Mittaviiva | Reuna → reuna keskipisteen kautta | Keskipiste → reuna |
| Merkinnän etuliite | `⌀` | `R` |
| Nuolenkärjet | Kaksi (molemmissa kaaren pisteissä) | Yksi (kaaren pisteessä) |
| Paras käyttö | Täydet pyöreät reikä- tai akselimitat | Kaarevan ominaisuuden yhden puolen merkintä |

## Merkinnän muokkaaminen — yksinkertainen tila

**Kaksoisnapsauta** sijoitettua halkaisijamittaa avataksesi tekstieditorin **yksinkertaisessa** tilassa. Editori on esitäytetty nykyisellä renderöidyllä arvolla (esim. `⌀ 10.00`), jotta voit sijoittaa kohdistimen ja muokata sitä suoraan.

| Ominaisuus | Käyttäytyminen |
|---------|-----------|
| Lihavointi / Kursivointi / Fontti / Korkeus | Koskee **koko** merkintää kerralla |
| Merkkikohtainen muotoilu | Ei tuettu |
| `Enter` | Vahvistaa arvon ja sulkee editorin |
| Monirivinen | Ei tuettu |

Katso [Tekstieditori — yksinkertainen tila](../../interface/text-editor/#simple-mode) täydellistä referenssiä varten.

## DXF — DIMENSION-halkaisijaentiteetti

Halkaisijamitat tallennetaan `DIMENSION`-entiteetteinä halkaisijatyypin geometrialla, tallentaen molempien kaaren pisteiden sijainnit ja mitatun halkaisija-arvon (2 × säde). Kaikki ominaisuudet säilyvät edestakaisessa matkassa ilman häviötä.
