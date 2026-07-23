---
title: Fit-komento — Sovita Entiteetit Näkymäikkunaan Napsautuksella
description: Fit-komento laskee kaikkien entiteettien rajauslaatikon ja säätää zoomin ja panoroinnin niin, että jokainen entiteetti on näkyvissä pienellä marginaalilla. Keskimmäisen hiiripainikkeen kaksoisnapsautus laukaisee Fit-toiminnon ilman komennon aktivointia.
keywords: [CAD sovita näkymä, zoomaa sopimaan, sovita kaikki entiteetit, fit-komento CAD, rajauslaatikon zoomaus, kulmanlab]
group: navigate
order: 4
---

# Fit

Komento `fit` laskee kaikkien piirustuksen entiteettien rajauslaatikon ja säätää sekä zoomtason että panorointiasennon niin, että jokainen entiteetti on näkyvissä pienellä marginaalilla. Se on nopein tapa palauttaa kadonnut näkymä tai suunnistautua DXF-tiedoston tuonnin jälkeen.

## Näkymän sovittaminen

Napsauta **Fit**-painiketta työkalurivillä tai kirjoita `fit` terminaaliin. Näkymä säätyy välittömästi ja komento päättyy — vuorovaikutusta ei tarvita.

**Keskimmäisen hiiripainikkeen kaksoisnapsautus** laukaisee saman Fit-toiminnon milloin tahansa aktivoimatta mitään komentoa — nopein pikakomento kadonneen näkymän nollaamiseksi kesken piirtämisen.

## Miten rajauslaatikon sovitus toimii

1. Fit löytää akseleihin kohdistetun rajauslaatikon, joka sisältää kaikki entiteetit (min X, maks X, min Y, maks Y).
2. Zoomtaso asetetaan niin, että pidempi tai leveämpi mitta täyttää piirtoalueen marginaalilla.
3. Näkymä keskitetään rajauslaatikon keskipisteeseen.

| Piirustuksen tila | Tulos |
|--------------|--------|
| Leveämpi kuin korkea | Zoom rajoitettu leveyden mukaan |
| Korkeampi kuin leveä | Zoom rajoitettu korkeuden mukaan |
| Yksittäinen entiteetti | Sovittaa vain kyseisen entiteetin ympärille |
| Tyhjä piirustus | Näkymä ei muutu |

## Fit vs manuaaliset zoom-kontrollit

| | Fit | Zoom In / Zoom Out | Rullan pyöritys |
|---|-----|--------------------|-------------|
| Keskittyy | Kaikkiin entiteetteihin | Näkymäikkunan keskipisteeseen | Kohdistimeen |
| Askelkoko | Automaattinen (yksi kerta) | 1,5× per askel | ~1,1× per rasti |
| Paras käyttö | Kadonneen näkymän palautus, suunnistautuminen tuonnin jälkeen | Askeltaminen sisään/ulos keskustasta | Tarkka kohdistinkohtainen zoomaus |

## Näppäinreferenssi

Tälle komennolle ei ole näppäinpikakomentoa. Käytä sen sijaan **keskimmäisen hiiripainikkeen kaksoisnapsautus** -pikakomentoa.

## Liittyvät näkymäkomennot

| Komento | Mitä se tekee |
|---------|-------------|
| [Pan](../pan/) | Siirtää näkymäikkunaa zoomaamatta |
| [Zoom In](../zoom-in/) | Kertoo zoomin 1,5×:llä per askel |
| [Zoom Out](../zoom-out/) | Jakaa zoomin 1,5×:llä per askel |
