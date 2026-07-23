---
title: Fillet-komento — Pyöristä Kulma Kahden Viivan Välillä
description: Fillet-komento yhdistää kaksi Line-entiteettiä tangenttikaarella, jolla on määritetty säde, ja leikkaa kummankin viivan takaisin tangenttipisteeseen. Katkoviivainen kaaren esikatselu auttaa valitsemaan oikean kulman ennen napsautusta.
keywords: [CAD fillet-komento, pyöristä kulma CAD, fillet-kaari, tangenttikaari kaksi viivaa, kulmanlab]
group: edit
order: 11
---

# Fillet

Komento `fillet` pyöristää kulman kahden [Line](../line/)-entiteetin välillä lisäämällä tangenttikaaren, jolla on annettu säde, ja leikkaamalla kummankin viivan takaisin pisteeseen, jossa kaari alkaa. Tuloksena on sileä, pyöristetty kulma, joka yhdistää molemmat viivat.

Fillet toimii vain **Line-entiteeteillä**.

## Filletin käyttäminen

1. Kirjoita `fillet` terminaaliin tai napsauta **Fillet**-painiketta työkalurivillä.
2. **Kirjoita fillet-säde** ja paina **Enter**.
3. **Napsauta ensimmäistä viivaa** — napsauttamasi osa määrää, kumpi puoli mahdollisesta leikkauspisteestä säilytetään.
4. **Pidä kohdistin toisen viivan päällä** — katkoviivainen kaaren esikatselu näyttää tuloksena olevan filletin. Siirrä kohdistin puolelle, jonka haluat säilyttää.
5. **Napsauta** soveltaaksesi. Molemmat viivat leikataan ja kaari lisätään.

```
  Ennen:                      Filletin jälkeen (säde r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Puolen valinta leikkaaville viivoille

Kun kaksi viivaa leikkaavat toisensa, fillet sovelletaan napsautuspisteiden määrittelemään kulmaan — kummankin viivan osa **samalla puolella kuin kohdistin** säilytetään.

- Napsauta lähellä ensimmäisen viivan toista päätä valitaksesi kyseisen puoliskon.
- Siirrä kohdistin toisen viivan haluamallesi puoliskolle — katkoviivainen esikatselu päivittyy elävästi.

## Mitä komento luo

- Ensimmäisen viivan leikkauspistettä lähinnä oleva päätepiste siirretään tangenttipisteeseen **T1**.
- Toisen viivan leikkauspistettä lähinnä oleva päätepiste siirretään tangenttipisteeseen **T2**.
- Uusi Arc-entiteetti lisätään pisteestä **T1** pisteeseen **T2**, tangenttina molemmille viivoille.

Lisätty kaari perii nykyiset lineweight-, väri-, taso- ja linetype-asetukset.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero säteen arvoon |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu säde ja siirry viivan valintaan |
| `Escape` | Peruuta ja nollaa |

## Tuetut entiteetit

| Entiteetti | Tuettu |
|--------|-----------|
| Line | Kyllä — sekä ensimmäisenä että toisena entiteettinä |
| Arc, Circle, Ellipse, Polyline | Ei |
| Text, Spline, Dimension, Leader | Ei |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Kulman tyyppi | Pyöristetty kaari | Suora leikkaus |
| Syöte | Yksi säde | Kaksi etäisyyttä (d1, d2) |
| Lisätty entiteetti | Arc | Line |
| Tuetut entiteetit | Vain Lines | Lines ja Polylines |
