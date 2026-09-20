---
title: LayerMatch — Kohdista Entiteettien Tasot Uudelleen Lähteeseen
description: LayerMatch-komento kohdistaa yhden tai useamman kohde-entiteetin tason uudelleen vastaamaan napsauttamasi lähde-entiteetin tasoa.
keywords: [lagmatch, kohdista taso CAD, kohdista taso uudelleen kulmanlab, CAD tasojen hallinta]
group: layer
order: 3
---

# LayerMatch

Komento `TasoKutenLähde` kohdistaa valittujen entiteettien tason uudelleen vastaamaan napsauttamasi lähde-entiteetin tasoa. Se on nopein tapa siirtää objektiryhmä oikealle tasolle avaamatta [Layer Manageria](../layer-manager/).

## Työnkulku

**Valitse ensin, kohdista sitten**:

1. Valitse entiteetit, joiden tasoa haluat muuttaa.
2. Kirjoita `TasoKutenLähde` tai napsauta **Layer Match**-painiketta työkalurivillä (maalikuvake).
3. **Napsauta lähdeobjektia** — sitä, jonka tason haluat kopioida.
4. Kaikki valitut entiteetit siirtyvät välittömästi lähdeobjektin tasolle.

**Aktivoi, valitse sitten**:

1. Kirjoita `TasoKutenLähde` tai napsauta työkalurivin painiketta ilman mitään valittuna.
2. **Valitse kohdeobjektit** — napsauta vaihtaaksesi yksittäisiä entiteettejä tai vedä valitaksesi alueen mukaan.
3. Paina **Enter** tai **Space** vahvistaaksesi valinnan.
4. **Napsauta lähdeobjektia** — sen taso sovelletaan kaikkiin kohteisiin.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Vahvista kohdevalinta ja siirry lähteen valintavaiheeseen |
| `Escape` | Nollaa — palaa kohteen valintaan tai peruuta kokonaan |

## Käyttäytymisen yksityiskohdat

- Vain `layer`-ominaisuus muuttuu — väri, linetype, lineweight ja geometria pysyvät koskemattomina.
- Lähdeobjektia itseään ei muokata.
- Komento päättyy, kun lähde on napsautettu.
- Tyhjän piirtoalueen napsauttaminen lähteen valintavaiheessa ei tee mitään.
