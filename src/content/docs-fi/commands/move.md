---
title: Move-komento — Siirrä Entiteettejä Perustepisteen Avulla
description: Move-komento siirtää yhden tai useamman valitun entiteetin perustepisteen ja kohteen avulla. Tukee esivalintaa, kulmalukitusta ja tarkkaa etäisyyssyöttöä. Siirron jälkeen entiteetit pysyvät valittuina uudessa sijainnissaan. Kaikki entiteettityypit tuetaan.
keywords: [CAD move-komento, siirrä entiteettejä CAD, siirrä objekteja CAD, kulmalukittu siirto, tarkka etäisyys siirto, kahvasiirto CAD, kulmanlab]
group: edit
order: 1
---

# Move

Komento `move` siirtää valitut entiteetit perustepisteestä kohdepisteeseen. Jokaiseen valittuun entiteettiin sovellettava siirtymä on vektori perustasta kohteeseen. Siirron jälkeen kaikki entiteetit pysyvät valittuina uudessa sijainnissaan, valmiina lisämuokkauksiin.

## Kaksi tapaa aloittaa

**Valitse ensin, siirrä sitten** — valitse entiteetit ensin, aktivoi sitten:

1. Valitse yksi tai useampi entiteetti piirtoalueella.
2. Kirjoita `move` terminaaliin tai napsauta **Move**-painiketta työkalurivillä.
3. **Napsauta perustepistettä**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
4. **Napsauta kohdetta** — kaikki valitut entiteetit siirtyvät perusta→kohde-vektorilla. Koordinaattien syöttö toimii myös täällä.

**Aktivoi, valitse sitten** — aloita komento ilman mitään valittuna:

1. Kirjoita `move` tai napsauta työkalurivin painiketta.
2. **Valitse objektit** — napsauta vaihtaaksesi yksittäisiä entiteettejä, tai vedä valitaksesi alueen mukaan.
3. Paina **Enter** tai **Space** vahvistaaksesi valinnan.
4. **Napsauta perustepistettä**, napsauta sitten **kohdetta** (koordinaattien syöttö käytettävissä molemmissa vaiheissa).

```
  Ennen:                     Jälkeen:
  ● perusta                     → ● kohde
  [entiteetti A]                    [entiteetti A siirretty]
  [entiteetti B]                    [entiteetti B siirretty]
```

Kaikkien valittujen entiteettien haamuesikatselu seuraa kohdistinta perustepisteestä kohteeseen, näyttäen tuloksen ennen napsautusta.

## Koordinaattien syöttö

Perustepiste- tai kohdevaiheessa voit kirjoittaa tarkan sijainnin napsauttamisen sijaan:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** vahvistaaksesi.

## Kulmalukitus ja tarkka etäisyys

Kun perustepiste on asetettu, komento tarkkailee 45°:n tartunta-akselia (0°, 45°, 90°, 135° …). Suunta **lukittuu**, kun kohdistin on tarpeeksi kaukana perustasta ja yhden kahvan leveyden sisällä akselista. Lukittuna:

- Haamuesikatselu tarttuu akseliin.
- Kirjoita etäisyys ja paina **Enter** siirtääksesi tarkalleen sen verran lukittua suuntaa pitkin.
- Napsauttaminen projisoi akselille, joten kohde on aina tarkalleen sillä.

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää etäisyysarvoon |
| `-` | Negatiivinen etäisyys — kääntää suunnan akselia pitkin (vain ensimmäinen merkki) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Sovella siirto kirjoitetulle etäisyydelle |

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Vahvista valinta ja siirry perustepistevaiheeseen |
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö, tai etäisyys kulmalukittuna |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista koordinaatti tai sovella siirto kirjoitetulle etäisyydelle |
| `Escape` | Peruuta ja nollaa |

## Moven aktivointi kahvasta

Valitun [Line](../line/)-entiteetin **keskipistekahvan** napsauttaminen käynnistää Moven automaattisesti, keskipiste jo asetettuna perustepisteeksi ja siirtovaihe aktiivisena. Tämä on nopein tapa sijoittaa yksittäinen viiva uudelleen ohittaen valintavaiheen.

## Valinta komennon aikana

Kun komento alkaa valintavaiheessa:

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Vaihtaa kohdistimen alla olevan entiteetin valinnan tilaa |
| **Vedä oikealle** (tiukka) | Lisää kokonaan laatikon sisällä olevat entiteetit |
| **Vedä vasemmalle** (risteys) | Lisää laatikon rajan leikkaavat entiteetit |
| **Enter** / **Space** | Vahvistaa valinnan ja siirtyy perustepistevaiheeseen |

## Siirron jälkeen

Siirretyt entiteetit pysyvät valittuina uudessa sijainnissaan. Tämä tarkoittaa, että voit heti:
- Ajaa **Move**-toiminnon uudelleen siirtääksesi niitä lisää.
- Ajaa [Copy](../copy/)-, [Rotate](../rotate/)- tai [Scale](../scale/)-toiminnon valitsematta uudelleen.
- Painaa **Delete** poistaaksesi ne.

## Move vs Copy

| | Move | Copy |
|---|------|------|
| Alkuperäinen sijainti | Tyhjennetty — entiteetit eivät ole enää siellä | Säilytetty — alkuperäiset pysyvät paikoillaan |
| Tulosmäärä | Sama entiteettien määrä | Yksi lisäjoukko per toiminto |
| Toiminnon jälkeen | Siirretyt entiteetit valittuina uudessa sijainnissa | Kopioidut entiteetit valittuina uudessa sijainnissa |
| Paras käyttö | Geometrian uudelleensijoittaminen | Geometrian monistaminen |

## Tuetut entiteetit

Move toimii kaikilla entiteettityypeillä: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader ja kaikki muut. Kaikki entiteetit toteuttavat `translate(dx, dy)`, joten mitään ei jätetä pois.
