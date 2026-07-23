---
title: Copy-komento — Monista Entiteettejä Uuteen Sijaintiin
description: Copy-komento luo siirrettyjä kaksoiskappaleita valituista entiteeteistä säilyttäen alkuperäiset paikoillaan. Tukee esivalintaa, kulmalukitusta ja tarkkaa etäisyyssyöttöä. Kopiot sijoitetaan ja komento päättyy; alkuperäiset pysyvät muuttumattomina.
keywords: [CAD copy-komento, monista entiteettejä CAD, kopioi objekteja CAD, kloonaa geometria CAD, kulmalukittu kopio, tarkka etäisyys kopio, kulmanlab]
group: edit
order: 2
---

# Copy

Komento `copy` luo siirrettyjä kaksoiskappaleita valituista entiteeteistä ja sijoittaa ne perustepisteestä kohteeseen siirrettynä — alkuperäiset pysyvät täsmälleen paikoillaan. Tämä on ainoa keskeinen ero [Move](../move/)-komentoon: Copy lisää uusia entiteettejä piirustukseen; Move siirtää olemassa olevia.

## Kaksi tapaa aloittaa

**Valitse ensin, kopioi sitten** — valitse entiteetit ensin, aktivoi sitten:

1. Valitse yksi tai useampi entiteetti piirtoalueella.
2. Kirjoita `copy` terminaaliin tai napsauta **Copy**-painiketta työkalurivillä.
3. **Napsauta perustepistettä**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
4. **Napsauta kohdetta** — kaksoiskappaleet ilmestyvät perustepiste→kohde-siirtymällä. Koordinaattien syöttö toimii myös täällä.

**Aktivoi, valitse sitten** — aloita komento ilman mitään valittuna:

1. Kirjoita `copy` tai napsauta työkalurivin painiketta.
2. **Valitse objektit** — napsauta vaihtaaksesi yksittäisiä entiteettejä, tai vedä valitaksesi alueen mukaan.
3. Paina **Enter** tai **Space** vahvistaaksesi valinnan.
4. **Napsauta perustepistettä**, napsauta sitten **kohdetta** (koordinaattien syöttö käytettävissä molemmissa vaiheissa).

```
  Ennen:                Jälkeen:
  [entiteetti A]         [entiteetti A]  ← alkuperäiset koskemattomia
  [entiteetti B]         [entiteetti B]
                        [kopio A:sta] ← uudet entiteetit
                        [kopio B:stä]
```

Kopioiden haamuesikatselu seuraa kohdistinta perustepisteestä kohteeseen.

## Koordinaattien syöttö

Perustepiste- tai kohdevaiheessa voit kirjoittaa tarkan sijainnin napsauttamisen sijaan:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** vahvistaaksesi.

## Kulmalukitus ja tarkka etäisyys

Kun perustepiste on asetettu, komento tarttuu 45°:n akseleihin (0°, 45°, 90°, 135° …), kun kohdistin on tarpeeksi kaukana ja lähellä akselia. Lukittuna, kirjoita etäisyys ja paina **Enter** sijoittaaksesi kopiot tarkalleen kyseiselle siirtymälle.

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää etäisyysarvoon |
| `-` | Negatiivinen etäisyys — kääntää suunnan akselia pitkin (vain ensimmäinen merkki) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Sijoita kopiot kirjoitetulle etäisyydelle |

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Vahvista valinta ja siirry perustepistevaiheeseen |
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö, tai etäisyys kulmalukittuna |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista koordinaatti tai sovella kopio kirjoitetulle etäisyydelle |
| `Escape` | Peruuta ja nollaa |

## Valinta komennon aikana

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Vaihtaa kohdistimen alla olevan entiteetin valinnan tilaa |
| **Vedä oikealle** (tiukka) | Lisää kokonaan laatikon sisällä olevat entiteetit |
| **Vedä vasemmalle** (risteys) | Lisää laatikon rajan leikkaavat entiteetit |
| **Enter** / **Space** | Vahvistaa valinnan |

## Kopioinnin jälkeen

**Alkuperäiset pysyvät valittuina** — uudet kopiot lisätään piirustukseen, mutta valinta poistetaan ja komento päättyy. Työskennelläksesi kopioiden kanssa heti, aja Copy uudelleen valintaan, tai aloita uusi komento.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Alkuperäiset | Pysyvät paikoillaan | Poistetaan alkuperäisestä sijainnista |
| Tulosmäärä | Kasvaa kopioitujen entiteettien määrällä | Muuttumaton |
| Toiminnon jälkeen | Alkuperäiset edelleen valittuina | Siirretyt entiteetit valittuina uudessa sijainnissa |
| Paras käyttö | Geometrian toistaminen, symmetriset asettelut | Geometrian uudelleensijoittaminen |

## Tuetut entiteetit

Copy toimii kaikilla entiteettityypeillä. Kaikki entiteetit toteuttavat `translate(dx, dy)`-toiminnon sisäisesti, joten mitään ei jätetä pois.
