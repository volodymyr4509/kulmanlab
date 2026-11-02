---
title: "Explode-komento — murtoviivan tai lohkon purkaminen osiinsa"
description: "Explode-komento purkaa murtoviivan sen Line- ja Arc-entiteeteiksi tai lohkoviittauksen entiteeteiksi, joita sen lohko piirtää, paikallaan. Osat näyttävät täsmälleen alkuperäiseltä."
keywords: [CAD explode-komento, polylinen räjäytys CAD, polylinen pilkkominen viivoiksi, polylinen muuntaminen line- ja arc-muotoon, kulmanlab]
group: edit
order: 19
---

# Explode

`Hajota`-komento pilkkoo [Polylinen](../polyline/) sen yksittäisiin [Line](../line/)- ja [Arc](../arc/)-entiteetteihin — yksi per segmentti, täsmälleen siinä missä polylinen omat kärkipisteet olivat. Palat korvaavat polylinen paikallaan ja säilyttävät sen viivanpaksuuden, värin, tason ja viivatyypin.

Explode toimii **Polyline**-entiteeteille ja **lohkoviittauksille**.

## Explode-komennon käyttö

Kaksi tapaa suorittaa se, sama kaava kuin [Delete](../delete/):ssä:

**Valitse ensin, sitten pilko** — nopein reitti:

1. Valitse yksi tai useampi polyline piirtoalueelta.
2. Kirjoita `Hajota` terminaaliin tai valitse **Explode** Edit-paneelin pudotusvalikosta.

Valitut polylinet pilkotaan välittömästi — ei erillistä vahvistusvaihetta, koska jotain on jo valittuna.

**Aktivoi, valitse sitten**:

1. Kirjoita `Hajota` tai valitse **Explode** pudotusvalikosta, kun mitään ei ole valittu.
2. **Valitse murtoviivoja tai lohkoviittauksia** — napsauta vaihtaaksesi tai vedä valitaksesi alueen.
3. Paina **Enter** tai **Välilyönti** vahvistaaksesi ja pilkkoaksesi valitut polylinet.

Valinnan aikana mukaan tulevat vain murtoviivat ja lohkoviittaukset — Line-, Circle- tai muun entiteetin napsautus ei tee mitään, ja aluevalinta ohittaa kaiken muun sen sisällä tai sen poikki.

## Mitä syntyy

Jokaisesta polylinen segmentistä tulee oma entiteettinsä:

- **Suora segmentti** muuttuu **Line**-entiteetiksi.
- **Kaarisegmentti** (Polylinen [Arc-valinnasta](../polyline/)) muuttuu **Arc**-entiteetiksi, joka vastaa tarkalleen alkuperäisen käyrän keskipistettä, sädettä ja kaarta.

Jokainen syntyvä Line ja Arc perii lähdepolylinen **viivanpaksuuden, värin, tason, viivatyypin ja viivatyypin mittakaavan** — geometrian ulkonäössä ei muutu mikään, ainoastaan se, että nyt on useita itsenäisiä entiteettejä yhden yhtenäisen polylinen sijaan.

**Lohkoviittauksesta** tulee entiteetit, joita sen lohko piirtää, sijoitettuina sinne, missä viittaus ne näytti. Lohkon piilottamat entiteetit — dynaamisen lohkon muut tilat — jätetään pois; jokaisesta attribuutista tulee tavallinen Text arvoineen; ByBlock-piirretyt osat saavat viittauksen värin ja tasolla 0 olevat sen tason. Sisäkkäisestä lohkosta tulee oma lohkoviittauksensa, jonka voit puolestaan purkaa. Viittausta, jonka mittakaava on eri X- ja Y-suunnassa, ei oteta mukaan, koska sen ympyröistä pitäisi tulla ellipsejä.

Pilkkomisen voi kumota yhdellä askeleella [Undo](../undo/)-komennolla, kuten minkä tahansa muun muokkauksen.

## Valinta komennon aikana

| Menetelmä | Käyttäytyminen |
|-----------|-----------------|
| **Napsautus** | Lisää kohdistimen alla olevan murtoviivan tai lohkoviittauksen valintaan tai poistaa sen; muun entiteetin napsautus ei tee mitään |
| **Veto oikealle** (tiukka) | Valitsee vain murtoviivat ja lohkoviittaukset, jotka ovat kokonaan laatikon sisällä |
| **Veto vasemmalle** (leikkaava) | Valitsee murtoviivat ja lohkoviittaukset, jotka leikkaavat laatikon reunaa |
| **Enter** / **Space** | Vahvistaa ja purkaa valinnan |

## Tuetut entiteetit

| Entiteetti | Tuettu |
|--------|-----------|
| Polyline / Rectangle | Kyllä |
| Lohkoviittaus | Kyllä, ellei mittakaava ole eri X- ja Y-suunnassa |
| Line, Arc, Circle, Ellipse | Ei — ei mitään pilkottavaa |
| Text, Spline, Dimension, Leader, Hatch | Ei |
