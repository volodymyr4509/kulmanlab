---
title: Delete-komento — Poista Entiteettejä Piirustuksesta
description: Delete-komento poistaa valitut entiteetit pysyvästi (voidaan kumota). Esivalitut entiteetit poistetaan välittömästi ilman vahvistusvaihetta. Delete-näppäin toimii globaalina pikanäppäimenä ilman komennon aktivointiakin. Tukee yksittäistä napsautusta ja aluevalintaa.
keywords: [CAD delete-komento, poista entiteettejä CAD, poista objekteja CAD, delete-näppäin CAD, kumoa poisto CAD, kulmanlab]
group: edit
order: 7
---

# Delete

Komento `delete` poistaa valitut entiteetit piirustuksesta. Poistot tallennetaan [Undo](../undo/)-historiaan ja voidaan peruuttaa jopa 20 askelta. Erillistä "vahvista poisto" -valintaikkunaa ei ole — vahvistus on yksi näppäimen painallus.

## Kaksi tapaa poistaa

**Valitse ensin, poista sitten** — nopein tapa:

1. Valitse yksi tai useampi entiteetti piirtoalueella.
2. Kirjoita `delete` terminaaliin, napsauta **Delete**-painiketta työkalurivillä, **tai paina suoraan `Delete`-näppäintä**.

Entiteetit poistetaan välittömästi — ei ylimääräistä vahvistusvaihetta.

**Aktivoi, valitse sitten**:

1. Kirjoita `delete` tai napsauta työkalurivin painiketta (ilman mitään valittuna).
2. **Valitse objektit** — napsauta vaihtaaksesi, tai vedä valitaksesi alueen mukaan.
3. Paina **Enter**, **Space** tai **Delete** vahvistaaksesi ja poistaaksesi valitut entiteetit.

## Delete-näppäimen pikakomento

Näppäimistön `Delete`-näppäin toimii **globaalina pikakomentona** — jos entiteettejä on parhaillaan valittuna, sen painaminen poistaa ne välittömästi, jopa avaamatta Delete-komentoa terminaalissa. Tämä on nopein yksivaiheinen poistotyönkulku:

```
Napsauta entiteettiä → paina Delete-näppäintä → valmis
```

## Valinta komennon aikana

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Vaihtaa kohdistimen alla olevan entiteetin valinnan tilaa |
| **Vedä oikealle** (tiukka) | Valitsee vain kokonaan laatikon sisällä olevat entiteetit |
| **Vedä vasemmalle** (risteys) | Valitsee laatikon rajan leikkaavat entiteetit |
| **Enter** / **Space** / **Delete** | Vahvistaa ja poistaa valitut entiteetit |

## Poistettujen entiteettien palauttaminen

Poistot voidaan kumota [Undo](../undo/)-komennolla (kirjoita `undo` tai käytä työkalurivin painiketta). Jopa **20 askelta** voidaan peruuttaa tiedostoa kohden, ja historia säilyy sivun uudelleenlatausten yli. Jos olet ylittänyt 20 poistoa tallentamatta, aiempia poistoja ei voida palauttaa.

## Tuetut entiteetit

Delete toimii kaikilla entiteettityypeillä — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader ja kaikki muut.
