---
title: Mirror-komento — Peilaa Entiteettejä Kahden Pisteen Akselin Yli
description: Mirror-komento peilaa valitut entiteetit kahden napsautuksen määrittelemän peiliviivan yli. Alkuperäiset säilytetään aina — Mirror luo uusia peilattuja kopioita. Peiliakseli voi olla missä tahansa kulmassa ja tarttuu 45°:n lisäyksiin.
keywords: [CAD mirror-komento, peilaa entiteettejä CAD, peilisymmetria CAD, käännä objekteja CAD, peiliakseli CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Komento `mirror` luo peilattuja kopioita valituista entiteeteistä heijastettuna kahden pisteen akselin yli. Alkuperäiset **säilytetään aina** — toisin kuin [Move](../move/) tai [Rotate](../rotate/), Mirror ei koskaan muuta olemassa olevia entiteettejä; se vain lisää uusia.

## Kaksi tapaa aloittaa

**Valitse ensin, peilaa sitten** — valitse entiteetit ensin, aktivoi sitten:

1. Valitse yksi tai useampi entiteetti piirtoalueella.
2. Kirjoita `mirror` terminaaliin tai napsauta **Mirror**-painiketta työkalurivillä.
3. **Napsauta peiliakselin ensimmäistä pistettä**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
4. **Napsauta toista pistettä** — peilatut kopiot sijoitetaan ja komento päättyy. Koordinaattien syöttö toimii myös täällä.

**Aktivoi, valitse sitten** — aloita komento ilman mitään valittuna:

1. Kirjoita `mirror` tai napsauta työkalurivin painiketta.
2. **Valitse objektit** — napsauta vaihtaaksesi, tai vedä valitaksesi alueen mukaan.
3. Paina **Enter** tai **Space** vahvistaaksesi valinnan.
4. **Napsauta ensimmäistä pistettä**, napsauta sitten **toista pistettä** peiliakselille (koordinaattien syöttö käytettävissä molemmissa vaiheissa).

```
  Alkuperäinen:      Peiliakseli:        Tulos:
                     |
  [entiteetti A]  →  |    →    [entiteetti A] + [peilattu A]
                     |
```

Elävä esikatselu peilatuista kopioista seuraa kohdistinta, kun sijoitat toista akselipistettä.

## Peiliakseli

Akseli on ääretön viiva kahden napsautetun pisteen kautta. Se voi olla missä tahansa kulmassa:

- Siirrä kohdistin lähelle **45°:n tartunta-akselia** (0°, 45°, 90°, 135° …) ja akseli lukittuu kyseiseen kulmaan — hyödyllinen puhtaita vaaka-, pysty- tai diagonaaliheijastuksia varten.
- Napsauta tartunta-alueen ulkopuolella vapaata kulma-akselia varten.

## Koordinaattien syöttö

Kummassakin akselipisteen vaiheessa voit kirjoittaa tarkan sijainnin napsauttamisen sijaan:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** vahvistaaksesi.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Vahvista valinta |
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti |
| `Escape` | Peruuta ja nollaa |

## Valinta komennon aikana

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Vaihtaa kohdistimen alla olevan entiteetin |
| **Vedä oikealle** (tiukka) | Lisää kokonaan laatikon sisällä olevat entiteetit |
| **Vedä vasemmalle** (risteys) | Lisää laatikon leikkaavat entiteetit |
| **Enter** / **Space** | Vahvistaa valinnan |

## Mikä peilataan

Kaikki entiteettityypit tuetaan. Geometria heijastetaan matemaattisesti akselin yli:

| Entiteetti | Mikä muuttuu |
|--------|-------------|
| Line | Molemmat päätepisteet heijastetaan |
| Circle | Keskipiste heijastetaan; säde pysyy muuttumattomana |
| Arc | Keskipiste heijastetaan; alku- ja loppukulmat lasketaan uudelleen akselin yli |
| Ellipse | Keskipiste heijastetaan; pääakselin suunta käännetään akselin yli |
| Polyline / Rectangle | Jokainen kärki heijastetaan |
| Text | Ankkuripiste heijastetaan; tekstijonoa **ei** käännetä |
| Spline | Kaikki ohjauspisteet / sovituspisteet heijastetaan |

## Mirror vs Copy

| | Mirror | Copy |
|---|--------|------|
| Alkuperäiset | Aina säilytetty | Aina säilytetty |
| Uuden entiteetin sijainti | Heijastettu akselin yli | Siirretty siirtymävektorilla |
| Paras käyttö | Symmetriset suunnittelut, kaksipuoliset ominaisuudet | Geometrian toistaminen mihin tahansa suuntaan |
