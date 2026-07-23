---
title: Chamfer-komento — Leikkaa Suora Kulma Kahden Viivan Välille
description: Chamfer-komento yhdistää kaksi Line- tai Polyline-entiteettiä suoralla diagonaalileikkauksella. Määrität kaksi etäisyyttä — yhden kutakin entiteettiä pitkin — ja komento leikkaa molemmat näihin pisteisiin ja lisää yhdistävän viivan.
keywords: [CAD chamfer-komento, leikkaa viiva CAD, diagonaalinen kulmaleikkaus, viistä kulma CAD, kulmanlab]
group: edit
order: 12
---

# Chamfer

Komento `chamfer` leikkaa suoran diagonaalisen kulman kahden [Line](../line/)- tai [Polyline](../polyline/)-entiteetin välille. Määrität, kuinka pitkälle taaksepäin kutakin entiteettiä pitkin leikataan (d1 ja d2), ja komento leikkaa molemmat entiteetit näihin pisteisiin ja lisää yhdistävän viivan niiden välille.

Yhtäläisten etäisyyksien käyttö tuottaa symmetrisen 45°:n leikkauksen; erilaiset etäisyydet tuottavat epäsymmetrisen viisteen.

Chamfer toimii **Line- ja Polyline**-entiteeteillä.

## Chamferin käyttäminen

1. Kirjoita `chamfer` terminaaliin tai napsauta **Chamfer**-painiketta työkalurivillä.
2. **Kirjoita ensimmäinen chamfer-etäisyys** (d1 — etäisyys ensimmäistä entiteettiä pitkin) ja paina **Enter**.
3. **Kirjoita toinen chamfer-etäisyys** (d2 — etäisyys toista entiteettiä pitkin) ja paina **Enter**.
4. **Napsauta ensimmäistä entiteettiä** — napsauttamasi osa määrää, kumpi puoli mahdollisesta leikkauspisteestä säilytetään.
5. **Pidä kohdistin toisen entiteetin päällä** — katkoviivainen esikatselu näyttää tuloksena olevan chamfer-leikkauksen. Siirrä kohdistin puolelle, jonka haluat säilyttää.
6. **Napsauta** soveltaaksesi. Molemmat entiteetit leikataan ja chamfer-viiva lisätään.

```
  Ennen (d1=5, d2=8):          Jälkeen:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Puolen valinta

Kun kaksi viivaa leikkaavat toisensa, chamfer sovelletaan napsautuspisteiden määrittelemään kulmaan — kummankin entiteetin osa **samalla puolella kuin kohdistin** säilytetään.

- Napsauta lähellä ensimmäisen entiteetin toista päätä valitaksesi kyseisen puoliskon.
- Siirrä kohdistin toisen entiteetin haluamallesi puoliskolle — katkoviivainen esikatselu päivittyy elävästi.

Polylineille napsautuspiste määrää, mikä polylinjen **segmentti** osallistuu, ja lähin kärki leikkauspuolella on se, joka leikataan.

## Mitä komento luo

- Ensimmäisen entiteetin leikkauspistettä lähinnä oleva päätepiste (tai polylinjen kärki) siirretään pisteeseen **T1**, joka sijaitsee d1:n etäisyydellä ensimmäistä entiteettiä pitkin leikkauspisteestä.
- Toisen entiteetin leikkauspistettä lähinnä oleva päätepiste (tai polylinjen kärki) siirretään pisteeseen **T2**, joka sijaitsee d2:n etäisyydellä toista entiteettiä pitkin leikkauspisteestä.
- Uusi Line-entiteetti lisätään pisteestä **T1** pisteeseen **T2**.

Lisätty viiva perii nykyiset lineweight-, väri-, taso- ja linetype-asetukset.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero nykyiseen etäisyysarvoon |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu etäisyys ja siirry eteenpäin |
| `Escape` | Peruuta ja nollaa |

## Tuetut entiteetit

| Entiteetti | Tuettu |
|--------|-----------|
| Line | Kyllä |
| Polyline / Rectangle | Kyllä |
| Arc, Circle, Ellipse | Ei |
| Text, Spline, Dimension, Leader | Ei |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Kulman tyyppi | Suora leikkaus | Pyöristetty kaari |
| Syöte | Kaksi etäisyyttä (d1, d2) | Yksi säde |
| Lisätty entiteetti | Line | Arc |
| Tuetut entiteetit | Lines ja Polylines | Vain Lines |
