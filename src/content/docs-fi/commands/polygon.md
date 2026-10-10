---
title: "Polygon-komento — piirrä säännöllinen monikulmio keskipisteestä tai sivusta KulmanLab CADissa"
description: "Polygon-komento piirtää säännöllisen monikulmion, jossa on 3–1024 sivua, keskipisteestä ja säteestä tai yhdestä sivusta. Tuloksena on suljettu LWPOLYLINE, joten kaikki murtoviivan muokkauskomennot toimivat siihen."
keywords: ["CAD monikulmiokomento", "säännöllisen monikulmion piirtäminen CAD", "kuusikulmio kahdeksankulmio viisikulmio CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

`polygon`-komento piirtää säännöllisen monikulmion — kaikki sivut ja kulmat yhtä suuria — jossa on 3–1024 sivua. Kirjoita `polygon` terminaaliin. Tuloksena on **suljettu `LWPOLYLINE`**, joten sijoittamisen jälkeen se toimii kuten mikä tahansa muu [Polyline](../polyline/) ja kaikki murtoviivan muokkaukset pätevät.

## Monikulmion piirtäminen

1. Kirjoita `polygon` terminaaliin ja anna **sivujen lukumäärä** — kokonaisluku 3–1024 — ja paina **Enter** tai **Space**. Kehote on esitäytetty viimeksi käytetyllä lukumäärällä (ensimmäisellä kerralla 4); aloita kirjoittaminen korvataksesi sen. Mikä tahansa muu hylätään ja jää kehotteeseen korjattavaksi.
2. **Napsauta keskipistettä** tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten. Paina ensin `E`, jos haluat aloittaa sivusta (katso alla).
3. **Napsauta sädettä** — monikulmio esikatselu päivittyy — tai kirjoita säde ja paina **Enter** tai **Space**.
4. Monikulmio sijoitetaan ja komento päättyy.

## Valinnat

| Valinta | Näppäin | Vaikutus |
|---|---|---|
| Edge | `E` | Ensimmäinen piste on keskipisteen sijaan sivun toinen pää. Valitse toinen pää; loput kärjet rakennetaan vastapäivään, sivun vasemmalle puolelle ensimmäisestä päästä toiseen. Paina `E` uudelleen palataksesi keskipisteeseen. |
| Inside | `I` | Oletuksena päällä ja säilyy monikulmiosta toiseen. Päällä: kärjet ovat annetun säteen ympyrällä. Pois: monikulmio on ympyrän ulkopuolella ja jokaisen sivun keskikohta on sillä. |

- Napsautus sijoittaa kärjen (Inside päällä) tai sivun keskikohdan (Inside pois) täsmälleen kursorin kohdalle, joten kursori määrää myös suunnan.
- Kirjoitetulla säteellä ei ole suuntaa, johon tähdätä, joten monikulmio asettuu alin sivu vaakasuorassa — ellei kulmalukitus ole päällä, jolloin se seuraa lukittua kulmaa.
- Jokainen valinta tarjotaan omassa vaiheessaan, ja sen voi vaihtaa myös numeroa kirjoitettaessa.

## Näppäinopas

| Näppäin | Toiminto |
|---|---|
| `0`–`9`, `.` | Kirjoita sivujen lukumäärä, säde, koordinaatti tai pituus |
| `E` | Kytke Edge päälle tai pois (ensimmäisen pisteen vaihe) |
| `I` | Kytke Inside päälle tai pois (säteen vaihe) |
| `Enter` / `Space` | Vahvista sivujen lukumäärä tai säde |
| `Escape` | Peruuta |

## DXF — LWPOLYLINE-entiteetti

Monikulmio tallennetaan suljettuna `LWPOLYLINE`-viivana, jossa on yksi kärki kutakin kulmaa kohti; DXF:ssä ei ole omaa monikulmiotyyppiä. Kaikki ominaisuudet — kärkien koordinaatit, väri, taso, viivatyyppi, viivatyypin mittakaava ja paksuus — säilyvät häviöttä, ja mikä tahansa DXF-katselin lukee sen suljettuna murtoviivana.
