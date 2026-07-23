---
title: "Zoom In -komento — Suurenna Näkymäikkunaa 1.5x per Askel"
description: "Zoom In -komento kertoo nykyisen zoomtason 1,5x:llä ja päättyy välittömästi. Keskitetty näkymäikkunan keskipisteeseen. Zoomausalue 0,01–10 000. Käytä rullan pyöritystä zoomataksesi kohdistinta kohti sen sijaan."
keywords: [CAD zoomaa sisään, suurenna näkymäikkunaa, zoom-komento CAD, 1.5x zoom-askel, kulmanlab]
group: navigate
order: 2
---

# Zoom In

Komento `zoomin` kertoo nykyisen zoomtason **1,5x:llä** ja päättyy välittömästi, keskitettynä näkymäikkunan keskipisteeseen. Se on työkalurivin vastine yhdelle rullan rastille zoomattuna näytön keskustaa kohti kohdistimen sijaan.

## Zoomaaminen sisään

Napsauta **Zoom In**-painiketta työkalurivillä tai kirjoita `zoomin` terminaaliin. Zoom sovelletaan välittömästi ja komento päättyy — piirtoalueen napsautusta ei tarvita.

## Miten 1,5x-askel toimii

| Nykyinen zoom | Yhden Zoom In:in jälkeen |
|-------------|------------------|
| 1,00x | 1,50x |
| 1,50x | 2,25x |
| 10,00x | 15,00x |
| 6667x | 10 000x (katto) |

Zoomtaso näkyy aina piirtoalueen **oikeassa alakulmassa** `zoom`-merkinnän vieressä. Yläraja on **10 000x**; lisäaskeleet eivät tee mitään.

## Työkalurivin zoom-in vs rullan pyöritys

| | Zoom In -painike | Rullan pyöritys |
|---|--------------|-------------|
| Zoomin keskus | Näkymäikkunan keskipiste | Kohdistimen sijainti |
| Askelkoko | 1,5x per klikkaus | ~1,1x per rasti |
| Vaatii aktivointia | Ei | Ei — toimii aina |
| Paras käyttö | Karkea navigointi | Tarkka, kohdistinkohtainen zoomaus |

## Näppäinreferenssi

Tälle komennolle ei ole näppäinpikakomentoja. Käytä sen sijaan rullan pyöritystä — se toimii milloin tahansa aktivoimatta mitään komentoa.

## Liittyvät näkymäkomennot

| Komento | Mitä se tekee |
|---------|-------------|
| [Zoom Out](../zoom-out/) | Jakaa zoomin 1,5x:llä per askel |
| [Fit](../fit/) | Nollaa zoomin näyttämään kaikki entiteetit |
| [Pan](../pan/) | Siirtää näkymäikkunaa zoomaamatta |
