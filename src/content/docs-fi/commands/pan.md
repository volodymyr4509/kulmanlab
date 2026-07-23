---
title: Pan-komento — Napsauta-ja-Vedä Navigointi KulmanLab CAD:issa
description: Pan-komento siirtyy pysyvään vedä-vierittääksesi-tilaan. Napsauta ja vedä missä tahansa piirtoalueella siirtääksesi näkymää muuttamatta zoomtasoa. Keskiklikkaus-veto toimii milloin tahansa aktivoimatta Pania.
keywords: [CAD pan näkymäikkuna, pan-komento, vedä navigoidaksesi, piirtoalueen vieritys CAD, näkymäikkunan navigointi, kulmanlab]
group: navigate
order: 1
---

# Pan

Komento `pan` siirtyy pysyvään vedä-vierittääksesi-tilaan — napsauta ja vedä missä tahansa piirtoalueella siirtääksesi näkymää. Zoomtaso pysyy muuttumattomana. Pan-tila pysyy aktiivisena, kunnes painat `Escape`, joten voit vetää useita kertoja yhden aktivoinnin aikana.

## Näkymän panorointi

1. Kirjoita `pan` terminaaliin tai napsauta **Pan**-painiketta työkalurivillä.
2. **Napsauta ja vedä** missä tahansa piirtoalueella siirtääksesi näkymää.
3. Vapauta ja vedä uudelleen niin monta kertaa kuin tarvitset.
4. Paina `Escape` poistuaksesi pan-tilasta.

## Keskiklikkaus-veto — panoroi aktivoimatta komentoa

Nopein tapa panoroida: **pidä keskimmäistä hiiripainiketta pohjassa ja vedä** milloin tahansa, jopa toisen komennon ollessa aktiivinen. Komennon aktivointia ei tarvita. Keskipainikkeen vapauttaminen palaa tilaan, jossa olit.

## Pan vs zoom-kontrollit

| Toiminto | Vaikutus | Vaatii Pan-tilan? |
|--------|--------|-------------------|
| Vasen klikkaus -veto (Pan-tila) | Siirtää näkymäikkunaa | Kyllä |
| Keskiklikkaus-veto | Siirtää näkymäikkunaa | Ei — toimii aina |
| Rullan pyöritys | Zoomaa kohdistinta kohti | Ei — toimii aina |
| Kaksois-keskiklikkaus | Sovita kaikki entiteetit | Ei — toimii aina |
| [Zoom In](../zoom-in/) / [Zoom Out](../zoom-out/) | Askeltaa zoomia 1,5× | Ei |
| [Fit](../fit/) | Sovittaa kaikki entiteetit näkymään | Ei |

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Escape` | Poistu pan-tilasta |

## Vinkkejä

- Käytä rullan pyöritystä zoomataksesi kohdealuetta kohti, panoroi sitten hienosäätääksesi sijaintia.
- **Keskimmäisen hiiripainikkeen kaksoisnapsautus** laukaisee [Fit](../fit/)-toiminnon välittömästi — nopein tapa nollata kadonnut näkymä.
- Jos olet kesken komentoa (esim. sijoittamassa viivan päätepistettä), keskiklikkaa-vedä panoroidaksesi peruuttamatta komentoa.
