---
title: Extend-komento — Jatka Viivan Päätä Lähimpään Rajaan
description: Extend-komento jatkaa lähintä päätepistettä viivalle, jonka päällä pidät kohdistinta, lähimpään leikkauspisteeseen toisen entiteetin kanssa. Elävä esikatselu näyttää jatketun viivan ennen napsautusta. Extend toimii vain Line-entiteeteillä ja jättää huomiotta Text-, Spline- ja Multileader-entiteetit rajoina.
keywords: [CAD extend-komento, jatka viivaa CAD, jatka viivaa rajaan, viivan päätepisteen jatkaminen, hover extend -esikatselu, kulmanlab]
group: edit
order: 9
---

# Extend

Komento `extend` jatkaa [Line](../line/)-entiteetin lähintä päätepistettä lähimpään leikkauspisteeseen, jonka se muodostaisi toisen piirustuksen entiteetin kanssa. Pidä kohdistinta lähellä sitä päätä, jota haluat jatkaa — esikatselu näyttää jatketun viivan — napsauta sitten soveltaaksesi.

Extend toimii vain **Line-entiteeteillä**. Rajat, joihin viiva jatkuu, voivat olla mitä tahansa muuta entiteettityyppiä paitsi Text, Mtext, Multileader ja Spline.

## Viivan jatkaminen

1. Kirjoita `extend` terminaaliin tai napsauta **Extend**-painiketta työkalurivillä.
2. **Pidä kohdistinta lähellä viivan toista päätä** — esikatselu näyttää viivan jatkettuna lähimpään rajaan kyseisessä suunnassa.
3. **Napsauta** soveltaaksesi jatkeen.

Komento pysyy aktiivisena jokaisen jatkeen jälkeen, jotta voit jatkaa useita viivoja peräkkäin. Paina **Escape** poistuaksesi.

```
  Ennen:                        Jälkeen:

  ──────           |           ──────────────|
  (lyhyt viiva)     (raja)      (jatkettu rajaan)
```

## Miten päätepiste valitaan

Komento katsoo, kumpaa päätepistettä kohdistin on lähempänä:

- Kohdistin **lähempänä loppupistettä** → loppu jatkuu eteenpäin viivan suunnassa.
- Kohdistin **lähempänä alkupistettä** → alku jatkuu taaksepäin (vastakkaiseen suuntaan).

Säde heitetään valitusta päätepisteestä viivan suunnassa, ja **lähin leikkauspiste** tätä sädettä pitkin minkä tahansa toisen entiteetin kanssa (paitsi itse viiva ja jätetyt tyypit) tulee uudeksi päätepisteeksi.

Jos leikkauspistettä ei löydy siihen suuntaan, esikatselua ei näytetä ja napsauttaminen ei tee mitään.

## Rajapoikkeukset

Seuraavia entiteettityyppejä ei huomioida rajoina — viiva ei jatku niitä kohti:

- Text / Mtext
- Multileader
- Spline

Kaikki muut tyypit (Line, Arc, Circle, Ellipse, Polyline, Dimension) toimivat kelvollisina rajoina.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Escape` | Poistu extend-tilasta |

## Tuetut entiteetit

| Entiteetti | Voidaanko jatkaa? |
|--------|----------------|
| Line | Kyllä |
| Arc, Circle, Ellipse | Ei |
| Polyline / Rectangle | Ei |
| Text, Spline, Dimension, Leader | Ei |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Mitä se tekee | Jatkaa viivan päätepisteen rajaan | Poistaa viivan segmentin |
| Laukaisin | Pidä kohdistinta lähellä päätepistettä jatkaaksesi | Pidä kohdistinta segmentin päällä leikataksesi |
| Tulos | Viivan päätepiste siirtyy ulospäin | Viiva jakautuu tai lyhenee |
| Molemmat | Vain viivat | Vain viivat |
