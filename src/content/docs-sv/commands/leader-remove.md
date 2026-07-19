---
title: "Leader−-kommandot — Ta bort en pilspetsarm från en multileader"
description: "Leader−-kommandot tar bort en pilspetsarm från en multileader som har två eller fler. Håll muspekaren nära armen som ska tas bort — den närmaste armen markeras. Dogleg, text och återstående armar bevaras."
keywords: [CAD ta bort leader-arm, leader--kommando, ta bort pil från leader, ta bort multileader-arm, kulmanlab]
group: markup
order: 3
---

# Leader−

`leader-`-kommandot tar bort en pilspetsarm från en befintlig multileader. Textetiketten, dogleg-punkten och alla återstående armar bevaras — endast den valda armen tas bort. En multileader med endast en arm kan inte få sin arm borttagen.

## Ta bort en arm

1. Skriv `leader-` i terminalen.
2. **Klicka på en multileader** som har två eller fler armar. Om den klickade leadern bara har en arm visar terminalen ett felmeddelande och väntar på ett giltigt val.
3. **Flytta markören nära armen** du vill ta bort — den närmaste armen markeras med en indikator.
4. **Klicka** för att ta bort den armen.

Armen tas bort och kommandot förblir aktivt — du kan omedelbart klicka på en annan leader (eller samma) för att ta bort fler armar. Tryck **Enter**, **Space** eller **Escape** för att avsluta.

```
  Före:                     Efter:
  ◄── arm 1                 ◄── arm 1
       \                          \
        ●──── dogleg ──── text     ●──── dogleg ──── text
       /
  arm 2 ──►  ← denna arm borttagen
```

## Hur den närmaste armen bestäms

Kommandot mäter det vinkelräta avståndet från markören till varje arms linjesegment (inklusive segmentet från armens sista punkt till dogleg-punkten). Armen med det minsta avståndet markeras och tas bort vid klick.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `Enter` / `Space` | Avsluta borttagning av armar |
| `Escape` | Avbryt och återställ |

## Anteckningar

- En leader med **endast en arm** är skyddad — du måste lägga till en arm först innan du kan ta bort någon.
- Dogleg-positionen och textinnehållet bevaras alltid oavsett vilken arm som tas bort.

## Relaterade kommandon

| Kommando | Vad det gör |
|---------|-------------|
| [Leader](../leader/) | Skapa en ny multileader från grunden |
| [Leader+](../leader-add/) | Lägg till en arm på en befintlig multileader |
