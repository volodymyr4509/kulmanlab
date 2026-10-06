---
title: Extend-komento — Jatka Entiteettiä Lähimpään Rajaan
description: Extend-komento jatkaa lähintä päätepistettä Line-, Arc-, Ellipse- tai avoimelle Polyline-entiteetille, jonka päällä pidät kohdistinta, lähimpään leikkauspisteeseen toisen entiteetin kanssa. Elävä esikatselu näyttää jatketun entiteetin ennen napsautusta.
keywords: [CAD extend-komento, jatka viivaa CAD, jatka kaarta CAD, jatka ellipsiä CAD, jatka polylinea CAD, jatka entiteettiä rajaan, hover extend -esikatselu, kulmanlab]
group: edit
order: 9
---

# Extend

Komento `Jatka` jatkaa lähintä päätepistettä [Line](../line/)-, [Arc](../arc/)-, [Ellipse](../ellipse/)- tai avoimelle [Polyline](../polyline/)-entiteetille, jonka päällä pidät kohdistinta, lähimpään leikkauspisteeseen, jonka se muodostaisi toisen piirustuksen entiteetin kanssa. Pidä kohdistinta lähellä sitä päätä, jota haluat jatkaa — esikatselu näyttää jatketun entiteetin — napsauta sitten soveltaaksesi.

Vain entiteettejä, joilla on todellinen päätepiste, voidaan jatkaa. [Circle](../circle/) ja täydellinen (360°) Ellipse ovat aina suljettuja muotoja ilman päätepistettä, joten niitä ei voi koskaan jatkaa — sama koskee suljettua Polyline-entiteettiä tai Rectanglea. Osittaisella Ellipse-entiteetillä (elliptinen kaari) ja Arc-entiteetillä on päätepisteet, ja niitä jatketaan samalla tavalla kuin Line-entiteettiä.

## Entiteetin jatkaminen

1. Kirjoita `Jatka` terminaaliin tai napsauta **Extend**-painiketta työkalurivillä.
2. **Pidä kohdistinta lähellä jatkettavan entiteetin toista päätä** — esikatselu näyttää sen jatkettuna lähimpään rajaan kyseisessä suunnassa.
3. **Napsauta** soveltaaksesi jatkeen.

Komento pysyy aktiivisena jokaisen jatkeen jälkeen, jotta voit jatkaa hoveringia ja napsauttamista jatkaaksesi useampia entiteettejä. Paina **Enter**, **Space** tai **Escape** poistuaksesi.

```
  Ennen:                        Jälkeen:

  ──────           |           ──────────────|
  (lyhyt viiva)     (raja)      (jatkettu rajaan)
```

## Miten päätepiste valitaan

Komento katsoo, kumpaa päätä kohdistin on lähempänä:

- **Line ja avoin Polyline** — kohdistin lähempänä loppupistettä jatkaa loppua eteenpäin; kohdistin lähempänä alkupistettä jatkaa alkua taaksepäin.
- **Arc ja osittainen Ellipse** — kohdistin lähempänä jompaakumpaa kulmapäätä saa kaaren kasvamaan siihen suuntaan, saman keskipisteen ja säteen (tai saman ellipsimuodon) ympärillä, kunnes se saavuttaa seuraavan rajan.

Säde — tai Arc- ja Ellipse-entiteeteillä entiteetin oma taustalla oleva ympyrä tai käyrä — heitetään valitusta päästä, ja **lähin leikkauspiste** minkä tahansa toisen entiteetin kanssa (paitsi itse entiteetti ja jätetyt tyypit) tulee uudeksi päätepisteeksi.

Jos leikkauspistettä ei löydy siihen suuntaan, esikatselua ei näytetä ja napsauttaminen ei tee mitään.

## Rajapoikkeukset

Seuraavia entiteettityyppejä ei huomioida rajoina — entiteetti ei jatku niitä kohti:

- Text / Mtext
- Multileader

Kaikki muut tyypit (Line, Arc, Circle, Ellipse, Polyline, Spline, Dimension) toimivat kelvollisina rajoina.

Jos Polylinen ensimmäinen tai viimeinen segmentti on itsessään kaarisegmentti (piirretty Arc-kytkimellä), sen jatkaminen kasvattaa kaarta sen omaa ympyrää pitkin — aivan kuten itsenäisen Arc-elementin jatkaminen — sen sijaan, että sitä käsiteltäisiin suorana segmenttinä.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Poistu extend-tilasta |
| `Escape` | Poistu extend-tilasta |

## Tuetut entiteetit

| Entiteetti | Voidaanko jatkaa? |
|--------|----------------|
| Line | Kyllä |
| Arc | Kyllä |
| Ellipse | Kyllä — vain jos se on jo osittainen kaari; täydellisellä ellipsillä ei ole päätepistettä |
| Circle | Ei — aina suljettu muoto ilman päätepistettä |
| Polyline (avoin) | Kyllä |
| Polyline (suljettu) / Rectangle | Ei — aina suljettu muoto ilman päätepistettä |
| Text, Spline, Dimension, Leader | Ei |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Mitä se tekee | Jatkaa entiteetin päätepisteen rajaan | Poistaa entiteetin segmentin |
| Laukaisin | Pidä kohdistinta lähellä päätepistettä jatkaaksesi | Pidä kohdistinta segmentin päällä leikataksesi |
| Tulos | Päätepiste siirtyy ulospäin | Entiteetti jakautuu tai lyhenee |
| Tuetut entiteetit | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
