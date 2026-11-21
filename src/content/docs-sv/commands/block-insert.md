---
title: "BlockInsert-kommando — Placera ett block bland ritningens block"
description: "BlockInsert-kommandot öppnar en palett med förhandsvisningar av ritningens block. Välj ett, ställ in skala och rotation, och klicka eller skriv en punkt för att placera det, en gång eller om och om igen."
keywords: ["infoga block CAD", "blockpalett CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

Kommandot `InfogaBlock` öppnar en palett med förhandsvisningar av alla block i ritningen och placerar det du väljer. Skapa block med [Block Create](../block-create/), eller öppna en DXF-fil som har några.

## Placera ett block

1. Skriv `InfogaBlock` eller klicka på **Infoga block** i panelen **Block**. Paletten dockas till vänster med en förhandsgranskningsbricka per block, tolv per sida; pilarna under brickorna bläddrar.
2. Skriv i **Sök block** för att begränsa brickorna efter namn.
3. Ställ in **Skala** (måste vara större än 0) och **Rotation** i grader. **Upprepa placering** är på som standard.
4. Klicka på ett blocks bricka. Blocket följer markören: klicka för att placera det vid dess baspunkt, eller skriv X,Y för en exakt position. När markören är låst till en vinkel kan du skriva en längd.
5. Med **Upprepa placering** på fortsätter blocket att följa markören för nästa kopia tills du trycker **Escape**. Med det av avslutas kommandot efter en kopia.

## Bra att veta

- För att ta bort ett block, klicka på papperskorgen på dess bricka och bekräfta. Ett block som har referenser i ritningen kan inte tas bort: dess bricka säger **Används, kan inte tas bort**.
- En ritning utan block visar **Ritningen har inga block** i paletten.
- **Escape** stänger paletten när inget placeras. Den är en av de dockade panelerna, av vilka bara en visas åt gången till vänster.

---

*Relaterat: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
