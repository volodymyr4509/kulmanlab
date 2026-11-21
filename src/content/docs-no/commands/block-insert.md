---
title: "BlockInsert-kommando — Plasser en blokk blant tegningens blokker"
description: "BlockInsert-kommandoen åpner en palett med forhåndsvisninger av tegningens blokker. Velg en, sett skala og rotasjon, og klikk eller skriv et punkt for å plassere den, én gang eller om og om igjen."
keywords: ["sett inn blokk CAD", "blokkpalett CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Kommandoen `SettInnBlokk` åpner en palett med forhåndsvisninger av alle blokker i tegningen og plasserer den du velger. Lag blokker med [Block Create](../block-create/), eller åpne en DXF-fil som har noen.

## Plassere en blokk

1. Skriv `SettInnBlokk` eller klikk **Sett inn blokk** i panelet **Blokker**. Paletten dokkes til venstre med en forhåndsvisningsflis per blokk, tolv per side; pilene under flisene blar.
2. Skriv i **Søk etter blokker** for å begrense flisene etter navn.
3. Sett **Skala** (må være større enn 0) og **Rotasjon** i grader. **Gjenta plassering** er på som standard.
4. Klikk på en blokks flis. Blokken følger markøren: klikk for å plassere den ved basepunktet, eller skriv X,Y for en eksakt posisjon. Når markøren er låst til en vinkel, kan du skrive en lengde.
5. Med **Gjenta plassering** på fortsetter blokken å følge markøren for neste kopi til du trykker **Escape**. Med det av avsluttes kommandoen etter én kopi.

## Greit å vite

- For å slette en blokk klikker du på søppelkassen på flisen og bekrefter. En blokk som har referanser i tegningen kan ikke slettes: flisen sier **I bruk, kan ikke slettes**.
- En tegning uten blokker viser **Tegningen har ingen blokker** i paletten.
- **Escape** lukker paletten når ingenting plasseres. Den er et av de dokkede panelene, som bare vises ett om gangen til venstre.

---

*Relatert: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
