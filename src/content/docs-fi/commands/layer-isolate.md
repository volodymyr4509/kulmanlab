---
title: LayerIsolate — Jäädytä Tasot Paitsi Valitut KulmanLab CAD:issa
description: LayerIsolate-komento jäädyttää jokaisen tason paitsi ne, joita valitut objektit käyttävät, antaen sinun keskittyä tiettyyn geometriaan poistamatta mitään.
keywords: [tason eristäminen, jäädytä tasot CAD, eristä taso kulmanlab, CAD tasojen hallinta]
group: layer
order: 3
---

# LayerIsolate

Komento `LayerIsolate` jäädyttää jokaisen tason **paitsi** ne, jotka kuuluvat valituille objekteille. Käytä sitä keskittyäksesi nopeasti tiettyyn geometriaan piilottamatta tai poistamatta mitään pysyvästi — poista jäädytys [LayerUnfreezeAll](../layer-unfreeze-all/)-komennolla kun olet valmis.

## Kaksi tapaa aloittaa

**Valitse ensin, eristä sitten** — valitse entiteetit ensin, aktivoi sitten:

1. Valitse yksi tai useampi entiteetti piirtoalueella.
2. Kirjoita `LayerIsolate` terminaaliin tai napsauta **Layer Isolate**-painiketta työkalurivillä.
3. Valittujen entiteettien tasot pysyvät näkyvinä; kaikki muut jäädytetään välittömästi.

**Aktivoi, valitse sitten**:

1. Kirjoita `LayerIsolate` tai napsauta työkalurivin painiketta.
2. **Valitse objektit** — napsauta yksittäisiä entiteettejä tai vedä valitaksesi alueen mukaan.
3. Paina **Enter** tai **Space** vahvistaaksesi — eristys sovelletaan.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Vahvista valinta ja sovella eristys |
| `Escape` | Peruuta ja tyhjennä valinta |

## Käyttäytymisen yksityiskohdat

- Kaikki tasot, jotka **eivät** ole edustettuina valinnassa, asetetaan jäädytetyiksi.
- Tasot, jotka **ovat** edustettuina, pysyvät jäädyttämättöminä, vaikka ne olisivat olleet jäädytettyjä aiemmin.
- Valinta tyhjennetään eristyksen soveltamisen jälkeen.
- Komento päättyy automaattisesti soveltamisen jälkeen.

## Eristyksen kumoaminen

Aja [LayerUnfreezeAll](../layer-unfreeze-all/) palauttaaksesi kaikki tasot näkyviksi yhdessä vaiheessa.
