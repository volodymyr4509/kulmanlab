---
title: "Komanda BlockInsert — bloko talpinimas iš brėžinio blokų"
description: "Komanda BlockInsert atidaro brėžinio blokų peržiūrų paletę. Pasirinkite vieną, nustatykite mastelį ir pasukimą, tada spustelėkite arba įveskite tašką, kad jį padėtumėte, vieną kartą arba kartodami."
keywords: ["įterpti bloką CAD", "blokų paletė CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Komanda `ĮterptiBloką` atidaro visų brėžinio blokų peržiūrų paletę ir padeda jūsų pasirinktą. Kurkite blokus komanda [Block Create](../block-create/) arba atidarykite DXF failą, kuriame jų yra.

## Bloko talpinimas

1. Įveskite `ĮterptiBloką` arba spustelėkite **Įterpti bloką** skydelyje **Blokai**. Paletė prisegama kairėje, kiekvienam blokui — peržiūros plytelė, po dvylika puslapyje; rodyklės po plytelėmis vartys puslapius.
2. Rašykite į **Ieškoti blokų**, kad susiaurintumėte plyteles pagal pavadinimą.
3. Nustatykite **Mastelis** (turi būti didesnis nei 0) ir **Pasukimas** laipsniais. **Kartoti įterpimą** pagal numatytuosius nustatymus įjungtas.
4. Spustelėkite bloko plytelę. Blokas seka žymeklį: spustelėkite, kad padėtumėte jį pagal bazės tašką, arba įveskite X,Y tiksliai padėčiai. Kai žymeklis užrakintas kampu, galite įvesti ilgį.
5. Kai **Kartoti įterpimą** įjungtas, blokas toliau seka žymeklį kitai kopijai, kol paspausite **Escape**. Kai išjungtas, komanda baigiasi po vienos kopijos.

## Verta žinoti

- Norėdami ištrinti bloką, spustelėkite šiukšliadėžę jo plytelėje ir patvirtinkite. Bloko, į kurį brėžinyje yra nuorodų, ištrinti negalima: jo plytelė sako **Naudojamas, negalima ištrinti**.
- Brėžinys be blokų paletėje rodo **Šiame brėžinyje nėra blokų**.
- **Escape** uždaro paletę, kai niekas nėra talpinama. Tai vienas iš prisegtų skydelių, iš kurių kairėje vienu metu rodomas tik vienas.

---

*Susiję: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
