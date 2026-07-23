---
title: "Zoom Out -komento — Pienennä Näkymäikkunan Zoomia 1.5x per Askel"
description: "Zoom Out -komento jakaa nykyisen zoomtason 1,5x:llä ja päättyy välittömästi. Keskitetty näkymäikkunan keskipisteeseen. Käytä rullan pyöritystä zoomataksesi ulos kohdistinta kohti tarkempaa kontrollia varten."
keywords: [CAD zoomaa ulos, pienennä näkymäikkunan zoomia, zoom ulos -komento, yleiskatsaus CAD, 1.5x zoom-askel, kulmanlab]
group: navigate
order: 3
---

# Zoom Out

Komento `zoomout` jakaa nykyisen zoomtason **1,5x:llä** (vastaa kertomista ~0,667:llä) ja päättyy välittömästi, keskitettynä näkymäikkunan keskipisteeseen. Se on [Zoom In](../zoom-in/)-komennon käänteinen toiminto.

## Zoomaaminen ulos

Napsauta **Zoom Out**-painiketta työkalurivillä tai kirjoita `zoomout` terminaaliin. Zoom sovelletaan välittömästi ja komento päättyy — piirtoalueen napsautusta ei tarvita.

## Miten 1,5x-askel toimii

| Nykyinen zoom | Yhden Zoom Out:in jälkeen |
|-------------|-------------------|
| 1,50x | 1,00x |
| 2,25x | 1,50x |
| 10,00x | 6,67x |
| 0,015x | 0,01x (lattia) |

Zoomtaso näkyy aina piirtoalueen **oikeassa alakulmassa**. Alaraja on **0,01x**; lisäaskeleet eivät tee mitään.

## Työkalurivin zoom-out vs rullan pyöritys

| | Zoom Out -painike | Rullan pyöritys |
|---|----------------|-------------|
| Zoomin keskus | Näkymäikkunan keskipiste | Kohdistimen sijainti |
| Askelkoko | 1,5x per klikkaus | ~1,1x per rasti |
| Vaatii aktivointia | Ei | Ei — toimii aina |
| Paras käyttö | Astuminen taaksepäin nähdäksesi enemmän kontekstia | Sileä, kohdistimeen ankkuroitu zoom-ulos |

## Näppäinreferenssi

Tälle komennolle ei ole näppäinpikakomentoja. Käytä sen sijaan rullan pyöritystä — se toimii milloin tahansa aktivoimatta mitään komentoa.

## Liittyvät näkymäkomennot

| Komento | Mitä se tekee |
|---------|-------------|
| [Zoom In](../zoom-in/) | Kertoo zoomin 1,5x:llä per askel |
| [Fit](../fit/) | Nollaa zoomin näyttämään kaikki entiteetit |
| [Pan](../pan/) | Siirtää näkymäikkunaa zoomaamatta |
