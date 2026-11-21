---
title: "BlockCreate-komento — Lohkon tekeminen kohteista"
description: "BlockCreate-komento tekee valituista kohteista nimetyn lohkon valitsemallasi peruspisteellä ja korvaa ne yhdellä viittauksella siihen. Lohkon voi sitten sijoittaa yhä uudelleen BlockInsertillä."
keywords: ["luo lohko CAD", "lohko kohteista CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

`LuoLohko`-komento tekee **lohkon**: nimetyn kohderyhmän, joka tallennetaan piirustukseen kerran ja sijoitetaan niin usein kuin haluat [Block Insert](../block-insert/) -komennolla. Valitsemistasi kohteista tulee lohko, ja piirustuksessa ne korvataan yhdellä viittauksella siihen, joten ulkonäkö ei muutu.

## Lohkon tekeminen

1. Valitse halutessasi kohteet ensin ja kirjoita sitten `LuoLohko` tai napsauta **Luo lohko** paneelissa **Lohkot**. Avautuu ikkuna, jossa valinta on jo mukana.
2. Kirjoita **Nimi**. Se ei saa olla tyhjä, ei saa sisältää mitään merkeistä `< > / \ " : ; ? * | , =` eikä gravisaksenttia, eikä se saa olla toisen lohkon nimi.
3. Napsauta **Valitse objektit** lisätäksesi tai poistaaksesi kohteita: ikkuna piiloutuu, ja napsautat kohteita tai vedät alueen. Palaa ikkunaan painamalla **Enter** tai **Space**, missä **Objektit** näyttää määrän.
4. Aseta **Peruspiste**, piste jonka mukaan lohko sijoitetaan: kirjoita sen X ja Y tai napsauta **Valitse piste** ja sitten piirtoaluetta (tai kirjoita siellä X,Y). Se alkaa pisteestä 0,0.
5. Napsauta **OK**. Lohko tallennetaan, kohteet väistyvät yhden siihen viittaavan viittauksen tieltä peruspisteessä, ja terminaali kirjaa lohkon nimen ja kohteiden määrän.

## Hyvä tietää

- **OK** pysyy pois käytöstä niin kauan kuin jokin on pielessä, ja kenttien alla oleva viesti kertoo mikä: tyhjä tai käyttökelvoton nimi, jo käytössä oleva nimi tai ei kohteita.
- **Escape** kohteiden tai peruspisteen valinnan aikana palaa ikkunaan lohko ennallaan. **Escape** ikkunassa peruu komennon.
- Lohko tallennetaan piirustuksen mukana ja kirjoitetaan DXF:ään viittauksineen.

---

*Aiheeseen liittyvää: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
