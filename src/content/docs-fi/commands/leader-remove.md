---
title: "Leader−-komento — Poista Nuolenkärkihaara Multileaderista"
description: "Leader−-komento poistaa yhden nuolenkärkihaaran multileaderista, jossa on kaksi tai useampi. Pidä kohdistinta lähellä poistettavaa haaraa — lähin haara korostuu. Dogleg, teksti ja jäljellä olevat haarat säilyvät."
keywords: [CAD poista johtimen haara, leader--komento, poista nuoli johtimesta, poista multileader-haara, kulmanlab]
group: markup
order: 3
---

# Leader−

Komento `leader-` poistaa yhden nuolenkärkihaaran olemassa olevasta multileaderista. Tekstimerkintä, dogleg ja kaikki jäljellä olevat haarat säilyvät — vain valittu haara poistetaan. Multileaderista, jossa on vain yksi haara, ei voida poistaa sen haaraa.

## Haaran poistaminen

1. Kirjoita `leader-` terminaaliin.
2. **Napsauta multileaderia**, jossa on kaksi tai useampi haara. Jos napsautetulla johtimella on vain yksi haara, terminaali näyttää virheen ja odottaa kelvollista valintaa.
3. **Siirrä kohdistin lähelle haaraa**, jonka haluat poistaa — lähin haara korostuu merkillä.
4. **Napsauta** poistaaksesi kyseisen haaran.

Haara poistetaan ja komento pysyy aktiivisena — voit heti napsauttaa toista johdinta (tai samaa) poistaaksesi lisää haaroja. Paina **Enter**, **Space** tai **Escape** viimeistelläksesi.

```
  Ennen:                      Jälkeen:
  ◄── haara 1                 ◄── haara 1
       \                          \
        ●──── dogleg ──── teksti     ●──── dogleg ──── teksti
       /
  haara 2 ──►  ← tämä haara poistettu
```

## Miten lähin haara määritetään

Komento mittaa kohtisuoran etäisyyden kohdistimesta jokaisen haaran viivasegmentteihin (mukaan lukien segmentti viimeisestä haarapisteestä doglegiin). Pienimmän etäisyyden omaava haara korostuu ja poistetaan napsautettaessa.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Lopeta haarojen poistaminen |
| `Escape` | Peruuta ja nollaa |

## Huomautuksia

- Johdin, jossa on **vain yksi haara**, on suojattu — sinun täytyy lisätä haara ensin ennen kuin voit poistaa yhden.
- Doglegin sijainti ja tekstin sisältö säilyvät aina riippumatta siitä, mikä haara poistetaan.

## Liittyvät komennot

| Komento | Mitä se tekee |
|---------|-------------|
| [Leader](../leader/) | Luo uusi multileader alusta |
| [Leader+](../leader-add/) | Lisää haara olemassa olevaan multileaderiin |
