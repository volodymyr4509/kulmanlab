---
title: Array Grid — Toista Entiteettejä Riveissä ja Sarakkeissa
description: Array Grid -komento luo suorakulmaisen ruudukon kopioita valituista entiteeteistä — kirjoita rivien, sarakkeiden ja niiden välisten etäisyyksien määrä suoraan terminaaliin, pisteiden napsauttamista ei tarvita.
keywords: [CAD array-komento, arraygrid, suorakulmainen array CAD, ruudukkokuvio CAD, toista entiteettejä CAD, kopioarray CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Komento `ArrayGrid` luo suorakulmaisen ruudukon kopioita valituista entiteeteistä — syötä rivien määrä, sarakkeiden määrä ja niiden välinen etäisyys, kaikki kirjoitettuna terminaaliin. Alkuperäinen valinta täyttää rivin 0, sarakkeen 0 solun; jokainen muu solu on siirretty kopio.

## Kaksi tapaa aloittaa

**Valitse ensin, luo array sitten** — valitse entiteetit ensin, aktivoi sitten:

1. Valitse yksi tai useampi entiteetti piirtoalueella.
2. Kirjoita `arraygrid` terminaaliin (jopa `arr` riittää — se on yksiselitteinen) tai napsauta **Array Grid**-painiketta työkalurivillä.
3. Kirjoita **rivien** määrä ja paina **Enter**.
4. Kirjoita **sarakkeiden** määrä ja paina **Enter**.
5. Kirjoita **rivien välinen etäisyys** ja paina **Enter**.
6. Kirjoita **sarakkeiden välinen etäisyys** ja paina **Enter** — ruudukko luodaan välittömästi.

**Aktivoi, valitse sitten** — aloita komento ilman mitään valittuna:

1. Kirjoita `arraygrid` tai napsauta työkalurivin painiketta.
2. **Valitse objektit** — napsauta vaihtaaksesi yksittäisiä entiteettejä, tai vedä valitaksesi alueen mukaan.
3. Paina **Enter** tai **Space** vahvistaaksesi valinnan.
4. Jatka rivit → sarakkeet → rivien väli → sarakkeiden väli kuten yllä.

```
  2 riviä x 3 saraketta:

  [B] [B] [B]   <- rivi 1 (siirretyt kopiot)
  [A] [A] [A]   <- rivi 0: alkuperäinen valinta, kopiot oikealle
```

> Terminaali tarvitsee vain tarpeeksi kirjaimia ollakseen yksiselitteinen — kirjoittamalla `arr` ja painamalla **Enter** aktivoi Array Gridin suoraan, koska mikään muu komennon nimi ei ala näillä kolmella kirjaimella (Arc, Area, Align ja Angle eroavat kaikki aikaisemmin).

## Rivit, sarakkeet ja väli

| Kehote | Hyväksyy | Huomautuksia |
|--------|---------|-------|
| Rows | Positiiviset kokonaisluvut (1, 2, 3…) | Vain numeroita — ei desimaalipistettä tai etumerkkiä |
| Columns | Positiiviset kokonaisluvut (1, 2, 3…) | Vain numeroita — ei desimaalipistettä tai etumerkkiä |
| Row spacing | Etumerkillinen desimaaliluku (esim. `10`, `-5.5`) | Etäisyys rivien välillä; negatiivinen kääntää suunnan |
| Column spacing | Etumerkillinen desimaaliluku (esim. `10`, `-5.5`) | Etäisyys sarakkeiden välillä; negatiivinen kääntää suunnan |

Yhdellä rivillä ja yhdellä sarakkeella kopioita ei luoda — komento päättyy muuttamatta piirustusta.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Vahvista valinta ja siirry rivien kehotteeseen |
| `0`–`9` | Syötä numeroita riveille tai sarakkeille |
| `0`–`9`, `.`, `-` | Syötä numeroita rivien/sarakkeiden välille (`-` vain ensimmäisenä merkkinä) |
| `Backspace` | Poista nykyisen kehotteen viimeksi kirjoitettu merkki |
| `Enter` | Vahvista nykyinen kehote ja siirry seuraavaan |
| `Escape` | Tyhjennä kirjoitetut rivien/sarakkeiden/välin arvot ja palaa valintavaiheeseen |

## Valinta komennon aikana

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Vaihtaa kohdistimen alla olevan entiteetin valinnan tilaa |
| **Vedä oikealle** (tiukka) | Lisää kokonaan laatikon sisällä olevat entiteetit |
| **Vedä vasemmalle** (risteys) | Lisää laatikon rajan leikkaavat entiteetit |
| **Enter** / **Space** | Vahvistaa valinnan ja siirtyy rivien kehotteeseen |

## Arrayn jälkeen

Uudet kopiot lisätään piirustukseen ja komento päättyy — alkuperäinen valinta poistetaan. Aja **Array Grid** uudelleen, tai aloita uusi komento.

## Array Grid vs Copy

| | Array Grid | Copy |
|---|-----------|------|
| Pisteiden napsauttaminen | Ei — rivit, sarakkeet ja väli kirjoitetaan | Perustepiste ja kohde napsautetaan (tai kirjoitetaan) |
| Luodut kopiot | Rivit × sarakkeet − 1 | Tarkalleen 1 per kopiointitoiminto |
| Asettelu | Säännöllinen suorakulmainen ruudukko | Missä tahansa, millä tahansa etäisyydellä |
| Paras käyttö | Yksikön toistaminen säännöllisessä kuviossa (reiät, laatat, kiinnikkeet) | Yksittäinen kopio mielivaltaisessa sijainnissa |

## Tuetut entiteetit

Array Grid toimii kaikilla entiteettityypeillä. Kaikki entiteetit toteuttavat `translate(dx, dy)`-toiminnon sisäisesti, samaa toimintoa jota [Copy](../copy/) ja [Move](../move/) käyttävät, joten mitään ei jätetä pois.
