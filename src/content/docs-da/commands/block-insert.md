---
title: "BlockInsert-kommando — Placér en blok blandt tegningens blokke"
description: "BlockInsert-kommandoen åbner en palet med forhåndsvisninger af tegningens blokke. Vælg en, indstil skala og rotation, og klik eller skriv et punkt for at placere den, én gang eller igen og igen."
keywords: ["indsæt blok CAD", "blokpalet CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Kommandoen `IndsætBlok` åbner en palet med forhåndsvisninger af alle blokke i tegningen og placerer den, du vælger. Lav blokke med [Block Create](../block-create/), eller åbn en DXF-fil, der har nogle.

## Placér en blok

1. Skriv `IndsætBlok` eller klik på **Indsæt blok** i panelet **Blokke**. Paletten dokkes til venstre med en forhåndsvisningsflise pr. blok, tolv pr. side; pilene under fliserne bladrer.
2. Skriv i **Søg i blokke** for at indsnævre fliserne efter navn.
3. Indstil **Skala** (skal være større end 0) og **Rotation** i grader. **Gentag placering** er slået til som standard.
4. Klik på en bloks flise. Blokken følger markøren: klik for at placere den ved basispunktet, eller skriv X,Y for en præcis position. Når markøren er låst til en vinkel, kan du skrive en længde.
5. Med **Gentag placering** slået til fortsætter blokken med at følge markøren til næste kopi, indtil du trykker **Escape**. Slået fra afsluttes kommandoen efter én kopi.

## Godt at vide

- For at slette en blok klikker du på papirkurven på dens flise og bekræfter. En blok, der har referencer i tegningen, kan ikke slettes: dens flise siger **I brug, kan ikke slettes**.
- En tegning uden blokke viser **Tegningen har ingen blokke** i paletten.
- **Escape** lukker paletten, når intet placeres. Den er et af de dokkede paneler, hvoraf kun ét vises ad gangen til venstre.

---

*Relateret: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
