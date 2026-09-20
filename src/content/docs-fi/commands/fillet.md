---
title: Fillet-komento — Pyöristä Kulma Tangenttikaarella
description: Fillet-komento pyöristää kulman kahden Line-, Arc- tai Polyline-segmentin välillä tangenttikaarella, jolla on määritetty säde. Polylinen oman kulman pyöristäminen lisää kaaren suoraan siihen; pyöristäminen avoimen polylinen yli yhdistää molemmat puolet uudeksi polylineksi.
keywords: [CAD fillet-komento, pyöristä kulma CAD, fillet-kaari, tangenttikaari, polylinen fillet, kaaren fillet, kulmanlab]
group: edit
order: 11
---

# Fillet

Komento `Pyöristä` pyöristää kulman kahden [Line](../line/)-, [Arc](../arc/)- tai [Polyline](../polyline/)-segmentin välillä lisäämällä tangenttikaaren, jolla on annettu säde, ja leikkaa (tai yhdistää) valitut entiteetit takaisin tähän pisteeseen.

Fillet toimii **Line-, Arc- ja Polyline**-entiteeteillä — mukaan lukien polylinen omat suorat ja kaarisegmentit.

## Filletin käyttäminen

1. Kirjoita `Pyöristä` terminaaliin tai napsauta **Fillet**-painiketta työkalurivillä.
2. **Kirjoita fillet-säde** ja paina **Enter**.
3. **Napsauta ensimmäistä viivaa, kaarta tai polylinen segmenttiä** — napsauttamasi osa määrää, kumpi puoli mahdollisesta leikkauspisteestä säilytetään.
4. **Pidä kohdistin toisen entiteetin päällä** — katkoviivainen kaaren esikatselu näyttää tuloksena olevan filletin. Siirrä kohdistin puolelle, jonka haluat säilyttää.
5. **Napsauta** soveltaaksesi.

```
  Ennen:                      Filletin jälkeen (säde r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Puolen valinta leikkaaville entiteeteille

Kun kaksi entiteettiä leikkaavat toisensa, fillet sovelletaan napsautuspisteiden määrittelemään kulmaan — kummankin entiteetin osa **samalla puolella kuin kohdistin** säilytetään.

- Napsauta lähellä ensimmäisen entiteetin toista päätä valitaksesi kyseisen puoliskon.
- Siirrä kohdistin toisen entiteetin haluamallesi puoliskolle — katkoviivainen esikatselu päivittyy elävästi.

## Mitä komento luo

Lopputulos riippuu siitä, mitä valitsit:

- **Kaksi itsenäistä Line/Arc-entiteettiä**, tai mikä tahansa pari ilman avointa polylinjaa: molemmat leikataan takaisin tangenttipisteisiin **T1**/**T2**, ja niiden väliin lisätään uusi Arc-entiteetti.
- **Kaksi saman polylinjan segmenttiä, jotka jakavat kulmakärjen**: ei uutta entiteettiä — filletistä tulee osa itse polylinjaa. Kulmakärki korvataan kahdella tangenttipisteellä, ja niiden välinen kaari tallennetaan kyseisen reunan bulgena — täsmälleen samoin kuin pyöristetty polylinjan kulma kulkee edestakaisin DXF:n kautta.
- **Kaikki muu, mihin liittyy avoin polylinja** — kaksi eri avointa polylinjaa, tai avoin polylinja ja itsenäinen Line/Arc: molemmat yhdistetään **yhdeksi uudeksi polylinjaksi**, jossa kumpikin puoli säilytetään tangenttipisteeseensä asti ja yhdistetään fillet-kaarella yhtenä bulge-segmenttinä lisää, korvaten alkuperäiset entiteetit.

Lisätty tai jatkettu kaari perii nykyiset lineweight-, väri-, taso- ja linetype-asetukset (tai polylinjan omat, kun se sulautuu siihen).

## Kulmat ilman todellista kulmaa pyöristettäväksi

Jos kaksi valittua segmenttiä kohtaavat jo tangentiaalisesti jaetussa kärjessä — suora polylinjan kulma, tai viiva joka liukuu sulavasti tangentiaaliseen jatkokaarisegmenttiin — ei ole todellista kulmaa, jonka ympyrä voisi pyöristää. Fillet havaitsee tämän ja kieltäytyy viestillä `cannot fillet: no tangent circle fits there` sen sijaan, että piirtäisi ei-toivotun silmukan.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero säteen arvoon |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` / `Space` | Vahvista kirjoitettu säde ja siirry entiteetin valintaan |
| `Escape` | Peruuta ja nollaa |

## Tuetut entiteetit

| Entiteetti | Tuettu |
|--------|-----------|
| Line | Kyllä |
| Arc | Kyllä |
| Polyline (suora tai kaarisegmentti) | Kyllä |
| Circle, Ellipse | Ei |
| Text, Spline, Dimension, Leader | Ei |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Kulman tyyppi | Pyöristetty kaari | Suora leikkaus |
| Syöte | Yksi säde | Kaksi etäisyyttä (d1, d2) |
| Lisätty entiteetti | Arc | Line |
| Tuetut entiteetit | Lines, Arcs ja Polylines (suorat tai kaarisegmentit) | Lines ja Polylines (vain suorat segmentit) |
