---
title: ViewportRectangle-kommando — Opret en Viewport i et Layout
description: ViewportRectangle-kommandoen opretter en viewport i et papirlayout ved at klikke to modsatte hjørner. Viewporten viser modelrum-entiteterne i layoutets standardskala.
keywords: [viewport-rektangel, opret viewport, layout-viewport, papirrum-viewport, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Kommandoen `ViewportRectangle` opretter en ny viewport i det aktive papirlayout ved at klikke to modsatte hjørner. Kun tilgængelig i layout-rummet.

## Oprette en viewport

1. Skift til et papirlayout ved hjælp af fanen nederst på skærmen.
2. Skriv `ViewportRectangle` i terminalen eller klik på **Viewport Rectangle**-knappen i værktøjslinjen.
3. **Klik det første hjørne**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
4. **Klik det modsatte hjørne** — viewporten placeres med det samme. Koordinatindtastning fungerer også her.

Den nye viewport viser hele modellen i layoutets standardskala. Brug rullehjulet inden i viewporten for at zoome, eller midterklik-træk for at panorere modelvisningen.

## Koordinatindtastning

Ved hvert hjørnetrin kan du indtaste en eksakt koordinat:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at placere punktet.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning |
| `,` | Lås X og gå til Y-indtastning |
| `Enter` | Bekræft indtastet koordinat |
| `Escape` | Annullér |

## Redigere en viewport

Efter at have placeret en viewport, klik den for at markere den:

- **Træk kanterne eller hjørnerne** for at ændre størrelse.
- **Træk centergrebet** for at flytte den.
- Brug **skalavælgeren** i kontrollinjen til at sætte en eksakt skala (f.eks. 1:50). For at indtaste en skala, der ikke er på listen, skriv den direkte i inputfeltet nederst i rullemenuen — accepterer forholdsformat (`1:200`, `5:1`) eller et almindeligt decimaltal (`0.005`), tryk derefter **Enter**.
- Højreklik en viewport og brug **Lock** for at forhindre utilsigtede ændringer.

## Bemærkninger

- ViewportRectangle er kun tilgængelig, når en papirlayout-fane er aktiv. At køre den i modelrummet viser en fejlmeddelelse og afslutter.
- For at kopiere en eksisterende viewport, brug [ViewportCopy](../viewport-copy/).
