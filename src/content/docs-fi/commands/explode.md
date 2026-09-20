---
title: Explode-komento — Pilko Polyline Line- ja Arc-entiteeteiksi
description: Explode-komento pilkkoo polylinen paikallaan sen yksittäisiin Line- ja Arc-entiteetteihin, yksi per segmentti. Jokainen pala säilyttää lähdepolylinen viivanpaksuuden, värin, tason ja viivatyypin. Toimii vain Polyline-entiteeteille.
keywords: [CAD explode-komento, polylinen räjäytys CAD, polylinen pilkkominen viivoiksi, polylinen muuntaminen line- ja arc-muotoon, kulmanlab]
group: edit
order: 16
---

# Explode

`Hajota`-komento pilkkoo [Polylinen](../polyline/) sen yksittäisiin [Line](../line/)- ja [Arc](../arc/)-entiteetteihin — yksi per segmentti, täsmälleen siinä missä polylinen omat kärkipisteet olivat. Palat korvaavat polylinen paikallaan ja säilyttävät sen viivanpaksuuden, värin, tason ja viivatyypin.

Explode toimii vain **Polyline**-entiteeteille.

## Explode-komennon käyttö

Kaksi tapaa suorittaa se, sama kaava kuin [Delete](../delete/):ssä:

**Valitse ensin, sitten pilko** — nopein reitti:

1. Valitse yksi tai useampi polyline piirtoalueelta.
2. Kirjoita `Hajota` terminaaliin, tai napsauta **Explode**-painiketta Edit-paneelissa.

Valitut polylinet pilkotaan välittömästi — ei erillistä vahvistusvaihetta, koska jotain on jo valittuna.

**Aktivoi, valitse sitten**:

1. Kirjoita `Hajota` tai napsauta työkalurivin painiketta ilman mitään valittuna.
2. **Valitse polylinet** — napsauta vaihtaaksesi, tai vedä valitaksesi alueen mukaan.
3. Paina **Enter** tai **Välilyönti** vahvistaaksesi ja pilkkoaksesi valitut polylinet.

Valinnan aikana vain polylinet poimitaan — Line-, Circle- tai minkä tahansa muun entiteetin napsauttaminen ei tee mitään, ja aluevedto jättää huomiotta kaiken paitsi sen sisällä olevat tai sen rajan ylittävät polylinet.

## Mitä syntyy

Jokaisesta polylinen segmentistä tulee oma entiteettinsä:

- **Suora segmentti** muuttuu **Line**-entiteetiksi.
- **Kaarisegmentti** (Polylinen [Arc-valinnasta](../polyline/)) muuttuu **Arc**-entiteetiksi, joka vastaa tarkalleen alkuperäisen käyrän keskipistettä, sädettä ja kaarta.

Jokainen syntyvä Line ja Arc perii lähdepolylinen **viivanpaksuuden, värin, tason, viivatyypin ja viivatyypin mittakaavan** — geometrian ulkonäössä ei muutu mikään, ainoastaan se, että nyt on useita itsenäisiä entiteettejä yhden yhtenäisen polylinen sijaan.

Pilkkomisen voi kumota yhdellä askeleella [Undo](../undo/)-komennolla, kuten minkä tahansa muun muokkauksen.

## Valinta komennon aikana

| Menetelmä | Käyttäytyminen |
|-----------|-----------------|
| **Napsautus** | Vaihtaa kohdistimen alla olevan polylinen valinnan tilaa; muun kuin polyline-entiteetin napsauttaminen ei tee mitään |
| **Veto oikealle** (tiukka) | Valitsee vain laatikon sisällä kokonaan olevat polylinet |
| **Veto vasemmalle** (leikkaava) | Valitsee laatikon rajan ylittävät polylinet |
| **Enter** / **Välilyönti** | Vahvistaa ja pilkkoo valitut polylinet |

## Tuetut entiteetit

| Entiteetti | Tuettu |
|--------|-----------|
| Polyline / Rectangle | Kyllä |
| Line, Arc, Circle, Ellipse | Ei — ei mitään pilkottavaa |
| Text, Spline, Dimension, Leader, Hatch | Ei |
