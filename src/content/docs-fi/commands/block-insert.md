---
title: "BlockInsert-komento — Lohkon sijoittaminen piirustuksen lohkoista"
description: "BlockInsert-komento avaa paletin, jossa on piirustuksen lohkojen esikatselut. Valitse yksi, aseta mittakaava ja kierto ja napsauta tai kirjoita piste sijoittaaksesi sen kerran tai toistuvasti."
keywords: ["lisää lohko CAD", "lohkopaletti CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

`LisääLohko`-komento avaa paletin, jossa on piirustuksen kaikkien lohkojen esikatselut, ja sijoittaa valitsemasi. Tee lohkoja [Block Create](../block-create/) -komennolla tai avaa DXF-tiedosto, jossa niitä on.

## Lohkon sijoittaminen

1. Kirjoita `LisääLohko` tai napsauta **Lisää lohko** paneelissa **Lohkot**. Paletti telakoituu vasemmalle, ja jokaisella lohkolla on esikatseluruutu, kaksitoista sivulla; ruutujen alla olevat nuolet selaavat sivuja.
2. Kirjoita kenttään **Hae lohkoja** rajataksesi ruudut nimen mukaan.
3. Aseta **Mittakaava** (oltava suurempi kuin 0) ja **Kierto** asteina. **Toista sijoitus** on oletuksena päällä.
4. Napsauta lohkon ruutua. Lohko seuraa kohdistinta: napsauta sijoittaaksesi sen peruspisteestä tai kirjoita X,Y tarkkaa paikkaa varten. Kun kohdistin on lukittu kulmaan, voit kirjoittaa pituuden.
5. Kun **Toista sijoitus** on päällä, lohko seuraa kohdistinta seuraavaa kopiota varten, kunnes painat **Escape**. Kun se on pois, komento päättyy yhden kopion jälkeen.

## Hyvä tietää

- Poistaaksesi lohkon napsauta ruudun roskakoria ja vahvista. Lohkoa, johon on viittauksia piirustuksessa, ei voi poistaa: sen ruutu sanoo **Käytössä, ei voi poistaa**.
- Piirustus ilman lohkoja näyttää paletissa **Piirustuksessa ei ole lohkoja**.
- **Escape** sulkee paletin, kun mitään ei sijoiteta. Se on yksi telakoiduista paneeleista, joista vasemmalla näkyy kerrallaan vain yksi.

---

*Aiheeseen liittyvää: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
